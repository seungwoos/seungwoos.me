"use client";

import Image from "next/image";
import { NotionRenderer } from "react-notion-x";
import { Code } from "react-notion-x/build/third-party/code";
import { Collection } from "react-notion-x/build/third-party/collection";
import { ExtendedRecordMap } from "notion-types";
import "react-notion-x/src/styles.css";
import { useTheme } from "next-themes";

export default function ClientNotionRenderer({ recordMap }) {
  const { theme } = useTheme();

  return (
    <NotionRenderer
      recordMap={recordMap}
      components={{
        nextImage: Image,
        Code: Code,
        Collection: Collection,
      }}
      fullPage={false}
      darkMode={theme === "dark"}
    />
  );
}
