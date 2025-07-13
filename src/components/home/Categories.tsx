import { Category } from "@/types/blog";
import NextLink from "next/link";
import { Folder } from "lucide-react";

interface CategoriesProps {
  categories: Category[];
}

export const Categories = ({ categories }: CategoriesProps) => {
  return (
    <section id="categories" className="mb-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-12">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-gradient-to-r from-violet-600 to-purple-600 rounded-xl">
            <Folder className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
              Browse Categories
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Explore our curated topics
            </p>
          </div>
        </div>

        <NextLink
          href="/categories"
          className="text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 font-medium flex items-center gap-1 transition-colors"
        >
          View all categories
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </NextLink>
      </div>

      <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
        {categories.map((category) => (
          <NextLink
            key={category.slug}
            href={category.slug || "#"}
            className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-900 p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-800 hover:border-violet-300 dark:hover:border-violet-500"
          >
            {/* Gradient background on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet-50/0 to-purple-50/0 dark:from-violet-900/0 dark:to-purple-900/0 group-hover:from-violet-50/30 group-hover:to-purple-50/30 dark:group-hover:from-violet-900/10 dark:group-hover:to-purple-900/10 transition-all duration-500" />

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 bg-violet-100 dark:bg-violet-900/30 rounded-lg text-violet-600 dark:text-violet-300 group-hover:bg-violet-200 dark:group-hover:bg-violet-800/50 transition-colors">
                  <Folder className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium text-violet-600 dark:text-violet-400 px-2 py-1 rounded-full bg-violet-50 dark:bg-violet-900/20">
                  {category.count} {category.count === 1 ? "post" : "posts"}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-gray-800 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-300">
                {category.name}
              </h3>

              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-6 h-6 rounded-full bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center text-violet-600 dark:text-violet-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </NextLink>
        ))}
      </div>
    </section>
  );
};
