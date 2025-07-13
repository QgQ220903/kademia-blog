import { dummyPosts } from "@/data/blog";
import { notFound } from "next/navigation";
import Image from "next/image";

interface BlogPostProps {
  params: {
    slug: string;
  };
}

export default function BlogPost({ params }: BlogPostProps) {
  const post = dummyPosts.find((post) => post.slug === params.slug);

  if (!post) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="prose dark:prose-invert max-w-none">
          <header className="mb-12">
            <span className="inline-block px-3 py-1 text-sm font-medium bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 rounded-full mb-4">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 text-sm">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
              {post.views && (
                <>
                  <span>•</span>
                  <span>{post.views} lượt xem</span>
                </>
              )}
            </div>
          </header>

          <div className="relative aspect-video rounded-xl overflow-hidden mb-8">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="content">
            {/* Nội dung bài viết - có thể thay bằng Markdown/Contentlayer */}
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              {post.description}
            </p>
            {/* Thêm nội dung chi tiết tại đây */}
          </div>
        </article>
      </div>
    </div>
  );
}
