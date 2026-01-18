import {
  Shirt,
  WashingMachine,
  Sparkles,
  Timer,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import type { Variants } from "framer-motion";
import ScrollAnimation from "@/components/ScrollAnimation";
import Contact from "@/components/Contact";

// Laundry Service Features
const features = [
  {
    title: "Professional Washing",
    description:
      "Thorough garment cleaning using modern machines and fabric-safe detergents.",
    icon: <WashingMachine className="w-6 h-6 text-primary" />,
  },
  {
    title: "Ironing & Pressing",
    description: "Perfect wrinkle-free finishing for all types of clothes.",
    icon: <Shirt className="w-6 h-6 text-primary" />,
  },
  {
    title: "Stain Removal",
    description:
      "Expert treatment of tough stains using eco-friendly cleaning solutions.",
    icon: <Sparkles className="w-6 h-6 text-primary" />,
  },
  {
    title: "Fast Delivery",
    description:
      "Quick turnaround service guaranteeing fresh garments on time.",
    icon: <Timer className="w-6 h-6 text-primary" />,
  },
];

// Animation Variants
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

const Laundry = () => {
  const [isDark, setIsDark] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  // Detect and apply system theme
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

  // Parallax on hero only
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;

      const heroHeight = heroRef.current.offsetHeight;
      const scrollY = window.scrollY;

      if (scrollY < heroHeight) {
        const offset = scrollY * 0.3;
        heroRef.current.style.transform = `translateY(${offset}px)`;
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
    <div className="min-h-screen bg-background text-white relative">
      {/* NAVBAR FIX: Default dark background on mobile dropdown */}
      <style>
        {`
          @media (max-width: 768px) {
            .mobile-nav-dropdown {
              background: rgba(0, 0, 0, 0.7) !important;
              backdrop-filter: blur(6px);
            }
          }
        `}
      </style>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Image with parallax */}
        <div
          ref={heroRef}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/laundry.jpg')",
          }}
        ></div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* NAVBAR STANDING ON IMAGE EFFECT */}
        <div className="absolute top-0 left-0 w-full z-50">
          <div className="bg-transparent backdrop-blur-sm border-b border-white/20">
            {/* Your Navbar component here */}
          </div>
        </div>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto text-center px-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
            Professional Laundry Services
          </h1>

          <p className="text-white/90 text-lg md:text-xl mb-8">
            High-quality laundry care using modern machines and expert fabric
            handling.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="text-lg px-8 py-6"
              onClick={() => scrollToSection("contact")}
            >
              Book Laundry Service
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="rounded-full hover:scale-105 transition-transform"
            >
              Pricing Plans
            </Button>
          </div>
        </motion.div>
      </section>

      {/* FEATURES GRID */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUpVariants}
              whileHover={{
                scale: 1.05,
                y: -6,
                boxShadow: "0 18px 30px rgba(0,0,0,0.3)",
              }}
              className="p-6 rounded-2xl border border-border bg-white/10 backdrop-blur-xl transition-all duration-300"
            >
              <div className="mb-4 p-3 bg-primary/10 rounded-xl w-fit">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-white/80 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/10 backdrop-blur-xl rounded-3xl p-10"
        >
          <div className="grid md:grid-cols-2 gap-14 items-center">
            {/* LEFT TEXT */}
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Why Choose Our Laundry?
              </h2>

              <ul className="space-y-4">
                {[
                  "Fabric-safe detergents and eco-friendly washing",
                  "Separate washing for delicate and colored garments",
                  "Ironing, folding, and packaging included",
                  "Quick turnaround with reliable delivery options",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.15 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* RIGHT IMAGE CARD WITH HOVER */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div
                className="
            overflow-hidden aspect-video rounded-2xl border border-primary/10 
            shadow-md bg-card transition-all duration-500 group
            hover:scale-[1.03] hover:shadow-2xl hover:border-primary/30 hover:-translate-y-2
          "
              >
                <img
                  src="/laundry-hero.jpg"
                  alt="Laundry Service"
                  className="w-full h-full object-cover 
              transition-all duration-500 
              group-hover:scale-110 group-hover:opacity-90"
                />
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
  );
};

export default Laundry;
