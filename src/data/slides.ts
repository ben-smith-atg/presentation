import { SlideComponent, SlideRegistry } from "@/types/presentation";
import { TitleSlide } from "@/components/slides/TitleSlide";
import { KeyFeaturesSlide } from "@/components/slides/KeyFeaturesSlide";
import { CodeExampleSlide } from "@/components/slides/CodeExampleSlide";
import { ImprovedCodeExampleSlide } from "@/components/slides/ImprovedCodeExampleSlide";
import { ResponsePatternsSlide } from "@/components/slides/ResponsePatternsSlide";

const slideArray: SlideComponent[] = [
  {
    component: TitleSlide,
    metadata: {
      id: "title",
      title: "",
      sourceFile: "src/components/slides/TitleSlide.tsx",
      estimatedTime: 1,
      transition: "zoom",
      notes:
        "Opening slide introducing the presentation on Mastering Cursor IDE with Claude AI",
    },
  },
  {
    component: KeyFeaturesSlide,
    metadata: {
      id: "key-features",
      title: "Key Topics",
      sourceFile: "src/components/slides/KeyFeaturesSlide.tsx",
      estimatedTime: 2,
      transition: "fade",
      notes:
        "Overview of the main topics we'll cover about effectively using Claude in Cursor IDE",
    },
  },
  {
    component: CodeExampleSlide,
    metadata: {
      id: "naive-prompt",
      title: "Without Clarifying Questions",
      sourceFile: "src/components/slides/CodeExampleSlide.tsx",
      estimatedTime: 2,
      transition: "fade",
      notes:
        "Demonstrating a typical prompt without asking for clarifying questions",
    },
  },
  {
    component: ImprovedCodeExampleSlide,
    metadata: {
      id: "improved-prompt",
      title: "With Clarifying Questions",
      sourceFile: "src/components/slides/ImprovedCodeExampleSlide.tsx",
      estimatedTime: 3,
      transition: "fade",
      notes:
        "Demonstrating how Claude's response improves with clarifying questions",
    },
  },
  {
    component: ResponsePatternsSlide,
    metadata: {
      id: "response-patterns",
      title: "Claude's Response Patterns",
      sourceFile: "src/components/slides/ResponsePatternsSlide.tsx",
      estimatedTime: 3,
      transition: "fade",
      notes:
        "Analysis of how the clarifying questions prompt affects Claude's response patterns",
    },
  },
];

export const slideRegistry: SlideRegistry = {
  slides: slideArray,
  getSlideById: (id: string) => slideArray.find((s) => s.metadata.id === id),
  getSlideIndex: (id: string) =>
    slideArray.findIndex((s) => s.metadata.id === id),
};
