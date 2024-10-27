import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { PageData } from "types/page";

export async function getPageContent(pageName: string): Promise<PageData> {
  const fullPath = path.join(process.cwd(), "content/pages", `${pageName}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Parse the markdown file with gray-matter
  const { data, content } = matter(fileContents);

  // Return raw markdown content, not HTML
  return {
    content, // Raw markdown string
    metadata: {
      ...data,
      title: data.title || "",
      description: data.description || "",
    },
  };
}
