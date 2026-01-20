// src/pages/services/cleaning.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Sparkles,
  Building2,
  Home,
  Brush,
  Sofa,
  Truck,
  Trees,
  Factory,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

type Service = {
  id: number;
  icon: any;
  title: string;
  description: string;
  features: string[];
  image: string;
};

const services: Service[] = [
  {
    id: 1,
    icon: Home,
    title: "Residential Cleaning",
    description:
      "Keep your home spotless with our comprehensive residential cleaning services.",
    features: [
      "General house cleaning",
      "Bathrooms & toilets",
      "Kitchens & appliances",
      "Bedrooms & living rooms",
      "Dusting & mopping",
      "Window cleaning",
      "Balcony cleaning",
    ],
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop",
  },
  {
    id: 2,
    icon: Building2,
    title: "Office & Commercial Cleaning",
    description:
      "Professional cleaning solutions for your business environment.",
    features: [
      "Office spaces",
      "Conference rooms",
      "Reception areas",
      "Desks & equipment",
      "Floor sanitizing",
      "Waste management",
    ],
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
  },
  {
    id: 3,
    icon: Brush,
    title: "Post-Construction Cleaning",
    description:
      "Transform your newly built or renovated space into a pristine environment.",
    features: [
      "Removal of cement dust",
      "Glass cleaning",
      "Paint removal",
      "Floor scrubbing",
      "Final handover cleaning",
    ],
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop",
  },
  {
    id: 4,
    icon: Sparkles,
    title: "Deep Cleaning",
    description:
      "Intensive cleaning that reaches every corner of your property.",
    features: [
      "Full interior deep cleaning",
      "Kitchen deep scrub",
      "Bathroom scaling removal",
      "Ceiling & high-surface cleaning",
      "Mattress & sofa cleaning",
    ],
    image:
      "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=800&h=600&fit=crop",
  },
  {
    id: 5,
    icon: Sofa,
    title: "Carpet & Upholstery Cleaning",
    description:
      "Revitalize your carpets and furniture with our specialized cleaning.",
    features: [
      "Carpet vacuuming",
      "Shampooing",
      "Stain removal",
      "Sofa & chair cleaning",
    ],
    image:
      "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=800&h=600&fit=crop",
  },
  {
    id: 6,
    icon: Truck,
    title: "Move-In / Move-Out Cleaning",
    description:
      "Make your transition smooth with our thorough moving cleaning services.",
    features: ["Houses", "Apartments", "Offices", "Full sanitization"],
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
  },
  {
    id: 7,
    icon: Trees,
    title: "Outdoor Cleaning",
    description:
      "Maintain pristine outdoor spaces with our comprehensive exterior cleaning.",
    features: [
      "Compound sweeping",
      "Pathways & pavements",
      "Gate & fence cleaning",
      "Garden cleaning",
    ],
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
  },
  {
    id: 8,
    icon: Factory,
    title: "Industrial Cleaning",
    description: "Heavy-duty cleaning solutions for industrial facilities.",
    features: [
      "Warehouses",
      "Factories",
      "Machinery cleaning",
      "Oil & grease removal",
    ],
    image:
      "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&h=600&fit=crop",
  },
];

export default function CleaningPage() {
  const [, setSelectedService] = useState<Service | null>(null);
  const navigate = useNavigate();

  // Navigate to Home page and scroll to Contact section
  const goToHomeContact = () => {
    navigate("/", { state: { scrollTo: "contact" } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br to-indigo-800 text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Professional Cleaning Services
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Experience the difference of pristine cleanliness. We deliver
              exceptional cleaning solutions tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Updated button */}
              <button
                onClick={goToHomeContact}
                className="bg-white text-blue-700 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg text-center"
              >
                Get a Free Quote
              </button>
              <a
                href="#services-grid"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all text-center"
              >
                View Our Work
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div
        id="services-grid"
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            From residential to industrial, we offer comprehensive cleaning
            solutions for every need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-2"
                onClick={() => setSelectedService(service)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm w-14 h-14 rounded-full flex items-center justify-center mb-2">
                      <Icon className="w-7 h-7 text-blue-600" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                  <button className="mt-4 text-blue-600 dark:text-blue-400 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ...Rest of the page (CTA, Modals, Footer) remains the same... */}
    </div>
  );
}
