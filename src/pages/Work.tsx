import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/work/WorkHero";
import FilmGrid from "@/components/work/FilmGrid";
import PodcastCarousel from "@/components/work/PodcastCarousel";

const WorkPage = () => {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <Navbar />
      <Hero
        title="Birth of Light"
        category="Globalization and cultures"
        description="Examines how life is influenced by the increasing use of artificial light and the question to what extent mankind has progressed"
        imagePath="/birth-of-light-still-comp.jpg"
        videoPath="birth-of-light-trailer-lrg.mp4"
      />
      <FilmGrid />
      <PodcastCarousel />
      <Footer />
    </main>
  );
};

export default WorkPage;
