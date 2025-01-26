export type PresentationMode = "development" | "presentation";

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
  codeBlock?: {
    language: string;
    code: string;
  };
}

export interface ChatExample {
  id: string;
  messages: ChatMessage[];
}

export interface SlideMetadata {
  id: string;
  title: string;
  sourceFile: string;
  estimatedTime?: number; // in minutes
  notes?: string;
  transition?: "slide" | "fade" | "zoom";
  chatExample?: string; // reference to chat example id
}

export interface PresentationConfig {
  mode: PresentationMode;
  showControls: boolean;
  fontSize: {
    code: string;
    content: string;
  };
}

export interface SlideComponent {
  component: React.FC;
  metadata: SlideMetadata;
}

export interface SlideRegistry {
  slides: SlideComponent[];
  getSlideById: (id: string) => SlideComponent | undefined;
  getSlideIndex: (id: string) => number;
}
