import { useLanguage } from "../../hooks/use-language";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === "pt" ? "en" : "pt")}
      className="p-2 rounded-full glass-effect"
      aria-label="Trocar idioma"
    >
      <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
        {language.toUpperCase()}
      </span>
    </button>
  );
}