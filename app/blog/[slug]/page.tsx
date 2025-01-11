import ClientNotionRenderer from "components/ClientNotionRenderer";
import { getNotionPage, getPostBySlug } from "lib/notion";

export const revalidate = 60;

export default async function Post({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  const recordMap = await getNotionPage(post.id);

  return (
    <article>
      <ClientNotionRenderer recordMap={recordMap} />
    </article>
  );
}
