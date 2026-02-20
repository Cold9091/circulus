import { motion } from "framer-motion";
import { staggerContainer, fadeInUp, cardHover, buttonTap, buttonHover } from "@/lib/animations";

export default function SocialMediaPackages() {
  const packages = [
    {
      title: "Pacote Essencial",
      price: "Kz 50.000",
      description: "Ideal para profissionais liberais e pequenos negócios que querem presença profissional consistente.",
      features: [
        { text: "12 posts estratégicos por mês (design profissional + copy persuasiva)", available: true },
        { text: "4 stories semanais com gatilhos de interação", available: true },
        { text: "Calendário editorial mensal", available: true },
        { text: "Planeamento estratégico básico", available: true },
        { text: "Relatório mensal de desempenho", available: true },
        { text: "Otimização de bio e identidade visual do perfil", available: true },
      ],
      popular: false,
    },
    {
      title: "Pacote Crescimento",
      price: "Kz 75.000",
      description: "Perfeito para negócios que querem fortalecer marca e gerar autoridade.",
      features: [
        { text: "20 posts estratégicos por mês", available: true },
        { text: "6 stories semanais com foco em conversão", available: true },
        { text: "2 Reels estratégicos por mês", available: true },
        { text: "Calendário editorial avançado", available: true },
        { text: "Estudo básico de concorrência", available: true },
        { text: "Estratégia mensal personalizada", available: true },
        { text: "Relatório detalhado com análise de métricas", available: true },
        { text: "Reunião estratégica mensal", available: true },
      ],
      popular: true,
    },
    {
      title: "Pacote Dominação",
      price: "Kz 120.000",
      description: "Para empresas que querem se posicionar como referência no mercado.",
      features: [
        { text: "30 posts estratégicos por mês", available: true },
        { text: "10 stories semanais com roteirização estratégica", available: true },
        { text: "4 Reels ou vídeos curtos por mês", available: true },
        { text: "Planeamento estratégico completo", available: true },
        { text: "Posicionamento de marca e autoridade", available: true },
        { text: "Estudo de mercado e análise de concorrência", available: true },
        { text: "Copywriting avançado focado em conversão", available: true },
        { text: "Relatório estratégico completo", available: true },
        { text: "2 reuniões estratégicas mensais", available: true },
        { text: "Suporte prioritário", available: true },
      ],
      popular: false,
    },
  ];

  return (
    <section id="social-media" className="py-20 bg-white dark:bg-dark-400 section-fade">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="px-4 py-1 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-sm font-medium">
            SOCIAL MEDIA
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4">
            Pacotes de Gestão de Redes Sociais
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Escolha o plano ideal para aumentar sua presença nas redes sociais, 
            engajar com seu público e convertê-los em clientes fiéis.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              className={`
                bg-white dark:bg-dark-200 rounded-2xl overflow-hidden shadow-lg micro-card
                ${pkg.popular ? 'transform scale-105 border-2 border-primary-400 dark:border-primary-600 relative z-10' : 'border border-gray-100 dark:border-dark-100'}
              `}
              variants={fadeInUp}
              whileInView="visible"
              initial="hidden"
              viewport={{ once: true, amount: 0.2 }}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-0 w-full py-2 bg-primary-600 text-white text-center text-sm font-medium">
                  MAIS POPULAR
                </div>
              )}
              <div className={`p-8 ${pkg.popular ? 'mt-6' : ''}`}>
                <h3 className="text-2xl font-bold mb-2">{pkg.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {pkg.description}
                </p>
                <div className="mb-8">
                  <span className="text-4xl font-bold">{pkg.price}</span>
                  <span className="text-gray-500 dark:text-gray-400">/mês</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className={`flex items-start ${!feature.available ? 'opacity-50' : ''}`}>
                      {feature.available ? (
                        <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                      ) : (
                        <i className="fas fa-times text-red-500 mt-1 mr-2"></i>
                      )}
                      <span>{feature.text}</span>
                    </li>
                  ))}
                </ul>
                <motion.a
                  href="#contato"
                  className={`block w-full py-3 px-6 text-center ${
                    pkg.popular
                      ? 'gradient-button text-white hover:opacity-90'
                      : 'bg-gray-100 dark:bg-dark-100 hover:bg-gray-200 dark:hover:bg-dark-300 text-gray-800 dark:text-white'
                  } font-medium rounded-lg micro-button`}
                  whileTap={{ scale: 0.97 }}
                  whileHover={{ y: -2 }}
                >
                  Escolher Plano
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Também oferecemos planos personalizados para necessidades específicas.
          </p>
          <motion.a
            href="#contato"
            className="inline-block py-3 px-8 border-2 border-primary-500 dark:border-primary-400 text-primary-600 dark:text-primary-400 font-medium rounded-full hover:bg-primary-50 dark:hover:bg-primary-900/30 micro-button"
            whileTap={{ scale: 0.97 }}
            whileHover={{ y: -2, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" }}
          >
            Solicitar Plano Personalizado
          </motion.a>
        </div>
      </div>
    </section>
  );
}
