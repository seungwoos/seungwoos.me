import { getPosts } from "lib/notion";
import Link from "next/link";

export default async function Blog() {
  const posts = await getPosts();

  return (
    <main className="px-4 mt-8">
      <h1 className="text-xl font-bold mb-6">Blog Posts</h1>
      <ul className="flex flex-col">
        {posts.map((post) => (
          <li key={post.id}>
            <Link
              href={`/blog/${post.slug}`}
              className="grid grid-cols-3 items-center py-2 group"
            >
              <span className="text-md font-semibold text-black dark:text-white group-hover:text-blue-600 transition-colors col-span-1">
                {post.title}
              </span>
              <span className="border-t border-dotted border-gray-200 col-span-1" />
              <time className="text-sm text-gray-500 whitespace-nowrap text-right">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </time>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
