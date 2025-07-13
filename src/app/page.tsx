"use client";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedPosts } from "@/components/home/FeaturedPosts";
import { Categories } from "@/components/home/Categories";
import { CtaSection } from "@/components/home/CtaSection";
import { dummyFeaturedPosts, dummyCategories } from "@/data/blog";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300 flex flex-col">
      <Header />

      <main className="flex-1">
        <HeroSection />

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
          <Categories categories={dummyCategories} />
          <FeaturedPosts posts={dummyFeaturedPosts} />
        </div>
      </main>
      <CtaSection />
      <Footer />
    </div>
  );
}
