export interface PageData {
  content: string; // This will be raw markdown string
  metadata: {
    title: string;
    description: string;
    [key: string]: any;
  };
}
