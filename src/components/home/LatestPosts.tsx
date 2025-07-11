import NextLink from "next/link";
import { PostCard } from "@/components/blog/PostCard";
import { Post } from "@/types/blog";
import { Clock, ArrowRight } from "lucide-react";

interface LatestPostsProps {
  posts: Post[];
}

export const LatestPosts = ({ posts }: LatestPostsProps) => {
  return (
    <section id="latest-posts" className="mb-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg">
            <Clock className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
              Latest Articles
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Fresh insights and updates
            </p>
          </div>
        </div>

        <NextLink
          href="/blog"
          className="group px-6 py-3 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 text-blue-700 dark:text-blue-300 hover:from-blue-100 hover:to-cyan-100 dark:hover:from-blue-900/50 dark:hover:to-cyan-900/50 transition-all duration-300 font-medium flex items-center gap-2"
        >
          View All
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </NextLink>
      </div>

      <div className="grid gap-8">
        {posts.map((post, index) => (
          <div
            key={index}
            className="group transform hover:translate-x-2 transition-all duration-300"
          >
            <PostCard {...post} layout="horizontal" />
          </div>
        ))}
      </div>
    </section>
  );
};
