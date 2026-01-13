import { Car, Droplets, ShieldCheck, Clock, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroBackground from "@/components/HeroBackground";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

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

// Framer Motion variants
const fadeUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
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

  // Parallax only for hero section
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

  return (
    <div className="min-h-screen bg-background text-white pt-24 pb-12 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <HeroBackground
          videoSrc="/washingbay.mp4"
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />
        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-0"></div>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto text-center px-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Professional Washing Bay
          </h1>
          <p className="text-lg text-white/90 mb-8">
            Premium vehicle care solutions combining advanced pressure washing
            technology with meticulous hand-finishing. We don't just wash; we
            preserve your investment.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="rounded-full hover:scale-105 transition-transform"
            >
              Book a Wash
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full hover:scale-105 transition-transform"
            >
              View Pricing
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Feature Grid */}
      <section className="container mx-auto px-4 py-12 relative z-10">
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
                y: -5,
                boxShadow: "0 15px 25px rgba(0,0,0,0.3)",
              }}
              className="p-6 rounded-2xl border border-border bg-card/50 backdrop-blur-sm transition-all duration-300"
            >
              <div className="mb-4 p-3 bg-primary/10 rounded-xl w-fit">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-white/90 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-4 py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-accent/30 rounded-3xl p-8 md:p-12 overflow-hidden"
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
                    viewport={{ once: true }}
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
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl border border-primary/10 flex items-center justify-center hover:scale-105 transition-transform duration-300">
                <Car className="w-24 h-24 text-primary/40" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default WashingBay;
