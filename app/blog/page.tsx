import { getPosts } from "lib/notion";
import Link from "next/link";

export default async function Blog() {
  const posts = await getPosts();
  return (
    <div className="relative flex max-w-screen-md w-full">
      <div className="w-full mx-4 md:mx-8 lg:mx-0">
        <ul className="flex flex-col space-y-4">
          {posts.map((post) => (
            <li
              key={post.id}
              className="bg-white/90 dark:bg-black/90 w-full px-4"
            >
              <Link
                href={`/blog/${post.slug}`}
                className="grid grid-cols-[auto_1fr_auto] gap-8 items-center w-full py-2 group"
              >
                <span className="text-md font-semibold text-black dark:text-white group-hover:text-blue-600 transition-colors">
                  {post.title}
                </span>
                <span className="border-t border-dotted border-gray-200" />
                <time className="text-sm text-gray-500">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
