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
    // Check system theme
    const checkTheme = () => {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      setIsDark(prefersDark);
      document.documentElement.classList.toggle("dark", prefersDark);
    };

    // Initial check
    checkTheme();

    // Listen for theme changes
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handleThemeChange = (e: MediaQueryListEvent) => {
      setIsDark(e.matches);
      document.documentElement.classList.toggle("dark", e.matches);
    };

    mq.addEventListener("change", handleThemeChange);

    // Scroll handler
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      mq.removeEventListener("change", handleThemeChange);
    };
  }, []);

  // Get glassmorphism styles based on theme
  const getGlassStyles = () => {
    if (!isScrolled) {
      return {
        navStyle: {
          background: "transparent",
          backdropFilter: "none",
          borderColor: "transparent",
        },
        textColor: isDark ? "text-gray-100" : "text-gray-900",
        hoverText: isDark ? "hover:text-blue-300" : "hover:text-blue-600",
      };
    }

    if (isDark) {
      return {
        navStyle: {
          background: "rgba(15, 23, 42, 0.7)", // Dark glass
          backdropFilter: "blur(16px) saturate(180%)",
          WebkitBackdropFilter: "blur(16px) saturate(180%)",
          borderColor: "rgba(255, 255, 255, 0.08)",
        },
        textColor: "text-gray-100",
        hoverText: "hover:text-blue-300",
        dropdownBg: "rgba(15, 23, 42, 0.95)",
        mobileMenuBg: "rgba(15, 23, 42, 0.95)",
      };
    } else {
      return {
        navStyle: {
          background: "rgba(255, 255, 255, 0.7)", // Light glass
          backdropFilter: "blur(16px) saturate(180%)",
          WebkitBackdropFilter: "blur(16px) saturate(180%)",
          borderColor: "rgba(0, 0, 0, 0.08)",
        },
        textColor: "text-gray-900",
        hoverText: "hover:text-blue-600",
        dropdownBg: "rgba(255, 255, 255, 0.95)",
        mobileMenuBg: "rgba(255, 255, 255, 0.95)",
      };
    }
  };

  const glassStyles = getGlassStyles();

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
        isScrolled ? "mx-4 mt-4 rounded-2xl shadow-xl" : "",
        glassStyles.textColor,
      )}
      style={{
        ...glassStyles.navStyle,
        transition: "all 0.3s ease",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => scrollTo("home")}
            className="text-2xl md:text-3xl font-bold flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <img
              src="/AIU_favicon.png"
              alt="AIU Logo"
              className="h-8 w-8 md:h-10 md:w-10 rounded-full border-2 border-white/20 shadow-lg"
            />
            <span
              className={cn(
                "bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent",
                isDark && "from-blue-400 to-purple-400",
              )}
            >
              OIL
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollTo("home")}
              className={cn(
                "text-sm font-medium transition-colors duration-200",
                glassStyles.textColor,
                glassStyles.hoverText,
              )}
            >
              Home
            </button>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={cn(
                  "flex items-center gap-1 text-sm font-medium transition-colors duration-200",
                  glassStyles.textColor,
                  glassStyles.hoverText,
                )}
              >
                Services
                <ChevronDown
                  className={cn(
                    "w-4 h-4 transition-transform duration-200",
                    isDropdownOpen ? "rotate-180" : "",
                  )}
                />
              </button>

              {isDropdownOpen && (
                <div
                  className={cn(
                    "absolute top-full mt-2 w-64 rounded-2xl shadow-2xl border",
                    isDark ? "border-white/10" : "border-black/10",
                  )}
                  style={{
                    background: glassStyles.dropdownBg,
                    backdropFilter: "blur(20px) saturate(180%)",
                    WebkitBackdropFilter: "blur(20px) saturate(180%)",
                  }}
                >
                  <div className="flex flex-col py-2">
                    {services.map(({ id, label, path }) => (
                      <a
                        key={id}
                        href={path}
                        className={cn(
                          "block px-4 py-3 text-left transition-all duration-200 font-medium",
                          glassStyles.textColor,
                          isDark
                            ? "hover:bg-white/10 hover:pl-5"
                            : "hover:bg-black/5 hover:pl-5",
                          "first:rounded-t-2xl last:rounded-b-2xl",
                        )}
                        onClick={() => setIsDropdownOpen(false)}
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
              className={cn(
                "text-sm font-medium transition-colors duration-200",
                glassStyles.textColor,
                glassStyles.hoverText,
              )}
            >
              About
            </button>
            <button
              onClick={() => scrollTo("testimonials")}
              className={cn(
                "text-sm font-medium transition-colors duration-200",
                glassStyles.textColor,
                glassStyles.hoverText,
              )}
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className={cn(
                "text-sm font-medium transition-colors duration-200",
                glassStyles.textColor,
                glassStyles.hoverText,
              )}
            >
              Contact
            </button>
            <Button
              onClick={() => scrollTo("contact")}
              className={cn(
                "ml-4 shadow-lg hover:shadow-xl transition-all duration-200",
                isDark
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                  : "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600",
              )}
            >
              Get Quote
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "md:hidden p-2 rounded-lg transition-all duration-200",
              isDark
                ? "hover:bg-white/10 text-gray-100"
                : "hover:bg-black/10 text-gray-900",
            )}
            aria-label="Toggle menu"
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
          <div
            className={cn(
              "md:hidden absolute top-full left-0 right-0 mt-2 mx-4 py-4 space-y-2 rounded-2xl shadow-2xl border",
              isDark ? "border-white/10" : "border-black/10",
            )}
            style={{
              background: glassStyles.mobileMenuBg,
              backdropFilter: "blur(20px) saturate(180%)",
              WebkitBackdropFilter: "blur(20px) saturate(180%)",
            }}
          >
            <button
              onClick={() => scrollTo("home")}
              className={cn(
                "block w-full text-left px-6 py-3 text-sm font-medium transition-all duration-200 mx-2 rounded-xl",
                glassStyles.textColor,
                isDark
                  ? "hover:bg-white/10 hover:pl-7"
                  : "hover:bg-black/5 hover:pl-7",
              )}
            >
              Home
            </button>

            <details className="group mx-2">
              <summary
                className={cn(
                  "cursor-pointer flex items-center justify-between px-6 py-3 text-sm font-medium transition-all duration-200 rounded-xl",
                  glassStyles.textColor,
                  isDark
                    ? "hover:bg-white/10 hover:pl-7"
                    : "hover:bg-black/5 hover:pl-7",
                )}
              >
                Services
                <ChevronRight className="group-open:hidden w-4 h-4" />
                <ChevronDown className="hidden group-open:block w-4 h-4" />
              </summary>
              <div className="ml-4 mt-1 flex flex-col space-y-1">
                {services.map(({ id, label, path }) => (
                  <a
                    key={id}
                    href={path}
                    className={cn(
                      "text-left px-4 py-2.5 rounded-lg transition-all duration-200 block text-sm font-medium mx-2",
                      glassStyles.textColor,
                      isDark
                        ? "hover:bg-white/10 hover:pl-5"
                        : "hover:bg-black/5 hover:pl-5",
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {label}
                  </a>
                ))}
              </div>
            </details>

            <button
              onClick={() => scrollTo("about")}
              className={cn(
                "block w-full text-left px-6 py-3 text-sm font-medium transition-all duration-200 mx-2 rounded-xl",
                glassStyles.textColor,
                isDark
                  ? "hover:bg-white/10 hover:pl-7"
                  : "hover:bg-black/5 hover:pl-7",
              )}
            >
              About
            </button>
            <button
              onClick={() => scrollTo("testimonials")}
              className={cn(
                "block w-full text-left px-6 py-3 text-sm font-medium transition-all duration-200 mx-2 rounded-xl",
                glassStyles.textColor,
                isDark
                  ? "hover:bg-white/10 hover:pl-7"
                  : "hover:bg-black/5 hover:pl-7",
              )}
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className={cn(
                "block w-full text-left px-6 py-3 text-sm font-medium transition-all duration-200 mx-2 rounded-xl",
                glassStyles.textColor,
                isDark
                  ? "hover:bg-white/10 hover:pl-7"
                  : "hover:bg-black/5 hover:pl-7",
              )}
            >
              Contact
            </button>

            <div className="px-6 pt-2">
              <Button
                onClick={() => scrollTo("contact")}
                className={cn(
                  "w-full shadow-lg hover:shadow-xl transition-all duration-200",
                  isDark
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                    : "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600",
                )}
              >
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
