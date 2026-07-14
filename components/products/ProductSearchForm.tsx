
"use client";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { SearchSchema } from "@/src/schema";

export default function ProductSearchForm() {
  const router = useRouter();
  const handleSearchForm = (formData: FormData) => {
    const data = {
      search: formData.get('search')
    }

    const result = SearchSchema.safeParse(data);

    if (!result.success) {
      result.error.issues.forEach(issue => {
        toast.error(issue.message)
      });

      return;
    }

    router.push(`/admin/products/search?search=${result.data.search}`);
  }

  return (
    <form
      className="flex item-center"
      action={handleSearchForm}
    >
      <input
        type="text"
        placeholder="Search products..."
        className="p-2 place-holder-gray-400 w-full h-14"
        name="search"
      />

      <input
        type="submit"
        value="Search"
        className="bg-indigo-600 uppercase text-white cursor-pointer px-2 h-14"
      />
    </form>
  )
}
