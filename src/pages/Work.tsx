import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/WorkHero";

const workPage = () => {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <Navbar />
      <Hero
        title="Birth of Light"
        category="Globalization and cultures"
        description="Explores the impact of electricity on a remote nomadic community in Northern Kenya, raising questions about modernization's effects on their traditional way of life"
        imagePath="/birth-of-light-still-comp.jpg"
      />
      <Footer />
    </main>
  );
};

export default workPage;
