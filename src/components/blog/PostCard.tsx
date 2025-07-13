import { Post } from "@/types/blog";
import NextLink from "next/link";
import Image from "next/image";

interface PostCardProps {
  post: Post;
}

export const PostCard = ({ post }: PostCardProps) => {
  return (
    <NextLink
      href={`/blog/${post.slug}`}
      className="group block h-full rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
    >
      <div className="relative h-48 w-full">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {post.featured && (
          <span className="absolute top-4 left-4 bg-violet-600 text-white text-xs px-2 py-1 rounded-full">
            Nổi bật
          </span>
        )}
      </div>
      <div className="p-6">
        <span className="inline-block px-3 py-1 text-xs font-medium bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 rounded-full mb-2">
          {post.category}
        </span>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
          {post.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {post.description}
        </p>
        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
          <span>{post.date}</span>
          <span>{post.readTime}</span>
        </div>
      </div>
    </NextLink>
  );
};
