import Image from "next/image";
import Link from "next/link";

export function PostCard({
  title,
  description,
  image,
  href = "#",
  date,
  readTime,
  category,
  featured = false,
  layout = "vertical", // 'vertical' or 'horizontal'
}: {
  title: string;
  description: string;
  image: string;
  href?: string;
  date?: string;
  readTime?: string;
  category?: string;
  featured?: boolean;
  layout?: "vertical" | "horizontal";
}) {
  return (
    <Link href={href}>
      <div
        className={`group rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:-translate-y-1 ${
          layout === "horizontal"
            ? "flex flex-col md:flex-row h-full"
            : "flex flex-col h-full"
        } ${featured ? "ring-2 ring-violet-500 dark:ring-violet-400" : ""}`}
      >
        {/* Image Container */}
        <div
          className={`relative ${
            layout === "horizontal"
              ? "md:w-1/3 aspect-[16/9] md:aspect-auto"
              : "aspect-[16/9] w-full"
          }`}
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes={
              layout === "horizontal"
                ? "(max-width: 768px) 100vw, 33vw"
                : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            }
            priority={featured}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 to-transparent" />
          {featured && (
            <div className="absolute top-3 left-3 bg-violet-600 dark:bg-violet-400 text-white text-xs font-bold px-2 py-1 rounded">
              Featured
            </div>
          )}
        </div>

        {/* Content */}
        <div
          className={`p-5 flex-1 flex flex-col ${
            layout === "horizontal" ? "md:w-2/3" : ""
          }`}
        >
          {category && (
            <span className="inline-block mb-2 text-xs font-semibold text-violet-600 dark:text-violet-400">
              {category}
            </span>
          )}
          <h3
            className={`font-bold ${
              layout === "horizontal" ? "text-xl" : "text-lg md:text-xl"
            } mb-3 text-gray-800 dark:text-white line-clamp-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors`}
          >
            {title}
          </h3>
          <p
            className={`text-gray-600 dark:text-gray-300 ${
              layout === "horizontal" ? "text-base" : "text-sm md:text-base"
            } line-clamp-3 mb-4 flex-1`}
          >
            {description}
          </p>

          {/* Meta information */}
          {(date || readTime) && (
            <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mb-4 space-x-3">
              {date && <span>{date}</span>}
              {readTime && (
                <>
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  <span>{readTime}</span>
                </>
              )}
            </div>
          )}

          {/* Read More Link */}
          <div className="mt-auto flex items-center text-sm font-medium text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 transition-colors">
            Read more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
