import NextLink from "next/link";
import { Category } from "@/types/blog";
import { FolderOpen, ChevronRight } from "lucide-react";

interface CategoriesCardProps {
  categories: Category[];
}

export const CategoriesCard = ({ categories }: CategoriesCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-8 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg">
          <FolderOpen className="w-5 h-5 text-white" />
        </div>
        <h3 className="text-xl font-bold text-gray-800 dark:text-white">
          Categories
        </h3>
      </div>

      <ul className="space-y-2">
        {categories.map((category) => (
          <li key={category.name}>
            <NextLink
              href={`/blog/category/${category.name
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
              className="group flex justify-between items-center py-3 px-4 rounded-xl hover:bg-gradient-to-r hover:from-violet-50 hover:to-purple-50 dark:hover:from-violet-900/20 dark:hover:to-purple-900/20 transition-all duration-300 hover:shadow-md"
            >
              <span className="text-gray-700 dark:text-gray-300 font-medium group-hover:text-violet-700 dark:group-hover:text-violet-300">
                {category.name}
              </span>
              <div className="flex items-center gap-2">
                <span className="bg-gradient-to-r from-violet-100 to-purple-100 dark:from-violet-900/30 dark:to-purple-900/30 text-violet-800 dark:text-violet-300 text-xs font-bold px-3 py-1 rounded-full">
                  {category.count}
                </span>
                <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-violet-600 group-hover:translate-x-1 transition-all" />
              </div>
            </NextLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
