import Navbar from "@/components/Navbar.tsx";
import About from "@/components/home/About.tsx";
import Footer from "@/components/Footer.tsx";

const AboutPage = () => {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">
        <About />
      </div>
      <Footer />
    </main>
  );
};

export default AboutPage;
