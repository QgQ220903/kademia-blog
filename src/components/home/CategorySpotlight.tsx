import { PostCard } from "@/components/blog/PostCard";
import { Post } from "@/types/blog";
import { Brain, Zap } from "lucide-react";

interface CategorySpotlightProps {
  category: string;
  posts: Post[];
}

export const CategorySpotlight = ({
  category,
  posts,
}: CategorySpotlightProps) => {
  return (
    <section id="category-spotlight" className="mb-20">
      <div className="flex items-center gap-4 mb-10">
        <div className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl">
          <Brain className="w-7 h-7 text-white" />
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
            Category Spotlight
          </h2>
          <div className="flex items-center gap-2 mt-2">
            <Zap className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            <span className="text-xl font-semibold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
              {category}
            </span>
          </div>
        </div>
      </div>

      <div className="relative">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-50 via-pink-50 to-purple-50 dark:from-purple-900/10 dark:via-pink-900/10 dark:to-purple-900/10 rounded-2xl -z-10" />

        <div className="grid gap-8 sm:grid-cols-2 p-8">
          {posts.map((post, index) => (
            <div
              key={index}
              className="group transform hover:scale-105 transition-all duration-300"
            >
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
