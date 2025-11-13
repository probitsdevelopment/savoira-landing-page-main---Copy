import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { List, CaretDown } from "@phosphor-icons/react";
import { motion } from "framer-motion";

interface NavigationProps {
  onDemoClick: () => void;
}

export function Navigation({ onDemoClick }: NavigationProps) {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ["home", "features", "ai-agents", "analytics", "trust"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const top = element.offsetTop - 80;
      window.scrollTo({ top, behavior: "smooth" });
      setMobileOpen(false);
    }
  };

  const navLinks = [
    { label: "Home", id: "home" },
    { label: "Features", id: "features" },
    { label: "AI Agents", id: "ai-agents" },
    { label: "Analytics", id: "analytics" },
    { label: "Trust & Compliance", id: "trust" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[oklch(0.14_0.02_250)]/95 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-primary/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                if (location.pathname === "/") {
                  scrollToSection("home");
                } else {
                  navigate("/");
                }
              }}
              className="flex flex-col group"
            >
              <span className="text-2xl font-bold ai-gradient-text">
                Savoira
              </span>
              <span className="text-xs text-gray-400 -mt-1 transition-colors duration-300 group-hover:text-gray-300">
                AI-Powered L&D Operations
              </span>
            </button>
          </div>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  if (location.pathname !== "/") {
                    navigate("/");
                    setTimeout(() => scrollToSection(link.id), 100);
                  } else {
                    scrollToSection(link.id);
                  }
                }}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-300 relative ${
                  activeSection === link.id && location.pathname === "/"
                    ? "text-white"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
                {activeSection === link.id && location.pathname === "/" && (
                  <motion.span
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full"
                    layoutId="activeSection"
                  />
                )}
              </button>
            ))}

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="gap-1 text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-300"
                >
                  Resources
                  <CaretDown
                    weight="bold"
                    className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180"
                  />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-48 bg-[oklch(0.18_0.02_250)]/95 backdrop-blur-xl border-white/10"
              >
                <DropdownMenuItem
                  onClick={() => navigate("/case-studies")}
                  className="text-gray-300 hover:text-white focus:text-white focus:bg-white/5 transition-colors duration-200 cursor-pointer"
                >
                  Case Studies
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => navigate("/blogs")}
                  className="text-gray-300 hover:text-white focus:text-white focus:bg-white/5 transition-colors duration-200 cursor-pointer"
                >
                  Blog / Insights
                </DropdownMenuItem>
                <DropdownMenuItem className="text-gray-300 hover:text-white focus:text-white focus:bg-white/5 transition-colors duration-200">
                  Product Documentation
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="ghost"
              size="lg"
              className="text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-300"
            >
              Login
            </Button>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button
                onClick={onDemoClick}
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white shadow-lg shadow-primary/30 border-0 transition-all duration-300 hover:shadow-xl hover:shadow-primary/40"
              >
                Book a Demo
              </Button>
            </motion.div>
          </div>

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/5 transition-all duration-300"
              >
                <List className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-72 bg-[oklch(0.14_0.02_250)] border-white/10"
            >
              <div className="flex flex-col gap-6 mt-8">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className={`text-left text-lg font-medium transition-colors duration-300 ${
                      activeSection === link.id
                        ? "text-primary"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </button>
                ))}

                <div className="border-t border-white/10 pt-4">
                  <p className="text-sm font-medium text-gray-400 mb-3">
                    Resources
                  </p>
                  <div className="flex flex-col gap-3">
                    <button
                      onClick={() => {
                        navigate("/case-studies");
                        setMobileOpen(false);
                      }}
                      className="text-left text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      Case Studies
                    </button>
                    <button
                      onClick={() => {
                        navigate("/blogs");
                        setMobileOpen(false);
                      }}
                      className="text-left text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      Blog / Insights
                    </button>
                    <button className="text-left text-gray-300 hover:text-white transition-colors duration-300">
                      Product Documentation
                    </button>
                  </div>
                </div>

                <div className="flex flex-col gap-3 mt-4">
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={onDemoClick}
                    className="border-white/10 text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-300"
                  >
                    Book a Demo
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white/10 text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-300"
                  >
                    Login
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
