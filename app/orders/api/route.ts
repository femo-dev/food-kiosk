import { prisma } from "@/src/lib/prisma";

export async function GET() {
  const orders = await prisma.order.findMany({
    take: 5,
    where: {
      orderRedyAt: {
        not: null
      }
    },
    orderBy: {
      orderRedyAt: "desc"
    },
    include: {
      orderProducts: {
        include: {
          product: true
        }
      }
    }
  });

  return new Response(JSON.stringify(orders));
}