import Navbar from "@/components/Navbar";
import Hero from "@/components/home/Hero";
import Films from "@/components/home/Films";
import Featured from "@/components/home/Featured";
import About from "@/components/home/About";
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
