import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useParams,
  useNavigate,
} from "react-router-dom";
import { PresentationProvider } from "@/context/PresentationContext";
import { PresentationLayout } from "@/layouts/PresentationLayout";
import { DevelopmentLayout } from "@/layouts/DevelopmentLayout";
import { slideRegistry } from "@/data/slides";
import { PresentationView } from "@/components/presentation/PresentationView";

const SlidePreview: React.FC = () => {
  const { slideId } = useParams();
  const navigate = useNavigate();
  const slide = slideRegistry.getSlideById(slideId || "");

  if (!slide) return <Navigate to="/dev" replace />;

  const SlideComponent = slide.component;

  return (
    <div className="relative">
      <button
        onClick={() => navigate("/dev")}
        className="absolute top-4 right-4 z-10 bg-purple-600 px-4 py-2 rounded text-white hover:bg-purple-700"
      >
        Exit Preview
      </button>
      <SlideComponent />
    </div>
  );
};

const AppRoutes: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Navigate
            to={import.meta.env.DEV ? "/dev" : "/present/title"}
            replace
          />
        }
      />
      <Route
        path="/dev"
        element={
          <PresentationLayout
            config={{
              mode: "development",
              showControls: true,
              fontSize: { code: "text-lg", content: "text-base" },
            }}
          >
            <DevelopmentLayout
              slides={slideRegistry.slides}
              onPreview={(id) => navigate(`/dev/preview/${id}`)}
            />
          </PresentationLayout>
        }
      />
      <Route path="/dev/preview/:slideId" element={<SlidePreview />} />
      <Route
        path="/present/:slideId"
        element={
          <PresentationLayout
            config={{
              mode: "presentation",
              showControls: false,
              fontSize: { code: "text-2xl", content: "text-xl" },
            }}
          >
            <PresentationView />
          </PresentationLayout>
        }
      />
    </Routes>
  );
};

const App: React.FC = () => {
  return (
    <PresentationProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </PresentationProvider>
  );
};

export default App;
