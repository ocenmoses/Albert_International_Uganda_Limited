import { useState, useEffect } from "react";
import { ArrowRight, X, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";

const services = [
  {
    id: 1,
    title: "Ice Cream Production",
    description:
      "High-quality ice cream manufacturing with various flavors, using premium ingredients and modern processing for retail and wholesale in Uganda.",
    features: [
      "Creamy & exotic flavors",
      "Bulk & packaged options",
      "Hygiene & quality control",
      "Custom branding available",
    ],
    image:
      "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?w=800&q=80", // factory/processing style fallback; ice cream related
  },
  {
    id: 2,
    title: "Chalk Manufacturing",
    description:
      "Durable, dust-free chalk sticks for schools, offices, and educational use — produced with safe, non-toxic materials.",
    features: [
      "White & colored varieties",
      "Standard & jumbo sizes",
      "Low-dust formula",
      "Bulk supply for institutions",
    ],
    image:
      "https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?w=800&q=80", // industrial production line
  },
  {
    id: 3,
    title: "Bathing & Laundry Soap Production",
    description:
      "Premium bathing soap and laundry bar soap made with natural oils, effective cleaning, and long-lasting quality.",
    features: [
      "Moisturizing bathing bars",
      "High-foam laundry soap",
      "Antibacterial options",
      "Eco-friendly packaging",
    ],
    image:
      "https://images.pexels.com/photos/29764115/pexels-photo-29764115.jpeg?w=800&q=80", // soap production factory
  },
  {
    id: 4,
    title: "Toilet Paper Manufacturing",
    description:
      "Soft, absorbent, and strong toilet paper rolls produced in various ply options for households and commercial use.",
    features: [
      "2-ply & 3-ply varieties",
      "Jumbo & standard rolls",
      "Septic-safe & biodegradable",
      "Custom embossing available",
    ],
    image:
      "https://images.pexels.com/photos/11515346/pexels-photo-11515346.jpeg?w=800&q=80", // toilet paper production line
  },
  {
    id: 5,
    title: "Body Lotion & Jelly Production",
    description:
      "Nourishing body lotions and petroleum jelly formulated for daily skin care, hydration, and protection.",
    features: [
      "Vitamin-enriched lotions",
      "Pure petroleum jelly",
      "Fragranced & unscented",
      "Large & retail packaging",
    ],
    image:
      "https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?w=800&q=80", // cosmetics/production style
  },
  {
    id: 6,
    title: "Detergent Powder Production",
    description:
      "Powerful laundry detergent powder for effective stain removal, brightening, and fabric care in hard water conditions.",
    features: [
      "High-suds formula",
      "Color-safe & enzyme-based",
      "Economical bulk packs",
      "Suitable for machine & hand wash",
    ],
    image:
      "https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?w=800&q=80", // industrial mixing/production
  },
];

export default function ManufacturingPage() {
  const [selectedService, setSelectedService] = useState<
    null | (typeof services)[0]
  >(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const applyTheme = (isDark: boolean) =>
      document.documentElement.classList.toggle("dark", isDark);
    applyTheme(mq.matches);
    mq.addEventListener("change", (e) => applyTheme(e.matches));

    if (selectedService) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => mq.removeEventListener("change", (e) => applyTheme(e.matches));
  }, [selectedService]);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground w-full overflow-x-hidden">
      <Navbar />

      {/* --- CINEMATIC HERO --- */}
      <section className="relative w-full min-h-[85vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={services[0].image}
            className="w-full h-full object-cover"
            alt="Hero"
          />
          <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-[2px]" />
        </div>
        <div className="container mx-auto relative z-20 px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl sm:text-7xl font-black text-white leading-tight mb-6 uppercase italic tracking-tighter">
              Elite <span className="text-blue-400">Manufacturing</span>{" "}
              Solutions
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
              Quality production of everyday essentials — ice cream, soaps,
              toilet paper, lotions, and more — made in Uganda with care and
              reliability.
            </p>
            <Button
              onClick={scrollToContact}
              className="bg-blue-600 hover:bg-blue-700 text-white h-16 px-12 rounded-full text-lg font-black uppercase tracking-widest shadow-2xl transition-transform active:scale-95"
            >
              Request a Quote
            </Button>
          </motion.div>
        </div>
      </section>

      {/* --- SERVICES GRID (NO ICONS) --- */}
      <section className="w-full py-12 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter">
              Our Products & Expertise
            </h2>
            <div className="w-20 h-2 bg-blue-600 mx-auto mt-2 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <motion.div
                key={service.id}
                whileHover={{ y: -10 }}
                className="group flex flex-col bg-card rounded-[2.5rem] overflow-hidden border border-border shadow-lg transition-all duration-500"
              >
                <div className="aspect-video w-full overflow-hidden relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* No icon div here */}
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-black mb-3 uppercase tracking-tight italic group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-grow">
                    {service.description}
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setSelectedService(service)}
                    className="w-full border-blue-600/30 text-blue-600 font-black uppercase tracking-widest hover:bg-blue-600 hover:text-white py-6 rounded-2xl transition-all"
                  >
                    Details <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTACT & FOOTER --- */}
      <div className="w-full bg-muted/30 border-t border-border mt-8">
        <div id="contact" className="py-12 px-4">
          <div className="max-w-5xl mx-auto bg-card p-8 md:p-12 rounded-[3rem] border border-border shadow-xl">
            <Contact />
          </div>
        </div>
        <footer className="pb-10 pt-0 px-4 text-center">
          <div className="max-w-5xl mx-auto border-t border-border pt-8">
            <p className="text-muted-foreground text-[10px] md:text-xs font-black uppercase tracking-[0.4em]">
              &copy; {new Date().getFullYear()} Olwit Ejang International
              Limited
            </p>
          </div>
        </footer>
      </div>

      {/* --- MODAL (keeps CheckCircle2 & X) --- */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-900/90 backdrop-blur-md">
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              className="bg-card w-full max-w-2xl h-[90vh] sm:h-auto sm:max-h-[85vh] rounded-t-[3rem] sm:rounded-[3rem] overflow-hidden flex flex-col border border-border shadow-2xl"
            >
              <div className="flex justify-between items-center p-6 border-b border-border bg-card sticky top-0 z-10">
                <h2 className="text-xl font-black uppercase italic tracking-tight">
                  {selectedService.title}
                </h2>
                <button
                  onClick={() => setSelectedService(null)}
                  className="p-2 bg-muted rounded-full hover:bg-red-500/10 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="overflow-y-auto">
                <img
                  src={selectedService.image}
                  className="w-full h-64 object-cover"
                  alt=""
                />
                <div className="p-8">
                  <p className="text-muted-foreground mb-8 text-lg font-medium">
                    {selectedService.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                    {selectedService.features.map((f: string, i: number) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 p-4 bg-muted/50 rounded-2xl border border-border"
                      >
                        <CheckCircle2 className="text-blue-600 w-5 h-5" />
                        <span className="text-sm font-bold uppercase tracking-wide">
                          {f}
                        </span>
                      </div>
                    ))}
                  </div>
                  <Button
                    onClick={() => {
                      setSelectedService(null);
                      scrollToContact();
                    }}
                    className="w-full h-16 bg-blue-600 rounded-2xl text-lg font-black uppercase tracking-widest"
                  >
                    Request Quote
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
