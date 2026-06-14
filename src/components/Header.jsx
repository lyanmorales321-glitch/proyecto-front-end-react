import { useState } from 'react';

export default function Header({ currentPage, setCurrentPage }) {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  const handleLinkClick = (page, event) => {
    if (event) event.preventDefault();
    setCurrentPage(page);
    setNavbarOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleEspecialidadClick = (e) => {
    e.preventDefault();
    setNavbarOpen(false);
    if (currentPage !== 'inicio') {
      setCurrentPage('inicio');
      // Wait for re-render before scrolling
      setTimeout(() => {
        const el = document.getElementById('especialidad');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById('especialidad');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Dynamic values depending on current page
  let headerStyle = {
    minHeight: '80vh',
    borderBottomLeftRadius: '50% 60px',
    borderBottomRightRadius: '50% 60px',
  };
  
  if (currentPage !== 'inicio') {
    headerStyle = {
      minHeight: '40vh',
      borderBottomLeftRadius: '50% 30px',
      borderBottomRightRadius: '50% 30px',
    };
  }

  return (
    <header className="main-header" style={headerStyle}>
      {/* Barra de navegación */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
        <div className="container">
          {/* Logo y Nombre */}
          <a
            className="navbar-brand fw-bold d-flex align-items-center"
            href="#inicio"
            onClick={(e) => handleLinkClick('inicio', e)}
          >
            <img
              src="/img/logo liceo.jpg"
              alt="Logo Liceo Krugger"
              width="45"
              height="45"
              className="me-2 rounded-circle shadow-sm"
              style={{ objectFit: 'cover' }}
            />
            <span className="text-gradient">L.F.J.K</span>
          </a>

          {/* Botón hamburguesa móvil */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNavbar}
            aria-controls="navbarNav"
            aria-expanded={navbarOpen}
            aria-label="Navegación toggle"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Enlaces colapsables */}
          <div className={`collapse navbar-collapse justify-content-end ${navbarOpen ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className={`nav-link ${currentPage === 'inicio' ? 'active' : ''}`}
                  href="#inicio"
                  onClick={(e) => handleLinkClick('inicio', e)}
                >
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${currentPage === 'nosotros' ? 'active' : ''}`}
                  href="#nosotros"
                  onClick={(e) => handleLinkClick('nosotros', e)}
                >
                  Nosotros
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#especialidad"
                  onClick={handleEspecialidadClick}
                >
                  Especialidad
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${currentPage === 'contacto' ? 'active' : ''}`}
                  href="#contacto"
                  onClick={(e) => handleLinkClick('contacto', e)}
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero section adaptable */}
      <div className="hero-section container text-center text-white d-flex align-items-center justify-content-center flex-column">
        {currentPage === 'inicio' && (
          <>
            <h1 className="display-3 fw-bold mb-4 text-gradient" data-aos="fade-down" data-aos-duration="1200">
              Liceo Francisco Javier Krugger Alvarado
            </h1>
            <p className="lead mb-5" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
              Formando el futuro con excelencia, compromiso e innovación.
            </p>
            <div data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="400">
              <a
                href="#contacto"
                onClick={(e) => handleLinkClick('contacto', e)}
                className="btn btn-warning btn-lg me-3 rounded-pill fw-bold"
              >
                Postula Aquí
              </a>
              <a
                href="#nosotros"
                onClick={(e) => handleLinkClick('nosotros', e)}
                className="btn btn-outline-light btn-lg rounded-pill fw-bold"
              >
                Conoce Más
              </a>
            </div>
          </>
        )}

        {currentPage === 'nosotros' && (
          <h1 className="display-3 fw-bold mb-4 text-gradient" data-aos="fade-down" data-aos-duration="1000">
            Quiénes Somos
          </h1>
        )}

        {currentPage === 'contacto' && (
          <>
            <h1 className="display-3 fw-bold mb-4 text-gradient" data-aos="fade-down" data-aos-duration="1000">
              Contacto y Admisión
            </h1>
            <p className="lead opacity-75" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
              Completa el formulario y nos pondremos en contacto contigo.
            </p>
          </>
        )}
      </div>
    </header>
  );
}
