import { Car, Droplets, ShieldCheck, Clock, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroBackground from "@/components/HeroBackground";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useEffect, useRef } from "react";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";

const features = [
  {
    title: "Premium Hand Wash",
    description:
      "Gentle exterior cleaning using pH-neutral shampoos and microfiber mitts.",
    icon: Droplets,
  },
  {
    title: "Interior Detailing",
    description:
      "Deep vacuuming, steam cleaning, and leather conditioning for a factory-fresh feel.",
    icon: Car,
  },
  {
    title: "Paint Protection",
    description:
      "High-grade wax and ceramic coating applications to keep your vehicle shining.",
    icon: ShieldCheck,
  },
  {
    title: "Express Service",
    description:
      "Efficient cleaning protocols designed to get you back on the road in under 45 minutes.",
    icon: Clock,
  },
];

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
  const videoRef = useRef<HTMLVideoElement>(null);

  // Auto-detect and sync system theme
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const applyTheme = (isDark: boolean) => {
      document.documentElement.classList.toggle("dark", isDark);
    };

    applyTheme(mq.matches);
    mq.addEventListener("change", (e) => applyTheme(e.matches));
    return () => mq.removeEventListener("change", (e) => applyTheme(e.matches));
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-white">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden">
        <HeroBackground
          {...({
            videoRef,
            videoSrc: "https://www.pexels.com/download/video/6873151/",
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
          } as any)}
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-black/60 z-10 backdrop-blur-[2px]"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 text-center px-4 max-w-4xl mx-auto"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-bold tracking-widest uppercase mb-4">
            Uganda's Premier Detailers
          </span>
          <h1 className="text-5xl md:text-7xl font-black mb-6 text-white leading-tight uppercase italic tracking-tighter">
            Elite <span className="text-primary">Washing</span> Bay
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Combining advanced pressure technology with meticulous
            hand-finishing to preserve your vehicle's value.
          </p>
          <Button
            size="lg"
            className="text-lg px-10 py-8 rounded-full shadow-2xl hover:scale-105 transition-transform"
            onClick={scrollToContact}
          >
            Book Your Wash Now
          </Button>
        </motion.div>
      </section>

      {/* --- FEATURE GRID: Adaptive Dark Mode --- */}
      <section className="container mx-auto px-4 relative z-30 -mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariants}
              className="group p-8 rounded-[2rem] border border-border bg-card hover:bg-accent/50 transition-all duration-500 flex flex-col items-start shadow-xl dark:shadow-none"
            >
              <div className="mb-6 p-4 bg-primary/10 text-primary rounded-2xl group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 uppercase tracking-tight italic">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
              <div className="mt-6 w-12 h-1 bg-primary/20 group-hover:w-full group-hover:bg-primary transition-all duration-500 rounded-full" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- WHY CHOOSE US: High Contrast Card --- */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-[3rem] p-8 md:p-16 shadow-2xl dark:shadow-none relative overflow-hidden"
        >
          {/* Subtle Background Accent for Dark Mode */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32" />

          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight uppercase italic tracking-tighter">
                Why Choose{" "}
                <span className="text-primary">Albert International</span>?
              </h2>

              <div className="space-y-4">
                {[
                  "Eco-friendly water reclamation system",
                  "Biodegradable premium cleaning agents",
                  "Specialized care for luxury and sports cars",
                  "Comfortable waiting lounge with Wi-Fi",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-muted/50 border border-border hover:border-primary/50 transition-colors group"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                      <CheckCircle2 className="w-5 h-5 text-primary group-hover:text-white" />
                    </div>
                    <span className="font-bold text-sm uppercase tracking-widest opacity-80">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative aspect-video rounded-[2rem] overflow-hidden shadow-2xl border border-border">
              <img
                src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=800&q=80"
                alt="Premium Detailing"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-md px-4 py-2 rounded-full border border-border">
                <p className="text-[10px] font-black uppercase tracking-widest text-primary">
                  Certified Detailers
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="container mx-auto px-4 pb-16">
        <div className="bg-card border border-border rounded-[3rem] p-8 md:p-12 shadow-inner">
          <Contact />
        </div>
      </section>

      <footer className="py-12 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground">
            &copy; {new Date().getFullYear()} Albert International Uganda
            Limited
          </p>
        </div>
      </footer>
    </div>
  );
};

export default WashingBay;
