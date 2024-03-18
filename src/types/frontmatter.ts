export interface FrontmatterProps {
  layout: string;
  title: string;
  pubDate: string;
  description: string;
  author: string;
  image: Image;
  tags: string[];
}

interface Image {
  url: string;
  alt: string;
}
