import React, { useEffect } from "react";
import Prism from "prismjs";
import { usePresentation } from "@/context/PresentationContext";

interface CodeBlockProps {
  language: string;
  code: string;
  highlightLines?: number[];
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  language,
  code,
  highlightLines = [],
}) => {
  const { config } = usePresentation();

  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  return (
    <pre className={`max-w-3xl mx-auto ${config.fontSize.code}`}>
      <code className={`language-${language}`}>{code}</code>
    </pre>
  );
};
