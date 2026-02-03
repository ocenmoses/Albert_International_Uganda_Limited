import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

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

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Fixed the red line for the timeout
  const timeoutRef = useRef<number | null>(null);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const checkTheme = () => {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      setIsDark(prefersDark);
      document.documentElement.classList.toggle("dark", prefersDark);
    };
    checkTheme();

    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handleThemeChange = (e: MediaQueryListEvent) => {
      setIsDark(e.matches);
      document.documentElement.classList.toggle("dark", e.matches);
    };

    mq.addEventListener("change", handleThemeChange);
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      mq.removeEventListener("change", handleThemeChange);
    };
  }, []);

  const getGlassStyles = () => {
    // Making main nav links white on both themes as requested
    const textColor = "text-white";
    const hoverText = "hover:text-blue-300";

    if (!isScrolled) {
      return {
        navStyle: {
          background: "transparent",
          backdropFilter: "none",
          borderColor: "transparent",
        },
        textColor,
        hoverText,
      };
    }

    if (isDark) {
      return {
        navStyle: {
          background: "rgba(15, 23, 42, 0.7)",
          backdropFilter: "blur(16px) saturate(180%)",
          WebkitBackdropFilter: "blur(16px) saturate(180%)",
          borderColor: "rgba(255, 255, 255, 0.08)",
        },
        textColor,
        hoverText,
        dropdownBg: "rgba(15, 23, 42, 0.95)",
        mobileMenuBg: "rgba(15, 23, 42, 0.95)",
      };
    } else {
      return {
        navStyle: {
          background: "rgba(0, 0, 0, 0.5)", // Darker glass for light theme to keep white text visible
          backdropFilter: "blur(16px) saturate(180%)",
          WebkitBackdropFilter: "blur(16px) saturate(180%)",
          borderColor: "rgba(255, 255, 255, 0.1)",
        },
        textColor,
        hoverText,
        dropdownBg: "rgba(30, 41, 59, 0.95)",
        mobileMenuBg: "rgba(30, 41, 59, 0.95)",
      };
    }
  };

  const glassStyles = getGlassStyles();

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
        document
          .getElementById(id)
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
        setIsMobileMenuOpen(false);
      }, 150);
    }
  };

  const handleMouseEnter = () => {
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = window.setTimeout(() => {
      setIsDropdownOpen(false);
    }, 1500);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "mx-4 mt-4 rounded-2xl shadow-xl" : "",
        glassStyles.textColor,
      )}
      style={{ ...glassStyles.navStyle, transition: "all 0.3s ease" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button
            onClick={() => scrollTo("home")}
            className="text-2xl md:text-3xl font-bold flex items-center gap-2"
          >
            <img
              src="/AIU_favicon.png"
              alt="Logo"
              className="h-8 w-8 md:h-10 md:w-10 rounded-full"
            />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              OIL
            </span>
          </button>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollTo("home")}
              className={cn(
                "text-sm font-medium transition-colors",
                glassStyles.textColor,
                glassStyles.hoverText,
              )}
            >
              Home
            </button>

            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={cn(
                  "flex items-center gap-1 text-sm font-medium transition-colors",
                  glassStyles.textColor,
                  glassStyles.hoverText,
                )}
              >
                Services{" "}
                <ChevronDown
                  className={cn(
                    "w-4 h-4 transition-transform",
                    isDropdownOpen && "rotate-180",
                  )}
                />
              </button>
              {isDropdownOpen && (
                <div
                  className="absolute top-full mt-2 w-64 rounded-2xl shadow-2xl border border-white/10"
                  style={{
                    background: glassStyles.dropdownBg,
                    backdropFilter: "blur(20px)",
                  }}
                >
                  <div className="flex flex-col py-2">
                    {services.map((s) => (
                      <a
                        key={s.id}
                        href={s.path}
                        className="block px-4 py-3 text-white hover:bg-white/10 first:rounded-t-2xl last:rounded-b-2xl"
                      >
                        {s.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => scrollTo("about")}
              className={cn(
                "text-sm font-medium transition-colors",
                glassStyles.textColor,
                glassStyles.hoverText,
              )}
            >
              About
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className={cn(
                "text-sm font-medium transition-colors",
                glassStyles.textColor,
                glassStyles.hoverText,
              )}
            >
              Contact
            </button>
            <Button
              onClick={() => scrollTo("contact")}
              className="bg-blue-600 text-white"
            >
              Get Quote
            </Button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div
            className="md:hidden absolute top-full left-0 right-0 mt-2 mx-4 p-4 rounded-2xl border border-white/10"
            style={{
              background: glassStyles.mobileMenuBg,
              backdropFilter: "blur(20px)",
            }}
          >
            <button
              onClick={() => scrollTo("home")}
              className="block w-full text-left p-3 text-white"
            >
              Home
            </button>
            <details className="group">
              <summary className="flex justify-between p-3 text-white list-none">
                Services <ChevronRight className="group-open:rotate-90" />
              </summary>
              {services.map((s) => (
                <a
                  key={s.id}
                  href={s.path}
                  className="block pl-8 py-2 text-white/80"
                >
                  {s.label}
                </a>
              ))}
            </details>
            <button
              onClick={() => scrollTo("about")}
              className="block w-full text-left p-3 text-white"
            >
              About
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="block w-full text-left p-3 text-white"
            >
              Contact
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
