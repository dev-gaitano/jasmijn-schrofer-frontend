import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/work/WorkHero";

// Lazy load heavy components
const FilmGrid = lazy(() => import("@/components/work/FilmGrid"));
const PodcastCarousel = lazy(() => import("@/components/work/PodcastCarousel"));

const WorkPage = () => {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <Navbar />
      <Hero />
      <Suspense fallback={<div className="w-full h-96 flex items-center justify-center">Loading...</div>}>
        <FilmGrid />
      </Suspense>
      <Suspense fallback={<div className="w-full h-96 flex items-center justify-center">Loading...</div>}>
        <PodcastCarousel />
      </Suspense>
      <Footer />
    </main>
  );
};

export default WorkPage;
