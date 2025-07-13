import NextLink from "next/link";
import { PostCard } from "@/components/blog/PostCard";
import { Post } from "@/types/blog";
import { Star, ArrowRight } from "lucide-react";

interface FeaturedPostsProps {
  posts: Post[];
}
export const FeaturedPosts = ({ posts }: FeaturedPostsProps) => {
  return (
    <section id="featured-posts" className="py-16">
      <div className="container mx-auto px-4">
        {/* Header section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-r from-violet-600 to-purple-600 rounded-lg">
                <Star className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm font-medium text-violet-600 dark:text-violet-400">
                FEATURED CONTENT
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Discover Our Best Articles
            </h2>
          </div>

          <NextLink
            href="/blog"
            className="flex items-center gap-1 text-violet-600 dark:text-violet-400 hover:text-violet-800 dark:hover:text-violet-300 font-medium transition-colors"
          >
            View all articles
            <ArrowRight className="w-4 h-4 mt-0.5" />
          </NextLink>
        </div>

        {/* Posts grid - điều chỉnh grid layout cho 6 bài viết */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <div
              key={post.slug}
              className="group relative overflow-hidden rounded-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
              <PostCard post={post} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
