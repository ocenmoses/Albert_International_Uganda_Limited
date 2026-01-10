import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Home,
  Building2,
  Car,
  Sparkles,
  Calendar,
  Shield,
} from "lucide-react";
import { CheckCircle2 } from "lucide-react";

interface Service {
  id: number;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  features: string[];
}

const services: Service[] = [
  {
    id: 1,
    icon: Home,
    title: "Residential Cleaning",
    description:
      "Regular and deep cleaning services for your home. We handle everything from daily maintenance to move-in/move-out cleaning.",
    features: [
      "Weekly/Monthly Plans",
      "Deep Cleaning",
      "Move-in/out",
      "Eco-friendly Products",
    ],
  },
  {
    id: 2,
    icon: Building2,
    title: "Commercial Cleaning",
    description:
      "Professional office and commercial space cleaning. Keep your workspace pristine and productive.",
    features: [
      "Daily/Weekly Service",
      "Office Cleaning",
      "Restroom Sanitization",
      "Floor Care",
    ],
  },
  {
    id: 3,
    icon: Car,
    title: "Carpet & Upholstery",
    description:
      "Expert carpet cleaning and upholstery care. Restore the beauty of your furniture and flooring.",
    features: [
      "Steam Cleaning",
      "Stain Removal",
      "Odor Treatment",
      "Protection Treatment",
    ],
  },
  {
    id: 4,
    icon: Sparkles,
    title: "Deep Cleaning",
    description:
      "Thorough deep cleaning service for those areas that need extra attention. Perfect for spring cleaning or special occasions.",
    features: [
      "Kitchen Deep Clean",
      "Bathroom Sanitization",
      "Baseboard Cleaning",
      "Window Cleaning",
    ],
  },
  {
    id: 5,
    icon: Calendar,
    title: "One-Time Cleaning",
    description:
      "Need a one-time clean? We offer flexible scheduling for special events, parties, or just when you need extra help.",
    features: [
      "Flexible Scheduling",
      "Event Cleaning",
      "Post-Construction",
      "Emergency Service",
    ],
  },
  {
    id: 6,
    icon: Shield,
    title: "Specialized Services",
    description:
      "Specialized cleaning for unique situations. We handle challenging cleaning tasks with expertise.",
    features: [
      "Post-Renovation",
      "Hoarder Cleanup",
      "Disaster Recovery",
      "Sanitization",
    ],
  },
];

const ServicesCarousel = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <div className="w-full max-w-7xl mx-auto px-4 relative">
      <Carousel
        plugins={[plugin.current]}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <CarouselItem
                key={service.id}
                className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <div className="h-full p-6 rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-sm"
                      >
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="left-2 md:-left-12 top-1/2" />
        <CarouselNext className="right-2 md:-right-12 top-1/2" />
      </Carousel>
    </div>
  );
};

export default ServicesCarousel;
