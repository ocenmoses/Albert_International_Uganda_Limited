import { useState, useEffect } from "react";
import {
  Construction,
  HardHat,
  Pipette,
  Shovel,
  Zap,
  Wrench,
  Store, // Valid Lucide icon (shop/supermarket)
  Droplet,
  ArrowRight,
  X,
  CheckCircle2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";

const services = [
  {
    id: 1,
    icon: Construction,
    title: "Petrol Station Construction",
    description:
      "Complete turnkey construction of modern fuel stations, including site preparation, civil works, and infrastructure setup in Uganda.",
    features: [
      "Site layout & civil engineering",
      "Canopy & building erection",
      "Drainage & paving",
      "Compliance with UNBS & safety regs",
    ],
    image:
      "https://images.pexels.com/photos/221506/pexels-photo-221506.jpeg?w=800&q=80",
  },
  {
    id: 2,
    icon: HardHat,
    title: "Survey & Site Assessment",
    description:
      "Professional land survey, environmental impact assessment, and regulatory approvals for new or upgraded petrol stations.",
    features: [
      "Topographical & geotechnical survey",
      "EIA & NEMA approvals",
      "Fuel demand forecasting",
      "Zoning & permit handling",
    ],
    image:
      "https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?w=800&q=80",
  },
  {
    id: 3,
    icon: Pipette,
    title: "Piping & Tank Installation",
    description:
      "Expert installation of underground/aboveground storage tanks, fuel piping systems, and leak detection infrastructure.",
    features: [
      "Double-wall tank installation",
      "Pressure piping & fittings",
      "Interstitial monitoring",
      "Corrosion protection",
    ],
    image:
      "https://images.pexels.com/photos/258447/pexels-photo-258447.jpeg?w=800&q=80",
  },
  {
    id: 4,
    icon: Shovel,
    title: "Excavation & Tank Digging",
    description:
      "Safe and precise excavation for fuel storage tanks, including backfilling, compaction, and site reinstatement.",
    features: [
      "Deep excavation for USTs",
      "Soil testing & stabilization",
      "Dewatering if needed",
      "Environmental safeguards",
    ],
    image:
      "https://images.pexels.com/photos/221506/pexels-photo-221506.jpeg?w=800&q=80",
  },
  {
    id: 5,
    icon: Zap,
    title: "Generators & Power Systems",
    description:
      "Supply and installation of backup generators, electrical systems, and lighting for reliable 24/7 station operation.",
    features: [
      "Diesel generator sets",
      "ATS & electrical panels",
      "LED forecourt lighting",
      "Solar hybrid options",
    ],
    image:
      "https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?w=800&q=80",
  },
  {
    id: 6,
    icon: Wrench,
    title: "Service Bay & Equipment",
    description:
      "Installation of service bay tools, lifts, air compressors, and maintenance equipment for vehicle servicing at stations.",
    features: [
      "Two-post & four-post lifts",
      "Air & oil dispensers",
      "Diagnostic tools",
      "Used oil collection systems",
    ],
    image:
      "https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?w=800&q=80",
  },
  {
    id: 7,
    icon: Store,
    title: "Convenience Store & Supermarket Setup",
    description:
      "Design and equipping of on-site shops, mini-supermarkets, food courts, and retail spaces to boost non-fuel revenue.",
    features: [
      "Shelving & POS systems",
      "Refrigeration & food display",
      "Branded shop interiors",
      "Inventory management",
    ],
    image:
      "https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?w=800&q=80",
  },
  {
    id: 8,
    icon: Droplet,
    title: "Washing Bay & Car Care Equipment",
    description:
      "Supply and installation of car wash bays, high-pressure washers, vacuums, and detailing equipment for added services.",
    features: [
      "Automatic & manual wash systems",
      "Vacuum stations",
      "Water recycling systems",
      "Polish & detailing tools",
    ],
    image:
      "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?w=800&q=80",
  },
];

export default function PetroleumPage() {
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
              Elite <span className="text-blue-400">Petroleum</span> Solutions
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
              Comprehensive petrol station construction, equipment supply,
              installation, and operational services across Uganda. From site
              survey to full setup — we build safe, profitable fuel stations.
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

      <section className="w-full py-12 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter">
              Our Expertise
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
                  {/* <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-md p-3 rounded-2xl">
                    <service.icon className="w-6 h-6 text-blue-600" />
                  </div> */}
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
