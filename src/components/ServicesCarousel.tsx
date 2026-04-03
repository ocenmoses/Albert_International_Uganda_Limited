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
  CarFront,
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
    title: "Cleaning Services",
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
    icon: CarFront,
    title: "Washing Bay",
    description:
      "Washing Bay combining advanced pressure technology with meticulous hand-finishing to preserve your vehicle's value.",
    features: [
      "Daily/Weekly Service",
      "Premium Hand Wash",
      "Interior Detailing",
      "Paint Protection",
    ],
  },
  {
    id: 3,
    icon: Car,
    title: "Laundry Services",
    description:
      "Professional Laundry Services with high-quality laundry care using modern machines and expert fabric handling.",
    features: [
      "Steam Cleaning",
      "Stain Removal",
      "Ironing & Pressing",
      "Fast Delivery",
    ],
  },
  {
    id: 4,
    icon: Building2,
    title: "Engineering Services",
    description:
      "Delivering excellence in building construction, renovation, road works, and more. Your trusted partner for professional and reliable construction services.",
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
    title: "Aviation & Flight Services",
    description:
      "Professional aviation solutions including aircraft charter, flight booking, aviation training, medical evacuation and aviation consultancy services.",
    features: [
      "Aircraft Hiring",
      "Flight Booking",
      "Passport Processing",
      "Medical Evacuation",
    ],
  },
  {
    id: 6,
    icon: Shield,
    title: "Petroleum Solution/Services",
    description:
      "Comprehensive petrol station construction, equipment supply, installation, and operational services across Uganda. From site survey to full setup, we build safe, profitable fuel stations.",
    features: [
      "Petrol Station Construction",
      "Survey & Site Assessment",
      "Piping & Tank Installation",
      "Service Bay & Equipment",
    ],
  },
  {
    id: 7,
    icon: Sparkles,
    title: "Automotive Services",
    description:
      "Premium vehicle import/export, sales, repairs, and refurbishment services across Uganda. Quality cars, trucks, parts, and expert craftsmanship, we keep you moving.",
    features: [
      "Truck & Car Sales",
      "General Spare Parts",
      "Car Import & Export",
      "Panel Beating & Dent Repair",
    ],
  },
  {
    id: 8,
    icon: Sparkles,
    title: "Automotive Services",
    description:
      "Premium vehicle import/export, sales, repairs, and refurbishment services across Uganda. Quality cars, trucks, parts, and expert craftsmanship, we keep you moving.",
    features: [
      "Ice Cream Production",
      "Bathing & Laundry Soap Production",
      "Toilet Paper Manufacturing",
      "Chalk Manufacturing",
    ],
  },
];

const ServicesCarousel = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 1000, stopOnInteraction: true }),
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
                      <li key={idx} className="flex items-center gap-2 text-sm">
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
