import { Category } from "@/types/blog";
import NextLink from "next/link";

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: string;
}

export const CategoryFilter = ({
  categories,
  selectedCategory,
}: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <NextLink
          key={category.slug}
          href={
            category.slug === "all"
              ? "/blog"
              : `/blog?category=${category.slug}`
          }
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            selectedCategory === category.slug
              ? "bg-violet-600 text-white"
              : "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
          }`}
        >
          {category.name} ({category.count})
        </NextLink>
      ))}
    </div>
  );
};
