import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Star, ShieldCheck, Briefcase } from 'lucide-react';

const ServicesOverview: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Editorial Header */}
      <div className="bg-juris-blue py-24 text-center relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
         <div className="container mx-auto px-4 relative z-10">
             <span className="text-juris-yellow font-bold uppercase tracking-widest text-xs mb-4 block">Nossas Soluções</span>
             <h1 className="text-3xl md:text-5xl font-serif font-bold text-white max-w-3xl mx-auto leading-tight">
                Escolha a unidade ideal para as <br/>necessidades do seu negócio
             </h1>
         </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 py-20 max-w-7xl space-y-32">
        
        {/* Cambuí Block: Pattern B (Hierarchy Cards) */}
        <div>
           <div className="flex items-end justify-between mb-12 border-b border-gray-200 pb-6">
               <div>
                  <h2 className="text-4xl font-serif font-bold text-juris-blue mb-2">Unidade Cambuí</h2>
                  <p className="text-gray-500 font-medium">Soluções ideais para o seu negócio! Foco presencial e tradicional.</p>
               </div>
               <Link to="/unidade/cambui" className="hidden md:flex items-center text-juris-blue font-bold hover:text-juris-yellow transition-colors">
                   Ver página completa <ArrowRight className="ml-2 w-4 h-4" />
               </Link>
           </div>
           
           <div className="grid lg:grid-cols-3 gap-8">
               {/* Main Highlight Card */}
               <div className="lg:col-span-1 bg-white p-8 rounded-card border-2 border-juris-blue shadow-lg relative overflow-hidden group">
                   <div className="absolute top-4 right-4 bg-juris-yellow text-juris-blue text-[10px] font-extrabold uppercase px-3 py-1 rounded-full">Destaque</div>
                   <Briefcase size={40} className="text-juris-blue mb-6" strokeWidth={1.5} />
                   <h3 className="text-2xl font-serif font-bold text-juris-blue mb-4">Assessoria Completa</h3>
                   <p className="text-gray-600 mb-6 font-medium leading-relaxed">
                       Do MEI ao Lucro Real. Atuação completa na gestão contábil, fiscal, tributária e trabalhista.
                   </p>
                   <div className="space-y-3 mb-8">
                       <div className="flex items-center text-sm text-gray-500 font-medium"><Check size={16} className="text-green-500 mr-2" /> Lucro Real & Presumido</div>
                       <div className="flex items-center text-sm text-gray-500 font-medium"><Check size={16} className="text-green-500 mr-2" /> Simples Nacional</div>
                       <div className="flex items-center text-sm text-gray-500 font-medium"><Check size={16} className="text-green-500 mr-2" /> Produtor Rural</div>
                   </div>
                   <Link to="/unidade/cambui" className="block w-full text-center bg-juris-blue text-white py-3 rounded-btn font-bold hover:bg-juris-dark transition">Conhecer Unidade</Link>
               </div>

               {/* Secondary Cards Grid */}
               <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
                   <div className="bg-white p-6 rounded-card shadow-soft border border-gray-100 hover:border-juris-blue/30 transition">
                       <ShieldCheck className="text-juris-yellow mb-4" size={32} />
                       <h4 className="font-serif font-bold text-xl text-juris-blue mb-2">Legalização Societária</h4>
                       <p className="text-sm text-gray-500 font-medium">Abertura, alteração e regularização de empresas com segurança jurídica.</p>
                   </div>
                   <div className="bg-white p-6 rounded-card shadow-soft border border-gray-100 hover:border-juris-blue/30 transition">
                       <Star className="text-juris-yellow mb-4" size={32} />
                       <h4 className="font-serif font-bold text-xl text-juris-blue mb-2">Incentivos Fiscais MG</h4>
                       <p className="text-sm text-gray-500 font-medium">Especialização em benefícios estaduais para redução de carga tributária.</p>
                   </div>
                   <div className="bg-white p-6 rounded-card shadow-soft border border-gray-100 hover:border-juris-blue/30 transition">
                       <h4 className="font-serif font-bold text-xl text-juris-blue mb-2">Consultoria Financeira</h4>
                       <p className="text-sm text-gray-500 font-medium">Organização e análise de indicadores para decisões sustentáveis.</p>
                   </div>
                   <div className="bg-blue-50 p-6 rounded-card border border-blue-100 flex flex-col justify-center items-center text-center">
                       <p className="font-serif font-bold text-juris-blue text-lg mb-2">+ 20 Serviços</p>
                       <Link to="/unidade/cambui/servicos" className="text-sm font-bold text-juris-blue underline decoration-juris-yellow decoration-2 underline-offset-4 hover:text-juris-dark">Ver lista completa</Link>
                   </div>
               </div>
           </div>
        </div>

        {/* Extrema Block: Pattern C (Rich List) */}
        <div>
           <div className="flex items-end justify-between mb-12 border-b border-gray-200 pb-6">
               <div>
                  <h2 className="text-4xl font-serif font-bold text-juris-blue mb-2">Unidade Extrema</h2>
                  <p className="text-gray-500 font-medium">Foco em crescimento e atendimento online.</p>
               </div>
               <Link to="/unidade/extrema" className="hidden md:flex items-center text-juris-blue font-bold hover:text-juris-yellow transition-colors">
                   Ver página completa <ArrowRight className="ml-2 w-4 h-4" />
               </Link>
           </div>

           <div className="grid lg:grid-cols-2 gap-12">
               <div className="space-y-6">
                   {[
                       { title: "Assessoria Contábil Completa", desc: "Do MEI ao Lucro Real, focada em expansão.", meta: "Essencial" },
                       { title: "Planejamento Tributário & Incentivos", desc: "TTs e recuperação de créditos tributários MG.", meta: "Estratégico" },
                       { title: "Reforma Tributária (LC 214/2025)", desc: "Planejamento e assessoria conforme novas leis.", meta: "Atualizado" },
                       { title: "Contabilidade por Segmento", desc: "Saúde, Hotéis, Indústrias, E-commerce e mais.", meta: "Especializado" }
                   ].map((item, idx) => (
                       <div key={idx} className="group bg-white p-6 rounded-card border border-gray-100 shadow-sm hover:shadow-md transition flex items-start justify-between">
                           <div>
                               <div className="flex items-center gap-3 mb-1">
                                   <span className="text-xs font-bold uppercase tracking-wider text-juris-yellow bg-yellow-50 px-2 py-0.5 rounded">{item.meta}</span>
                               </div>
                               <h4 className="text-lg font-bold text-juris-blue mb-1 group-hover:text-juris-yellow transition-colors">{item.title}</h4>
                               <p className="text-gray-500 text-sm font-medium">{item.desc}</p>
                           </div>
                           <div className="h-8 w-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-juris-blue group-hover:text-white transition-colors">
                               <ArrowRight size={16} />
                           </div>
                       </div>
                   ))}
               </div>
               
               {/* Context Block for Extrema */}
               <div className="bg-gradient-to-br from-juris-blue to-juris-dark rounded-card p-10 text-white flex flex-col justify-center">
                   <h3 className="text-3xl font-serif font-bold mb-6">Pronto para crescer?</h3>
                   <p className="text-blue-100 text-lg mb-8 font-medium leading-relaxed">
                       A unidade de Extrema é preparada para empresas em expansão que precisam de agilidade e inteligência fiscal.
                   </p>
                   <Link to="/unidade/extrema" className="bg-juris-yellow text-juris-blue px-8 py-4 rounded-btn font-bold text-center hover:bg-white transition shadow-lg">
                       Conhecer Diferenciais de Extrema
                   </Link>
               </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default ServicesOverview;