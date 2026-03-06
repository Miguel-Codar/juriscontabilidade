import React from 'react';
import { Mail, Phone, MapPin, MessageCircle, ArrowRight, Instagram, CalendarDays } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Obrigado! Mensagem enviada com sucesso (Simulação).');
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="bg-juris-light border-b border-gray-100 py-20 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <span className="text-juris-blue font-bold uppercase tracking-widest text-xs mb-4 block">Atendimento</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-juris-blue mb-6">Entre em Contato</h1>
          <p className="text-gray-500 font-medium max-w-xl mx-auto text-lg">
            Estamos prontos para atender sua empresa. Escolha o canal de atendimento da sua preferência.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 py-20 max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-12">
            {/* General */}
            <div>
               <h3 className="text-xl font-serif font-bold text-juris-blue mb-4">Contato Geral</h3>
               <div className="flex items-center space-x-3 text-gray-600 group text-lg font-medium">
                  <Mail className="text-juris-yellow group-hover:text-juris-blue transition-colors" size={24} />
                  <a href="mailto:Adm@juriscontabil.com.br" className="hover:text-juris-blue transition-colors border-b-2 border-transparent hover:border-juris-blue">Adm@juriscontabil.com.br</a>
               </div>
            </div>

            {/* Units Blocks */}
            <div className="grid gap-6">
                {/* Cambuí */}
                <div className="bg-white p-8 rounded-card border-l-4 border-juris-blue shadow-soft">
                    <span className="text-[10px] font-extrabold text-juris-blue uppercase tracking-widest mb-2 block">Unidade 01</span>
                    <h3 className="text-2xl font-serif font-bold text-juris-blue mb-6">Cambuí</h3>
                    <ul className="space-y-4">
                        <li className="flex items-start">
                            <MapPin className="text-gray-400 mr-3 mt-1 flex-shrink-0" size={18} />
                            <span className="text-gray-600 font-medium text-sm">Praça Coronel Justimiano, 55, Cambuí, 37600-000, MG, BR</span>
                        </li>
                        <li className="flex items-center">
                            <Phone className="text-gray-400 mr-3" size={18} />
                            <a href="tel:3534311200" className="text-gray-600 font-bold hover:text-juris-blue transition-colors">(35) 3431-1200</a>
                        </li>
                        <li className="flex items-center">
                            <MessageCircle className="text-green-500 mr-3" size={18} />
                            <a href="https://wa.me/553534311200" className="text-gray-600 font-bold hover:text-green-600 transition-colors">(35) 3431-1200</a>
                        </li>
                        <li className="flex items-center">
                            <Instagram className="text-pink-500 mr-3" size={18} />
                            <a href="https://www.instagram.com/juriscontabil_cambui/" target="_blank" rel="noreferrer" className="text-gray-600 font-bold hover:text-pink-600 transition-colors">@juriscontabil_cambui</a>
                        </li>
                    </ul>
                </div>

                 {/* Extrema */}
                 <div className="bg-white p-8 rounded-card border-l-4 border-juris-yellow shadow-soft">
                    <span className="text-[10px] font-extrabold text-juris-yellow uppercase tracking-widest mb-2 block">Unidade 02</span>
                    <h3 className="text-2xl font-serif font-bold text-juris-blue mb-6">Extrema</h3>
                    <ul className="space-y-4">
                        <li className="flex items-start">
                            <CalendarDays className="text-gray-400 mr-3 mt-1 flex-shrink-0" size={18} />
                            <span className="text-gray-600 font-bold text-sm">Atendimento online ou por agendamento</span>
                        </li>
                        <li className="flex items-center">
                            <Phone className="text-gray-400 mr-3" size={18} />
                            <a href="tel:3534600534" className="text-gray-600 font-bold hover:text-juris-blue transition-colors">(35) 3460-0534</a>
                        </li>
                        <li className="flex items-center">
                            <a href="https://wa.me/553534600534?text=Olá, gostaria de agendar uma visita na unidade de Extrema." className="text-juris-blue underline text-sm font-bold hover:text-juris-dark">Agendar visita na unidade</a>
                        </li>
                    </ul>
                </div>
            </div>
            
            <div className="pt-4">
                <Link to="/servicos" className="flex items-center justify-center w-full border-2 border-gray-100 bg-white py-4 rounded-btn text-gray-500 hover:text-juris-blue hover:border-juris-blue font-bold transition-all text-sm uppercase tracking-wide">
                    Ver todos os serviços <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7">
            <div className="bg-white shadow-lg p-8 md:p-12 rounded-card border border-gray-100 relative">
              <h3 className="text-3xl font-serif font-bold text-juris-blue mb-8">Envie uma mensagem</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Nome</label>
                      <input type="text" required className="w-full bg-gray-50 border border-gray-200 rounded-input p-4 font-medium focus:ring-2 focus:ring-juris-blue focus:border-juris-blue outline-none transition-all text-juris-blue placeholder-gray-400" placeholder="Seu nome completo" />
                  </div>
                  <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Empresa</label>
                      <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-input p-4 font-medium focus:ring-2 focus:ring-juris-blue focus:border-juris-blue outline-none transition-all text-juris-blue placeholder-gray-400" placeholder="Nome da sua empresa" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                          <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Cidade</label>
                          <input type="text" required className="w-full bg-gray-50 border border-gray-200 rounded-input p-4 font-medium focus:ring-2 focus:ring-juris-blue focus:border-juris-blue outline-none transition-all text-juris-blue placeholder-gray-400" placeholder="Sua cidade" />
                      </div>
                      <div>
                          <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Unidade de interesse</label>
                          <select className="w-full bg-gray-50 border border-gray-200 rounded-input p-4 font-medium focus:ring-2 focus:ring-juris-blue focus:border-juris-blue outline-none transition-all text-juris-blue cursor-pointer">
                              <option value="cambui">Cambuí</option>
                              <option value="extrema">Extrema</option>
                              <option value="naosei">Ainda não sei</option>
                          </select>
                      </div>
                  </div>
                  <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">E-mail</label>
                      <input type="email" required className="w-full bg-gray-50 border border-gray-200 rounded-input p-4 font-medium focus:ring-2 focus:ring-juris-blue focus:border-juris-blue outline-none transition-all text-juris-blue placeholder-gray-400" placeholder="seu@email.com" />
                  </div>
                  <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Mensagem</label>
                      <textarea rows={4} required className="w-full bg-gray-50 border border-gray-200 rounded-input p-4 font-medium focus:ring-2 focus:ring-juris-blue focus:border-juris-blue outline-none transition-all text-juris-blue placeholder-gray-400" placeholder="Como podemos ajudar?"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-juris-blue text-white font-bold text-sm uppercase tracking-widest py-5 rounded-btn hover:bg-juris-dark transition shadow-lg mt-4 border-b-4 border-juris-dark/30 active:border-b-0 active:translate-y-1">
                      Enviar Mensagem
                  </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;