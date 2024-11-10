import { MarkdownRenderer } from "components/MarkdownRenderer";
import { getPageContent } from "lib/pages";
import { Metadata } from "next";
import { generateMetadata as sharedGenerateMetadata } from "lib/metadata";
import { TableOfContents } from "components/TableOfContents";

export async function generateMetadata(): Promise<Metadata> {
  return sharedGenerateMetadata("about");
}

export default async function About() {
  const { content } = await getPageContent("about");

  return (
    <div className="relative flex">
      <div className="prose dark:prose-invert prose-p:m-0 max-w-screen-md mx-4 md:mx-8 lg:mx-0">
        <MarkdownRenderer content={content} />
      </div>
      <div className="relative">
        <TableOfContents content={content} headingLevels={[2]} />
      </div>
    </div>
  );
}
