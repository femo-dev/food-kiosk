import { prisma } from "@/src/lib/prisma";

export async function GET() {
  const orders = await prisma.order.findMany({
    where: {
      status: false
    },
    include: {
      orderProducts: {
        include: {
          product: true
        }
      }
    }
  });

  return new Response(JSON.stringify(orders),  { status: 200 });
}

export async function POST() {
  
}

export async function PUT() {
  
}

export async function DELETE() {
  
}

export async function PATCH() {
  
}