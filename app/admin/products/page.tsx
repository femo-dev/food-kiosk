import ProductsTable from "@/components/products/ProductsTable";
import Heading from "@/components/ui/Heading";
import { prisma } from "@/src/lib/prisma";

async function getProducts(){
  const products = await prisma.product.findMany();

  return products;
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <>
      <Heading>Manage Products</Heading>

      <ProductsTable 
        products={products}
      />
    </>
  )
}