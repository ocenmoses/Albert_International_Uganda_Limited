import { Car, Droplets, ShieldCheck, Clock, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroBackground from "@/components/HeroBackground";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import ScrollAnimation from "@/components/ScrollAnimation";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar"; // Make sure to import your Navbar

const features = [
  {
    title: "Premium Hand Wash",
    description:
      "Gentle exterior cleaning using pH-neutral shampoos and microfiber mitts to prevent swirl marks.",
    icon: <Droplets className="w-6 h-6 text-primary" />,
  },
  {
    title: "Interior Detailing",
    description:
      "Deep vacuuming, steam cleaning, and leather conditioning for a factory-fresh feel.",
    icon: <Car className="w-6 h-6 text-primary" />,
  },
  {
    title: "Paint Protection",
    description:
      "High-grade wax and ceramic coating applications to keep your vehicle shining longer.",
    icon: <ShieldCheck className="w-6 h-6 text-primary" />,
  },
  {
    title: "Express Service",
    description:
      "Efficient cleaning protocols designed to get you back on the road in under 45 minutes.",
    icon: <Clock className="w-6 h-6 text-primary" />,
  },
];

// Animation
const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const WashingBay = () => {
  const [isDark, setIsDark] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Detect system theme
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDark(mq.matches);
    document.documentElement.classList.toggle("dark", mq.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsDark(e.matches);
      document.documentElement.classList.toggle("dark", e.matches);
    };

    mq.addEventListener("change", handleChange);
    return () => mq.removeEventListener("change", handleChange);
  }, []);

  // Parallax (hero section only)
  useEffect(() => {
    const handleScroll = () => {
      if (videoRef.current) {
        const heroHeight = videoRef.current.parentElement?.offsetHeight || 0;
        const scrollY = window.scrollY;
        if (scrollY < heroHeight) {
          const offset = scrollY * 0.3;
          videoRef.current.style.transform = `translateY(${offset}px)`;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToSection(sectionId: string): void {
    if (typeof window === "undefined") return;
    if (!sectionId) return;

    // quick aliases
    if (sectionId === "top" || sectionId === "home" || sectionId === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const el =
      document.getElementById(sectionId) ||
      document.querySelector<HTMLElement>(`[data-section="${sectionId}"]`) ||
      document.querySelector<HTMLElement>(`a[name="${sectionId}"]`);

    if (!el) {
      // fallback: scroll to top if target not found
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // try to account for a fixed navbar if present
    const nav = document.querySelector<HTMLElement>(
      "nav, .navbar, [role='navigation']"
    );
    const offset = nav ? nav.getBoundingClientRect().height : 0;
    const top = el.getBoundingClientRect().top + window.scrollY - offset - 12; // small padding

    window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
  }

  return (
    <>
      <div className="min-h-screen bg-background text-white overflow-x-hidden">
        {/* HERO SECTION */}
        <section className="relative min-h-[80vh] flex flex-col items-center justify-center overflow-hidden">
          {/* Background Video */}
          <HeroBackground
            {...({ videoRef, videoSrc: "/washingbay.mp4" } as any)}
            className="absolute inset-0 w-full h-full object-cover z-0"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50 z-10"></div>

          {/* Navbar on top of video */}
          <div className="absolute top-0 left-0 right-0 z-20">
            <Navbar />
            {/* Pass transparent prop to make it sit over video */}
          </div>

          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-24"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Professional Washing Bay
            </h1>
            <p className="text-lg text-white/90 mb-8">
              Premium vehicle care combining advanced pressure washing with
              meticulous hand-finishing. We don't just wash — we preserve your
              investment.
            </p>
            <div className="flex justify-center flex-wrap gap-4">
              <Button
                size="lg"
                className="text-lg px-8 py-6"
                onClick={() => scrollToSection("contact")}
              >
                Book Wash
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full hover:scale-105"
              >
                View Pricing
              </Button>
            </div>
          </motion.div>
        </section>

        {/* FEATURE GRID */}
        <section className="container mx-auto px-4 py-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUpVariants}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  boxShadow: "0 15px 25px rgba(0,0,0,0.3)",
                }}
                className="p-6 rounded-2xl border border-border bg-card/50 backdrop-blur-sm transition-all"
              >
                <div className="mb-4 p-3 bg-primary/10 rounded-xl w-fit">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-white/90 text-sm mt-2">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CONTENT SECTION */}
        <section className="container mx-auto px-4 py-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-accent/30 rounded-3xl p-8 md:p-12"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Why Choose AIU Washing Bay?
                </h2>
                <ul className="space-y-4">
                  {[
                    "Eco-friendly water reclamation system",
                    "Biodegradable premium cleaning agents",
                    "Specialized care for luxury and sports cars",
                    "Comfortable waiting lounge with Wi-Fi",
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.15, duration: 0.5 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl border border-primary/10 flex items-center justify-center hover:scale-105 transition-transform">
                  <Car className="w-24 h-24 text-primary/40" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        <ScrollAnimation animation="fade-left" delay={200}>
          <div className="rounded-lg border bg-card p-8">
            {/* Controlled contact form that posts to a configurable Formspree endpoint.
                                Configure the endpoint using VITE_FORMSPREE_ENDPOINT or
                                VITE_FORMSPREE_FORM_ID in a .env file (see .env.example).
                            */}
            <Contact />
          </div>
        </ScrollAnimation>
      </div>

      <div className="pt-8 border-t text-center text-sm text-muted-foreground">
        <p>
          &copy; {new Date().getFullYear()} Albert International Uganda Limited.
          All rights reserved.
        </p>
      </div>
      <br />
      <br />
    </>
  );
};

export default WashingBay;
