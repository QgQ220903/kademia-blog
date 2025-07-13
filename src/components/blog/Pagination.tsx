import NextLink from "next/link";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
}

export const Pagination = ({ totalPages, currentPage }: PaginationProps) => {
  return (
    <div className="flex justify-center gap-2 mt-8">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <NextLink
          key={page}
          href={`/blog?page=${page}`}
          className={`w-10 h-10 flex items-center justify-center rounded-full ${
            currentPage === page
              ? "bg-violet-600 text-white"
              : "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
          }`}
        >
          {page}
        </NextLink>
      ))}
    </div>
  );
};
