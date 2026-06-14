import { useState, useRef } from 'react';

export default function Contacto() {
  const initialFormValues = {
    nombreEstudiante: '',
    rut: '',
    fechaNacimiento: '',
    genero: '',
    cursoPostulacion: '',
    colegioOrigen: '',
    nombreApoderado: '',
    correo: '',
    telefono: '',
    comuna: '',
    motivacion: '',
    comoSeEntero: '',
    aceptaTerminos: false,
  };

  const [values, setValues] = useState(initialFormValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);
  
  const successRef = useRef(null);

  const validateField = (name, val) => {
    let error = '';

    // Rule for checkbox
    if (name === 'aceptaTerminos') {
      if (!val) {
        error = 'Debes aceptar los términos para continuar.';
      }
      return error;
    }

    // Required check
    const stringVal = String(val).trim();
    if (stringVal === '') {
      return 'Este campo es obligatorio.';
    }

    // Specific rules by field type
    if (
      name === 'nombreEstudiante' ||
      name === 'colegioOrigen' ||
      name === 'nombreApoderado'
    ) {
      if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{3,}$/.test(stringVal)) {
        error = 'Ingresa un nombre válido (solo letras, mínimo 3 caracteres).';
      }
    } else if (name === 'rut') {
      if (!/^\d{7,8}-[\dkK]$/.test(stringVal)) {
        error = 'Formato de RUT inválido. Ejemplo: 12345678-9';
      }
    } else if (name === 'correo') {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(stringVal)) {
        error = 'Ingresa un correo electrónico válido.';
      }
    } else if (name === 'telefono') {
      const cleanTel = stringVal.replace(/\s/g, '');
      if (!/^(\+56|56)?[2-9]\d{7,8}$/.test(cleanTel)) {
        error = 'Ingresa un teléfono válido. Ejemplo: 912345678';
      }
    } else if (name === 'fechaNacimiento') {
      const fechaIngresada = new Date(stringVal);
      const hoy = new Date();
      if (fechaIngresada >= hoy) {
        error = 'La fecha de nacimiento no puede ser hoy o en el futuro.';
      }
    } else if (name === 'motivacion') {
      if (stringVal.length < 10) {
        error = 'Por favor escribe al menos 10 caracteres.';
      }
    }

    return error;
  };

  const handleChange = (e) => {
    const { id, type, value, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;
    
    setValues((prev) => ({
      ...prev,
      [id]: val,
    }));

    if (touched[id]) {
      const error = validateField(id, val);
      setErrors((prev) => ({
        ...prev,
        [id]: error,
      }));
    }
  };

  const handleBlur = (e) => {
    const { id, type, value, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;

    setTouched((prev) => ({
      ...prev,
      [id]: true,
    }));

    const error = validateField(id, val);
    setErrors((prev) => ({
      ...prev,
      [id]: error,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Touch and validate all fields
    const newErrors = {};
    const newTouched = {};
    let isFormValid = true;

    Object.keys(values).forEach((key) => {
      newTouched[key] = true;
      const error = validateField(key, values[key]);
      if (error) {
        newErrors[key] = error;
        isFormValid = false;
      }
    });

    setTouched(newTouched);
    setErrors(newErrors);

    if (isFormValid) {
      setSubmitted(true);
      setValues(initialFormValues);
      setErrors({});
      setTouched({});
      
      // Scroll to success message
      setTimeout(() => {
        if (successRef.current) {
          successRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
    } else {
      setSubmitted(false);
    }
  };

  // Character counter helper
  const totalChars = values.motivacion.length;
  const countColor = totalChars >= 10 ? '#198754' : '#6c757d';

  // Helpers to get validation classes
  const getInputClass = (id) => {
    if (!touched[id]) return 'form-control p-3';
    return errors[id] ? 'form-control p-3 is-invalid' : 'form-control p-3 is-valid';
  };

  const getSelectClass = (id) => {
    if (!touched[id]) return 'form-select p-3';
    return errors[id] ? 'form-select p-3 is-invalid' : 'form-select p-3 is-valid';
  };

  return (
    <main>
      <section className="py-5 bg-white">
        <div className="container py-4">
          <div className="row">
            {/* Columna Izquierda: Formulario de Postulación */}
            <div className="col-lg-7 mb-5 mb-lg-0">
              <h2 className="fw-bold section-title mb-2">Formulario de Postulación</h2>
              <p className="text-muted mb-4">
                Ingresa tus datos para iniciar el proceso de admisión. Todos los campos son obligatorios.
              </p>

              {/* Mensaje de Éxito */}
              {submitted && (
                <div
                  ref={successRef}
                  id="mensajeExito"
                  className="alert alert-success rounded-4 shadow-sm mb-4"
                  role="alert"
                >
                  <h5 className="fw-bold mb-1">✅ ¡Postulación enviada con éxito!</h5>
                  <p className="mb-0">
                    Recibimos tu solicitud correctamente. Nos pondremos en contacto contigo a la brevedad
                    al correo o teléfono que ingresaste. ¡Bienvenido/a a la familia Krugger!
                  </p>
                </div>
              )}

              {/* Formulario */}
              <form onSubmit={handleSubmit} noValidate className="card shadow border-0 rounded-4 overflow-hidden">
                <div className="paso-header d-flex align-items-center gap-2">
                  <span style={{ fontSize: '1.4rem' }}>📋</span>
                  <div>
                    <h5 className="mb-0 fw-bold">Ficha de Postulante</h5>
                    <small className="opacity-75">Año lectivo 2027 · Liceo F.J.K.A.</small>
                  </div>
                </div>

                <div className="p-4 bg-light text-start">
                  {/* Grupo 1: Datos Personales */}
                  <div className="grupo-campos">
                    <p className="fw-bold text-uppercase small text-muted mb-3">
                      👤 Datos del Estudiante
                    </p>

                    {/* Nombre Estudiante */}
                    <div className="mb-3">
                      <label htmlFor="nombreEstudiante" className="form-label fw-semibold">
                        Nombre Completo del Estudiante
                      </label>
                      <input
                        type="text"
                        id="nombreEstudiante"
                        className={getInputClass('nombreEstudiante')}
                        placeholder="Ej: María González López"
                        value={values.nombreEstudiante}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                      />
                      {touched.nombreEstudiante && errors.nombreEstudiante && (
                        <div className="invalid-feedback">{errors.nombreEstudiante}</div>
                      )}
                    </div>

                    {/* RUT */}
                    <div className="mb-3">
                      <label htmlFor="rut" className="form-label fw-semibold">
                        RUT del Estudiante
                      </label>
                      <input
                        type="text"
                        id="rut"
                        className={getInputClass('rut')}
                        placeholder="Ej: 12345678-9"
                        value={values.rut}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                      />
                      {touched.rut && errors.rut && (
                        <div className="invalid-feedback">{errors.rut}</div>
                      )}
                    </div>

                    {/* Fecha de Nacimiento */}
                    <div className="mb-3">
                      <label htmlFor="fechaNacimiento" className="form-label fw-semibold">
                        Fecha de Nacimiento
                      </label>
                      <input
                        type="date"
                        id="fechaNacimiento"
                        className={getInputClass('fechaNacimiento')}
                        value={values.fechaNacimiento}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                      />
                      {touched.fechaNacimiento && errors.fechaNacimiento && (
                        <div className="invalid-feedback">{errors.fechaNacimiento}</div>
                      )}
                    </div>

                    {/* Género */}
                    <div className="mb-3">
                      <label htmlFor="genero" className="form-label fw-semibold">
                        Género
                      </label>
                      <select
                        id="genero"
                        className={getSelectClass('genero')}
                        value={values.genero}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                      >
                        <option value="">-- Selecciona --</option>
                        <option value="femenino">Femenino</option>
                        <option value="masculino">Masculino</option>
                        <option value="otro">Otro / Prefiero no indicar</option>
                      </select>
                      {touched.genero && errors.genero && (
                        <div className="invalid-feedback">{errors.genero}</div>
                      )}
                    </div>

                    {/* Curso */}
                    <div className="mb-3">
                      <label htmlFor="cursoPostulacion" className="form-label fw-semibold">
                        Curso al que Postula
                      </label>
                      <select
                        id="cursoPostulacion"
                        className={getSelectClass('cursoPostulacion')}
                        value={values.cursoPostulacion}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                      >
                        <option value="">-- Selecciona el nivel --</option>
                        <option value="7basico">7° Básico</option>
                        <option value="8basico">8° Básico</option>
                        <option value="1medio">1° Medio</option>
                        <option value="2medio">2° Medio</option>
                        <option value="3medio">3° Medio (Inicio Especialidad Gastronomía)</option>
                        <option value="4medio">4° Medio (Continuación Especialidad)</option>
                      </select>
                      {touched.cursoPostulacion && errors.cursoPostulacion && (
                        <div className="invalid-feedback">{errors.cursoPostulacion}</div>
                      )}
                    </div>

                    {/* Colegio Origen */}
                    <div className="mb-3">
                      <label htmlFor="colegioOrigen" className="form-label fw-semibold">
                        Establecimiento Educacional Actual / de Origen
                      </label>
                      <input
                        type="text"
                        id="colegioOrigen"
                        className={getInputClass('colegioOrigen')}
                        placeholder="Ej: Escuela Básica Linderos"
                        value={values.colegioOrigen}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                      />
                      {touched.colegioOrigen && errors.colegioOrigen && (
                        <div className="invalid-feedback">{errors.colegioOrigen}</div>
                      )}
                    </div>
                  </div>

                  {/* Grupo 2: Apoderado */}
                  <div className="grupo-campos">
                    <p className="fw-bold text-uppercase small text-muted mb-3">
                      👨‍👩‍👧 Datos del Apoderado / Tutor
                    </p>

                    {/* Nombre Apoderado */}
                    <div className="mb-3">
                      <label htmlFor="nombreApoderado" className="form-label fw-semibold">
                        Nombre Completo del Apoderado
                      </label>
                      <input
                        type="text"
                        id="nombreApoderado"
                        className={getInputClass('nombreApoderado')}
                        placeholder="Ej: Juan González Pérez"
                        value={values.nombreApoderado}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                      />
                      {touched.nombreApoderado && errors.nombreApoderado && (
                        <div className="invalid-feedback">{errors.nombreApoderado}</div>
                      )}
                    </div>

                    {/* Email */}
                    <div className="mb-3">
                      <label htmlFor="correo" className="form-label fw-semibold">
                        Correo Electrónico
                      </label>
                      <input
                        type="email"
                        id="correo"
                        className={getInputClass('correo')}
                        placeholder="tucorreo@ejemplo.com"
                        value={values.correo}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                      />
                      {touched.correo && errors.correo && (
                        <div className="invalid-feedback">{errors.correo}</div>
                      )}
                    </div>

                    {/* Teléfono */}
                    <div className="mb-3">
                      <label htmlFor="telefono" className="form-label fw-semibold">
                        Teléfono de Contacto
                      </label>
                      <input
                        type="tel"
                        id="telefono"
                        className={getInputClass('telefono')}
                        placeholder="Ej: 912345678"
                        value={values.telefono}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                      />
                      {touched.telefono && errors.telefono && (
                        <div className="invalid-feedback">{errors.telefono}</div>
                      )}
                    </div>

                    {/* Comuna */}
                    <div className="mb-3">
                      <label htmlFor="comuna" className="form-label fw-semibold">
                        Comuna de Residencia
                      </label>
                      <select
                        id="comuna"
                        className={getSelectClass('comuna')}
                        value={values.comuna}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                      >
                        <option value="">-- Selecciona tu comuna --</option>
                        <option value="buin">Buin</option>
                        <option value="paine">Paine</option>
                        <option value="calera_de_tango">Calera de Tango</option>
                        <option value="san_bernardo">San Bernardo</option>
                        <option value="otra">Otra</option>
                      </select>
                      {touched.comuna && errors.comuna && (
                        <div className="invalid-feedback">{errors.comuna}</div>
                      )}
                    </div>
                  </div>

                  {/* Grupo 3: Motivación */}
                  <div className="grupo-campos">
                    <p className="fw-bold text-uppercase small text-muted mb-3">
                      💬 Motivación
                    </p>

                    {/* Motivación text area */}
                    <div className="mb-3">
                      <label htmlFor="motivacion" className="form-label fw-semibold">
                        ¿Por qué deseas estudiar en el Liceo Krugger?
                      </label>
                      <textarea
                        id="motivacion"
                        className={touched.motivacion && errors.motivacion ? 'form-control p-3 is-invalid' : 'form-control p-3'}
                        rows="4"
                        placeholder="Cuéntanos brevemente tus razones e interés por la especialidad de Gastronomía..."
                        value={values.motivacion}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                      ></textarea>
                      {touched.motivacion && errors.motivacion && (
                        <div className="invalid-feedback">{errors.motivacion}</div>
                      )}
                      <div className="form-text text-end" style={{ color: countColor }}>
                        {totalChars} / mínimo 10 caracteres
                      </div>
                    </div>

                    {/* ¿Cómo se enteró? */}
                    <div className="mb-3">
                      <label htmlFor="comoSeEntero" className="form-label fw-semibold">
                        ¿Cómo se enteró del Liceo?
                      </label>
                      <select
                        id="comoSeEntero"
                        className={getSelectClass('comoSeEntero')}
                        value={values.comoSeEntero}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                      >
                        <option value="">-- Selecciona --</option>
                        <option value="redes">Redes Sociales</option>
                        <option value="recomendacion">Recomendación de familiar/amigo</option>
                        <option value="sae">Portal SAE (Admisión Escolar)</option>
                        <option value="otro">Otro medio</option>
                      </select>
                      {touched.comoSeEntero && errors.comoSeEntero && (
                        <div className="invalid-feedback">{errors.comoSeEntero}</div>
                      )}
                    </div>
                  </div>

                  {/* Grupo 4: Declaración */}
                  <div className="grupo-campos mb-4">
                    <p className="fw-bold text-uppercase small text-muted mb-3">
                      ✅ Declaración y Términos
                    </p>

                    <div className="form-check">
                      <input
                        type="checkbox"
                        id="aceptaTerminos"
                        className={touched.aceptaTerminos && errors.aceptaTerminos ? 'form-check-input is-invalid' : 'form-check-input'}
                        checked={values.aceptaTerminos}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                      />
                      <label className="form-check-label text-muted small" htmlFor="aceptaTerminos">
                        Declaro que los datos ingresados son verídicos y acepto que el Liceo
                        Francisco Javier Krugger Alvarado los utilice únicamente para el proceso
                        de admisión, conforme a la normativa de protección de datos vigente.
                      </label>
                      {touched.aceptaTerminos && errors.aceptaTerminos && (
                        <div className="invalid-feedback d-block">{errors.aceptaTerminos}</div>
                      )}
                    </div>
                  </div>

                  <button type="submit" className="btn btn-warning rounded-pill fw-bold py-3 w-100 fs-5">
                    Enviar Postulación 🚀
                  </button>

                  <p className="text-center text-muted small mt-3 mb-0">
                    También puedes comunicarte directamente a{' '}
                    <a href="mailto:lfrajakru@gmail.com" className="text-decoration-none fw-bold">
                      lfrajakru@gmail.com
                    </a>
                  </p>
                </div>
              </form>
            </div>

            {/* Columna Derecha: Información de Contacto */}
            <div className="col-lg-4 offset-lg-1 text-start">
              <h2 className="fw-bold section-title mb-4">Información de Contacto</h2>
              <p className="text-muted mb-5">
                Estamos en la Región Metropolitana. Visítanos o escríbenos.
              </p>

              <ul className="list-unstyled text-muted">
                <li className="mb-4 d-flex align-items-start">
                  <span className="badge bg-primary me-3 p-3 rounded-circle fs-5 shadow-sm">📍</span>
                  <div>
                    <strong className="text-dark fs-6">Dirección</strong>
                    <br />
                    <span>Linderos, comuna de Buin, Región Metropolitana.</span>
                  </div>
                </li>

                <li className="mb-4 d-flex align-items-start">
                  <span className="badge bg-primary me-3 p-3 rounded-circle fs-5 shadow-sm">📧</span>
                  <div>
                    <strong className="text-dark fs-6">Correo Electrónico</strong>
                    <br />
                    <a href="mailto:lfrajakru@gmail.com" className="text-decoration-none">
                      lfrajakru@gmail.com
                    </a>
                  </div>
                </li>

                <li className="mb-4 d-flex align-items-start">
                  <span className="badge bg-primary me-3 p-3 rounded-circle fs-5 shadow-sm">🕐</span>
                  <div>
                    <strong className="text-dark fs-6">Horario de Atención</strong>
                    <br />
                    <span>Lunes a Viernes · 08:00 – 16:00 hrs</span>
                  </div>
                </li>
              </ul>

              {/* Tarjeta SAE */}
              <div
                className="card border-0 shadow-sm rounded-4 p-4 mt-4"
                style={{ background: 'linear-gradient(135deg, #fff8e7, #fff3cd)' }}
              >
                <h6 className="fw-bold mb-2" style={{ color: '#a11222' }}>
                  📌 Proceso Oficial SAE
                </h6>
                <p className="small text-muted mb-0">
                  Recuerda que la postulación oficial se realiza a través del{' '}
                  <strong>Sistema de Admisión Escolar (SAE)</strong> del Ministerio de Educación.
                  Este formulario es de contacto e interés previo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
