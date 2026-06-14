export default function Footer({ setCurrentPage }) {
  const handleLinkClick = (page, e) => {
    e.preventDefault();
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNoticiasClick = (e) => {
    e.preventDefault();
    setCurrentPage('inicio');
    // Scroll to noticias on next frame
    setTimeout(() => {
      const el = document.getElementById('noticias');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <footer className="footer py-5 text-white">
      <div className="container">
        <div className="row gy-4">
          {/* Columna 1: Descripción del Liceo */}
          <div className="col-lg-5 pe-lg-5">
            <h4 className="fw-bold mb-3">Liceo Francisco Javier Krugger Alvarado</h4>
            <p className="opacity-75">
              Educación de calidad que transforma realidades, construyendo un país con mejores
              oportunidades para todos.
            </p>
          </div>

          {/* Columna 2: Enlaces rápidos */}
          <div className="col-lg-3 offset-lg-1 d-flex flex-column">
            <h5 className="fw-bold mb-3">Enlaces Rápidos</h5>
            <a href="#inicio" onClick={(e) => handleLinkClick('inicio', e)} className="footer-link">
              Inicio
            </a>
            <a href="#nosotros" onClick={(e) => handleLinkClick('nosotros', e)} className="footer-link">
              Nosotros
            </a>
            <a href="#noticias" onClick={handleNoticiasClick} className="footer-link">
              Noticias
            </a>
            <a href="#contacto" onClick={(e) => handleLinkClick('contacto', e)} className="footer-link">
              Contacto
            </a>
          </div>

          {/* Columna 3: Información de Contacto */}
          <div className="col-lg-3 d-flex flex-column">
            <h5 className="fw-bold mb-3">Contacto</h5>
            <p className="mb-1 opacity-75">📍 Linderos, Buin</p>
            <p className="mb-1 opacity-75">📧 lfrajakru@gmail.com</p>
            <div className="social-links mt-3">
              <a href="#fb" className="social-btn" aria-label="Facebook">FB</a>
              <a href="#ig" className="social-btn" aria-label="Instagram">IG</a>
            </div>
          </div>
        </div>

        <hr className="mt-5 mb-4 border-light opacity-25" />
        
        {/* Derechos de autor */}
        <div className="text-center opacity-75 small">
          &copy; {new Date().getFullYear()} Liceo Francisco Javier Krugger Alvarado. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
