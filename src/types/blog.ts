export interface Post {
  id?: string;
  title: string;
  description: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
  featured?: boolean;
  layout?: "vertical" | "horizontal";
  views?: string;
  slug?: string;
}

export interface Category {
  name: string;
  count: number;
  slug: string; // Đảm bảo slug luôn là string
}
