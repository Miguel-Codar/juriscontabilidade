import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Users, Building2, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  const [aboutBgLoaded, setAboutBgLoaded] = React.useState(true);
  React.useEffect(() => {
    const img = new Image();
    img.src = 'juris-interna.png';
    img.onload = () => setAboutBgLoaded(true);
    img.onerror = () => setAboutBgLoaded(false);
  }, []);
  const aboutBgStyle = aboutBgLoaded
    ? { backgroundImage: "url('juris-interna.png')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }
    : { backgroundColor: '#f3f4f6' };
  return (
    <div className="bg-white min-h-screen">
      
      {/* Pattern A: Editorial Split Hero */}
      <div className="relative border-b border-gray-100">
        <div className="grid lg:grid-cols-2 min-h-[600px]">
          {/* Left: Text */}
          <div className="flex items-center justify-center p-12 lg:p-24 bg-white">
            <div className="max-w-xl">
              <div className="flex items-center gap-3 mb-6">
                 <div className="h-px w-8 bg-juris-yellow"></div>
                 <span className="text-juris-blue font-bold uppercase tracking-widest text-xs">Sobre a Juris</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-sora font-bold text-juris-blue leading-[1.1] mb-8 text-balance">
                Tradição, estratégia e soluções contábeis para empresas de diferentes perfis
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed font-medium mb-8">
                A Juris Contabilidade atua há décadas oferecendo assessoria contábil, tributária, fiscal e financeira para empresas que buscam segurança, organização e crescimento sustentável.
              </p>
              <div className="flex gap-4">
                 <div className="bg-blue-50 px-6 py-4 rounded-card border-l-4 border-juris-blue">
                    <span className="block font-serif font-bold text-2xl text-juris-blue mb-1">+40 Anos</span>
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-500">De experiência</span>
                 </div>
                 <div className="bg-blue-50 px-6 py-4 rounded-card border-l-4 border-juris-yellow">
                    <span className="block font-serif font-bold text-2xl text-juris-blue mb-1">02</span>
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Unidades</span>
                 </div>
              </div>
            </div>
          </div>
          {/* Right: Visual */}
          <div className="relative h-96 lg:h-auto bg-gray-100 overflow-hidden" style={aboutBgStyle}>
             <div className="absolute inset-0 bg-juris-blue/80 mix-blend-multiply"></div>
             <div className="absolute bottom-12 left-12 right-12 text-white">
                <p className="font-serif text-2xl italic opacity-90">"Segurança e compromisso em cada decisão estratégica."</p>
             </div>
          </div>
        </div>
      </div>

      {/* Content Text - Clean */}
      <div className="container mx-auto px-4 md:px-8 py-20 lg:py-24 max-w-4xl">
         <div className="prose prose-lg text-gray-600 font-medium">
            <p className="lead text-2xl text-juris-blue font-serif font-bold">
              Com uma atuação sólida em Minas Gerais, atendemos negócios em diferentes estágios, do MEI ao Lucro Real, sempre com foco em orientação clara, conformidade legal e apoio estratégico à tomada de decisões.
            </p>
            <p>
              Ao longo da nossa história, estruturamos duas unidades com perfis complementares, pensadas para atender realidades empresariais distintas, sem abrir mão do mesmo padrão de qualidade, responsabilidade técnica e compromisso com o cliente.
            </p>
            <p>
              Para oferecer um atendimento mais próximo e direcionado, a Juris Contabilidade está presente em Cambuí e Extrema, com equipes e especializações alinhadas às demandas de cada região.
            </p>
            <p>
              Cada unidade mantém a mesma base técnica e institucional, mas com foco em segmentos e estruturas empresariais específicas, garantindo um atendimento mais eficiente e adequado à realidade de cada empresa.
            </p>
         </div>
      </div>

      {/* Pattern B: Unit Selection Hierarchy */}
      <div className="bg-gray-50 py-24 border-t border-gray-200">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-juris-blue mb-4">Escolha a unidade ideal</h2>
            <div className="h-1 w-20 bg-juris-yellow mx-auto mb-6"></div>
            <p className="text-gray-500 font-medium">
                Selecione a unidade que melhor se adapta ao perfil e localização da sua empresa.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
             {/* Card 1: Cambuí - Strong Styling */}
             <Link to="/unidade/cambui" className="group bg-white p-10 rounded-card shadow-soft hover:shadow-hover border border-gray-100 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 bg-juris-blue text-white rounded-lg">
                            <Building2 size={24} strokeWidth={2} />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-widest text-juris-blue">Tradicional</span>
                    </div>
                    <h3 className="text-3xl font-serif font-bold text-juris-blue mb-4 group-hover:text-juris-yellow transition-colors">Unidade Cambuí</h3>
                    <p className="text-gray-600 mb-8 leading-relaxed font-medium">Foco em comércio, indústria e atendimento presencial. A escolha tradicional para empresas consolidadas.</p>
                    <div className="flex items-center text-juris-blue font-bold text-sm uppercase tracking-wide group-hover:translate-x-2 transition-transform">
                        Conhecer Cambuí <ArrowRight className="ml-2 h-4 w-4" strokeWidth={3} />
                    </div>
                </div>
             </Link>

             {/* Card 2: Extrema - Strong Styling */}
             <Link to="/unidade/extrema" className="group bg-white p-10 rounded-card shadow-soft hover:shadow-hover border border-gray-100 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 bg-juris-yellow text-juris-blue rounded-lg">
                            <TrendingUp size={24} strokeWidth={2} />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-widest text-juris-yellow">Expansão</span>
                    </div>
                    <h3 className="text-3xl font-serif font-bold text-juris-blue mb-4 group-hover:text-juris-yellow transition-colors">Unidade Extrema</h3>
                    <p className="text-gray-600 mb-8 leading-relaxed font-medium">Foco em crescimento, incentivos fiscais e atendimento online. Ideal para empresas em expansão.</p>
                    <div className="flex items-center text-juris-blue font-bold text-sm uppercase tracking-wide group-hover:translate-x-2 transition-transform">
                        Conhecer Extrema <ArrowRight className="ml-2 h-4 w-4" strokeWidth={3} />
                    </div>
                </div>
             </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
