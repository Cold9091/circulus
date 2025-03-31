import { motion } from "framer-motion";

export default function Services() {
  return (
    <section id="servicos" className="py-20 bg-gray-50 dark:bg-dark-300 section-fade">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Serviços</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Oferecemos soluções completas para impulsionar sua presença online e 
            alcançar seu público-alvo de forma estratégica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Social Media Card */}
          <div className="bg-white dark:bg-dark-200 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="p-1 gradient-bg"></div>
            <div className="p-8">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-hashtag text-white text-3xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">Gestão de Social Media</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Potencialize sua presença nas redes sociais com estratégias personalizadas 
                de conteúdo, engajamento e crescimento de audiência.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <i className="fas fa-check text-primary-500 mt-1 mr-2"></i>
                  <span>Posts, stories e reels personalizados</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-primary-500 mt-1 mr-2"></i>
                  <span>Estratégias de engajamento e conversão</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-primary-500 mt-1 mr-2"></i>
                  <span>Relatórios detalhados de desempenho</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-primary-500 mt-1 mr-2"></i>
                  <span>Gestão de anúncios e campanhas</span>
                </li>
              </ul>
              <a 
                href="#social-media" 
                className="inline-block gradient-button text-white font-medium py-3 px-6 rounded-full hover:opacity-90 transition"
              >
                Ver Pacotes
              </a>
            </div>
          </div>

          {/* Website Development Card */}
          <div className="bg-white dark:bg-dark-200 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="p-1 gradient-bg"></div>
            <div className="p-8">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-laptop-code text-white text-3xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">Criação de Websites</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Desenvolvimento de sites modernos, responsivos e otimizados para SEO, 
                criados para converter visitantes em clientes.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <i className="fas fa-check text-primary-500 mt-1 mr-2"></i>
                  <span>Designs personalizados e responsivos</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-primary-500 mt-1 mr-2"></i>
                  <span>Otimização para SEO e performance</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-primary-500 mt-1 mr-2"></i>
                  <span>Landing pages e e-commerce</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-primary-500 mt-1 mr-2"></i>
                  <span>Hospedagem e suporte técnico</span>
                </li>
              </ul>
              <a 
                href="#websites" 
                className="inline-block gradient-button text-white font-medium py-3 px-6 rounded-full hover:opacity-90 transition"
              >
                Ver Pacotes
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
