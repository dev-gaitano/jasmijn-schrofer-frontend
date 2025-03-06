import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Films from "@/components/Films";
import Featured from "@/components/Featured";
import News from "@/components/News";
import About from "@/components/About";
import CallToAction from "@/components/CallToAction";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <Navbar />
      <Hero />
      <Films />
      <Featured />
      {/* <News /> */}
      <About />
      <CallToAction />
      {/* <ContactForm /> */}
      <Footer />
    </main>
  );
};

export default Index;
