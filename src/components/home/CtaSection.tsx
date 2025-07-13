import NextLink from "next/link";
import { Rocket, ArrowRight } from "lucide-react";

export const CtaSection = () => {
  return (
    <section className="relative py-16 md:py-24 bg-white dark:bg-gray-900 overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* Corner tech elements */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-violet-400/30 dark:border-violet-600/30" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-violet-400/30 dark:border-violet-600/30" />

      {/* Floating dots */}
      <div className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-violet-400/20 dark:bg-violet-600/20" />
      <div className="absolute bottom-1/3 right-1/4 w-2 h-2 rounded-full bg-purple-400/20 dark:bg-purple-600/20" />
      <div className="absolute top-1/3 right-1/3 w-4 h-4 rounded-full bg-blue-400/20 dark:bg-blue-600/20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center px-6 py-3 bg-violet-100 dark:bg-violet-900/30 rounded-full mb-8">
          <Rocket className="w-5 h-5 text-violet-600 dark:text-violet-400" />
          <span className="text-violet-600 dark:text-violet-400 font-medium text-sm ml-2">
            Ready to Transform?
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Elevate Your Tech Expertise
        </h2>

        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10">
          Join our community of innovators and access exclusive resources to
          accelerate your digital transformation.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <NextLink
            href="/signup"
            className="px-8 py-3 rounded-lg bg-violet-600 hover:bg-violet-700 text-white font-medium transition-colors duration-300 flex items-center gap-2"
          >
            Start Now
            <ArrowRight className="w-4 h-4" />
          </NextLink>

          <NextLink
            href="/learn-more"
            className="px-8 py-3 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-300"
          >
            Learn More
          </NextLink>
        </div>
      </div>
    </section>
  );
};
