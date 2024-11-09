"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export function MarkdownRenderer({ content }: { content: string }) {
  const generateId = (text: string) => {
    return text
      .toLowerCase()
      .replace(/\*\*/g, "")
      .replace(/\*/g, "")
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-+|-+$/g, "");
  };

  return (
    <div className="flex flex-col text-inherit min-w-full">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ node, ...props }) => (
            <h1 id={generateId(props.children?.toString() || "")} {...props} />
          ),
          h2: ({ node, ...props }) => (
            <h2 id={generateId(props.children?.toString() || "")} {...props} />
          ),
          h3: ({ node, ...props }) => (
            <h3 id={generateId(props.children?.toString() || "")} {...props} />
          ),
          ul: ({ node, ...props }) => <ul className="list-disc" {...props} />,
          ol: ({ node, ...props }) => (
            <ol className="list-decimal" {...props} />
          ),
          li: ({ node, ...props }) => <li {...props} />,
          a: ({ node, ...props }) => (
            <a className="text-blue-600 hover:underline" {...props} />
          ),
          p: ({ node, children, ...props }) => (
            <p className="leading-relaxed" {...props}>
              {children}
            </p>
          ),
          div: ({ node, className, children, ...props }) => {
            return (
              <div className="-mb-10" {...props}>
                {children}
              </div>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
