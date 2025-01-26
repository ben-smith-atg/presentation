import React from "react";
import { SlideComponent } from "@/types/presentation";

interface DevelopmentLayoutProps {
  slides: SlideComponent[];
  onEdit: (slideId: string) => void;
  onPreview: (slideId: string) => void;
}

export const DevelopmentLayout: React.FC<DevelopmentLayoutProps> = ({
  slides,
  onEdit,
  onPreview,
}) => {
  return (
    <div className="max-w-[1800px] mx-auto px-4">
      <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
        {slides.map((slide) => (
          <div
            key={slide.metadata.id}
            className="relative rounded-md border border-gray-700 bg-cursor-prompt p-4"
          >
            <div className="absolute right-2 top-2 flex space-x-2 z-10">
              <button
                onClick={() => onEdit(slide.metadata.id)}
                className="rounded bg-blue-600 p-1 text-xs text-white hover:bg-blue-700"
                title="Edit Slide"
              >
                Edit
              </button>
              <button
                onClick={() => onPreview(slide.metadata.id)}
                className="rounded bg-purple-600 p-1 text-xs text-white hover:bg-purple-700"
                title="Preview Slide"
              >
                Preview
              </button>
            </div>
            <div className="aspect-video overflow-hidden rounded-sm">
              <div className="transform scale-[0.25] origin-top-left w-[400%] h-[400%]">
                <slide.component />
              </div>
            </div>
            <p className="mt-2 text-sm text-cursor-text">
              {slide.metadata.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
