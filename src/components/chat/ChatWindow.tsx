import React, { useState } from "react";
import { ChatMessage } from "@/types/presentation";
import { CodeBlock } from "@/components/CodeBlock";

interface ChatWindowProps {
  messages: ChatMessage[];
  currentIndex: number;
  onNext?: () => void;
  onPrev?: () => void;
}

export const ChatWindow: React.FC<ChatWindowProps> = ({
  messages,
  currentIndex,
  onNext,
  onPrev,
}) => {
  const currentMessage = messages[currentIndex];

  return (
    <div className="max-w-3xl mx-auto bg-cursor-bg rounded-lg overflow-hidden">
      <div
        className={`
          p-4 ${currentMessage.role === "user" ? "bg-cursor-prompt" : ""}
          transition-all duration-300
        `}
      >
        {currentMessage.codeBlock ? (
          <CodeBlock
            language={currentMessage.codeBlock.language}
            code={currentMessage.codeBlock.code}
          />
        ) : (
          <p className="text-cursor-text whitespace-pre-wrap">
            {currentMessage.content}
          </p>
        )}
      </div>
    </div>
  );
};
