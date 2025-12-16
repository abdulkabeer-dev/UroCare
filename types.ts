
export interface ServiceData {
  id: string;
  title: string;
  shortDescription: string;
  overview: string;
  symptoms: string[];
  causes: string[];
  diagnosis: string[];
  treatment: string[];
  advancedTech: string;
  whenToSee: string;
  faqs: { question: string; answer: string }[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
}

export interface Testimonial {
  id: number;
  name: string;
  condition: string;
  text: string;
  rating: number;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  caption: string;
}
