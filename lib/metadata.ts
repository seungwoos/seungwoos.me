import { Metadata } from "next";
import { getPageContent } from "lib/pages";

export async function generateMetadata(pageName: string): Promise<Metadata> {
  const { metadata } = await getPageContent(pageName);

  return {
    title: metadata.title,
    description: metadata.description,
  };
}
