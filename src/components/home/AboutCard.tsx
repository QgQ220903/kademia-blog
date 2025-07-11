import NextLink from "next/link";
import { Info, ArrowRight } from "lucide-react";

export const AboutCard = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-8 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-gradient-to-r from-violet-600 to-purple-600 rounded-lg">
          <Info className="w-5 h-5 text-white" />
        </div>
        <h3 className="text-xl font-bold text-gray-800 dark:text-white">
          About TechInsights
        </h3>
      </div>

      <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
        TechInsights is your premier destination for exploring the cutting-edge
        world of technology, automation, and digital transformation. We make
        complex tech topics accessible and actionable for everyone.
      </p>

      <NextLink
        href="/about"
        className="group inline-flex items-center gap-2 text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 font-medium transition-colors"
      >
        Learn more
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </NextLink>
    </div>
  );
};
