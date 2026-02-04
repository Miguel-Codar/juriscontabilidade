import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import ServicesOverview from './pages/ServicesOverview';
import UnitCambui from './pages/UnitCambui';
import UnitExtrema from './pages/UnitExtrema';
import UnitCambuiServices from './pages/UnitCambuiServices';
import UnitExtremaServices from './pages/UnitExtremaServices';
import Contact from './pages/Contact';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="sobre" element={<About />} />
          <Route path="servicos" element={<ServicesOverview />} />
          <Route path="unidade/cambui" element={<UnitCambui />} />
          <Route path="unidade/cambui/servicos" element={<UnitCambuiServices />} />
          <Route path="unidade/extrema" element={<UnitExtrema />} />
          <Route path="unidade/extrema/servicos" element={<UnitExtremaServices />} />
          <Route path="contato" element={<Contact />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;