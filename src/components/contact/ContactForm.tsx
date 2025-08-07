import { useState } from "react";
import { Mail, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <section id="contact" className="relative w-full py-24">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-tr from-background via-background to-background-more-muted pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-primary-muted via-transparent to-transparent pointer-events-none"></div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-2xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="glass-panel p-gap-sm md:p-8 rounded-3xl"
          >
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold">
                Get in Touch
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground-muted ml-4 mb-2"
                >
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-full px-4 py-3 text-white placeholder:text-foreground-more-muted focus:outline-none focus:ring-2 focus:ring-gold/50"
                  placeholder="Jane Doe"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground-muted ml-4 mb-2"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-full px-4 py-3 text-foreground placeholder:text-foreground-more-muted focus:outline-none focus:ring-2 focus:ring-gold/50"
                  placeholder="example@email.com"
                />
              </div>
            </div>

            <div className="mb-6">
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-foreground-muted ml-4 mb-2"
              >
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-full px-4 py-3 text-foreground placeholder:text-foreground-more-muted focus:outline-none focus:ring-2 focus:ring-gold/50"
                placeholder="Project Inquiry"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-foreground-muted ml-4 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-foreground placeholder:text-foreground-more-muted focus:outline-none focus:ring-2 focus:ring-gold/50 resize-none"
                placeholder="Share details about your project..."
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="hover-lift button-primary w-full md:w-auto flex items-center justify-center gap-2 px-8 py-3 border-secondary text-secondary disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <span className="animate-pulse">Sending...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
