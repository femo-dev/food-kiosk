import { prisma } from "@/src/lib/prisma";
import { notFound } from "next/navigation";

async function getProductById(id: number) {
  const product = await prisma.product.findUnique({
    where: {
      id
    }
  });

  if (!product) {
    notFound();
  }

  return product;
}
export default async function EditProductPage({params}: {params: {id: string}}) {
  const { id: pageParam } = await params;
  const productId = parseInt(pageParam, 10);
  const product = await getProductById(productId);

  return (
    <div>Edit Product Page</div>
  )
}
