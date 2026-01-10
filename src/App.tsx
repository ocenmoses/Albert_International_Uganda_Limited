import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import TestimonialCarousel from "./components/TestimonialCarousel";
import ServicesCarousel from "./components/ServicesCarousel";
import ScrollAnimation from "./components/ScrollAnimation";
import HeroBackground from "./components/HeroBackground";
import WhatsAppButton from "./components/WhatsAppButton";
import { Button } from "./components/ui/button";
import "./App.css";
import {
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Clock,
  Users,
  Award,
  Shield,
} from "lucide-react";

function App() {
  useEffect(() => {
    // Detect and apply system theme preference
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const applyTheme = (isDark: boolean) => {
      if (isDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    };

    applyTheme(mediaQuery.matches);

    const handleThemeChange = (e: MediaQueryListEvent) => {
      applyTheme(e.matches);
    };

    mediaQuery.addEventListener("change", handleThemeChange);
    return () => mediaQuery.removeEventListener("change", handleThemeChange);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <WhatsAppButton />

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      >
        {/* Background Video/Image */}
        <HeroBackground
          // Uncomment and add your video URL here
          videoSrc="/clean.mp4"
          // poster="/images/cleaning-hero-poster.jpg"

          // Or use an image instead
          // imageSrc="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop"
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 animate-fade-in">
              <Sparkles className="h-4 w-4" />
              Professional Cleaning Services
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground/90 to-foreground/80 bg-clip-text text-transparent">
              Your Space, Our Expertise
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Transform your home or office with our professional cleaning
              services. We deliver spotless results every time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="text-lg px-8 py-6"
                onClick={() => scrollToSection("contact")}
              >
                Get Free Quote
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6"
                onClick={() => scrollToSection("services")}
              >
                Our Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="fade-up" className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive cleaning solutions tailored to your needs
            </p>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-up" delay={200}>
            <ServicesCarousel />
          </ScrollAnimation>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation animation="fade-right">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                  Why Choose Albert International Uganda Limited?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  With years of experience and a commitment to excellence, we've
                  become the trusted choice for cleaning services in the area.
                  Our team is trained, insured, and dedicated to making your
                  space shine.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                  {[
                    {
                      icon: Users,
                      title: "Expert Team",
                      desc: "Trained professionals",
                    },
                    {
                      icon: Award,
                      title: "Quality Guaranteed",
                      desc: "100% satisfaction",
                    },
                    {
                      icon: Shield,
                      title: "Fully Insured",
                      desc: "Protected & secure",
                    },
                    {
                      icon: Clock,
                      title: "Flexible Scheduling",
                      desc: "Available 7 days/week",
                    },
                  ].map((item, idx) => (
                    <ScrollAnimation
                      key={idx}
                      animation="fade-up"
                      delay={idx * 100}
                    >
                      <div className="flex items-start gap-4">
                        <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <item.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">{item.title}</h4>
                          <p className="text-sm text-muted-foreground">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </ScrollAnimation>
                  ))}
                </div>

                <Button size="lg" onClick={() => scrollToSection("contact")}>
                  Get Started Today
                </Button>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-left" delay={200}>
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 p-8 flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-4 w-full">
                    {[1, 2, 3, 4].map((num) => (
                      <ScrollAnimation
                        key={num}
                        animation="scale-in"
                        delay={num * 100}
                      >
                        <div className="aspect-square rounded-lg bg-card border flex items-center justify-center shadow-lg">
                          <div className="text-center">
                            <div className="text-3xl font-bold text-primary mb-1">
                              {num === 1
                                ? "500+"
                                : num === 2
                                ? "98%"
                                : num === 3
                                ? "24/7"
                                : "5★"}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {num === 1
                                ? "Happy Clients"
                                : num === 2
                                ? "Satisfaction"
                                : num === 3
                                ? "Support"
                                : "Rating"}
                            </div>
                          </div>
                        </div>
                      </ScrollAnimation>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="fade-up" className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied
              customers
            </p>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-up" delay={200}>
            <TestimonialCarousel />
          </ScrollAnimation>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="fade-up" className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to transform your space? Contact us today for a free quote
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <ScrollAnimation animation="fade-right">
              <div className="space-y-6">
                <ScrollAnimation animation="fade-up" delay={0}>
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <p className="text-muted-foreground">(555) 123-4567</p>
                      <p className="text-sm text-muted-foreground">
                        Mon-Sun: 7AM - 9PM
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation animation="fade-up" delay={100}>
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground">
                        info@Albert International Uganda Limited.com
                      </p>
                      <p className="text-sm text-muted-foreground">
                        We respond within 24 hours
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation animation="fade-up" delay={200}>
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Service Area</h3>
                      <p className="text-muted-foreground">
                        Greater Metro Area
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Free estimates available
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-left" delay={200}>
              <div className="rounded-lg border bg-card p-8">
                {/* Controlled contact form that posts to a configurable Formspree endpoint.
                    Configure the endpoint using VITE_FORMSPREE_ENDPOINT or
                    VITE_FORMSPREE_FORM_ID in a .env file (see .env.example).
                */}
                <ContactForm />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/30 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Albert International Uganda Limited
              </h3>
              <p className="text-sm text-muted-foreground">
                Professional cleaning services you can trust. Making your space
                shine since 2015.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="hover:text-primary transition-colors"
                  >
                    Residential
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="hover:text-primary transition-colors"
                  >
                    Commercial
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="hover:text-primary transition-colors"
                  >
                    Deep Cleaning
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="hover:text-primary transition-colors"
                  >
                    Specialized
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="hover:text-primary transition-colors"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("testimonials")}
                    className="hover:text-primary transition-colors"
                  >
                    Testimonials
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="hover:text-primary transition-colors"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>(555) 123-4567</li>
                <li>info@Albert International Uganda Limited.com</li>
                <li>Greater Metro Area</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t text-center text-sm text-muted-foreground">
            <p>
              &copy; {new Date().getFullYear()} Albert International Uganda
              Limited. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

// --- ContactForm component -----------------------------------------------------------------
function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const FORMSPREE_ENDPOINT =
    // Preferred: full endpoint
    (import.meta.env as any).VITE_FORMSPREE_ENDPOINT ||
    // Fallback: form id
    ((import.meta.env as any).VITE_FORMSPREE_FORM_ID
      ? `https://formspree.io/f/${
          (import.meta.env as any).VITE_FORMSPREE_FORM_ID
        }`
      : "");

  const update = (k: string, v: string) =>
    setFormData((s) => ({ ...s, [k]: v }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      return;
    }

    if (!FORMSPREE_ENDPOINT) {
      // No Formspree configured — fall back to opening the user's mail client
      // addressed to the requested email. This avoids a hard error in dev.
      const to = "ocenmoses76@gmail.com";
      const subject = `Contact from ${formData.name || "Website"}`;
      const body = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\n${formData.message}`;
      // Use mailto to open the user's mail client with prefilled content.
      window.location.href = `mailto:${to}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
      setStatus("success");
      return;
    }

    setStatus("sending");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        console.error("Form submit failed:", await res.text());
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Name
        </label>
        <input
          value={formData.name}
          onChange={(e) => update("name", e.target.value)}
          type="text"
          id="name"
          className="w-full px-4 py-2 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          placeholder="Your name"
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email
        </label>
        <input
          value={formData.email}
          onChange={(e) => update("email", e.target.value)}
          type="email"
          id="email"
          className="w-full px-4 py-2 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          placeholder="your.email@example.com"
          required
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-2">
          Phone
        </label>
        <input
          value={formData.phone}
          onChange={(e) => update("phone", e.target.value)}
          type="tel"
          id="phone"
          className="w-full px-4 py-2 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          placeholder="(555) 123-4567"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message
        </label>
        <textarea
          value={formData.message}
          onChange={(e) => update("message", e.target.value)}
          id="message"
          rows={4}
          className="w-full px-4 py-2 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
          placeholder="Tell us about your cleaning needs..."
          required
        />
      </div>

      <Button
        type="submit"
        className="w-full"
        size="lg"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </Button>

      {status === "success" && (
        <p className="text-sm text-green-600">
          Message sent — we'll be in touch soon.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-600">
          There was an error sending your message. Please try again.
        </p>
      )}
    </form>
  );
}
