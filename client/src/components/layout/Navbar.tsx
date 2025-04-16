import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "../ui/theme-toggle";
import LanguageSwitcher from "../ui/language-switcher";
import { useLanguage } from "../../hooks/use-language";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.home'), href: "#inicio" },
    { name: t('nav.services'), href: "#servicos" },
    { name: t('nav.social'), href: "#social-media" },
    { name: t('nav.websites'), href: "#websites" },
    { name: t('nav.contact'), href: "#contato" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

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
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="group flex items-center">
              <div className="relative w-12 h-12 mr-3">
                <div className="absolute inset-0 bg-black dark:bg-white rounded-full animate-pulse" />
                <div className="absolute inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-full animate-spin-slow" />
                <div className="absolute inset-2 bg-black dark:bg-white rounded-full" />
              </div>
              <span className="text-gray-900 dark:text-white font-bold text-xl">
                CIRCULUS  
              </span>
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
              {t('nav.contact')}
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
                  {t('nav.contact')}
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}