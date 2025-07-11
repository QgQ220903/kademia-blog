import NextLink from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative text-center mb-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-violet-50 via-white to-violet-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 -z-10" />
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-violet-200 dark:bg-violet-900/30 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-blue-200 dark:bg-blue-900/30 rounded-full blur-3xl opacity-20" />

      {/* Content */}
      <div className="relative z-10 pt-16 pb-20">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Sparkles className="w-6 h-6 text-violet-600 dark:text-violet-400" />
          <span className="text-sm font-medium text-violet-600 dark:text-violet-400 uppercase tracking-wider">
            Welcome to the Future
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-gray-900 dark:text-white">
          Welcome to{" "}
          <span className="relative">
            <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 dark:from-violet-400 dark:via-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
              TechInsights
            </span>
            <div className="absolute -bottom-2 left-0 right-0 h-2 bg-gradient-to-r from-violet-600/20 via-purple-600/20 to-blue-600/20 blur-sm" />
          </span>
        </h1>

        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
          Your premier destination for cutting-edge technology insights,
          automation strategies, and digital transformation guides that drive
          innovation forward.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <NextLink
            href="/blog"
            className="group px-8 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2"
          >
            Browse Articles
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </NextLink>

          <NextLink
            href="/about"
            className="group px-8 py-4 rounded-xl border-2 border-violet-600 dark:border-violet-400 text-violet-600 dark:text-violet-400 hover:bg-violet-600 hover:text-white dark:hover:bg-violet-400 dark:hover:text-gray-900 transition-all duration-300 font-medium"
          >
            Learn About Us
          </NextLink>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="text-center">
            <div className="text-2xl font-bold text-violet-600 dark:text-violet-400">
              50+
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Articles
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-violet-600 dark:text-violet-400">
              10k+
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Readers
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-violet-600 dark:text-violet-400">
              5
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Categories
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-violet-600 dark:text-violet-400">
              Weekly
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Updates
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
