import ProductsPagination from "@/components/products/ProductsPagination";
import ProductsTable from "@/components/products/ProductsTable";
import Heading from "@/components/ui/Heading";
import { prisma } from "@/src/lib/prisma";

async function productsCount() {
  return await prisma.product.count();
}

async function getProducts(page: number, pageSize: number){
  const skip = (page - 1) * pageSize;
  const products = await prisma.product.findMany({
    take: pageSize,
    skip,
    include: {
      category: true
    }
  });

  return products;
}

export type ProductsWithCategory = Awaited<ReturnType<typeof getProducts>>;

export default async function ProductsPage({searchParams}: { searchParams: { page: string }}) {
  const page = +searchParams.page || 1;
  const pageSize = 20;
  const productsData = getProducts(page, pageSize);
  const totalProductsData = productsCount();
  const [products, totalProducts] = await Promise.all([productsData, totalProductsData]);
  const totalPages = Math.ceil(totalProducts / pageSize);

  return (
    <>
      <Heading>Manage Products</Heading>

      <ProductsTable 
        products={products}
      />

      <ProductsPagination 
        page={page}
        totalPages={totalPages}
      />
    </>
  )
}