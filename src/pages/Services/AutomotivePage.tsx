import { useState, useEffect } from "react";
import {
  Car,
  Truck,
  Wrench,
  Hammer,
  SprayCan,
  Sofa, // Note: If CarInterior isn't available, you can use Sofa or Users as fallback
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
    icon: Car,
    title: "Car Import & Export",
    description:
      "Seamless import and export of brand new and used vehicles to and from Uganda with full customs clearance support.",
    features: [
      "Brand new vehicles",
      "Quality used cars",
      "Duty & tax handling",
      "Global sourcing network",
    ],
    image: "https://i.ytimg.com/vi/J9mXIvmjvBE/sddefault.jpg",
  },
  {
    id: 2,
    icon: Car,
    title: "Truck & Tanker Sales",
    description:
      "Wide range of heavy-duty trucks and specialized tanker trucks for commercial and industrial use, both new and used.",
    features: [
      "Cargo & flatbed trucks",
      "Fuel & water tankers",
      "Tipper & dump trucks",
      "After-sales support",
    ],
    image:
      "https://trucktanks.com/wp-content/uploads/2016/06/Fuel-Truck-Stock-17658-8.jpg",
  },
  {
    id: 3,
    icon: Wrench,
    title: "General Spare Parts",
    description:
      "Comprehensive inventory of genuine and aftermarket spare parts for cars, trucks, and commercial vehicles.",
    features: [
      "Engine & transmission parts",
      "Brakes & suspension",
      "Electrical components",
      "Body & accessories",
    ],
    image:
      "https://www.ewaldauto.com/blogs/4667/wp-content/uploads/2024/01/Used-car-dealerships-in-wisconsin.jpg",
  },
  {
    id: 4,
    icon: Wrench,
    title: "Vehicle Repairs & Maintenance",
    description:
      "Professional mechanical repairs and routine maintenance services for all vehicle types.",
    features: [
      "Engine diagnostics & repair",
      "Transmission servicing",
      "Brake & suspension work",
      "Electrical system fixes",
    ],
    image:
      "https://www.thurstontalk.com/wp-content/uploads/2019/11/Boss-Auto-Repair-in-Olympia-Four-Wheel-Drive-Repair.jpg",
  },
  {
    id: 5,
    icon: Hammer,
    title: "Panel Beating & Dent Repair",
    description:
      "Expert panel beating and dent removal to restore your vehicle's body to factory condition.",
    features: [
      "Accident damage repair",
      "Dent removal & PDR",
      "Frame straightening",
      "Welding & fabrication",
    ],
    image:
      "https://cdn.aarp.net/content/dam/aarpe/en/home/auto/car-maintenance-safety/find-mechanic-trust/_jcr_content/root/container_main/container_body_main/container_body1/container_body_cf/container_image/articlecontentfragment/cfimage.coreimg.50.932.jpeg/content/dam/aarp/auto/2023/07/1140-auto-mechanic-bottom-of-car.jpg",
  },
  {
    id: 6,
    icon: SprayCan,
    title: "Color Spraying & Refinishing",
    description:
      "Professional automotive painting and color spraying services using high-quality paints and techniques.",
    features: [
      "Full vehicle respray",
      "Panel color matching",
      "Scratch & chip repair",
      "Protective coatings",
    ],
    image: "https://www.spraysystems.com/wp-content/uploads/Auto-Finisher.jpg",
  },
  {
    id: 7,
    icon: Sofa, // Using Sofa as placeholder; replace with appropriate icon if available (e.g., Car for vehicle)
    title: "Car Interior Replacement",
    description:
      "Complete interior refurbishment including seat reupholstery, dashboard repair, and custom replacements.",
    features: [
      "Leather & fabric seats",
      "Dashboard & trim renewal",
      "Carpet & headliner replacement",
      "Custom interior upgrades",
    ],
    image:
      "https://b2274312.smushcdn.com/2274312/wp-content/uploads/2017/09/Katzkin-Ford-F150-1-1.jpg?lossy=0&strip=1&webp=1",
  },
];

export default function AutomotivePage() {
  const [selectedService, setSelectedService] = useState<
    null | (typeof services)[0]
  >(null);

  // Sync with system theme and handle modal overflow
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
              Elite <span className="text-blue-400">Automotive</span> Solutions
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
              Premium vehicle import/export, sales, repairs, and refurbishment
              services across Uganda. Quality cars, trucks, parts, and expert
              craftsmanship — we keep you moving.
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

      {/* --- SERVICES GRID (TIGHT SPACING) --- */}
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

      {/* --- CONTACT & FOOTER GROUPED (ADAPTIVE DARK) --- */}
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

      {/* --- THEME-AWARE MODAL --- */}
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
                    Book Service
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
