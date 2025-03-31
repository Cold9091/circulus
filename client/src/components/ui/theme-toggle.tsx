import { useTheme } from "@/hooks/use-theme";
import { motion, AnimatePresence } from "framer-motion";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      id="theme-toggle"
      onClick={toggleTheme}
      className="fixed top-4 right-4 w-10 h-10 flex items-center justify-center bg-gray-200 dark:bg-dark-200 text-gray-800 dark:text-white rounded-full shadow-md z-50"
      aria-label="Alternar tema"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.i
          key={theme}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className={theme === "dark" ? "fas fa-sun" : "fas fa-moon"}
        ></motion.i>
      </AnimatePresence>
    </button>
  );
}
