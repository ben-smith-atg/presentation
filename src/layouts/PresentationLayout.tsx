import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { PresentationConfig } from "@/types/presentation";

interface PresentationLayoutProps {
  children: React.ReactNode;
  config: PresentationConfig;
}

export const PresentationLayout: React.FC<PresentationLayoutProps> = ({
  children,
  config,
}) => {
  const navigate = useNavigate();

  return (
    <div className="">
      {config.mode === "development" && (
        <header className="p-4 mb-4 flex items-center justify-between">
          <h1 className="text-cursor-text text-xl font-bold">
            Mastering Claude - {config.mode}
          </h1>
          <button
            onClick={() => navigate("/present/title")}
            className="rounded bg-purple-600 px-4 py-2 text-white hover:bg-purple-700"
          >
            Switch to Presentation
          </button>
        </header>
      )}
      <main className="">{children}</main>
    </div>
  );
};
