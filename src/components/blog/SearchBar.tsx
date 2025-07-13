"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Search } from "lucide-react";

export const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/blog?search=${encodeURIComponent(searchTerm)}`);
    } else {
      router.push("/blog");
    }
  };

  return (
    <form onSubmit={handleSearch} className="w-full md:w-auto">
      <div className="relative">
        <input
          type="text"
          placeholder="Tìm kiếm bài viết..."
          className="pl-10 pr-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent w-full md:w-64"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
      </div>
    </form>
  );
};
