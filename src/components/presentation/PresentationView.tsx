import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { slideRegistry } from "@/data/slides";
import { SlideCounter } from "./SlideCounter";
import { NavigationOverlay } from "./NavigationOverlay";

export const PresentationView: React.FC = () => {
  const navigate = useNavigate();
  const { slideId } = useParams();
  const [cursorVisible, setCursorVisible] = useState(true);
  let cursorTimeout: number;

  console.log("Slide Registry:", slideRegistry);
  console.log("Current slideId:", slideId);

  const currentIndex = slideRegistry.getSlideIndex(slideId || "");
  const currentSlide = slideRegistry.getSlideById(slideId || "");

  console.log("Current Index:", currentIndex);
  console.log("Current Slide:", currentSlide);

  useEffect(() => {
    const handleMouseMove = () => {
      setCursorVisible(true);
      window.clearTimeout(cursorTimeout);
      cursorTimeout = window.setTimeout(() => {
        setCursorVisible(false);
      }, 2000);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowRight":
        case "Space":
          if (currentIndex < slideRegistry.slides.length - 1) {
            navigate(
              `/present/${slideRegistry.slides[currentIndex + 1].metadata.id}`
            );
          }
          break;
        case "ArrowLeft":
          if (currentIndex > 0) {
            navigate(
              `/present/${slideRegistry.slides[currentIndex - 1].metadata.id}`
            );
          }
          break;
        case "Escape":
          navigate("/dev");
          break;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("keydown", handleKeyDown);
      window.clearTimeout(cursorTimeout);
    };
  }, [currentIndex]);

  if (!currentSlide) return null;

  const SlideComponent = currentSlide.component;

  return (
    <div
      className={` ${cursorVisible ? "" : "cursor-none"}`}
      style={{
        transition: "transform 300ms ease-in-out",
      }}
    >
      <div className="">
        <SlideComponent />
      </div>
      <SlideCounter />
      <div className="fixed inset-0 pointer-events-none">
        <NavigationOverlay
          onNext={() =>
            currentIndex < slideRegistry.slides.length - 1 &&
            navigate(
              `/present/${slideRegistry.slides[currentIndex + 1].metadata.id}`
            )
          }
          onPrev={() =>
            currentIndex > 0 &&
            navigate(
              `/present/${slideRegistry.slides[currentIndex - 1].metadata.id}`
            )
          }
        />
      </div>
    </div>
  );
};
