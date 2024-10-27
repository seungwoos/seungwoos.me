import { MarkdownRenderer } from "components/MarkdownRenderer";
import { getPageContent } from "lib/pages";
import { Metadata } from "next";
import { generateMetadata as sharedGenerateMetadata } from "lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  return sharedGenerateMetadata("about");
}

export default async function About() {
  const { content } = await getPageContent("about");

  return (
    <div className="prose dark:prose-invert prose-p:m-0">
      <MarkdownRenderer content={content} />
    </div>
  );
}
