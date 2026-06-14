export default function Nosotros() {
  return (
    <main>
      {/* Sección "Nosotros" - Proyecto Educativo */}
      <section className="py-5 bg-light">
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
              <p className="text-muted">
                Nuestra misión es cultivar un ambiente de aprendizaje inclusivo y
                tecnológico, preparando a futuras generaciones tanto en la excelencia académica como en los
                valores humanos que el país necesita.
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

      {/* Sección Historia */}
      <section className="py-5 bg-white">
        <div className="container py-4">
          <div className="row align-items-center flex-lg-row-reverse">
            <div className="col-lg-6 mb-4 mb-lg-0" data-aos="fade-left" data-aos-duration="1000">
              <div className="img-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80"
                  alt="Liceo Historia"
                  className="img-fluid rounded-4 shadow-lg school-img"
                />
              </div>
            </div>
            <div className="col-lg-6 px-lg-5" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
              <h2 className="fw-bold section-title mb-4">Nuestra Historia</h2>
              <p className="text-muted">
                El <strong>Liceo Francisco Javier Krugger Alvarado</strong> fue fundado con la visión de transformar la educación en la comunidad de Linderos, Buin. Desde sus inicios, se ha caracterizado por brindar oportunidades a jóvenes de diversos sectores, promoviendo el esfuerzo, la constancia y el espíritu de superación.
              </p>
              <p className="text-muted">
                A lo largo de sus más de 45 años de trayectoria, nuestro establecimiento ha evolucionado constantemente, adaptándose a los nuevos tiempos sin perder su esencia. Hemos sido pioneros en la implementación de talleres técnico-profesionales, posicionándonos como un referente de la educación integral en la región.
              </p>
              <p className="text-muted">
                Hoy en día, nuestra historia se sigue escribiendo a través de cada generación de estudiantes que, con dedicación y compromiso, se convierten en profesionales destacados y ciudadanos que aportan activamente al desarrollo de nuestro país.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
