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
      <div className="prose dark:prose-invert prose-p:m-0">
        <MarkdownRenderer content={content} />
      </div>
      <div className="fixed top-[5rem] left-[calc(60%+20rem)] w-64">
        <TableOfContents content={content} headingLevels={[1]} />
      </div>
    </div>
  );
}
