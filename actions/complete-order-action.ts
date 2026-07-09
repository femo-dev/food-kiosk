"use server"
import { revalidatePath } from "next/cache"
import { prisma } from "@/src/lib/prisma";
import { OrderIdSchema } from "@/src/schema";

export async function completeOrder(formData: FormData) {
  const data = {
    orderId: formData.get("order_id")
  };

  const result = OrderIdSchema.safeParse(data);

  if (!result.success) {
    console.log("Validation error:", result.error);
    return;
  }

  const { orderId } = result.data;

  try {
    await prisma.order.update({
      where: {
        id: orderId,
      },
      data: {
        status: true,
        orderRedyAt: new Date(Date.now())
      }
    });

    revalidatePath("/admin/orders");
  } catch (error) {
    console.log("Error at completeOrder()", error)
  }
}