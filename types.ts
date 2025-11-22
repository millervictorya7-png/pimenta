export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  content: string;
  author: string;
  date: string;
  tags: string[];
  imageUrl: string;
}

export interface GeneratedPostContent {
  title: string;
  summary: string;
  content: string;
  tags: string[];
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'Classic' | 'Premium' | 'Vegetarian' | 'Sides' | 'Meals';
  imageUrl: string;
}