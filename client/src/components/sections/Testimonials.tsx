import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialRef = useRef<HTMLDivElement>(null);
  const [itemsPerView, setItemsPerView] = useState(getItemsPerView());

  function getItemsPerView() {
    return typeof window !== "undefined" ? (window.innerWidth >= 768 ? 3 : 1) : 3;
  }

  const testimonials = [
    {
      id: 1,
      text: "Desde que contratei os serviços de social media, o engajamento nas minhas redes sociais aumentou mais de 200%. A equipe entendeu perfeitamente o posicionamento da minha marca e criou conteúdos que realmente conectam com meu público.",
      author: "Carlos Almeida",
      position: "Restaurante Sabores de Angola",
      initials: "CA",
      rating: 5,
    },
    {
      id: 2,
      text: "Meu e-commerce estava estagnado até contratar o serviço de desenvolvimento web. O novo site é muito mais rápido, responsivo e converteu 3x mais visitantes em clientes logo no primeiro mês. O investimento valeu cada kwanza!",
      author: "Maria Santos",
      position: "Boutique Elegance",
      initials: "MS",
      rating: 5,
    },
    {
      id: 3,
      text: "Como profissional liberal, precisava de uma presença digital mais consistente. O pacote intermediário de social media se encaixou perfeitamente nas minhas necessidades, e os resultados foram imediatos. Recomendo fortemente!",
      author: "João Paulo",
      position: "Arquiteto Autônomo",
      initials: "JP",
      rating: 4.5,
    },
  ];

  const maxIndex = testimonials.length - itemsPerView;

  const updateSlider = () => {
    if (testimonialRef.current) {
      const translateValue = -currentIndex * (100 / itemsPerView);
      testimonialRef.current.style.transform = `translateX(${translateValue}%)`;
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      const newItemsPerView = getItemsPerView();
      if (newItemsPerView !== itemsPerView) {
        setItemsPerView(newItemsPerView);
        setCurrentIndex(0); // Reset to first slide
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [itemsPerView]);

  useEffect(() => {
    updateSlider();
  }, [currentIndex, itemsPerView]);

  return (
    <section className="py-20 bg-gray-50 dark:bg-dark-300 section-fade">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="px-4 py-1 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-sm font-medium">
            DEPOIMENTOS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Confira a opinião de quem já confiou em nossos serviços e alcançou resultados expressivos.
          </p>
        </div>

        <div className="testimonial-slider relative">
          <div className="flex overflow-x-hidden">
            <div 
              ref={testimonialRef}
              className="testimonial-track flex transition-transform duration-500"
              style={{ transform: `translateX(0)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className={`testimonial-item min-w-full md:min-w-[33.333%] px-4`}
                >
                  <div className="bg-white dark:bg-dark-200 p-8 rounded-2xl shadow-lg">
                    <div className="flex items-center mb-6">
                      <div className="text-amber-400 flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <i
                            key={i}
                            className={`fas ${
                              i < Math.floor(testimonial.rating)
                                ? "fa-star"
                                : i < testimonial.rating
                                ? "fa-star-half-alt"
                                : "fa-star text-gray-300"
                            }`}
                          ></i>
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-6">
                      "{testimonial.text}"
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mr-4">
                        <span className="text-primary-700 dark:text-primary-300 font-bold">
                          {testimonial.initials}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-bold">{testimonial.author}</h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          {testimonial.position}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`absolute top-1/2 left-2 -translate-y-1/2 w-10 h-10 rounded-full bg-white dark:bg-dark-200 shadow-lg flex items-center justify-center text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-dark-100 transition ${
              currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            aria-label="Anterior"
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            className={`absolute top-1/2 right-2 -translate-y-1/2 w-10 h-10 rounded-full bg-white dark:bg-dark-200 shadow-lg flex items-center justify-center text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-dark-100 transition ${
              currentIndex >= maxIndex ? "opacity-50 cursor-not-allowed" : ""
            }`}
            aria-label="Próximo"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
}
