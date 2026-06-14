import { useState } from 'react';

export default function Inicio({ setCurrentPage }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    if (activeFaq === index) {
      setActiveFaq(null);
    } else {
      setActiveFaq(index);
    }
  };

  const handleGoToContacto = (e) => {
    e.preventDefault();
    setCurrentPage('contacto');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoToNosotros = (e) => {
    e.preventDefault();
    setCurrentPage('nosotros');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main>
      {/* Sección "Nosotros" con detalles institucionales */}
      <section id="nosotros" className="py-5 bg-light">
        <div className="container py-4">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0" data-aos="fade-right" data-aos-duration="1000">
              <div className="img-wrapper">
                <img
                  src="/img/estudiantes sonrientes.avif"
                  alt="Estudiantes sonriendo"
                  className="img-fluid rounded-4 shadow-lg school-img"
                />
              </div>
            </div>
            <div className="col-lg-6 px-lg-5" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
              <h2 className="fw-bold section-title mb-4">Nuestro Proyecto Educativo</h2>
              <p className="text-muted">
                Como institución comprometida, el Liceo Francisco Javier Krugger Alvarado
                brinda una educación integral de primer nivel. Nos inspiramos en el modelo de excelencia
                para que nuestros estudiantes desarrollen su máximo potencial.
              </p>
              <ul className="list-unstyled mt-4">
                <li className="mb-3 d-flex align-items-center">
                  <span className="badge bg-primary me-3 p-2 rounded-circle">✓</span> Educación Inclusiva
                </li>
                <li className="mb-3 d-flex align-items-center">
                  <span className="badge bg-primary me-3 p-2 rounded-circle">✓</span> Innovación Tecnológica
                </li>
                <li className="mb-3 d-flex align-items-center">
                  <span className="badge bg-primary me-3 p-2 rounded-circle">✓</span> Formación en Valores
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Estadísticas Rápidas (Banner Informativo) */}
      <section
        className="py-5 text-white position-relative"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80') center/cover fixed`,
        }}
      >
        <div className="container">
          <div className="row text-center gy-4 align-items-center">
            <div className="col-6 col-md-3 stat-box" data-aos="zoom-in" data-aos-duration="800">
              <h3 className="display-4 fw-bold text-warning mb-0">45+</h3>
              <p className="mb-0 fw-semibold">Años de Trayectoria</p>
            </div>
            <div className="col-6 col-md-3 stat-box" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="150">
              <h3 className="display-4 fw-bold text-warning mb-0">950</h3>
              <p className="mb-0 fw-semibold">Estudiantes Activos</p>
            </div>
            <div className="col-6 col-md-3 stat-box" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="300">
              <h3 className="display-4 fw-bold text-warning mb-0">98%</h3>
              <p className="mb-0 fw-semibold">Tasa de Titulación</p>
            </div>
            <div className="col-6 col-md-3 stat-box" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="450">
              <h3 className="display-4 fw-bold text-warning mb-0">15+</h3>
              <p className="mb-0 fw-semibold">Talleres Formativos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Especialidad Gastronomía */}
      <section id="especialidad" className="py-5 bg-white">
        <div className="container py-4">
          <div className="row align-items-center flex-lg-row-reverse">
            <div className="col-lg-6 mb-4 mb-lg-0" data-aos="fade-left" data-aos-duration="1000">
              <div className="img-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Estudiantes de gastronomía cocinando"
                  className="img-fluid rounded-4 shadow-lg school-img"
                />
              </div>
            </div>
            <div className="col-lg-6 px-lg-5" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
              <h2 className="fw-bold section-title mb-4">Especialidad Técnica en Gastronomía</h2>
              <p className="text-muted">
                Como liceo técnico profesional, nos enorgullece ofrecer a nuestros
                estudiantes la oportunidad de desarrollarse en el apasionante mundo culinario a través de
                nuestra especialidad de nivel medio.
              </p>
              <p className="text-muted">
                Este programa se imparte durante los niveles de <strong>3ro medio y 4to medio</strong>, brindando valiosos conocimientos teóricos y prácticos sobre técnicas culinarias, higiene, preparación y presentación de alimentos, formando profesionales altamente capacitados.
              </p>

              <h4 className="fw-bold mt-4 mb-3 text-primary" style={{ fontSize: '1.25rem' }}>
                Beneficios de la Carrera
              </h4>
              <div className="row g-3 mt-1 mb-4">
                <div className="col-md-6">
                  <div className="d-flex bg-light p-3 rounded-3 h-100 shadow-sm border border-white">
                    <span className="fs-4 me-3">💼</span>
                    <div>
                      <h5 className="fw-bold mb-1 fs-6">Alta Empleabilidad</h5>
                      <p className="text-muted small mb-0">Rápida inserción en restaurantes y hoteles.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex bg-light p-3 rounded-3 h-100 shadow-sm border border-white">
                    <span className="fs-4 me-3">🚀</span>
                    <div>
                      <h5 className="fw-bold mb-1 fs-6">Emprendimiento</h5>
                      <p className="text-muted small mb-0">Herramientas para iniciar tu propio negocio.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex bg-light p-3 rounded-3 h-100 shadow-sm border border-white">
                    <span className="fs-4 me-3">🎓</span>
                    <div>
                      <h5 className="fw-bold mb-1 fs-6">Estudios Superiores</h5>
                      <p className="text-muted small mb-0">Base sólida para continuar en la universidad.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex bg-light p-3 rounded-3 h-100 shadow-sm border border-white">
                    <span className="fs-4 me-3">🌍</span>
                    <div>
                      <h5 className="fw-bold mb-1 fs-6">Proyección</h5>
                      <p className="text-muted small mb-0">Posibilidad de trabajar internacionalmente.</p>
                    </div>
                  </div>
                </div>
              </div>

              <ul className="list-unstyled mt-2">
                <li className="mb-3 d-flex align-items-center">
                  <span className="badge bg-primary me-3 p-2 rounded-circle">👨‍🍳</span> Talleres 100% Prácticos
                </li>
                <li className="mb-3 d-flex align-items-center">
                  <span className="badge bg-primary me-3 p-2 rounded-circle">🍽️</span> Gastronomía Nacional e Internacional
                </li>
                <li className="mb-3 d-flex align-items-center">
                  <span className="badge bg-primary me-3 p-2 rounded-circle">🌟</span> Preparación y Salida Laboral
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pila de tarjetas/noticias */}
      <section id="noticias" className="py-5 bg-light">
        <div className="container py-4">
          <div className="text-center mb-5">
            <h2 className="fw-bold section-title">Últimas Noticias</h2>
            <p className="text-muted">Entérate de las novedades y eventos más importantes del liceo.</p>
          </div>
          <div className="row g-4">
            {/* Noticia 1 */}
            <div className="col-md-4" data-aos="fade-up" data-aos-duration="1000">
              <article className="card h-100 border-0 shadow-sm noticia-card">
                <div className="img-container">
                  <img
                    src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    className="card-img-top news-img"
                    alt="Alumnos en clase"
                  />
                </div>
                <div className="card-body p-4">
                  <span className="text-primary small fw-bold">Académico</span>
                  <h3 className="card-title h5 mt-2 fw-bold">Inicio del Año Escolar</h3>
                  <p className="card-text text-muted">
                    Damos la más cálida bienvenida a todos nuestros estudiantes y apoderados para este nuevo periodo educativo.
                  </p>
                </div>
                <div className="card-footer bg-transparent border-0 px-4 pb-4">
                  <a href="#leer" onClick={(e) => e.preventDefault()} className="btn btn-link text-decoration-none px-0 fw-bold">
                    Leer más →
                  </a>
                </div>
              </article>
            </div>
            {/* Noticia 2 */}
            <div className="col-md-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="150">
              <article className="card h-100 border-0 shadow-sm noticia-card">
                <div className="img-container">
                  <img
                    src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    className="card-img-top news-img"
                    alt="Actividad deportiva"
                  />
                </div>
                <div className="card-body p-4">
                  <span className="text-primary small fw-bold">Deportes</span>
                  <h3 className="card-title h5 mt-2 fw-bold">Encuentro Deportivo Escolar</h3>
                  <p className="card-text text-muted">
                    Acompaña a nuestra selección de atletismo en el campeonato inter-liceos organizado en la comuna.
                  </p>
                </div>
                <div className="card-footer bg-transparent border-0 px-4 pb-4">
                  <a href="#leer" onClick={(e) => e.preventDefault()} className="btn btn-link text-decoration-none px-0 fw-bold">
                    Leer más →
                  </a>
                </div>
              </article>
            </div>
            {/* Noticia 3 */}
            <div className="col-md-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
              <article className="card h-100 border-0 shadow-sm noticia-card">
                <div className="img-container">
                  <img
                    src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    className="card-img-top news-img"
                    alt="Arte y cultura"
                  />
                </div>
                <div className="card-body p-4">
                  <span className="text-primary small fw-bold">Cultura</span>
                  <h3 className="card-title h5 mt-2 fw-bold">Feria de Ciencias y Artes</h3>
                  <p className="card-text text-muted">
                    Nuestros estudiantes presentarán sus proyectos en la feria de ciencias y arte. ¡Están todos invitados!
                  </p>
                </div>
                <div className="card-footer bg-transparent border-0 px-4 pb-4">
                  <a href="#leer" onClick={(e) => e.preventDefault()} className="btn btn-link text-decoration-none px-0 fw-bold">
                    Leer más →
                  </a>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Preguntas Frecuentes (FAQ) - Acordeón reactivo */}
      <section id="faq" className="py-5 bg-white" data-aos="fade-up" data-aos-duration="1000">
        <div className="container py-4">
          <div className="text-center mb-5">
            <h2 className="fw-bold section-title">Preguntas Frecuentes</h2>
            <p className="text-muted">Resolvemos las dudas más comunes de nuestra comunidad.</p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="accordion accordion-flush shadow-sm rounded-4 border overflow-hidden" id="accordionFAQ">
                {/* Pregunta 1 */}
                <div className="accordion-item border-bottom">
                  <h2 className="accordion-header">
                    <button
                      className={`accordion-button fw-bold py-3 ${activeFaq !== 0 ? 'collapsed' : ''}`}
                      type="button"
                      onClick={() => toggleFaq(0)}
                      aria-expanded={activeFaq === 0}
                    >
                      ¿Cómo es el proceso de admisión?
                    </button>
                  </h2>
                  <div className={`accordion-collapse collapse ${activeFaq === 0 ? 'show' : ''}`}>
                    <div className="accordion-body text-muted">
                      El proceso de admisión se realiza a través del Sistema de Admisión Escolar (SAE)
                      del Ministerio de Educación. Durante las fechas estipuladas, debes ingresar a la
                      plataforma web oficial y buscar el Liceo Francisco Javier Krugger Alvarado para postular.
                    </div>
                  </div>
                </div>

                {/* Pregunta 2 */}
                <div className="accordion-item border-bottom">
                  <h2 className="accordion-header">
                    <button
                      className={`accordion-button fw-bold py-3 ${activeFaq !== 1 ? 'collapsed' : ''}`}
                      type="button"
                      onClick={() => toggleFaq(1)}
                      aria-expanded={activeFaq === 1}
                    >
                      ¿Cuáles son los horarios de clases?
                    </button>
                  </h2>
                  <div className={`accordion-collapse collapse ${activeFaq === 1 ? 'show' : ''}`}>
                    <div className="accordion-body text-muted">
                      Nuestro horario de clases estipulado es de Lunes a Jueves de 08:00 a 15:30 hrs y
                      los Viernes de 08:00 a 13:00 hrs. Los talleres extraescolares y reforzamientos
                      se realizan en jornada de tarde, con diferentes bloques.
                    </div>
                  </div>
                </div>

                {/* Pregunta 3 */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className={`accordion-button fw-bold py-3 ${activeFaq !== 2 ? 'collapsed' : ''}`}
                      type="button"
                      onClick={() => toggleFaq(2)}
                      aria-expanded={activeFaq === 2}
                    >
                      ¿Se requiere algún uniforme en particular?
                    </button>
                  </h2>
                  <div className={`accordion-collapse collapse ${activeFaq === 2 ? 'show' : ''}`}>
                    <div className="accordion-body text-muted">
                      Sí, el uso del uniforme institucional es fundamental, pues promueve la igualdad
                      y fomenta el sentido de pertenencia entre los estudiantes. Consiste en pantalón
                      o falda escolar, polera institucional, y para los alumnos de Gastronomía se
                      requiere el uniforme estándar para el taller.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Banner de CTA */}
      <section id="admision" className="cta-section py-5 text-white text-center" data-aos="zoom-in" data-aos-duration="1000">
        <div className="container py-5">
          <h2 className="display-5 fw-bold mb-3">Sé parte de nuestra comunidad</h2>
          <p className="lead mb-5 col-lg-8 mx-auto">
            El proceso de admisión para el próximo año ya está abierto. Postula y asegura el mejor futuro educativo.
          </p>
          <a
            href="#contacto"
            onClick={handleGoToContacto}
            className="btn btn-light btn-lg px-5 py-3 rounded-pill fw-bold text-primary action-btn"
          >
            Ir a Contacto y Admisión
          </a>
        </div>
      </section>
    </main>
  );
}
