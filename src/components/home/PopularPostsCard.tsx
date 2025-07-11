import NextLink from "next/link";
import { PopularPost } from "@/types/blog";
import { TrendingUp, Eye } from "lucide-react";

interface PopularPostsCardProps {
  posts: PopularPost[];
}

export const PopularPostsCard = ({ posts }: PopularPostsCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg">
          <TrendingUp className="w-5 h-5 text-white" />
        </div>
        <h3 className="text-xl font-bold text-gray-800 dark:text-white">
          Popular Posts
        </h3>
      </div>

      <ul className="space-y-4">
        {posts.map((post, index) => (
          <li key={index}>
            <NextLink
              href={post.slug || "#"}
              className="group flex items-start gap-4 p-3 rounded-xl hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 dark:hover:from-orange-900/20 dark:hover:to-red-900/20 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="flex-grow min-w-0">
                <h4 className="font-semibold text-gray-800 dark:text-white group-hover:text-orange-700 dark:group-hover:text-orange-300 transition-colors line-clamp-2 mb-1">
                  {post.title}
                </h4>
                <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                  <Eye className="w-4 h-4" />
                  <span>{post.views} views</span>
                </div>
              </div>
            </NextLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
