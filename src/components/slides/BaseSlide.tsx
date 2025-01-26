import React from "react";
import { SlideMetadata } from "@/types/presentation";
import { usePresentation } from "@/context/PresentationContext";
import clsx from "clsx";

interface BaseSlideProps {
  metadata: SlideMetadata;
  children: React.ReactNode;
  className?: string;
}

export const BaseSlide: React.FC<BaseSlideProps> = ({
  metadata,
  children,
  className = "",
}) => {
  const { config } = usePresentation();

  console.log("BaseSlide rendering with:", {
    metadata,
    config,
    children,
    className,
  });

  return (
    <div
      className={clsx(
        "flex flex-col w-full min-h-screen",
        "px-8 py-6",
        config.fontSize.content,
        className,
        "bg-cursor-bg text-cursor-text"
      )}
      data-transition={metadata.transition}
    >
      <div className="flex-1  flex items-center justify-center">{children}</div>
    </div>
  );
};
