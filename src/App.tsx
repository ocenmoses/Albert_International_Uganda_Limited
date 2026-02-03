import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import TestimonialCarousel from "./components/TestimonialCarousel";
import ServicesCarousel from "./components/ServicesCarousel";
import ScrollAnimation from "./components/ScrollAnimation";
import HeroBackground from "./components/HeroBackground";
import WhatsAppButton from "./components/WhatsAppButton";
import { Button } from "./components/ui/button";
import "./App.css";
import { Phone, Mail, MapPin, Clock, Users, Award, Shield } from "lucide-react";

function Home() {
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
      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      >
        {/* Background Video/Image */}
        <HeroBackground
          // Uncomment and add your video URL here
          // videoSrc="/clean.mp4"
          // poster="/images/cleaning-hero-poster.jpg"

          // Or use an image instead. Increase overlayOpacity to dim the
          // background so hero content is more readable.
          imageSrc="/images/AIU.png"
          overlayOpacity={0.6}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white dark:text-foreground">
              Olwit Ejang International Limited
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-green-600 dark:text-muted-foreground font-medium">
              A trusted professional multi-service group of companies providing
              high quality, standard, fast, speedy and safe variety services...
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
      <section
        id="services"
        className="pt-12 pb-4 md:pt-16 md:pb-8 bg-muted/30"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <ScrollAnimation animation="fade-up" className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Our Services, Works, Products and Supply
            </h2>
          </ScrollAnimation>

          {/* Carousel */}
          <ScrollAnimation animation="fade-up" delay={200} className="mb-8">
            <ServicesCarousel />
          </ScrollAnimation>

          {/* Professional Content - No Card, Tight Spacing */}
          <ScrollAnimation
            animation="fade-in"
            delay={400}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="space-y-3 px-4">
              <p className="text-lg md:text-xl text-foreground font-semibold leading-snug transition-colors duration-300 hover:text-primary">
                A High Quality Professional Services, Works and Products assured
                to our valuable clients.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Fast, Efficient and Timely Work, Products and Services
                Completion and delivery to client's orders.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="pt-4 pb-4 md:pb-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Column */}
            <ScrollAnimation animation="fade-right">
              <div className="flex flex-col space-y-4">
                {" "}
                {/* Reduced space-y from 6 to 4 */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                  Why Choose Olwit Ejang International Limited?
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Olwit Ejang International Limited is a trusted professional
                  group of companies providing MultiServices, Work, Supply and
                  Products Globally.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                      desc: "Available 24/7",
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="h-8 w-8 rounded bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm">{item.title}</h4>
                        <p className="text-xs text-muted-foreground">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="pt-2">
                  {" "}
                  {/* Reduced padding-top for the button */}
                  <Button
                    size="lg"
                    className="w-full sm:w-auto"
                    onClick={() => scrollToSection("contact")}
                  >
                    Get Started Today
                  </Button>
                </div>
              </div>
            </ScrollAnimation>

            {/* Right Column (Stats) */}
            <ScrollAnimation animation="fade-left" delay={200}>
              <div className="relative max-w-md mx-auto lg:max-w-none">
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/10 to-transparent p-6 flex items-center justify-center border border-primary/5">
                  <div className="grid grid-cols-2 gap-4 w-full">
                    {[
                      { label: "Happy Clients", val: "500+" },
                      { label: "Satisfaction", val: "98%" },
                      { label: "Support", val: "24/7" },
                      { label: "Rating", val: "5★" },
                    ].map((stat, num) => (
                      <div
                        key={num}
                        className="aspect-square rounded-xl bg-card border flex flex-col items-center justify-center shadow-sm"
                      >
                        <div className="text-2xl font-bold text-primary">
                          {stat.val}
                        </div>
                        <div className="text-[10px] text-muted-foreground uppercase">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* pt-0 pulls the section header right up against the previous section's content */}
      <section id="testimonials" className="pt-0 pb-12 md:pb-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header - Removed top margin and minimized bottom margin */}
          <ScrollAnimation animation="fade-up" className="text-center mb-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 pt-4">
              What Our Clients Say
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it — hear from our satisfied
              customers.
            </p>
          </ScrollAnimation>

          {/* Carousel wrapper with no extra top margin */}
          <ScrollAnimation animation="fade-up" delay={100} className="mt-0">
            <div className="max-w-5xl mx-auto">
              <TestimonialCarousel />
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Contact Section */}
      {/* pt-4 pulls this section close to the Testimonials content above */}
      <section id="contact" className="pt-4 pb-16 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header - Minimal bottom margin */}
          <ScrollAnimation animation="fade-up" className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
              Get In Touch
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to transform your space? Contact us today for a free quote.
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto items-start">
            {/* Contact Info Details */}
            <ScrollAnimation animation="fade-right" className="space-y-4">
              {[
                {
                  icon: Phone,
                  title: "Phone",
                  detail: "(+256) XXX-XXXXXX",
                  sub: "Mon-Sun: 7AM - 9PM",
                },
                {
                  icon: Mail,
                  title: "Email",
                  detail: "info@oeil-ug.com",
                  sub: "We respond within 24 hours",
                },
                {
                  icon: MapPin,
                  title: "Service Area",
                  detail: "Greater Metro Area",
                  sub: "Free estimates available",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors"
                >
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm md:text-base">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm md:text-base">
                      {item.detail}
                    </p>
                    <p className="text-xs text-muted-foreground/70">
                      {item.sub}
                    </p>
                  </div>
                </div>
              ))}
            </ScrollAnimation>

            {/* Contact Form - Styled as a clean card */}
            <ScrollAnimation animation="fade-left" delay={200}>
              <div className="rounded-2xl border bg-card p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
                <ContactForm />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/30 pt-12 pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand Column */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Olwit Ejang International Limited
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Professional MultiServices, Work, Supply, and Products you can
                trust. Delivering excellence globally since 2015.
              </p>
            </div>

            {/* Quick Links: Services */}
            <div>
              <h4 className="font-semibold mb-4 text-foreground">
                Our Services
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {[
                  "Residential",
                  "Commercial",
                  "Deep Cleaning",
                  "Specialized",
                ].map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => scrollToSection("services")}
                      className="hover:text-primary transition-colors"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links: Company */}
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {["About Us", "Testimonials", "Contact"].map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => scrollToSection(link.toLowerCase())}
                      className="hover:text-primary transition-colors"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span>📞</span> (+256) XXX-XXXXXX
                </li>
                <li className="flex items-center gap-2">
                  <span>✉️</span> info@oeil-ug.com
                </li>
                <li className="flex items-center gap-2">
                  <span>📍</span> Greater Metro Area
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="pt-8 border-t text-center text-xs md:text-sm text-muted-foreground/60">
            <p>
              &copy; {new Date().getFullYear()} Olwit Ejang International
              Limited. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

import CleaningPage from "./pages/Services/Cleaning";
import WashingBayPage from "./pages/Services/WashingBay";
import Laundry from "./pages/Services/Laundry";
import Engineering from "./pages/Services/Engineering";
import TradingPage from "./pages/Services/TradingPage";
import IceCreamPage from "./pages/Services/IceCreamPage";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <WhatsAppButton />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/cleaning" element={<CleaningPage />} />
        <Route path="/services/washing-bay" element={<WashingBayPage />} />
        <Route path="/services/laundry" element={<Laundry />} />
        <Route path="/services/engineering" element={<Engineering />} />
        <Route path="/services/trading" element={<TradingPage />} />
        <Route path="/services/ice-cream" element={<IceCreamPage />} />
      </Routes>
    </BrowserRouter>
  );
}

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
        subject,
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
