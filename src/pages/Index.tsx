import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Films from "@/components/Films";
import Featured from "@/components/Featured";
import About from "@/components/About";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <Navbar />
      <Hero />
      <Films />
      <Featured />
      <About />
      <Footer />
    </main>
  );
};

export default Index;
