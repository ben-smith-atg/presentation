import React from "react";
import { BaseSlide } from "./BaseSlide";
import { SlideMetadata } from "@/types/presentation";

const metadata: SlideMetadata = {
  id: "response-patterns",
  title: "Claude's Response Patterns",
  sourceFile: "src/components/slides/ResponsePatternsSlide.tsx",
  estimatedTime: 3,
  transition: "fade",
  notes:
    "Analysis of how the clarifying questions prompt affects Claude's response patterns",
};

export const ResponsePatternsSlide: React.FC = () => {
  return (
    <BaseSlide metadata={metadata}>
      <div className="w-full max-w-4xl mx-auto space-y-8">
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-red-400">
              Without Explicit Reminder:
            </h3>
            <ul className="space-y-3 text-xl text-cursor-text/90">
              <li className="flex items-start">
                <span className="text-red-400 mr-3">•</span>
                <span>I tend to make more assumptions</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-3">•</span>
                <span>I'll ask about major blockers only</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-3">•</span>
                <span>I provide solutions more quickly</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-3">•</span>
                <span>I might skip edge cases</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-3">•</span>
                <span>I focus on the "happy path"</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4 text-green-400">
              With Explicit Reminder:
            </h3>
            <ul className="space-y-3 text-xl text-cursor-text/90">
              <li className="flex items-start">
                <span className="text-green-400 mr-3">•</span>
                <span>I ask about implementation details</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3">•</span>
                <span>I explore multiple approaches</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3">•</span>
                <span>I check tech stack compatibility</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3">•</span>
                <span>I verify assumptions about state management</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3">•</span>
                <span>I ask about error handling needs</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3">•</span>
                <span>I consider performance implications</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3">•</span>
                <span>I check accessibility requirements</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3">•</span>
                <span>I validate TypeScript types</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </BaseSlide>
  );
};
