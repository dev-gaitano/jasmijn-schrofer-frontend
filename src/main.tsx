import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

// Components and Pages
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import WorkPage from "./pages/Work.tsx";
import NewsPage from "./components/News.tsx";
import AboutPage from "./components/About.tsx";
import ContactPage from "./pages/Contact.tsx";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    errorElement: <NotFound />,
  },
  {
    path: "/work",
    element: <WorkPage />,
  },
  {
    path: "/news",
    element: <NewsPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
    <SpeedInsights />
    <Analytics />
  </StrictMode>,
);
