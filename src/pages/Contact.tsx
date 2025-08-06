import Navbar from "@/components/Navbar.tsx";
import ContactForm from "@/components/contact/ContactForm.tsx";
import Footer from "@/components/Footer.tsx";

const ContactPage = () => {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">
        <ContactForm />
      </div>
      <Footer />
    </main>
  );
};

export default ContactPage;
