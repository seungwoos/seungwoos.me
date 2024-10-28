export interface TocItem {
  level: number;
  text: string;
  id: string;
}

export interface TableOfContentsProps {
  content: string;
  headingLevels?: number[];
}
