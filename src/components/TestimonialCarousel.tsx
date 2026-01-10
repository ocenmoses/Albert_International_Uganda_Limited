import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Odongo Solomon",
    role: "Homeowner",
    content:
      "Albert International Uganda Limited transformed our home! The team was professional, thorough, and respectful. Our house has never looked better. Highly recommend their services!",
    rating: 5,
  },
  {
    id: 2,
    name: "Olwit Pope",
    role: "Business Owner",
    content:
      "We've been using Albert International Uganda Limited for our office cleaning for over a year now. They're reliable, efficient, and always go above and beyond. Our workspace is spotless!",
    rating: 5,
  },
  {
    id: 3,
    name: "Ocen Moses",
    role: "Property Manager",
    content:
      "Albert International Uganda Limited handles all our rental property turnovers. They're fast, detail-oriented, and always meet our deadlines. Couldn't ask for better service!",
    rating: 5,
  },
  {
    id: 4,
    name: "David Thompson Mukasa",
    role: "Homeowner",
    content:
      "The deep cleaning service was incredible! They cleaned areas I didn't even know needed attention. Worth every penny and will definitely use again.",
    rating: 5,
  },
  {
    id: 5,
    name: "Oula Darius",
    role: "Event Coordinator",
    content:
      "Albert International Uganda Limited saved us during our busy event season. They cleaned our venue quickly and professionally, allowing us to focus on our guests. Excellent work!",
    rating: 5,
  },
];

const TestimonialCarousel = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <div className="w-full max-w-5xl mx-auto px-4 relative">
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
          {testimonials.map((testimonial) => (
            <CarouselItem
              key={testimonial.id}
              className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
            >
              <div className="h-full p-6 rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-4">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-semibold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 md:-left-12 top-1/2" />
        <CarouselNext className="right-2 md:-right-12 top-1/2" />
      </Carousel>
    </div>
  );
};

export default TestimonialCarousel;
