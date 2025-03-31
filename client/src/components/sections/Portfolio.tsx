import { useState } from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export default function Portfolio() {
  const [filter, setFilter] = useState("all");

  const portfolioItems = [
    {
      id: 1,
      title: "E-commerce de Moda",
      description: "Loja virtual completa com integração de pagamentos e gestão de estoque.",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "web",
      tags: ["Website", "E-commerce"],
    },
    {
      id: 2,
      title: "Campanha Gastronômica",
      description: "Campanha completa de social media para restaurante, incluindo posts e stories.",
      image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "social",
      tags: ["Social Media", "Instagram"],
    },
    {
      id: 3,
      title: "Site Institucional",
      description: "Website completo para empresa de consultoria financeira.",
      image: "https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "web",
      tags: ["Website", "Institucional"],
    },
    {
      id: 4,
      title: "Campanha de Estética",
      description: "Gestão completa de redes sociais para clínica de estética.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "social",
      tags: ["Social Media", "Facebook"],
    },
    {
      id: 5,
      title: "Landing Page de Evento",
      description: "Página de captura para evento corporativo com alta taxa de conversão.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "web",
      tags: ["Website", "Landing Page"],
    },
    {
      id: 6,
      title: "Feed Harmonizado",
      description: "Planejamento e design de feed do Instagram para marca de moda.",
      image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "social",
      tags: ["Social Media", "Instagram"],
    },
  ];

  const filteredItems = filter === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  return (
    <section id="portfolio" className="py-20 bg-white dark:bg-dark-400 section-fade">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="px-4 py-1 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-sm font-medium">
            PORTFÓLIO
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4">
            Alguns de Nossos Projetos
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Conheça alguns dos nossos trabalhos recentes em social media e desenvolvimento web.
          </p>
        </div>

        {/* Portfolio Tabs */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setFilter("all")}
              className={`px-6 py-2 rounded-full font-medium transition ${
                filter === "all"
                  ? "bg-primary-600 text-white"
                  : "bg-gray-200 dark:bg-dark-200 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-dark-100"
              }`}
            >
              Todos
            </button>
            <button
              onClick={() => setFilter("web")}
              className={`px-6 py-2 rounded-full font-medium transition ${
                filter === "web"
                  ? "bg-primary-600 text-white"
                  : "bg-gray-200 dark:bg-dark-200 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-dark-100"
              }`}
            >
              Websites
            </button>
            <button
              onClick={() => setFilter("social")}
              className={`px-6 py-2 rounded-full font-medium transition ${
                filter === "social"
                  ? "bg-primary-600 text-white"
                  : "bg-gray-200 dark:bg-dark-200 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-dark-100"
              }`}
            >
              Social Media
            </button>
          </div>
        </div>

        {/* Portfolio Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {filteredItems.map((item) => (
            <motion.div 
              key={item.id} 
              className="portfolio-item"
              variants={fadeInUp}
            >
              <div className="group relative overflow-hidden rounded-xl shadow-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  width="800"
                  height="500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-white text-xl font-bold">{item.title}</h3>
                  <p className="text-gray-200 mt-2">{item.description}</p>
                  <div className="mt-4 flex gap-2">
                    {item.tags.map((tag, index) => (
                      <span
                        key={index}
                        className={`px-3 py-1 ${
                          index === 0
                            ? "bg-primary-500/70 text-white"
                            : "bg-white/20 text-white"
                        } text-xs rounded-full`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <a
            href="#contato"
            className="inline-block gradient-button text-white font-medium py-3 px-8 rounded-full hover:opacity-90 transition"
          >
            Comece Seu Projeto Agora
          </a>
        </div>
      </div>
    </section>
  );
}
