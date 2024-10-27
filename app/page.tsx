import { MarkdownRenderer } from "components/MarkdownRenderer";
import { getPageContent } from "lib/pages";
import { Metadata } from "next";
import { generateMetadata as sharedGenerateMetadata } from "lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  return sharedGenerateMetadata("home");
}

export default async function Home() {
  const { content } = await getPageContent("home");

  return (
    <div className="prose dark:prose-invert prose-p:m-1">
      <MarkdownRenderer content={content} />
    </div>
  );
}
