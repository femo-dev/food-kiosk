import { Category } from "@/src/generated/prisma/client"
import Image from "next/image"
import Link from "next/link"

type CategoryIconProps = {
  category: Category
}

export default function CategoryIcon({category}: CategoryIconProps) {
  return (
    <div className={`flex items-center gap-4 w-full border-t border-gray-200 p-3 last-of-type:bordere-b`}>
      <div className="relative size-16">
        <Image
          src={`/icon_${category.slug}.svg`}
          alt={`Category's Image: ${category.name}`}
          fill
        />
      </div>
      {/* <p className="text-lg font-bold">{category.name}</p> */}
      <Link
        className="text-xl font-bold"
        href={`/order/${category.slug}`}
      >
        {category.name}
      </Link>
    </div>
  )
}