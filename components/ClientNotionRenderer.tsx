"use client";

import Image from "next/image";
import { NotionRenderer } from "react-notion-x";
import { Code } from "react-notion-x/build/third-party/code";
import { ExtendedRecordMap } from "notion-types";
import { useTheme } from "next-themes";

interface NotionRecordMapProps {
  recordMap: ExtendedRecordMap;
}

export default function ClientNotionRenderer({
  recordMap,
}: NotionRecordMapProps) {
  const { theme } = useTheme();

  return (
    <NotionRenderer
      recordMap={recordMap}
      components={{
        nextImage: Image,
        Code: Code,
      }}
      fullPage={false}
      darkMode={theme === "dark"}
    />
  );
}
