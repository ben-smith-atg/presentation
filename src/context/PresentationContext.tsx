import React, { createContext, useContext, useState } from "react";
import { PresentationConfig } from "@/types/presentation";

const defaultConfig: PresentationConfig = {
  mode: "development",
  showControls: true,
  fontSize: {
    code: "text-lg",
    content: "text-base",
  },
};

const PresentationContext = createContext<{
  config: PresentationConfig;
  updateConfig: (config: Partial<PresentationConfig>) => void;
}>({ config: defaultConfig, updateConfig: () => {} });

export const PresentationProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [config, setConfig] = useState<PresentationConfig>(defaultConfig);

  console.log("PresentationProvider rendering with config:", config);

  const updateConfig = (newConfig: Partial<PresentationConfig>) => {
    setConfig((prev) => ({ ...prev, ...newConfig }));
  };

  return (
    <PresentationContext.Provider value={{ config, updateConfig }}>
      {children}
    </PresentationContext.Provider>
  );
};

export const usePresentation = () => {
  const context = useContext(PresentationContext);
  console.log("usePresentation hook called, returning:", context);
  return context;
};
