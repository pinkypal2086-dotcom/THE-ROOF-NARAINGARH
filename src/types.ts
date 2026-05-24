export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  isBestseller?: boolean;
  image?: string;
  rating?: number;
}

export interface MenuCategory {
  id: string;
  name: string;
  slug: string;
  iconName: string; // lucide icon identifier
  items: MenuItem[];
}

export interface Testimonial {
  id: string;
  name: string;
  location?: string;
  rating: number;
  comment: string;
  date: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface GalleryItem {
  id: string;
  url: string;
  title: string;
  category: string;
  description?: string;
}

export interface ReservationData {
  name: string;
  phone: string;
  email?: string;
  date: string;
  time: string;
  guests: number;
  specialRequests?: string;
}
