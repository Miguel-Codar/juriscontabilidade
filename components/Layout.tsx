import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, Instagram, MapPin } from 'lucide-react';

// --- Header Component ---
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Serviços', path: '/servicos' },
    { name: 'Cambuí', path: '/unidade/cambui' },
    { name: 'Extrema', path: '/unidade/extrema' },
    { name: 'Contato', path: '/contato' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="flex justify-between items-center h-24">
          {/* Logo Area */}
          <Link to="/" className="group flex flex-col justify-center">
            <span className="text-3xl font-serif font-bold text-juris-blue tracking-tight group-hover:text-juris-dark transition-colors">Juris</span>
            <span className="text-[10px] font-sans font-bold text-juris-yellow uppercase tracking-[0.2em] leading-none mt-1">Contabilidade</span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-sm font-semibold transition-colors duration-300 py-2 ${
                  isActive(link.path)
                    ? 'text-juris-blue'
                    : 'text-gray-500 hover:text-juris-blue'
                }`}
              >
                {link.name}
                {/* Custom Underline for Active State */}
                <span className={`absolute bottom-0 left-0 h-[3px] rounded-full bg-juris-yellow transition-all duration-300 ease-out ${
                  isActive(link.path) ? 'w-full' : 'w-0'
                }`}></span>
              </Link>
            ))}
          </nav>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-juris-blue hover:text-juris-dark focus:outline-none p-2"
            >
              {isOpen ? <X size={28} strokeWidth={2} /> : <Menu size={28} strokeWidth={2} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg h-screen">
          <div className="px-6 py-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-4 text-lg font-bold rounded-card transition-colors ${
                  isActive(link.path)
                    ? 'bg-blue-50 text-juris-blue border-l-4 border-juris-yellow'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-juris-blue'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

// --- Footer Component ---
const Footer: React.FC = () => {
  return (
    <footer className="bg-juris-blue text-white pt-24 pb-12 border-t-4 border-juris-yellow">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16 border-b border-white/10 pb-12">
          
          {/* Column 1: Brand Info (4 cols) */}
          <div className="md:col-span-4">
            <div className="flex flex-col mb-8">
              <span className="text-4xl font-serif font-bold text-white">Juris</span>
              <span className="text-xs font-sans text-juris-yellow font-bold uppercase tracking-[0.25em]">Contabilidade</span>
            </div>
            <p className="text-blue-100/80 text-base font-medium leading-relaxed mb-8 pr-8">
              Tradição, estratégia e soluções contábeis para empresas de diferentes perfis.
              Desde 1979 em Cambuí e 2009 em Extrema.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/juriscontabil_cambui/" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors text-white border border-white/10">
                <Instagram size={20} strokeWidth={2} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (3 cols) */}
          <div className="md:col-span-3">
            <h3 className="text-xl text-white mb-8 font-serif font-bold">Navegação</h3>
            <ul className="space-y-4 text-sm font-semibold text-blue-100/70">
              <li><Link to="/" className="hover:text-juris-yellow transition-colors inline-block hover:translate-x-1 duration-200">Início</Link></li>
              <li><Link to="/sobre" className="hover:text-juris-yellow transition-colors inline-block hover:translate-x-1 duration-200">Sobre Nós</Link></li>
              <li><Link to="/servicos" className="hover:text-juris-yellow transition-colors inline-block hover:translate-x-1 duration-200">Serviços</Link></li>
              <li><Link to="/unidade/cambui" className="hover:text-juris-yellow transition-colors inline-block hover:translate-x-1 duration-200">Unidade Cambuí</Link></li>
              <li><Link to="/unidade/extrema" className="hover:text-juris-yellow transition-colors inline-block hover:translate-x-1 duration-200">Unidade Extrema</Link></li>
              <li><Link to="/contato" className="hover:text-juris-yellow transition-colors inline-block hover:translate-x-1 duration-200">Contato</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact (5 cols) */}
          <div className="md:col-span-5">
            <h3 className="text-xl text-white mb-8 font-serif font-bold">Fale Conosco</h3>
            <ul className="space-y-6 text-sm font-medium text-blue-100/80">
              <li className="flex items-start group">
                <Mail className="mr-4 mt-0.5 flex-shrink-0 text-juris-yellow group-hover:text-white transition-colors" size={20} strokeWidth={2} />
                <a href="mailto:Adm@juriscontabil.com.br" className="hover:text-white transition-colors border-b-2 border-transparent hover:border-juris-yellow pb-0.5">Adm@juriscontabil.com.br</a>
              </li>
              <li className="flex items-start group">
                <MapPin className="mr-4 mt-0.5 flex-shrink-0 text-juris-yellow group-hover:text-white transition-colors" size={20} strokeWidth={2} />
                <div>
                  <span className="block text-white font-bold mb-1 font-serif text-lg">Cambuí</span>
                  Praça Coronel Justimiano, 55<br />
                  Centro, Cambuí - MG
                </div>
              </li>
              <li className="flex items-start group">
                <Phone className="mr-4 mt-0.5 flex-shrink-0 text-juris-yellow group-hover:text-white transition-colors" size={20} strokeWidth={2} />
                <div>
                  <a href="tel:3534311200" className="block hover:text-white transition-colors mb-1 text-base font-bold">(35) 3431-1200</a>
                  <a href="https://wa.me/5535988626486" className="block text-xs font-bold text-juris-yellow uppercase tracking-wide hover:text-white transition-colors">WhatsApp: (35) 98862-6486</a>
                </div>
              </li>
              <li className="flex items-start pt-6 border-t border-white/10 group">
                <MapPin className="mr-4 mt-0.5 flex-shrink-0 text-juris-yellow group-hover:text-white transition-colors" size={20} strokeWidth={2} />
                <div>
                  <span className="block text-white font-bold mb-1 font-serif text-lg">Extrema</span>
                  <span className="text-blue-200 flex items-center font-medium">
                    Apenas atendimento online
                    <span className="ml-3 w-2.5 h-2.5 rounded-full bg-green-400 block shadow-[0_0_10px_rgba(74,222,128,0.5)]"></span>
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-xs font-bold text-blue-300/60 tracking-widest uppercase">
          <p>&copy; {new Date().getFullYear()} Juris Contabilidade.</p>
          <div className="mt-4 md:mt-0 flex space-x-8">
             <span>CRC-MG</span>
             <span>FENACON</span>
             <span>SESCON</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Floating WhatsApp (Updated) ---
const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href="https://wa.me/5535988626486"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-40 bg-[#25D366] hover:bg-[#20b85c] text-white p-4 rounded-full shadow-hover transition-all duration-300 transform hover:-translate-y-1 group flex items-center gap-3 pr-6 border-2 border-white/20"
      aria-label="Falar no WhatsApp"
    >
      <svg
        className="w-6 h-6 fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-4-10.5-6.8z" />
      </svg>
      <span className="font-bold text-sm hidden group-hover:block transition-all duration-300">Falar no WhatsApp</span>
    </a>
  );
};

// --- Main Layout ---
const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 font-sans text-slate-800 antialiased selection:bg-juris-blue selection:text-white">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <FloatingWhatsApp />
      <Footer />
    </div>
  );
};

export default Layout;