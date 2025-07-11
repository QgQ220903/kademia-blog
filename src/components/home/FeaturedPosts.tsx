import NextLink from "next/link";
import { PostCard } from "@/components/blog/PostCard";
import { Post } from "@/types/blog"; // Adjust the import path as necessary
import { Star, TrendingUp } from "lucide-react";

interface FeaturedPostsProps {
  posts: Post[];
}

export const FeaturedPosts = ({ posts }: FeaturedPostsProps) => {
  return (
    <section id="featured-posts" className="mb-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-r from-violet-600 to-purple-600 rounded-lg">
            <Star className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
              Featured Articles
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Handpicked content just for you
            </p>
          </div>
        </div>

        <NextLink
          href="/blog"
          className="group px-6 py-3 rounded-xl bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-900/30 dark:to-purple-900/30 text-violet-700 dark:text-violet-300 hover:from-violet-100 hover:to-purple-100 dark:hover:from-violet-900/50 dark:hover:to-purple-900/50 transition-all duration-300 font-medium flex items-center gap-2"
        >
          View All
          <TrendingUp className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </NextLink>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => (
          <div
            key={index}
            className="group transform hover:-translate-y-2 transition-all duration-300"
          >
            <PostCard {...post} featured />
          </div>
        ))}
      </div>
    </section>
  );
};
