import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Check, TrendingUp, BarChart3, Globe, Zap, CalendarDays } from 'lucide-react';

const UnitExtrema: React.FC = () => {
  const [extremaBgLoaded, setExtremaBgLoaded] = React.useState(true);
  React.useEffect(() => {
    const img = new Image();
    img.src = 'extrema-alegria-e-extrema-grandeza-cidade-de-extrema-o-limite-glorioso-de-minas-gerais-1652899164.jpg';
    img.onload = () => setExtremaBgLoaded(true);
    img.onerror = () => setExtremaBgLoaded(false);
  }, []);
  const extremaBgStyle = extremaBgLoaded
    ? { backgroundImage: "url('extrema-alegria-e-extrema-grandeza-cidade-de-extrema-o-limite-glorioso-de-minas-gerais-1652899164.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }
    : { backgroundColor: '#f3f4f6' };
  return (
    <div className="bg-white">
      
      {/* Pattern A: Editorial Split Hero */}
      <div className="grid lg:grid-cols-2 min-h-[85vh] lg:h-[800px]">
        <div className="order-2 lg:order-1 relative h-96 lg:h-auto" style={extremaBgStyle}>
             <div className="absolute inset-0 bg-juris-blue/40 mix-blend-multiply"></div>
         </div>
         <div className="order-1 lg:order-2 bg-white p-12 lg:p-24 flex flex-col justify-center">
             <div className="inline-flex items-center gap-2 text-juris-yellow font-bold uppercase tracking-widest text-xs mb-8">
                <CalendarDays size={16} /> Online ou Agendamento
             </div>
            <h1 className="text-5xl lg:text-7xl font-sora font-bold text-juris-blue mb-8 leading-[1.05]">
                 Juris Contábil <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-juris-yellow to-yellow-600">Extrema</span>
             </h1>
             <p className="text-xl text-gray-600 font-medium mb-12 max-w-md leading-relaxed">
                 Assessoria contábil para empresas que buscam crescimento estruturado, organização fiscal e decisões mais seguras. Atendimento online ou presencial por agendamento.
             </p>
             <div className="flex flex-wrap gap-4">
                 <a href="mailto:Adm@juriscontabil.com.br" className="bg-juris-blue text-white px-8 py-4 rounded-btn font-bold hover:bg-juris-dark transition flex items-center shadow-lg">
                    <Mail className="mr-2 h-4 w-4" /> Falar com a unidade
                 </a>
                 <a href="https://wa.me/553534600534?text=Olá, gostaria de agendar uma visita na unidade de Extrema." target="_blank" rel="noopener noreferrer" className="border-2 border-juris-blue text-juris-blue px-8 py-4 rounded-btn font-bold hover:bg-blue-50 transition flex items-center">
                    <CalendarDays className="mr-2 h-4 w-4" /> Agendar Visita
                 </a>
             </div>
         </div>
      </div>

      {/* Editorial Strip "Since 2009" */}
      <div className="bg-juris-blue text-white py-8 overflow-hidden">
          <div className="container mx-auto px-4 flex items-center justify-center gap-4 md:gap-12 opacity-80">
              <span className="font-serif italic text-xl">Desde 2009</span>
              <div className="h-px w-12 bg-white/30"></div>
              <span className="uppercase tracking-widest font-bold text-sm">Ajudando empresas a crescer</span>
              <div className="h-px w-12 bg-white/30"></div>
              <span className="font-serif italic text-xl">Foco em Expansão</span>
          </div>
      </div>

      {/* Highlight Block: Tax Reform */}
      <div className="py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-8 max-w-6xl">
              <div className="bg-white rounded-card shadow-soft p-12 border-l-8 border-juris-yellow flex flex-col lg:flex-row items-center gap-12">
                  <div className="lg:w-2/3">
                      <div className="inline-block bg-yellow-50 text-juris-yellow font-extrabold text-[10px] uppercase px-3 py-1 rounded-full mb-4">Destaque Estratégico</div>
                      <h2 className="text-3xl font-serif font-bold text-juris-blue mb-4">Reforma Tributária (LC 214/2025)</h2>
                      <p className="text-gray-600 text-lg font-medium leading-relaxed">
                          Sua empresa está preparada? Oferecemos planejamento e assessoria completa conforme as atualizações da Lei Complementar 214/2025. Antecipe-se às mudanças.
                      </p>
                  </div>
                  <div className="lg:w-1/3 flex justify-center">
                      <div className="h-32 w-32 bg-blue-50 rounded-full flex items-center justify-center text-juris-blue">
                          <BarChart3 size={48} strokeWidth={1.5} />
                      </div>
                  </div>
              </div>
          </div>
      </div>

      {/* Pattern C: Rich List Services */}
      <div className="py-24 container mx-auto px-4 md:px-8 max-w-7xl">
         <div className="text-center mb-16">
             <h2 className="text-4xl font-serif font-bold text-juris-blue mb-4">Principais Serviços</h2>
             <p className="text-gray-500 font-medium max-w-2xl mx-auto">
                 Atendimento direcionado, com planejamento alinhado à realidade de cada setor.
             </p>
         </div>

         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
             {[
                 { icon: Globe, title: "Assessoria Contábil", desc: "Completa, do MEI ao Lucro Real, com foco digital.", meta: "Digital" },
                 { icon: Zap, title: "Incentivos Fiscais MG", desc: "Recuperação de créditos e Regimes Especiais (TTs).", meta: "Estratégia" },
                 { icon: BarChart3, title: "Planejamento Tributário", desc: "Análise profunda para redução de carga tributária.", meta: "Economia" },
                 { icon: TrendingUp, title: "Consultoria Financeira", desc: "Apoio na gestão e crescimento sustentável.", meta: "Gestão" }
             ].map((item, i) => (
                 <div key={i} className="group bg-white p-8 rounded-card border border-gray-100 shadow-sm hover:shadow-hover hover:-translate-y-1 transition-all duration-300">
                     <div className="flex justify-between items-start mb-6">
                         <div className="p-3 bg-blue-50 text-juris-blue rounded-lg group-hover:bg-juris-blue group-hover:text-white transition-colors">
                             <item.icon size={24} />
                         </div>
                         <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 border border-gray-200 px-2 py-1 rounded">{item.meta}</span>
                     </div>
                     <h3 className="text-xl font-serif font-bold text-juris-blue mb-3">{item.title}</h3>
                     <p className="text-gray-600 font-medium text-sm leading-relaxed mb-6">{item.desc}</p>
                     <Link to="/unidade/extrema/servicos" className="text-juris-blue font-bold text-sm flex items-center group-hover:text-juris-yellow transition-colors">
                         Saiba mais <ArrowRight className="ml-2 w-4 h-4" />
                     </Link>
                 </div>
             ))}
             
             {/* CTA Card within grid */}
             <div className="bg-juris-blue p-8 rounded-card text-white flex flex-col justify-center md:col-span-2 lg:col-span-2">
                 <h3 className="text-2xl font-serif font-bold mb-4">Ver lista completa de serviços</h3>
                 <div className="flex items-center justify-between">
                     <p className="text-blue-100 font-medium max-w-md">Confira todos os detalhes do nosso portfólio para empresas em crescimento.</p>
                     <Link to="/unidade/extrema/servicos" className="bg-juris-yellow text-juris-blue px-6 py-3 rounded-btn font-bold hover:bg-white transition whitespace-nowrap">
                         Acessar Portfolio
                     </Link>
                 </div>
             </div>
         </div>
      </div>

      {/* Pattern E: Timeline/Process Segments */}
      <div className="bg-gray-50 py-24 border-t border-gray-200">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
              <h2 className="text-3xl font-serif font-bold text-juris-blue text-center mb-16">Segmentos de Atuação</h2>
              
              <div className="relative">
                  {/* Line */}
                  <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 rounded-full"></div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                      {[
                          "Comércio & Varejo",
                          "Indústria (Médio/Grande)",
                          "Redes de Hotéis",
                          "Saúde & Serviços"
                      ].map((seg, idx) => (
                          <div key={idx} className="relative bg-white p-8 rounded-card shadow-sm border border-gray-100 text-center group hover:border-juris-yellow transition-colors z-10">
                              <div className="w-10 h-10 bg-juris-blue text-white rounded-full flex items-center justify-center mx-auto mb-4 font-serif font-bold text-lg shadow-[0_0_0_8px_#f9fafb] group-hover:bg-juris-yellow group-hover:text-juris-blue transition-colors">
                                  {idx + 1}
                              </div>
                              <h4 className="font-bold text-juris-blue text-lg">{seg}</h4>
                          </div>
                      ))}
                  </div>
              </div>
              
              <div className="mt-12 text-center text-gray-500 font-medium text-sm">
                  + Supermercados, Joalherias, Lojas de Material de Construção
              </div>
          </div>
      </div>

      {/* Final CTA */}
      <div className="bg-white py-24 text-center">
        <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-4xl font-serif font-bold text-juris-blue mb-6">Sua empresa em expansão?</h2>
            <p className="text-gray-600 text-lg font-medium mb-10">
                Fale com a equipe da Juris Contábil Extrema e estruture seu crescimento.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
                <a 
                    href="mailto:Adm@juriscontabil.com.br" 
                    className="inline-block bg-juris-blue hover:bg-juris-dark text-white px-10 py-5 rounded-btn font-bold text-sm uppercase tracking-wide transition shadow-hover"
                >
                    Falar com consultor
                </a>
                <a 
                    href="https://wa.me/553534600534?text=Olá, gostaria de agendar uma visita na unidade de Extrema." 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-white border-2 border-juris-blue text-juris-blue hover:bg-blue-50 px-10 py-5 rounded-btn font-bold text-sm uppercase tracking-wide transition shadow-hover"
                >
                    Agendar Visita
                </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default UnitExtrema;
