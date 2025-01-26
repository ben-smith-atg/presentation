import React from "react";
import { BaseSlide } from "./BaseSlide";
import { SlideMetadata } from "@/types/presentation";

const metadata: SlideMetadata = {
  id: "title",
  title: "", // Empty because we'll handle the title differently in the content
  sourceFile: "src/components/slides/TitleSlide.tsx",
  estimatedTime: 1,
  transition: "zoom", // Special transition for opening slide
  notes:
    "Opening slide introducing the presentation on Mastering Cursor IDE with Claude AI",
};

export const TitleSlide: React.FC = () => {
  console.log("TitleSlide rendering");

  const content = (
    <div className=" flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold mb-6">
        Mastering Cursor IDE with Claude AI
      </h1>
      <p className="text-2xl text-cursor-text/80">
        Best Practices and Pitfalls
      </p>
    </div>
  );

  console.log("TitleSlide content:", content);

  return <BaseSlide metadata={metadata}>{content}</BaseSlide>;
};
