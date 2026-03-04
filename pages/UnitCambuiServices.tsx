import React, { useState } from 'react';
import { ArrowLeft, CheckCircle, Search, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const UnitCambuiServices: React.FC = () => {
  const [filter, setFilter] = useState('');
  
  const mainServices = [
    "Assessoria e Consultoria Contábil, Tributária e Recursos Humanos",
    "Legalização Societária Completa",
    "Planejamento Tributário",
    "Incentivos Fiscais de Minas Gerais",
    "Consultoria Financeira"
  ];

  const specializedServices = [
    "Check-up Empresarial (Administração de Passivo Tributário)",
    "Administração e Contabilidade Rural",
    "Administração Financeira de Empreendimentos Imobiliários",
    "Planejamento Sucessório (Holding)",
    "Contencioso Administrativo",
    "Contabilidade para Importação e DI",
    "Certificação Digital (e-CNPJ e e-CPF)",
    "Imposto de Renda Pessoa Física",
    "Imposto de Renda em Renda Variável",
    "Malha Fiscal – Receita Federal",
    "ITR, CCIR e CAR",
    "Regularização de Obras e Imóveis",
    "Pesquisa Cadastral na Receita Federal"
  ];

  const allServices = [...mainServices, ...specializedServices];
  const filteredServices = allServices.filter(s => s.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      {/* Header */}
      <div className="bg-juris-blue text-white py-16">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
            <Link to="/unidade/cambui" className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition font-bold text-sm uppercase tracking-wide">
                <ArrowLeft size={16} className="mr-2" /> Voltar para Unidade
            </Link>
            <h1 className="text-4xl md:text-5xl font-sora font-bold mb-8">Serviços - Cambuí</h1>
            
            {/* Search Bar */}
            <div className="relative max-w-lg">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input 
                    type="text" 
                    placeholder="Buscar serviço..." 
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
                 <h3 className="text-gray-400 font-bold uppercase tracking-widest text-xs mb-6">Resultados da busca</h3>
                 {filteredServices.length > 0 ? (
                     <div className="space-y-4">
                         {filteredServices.map((service, idx) => (
                             <div key={idx} className="flex items-center p-4 rounded-card bg-gray-50 border border-gray-100">
                                 <CheckCircle className="text-juris-blue mr-3" size={20} />
                                 <span className="font-bold text-gray-700">{service}</span>
                             </div>
                         ))}
                     </div>
                 ) : (
                     <p className="text-gray-500 font-medium">Nenhum serviço encontrado.</p>
                 )}
             </div>
        ) : (
            <>
                {/* Main Services Block */}
                <div className="bg-white rounded-card shadow-soft p-10 mb-8 border border-gray-100">
                    <div className="flex items-center gap-3 mb-8">
                        <span className="h-8 w-1 bg-juris-blue rounded-full"></span>
                        <h2 className="text-2xl font-serif font-bold text-juris-blue">Principais</h2>
                    </div>
                    <div className="space-y-4">
                        {mainServices.map((service, idx) => (
                             <div key={idx} className="group p-5 rounded-card border border-gray-100 hover:border-juris-blue hover:bg-blue-50/30 transition flex items-center justify-between">
                                 <span className="font-bold text-gray-700 text-lg group-hover:text-juris-blue transition-colors">{service}</span>
                                 <ArrowRight className="text-gray-300 group-hover:text-juris-blue opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                             </div>
                        ))}
                    </div>
                </div>

                {/* Specialized Block */}
                <div className="bg-white rounded-card shadow-soft p-10 border border-gray-100">
                    <div className="flex items-center gap-3 mb-8">
                        <span className="h-8 w-1 bg-juris-yellow rounded-full"></span>
                        <h2 className="text-2xl font-serif font-bold text-juris-blue">Especializados</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                        {specializedServices.map((service, idx) => (
                            <div key={idx} className="flex items-start p-3">
                                <div className="h-2 w-2 bg-gray-300 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="font-medium text-gray-600">{service}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </>
        )}

        <div className="mt-16 text-center">
            <a 
                href="https://wa.me/553534311200" 
                target="_blank" 
                rel="noreferrer"
                className="bg-juris-blue hover:bg-juris-dark text-white px-10 py-4 rounded-btn font-bold uppercase tracking-wide transition inline-block shadow-lg"
            >
                Solicitar Orçamento
            </a>
        </div>
      </div>
    </div>
  );
};

export default UnitCambuiServices;
