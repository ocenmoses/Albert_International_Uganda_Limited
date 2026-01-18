import { useState, useEffect, useRef, type ReactElement } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroBackground from "@/components/HeroBackground";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import {
  Home,
  RefreshCcw,
  Map,
  MapPin,
  FileText,
  Zap,
  HardHat,
  CheckCircle2,
  Truck,
} from "lucide-react";

interface Service {
  title: string;
  short: string;
  long: string;
  icon: ReactElement;
  image: string;
}

const services: Service[] = [
  {
    title: "Building Construction",
    short: "Complete construction of residential and commercial buildings",
    long: `We provide end-to-end building construction services from foundation to finishing. 
    Our team ensures structural integrity, compliance with local codes, and high-quality workmanship. 
    We work with modern construction techniques and materials to deliver durable and aesthetically 
    pleasing structures that stand the test of time.`,
    icon: <Home className="w-6 h-6 text-primary" />,
    image: "/construction/building-construction.jpg",
  },
  {
    title: "Renovation & Remodelling",
    short: "Modernize, restore, or redesign existing structures",
    long: `Our renovation and remodelling services include structural changes, interior upgrades, 
    aesthetic improvements, and optimization of space usage to enhance your property's value.
    We work closely with clients to understand their vision and transform spaces while 
    maintaining structural safety and building codes.`,
    icon: <RefreshCcw className="w-6 h-6 text-primary" />,
    image: "/construction/renovation.jpg",
  },
  {
    title: "Road & Drainage Construction",
    short: "Design and build roads, pathways, and drainage systems",
    long: `We specialize in constructing durable roads and efficient drainage systems using 
    modern materials and techniques to ensure longevity and minimal maintenance.
    Our expertise includes asphalt paving, concrete roadways, stormwater management,
    and sustainable drainage solutions.`,
    icon: <Map className="w-6 h-6 text-primary" />,
    image: "/construction/road-construction.jpg",
  },
  {
    title: "Survey Works",
    short: "Land and structural survey for planning and compliance",
    long: `Our survey team provides precise land measurements, topographic maps, 
    and structural assessments to guide planning, construction, and legal compliance.
    Using state-of-the-art equipment like total stations and GPS systems, we deliver
    accurate data for informed decision-making.`,
    icon: <MapPin className="w-6 h-6 text-primary" />,
    image: "/construction/construction-survey.jpg",
  },
  {
    title: "Plumbing & Electrical Installation",
    short: "Professional plumbing and electrical services",
    long: `Installation and maintenance of water systems, drainage, electrical wiring, 
    and fixtures, ensuring safety, efficiency, and compliance with standards.
    Our licensed technicians handle everything from simple repairs to complex
    installations in both residential and commercial settings.`,
    icon: <Zap className="w-6 h-6 text-primary" />,
    image: "/construction/plumbing-electrical.jpg",
  },
  {
    title: "Roofing",
    short: "Construction and repair of roofs",
    long: `We provide roofing solutions including metal sheets, tiles, and waterproofing 
    systems to ensure durability, safety, and aesthetic appeal.
    Our services include new roof installation, roof repairs, gutter systems,
    and insulation to protect your property from the elements.`,
    icon: <HardHat className="w-6 h-6 text-primary" />,
    image: "/construction/roofing.jpg",
  },
  {
    title: "Finishes",
    short: "High-quality interior and exterior finishes",
    long: `Our finishing services include painting, tiling, plastering, and decorative works 
    to achieve a professional, polished look. We work with premium materials and
    skilled artisans to deliver finishes that enhance both beauty and functionality
    of your space.`,
    icon: <CheckCircle2 className="w-6 h-6 text-primary" />,
    image: "/construction/finishes.jpg",
  },
  {
    title: "General Maintenance",
    short: "Ongoing maintenance services for buildings",
    long: `We provide routine checks, repairs, and upgrades to keep your property functional, 
    safe, and visually appealing. Our maintenance plans are customizable and include
    preventive maintenance schedules, emergency repairs, and system optimization.`,
    icon: <RefreshCcw className="w-6 h-6 text-primary" />,
    image: "/construction/maintenance.jpg",
  },
  {
    title: "Machine Hiring",
    short: "Rent construction machinery with operators",
    long: `We offer heavy machinery and equipment for hire including excavators, 
    bulldozers, and concrete mixers, operated by skilled personnel for safe and efficient work.
    All equipment is regularly maintained and our operators are certified for
    safe operation on various construction sites.`,
    icon: <Truck className="w-6 h-6 text-primary" />,
    image: "/construction/machinery.jpg",
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

const ConstructionPage = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Detect system theme
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    document.documentElement.classList.toggle("dark", mq.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      document.documentElement.classList.toggle("dark", e.matches);
    };

    mq.addEventListener("change", handleChange);
    return () => mq.removeEventListener("change", handleChange);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedService]);

  const openServiceDetail = (service: Service) => {
    setSelectedService(service);
  };

  const closeServiceDetail = () => {
    setSelectedService(null);
  };

  return (
    <div className="min-h-screen bg-background text-white overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <HeroBackground
          {...({ videoRef, videoSrc: "/construction/construction.mp4" } as any)}
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>

        {/* Navbar */}
        <div className="absolute top-0 left-0 right-0 z-20">
          <Navbar {...({ transparent: true } as any)} />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-24">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Construction & Architectural Services
          </h1>
          <p className="text-lg text-white/90 mb-6">
            Delivering excellence in building construction, renovation, road
            works, and more. Your trusted partner for professional and reliable
            construction services.
          </p>
          <Button size="lg" className="rounded-full hover:scale-105">
            Contact Us
          </Button>
        </div>
      </section>

      {/* SERVICES SECTION WITH BACKGROUND IMAGE */}
      <section
        className="relative py-16"
        style={{
          backgroundImage: `url('/construction/services-bg.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="container relative z-10 mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Services
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Comprehensive construction solutions tailored to meet your
              specific needs
            </p>
          </motion.div>

          {/* SERVICES GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUpVariants}
                className="bg-card/90 backdrop-blur-sm rounded-2xl border border-border overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Service Image */}
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                  </div>
                  <p className="text-sm text-white/80 mb-6 line-clamp-3">
                    {service.short}
                  </p>

                  {/* Read More Button */}
                  <Button
                    variant="outline"
                    className="w-full border-primary/30 hover:bg-primary/10"
                    onClick={() => openServiceDetail(service)}
                  >
                    Read More
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE DETAIL MODAL */}
      <AnimatePresence>
        {selectedService && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeServiceDetail}
              className="fixed inset-0 bg-black/70 z-50 backdrop-blur-sm"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              onClick={closeServiceDetail}
            >
              <div
                ref={modalRef}
                className="relative w-full max-w-2xl bg-card rounded-2xl border border-border shadow-2xl"
                onClick={(e) => e.stopPropagation()}
                style={{
                  maxHeight: "90vh",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Close Button */}
                <button
                  onClick={closeServiceDetail}
                  className="absolute right-4 top-4 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Image - Fixed at top */}
                <div className="flex-shrink-0 h-64 md:h-72 overflow-hidden">
                  <img
                    src={selectedService.image}
                    alt={selectedService.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content - Scrollable but no visible scrollbar */}
                <div
                  className="flex-grow overflow-y-auto"
                  style={{
                    // HACK: This is the guaranteed way to hide scrollbars
                    paddingRight: "30px", // Space for invisible scrollbar
                    marginRight: "-30px", // Pull scrollbar out of view
                    WebkitOverflowScrolling: "touch",
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                  }}
                >
                  {/* Inline style for WebKit browsers */}
                  <style>{`
                    div[style*="margin-right: -30px"]::-webkit-scrollbar {
                      width: 30px !important;
                      background: transparent !important;
                    }
                    div[style*="margin-right: -30px"]::-webkit-scrollbar-track {
                      background: transparent !important;
                    }
                    div[style*="margin-right: -30px"]::-webkit-scrollbar-thumb {
                      background: transparent !important;
                      border: none !important;
                    }
                  `}</style>

                  <div className="p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        {selectedService.icon}
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold">
                        {selectedService.title}
                      </h2>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <p className="text-white/90 leading-relaxed text-base whitespace-pre-line">
                          {selectedService.long}
                        </p>
                      </div>

                      <div className="pt-6 border-t border-border">
                        <p className="text-white/70 text-sm mb-4">
                          Interested in this service? Contact us for a free
                          consultation.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                          <Button
                            variant="outline"
                            onClick={closeServiceDetail}
                            className="flex-1 border-primary/30 hover:bg-primary/10"
                          >
                            Close
                          </Button>
                          <Button className="flex-1 bg-primary hover:bg-primary/90">
                            Get Free Quote
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ConstructionPage;
