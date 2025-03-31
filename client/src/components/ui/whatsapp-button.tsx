import { motion } from "framer-motion";

export default function WhatsappButton() {
  return (
    <motion.a
      href="https://wa.me/123456789"
      className="fixed bottom-6 right-6 w-16 h-16 flex items-center justify-center bg-green-500 text-white rounded-full shadow-lg z-50 hover:bg-green-600 transition-all duration-300"
      aria-label="Contato por WhatsApp"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <i className="fab fa-whatsapp text-3xl"></i>
    </motion.a>
  );
}
