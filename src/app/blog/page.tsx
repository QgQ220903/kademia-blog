import { dummyPosts, dummyCategories } from "@/data/blog";
import { PostCard } from "@/components/blog/PostCard";
import { CategoryFilter } from "@/components/blog/CategoryFilter";
import { Pagination } from "@/components/blog/Pagination";
import { SearchBar } from "@/components/blog/SearchBar";
export default function BlogPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const currentPage = Number(searchParams.page) || 1;
  const selectedCategory = searchParams.category?.toString() || "all";
  const searchQuery = searchParams.search?.toString() || "";
  const postsPerPage = 6;

  // Filter logic
  let filteredPosts = dummyPosts;

  if (selectedCategory !== "all") {
    filteredPosts = filteredPosts.filter(
      (post) => post.category.toLowerCase() === selectedCategory
    );
  }

  if (searchQuery) {
    filteredPosts = filteredPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  // Pagination logic
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const currentPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Blog
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Những bài viết mới nhất về công nghệ, phát triển web và nhiều hơn
            nữa
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <CategoryFilter
              categories={dummyCategories}
              selectedCategory={selectedCategory}
            />
            <SearchBar />
          </div>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>

        {/* Empty state */}
        {currentPosts.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
              Không tìm thấy bài viết phù hợp
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Hãy thử tìm kiếm với từ khóa khác hoặc chọn danh mục khác
            </p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <Pagination totalPages={totalPages} currentPage={currentPage} />
        )}
      </div>
    </div>
  );
}
