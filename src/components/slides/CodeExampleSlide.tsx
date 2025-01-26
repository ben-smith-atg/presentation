import React, { useEffect } from "react";
import { BaseSlide } from "./BaseSlide";
import { SlideMetadata } from "@/types/presentation";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-typescript";

const metadata: SlideMetadata = {
  id: "naive-prompt",
  title: "Without Clarifying Questions",
  sourceFile: "src/components/slides/CodeExampleSlide.tsx",
  estimatedTime: 2,
  transition: "fade",
  notes:
    "Demonstrating a typical prompt without asking for clarifying questions",
};

const codeExample = `
// Complex nested data structure
const data = {
  users: [{
    id: 1,
    projects: [{
      id: 101,
      tasks: [{
        id: 1001,
        status: 'completed',
        priority: 'high'
      }]
    }]
  }]
};

// Need to get all high priority completed tasks
`;

const promptExample = `
Help me write a one-liner to get all high priority completed tasks from this data structure.
`;

const responseExample = `
Here's a one-liner:
data.users.flatMap(u => u.projects).flatMap(p => p.tasks).filter(t => t.status === 'completed' && t.priority === 'high')
`;

export const CodeExampleSlide: React.FC = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <BaseSlide metadata={metadata}>
      <div className=" max-w-4xl mx-auto space-y-6">
        <div className="bg-cursor-prompt rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4 text-purple-400">
            Initial Prompt:
          </h3>
          <div className="text-lg text-cursor-text/90 font-mono whitespace-pre-wrap">
            {promptExample}
          </div>
        </div>

        <div className="bg-[#1E1E1E] rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4 text-purple-400">Context:</h3>
          <pre className="!bg-transparent">
            <code className="language-typescript">{codeExample}</code>
          </pre>
        </div>

        <div className="bg-cursor-prompt rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4 text-purple-400">
            Claude's Response:
          </h3>
          <div className="text-lg text-cursor-text/90 font-mono whitespace-pre-wrap">
            {responseExample}
          </div>
        </div>

        <div className="bg-red-900/20 border border-red-700/30 rounded-lg p-6 mt-8">
          <h3 className="text-xl font-bold mb-2 text-red-400">
            Potential Issues:
          </h3>
          <ul className="list-disc list-inside space-y-2 text-lg text-cursor-text/90">
            <li>No error handling for undefined values</li>
            <li>No type safety considerations</li>
            <li>Assumes consistent data structure</li>
          </ul>
        </div>
      </div>
    </BaseSlide>
  );
};
