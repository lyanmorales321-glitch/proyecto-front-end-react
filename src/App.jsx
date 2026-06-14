import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Componentes
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingButton from './components/FloatingButton';
import MobileMenu from './components/MobileMenu';

// Páginas
import Inicio from './pages/Inicio';
import Nosotros from './pages/Nosotros';
import Contacto from './pages/Contacto';

function App() {
  const [currentPage, setCurrentPage] = useState('inicio');

  // Inicializar AOS
  useEffect(() => {
    AOS.init({
      once: true,
      offset: 120,
    });
  }, []);

  // Refrescar AOS cuando cambia de página
  useEffect(() => {
    AOS.refresh();
  }, [currentPage]);

  return (
    <>
      {/* Cabecera dinámica */}
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* Cuerpo principal condicional */}
      {currentPage === 'inicio' && <Inicio setCurrentPage={setCurrentPage} />}
      {currentPage === 'nosotros' && <Nosotros />}
      {currentPage === 'contacto' && <Contacto />}

      {/* Pie de página común */}
      <Footer setCurrentPage={setCurrentPage} />

      {/* Botón de contacto flotante */}
      <FloatingButton setCurrentPage={setCurrentPage} />

      {/* Menú inferior móvil estilo WhatsApp */}
      <MobileMenu currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </>
  );
}

export default App;
