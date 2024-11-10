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
    <div className="prose dark:prose-invert prose-p:m-1 max-w-screen-md mx-4 md:mx-8 lg:mx-0">
      <MarkdownRenderer content={content} />
    </div>
  );
}
