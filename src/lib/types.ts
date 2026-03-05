export interface PostMeta {
  title: string;
  date: string;
  description: string;
  tags: string[];
  slug: string;
  readingTime: string;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  image?: string;
  featured?: boolean;
}
