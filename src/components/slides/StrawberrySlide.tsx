import React from "react";
import { BaseSlide } from "./BaseSlide";
import { SlideMetadata } from "@/types/presentation";

const metadata: SlideMetadata = {
  id: "strawberry-example",
  title: "Understanding Claude's Nature",
  sourceFile: "src/components/slides/StrawberrySlide.tsx",
  estimatedTime: 2,
  transition: "fade",
};

export const StrawberrySlide: React.FC = () => {
  return (
    <BaseSlide metadata={metadata}>
      <div className="w-full max-w-4xl mx-auto space-y-8">
        <h2 className="text-4xl font-bold mb-8">
          Understanding Claude's Nature
        </h2>

        <div className="bg-cursor-prompt rounded-lg p-6 space-y-4">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 px-3 py-1 rounded-full bg-blue-600 flex items-center justify-center">
              <span className="text-white font-bold">Prompt</span>
            </div>
            <p className="text-xl">How many R's are in the word "strawberry"</p>
          </div>

          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 px-3 py-1 rounded-full bg-purple-600 flex items-center justify-center">
              <span className="text-white font-bold">Claude</span>
            </div>
            <div className="space-y-2">
              <p className="text-xl">Let me count the R's in "strawberry":</p>
              <p className="text-xl">
                There are 2 R's in the word "strawberry".
              </p>
            </div>
          </div>
        </div>

        <div className="bg-blue-900/20 border border-blue-700/30 rounded-lg p-6 mt-8">
          <h3 className="text-xl font-bold mb-4 text-blue-400">Key Point:</h3>
          <p className="text-xl text-cursor-text/90">
            Claude, like all AI LLM models, is a statistical model that predicts
            the next most likely word. Even for simple counting tasks, it's
            processing patterns rather than truly "counting".
          </p>
        </div>
      </div>
    </BaseSlide>
  );
};
