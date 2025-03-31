import { motion } from "framer-motion";
import { fadeIn, slideUp } from "@/lib/animations";

export default function Hero() {
  return (
    <section id="inicio" className="gradient-bg py-20 min-h-screen flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="text-white max-w-xl"
            initial="hidden"
            animate="visible"
            variants={slideUp}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              Transforme sua presença digital
            </h1>
            <p className="text-xl mb-8">
              Soluções completas de <span className="font-bold">Social Media</span> e{" "}
              <span className="font-bold">Criação de Websites</span> para impulsionar seu negócio.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#servicos"
                className="inline-block px-8 py-3 bg-white text-primary-700 font-semibold rounded-full hover:bg-gray-100 transition shadow-lg"
              >
                Conhecer Serviços
              </a>
              <a
                href="#contato"
                className="inline-block px-8 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition"
              >
                Solicitar Orçamento
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="relative"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-primary-400 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-48 h-48 bg-primary-500 rounded-full opacity-20 animate-pulse"></div>
            <img
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Equipe trabalhando em marketing digital"
              className="rounded-2xl shadow-2xl w-full max-w-lg mx-auto relative z-10"
              width="800"
              height="600"
            />
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 text-white">
          {[
            { value: "120+", label: "Clientes Satisfeitos" },
            { value: "200+", label: "Projetos Entregues" },
            { value: "1M+", label: "Engajamento Gerado" },
            { value: "98%", label: "Taxa de Satisfação" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-white/10 backdrop-blur-md rounded-xl"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              custom={index * 0.2}
            >
              <h3 className="text-4xl font-bold mb-2">{stat.value}</h3>
              <p className="text-gray-200">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
