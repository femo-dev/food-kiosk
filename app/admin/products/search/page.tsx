import { prisma } from "@/src/lib/prisma";
import ProductSearchForm from "@/components/products/ProductSearchForm";
import ProductsTable from "@/components/products/ProductsTable";
import Heading from "@/components/ui/Heading";

async function searchProducts(searchTerm: string){
  const products = await prisma.product.findMany({
    where: {
      name: {
        contains: searchTerm,
        mode: 'insensitive'
      }
    },
    include: {
      category: true,
    }
  });

  return products;
}

export default async function SearchPage({searchParams}: { searchParams: Promise<{ search?: string }>}) {
  const { search: searchParam } = await searchParams;
  const products = await searchProducts(searchParam || '');

  return (
    <>
      <Heading>
        Search Results: {searchParam}
      </Heading>

      <div className="flex flex-col lg:flex-row lg:justify-end gap-5">
        <ProductSearchForm />
      </div>

      {products.length ? (
        <ProductsTable 
          products={products} />
      ) : (
        <p className="text-center text-lg mt-10">
          No products found for "{searchParam}"
        </p>
      )}
    </>
  )
}
