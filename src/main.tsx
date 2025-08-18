import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import { ClerkProvider } from "@clerk/clerk-react";

// Components and Pages
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import WorkPage from "./pages/Work.tsx";
import NewsPage from "./pages/News.tsx";
import AboutPage from "./pages/About.tsx";
import ContactPage from "./pages/Contact.tsx";
import AdminPage from "./pages/Admin.tsx";

import "./index.css";

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!clerkPubKey) {
  throw new Error(
    "Missing VITE_CLERK_PUBLISHABLE_KEY in environment variables",
  );
}

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
  {
    path: "/admin",
    element: <AdminPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ClerkProvider publishableKey={clerkPubKey}>
      <RouterProvider router={router} />
      <SpeedInsights />
      <Analytics />
    </ClerkProvider>
  </StrictMode>,
);
