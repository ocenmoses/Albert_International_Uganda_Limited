import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronRight, Sun, Moon } from "lucide-react";
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

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handleTheme = (dark: boolean) => {
      setIsDark(dark);
      document.documentElement.classList.toggle("dark", dark);
    };
    handleTheme(mq.matches);
    mq.addEventListener("change", (e) => handleTheme(e.matches));

    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    document.documentElement.classList.toggle("dark", newDark);
  };

  const scrollTo = (id: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(
        () =>
          document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }),
        300,
      );
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-in-out",
        isScrolled
          ? "mx-0 md:mx-8 mt-0 md:mt-6 md:rounded-[2rem] border-b md:border border-white/20 shadow-2xl"
          : "bg-transparent border-transparent",
      )}
      style={{
        backgroundColor: isScrolled
          ? isDark
            ? "rgba(15, 23, 42, 0.65)"
            : "rgba(15, 23, 42, 0.45)" // Darker base for white text visibility
          : "transparent",
        backdropFilter: isScrolled ? "blur(24px) saturate(180%)" : "none",
        WebkitBackdropFilter: isScrolled ? "blur(24px) saturate(180%)" : "none",
      }}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-22">
          {/* Logo */}
          <button
            onClick={() => scrollTo("home")}
            className="flex items-center gap-3 group"
          >
            <div className="relative">
              <img
                src="/AIU_favicon.png"
                alt="Logo"
                className="h-10 w-10 md:h-12 md:w-12 rounded-2xl shadow-lg"
              />
            </div>
            <span className="text-2xl font-black italic tracking-tighter uppercase bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
              OIL
            </span>
          </button>

          {/* Desktop Links - Now all forced to White */}
          <div className="hidden lg:flex items-center space-x-2">
            <NavButton onClick={() => scrollTo("home")}>Home</NavButton>

            <div
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button
                className={cn(
                  "flex items-center gap-1.5 px-5 py-2.5 text-xs font-black uppercase tracking-widest transition-all rounded-full hover:bg-white/10 text-white",
                  isDropdownOpen ? "text-blue-400" : "text-white",
                )}
              >
                Services{" "}
                <ChevronDown
                  className={cn(
                    "w-3.5 h-3.5 transition-transform duration-300",
                    isDropdownOpen && "rotate-180",
                  )}
                />
              </button>

              {/* Dropdown Card */}
              {isDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 p-2 border border-white/10 rounded-[2.5rem] shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300 bg-slate-900/90 backdrop-blur-xl">
                  <div className="grid grid-cols-1 gap-1">
                    {services.map((s) => (
                      <Link
                        key={s.id}
                        to={s.path}
                        className="flex items-center justify-between px-6 py-4 rounded-[1.5rem] hover:bg-blue-600 text-white transition-all group font-bold text-sm"
                      >
                        {s.label}{" "}
                        <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <NavButton onClick={() => scrollTo("about")}>About</NavButton>
            <NavButton onClick={() => scrollTo("contact")}>Contact</NavButton>

            <div className="h-6 w-px bg-white/20 mx-4" />

            {/* Theme Toggle Button stays white */}
            <button
              onClick={toggleTheme}
              className="p-3 rounded-full hover:bg-white/10 text-white transition-colors"
            >
              {isDark ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            <Button
              onClick={() => scrollTo("contact")}
              className="ml-4 bg-blue-600 hover:bg-blue-700 text-white font-black uppercase tracking-widest px-8 h-12 rounded-full shadow-xl shadow-blue-600/20 active:scale-95 transition-all"
            >
              Get Quote
            </Button>
          </div>

          {/* Mobile Toggle - Now White */}
          <div className="lg:hidden flex items-center gap-3">
            <button onClick={toggleTheme} className="p-2 text-white">
              {isDark ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-3 bg-white/10 rounded-2xl text-white"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Internal Sub-component for Nav Buttons forced to White
const NavButton = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className="px-5 py-2.5 text-xs font-black uppercase tracking-widest text-white hover:text-blue-400 hover:bg-white/10 transition-all rounded-full"
  >
    {children}
  </button>
);

export default Navbar;
