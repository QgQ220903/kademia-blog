import { Post, Category } from "@/types/blog";

export const dummyCategories: Category[] = [
  { name: "Tất cả", slug: "all", count: 10 },
  {
    name: "Artificial Intelligence",
    slug: "artificial-intelligence",
    count: 5,
  },
  { name: "Web Development", slug: "web-development", count: 3 },
  { name: "DevOps", slug: "devops", count: 2 },
  { name: "Cybersecurity", slug: "cybersecurity", count: 4 },
];

export const dummyPosts: Post[] = [
  // ... (sử dụng dữ liệu dummy bạn đã cung cấp)
];

export const dummyFeaturedPosts: Post[] = [
  {
    title: "Digital Transformation for SMEs",
    description:
      "Essential steps to begin your digital transformation journey.",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    date: "May 15, 2023",
    readTime: "8 min read",
    category: "Digital Transformation",
    slug: "/blog/digital-transformation-smes",
  },
  {
    title: "Automation with No-Code Tools",
    description: "Learn how to automate business processes without coding.",
    image:
      "https://images.unsplash.com/photo-1518186233392-c232efbf2373?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
    date: "June 2, 2023",
    readTime: "6 min read",
    category: "Automation",
    slug: "/blog/automation-no-code-tools",
  },
  {
    title: "Top AI Tools for Productivity",
    description: "Discover free AI tools to work smarter and save time.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    date: "June 18, 2023",
    readTime: "10 min read",
    category: "AI",
    slug: "/blog/top-ai-tools-productivity",
  },
  // Thêm 3 bài viết mới
  {
    title: "Cloud Computing for Startups",
    description: "How cloud technology can accelerate your startup growth.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    date: "July 5, 2023",
    readTime: "7 min read",
    category: "Technology",
    slug: "/blog/cloud-computing-startups",
  },
  {
    title: "Data-Driven Decision Making",
    description: "Transform your business with data analytics strategies.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    date: "July 22, 2023",
    readTime: "9 min read",
    category: "Analytics",
    slug: "/blog/data-driven-decision-making",
  },
  {
    title: "Remote Work Best Practices",
    description: "Maximize productivity in distributed teams.",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    date: "August 10, 2023",
    readTime: "5 min read",
    category: "Productivity",
    slug: "/blog/remote-work-best-practices",
  },
];
