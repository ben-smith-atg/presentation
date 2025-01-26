import React from "react";
import { slideRegistry } from "@/data/slides";
import { useParams } from "react-router-dom";

export const SlideCounter: React.FC = () => {
  const { slideId } = useParams();
  const currentIndex = slideRegistry.getSlideIndex(slideId || "") + 1;
  const totalSlides = slideRegistry.slides.length;

  return (
    <div className="fixed bottom-4 right-4 text-cursor-text/70 text-sm">
      {currentIndex}/{totalSlides}
    </div>
  );
};
