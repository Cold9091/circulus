import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 gradient-text">DigitalPro</h3>
            <p className="text-gray-400 mb-6">
              Soluções completas para sua presença digital. Gestão de redes sociais e criação de websites profissionais.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition" 
                aria-label="Instagram"
              >
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a 
                href="https://www.facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition" 
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
              <a 
                href="https://www.tiktok.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition" 
                aria-label="TikTok"
              >
                <i className="fab fa-tiktok text-xl"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Social Media</h4>
            <ul className="space-y-2">
              <li>
                <a href="#social-media" className="text-gray-400 hover:text-white transition">
                  Pacote Básico
                </a>
              </li>
              <li>
                <a href="#social-media" className="text-gray-400 hover:text-white transition">
                  Pacote Intermediário
                </a>
              </li>
              <li>
                <a href="#social-media" className="text-gray-400 hover:text-white transition">
                  Pacote Avançado
                </a>
              </li>
              <li>
                <a href="#social-media" className="text-gray-400 hover:text-white transition">
                  Planos Personalizados
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Websites</h4>
            <ul className="space-y-2">
              <li>
                <a href="#websites" className="text-gray-400 hover:text-white transition">
                  Landing Page
                </a>
              </li>
              <li>
                <a href="#websites" className="text-gray-400 hover:text-white transition">
                  Site Profissional
                </a>
              </li>
              <li>
                <a href="#websites" className="text-gray-400 hover:text-white transition">
                  E-commerce
                </a>
              </li>
              <li>
                <a href="#websites" className="text-gray-400 hover:text-white transition">
                  Hospedagem e Domínio
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-gray-400 hover:text-white transition">
                  Início
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-400 hover:text-white transition">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-400 hover:text-white transition">
                  Portfólio
                </a>
              </li>
              <li>
                <a href="#contato" className="text-gray-400 hover:text-white transition">
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} DigitalPro. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-white text-sm transition">
              Política de Privacidade
            </a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition">
              Termos de Serviço
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
