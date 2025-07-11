"use client";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedPosts } from "@/components/home/FeaturedPosts";
import { LatestPosts } from "@/components/home/LatestPosts";
import { CategorySpotlight } from "@/components/home/CategorySpotlight";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import { AboutCard } from "@/components/sidebar/AboutCard";
import { CategoriesCard } from "@/components/sidebar/CategoriesCard";
import { PopularPostsCard } from "@/components/sidebar/PopularPostsCard";
import { Post, Category, PopularPost } from "@/types/blog";
import NextLink from "next/link";
import { ArrowRight, Rocket } from "lucide-react";

export default function Home() {
  // Sample data
  const categories: Category[] = [
    { name: "Technology", count: 12 },
    { name: "Automation", count: 8 },
    { name: "AI", count: 15 },
    { name: "Digital Transformation", count: 6 },
    { name: "Productivity", count: 9 },
  ];

  const popularPosts: PopularPost[] = [
    {
      title: "Getting Started with Next.js 14",
      views: "1.2k",
      slug: "/blog/getting-started-nextjs-14",
    },
    {
      title: "Top 10 AI Tools for Developers",
      views: "2.5k",
      slug: "/blog/top-ai-tools-developers",
    },
    {
      title: "Building Scalable Microservices",
      views: "950",
      slug: "/blog/building-scalable-microservices",
    },
  ];

  const featuredPosts: Post[] = [
    {
      title: "Digital Transformation for SMEs",
      description:
        "Essential steps to begin your digital transformation journey - beyond just software implementation.",
      image:
        "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=800&q=80",
      date: "May 15, 2023",
      readTime: "8 min read",
      category: "Digital Transformation",
      slug: "/blog/digital-transformation-smes",
    },
    {
      title: "Automation with No-Code Tools",
      description:
        "Learn how to automate business processes without writing a single line of code.",
      image:
        "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "June 2, 2023",
      readTime: "6 min read",
      category: "Automation",
      slug: "/blog/automation-no-code-tools",
    },
    {
      title: "Top AI Tools for Productivity",
      description:
        "Discover free AI tools that can help you work smarter and save time today.",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "June 18, 2023",
      readTime: "10 min read",
      category: "AI",
      slug: "/blog/top-ai-tools-productivity",
    },
  ];

  const latestPosts: Post[] = [
    {
      title: "The Future of Web Development in 2024",
      description:
        "Exploring the emerging trends and technologies that will shape web development in the coming year.",
      image:
        "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "July 5, 2023",
      readTime: "12 min read",
      category: "Technology",
      slug: "/blog/future-web-development-2024",
    },
    {
      title: "Building Scalable Microservices Architecture",
      description:
        "Best practices and patterns for designing microservices that can scale with your business needs.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "June 28, 2023",
      readTime: "15 min read",
      category: "Architecture",
      slug: "/blog/scalable-microservices-architecture",
    },
    {
      title: "Machine Learning for Beginners: A Practical Guide",
      description:
        "A step-by-step guide to getting started with machine learning, even if you're a complete beginner.",
      image:
        "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "June 20, 2023",
      readTime: "18 min read",
      category: "AI",
      slug: "/blog/machine-learning-beginners-guide",
    },
  ];

  const spotlightPosts: Post[] = [
    {
      title: "Understanding Neural Networks",
      description:
        "A deep dive into how neural networks work and why they're revolutionizing AI.",
      image:
        "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "June 10, 2023",
      readTime: "14 min read",
      category: "AI",
      slug: "/blog/understanding-neural-networks",
    },
    {
      title: "Ethical Considerations in AI Development",
      description:
        "Exploring the ethical challenges and responsibilities in modern AI systems.",
      image:
        "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "May 30, 2023",
      readTime: "9 min read",
      category: "AI",
      slug: "/blog/ethical-ai-development",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-200">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <HeroSection />

        {/* Featured Posts */}
        <FeaturedPosts posts={featuredPosts} />

        {/* Main Content with Sidebar */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="lg:w-2/3">
            {/* Latest Posts */}
            <LatestPosts posts={latestPosts} />

            {/* Category Spotlight */}
            <CategorySpotlight
              category="Artificial Intelligence"
              posts={spotlightPosts}
            />
          </div>

          {/* Sidebar */}
          <aside className="lg:w-1/3">
            <AboutCard />
            <CategoriesCard categories={categories} />
            <PopularPostsCard posts={popularPosts} />
          </aside>
        </div>

        {/* Newsletter Section */}
        <NewsletterSection />

        {/* Call to Action */}
        <section className="text-center mb-16">
          <div className="relative">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 opacity-5 dark:opacity-10 rounded-2xl" />

            <div className="relative z-10 py-16 px-8">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-to-r from-violet-600 to-blue-600 rounded-2xl shadow-lg">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">
                Ready to Dive Deeper?
              </h2>

              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
                Explore our extensive library of articles, tutorials, and guides
                to enhance your tech knowledge and stay ahead of the curve.
              </p>

              <NextLink
                href="/blog"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700 text-white rounded-xl text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Browse All Articles
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </NextLink>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
