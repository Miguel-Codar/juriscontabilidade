import React, { useState } from 'react';
import { ArrowLeft, CheckCircle, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const UnitExtremaServices: React.FC = () => {
  const [filter, setFilter] = useState('');

  const services = [
       "Assessoria Contábil Completa (do MEI ao Lucro Real)",
       "Planejamento Tributário",
       "Incentivos Fiscais de Minas Gerais",
       "Assessoria Fiscal e Tributária",
       "Departamento Pessoal e Folha de Pagamento",
       "Abertura, Alteração e Regularização de Empresas",
       "Consultoria Contábil e Financeira"
  ];

  const segments = [
        "Prestadores de serviços na área da saúde",
        "Redes de hotéis e pousadas",
        "Indústrias incentivadas",
        "Comércio do ramo joalheiro",
        "Lojas e redes varejistas",
        "E-commerce",
        "Importadoras"
  ];

  const allItems = [...services, ...segments];
  const filtered = allItems.filter(s => s.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      {/* Header */}
      <div className="bg-juris-blue text-white py-16">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
            <Link to="/unidade/extrema" className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition font-bold text-sm uppercase tracking-wide">
                <ArrowLeft size={16} className="mr-2" /> Voltar para Unidade
            </Link>
            <h1 className="text-4xl md:text-5xl font-sora font-bold mb-8">Serviços - Extrema</h1>
             {/* Search Bar */}
             <div className="relative max-w-lg">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input 
                    type="text" 
                    placeholder="Buscar serviço ou segmento..." 
                    className="w-full pl-12 pr-4 py-4 rounded-btn text-gray-700 font-medium focus:ring-2 focus:ring-juris-yellow outline-none shadow-lg"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                />
            </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-5xl -mt-8 relative z-10">
        
        {filter ? (
             <div className="bg-white rounded-card shadow-soft p-8 border border-gray-100 min-h-[400px]">
                 <h3 className="text-gray-400 font-bold uppercase tracking-widest text-xs mb-6">Resultados</h3>
                 {filtered.length > 0 ? (
                     <div className="space-y-4">
                         {filtered.map((item, idx) => (
                             <div key={idx} className="flex items-center p-4 rounded-card bg-gray-50 border border-gray-100">
                                 <CheckCircle className="text-juris-yellow mr-3" size={20} />
                                 <span className="font-bold text-gray-700">{item}</span>
                             </div>
                         ))}
                     </div>
                 ) : (
                     <p className="text-gray-500 font-medium">Nada encontrado.</p>
                 )}
             </div>
        ) : (
            <>
                {/* Main Services */}
                <div className="bg-white rounded-card shadow-soft p-10 mb-8 border border-gray-100">
                    <h2 className="text-2xl font-serif font-bold text-juris-blue mb-8 pb-4 border-b border-gray-100">Serviços Principais</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                       {services.map((item, idx) => (
                           <div key={idx} className="p-4 rounded-card border-l-4 border-juris-yellow bg-gray-50/50">
                               <h3 className="font-bold text-juris-blue">{item}</h3>
                           </div>
                       ))}
                    </div>
                </div>

                {/* Segments */}
                <div className="bg-white rounded-card shadow-soft p-10 border border-gray-100">
                    <h2 className="text-2xl font-serif font-bold text-juris-blue mb-2">Especialização por Segmento</h2>
                    <p className="text-gray-500 font-medium mb-8">Niches que atendemos com profundidade técnica.</p>
                    <div className="grid md:grid-cols-2 gap-y-4 gap-x-8">
                        {segments.map((service, idx) => (
                            <div key={idx} className="flex items-center text-gray-700 group">
                                <CheckCircle size={18} className="text-gray-300 mr-3 mt-0.5 flex-shrink-0 group-hover:text-juris-yellow transition-colors" />
                                <span className="font-bold group-hover:text-juris-blue transition-colors">{service}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </>
        )}

        <div className="mt-16 text-center">
            <a 
                href="mailto:Adm@juriscontabil.com.br"
                className="bg-juris-blue hover:bg-juris-dark text-white px-10 py-4 rounded-btn font-bold uppercase tracking-wide transition inline-block shadow-lg"
            >
                Fale Conosco
            </a>
        </div>
      </div>
    </div>
  );
};

export default UnitExtremaServices;
