import React from "react";

interface NavigationOverlayProps {
  onNext: () => void;
  onPrev: () => void;
}

export const NavigationOverlay: React.FC<NavigationOverlayProps> = ({
  onNext,
  onPrev,
}) => (
  <>
    <div
      onClick={onPrev}
      className="absolute left-0 top-0 w-16 h-full opacity-0 hover:opacity-10 transition-opacity cursor-pointer bg-white"
    />
    <div
      onClick={onNext}
      className="absolute right-0 top-0 w-16 h-full opacity-0 hover:opacity-10 transition-opacity cursor-pointer bg-white"
    />
  </>
);
