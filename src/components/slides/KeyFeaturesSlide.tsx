import React from "react";
import { BaseSlide } from "./BaseSlide";
import { SlideMetadata } from "@/types/presentation";

const metadata: SlideMetadata = {
  id: "key-features",
  title: "Key Topics",
  sourceFile: "src/components/slides/KeyFeaturesSlide.tsx",
  estimatedTime: 2,
  transition: "fade",
  notes:
    "Overview of the main topics we'll cover about effectively using Claude in Cursor IDE",
};

export const KeyFeaturesSlide: React.FC = () => {
  return (
    <BaseSlide metadata={metadata}>
      <div className=" max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">Key Topics</h2>
        <ul className="space-y-6 text-xl">
          <li className="flex items-start">
            <span className="text-purple-400 mr-3">•</span>
            <span>
              Essential Prompt Enhancement
              <p className="text-lg text-cursor-text/80 mt-2">
                The power of "ask any clarifying questions you need to get a
                solution with high confidence"
              </p>
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-purple-400 mr-3">•</span>
            <span>
              Evolving .cursorrules
              <p className="text-lg text-cursor-text/80 mt-2">
                Collaborative development of your IDE configuration
              </p>
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-purple-400 mr-3">•</span>
            <span>
              Cognitive Load Optimization
              <p className="text-lg text-cursor-text/80 mt-2">
                Delegating routine complexity to focus on architecture
              </p>
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-purple-400 mr-3">•</span>
            <span>
              Understanding Limitations
              <p className="text-lg text-cursor-text/80 mt-2">
                Navigating version conflicts and codebase specifics
              </p>
            </span>
          </li>
        </ul>
      </div>
    </BaseSlide>
  );
};
