import { Link } from "react-router-dom";

interface ServiceLink {
  id: number;
  title: string;
  path: string;
}

const servicesLeft: ServiceLink[] = [
  {
    id: 1,
    title: "General Cleaning Services",
    path: "/services/cleaning",
  },
  {
    id: 2,
    title: "General Laundry Services",
    path: "/services/laundry",
  },
  {
    id: 3,
    title: "General Car/ Bike Treatment Wash Bay",
    path: "/services/washing-bay",
  },
  {
    id: 4,
    title: "General Engineering Solutions",
    path: "/services/engineering",
  },
  {
    id: 5,
    title: "General Trading Services",
    path: "/services/trading",
  },
  {
    id: 5,
    title: "General Financial Services",
    path: "/services/financial",
  },
  {
    id: 5,
    title: "Quality Aviation Services",
    path: "/services/aviation",
  },
];

const servicesRight: ServiceLink[] = [
  {
    id: 6,
    title: "General Manufacturing Services",
    path: "/services/manufacturing",
  },

  {
    id: 7,
    title: "General Medical Services",
    path: "/services/medical",
  },

  {
    id: 7,
    title: "General Medical Services",
    path: "/services/agriculture",
  },

  {
    id: 8,
    title: "General Supply/Logistics and Transport Services",
    path: "/services/supply-logistics-transport",
  },
  {
    id: 9,
    title: "General Clearance and Freight Forwarding Services",
    path: "/services/clearance-freight-forwarding",
  },
  {
    id: 10,
    title:
      "General Business/Company/National ID/URA TIN/Passport/Air Ticketing / Registratin/ Processing/ Booking Services",
    path: "/services/company-services",
  },
];

const ServicesCards = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Card */}
        <div className="rounded-xl border bg-card text-card-foreground shadow-md p-6">
          <ul className="space-y-3">
            {servicesLeft.map((service) => (
              <li key={service.id}>
                <Link
                  to={service.path}
                  className="block text-sm font-medium text-muted-foreground
                  hover:text-primary transition-colors duration-200"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Card */}
        <div className="rounded-xl border bg-card text-card-foreground shadow-md p-6">
          <ul className="space-y-3">
            {servicesRight.map((service) => (
              <li key={service.id}>
                <Link
                  to={service.path}
                  className="block text-sm font-medium text-muted-foreground
                  hover:text-primary transition-colors duration-200"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServicesCards;
