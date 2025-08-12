import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Differentials from './components/Differentials';
import Location from './components/Location';
import Footer from './components/Footer';
import { ThemeProvider } from './contexts/ThemeContext';
import { Routes, Route, useLocation } from 'react-router-dom';
import EmagrecimentoHipertrofia from './pages/EmagrecimentoHipertrofia';
import NutricaoEsportiva from './pages/NutricaoEsportiva';
import TranstornosAlimentares from './pages/TranstornosAlimentares';
import EstiloDeVida from './pages/EstiloDeVida';

function useScrollToHashOnRouteChange() {
  const location = useLocation();
  React.useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        // pequeno delay para garantir render
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 0);
      }
    } else {
      window.scrollTo({ top: 0 });
    }
  }, [location]);
}

function App() {
  useScrollToHashOnRouteChange();
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-base-light dark:bg-gray-900 transition-colors duration-300">
        <Navbar />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Services />
                  <Differentials />
                  <Location />
                </>
              }
            />
            <Route path="/emagrecimento-hipertrofia" element={<EmagrecimentoHipertrofia />} />
            <Route path="/nutricao-esportiva" element={<NutricaoEsportiva />} />
            <Route path="/transtornos-alimentares" element={<TranstornosAlimentares />} />
            <Route path="/estilo-de-vida" element={<EstiloDeVida />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;