import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "../ui/theme-toggle";
import LanguageSwitcher from "../ui/language-switcher";
import { useLanguage } from "../../hooks/use-language";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "#inicio" },
    { name: "Serviços", href: "#servicos" },
    { name: "Social Media", href: "#social-media" },
    { name: "Websites", href: "#websites" },
    { name: "Contato", href: "#contato" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const logoText = "CIRCULUS DIGITAL & PROJEFIS";
  
  return (
    <header 
      className={`fixed top-0 z-40 w-full transition-all duration-500 ${
        scrolled 
          ? "bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200/20 dark:border-gray-800/20 py-3" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="group flex items-center">
              <div className="overflow-hidden mr-1">
                <motion.div 
                  className="h-8 w-8 rounded-lg bg-black dark:bg-white flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-white dark:text-black font-bold text-lg">D</span>
                </motion.div>
              </div>
              <div className="flex overflow-hidden items-center max-w-[200px] md:max-w-xs">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="text-gray-900 dark:text-white font-medium tracking-tight text-sm md:text-base whitespace-nowrap"
                >
                  {logoText}
                </motion.span>
              </div>
            </Link>
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white text-sm font-medium transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center space-x-2">
              <LanguageSwitcher />
              <ThemeToggle />
            </div>
          </nav>
          
          {/* Action Button (desktop) */}
          <div className="hidden md:block">
            <a
              href="#contato"
              className="subtle-button text-sm"
            >
              Contato
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <LanguageSwitcher />
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="flex items-center p-2 rounded-full glass-effect"
              aria-label="Menu principal"
            >
              <div className="w-5 h-5 relative">
                <motion.span
                  className="absolute h-0.5 rounded-full bg-black dark:bg-white w-5 left-0 top-0.5"
                  animate={{ 
                    top: isOpen ? "50%" : "0.5rem", 
                    rotate: isOpen ? 45 : 0, 
                    y: isOpen ? "-50%" : 0 
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="absolute h-0.5 rounded-full bg-black dark:bg-white w-3 right-0 top-2.5"
                  animate={{ opacity: isOpen ? 0 : 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="absolute h-0.5 rounded-full bg-black dark:bg-white w-5 left-0 bottom-0"
                  animate={{ 
                    bottom: isOpen ? "50%" : "0", 
                    rotate: isOpen ? -45 : 0, 
                    y: isOpen ? "50%" : 0 
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            className="md:hidden bg-white/95 dark:bg-dark-200/95 backdrop-blur-lg absolute w-full h-screen overflow-hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="container h-full flex flex-col justify-center items-center px-6 space-y-10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                >
                  <a
                    href={link.href}
                    className="text-3xl font-bold text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                    onClick={closeMenu}
                  >
                    {link.name}
                  </a>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 + 0.2 }}
              >
                <a
                  href="#contato"
                  className="apple-button mt-6 inline-block"
                  onClick={closeMenu}
                >
                  Contato
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}