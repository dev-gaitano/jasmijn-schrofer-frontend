import Navbar from "@/components/Navbar.tsx";
import InDevelopment from "./InDevelopment.tsx";
import Footer from "@/components/Footer.tsx";

const ContactPage = () => {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <Navbar />
      <InDevelopment />;
      <Footer />
    </main>
  );
};

export default ContactPage;
