import aboutPhoto from '../assets/images/about-founder.webp';

export const about = {
  eyebrow: 'Quiénes somos',
  title: 'Una familia que pone a Dios primero, y sirve con firmeza.',
  body: 'Shalom significa paz en hebreo. **No por casualidad:** nacimos con la convicción de que servir a Colombia es un privilegio, y que ese servicio exige disciplina, orden y certeza.',
  image: aboutPhoto,
  imageAlt: 'Fundador de Grupo Shalom en su oficina',
};

export const finalCta = {
  title: 'Su operación no puede detenerse',
  body: [
    'Hablemos de la capacidad que su empresa o entidad necesita.',
    'Un equipo especializado le responde en menos de 24 horas hábiles.',
  ],
  form: {
    title: 'Déjenos sus datos',
    lead: 'Un asesor le contactará en menos de 24 horas hábiles.',
    fields: {
      name: 'Nombre completo',
      whatsapp: 'WhatsApp',
      email: 'Correo electrónico',
    },
    consent: 'Autorizo el tratamiento de mis datos personales de acuerdo con la',
    consentLink: 'política de tratamiento de datos',
    submit: 'Enviar',
    sending: 'Enviando…',
    success: '¡Gracias! Recibimos sus datos y pronto le contactaremos.',
    error: 'No pudimos enviar sus datos. Inténtelo de nuevo o escríbanos por WhatsApp.',
    // Shown while no endpoint is configured (P-L15).
    unavailable:
      'El formulario estará disponible muy pronto. Mientras tanto, escríbanos por WhatsApp.',
  },
};

export const footer = {
  tagline:
    'La bendición de abastecer. Suministro institucional de alimentos y servicios integrales para el sector público y privado en Colombia y la región.',
  slogan: 'El abastecimiento que Colombia necesita.',
  location: 'Bogotá, Colombia',
};
