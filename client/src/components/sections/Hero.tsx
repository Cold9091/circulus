import { motion } from "framer-motion";
import { blurIn, fadeIn, parallaxScroll, revealText, slideUp, staggerContainer } from "@/lib/animations";
import { useEffect, useRef } from "react";

export default function Hero() {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  // Efeito de parallax no scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return;
      const scrollY = window.scrollY;
      parallaxRef.current.style.transform = `translateY(${scrollY * 0.1}px)`;
    };

    // Efeito de reveal em caracteres
    if (textRef.current) {
      const text = textRef.current.innerText;
      textRef.current.innerHTML = '';
      
      text.split('').forEach((char, i) => {
        const span = document.createElement('span');
        span.innerText = char;
        span.style.transitionDelay = `${i * 0.02}s`;
        textRef.current?.appendChild(span);
      });

      setTimeout(() => {
        textRef.current?.classList.add('visible');
      }, 100);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-dark-200 overflow-hidden">
      {/* Elementos decorativos com estilo Apple */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-20 -right-20 w-96 h-96 bg-gray-200 dark:bg-gray-900 rounded-full opacity-30 blur-3xl"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3, x: [0, 10, 0], y: [0, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/3 -left-20 w-80 h-80 bg-gray-300 dark:bg-gray-800 rounded-full opacity-20 blur-3xl"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.2, x: [0, -10, 0], y: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="flex flex-col items-center text-center mb-16"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h2 
            className="text-xs uppercase tracking-widest mb-6 text-gray-500 dark:text-gray-400"
            variants={fadeIn}
            custom={0.1}
          >
            Digital Pro Angola
          </motion.h2>
          <div className="overflow-hidden mb-4">
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-8xl font-bold text-black dark:text-white leading-tight"
              variants={slideUp}
            >
              <span className="text-gradient">Criamos experiências</span>
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-10">
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-8xl font-bold text-black dark:text-white leading-tight"
              variants={slideUp}
            >
              digitais que impressionam
            </motion.h1>
          </div>
          <motion.p 
            className="text-lg md:text-xl max-w-3xl text-gray-600 dark:text-gray-300 mb-12"
            variants={blurIn}
          >
            Soluções profissionais de <span className="font-semibold">Social Media</span> e{" "}
            <span className="font-semibold">Criação de Websites</span> que transformam a presença 
            digital do seu negócio com uma abordagem moderna e sofisticada.
          </motion.p>
          <motion.div 
            className="flex flex-wrap justify-center gap-5"
            variants={fadeIn}
            custom={0.4}
          >
            <a href="#servicos" className="apple-button">
              Conhecer Serviços
            </a>
            <a href="#contato" className="subtle-button">
              Solicitar Orçamento
            </a>
          </motion.div>
        </motion.div>

        {/* Imagem com efeito de vidro e sombras inspiradas na Apple */}
        <motion.div 
          className="relative mx-auto max-w-4xl aspect-video mb-24"
          initial="hidden"
          animate="visible"
          variants={blurIn}
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-300 to-gray-400 dark:from-gray-700 dark:to-gray-600 rounded-2xl blur opacity-50"></div>
          <div className="glass-card rounded-2xl overflow-hidden relative" ref={parallaxRef}>
            <img
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
              alt="Equipe trabalhando em marketing digital"
              className="w-full h-full object-cover rounded-2xl shadow-xl"
              width="1600"
              height="900"
            />
          </div>
        </motion.div>

        {/* Stats com estilo Apple */}
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {[
            { value: "120+", label: "Clientes Satisfeitos" },
            { value: "200+", label: "Projetos Entregues" },
            { value: "1M+", label: "Engajamento Gerado" },
            { value: "98%", label: "Taxa de Satisfação" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 glass-card hover-lift"
              variants={fadeIn}
              custom={index * 0.1}
            >
              <h3 className="text-3xl md:text-4xl font-bold mb-2 text-black dark:text-white">{stat.value}</h3>
              <p className="text-gray-600 dark:text-gray-300">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Texto com animação por caractere */}
        <div className="mt-32 mb-20 text-center">
          <p className="char-animation text-lg md:text-xl text-gray-600 dark:text-gray-300" ref={textRef}>
            Elevando marcas através do digital desde 2020
          </p>
        </div>
      </div>

      {/* Indicator de scroll */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <div className="w-8 h-12 rounded-full border-2 border-gray-400 dark:border-gray-600 flex justify-center pt-2">
          <motion.div 
            className="w-1 h-2 bg-gray-400 dark:bg-gray-600 rounded-full"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
