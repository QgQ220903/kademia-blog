import NextLink from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative text-center py-30 overflow-hidden bg-white dark:bg-black transition-colors duration-300">
      {/* Tech circuit pattern */}
      <div className="absolute inset-0 opacity-10 dark:opacity-[0.15]">
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
          <path
            d="M100 100 L300 100 L300 200 L500 200 L500 300 L700 300"
            stroke="url(#circuit-gradient)"
            strokeWidth="2"
          />
          <path
            d="M800 150 L1000 150 L1000 250 L1100 250"
            stroke="url(#circuit-gradient)"
            strokeWidth="2"
          />
          <path
            d="M150 400 L350 400 L350 500 L550 500"
            stroke="url(#circuit-gradient)"
            strokeWidth="2"
          />
          <path
            d="M650 450 L850 450 L850 550 L1050 550"
            stroke="url(#circuit-gradient)"
            strokeWidth="2"
          />
          <path
            d="M200 600 L400 600 L400 700 L600 700"
            stroke="url(#circuit-gradient)"
            strokeWidth="2"
          />

          <circle cx="300" cy="100" r="4" fill="url(#node-gradient)" />
          <circle cx="500" cy="200" r="4" fill="url(#node-gradient)" />
          <circle cx="700" cy="300" r="4" fill="url(#node-gradient)" />
          <circle cx="1000" cy="150" r="4" fill="url(#node-gradient)" />
          <circle cx="350" cy="400" r="4" fill="url(#node-gradient)" />
          <circle cx="550" cy="500" r="4" fill="url(#node-gradient)" />
          <circle cx="850" cy="450" r="4" fill="url(#node-gradient)" />
          <circle cx="400" cy="600" r="4" fill="url(#node-gradient)" />

          <rect
            x="280"
            y="80"
            width="40"
            height="40"
            fill="none"
            stroke="url(#circuit-gradient)"
            strokeWidth="1"
          />
          <rect
            x="480"
            y="180"
            width="40"
            height="40"
            fill="none"
            stroke="url(#circuit-gradient)"
            strokeWidth="1"
          />
          <rect
            x="680"
            y="280"
            width="40"
            height="40"
            fill="none"
            stroke="url(#circuit-gradient)"
            strokeWidth="1"
          />
          <rect
            x="980"
            y="130"
            width="40"
            height="40"
            fill="none"
            stroke="url(#circuit-gradient)"
            strokeWidth="1"
          />

          <defs>
            <linearGradient
              id="circuit-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="50%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#d946ef" />
            </linearGradient>
            <radialGradient id="node-gradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#d946ef" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Sparkles className="w-6 h-6 text-violet-600 dark:text-violet-400" />
          <span className="text-sm font-medium text-violet-600 dark:text-violet-400 uppercase tracking-wider">
            Welcome to the Future
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-gray-900 dark:text-white">
          Welcome to{" "}
          <span className="relative">
            <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 dark:from-violet-400 dark:via-purple-400 dark:to-fuchsia-400 bg-clip-text text-transparent">
              Kademia
            </span>
            <div className="absolute -bottom-2 left-0 right-0 h-2 bg-gradient-to-r from-violet-400/30 via-purple-400/30 to-fuchsia-400/30 dark:from-violet-400/20 dark:via-purple-400/20 dark:to-fuchsia-400/20 blur-sm" />
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
            className="group px-8 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white font-medium transition-all duration-300 shadow-lg hover:shadow-violet-500/25 transform hover:-translate-y-1 flex items-center gap-2"
          >
            Browse Articles
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </NextLink>

          <NextLink
            href="/about"
            className="group px-8 py-4 rounded-xl border-2 border-violet-600 dark:border-violet-400 text-violet-600 dark:text-violet-400 hover:bg-violet-600 dark:hover:bg-violet-400 hover:text-white transition-all duration-300 font-medium"
          >
            Learn About Us
          </NextLink>
        </div>
      </div>
    </section>
  );
};
