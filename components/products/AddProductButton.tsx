"use client";

import { Product } from "@prisma/client";
import { useStore } from "@/src/store";

type AddProductButtonProps = {
  product: Product
}

export default function AddProductButton({product}: AddProductButtonProps) {
  const addToOrder = useStore((state) => state.addToOrder);

  return (
      <button
          type="button"
          className="mt-5 w-full bg-indigo-600 hover:bg-indigo-800 text-white p-3 font-bold text-lg transition uppercase cursor-pointer"
          onClick={() => addToOrder(product)}
        >
          Add to order
      </button>
  )
}
