import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/work/WorkHero";
import FilmGrid from "@/components/work/FilmGrid";
import PodcastCarousel from "@/components/work/PodcastCarousel";

const WorkPage = () => {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <Navbar />
      <Hero />
      <FilmGrid />
      <PodcastCarousel />
      <Footer />
    </main>
  );
};

export default WorkPage;
