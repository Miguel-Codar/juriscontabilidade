import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, TrendingUp } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="relative bg-white">
      {/* Hero Section */}
      <div className="bg-juris-blue text-white pt-24 pb-32 lg:pt-32 lg:pb-48 relative overflow-hidden">
        {/* Abstract Pattern */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
             <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path fill="#fcb31b" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-4.1C93.5,11.1,82.2,26.4,70.6,38.8C59,51.1,47.1,60.5,34.2,67.3C21.3,74.1,7.4,78.3,-5.4,87.6C-18.2,96.9,-29.9,111.4,-39.8,109.1C-49.7,106.8,-57.8,87.7,-64.7,70.9C-71.6,54.1,-77.3,39.6,-80.6,24.3C-83.9,9,-84.8,-7.1,-79.3,-21.2C-73.8,-35.3,-61.9,-47.4,-49.2,-55.2C-36.5,-63,-23.1,-66.4,-9.9,-66.2C3.3,-66,6.6,-62.2,44.7,-76.4Z" transform="translate(100 100)" />
             </svg>
        </div>
        
        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <span className="text-juris-yellow uppercase tracking-[0.2em] text-xs font-extrabold mb-8 border border-white/20 px-5 py-2 rounded-full bg-white/5 backdrop-blur-sm">
              Contabilidade Especializada
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-8 leading-[1.05] tracking-tight">
              Soluções ideais para o seu negócio, <br className="hidden md:block"/>
              <span className="text-blue-200 italic font-serif">em cada fase da sua empresa</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl mb-12 font-medium leading-relaxed">
              Assessoria contábil especializada para empresas do MEI ao Lucro Real. 
              Estrutura robusta e atendimento personalizado.
            </p>
            
            <p className="text-xs font-bold text-white/70 uppercase tracking-widest mb-6">Escolha sua unidade</p>
          </div>
        </div>
      </div>
      
      {/* Unit Selection Cards */}
      <div className="container mx-auto px-4 md:px-8 max-w-7xl -mt-24 relative z-20 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Cambuí Card */}
          <Link 
            to="/unidade/cambui" 
            className="group relative h-[480px] rounded-card overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-2 block border border-gray-100"
          >
            <div className="absolute inset-0 bg-gray-900">
               <img 
                 src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
                 alt="Unidade Cambuí" 
                 className="w-full h-full object-cover transition duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-juris-blue/90 via-juris-blue/40 to-transparent"></div>
            </div>
            
            <div className="absolute inset-0 p-10 flex flex-col justify-end">
              <div className="transform transition duration-500 group-hover:-translate-y-2">
                <div className="flex items-center text-white mb-4 bg-white/10 w-fit px-3 py-1 rounded-full backdrop-blur-md">
                   <MapPin size={16} className="mr-2 text-juris-yellow" strokeWidth={2.5} />
                   <span className="uppercase tracking-widest text-[10px] font-extrabold">Unidade Presencial</span>
                </div>
                <h3 className="text-4xl font-serif font-bold text-white mb-4">Juris Cambuí</h3>
                <p className="text-blue-100 mb-8 font-medium text-base md:text-lg max-w-sm leading-relaxed">
                  Atendimento presencial e completo para toda região. Estrutura tradicional e consolidada.
                </p>
                <div className="inline-flex items-center text-juris-yellow text-sm font-extrabold uppercase tracking-wide border-b-2 border-juris-yellow pb-1 group-hover:text-white group-hover:border-white transition-colors">
                  Acessar Unidade <ArrowRight className="ml-2 w-5 h-5" strokeWidth={3} />
                </div>
              </div>
            </div>
          </Link>

          {/* Extrema Card */}
          <Link 
            to="/unidade/extrema" 
            className="group relative h-[480px] rounded-card overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-2 block border border-gray-100"
          >
            <div className="absolute inset-0 bg-gray-900">
               <img 
                 src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
                 alt="Unidade Extrema" 
                 className="w-full h-full object-cover transition duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-juris-blue/90 via-juris-blue/40 to-transparent"></div>
            </div>
            
            <div className="absolute inset-0 p-10 flex flex-col justify-end">
              <div className="transform transition duration-500 group-hover:-translate-y-2">
                <div className="flex items-center text-white mb-4 bg-white/10 w-fit px-3 py-1 rounded-full backdrop-blur-md">
                   <TrendingUp size={16} className="mr-2 text-juris-yellow" strokeWidth={2.5} />
                   <span className="uppercase tracking-widest text-[10px] font-extrabold">Unidade Online</span>
                </div>
                <h3 className="text-4xl font-serif font-bold text-white mb-4">Juris Extrema</h3>
                <p className="text-blue-100 mb-8 font-medium text-base md:text-lg max-w-sm leading-relaxed">
                  Atendimento digital especializado para crescimento. Foco em incentivos e expansão.
                </p>
                <div className="inline-flex items-center text-juris-yellow text-sm font-extrabold uppercase tracking-wide border-b-2 border-juris-yellow pb-1 group-hover:text-white group-hover:border-white transition-colors">
                  Acessar Unidade <ArrowRight className="ml-2 w-5 h-5" strokeWidth={3} />
                </div>
              </div>
            </div>
          </Link>

        </div>
      </div>
      
      {/* Credibility Strip */}
      <div className="bg-white border-y border-gray-100 py-16">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <div className="flex flex-wrap justify-center md:justify-between items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition duration-700">
               <span className="font-serif text-3xl text-juris-blue font-extrabold tracking-tighter">CRC-MG</span>
               <div className="h-1.5 w-1.5 bg-gray-300 rounded-full hidden md:block"></div>
               <span className="font-serif text-3xl text-juris-blue font-extrabold tracking-tighter">FENACON</span>
               <div className="h-1.5 w-1.5 bg-gray-300 rounded-full hidden md:block"></div>
               <span className="font-serif text-3xl text-juris-blue font-extrabold tracking-tighter">SESCON</span>
               <div className="h-1.5 w-1.5 bg-gray-300 rounded-full hidden md:block"></div>
               <span className="font-sans text-sm font-bold tracking-[0.2em] uppercase text-gray-400">Excelência Contábil</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;