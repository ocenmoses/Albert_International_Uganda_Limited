import { useState, useEffect } from "react";
import {
  Plane,
  Ticket,
  FileText,
  HeartPulse,
  GraduationCap,
  Briefcase,
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
    icon: Plane,
    title: "Aircraft Hiring",
    description:
      "Private aircraft charter services for weddings, prom nights, picnics, and executive travel.",
    features: [
      "Wedding aerial arrivals",
      "Prom & private events",
      "Luxury scenic flights",
      "Corporate charter services",
    ],
    image:
      "https://images.pexels.com/photos/46148/aircraft-jet-landing-cloud-46148.jpeg",
  },
  {
    id: 2,
    icon: Ticket,
    title: "Flight Booking",
    description:
      "Fast and reliable international and domestic flight booking services.",
    features: [
      "International flight booking",
      "Domestic flight reservations",
      "Corporate travel planning",
      "24/7 travel assistance",
    ],
    image: "https://images.pexels.com/photos/912050/pexels-photo-912050.jpeg",
  },
  {
    id: 3,
    icon: FileText,
    title: "Passport Processing",
    description:
      "Professional support for passport applications, renewals and travel documentation.",
    features: [
      "New passport applications",
      "Passport renewal services",
      "Visa support guidance",
      "Travel documentation help",
    ],
    image: "https://images.pexels.com/photos/7235804/pexels-photo-7235804.jpeg",
  },
  {
    id: 4,
    icon: HeartPulse,
    title: "Medical Evacuation",
    description:
      "Emergency air ambulance services providing rapid medical evacuation and patient transport.",
    features: [
      "Emergency air ambulance",
      "Critical patient transport",
      "International evacuation",
      "Rapid emergency response",
    ],
    image: "https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg",
  },
  {
    id: 5,
    icon: GraduationCap,
    title: "Aviation Training",
    description:
      "Professional aviation training programs for students pursuing careers in aviation.",
    features: [
      "General aviation courses",
      "Pilot training programs",
      "Aircraft engineering training",
      "Flight operations training",
    ],
    image:
      "https://images.pexels.com/photos/46160/aircraft-jet-landing-cloud-46160.jpeg",
  },
  {
    id: 6,
    icon: Briefcase,
    title: "Aviation Consultancy",
    description:
      "Expert aviation consultancy services for aviation businesses and investors.",
    features: [
      "Aviation business advisory",
      "Flight operations planning",
      "Regulatory compliance guidance",
      "Aircraft acquisition consulting",
    ],
    image: "https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg",
  },
];

export default function AircraftHiringPage() {
  const [selectedService, setSelectedService] = useState<
    null | (typeof services)[0]
  >(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");

    const applyTheme = (isDark: boolean) =>
      document.documentElement.classList.toggle("dark", isDark);

    applyTheme(mq.matches);

    const listener = (e: MediaQueryListEvent) => applyTheme(e.matches);
    mq.addEventListener("change", listener);

    if (selectedService) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => mq.removeEventListener("change", listener);
  }, [selectedService]);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground w-full overflow-x-hidden">
      <Navbar />

      {/* HERO */}
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
              Elite <span className="text-blue-400">Aviation</span> Services
            </h1>

            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
              Professional aviation solutions including aircraft charter, flight
              booking, aviation training, medical evacuation and aviation
              consultancy services.
            </p>

            <Button
              onClick={scrollToContact}
              className="bg-blue-600 hover:bg-blue-700 text-white h-16 px-12 rounded-full text-lg font-black uppercase tracking-widest shadow-2xl transition-transform active:scale-95"
            >
              Request Service
            </Button>
          </motion.div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="w-full py-12 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter">
              Our Aviation Services
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

      {/* CONTACT */}
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

      {/* MODAL */}
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
                    {selectedService.features.map((f, i) => (
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
