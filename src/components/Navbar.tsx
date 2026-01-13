import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Utility function to merge class names
const cn = (...classes: Array<string | false | null | undefined>) =>
  classes.filter(Boolean).join(" ");

const services = [
  { id: "cleaning", label: "Cleaning Services", path: "/services/cleaning" },
  { id: "washing-bay", label: "Washing Bay", path: "/services/washing-bay" },
  { id: "laundry", label: "Laundry Services", path: "/services/laundry" },
  {
    id: "engineering",
    label: "Engineering Solutions",
    path: "/services/engineering",
  },
  { id: "trading", label: "Trading Services", path: "/services/trading" },
  {
    id: "ice-cream",
    label: "Ice Cream Manufacturing",
    path: "/services/ice-cream",
  },
];
let dropdownTimeout: ReturnType<typeof setTimeout>;

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  // Theme and scroll effects
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDark(mq.matches);

    const handleTheme = (e: MediaQueryListEvent) => {
      setIsDark(e.matches);
      document.documentElement.classList.toggle("dark", e.matches);
    };

    document.documentElement.classList.toggle("dark", mq.matches);
    mq.addEventListener("change", handleTheme);

    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      mq.removeEventListener("change", handleTheme);
    };
  }, []);

  // Smooth scroll function
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
      return;
    }

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        setIsMobileMenuOpen(false);
      }, 150);
    } else {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        setIsMobileMenuOpen(false);
      }, 150);
    }
  };

  // Desktop dropdown hover handlers
  const handleMouseEnter = () => {
    clearTimeout(dropdownTimeout);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeout = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 1500); // 1.5s delay
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/40 shadow-lg mx-4 mt-4 rounded-2xl"
          : "bg-transparent"
      )}
      style={{
        backdropFilter: isScrolled ? "blur(12px) saturate(180%)" : "none",
        WebkitBackdropFilter: isScrolled ? "blur(12px) saturate(180%)" : "none",
        backgroundColor: isScrolled
          ? isDark
            ? "rgba(17, 24, 39, 0.7)"
            : "rgba(255, 255, 255, 0.7)"
          : "transparent",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => scrollTo("home")}
            className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"
          >
            AIU
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollTo("home")}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Home
            </button>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
                Services
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isDropdownOpen && (
                <div className="absolute bg-background shadow-lg border border-border rounded-md mt-2 w-64">
                  <div className="flex flex-col py-2">
                    {services.map(({ id, label, path }) => (
                      <a
                        key={id}
                        href={path}
                        className="block px-4 py-2 text-left hover:bg-accent/40"
                      >
                        {label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => scrollTo("about")}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollTo("testimonials")}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Contact
            </button>
            <Button onClick={() => scrollTo("contact")} className="ml-4">
              Get Quote
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-foreground hover:bg-accent transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border/40">
            <button
              onClick={() => scrollTo("home")}
              className="block w-full text-left px-4 py-2 text-sm font-medium hover:bg-accent/40 rounded-md"
            >
              Home
            </button>

            <details className="px-4 group">
              <summary className="cursor-pointer flex items-center justify-between px-2 py-2 text-sm font-medium hover:bg-accent/40 rounded-md">
                Services
                <ChevronRight className="group-open:hidden w-4 h-4" />
                <ChevronDown className="hidden group-open:block w-4 h-4" />
              </summary>
              <div className="ml-4 mt-2 flex flex-col space-y-1">
                {services.map(({ id, label, path }) => (
                  <a
                    key={id}
                    href={path}
                    className="text-left px-4 py-2 hover:bg-accent/40 rounded-md block"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {label}
                  </a>
                ))}
              </div>
            </details>

            <button
              onClick={() => scrollTo("about")}
              className="block w-full text-left px-4 py-2 text-sm hover:bg-accent/40 rounded-md"
            >
              About
            </button>
            <button
              onClick={() => scrollTo("testimonials")}
              className="block w-full text-left px-4 py-2 text-sm hover:bg-accent/40 rounded-md"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="block w-full text-left px-4 py-2 text-sm hover:bg-accent/40 rounded-md"
            >
              Contact
            </button>

            <div className="px-4 pt-2">
              <Button onClick={() => scrollTo("contact")} className="w-full">
                Get Quote
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
