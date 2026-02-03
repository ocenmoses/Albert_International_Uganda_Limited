import { useState, useEffect, useRef } from "react";
import {
  Shirt,
  WashingMachine,
  Sparkles,
  Timer,
  CheckCircle2,
  X,
  ArrowRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";

const laundryFeatures = [
  {
    title: "Professional Washing",
    description:
      "Thorough garment cleaning using modern machines and fabric-safe detergents.",
    icon: WashingMachine,
    image:
      "https://images.unsplash.com/photo-1545173153-5dd73dca98c7?w=800&q=80",
  },
  {
    title: "Ironing & Pressing",
    description:
      "Perfect wrinkle-free finishing for all types of clothes, from silks to suits.",
    icon: Shirt,
    image:
      "https://images.unsplash.com/photo-1495556650867-99590cea3657?w=800&q=80",
  },
  {
    title: "Stain Removal",
    description:
      "Expert treatment of tough stains using eco-friendly cleaning solutions.",
    icon: Sparkles,
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80",
  },
  {
    title: "Fast Delivery",
    description:
      "Quick turnaround service guaranteeing fresh garments back at your doorstep.",
    icon: Timer,
    image:
      "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?w=800&q=80",
  },
];

const Laundry = () => {
  const [selectedFeature, setSelectedFeature] = useState<any | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  // Sync System Theme & Parallax
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const applyTheme = (isDark: boolean) =>
      document.documentElement.classList.toggle("dark", isDark);
    applyTheme(mq.matches);
    mq.addEventListener("change", (e) => applyTheme(e.matches));

    const handleScroll = () => {
      if (!heroRef.current) return;
      const offset = window.scrollY * 0.4;
      heroRef.current.style.transform = `translateY(${offset}px)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      mq.removeEventListener("change", (e) => applyTheme(e.matches));
    };
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-blue-600 selection:text-white">
      <Navbar />

      {/* --- PREMIUM HERO SECTION --- */}
      <section className="relative min-h-[85vh] flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div
            ref={heroRef}
            className="absolute inset-0 w-full h-[120%] bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1521335629791-ce4aec67dd15?w=1600&q=80')",
            }}
          />
          <div className="absolute inset-0 bg-black/60 z-10 backdrop-blur-[1px]" />
        </div>

        <div className="container mx-auto relative z-20 px-4">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6 uppercase italic tracking-tighter">
              Elite <span className="text-blue-400">Laundry</span> Care
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
              Experience the gold standard in fabric preservation. Professional
              cleaning and master pressing delivered to your door.
            </p>
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white h-16 px-12 rounded-full text-lg font-black uppercase tracking-widest shadow-2xl transition-transform active:scale-95"
            >
              Book Your Pickup
            </Button>
          </motion.div>
        </div>
      </section>

      {/* --- ADAPTIVE SERVICE GRID --- */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter">
              Our Services
            </h2>
            <div className="w-20 h-2 bg-blue-600 mx-auto mt-2 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {laundryFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                onClick={() => setSelectedFeature(feature)}
                whileHover={{ y: -10 }}
                className="group cursor-pointer relative bg-card rounded-[2.5rem] overflow-hidden shadow-xl border border-border transition-all duration-500"
              >
                {/* Image Container */}
                <div className="relative h-64 w-full overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-md p-3 rounded-2xl border border-border">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity" />
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-xl font-black mb-3 uppercase italic tracking-tight group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-2">
                    {feature.description}
                  </p>
                  <div className="flex items-center text-blue-600 font-black text-xs gap-2 group-hover:gap-4 transition-all uppercase tracking-widest">
                    Details <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- THE ALBERT STANDARD (ADAPTIVE) --- */}
      <section className="py-8 px-4 bg-muted/30 border-y border-border">
        <div className="container mx-auto">
          <div className="bg-card rounded-[3rem] p-8 md:p-16 border border-border overflow-hidden shadow-2xl dark:shadow-none">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-4xl font-black mb-8 uppercase tracking-tighter italic">
                  The <span className="text-blue-600">Albert</span> Standard
                </h2>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    "Eco-Friendly Detergents",
                    "Delicate Fabric Specialist",
                    "Pressed & Folded Delivery",
                    "48hr Turnaround",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 p-5 bg-muted/50 rounded-2xl border border-border group hover:border-blue-600/50 transition-colors"
                    >
                      <div className="bg-blue-600/10 p-2 rounded-lg">
                        <CheckCircle2 className="w-6 h-6 text-blue-600" />
                      </div>
                      <span className="font-bold text-foreground uppercase text-xs tracking-widest">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="order-1 lg:order-2 rounded-[2.5rem] overflow-hidden shadow-2xl h-full min-h-[350px] border border-border">
                <img
                  src="https://images.unsplash.com/photo-1545173153-5dd73dca98c7?w=800&q=80"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  alt="Quality control"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTACT & FOOTER --- */}
      <div id="contact" className="w-full bg-muted/30 pt-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-card p-8 md:p-12 rounded-[3rem] border border-border shadow-2xl">
            <Contact />
          </div>
        </div>
        <footer className="py-12 px-4 text-center">
          <div className="max-w-5xl mx-auto border-t border-border pt-8">
            <p className="text-muted-foreground text-[10px] font-black uppercase tracking-[0.4em]">
              &copy; {new Date().getFullYear()} Albert International Uganda
              Limited
            </p>
          </div>
        </footer>
      </div>

      {/* --- THEME-AWARE MODAL --- */}
      <AnimatePresence>
        {selectedFeature && (
          <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              className="bg-card w-full max-w-xl h-[85vh] sm:h-auto rounded-t-[3rem] sm:rounded-[3rem] overflow-hidden shadow-2xl border border-border"
            >
              <div className="p-6 border-b border-border flex justify-between items-center bg-card sticky top-0 z-10">
                <h3 className="font-black uppercase tracking-tight italic text-xl">
                  {selectedFeature.title}
                </h3>
                <button
                  onClick={() => setSelectedFeature(null)}
                  className="p-3 bg-muted rounded-full transition-colors hover:bg-red-500/10"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="overflow-y-auto p-8">
                <img
                  src={selectedFeature.image}
                  className="w-full h-72 object-cover rounded-[2rem] mb-8 shadow-xl border border-border"
                  alt=""
                />
                <p className="text-muted-foreground mb-10 leading-relaxed text-lg font-medium">
                  {selectedFeature.description}
                </p>
                <Button
                  onClick={() => {
                    setSelectedFeature(null);
                    scrollToContact();
                  }}
                  className="w-full h-16 bg-blue-600 rounded-2xl text-lg font-black uppercase tracking-widest shadow-xl"
                >
                  Schedule a Pickup
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Laundry;
