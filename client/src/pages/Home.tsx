import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import SocialMediaPackages from "@/components/sections/SocialMediaPackages";
import WebsitePackages from "@/components/sections/WebsitePackages";
import Testimonials from "@/components/sections/Testimonials";
import ContactForm from "@/components/sections/ContactForm";
import WhatsappButton from "@/components/ui/whatsapp-button";
import { initScrollReveal } from "@/hooks/use-scroll-reveal";

export default function Home() {
  useEffect(() => {
    initScrollReveal();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-dark-400 text-gray-800 dark:text-gray-100 overflow-x-hidden">
      <WhatsappButton />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <SocialMediaPackages />
        <WebsitePackages />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
