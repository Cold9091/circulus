import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../hooks/use-language";
// Define local type (matching the exported type)
type Language = "pt" | "en";

export default function LanguageSwitcher() {
  const { language, changeLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: "pt" as Language, name: "Português", flag: "🇦🇴" },
    { code: "en" as Language, name: "English", flag: "🇺🇸" },
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-sm rounded-full p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        aria-label="Alterar idioma"
      >
        <span className="font-medium">
          {language === "pt" ? "🇦🇴" : "🇺🇸"}
        </span>
        <span className="sr-only">Alterar idioma</span>
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
          className="absolute top-full mt-2 right-0 bg-white dark:bg-gray-900 shadow-lg rounded-lg overflow-hidden py-1 z-50 min-w-[150px] border border-gray-200 dark:border-gray-700"
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                changeLanguage(lang.code);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center gap-2 ${
                language === lang.code ? "bg-gray-100 dark:bg-gray-800" : ""
              }`}
            >
              <span>{lang.flag}</span> {lang.name}
            </button>
          ))}
        </motion.div>
      )}
    </div>
  );
}