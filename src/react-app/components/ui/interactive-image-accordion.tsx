import { useState } from 'react';

// --- Data for the image accordion ---
const accordionItems = [
  {
    id: 1,
    title: 'Desenvolvimento Web',
    imageUrl: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=450&fit=crop&auto=format',
  },
  {
    id: 2,
    title: 'Design UI/UX',
    imageUrl: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=450&fit=crop&auto=format',
  },
  {
    id: 3,
    title: 'E-commerce',
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=450&fit=crop&auto=format',
  },
  {
    id: 4,
    title: 'Apps Mobile',
    imageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=450&fit=crop&auto=format',
  },
  {
    id: 5,
    title: 'Performance',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=450&fit=crop&auto=format',
  },
];

// --- Accordion Item Component ---
const AccordionItem = ({ item, isActive, onMouseEnter }: { 
  item: typeof accordionItems[0], 
  isActive: boolean, 
  onMouseEnter: () => void 
}) => {
  return (
    <div
      className={`
        relative h-[550px] rounded-2xl overflow-hidden cursor-pointer
        transition-all duration-700 ease-in-out
        ${isActive ? 'w-[500px]' : 'w-[80px]'}
      `}
      onMouseEnter={onMouseEnter}
    >
      {/* Background Image */}
      <img
        src={item.imageUrl}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover"
        onError={(e) => { 
          const target = e.target as HTMLImageElement;
          target.onerror = null; 
          target.src = 'https://placehold.co/500x550/2d3748/ffffff?text=Image+Error'; 
        }}
      />
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Caption Text */}
      <span
        className={`
          absolute text-white text-xl font-semibold whitespace-nowrap
          transition-all duration-300 ease-in-out
          ${
            isActive
              ? 'bottom-8 left-1/2 -translate-x-1/2 rotate-0' // Active state: horizontal, bottom-center
              // Inactive state: vertical, positioned at the bottom, for all screen sizes
              : 'w-auto text-left bottom-32 left-1/2 -translate-x-1/2 rotate-90'
          }
        `}
      >
        {item.title}
      </span>
    </div>
  );
};

// --- Main App Component ---
export function LandingAccordionItem() {
  const [activeIndex, setActiveIndex] = useState(2);

  const handleItemHover = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="bg-white dark:bg-black font-sans">
      <section className="container mx-auto px-4 py-12 md:py-24">
        <div className="flex flex-col items-center justify-center">
          
          {/* Centered Text Content */}
          <div className="w-full text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight tracking-tighter">
              Soluções <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Tecnológicas</span> Completas
            </h1>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Criamos experiências digitais modernas e performáticas que elevam seu negócio 
              e impressionam seus clientes.
            </p>
            <div className="mt-8">
              <a
                href="#contato"
                className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                Iniciar Projeto
              </a>
            </div>
          </div>

          {/* Large Image Accordion */}
          <div className="w-full max-w-6xl">
            <div className="flex flex-row items-center justify-center gap-6 overflow-x-auto p-6">
              {accordionItems.map((item, index) => (
                <AccordionItem
                  key={item.id}
                  item={item}
                  isActive={index === activeIndex}
                  onMouseEnter={() => handleItemHover(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
