import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, CheckCircle, MapPin, Building, ChevronDown, ChevronUp } from 'lucide-react';

const UnitCambui: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const accordionItems = [
    { title: "Assessoria completa do MEI ao Lucro Real", content: "Atendemos todos os regimes tributários com a mesma excelência técnica, garantindo conformidade e segurança." },
    { title: "Forte atuação em Lucro Real", content: "Diferencial na região, com equipe especializada para empresas de maior complexidade tributária." },
    { title: "Especialização em Incentivos Fiscais MG", content: "Expertise profunda na legislação mineira para otimizar a carga tributária da sua empresa legalmente." },
    { title: "Estruturas empresariais complexas", content: "Preparados para holdings, grupos econômicos e operações sofisticadas." }
  ];

  return (
    <div className="bg-white">
      
      {/* Pattern A: Editorial Split Hero */}
      <div className="grid lg:grid-cols-2 min-h-[85vh] lg:h-[800px]">
         <div className="bg-juris-blue text-white p-12 lg:p-24 flex flex-col justify-center">
             <div className="inline-flex items-center gap-2 text-juris-yellow font-bold uppercase tracking-widest text-xs mb-8">
                <MapPin size={16} /> Unidade Presencial
             </div>
             <h1 className="text-5xl lg:text-7xl font-serif font-bold mb-8 leading-[1.05]">
                 Juris Contabilidade <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-juris-yellow to-white">Cambuí</span>
             </h1>
             <p className="text-xl text-blue-100 font-medium mb-12 max-w-md leading-relaxed">
                 Assessoria contábil para empresas que buscam segurança, organização e decisões estratégicas.
             </p>
             <div className="flex flex-wrap gap-4">
                 <a href="https://wa.me/5535988626486" className="bg-juris-yellow text-juris-blue px-8 py-4 rounded-btn font-bold hover:bg-white transition flex items-center">
                    <Phone className="mr-2 h-4 w-4" /> Falar com a unidade
                 </a>
                 <a href="tel:3534311200" className="border border-white/30 text-white px-8 py-4 rounded-btn font-bold hover:bg-white/10 transition">
                    (35) 3431-1200
                 </a>
             </div>
         </div>
         <div className="relative h-96 lg:h-auto">
             <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="Escritório Cambuí" className="absolute inset-0 w-full h-full object-cover" />
             <div className="absolute inset-0 bg-juris-blue/20"></div>
         </div>
      </div>

      {/* Pattern D: Accordion + Highlights */}
      <div className="container mx-auto px-4 md:px-8 py-24 max-w-7xl">
         <div className="grid lg:grid-cols-12 gap-16">
             <div className="lg:col-span-5">
                 <h2 className="text-4xl font-serif font-bold text-juris-blue mb-6">Um nível de contabilidade além do básico</h2>
                 <p className="text-gray-600 text-lg font-medium mb-8 leading-relaxed">
                     Atendemos empresas que precisam de uma contabilidade organizada, estratégica e preparada para lidar com diferentes níveis de complexidade.
                 </p>
                 <div className="bg-blue-50 p-8 rounded-card border-l-4 border-juris-blue">
                     <h4 className="font-bold text-juris-blue text-lg mb-2">Segmentos Atendidos</h4>
                     <p className="text-gray-600 font-medium text-sm leading-relaxed">
                         Comércio em geral, Indústria, Supermercados, Prestadores de serviços, Saúde e Produtores rurais.
                     </p>
                 </div>
             </div>
             
             <div className="lg:col-span-7">
                 <div className="space-y-4">
                     {accordionItems.map((item, idx) => (
                         <div key={idx} className="border border-gray-200 rounded-card overflow-hidden">
                             <button 
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="w-full flex justify-between items-center p-6 bg-white hover:bg-gray-50 transition text-left"
                             >
                                 <span className="font-bold text-juris-blue text-lg">{item.title}</span>
                                 {openIndex === idx ? <ChevronUp className="text-juris-yellow"/> : <ChevronDown className="text-gray-400"/>}
                             </button>
                             {openIndex === idx && (
                                 <div className="p-6 pt-0 bg-white text-gray-600 font-medium border-t border-gray-100">
                                     {item.content}
                                 </div>
                             )}
                         </div>
                     ))}
                 </div>
             </div>
         </div>
      </div>

      {/* Pattern B: Services Hierarchy */}
      <div className="bg-gray-50 py-24">
         <div className="container mx-auto px-4 md:px-8 max-w-7xl">
             <div className="text-center mb-16">
                 <span className="text-juris-yellow font-bold uppercase tracking-widest text-xs">O que fazemos</span>
                 <h2 className="text-4xl font-serif font-bold text-juris-blue mt-2">Serviços Principais</h2>
             </div>

             <div className="grid lg:grid-cols-3 gap-8">
                 {/* Feature Card */}
                 <div className="lg:col-span-2 bg-white p-10 rounded-card shadow-soft border border-gray-100 relative overflow-hidden group">
                     <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full -mr-32 -mt-32 transition-transform group-hover:scale-125"></div>
                     <div className="relative z-10">
                         <div className="bg-juris-blue w-12 h-12 rounded-lg flex items-center justify-center text-white mb-6">
                             <Building size={24} />
                         </div>
                         <h3 className="text-3xl font-serif font-bold text-juris-blue mb-4">Assessoria e Consultoria Contábil</h3>
                         <p className="text-gray-600 text-lg font-medium leading-relaxed mb-8 max-w-lg">
                             Atuação completa na gestão contábil, fiscal, tributária e trabalhista. Garantia de conformidade legal e suporte para decisões seguras.
                         </p>
                         <div className="flex flex-wrap gap-3">
                            <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold uppercase rounded-full">Lucro Real</span>
                            <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold uppercase rounded-full">Lucro Presumido</span>
                            <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold uppercase rounded-full">Simples Nacional</span>
                         </div>
                     </div>
                 </div>

                 {/* Stacked Cards */}
                 <div className="space-y-6">
                     {[
                         { title: "Legalização Societária", desc: "Abertura, alteração e regularização de empresas." },
                         { title: "Planejamento Tributário", desc: "Economia tributária legal e redução de riscos." },
                         { title: "Consultoria Financeira", desc: "Análise de indicadores e orientação estratégica." }
                     ].map((item, i) => (
                         <div key={i} className="bg-white p-6 rounded-card shadow-sm border border-gray-100 hover:border-juris-yellow transition group">
                             <h4 className="font-bold text-juris-blue text-lg mb-2 group-hover:text-juris-yellow transition-colors">{item.title}</h4>
                             <p className="text-gray-500 text-sm font-medium">{item.desc}</p>
                         </div>
                     ))}
                 </div>
             </div>

             <div className="mt-12 text-center">
                 <Link to="/unidade/cambui/servicos" className="inline-flex items-center text-juris-blue font-bold uppercase tracking-wide border-b-2 border-juris-yellow pb-1 hover:text-juris-yellow transition-colors">
                     Ver todos os serviços <ArrowRight className="ml-2 w-4 h-4"/>
                 </Link>
             </div>
         </div>
      </div>

      {/* Pattern C: Specialized List */}
      <div className="py-24 container mx-auto px-4 md:px-8 max-w-5xl">
         <div className="bg-juris-blue rounded-card p-12 text-white relative overflow-hidden">
             <div className="relative z-10 text-center">
                 <h2 className="text-3xl font-serif font-bold mb-6">Serviços Especializados</h2>
                 <p className="text-blue-200 text-lg font-medium mb-10 max-w-2xl mx-auto">
                     Além do essencial, oferecemos soluções técnicas para demandas específicas do seu negócio.
                 </p>
                 <div className="grid md:grid-cols-2 text-left gap-x-12 gap-y-4 max-w-3xl mx-auto mb-10">
                     {[
                         "Check-up Empresarial (Passivo Tributário)",
                         "Administração e Contabilidade Rural",
                         "Holding e Planejamento Sucessório",
                         "Contabilidade para Importação e DI",
                         "Recuperação de Créditos e Incentivos",
                         "Auditoria e Perícia Contábil"
                     ].map((s, i) => (
                         <div key={i} className="flex items-center">
                             <div className="h-2 w-2 bg-juris-yellow rounded-full mr-3"></div>
                             <span className="font-medium text-white/90">{s}</span>
                         </div>
                     ))}
                 </div>
                 <Link to="/unidade/cambui/servicos" className="bg-white text-juris-blue px-8 py-3 rounded-btn font-bold hover:bg-juris-yellow transition shadow-lg inline-block">
                     Ver Lista Completa
                 </Link>
             </div>
             {/* Decor */}
             <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
         </div>
      </div>

      {/* CTA */}
      <div className="bg-white border-t border-gray-100 py-24 text-center">
        <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-4xl font-serif font-bold text-juris-blue mb-6">Pronto para organizar sua empresa?</h2>
            <p className="text-gray-600 text-lg font-medium mb-10">
                Fale com a equipe da Juris Contabilidade Cambuí e agende uma conversa.
            </p>
            <a 
                href="https://wa.me/5535988626486" 
                target="_blank" 
                rel="noreferrer"
                className="bg-juris-blue text-white px-10 py-5 rounded-btn font-bold hover:bg-juris-dark transition shadow-hover inline-flex items-center"
            >
                Entrar em contato <ArrowRight className="ml-2" />
            </a>
        </div>
      </div>
    </div>
  );
};

export default UnitCambui;