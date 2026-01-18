import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroBackground from "@/components/HeroBackground";
import { Button } from "@/components/ui/button";
import { Clock, Mail } from "lucide-react";

const TradingPage = () => {
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <HeroBackground
          {...({ videoRef, videoSrc: "/trading-bg.mp4" } as any)}
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20 z-10"></div>

        {/* Navbar */}
        <div className="absolute top-0 left-0 right-0 z-20">
          <Navbar {...({ transparent: true } as any)} />
        </div>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-24"
        >
          <Clock className="w-20 h-20 text-primary mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Trading Services
          </h1>
          <p className="text-2xl md:text-3xl font-semibold mb-6 text-white/90">
            Coming Soon
          </p>
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
            We're working hard to bring you cutting-edge trading solutions. Stay
            tuned for our launch and be among the first to experience
            professional trading services.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 border-primary/30 hover:bg-primary/10"
              onClick={() => window.history.back()}
            >
              Go Back
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default TradingPage;
