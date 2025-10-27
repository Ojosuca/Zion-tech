import { useEffect } from 'react';
import { ContainerScroll } from '@/react-app/components/ui/container-scroll-animation';
import { LandingAccordionItem } from '@/react-app/components/ui/interactive-image-accordion';
import StackFeatureSection from '@/react-app/components/ui/stack-feature-section';
import { HeroParallax } from '@/react-app/components/ui/hero-parallax';
import { InfiniteMovingCards } from '@/react-app/components/ui/infinite-moving-cards';
import { NavBar } from '@/react-app/components/ui/tubelight-navbar';
import { TeamSection } from '@/react-app/components/ui/team-member-card';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Home as HomeIcon, User, Briefcase, Mail } from 'lucide-react';



export default function Home() {
  useEffect(() => {
    document.title = 'ZionTech - Soluções Tecnológicas Modernas';
  }, []);

  const portfolioProjects = [
    {
      title: "E-commerce Moderno",
      link: "#",
      thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&auto=format",
    },
    {
      title: "Dashboard Analytics",
      link: "#",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&auto=format",
    },
    {
      title: "App Mobile Banking",
      link: "#",
      thumbnail: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop&auto=format",
    },
    {
      title: "Plataforma SaaS",
      link: "#",
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&auto=format",
    },
    {
      title: "Site Corporativo",
      link: "#",
      thumbnail: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop&auto=format",
    },
    {
      title: "Landing Page",
      link: "#",
      thumbnail: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop&auto=format",
    },
    {
      title: "Sistema Web",
      link: "#",
      thumbnail: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop&auto=format",
    },
    {
      title: "App React Native",
      link: "#",
      thumbnail: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?w=800&h=600&fit=crop&auto=format",
    },
    {
      title: "Portal Educacional",
      link: "#",
      thumbnail: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop&auto=format",
    },
    {
      title: "Marketplace",
      link: "#",
      thumbnail: "https://images.unsplash.com/photo-1556155092-490a1ba16284?w=800&h=600&fit=crop&auto=format",
    },
    {
      title: "Blog Moderno",
      link: "#",
      thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68e2c6b525?w=800&h=600&fit=crop&auto=format",
    },
    {
      title: "Sistema ERP",
      link: "#",
      thumbnail: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop&auto=format",
    },
    {
      title: "Fintech App",
      link: "#",
      thumbnail: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop&auto=format",
    },
    {
      title: "Plataforma de Cursos",
      link: "#",
      thumbnail: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop&auto=format",
    },
    {
      title: "CRM Personalizado",
      link: "#",
      thumbnail: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&h=600&fit=crop&auto=format",
    },
  ];

  const testimonials = [
    {
      quote:
        "A ZionTech superou todas as nossas expectativas. O site ficou incrível e nossos clientes estão elogiando muito o design moderno e a facilidade de navegação.",
      name: "Ana Silva",
      title: "CEO da TechStart",
    },
    {
      quote:
        "Profissionais excepcionais! Entregaram nosso projeto no prazo e com uma qualidade técnica impressionante. O resultado foi além do que imaginávamos.",
      name: "Roberto Santos",
      title: "Diretor de Marketing",
    },
    {
      quote:
        "A parceria com a ZionTech foi transformadora para nossa empresa. Eles entenderam nossa visão e criaram uma solução perfeita para nosso negócio.",
      name: "Mariana Costa",
      title: "Fundadora da InovaCorp",
    },
    {
      quote:
        "Impressionante a dedicação e o conhecimento técnico da equipe. Nosso e-commerce nunca funcionou tão bem e as vendas aumentaram significativamente.",
      name: "Carlos Mendes",
      title: "Gerente de E-commerce",
    },
    {
      quote:
        "A ZionTech não apenas criou nosso site, mas nos consultou em toda a estratégia digital. São verdadeiros parceiros de negócio.",
      name: "Fernanda Lima",
      title: "Diretora Comercial",
    },
  ];

  

  const navItems = [
    { name: 'Home', url: '#home', icon: HomeIcon },
    { name: 'Sobre', url: '#sobre', icon: User },
    { name: 'Serviços', url: '#servicos', icon: Code },
    { name: 'Portfólio', url: '#portfolio', icon: Briefcase },
    { name: 'Contato', url: '#contato', icon: Mail }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Modern Tubelight Navigation */}
      <NavBar items={navItems} />

      {/* Hero Section with Scroll Animation */}
      <div id="home" className="pt-16">
        <ContainerScroll
          titleComponent={
            <>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-8"
              >
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4">
                  Criamos <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Sites Modernos</span>
                  <br />
                  <span className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 leading-none">
                    que Impressionam
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
                  Duas mentes jovens, soluções tecnológicas inovadoras. 
                  Transformamos suas ideias em experiências digitais extraordinárias.
                </p>
              </motion.div>
            </>
          }
        >
          <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 rounded-2xl flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1400&h=800&fit=crop&auto=format"
              alt="Modern web development"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </ContainerScroll>
      </div>

      {/* About Section */}
      <TeamSection />

      {/* Services Section with Interactive Accordion */}
      <section id="servicos" className="py-20">
        <LandingAccordionItem />
      </section>

      {/* Stack Feature Section */}
      <StackFeatureSection />

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <HeroParallax products={portfolioProjects} />
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              O que nossos clientes dizem
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Depoimentos reais de empresas que confiaram na ZionTech para 
              transformar sua presença digital.
            </p>
          </motion.div>
        </div>
        
        <div className="relative h-[40rem] w-full overflow-hidden flex items-center justify-center">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section id="contato" className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Pronto para Transformar Sua Presença Digital?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Vamos criar juntos uma solução tecnológica que eleve seu negócio 
              a um novo patamar. Entre em contato e descubra como podemos ajudar.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-shadow inline-flex items-center gap-2"
            >
              Iniciar Projeto
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            ZionTech
          </div>
          <p className="text-gray-400 mb-6">
            Soluções Tecnológicas que Impressionam
          </p>
          <div className="flex justify-center space-x-6 mb-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              GitHub
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Instagram
            </a>
          </div>
          <p className="text-gray-400 text-sm">
            © 2024 ZionTech. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
