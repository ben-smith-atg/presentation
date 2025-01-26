import React, { useEffect } from "react";
import { BaseSlide } from "./BaseSlide";
import { SlideMetadata } from "@/types/presentation";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-typescript";

const metadata: SlideMetadata = {
  id: "improved-prompt",
  title: "With Clarifying Questions",
  sourceFile: "src/components/slides/ImprovedCodeExampleSlide.tsx",
  estimatedTime: 3,
  transition: "fade",
  notes:
    "Demonstrating how Claude's response improves with clarifying questions",
};

const promptExample = `
Help me write a one-liner to get all high priority completed tasks from this data structure.

ask any clarifying questions you need to get a solution with high confidence
`;

const clarifyingQuestions = `
I have a few questions to ensure I provide the most robust solution:

1. How should we handle undefined or null values in the nested structure?
2. Do you need type safety for TypeScript?
3. Should we include error handling for empty arrays?
4. Do you need the full task objects or just specific properties?
`;

const improvedResponse = `
Based on these considerations, here's a more robust solution:

const getHighPriorityTasks = (data: typeof data) => 
  data?.users?.flatMap(user => 
    user?.projects?.flatMap(project => 
      project?.tasks?.filter(task => 
        task?.status === 'completed' && 
        task?.priority === 'high'
      ) ?? []
    ) ?? []
  ) ?? [];

// Usage
const highPriorityTasks = getHighPriorityTasks(data);
`;

export const ImprovedCodeExampleSlide: React.FC = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <BaseSlide metadata={metadata}>
      <div className=" max-w-4xl mx-auto space-y-6">
        <div className="bg-cursor-prompt rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4 text-purple-400">
            Enhanced Prompt:
          </h3>
          <div className="text-lg text-cursor-text/90 font-mono whitespace-pre-wrap">
            {promptExample}
          </div>
        </div>

        <div className="bg-blue-900/20 border border-blue-700/30 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4 text-blue-400">
            Claude's Clarifying Questions:
          </h3>
          <div className="text-lg text-cursor-text/90 whitespace-pre-wrap">
            {clarifyingQuestions}
          </div>
        </div>

        <div className="bg-cursor-prompt rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4 text-purple-400">
            Improved Solution:
          </h3>
          <pre className="!bg-transparent">
            <code className="language-typescript">{improvedResponse}</code>
          </pre>
        </div>

        <div className="bg-green-900/20 border border-green-700/30 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-2 text-green-400">
            Improvements:
          </h3>
          <ul className="list-disc list-inside space-y-2 text-lg text-cursor-text/90">
            <li>Optional chaining for null safety</li>
            <li>TypeScript type inference</li>
            <li>Fallback for empty arrays</li>
            <li>Reusable function approach</li>
          </ul>
        </div>
      </div>
    </BaseSlide>
  );
};
