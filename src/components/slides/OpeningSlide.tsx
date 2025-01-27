import React from "react";
import { BaseSlide } from "./BaseSlide";
import { SlideMetadata } from "@/types/presentation";

const metadata: SlideMetadata = {
  id: "opening",
  title: "Opening",
  sourceFile: "src/components/slides/OpeningSlide.tsx",
  estimatedTime: 3,
  transition: "fade",
};

export const OpeningSlide: React.FC = () => {
  return (
    <BaseSlide metadata={metadata}>
      <div className="w-full max-w-4xl mx-auto space-y-8">
        <h2 className="text-4xl font-bold mb-8">Mastering Claude AI</h2>

        <div className="space-y-6">
          <div className="bg-cursor-prompt rounded-lg p-6">
            <h3 className="text-2xl font-bold text-purple-400 mb-4">
              Introduction
            </h3>
            <p className="text-xl text-cursor-text/90">
              I'll share my learnings about prompt-driven development with
              Claude AI in Cursor, and how it's changed my development workflow.
            </p>
          </div>

          <div className="bg-cursor-prompt rounded-lg p-6">
            <h3 className="text-2xl font-bold text-purple-400 mb-4">
              What We'll Cover
            </h3>
            <ul className="space-y-3 text-xl text-cursor-text/90">
              <li className="flex items-start">
                <span className="text-blue-400 mr-3">•</span>
                <span>The power of clarifying questions in prompts</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3">•</span>
                <span>Evolving your .cursorrules configuration</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3">•</span>
                <span>Optimizing mental load with AI assistance</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3">•</span>
                <span>Understanding AI limitations and best practices</span>
              </li>
            </ul>
          </div>

          <div className="bg-blue-900/20 border border-blue-700/30 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-blue-400">Key Focus:</h3>
            <p className="text-xl text-cursor-text/90">
              How to get more reliable, context-aware solutions from Claude
              while maintaining development efficiency.
            </p>
          </div>
        </div>
      </div>
    </BaseSlide>
  );
};
