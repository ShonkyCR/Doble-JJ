/**
 * Double J Solutions — Interactive Core Engine
 * Featuring GSAP ScrollTrigger, Lenis Smooth Scroll, Lucide Icons & Cinematic Preloader
 */

const translations = {
  en: {
    scrollCueText: 'SCROLL TO EXPLORE',
    backToTop: 'Back to top',
    navProblem: 'Problem',
    navSolutions: 'Solutions',
    navApproach: 'Approach',
    navProjects: 'Projects',
    navAbout: 'About',
    navContact: 'Contact',
    navCta: "Get a Free Pricing <i data-lucide=\"arrow-up-right\"></i>",
    heroEyebrow: 'DIGITAL TOOLS FOR SMARTER BUSINESSES',
    heroTitleA: 'Smarter Solutions.',
    heroTitleB: 'Stronger Businesses.',
    heroLead: 'We combine business experience and technology to help small businesses organize their operations, strengthen their digital presence, understand their numbers, and build the tools they need to grow.',
    pillOne: 'Business Management',
    pillTwo: 'Digital Solutions',
    pillThree: 'Technology',
    pillFour: 'Growth',
    heroCta: "Let's Talk About Your Business <i data-lucide=\"arrow-up-right\"></i>",
    heroNote: 'Virtual & in-person consultations available in New Jersey',
    problemKicker: 'THE REALITY',
    problemTitle: "Running your business shouldn't mean doing everything yourself.",
    problemIntro: 'Small business owners wear many hats. Without the right systems and reliable information, important decisions can easily become guesswork.',
    problemQuote: "What you don't measure, you can't improve.",
    problemSummary: 'More control. Better information. Smarter decisions.',
    timeTitle: 'TIME',
    timeText: 'Too much to do, not enough time.',
    controlTitle: 'CONTROL',
    controlText: 'Important business information is scattered or difficult to track.',
    visibilityTitle: 'VISIBILITY',
    visibilityText: 'It is difficult to see clearly where the business is making or losing money.',
    decisionsTitle: 'DECISIONS',
    decisionsText: 'Important decisions are sometimes made without reliable data.',
    solutionsKicker: 'THE TOOLKIT',
    solutionsTitle: 'Solutions built around your business.',
    solutionsIntro: 'Every business has different needs. Our solutions combine technology, digital tools, and business experience to help you operate more efficiently, strengthen your digital presence, and make better-informed decisions.',
    solutionLandingTitle: 'Landing Pages',
    solutionLandingText: 'Professional landing pages designed to clearly present your business, services, and value while helping turn visitors into potential customers.',
    solutionWebTitle: 'Websites',
    solutionWebText: 'Modern, professional websites built around your business needs to strengthen credibility and create a solid digital presence.',
    solutionAdsTitle: 'Meta Ads',
    solutionAdsText: 'Digital advertising campaigns designed to connect your business with potential customers through Facebook and Instagram.',
    featuredTag: '<i data-lucide="sparkles"></i> FEATURED TOOL',
    solutionDashTitle: 'Administrative Dashboard',
    solutionDashText: 'A centralized business management tool designed to track income, expenses, payroll, and other key information, giving you a clearer view of how your company is performing.',
    solutionTemplatesTitle: 'Business Templates',
    solutionTemplatesText: 'Practical Excel-based tools designed to organize and control different areas of your business, including finances, expenses, and operational information.',
    solutionConsultingTitle: 'Business Consulting',
    solutionConsultingText: 'Personalized administrative support based on real business data. We help you understand your numbers, identify opportunities, establish priorities, and make better-informed decisions.',
    learnMore: 'Explore solution <i data-lucide="arrow-up-right"></i>',
    whyKicker: 'THE DIFFERENCE',
    whyTitle: 'Business experience meets technology.',
    whyIntro: 'Running a business requires more than working hard. It requires organization, reliable information, the right tools, and the ability to understand what the numbers are telling you.',
    organizeTitle: 'ORGANIZE',
    organizeText: 'Build better systems, controls, and structure for your business.',
    measureTitle: 'MEASURE',
    measureText: 'Understand income, expenses, operations, and performance through reliable information.',
    growTitle: 'GROW',
    growText: 'Use better information, technology, and strategy to identify opportunities and make smarter decisions.',
    whyFootnote: "What you don't measure, you can't improve.",
    processKicker: 'THE PROCESS',
    processTitle: 'Every business is different. Our recommendations should be too.',
    stepLabel: "LET'S TALK",
    stepOneLabel: "LET'S TALK",
    stepTwoLabel: "WE LISTEN",
    stepThreeLabel: "WE ALIGN",
    stepFourLabel: "WE BUILD",
    stepOneTitle: 'Start with a simple conversation.',
    stepOneText: 'Tell us about your business, your current challenges, and what you would like to improve. The initial contact is free.',
    stepTwoTitle: 'We understand your business.',
    stepTwoText: 'We learn about your operation, identify pain points, and understand your priorities. Virtual or in-person visits in New Jersey can be scheduled.',
    stepThreeTitle: 'We recommend what makes sense.',
    stepThreeText: 'Based on your real needs and priorities, we recommend the solutions that make the most sense for your business. No one-size-fits-all package.',
    stepFourTitle: 'We build and support.',
    stepFourText: 'We implement the selected solution and, when applicable, continue supporting you as your business evolves.',
    projectsKicker: 'SELECTED WORK',
    projectsTitle: 'Growing together with our clients.',
    projectsIntro: "We are building Double J Solutions alongside real businesses, learning from every project and creating practical solutions around each client's needs.",
    grecoType: 'CONSTRUCTION & REMODELING',
    grecoText: 'Digital presence and business solutions.',
    beitaType: 'CLEANING SERVICES',
    beitaText: 'Digital presence, landing page, and digital marketing support.',
    davidType: 'REAL ESTATE — COSTA RICA',
    davidText: 'Digital solutions for the real estate industry.',
    viewProject: 'View project <i data-lucide="arrow-up-right"></i>',
    testimonialPlaceholder: 'Real businesses. Real projects. Continuous improvement.',
    testimonialLabel: 'CLIENT TESTIMONIALS — COMING SOON',
    aboutKicker: 'THE PEOPLE',
    aboutTitle: 'Business experience meets technology.',
    aboutIntro: 'Double J Solutions brings together business administration and technology with one shared purpose: helping entrepreneurs build more organized, efficient, and digitally prepared businesses.',
    joseRole: 'BUSINESS & CLIENT SOLUTIONS',
    joseText: 'Business administration professional with more than 10 years of experience in business operations, customer service, sales strategies, administrative and financial controls, process improvement, performance analysis, and business planning.',
    jafethRole: 'TECHNOLOGY & DEVELOPMENT',
    jafethText: 'Focused on technology, programming, and the development of practical digital solutions, platforms, websites, dashboards, and tools designed around the real needs of each business.',
    contactKicker: 'START HERE',
    contactTitle: 'Ready to better understand your business?',
    contactIntro: "Let's talk about where your business is today, what challenges you're facing, and what solutions could help you move forward.",
    phoneLabel: 'PHONE',
    emailCardLabel: 'EMAIL',
    whatsappCta: 'Start a conversation',
    formEyebrow: 'TELL US A LITTLE ABOUT YOUR BUSINESS',
    formTitle: "Let's make your next decision a smarter one.",
    nameLabel: 'Your name',
    phoneFieldLabel: 'Phone number',
    emailLabel: 'Email address',
    businessLabel: 'Business name',
    messageLabel: 'How can we help?',
    formCta: "Let's Talk About Your Business <i data-lucide=\"arrow-up-right\"></i>",
    formNote: 'Initial contact is free. Virtual and in-person consultations available in New Jersey.',
    footerTagline: 'Organize. Measure. Grow.',
    footerSolutions: 'Solutions',
    footerProjects: 'Projects',
    footerAbout: 'About',
    footerContact: 'Contact',
    rights: 'All rights reserved.',
    footerNote: 'Built for small businesses with big plans.',
    footerDesc: 'We combine business administration and technology to build smarter, more organized small businesses.',
    footerBadge: 'Available for consultations & projects',
    footerSolutionsHeader: 'Solutions',
    footerCompanyHeader: 'Company',
    footerApproach: 'Our Approach',
    footerProcess: 'How We Work',
    footerTeam: 'Our Team',
    footerGetInTouch: 'Get in Touch',
    footerContactHeader: 'Contact & Hours',
    footerLocationTitle: 'Coverage & Base',
    footerLocationDesc: 'New Jersey, USA & Virtual Consultations',
    footerHoursTitle: 'Business Hours',
    footerHoursDesc: 'Mon – Fri: 8:00 AM – 6:00 PM EST',
    footerTrustBadge: 'Data confidentiality & non-disclosure commitment for all clients',
    footerTrustBadgeShort: 'NDA & Confidentiality Guaranteed',
    footerTerms: 'Terms & Conditions',
    footerPrivacy: 'Privacy Policy',
    footerDisclaimer: 'Consulting Disclaimer',
    modalCloseBtn: 'Understood'
  },
  es: {
    scrollCueText: 'DESLIZA PARA EXPLORAR',
    backToTop: 'Volver arriba',
    navProblem: 'Problema',
    navSolutions: 'Soluciones',
    navApproach: 'Enfoque',
    navProjects: 'Proyectos',
    navAbout: 'Nosotros',
    navContact: 'Contacto',
    navCta: 'Cotización Gratis <i data-lucide="arrow-up-right"></i>',
    heroEyebrow: 'HERRAMIENTAS DIGITALES PARA NEGOCIOS MÁS INTELIGENTES',
    heroTitleA: 'Soluciones inteligentes.',
    heroTitleB: 'Negocios más sólidos.',
    heroLead: 'Combinamos experiencia empresarial y tecnología para ayudar a pequeños negocios a organizar sus operaciones, fortalecer su presencia digital, comprender sus números y desarrollar las herramientas que necesitan para crecer.',
    pillOne: 'Administración',
    pillTwo: 'Soluciones Digitales',
    pillThree: 'Tecnología',
    pillFour: 'Crecimiento',
    heroCta: 'Hablemos de tu negocio <i data-lucide="arrow-up-right"></i>',
    heroNote: 'Consultas virtuales y presenciales disponibles en New Jersey',
    problemKicker: 'LA REALIDAD',
    problemTitle: 'Dirigir tu negocio no debería significar hacerlo todo tú mismo.',
    problemIntro: 'Los dueños de pequeños negocios cumplen muchas funciones. Sin los sistemas adecuados y sin información confiable, decisiones importantes pueden terminar basándose en suposiciones.',
    problemQuote: 'Lo que no se mide, no se puede mejorar.',
    problemSummary: 'Más control. Mejor información. Mejores decisiones.',
    timeTitle: 'TIEMPO',
    timeText: 'Demasiadas responsabilidades y muy poco tiempo.',
    controlTitle: 'CONTROL',
    controlText: 'La información importante del negocio está dispersa o es difícil de controlar.',
    visibilityTitle: 'VISIBILIDAD',
    visibilityText: 'No siempre existe claridad sobre dónde gana o pierde dinero el negocio.',
    decisionsTitle: 'DECISIONES',
    decisionsText: 'Algunas decisiones importantes se toman sin datos confiables.',
    solutionsKicker: 'LAS HERRAMIENTAS',
    solutionsTitle: 'Soluciones diseñadas alrededor de tu negocio.',
    solutionsIntro: 'Cada negocio tiene necesidades diferentes. Nuestras soluciones combinan tecnología, herramientas digitales y experiencia empresarial para ayudarte a operar de manera más eficiente, fortalecer tu presencia digital y tomar decisiones con mejor información.',
    solutionLandingTitle: 'Landing Pages',
    solutionLandingText: 'Landing pages profesionales diseñadas para presentar claramente tu negocio, tus servicios y tu propuesta de valor, ayudando a convertir visitantes en clientes potenciales.',
    solutionWebTitle: 'Sitios Web',
    solutionWebText: 'Sitios web modernos y profesionales desarrollados según las necesidades de tu negocio para fortalecer su credibilidad y construir una presencia digital sólida.',
    solutionAdsTitle: 'Meta Ads',
    solutionAdsText: 'Campañas de publicidad digital diseñadas para conectar tu negocio con clientes potenciales a través de Facebook e Instagram.',
    featuredTag: '<i data-lucide="sparkles"></i> HERRAMIENTA DESTACADA',
    solutionDashTitle: 'Dashboard Administrativo',
    solutionDashText: 'Una herramienta centralizada de gestión diseñada para controlar ingresos, gastos, nómina y otra información clave, brindándote una visión más clara del desempeño de tu empresa.',
    solutionTemplatesTitle: 'Plantillas Empresariales',
    solutionTemplatesText: 'Herramientas prácticas desarrolladas principalmente en Excel para organizar y controlar diferentes áreas del negocio, incluyendo finanzas, gastos e información operativa.',
    solutionConsultingTitle: 'Consultoría Empresarial',
    solutionConsultingText: 'Acompañamiento administrativo personalizado basado en datos reales del negocio. Te ayudamos a comprender tus números, identificar oportunidades de mejora, establecer prioridades y tomar mejores decisiones.',
    learnMore: 'Explorar solución <i data-lucide="arrow-up-right"></i>',
    whyKicker: 'LA DIFERENCIA',
    whyTitle: 'La experiencia empresarial se une con la tecnología.',
    whyIntro: 'Dirigir un negocio requiere más que trabajar duro. Requiere organización, información confiable, las herramientas adecuadas y la capacidad de comprender lo que los números realmente están diciendo.',
    organizeTitle: 'ORGANIZAR',
    organizeText: 'Crear mejores sistemas, controles y estructura para tu negocio.',
    measureTitle: 'MEDIR',
    measureText: 'Comprender ingresos, gastos, operaciones y desempeño mediante información confiable.',
    growTitle: 'CRECER',
    growText: 'Utilizar mejor información, tecnología y estrategia para identificar oportunidades y tomar decisiones más inteligentes.',
    whyFootnote: 'Lo que no se mide, no se puede mejorar.',
    processKicker: 'EL PROCESO',
    processTitle: 'Cada negocio es diferente. Nuestras recomendaciones también deben serlo.',
    stepLabel: 'HABLEMOS',
    stepOneLabel: 'HABLEMOS',
    stepTwoLabel: 'ESCUCHAMOS',
    stepThreeLabel: 'ALINEAMOS',
    stepFourLabel: 'CONSTRUIMOS',
    stepOneTitle: 'Comenzamos con una conversación sencilla.',
    stepOneText: 'Cuéntanos sobre tu negocio, tus retos actuales y qué te gustaría mejorar. El contacto inicial es gratuito.',
    stepTwoTitle: 'Entendemos tu negocio.',
    stepTwoText: 'Conocemos tu operación, identificamos puntos de dolor y comprendemos tus prioridades. Se puede coordinar una reunión virtual o una visita en New Jersey.',
    stepThreeTitle: 'Recomendamos lo que tiene sentido.',
    stepThreeText: 'Basándonos en tus necesidades y prioridades reales, recomendamos las soluciones que tengan mayor sentido para tu negocio. No utilizamos un paquete idéntico para todos.',
    stepFourTitle: 'Implementamos y acompañamos.',
    stepFourText: 'Implementamos la solución seleccionada y, cuando corresponda, continuamos acompañándote mientras tu negocio evoluciona.',
    projectsKicker: 'TRABAJO SELECCIONADO',
    projectsTitle: 'Creciendo junto a nuestros clientes.',
    projectsIntro: 'Estamos construyendo Double J Solutions junto a negocios reales, aprendiendo de cada proyecto y creando soluciones prácticas alrededor de las necesidades de cada cliente.',
    grecoType: 'CONSTRUCCIÓN Y REMODELACIÓN',
    grecoText: 'Presencia digital y soluciones empresariales.',
    beitaType: 'SERVICIOS DE LIMPIEZA',
    beitaText: 'Presencia digital, landing page y apoyo en marketing digital.',
    davidType: 'BIENES RAÍCES — COSTA RICA',
    davidText: 'Soluciones digitales para el sector inmobiliario.',
    viewProject: 'Ver proyecto <i data-lucide="arrow-up-right"></i>',
    testimonialPlaceholder: 'Negocios reales. Proyectos reales. Mejora continua.',
    testimonialLabel: 'TESTIMONIOS DE CLIENTES — PRÓXIMAMENTE',
    aboutKicker: 'LAS PERSONAS',
    aboutTitle: 'La experiencia empresarial se une con la tecnología.',
    aboutIntro: 'Double J Solutions une administración de negocios y tecnología con un propósito compartido: ayudar a emprendedores a construir negocios más organizados, eficientes y preparados digitalmente.',
    joseRole: 'ADMINISTRACIÓN Y SOLUCIONES AL CLIENTE',
    joseText: 'Profesional en Administración de Negocios con más de 10 años de experiencia en operaciones empresariales, servicio al cliente, estrategias de ventas, controles administrativos y financieros, mejora de procesos, análisis de resultados y planificación empresarial.',
    jafethRole: 'TECNOLOGÍA Y DESARROLLO',
    jafethText: 'Enfocado en tecnología, programación y desarrollo de soluciones digitales prácticas, plataformas, sitios web, dashboards y herramientas diseñadas alrededor de las necesidades reales de cada negocio.',
    contactKicker: 'COMIENZA AQUÍ',
    contactTitle: '¿Listo para comprender mejor tu negocio?',
    contactIntro: 'Hablemos de dónde está tu negocio hoy, cuáles son los retos que enfrentas y qué soluciones podrían ayudarte a avanzar.',
    phoneLabel: 'TELÉFONO',
    emailCardLabel: 'CORREO',
    whatsappCta: 'Iniciar una conversación',
    formEyebrow: 'CUÉNTANOS UN POCO SOBRE TU NEGOCIO',
    formTitle: 'Hagamos que tu próxima decisión sea más inteligente.',
    nameLabel: 'Tu nombre',
    phoneFieldLabel: 'Número de teléfono',
    emailLabel: 'Correo electrónico',
    businessLabel: 'Nombre del negocio',
    messageLabel: '¿Cómo podemos ayudarte?',
    formCta: 'Hablemos de tu negocio <i data-lucide="arrow-up-right"></i>',
    formNote: 'El contacto inicial es gratuito. Consultas virtuales y presenciales disponibles en New Jersey.',
    footerTagline: 'Organiza. Mide. Crece.',
    footerSolutions: 'Soluciones',
    footerProjects: 'Proyectos',
    footerAbout: 'Nosotros',
    footerContact: 'Contacto',
    rights: 'Todos los derechos reservados.',
    footerNote: 'Creado para pequeños negocios con grandes planes.',
    footerDesc: 'Combinamos administración de empresas y tecnología para construir pequeños negocios más inteligentes y organizados.',
    footerBadge: 'Disponibles para consultas y proyectos',
    footerSolutionsHeader: 'Soluciones',
    footerCompanyHeader: 'Empresa',
    footerApproach: 'Nuestro Enfoque',
    footerProcess: 'Cómo Trabajamos',
    footerTeam: 'Nuestro Equipo',
    footerGetInTouch: 'Contáctanos',
    footerContactHeader: 'Contacto y Horarios',
    footerLocationTitle: 'Cobertura y Base',
    footerLocationDesc: 'New Jersey, EE. UU. y Consultas Virtuales',
    footerHoursTitle: 'Horario de Atención',
    footerHoursDesc: 'Lun – Vie: 8:00 AM – 6:00 PM EST',
    footerTrustBadge: 'Compromiso de confidencialidad y no divulgación de datos para todos los clientes',
    footerTrustBadgeShort: 'Confidencialidad y NDA garantizados',
    footerTerms: 'Términos y Condiciones',
    footerPrivacy: 'Política de Privacidad',
    footerDisclaimer: 'Descargo de Consultoría',
    modalCloseBtn: 'Entendido'
  }
};

// Legal Documents Content (EN & ES)
const legalDocuments = {
  en: {
    terms: {
      title: 'Terms & Conditions',
      content: `
        <h4>1. Scope of Services</h4>
        <p>Double J Solutions LLC provides business administration consulting, digital tool implementation, web development (landing pages and websites), spreadsheet-based administrative dashboards, and digital advertising setup (Meta Ads) tailored to small businesses and entrepreneurs.</p>
        
        <h4>2. Advisory & Decision-Making Framework</h4>
        <p>Our solutions and recommendations are designed to optimize business organization, clarity, and performance. However, all ultimate operational, financial, and management decisions remain the sole responsibility of the business owner and client.</p>

        <h4>3. Deliverables & Intellectual Property</h4>
        <p>Upon final payment, custom websites, landing pages, digital assets, and customized spreadsheets created specifically for the client become the client's property, with Double J Solutions retaining the right to showcase anonymized work in portfolio case studies unless agreed otherwise in writing.</p>

        <h4>4. Project Scope, Revisions & Timeline</h4>
        <p>Each project agreement details the specific scope, revision cycles, and projected delivery windows. Additional requests outside the agreed scope will be evaluated and quoted separately with client approval before commencement.</p>

        <h4>5. Communication & Support</h4>
        <p>We take pride in building close, collaborative partnerships. Support and follow-ups are conducted during our business hours (Monday through Friday, 8:00 AM to 6:00 PM EST).</p>
      `
    },
    privacy: {
      title: 'Privacy Policy',
      content: `
        <h4>1. Information We Collect</h4>
        <p>We collect information voluntarily provided when you contact us, complete an inquiry form, or engage our consulting services. This may include your name, business name, phone number, email address, and operational business details relevant to our engagement.</p>

        <h4>2. How We Use Your Information</h4>
        <p>Your information is used strictly to provide customized recommendations, deliver agreed consulting or technological solutions, respond to inquiries, and manage ongoing project communication.</p>

        <h4>3. Strict Confidentiality & Non-Disclosure Commitment</h4>
        <p>We treat every client's operational metrics, finances, customer data, and proprietary workflows with the highest level of confidentiality. <strong>Double J Solutions will never sell, rent, or share your private business data</strong> with unauthorized third parties or marketing brokers.</p>

        <h4>4. Data Security</h4>
        <p>We implement industry-standard technical safeguards, access controls, and secure communications to protect your information against unauthorized access, loss, or disclosure.</p>

        <h4>5. Your Rights & Inquiries</h4>
        <p>You have the right to request access to, correction of, or deletion of your personal contact records at any time by contacting us directly at <a href="mailto:hello@doublejsolutions.com" style="color: var(--cyan); text-decoration: underline;">hello@doublejsolutions.com</a>.</p>
      `
    },
    disclaimer: {
      title: 'Consulting & Business Disclaimer',
      content: `
        <h4>1. Nature of Advisory Services</h4>
        <p>The advice, templates, dashboards, and organizational strategies provided by Double J Solutions LLC are intended exclusively for operational improvement, management organization, and technology integration.</p>

        <h4>2. Not Certified Legal or CPA Services</h4>
        <p>Double J Solutions LLC does not provide formal legal advice, certified public accounting (CPA) auditing, or licensed securities investment services. For official statutory tax filings, certified audits, or legal contracts, clients are advised to consult their licensed attorney or CPA.</p>

        <h4>3. Business Results & Market Variables</h4>
        <p>While our methodologies are built on proven business administration principles and modern digital best practices, individual business performance is subject to external market variables, client execution, competition, and economic conditions. No specific revenue or profit figures are guaranteed.</p>
      `
    }
  },
  es: {
    terms: {
      title: 'Términos y Condiciones',
      content: `
        <h4>1. Alcance de los Servicios</h4>
        <p>Double J Solutions LLC ofrece consultoría en administración de empresas, implementación de herramientas digitales, desarrollo web (landing pages y sitios web), tableros y plantillas administrativas en Excel, y configuración de campañas publicitarias digitales (Meta Ads) orientadas a pequeños negocios y emprendedores.</p>

        <h4>2. Marco de Asesoría y Toma de Decisiones</h4>
        <p>Nuestras soluciones y recomendaciones están diseñadas para optimizar la organización, la claridad y el rendimiento operativo. No obstante, todas las decisiones financieras, comerciales y operativas finales son responsabilidad exclusiva del propietario y la dirección de la empresa cliente.</p>

        <h4>3. Entregables y Propiedad Intelectual</h4>
        <p>Tras la liquidación final del proyecto, los sitios web personalizados, activos digitales y hojas de cálculo diseñadas específicamente para el cliente pasan a ser propiedad del cliente. Double J Solutions se reserva el derecho de exhibir el proyecto de manera anonimizada en su portafolio, salvo acuerdo previo por escrito.</p>

        <h4>4. Alcance del Proyecto, Revisiones y Plazos</h4>
        <p>Cada propuesta formal describe en detalle el alcance, las fases de revisión y los plazos estimados de entrega. Requerimientos adicionales fuera del alcance acordado serán cotizados y autorizados de manera transparente antes de su ejecución.</p>

        <h4>5. Acompañamiento y Comunicación</h4>
        <p>Priorizamos una relación cercana y transparente. La atención y soporte se efectúan en nuestro horario hábil (de lunes a viernes, de 8:00 AM a 6:00 PM EST).</p>
      `
    },
    privacy: {
      title: 'Política de Privacidad',
      content: `
        <h4>1. Información que Recopilamos</h4>
        <p>Recopilamos la información que nos suministras voluntariamente al comunicarte con nosotros, completar nuestro formulario de contacto o contratar nuestros servicios. Esto comprende nombre, nombre de la empresa, correo electrónico, teléfono y detalles operacionales pertinentes a tu negocio.</p>

        <h4>2. Finalidad del Uso de la Información</h4>
        <p>La información se utiliza exclusivamente para elaborar recomendaciones a la medida, ejecutar los proyectos acordados, dar seguimiento a tus dudas y gestionar la comunicación comercial y técnica.</p>

        <h4>3. Compromiso Estricto de Confidencialidad (NDA)</h4>
        <p>Tratamos las cifras de tu negocio, métricas operativas y flujos internos con absoluto rigor y reserva. <strong>Double J Solutions nunca vende, arrienda ni transfiere tus datos o métricas comerciales a terceros</strong> con fines de lucro o comercialización.</p>

        <h4>4. Seguridad de los Datos</h4>
        <p>Aplicamos medidas técnicas estándar, contraseñas robustas y canales cifrados para proteger tu información contra acceso indebido, pérdida o divulgación no autorizada.</p>

        <h4>5. Tus Derechos y Contacto</h4>
        <p>Puedes solicitar la actualización, rectificación o eliminación de tus datos de contacto en cualquier momento escribiéndonos a <a href="mailto:hello@doublejsolutions.com" style="color: var(--cyan); text-decoration: underline;">hello@doublejsolutions.com</a>.</p>
      `
    },
    disclaimer: {
      title: 'Descargo de Responsabilidad de Consultoría',
      content: `
        <h4>1. Naturaleza de los Servicios de Consultoría</h4>
        <p>Las recomendaciones, plantillas de control, dashboards y estrategias organizacionales brindadas por Double J Solutions LLC tienen fines orientativos para la optimización administrativa y la transformación digital de tu negocio.</p>

        <h4>2. No Constituye Asesoría Legal o Contable Certificada (CPA)</h4>
        <p>Double J Solutions LLC no provee servicios jurídicos formales ni dictámenes contables públicos colegiados (CPA). Para declaraciones tributarias oficiales, auditorías certificadas o estructuraciones jurídicas complejas, se aconseja consultar con un abogado o contador público certificado de tu jurisdicción.</p>

        <h4>3. Resultados Comerciales y Variables del Mercado</h4>
        <p>Aunque nuestras metodologías se sustentan en sólidos fundamentos de administración empresarial y herramientas tecnológicas actuales, los resultados comerciales finales dependen de la ejecución del cliente, de las condiciones macroeconómicas y del mercado competitivo. No se garantizan ingresos o metas numéricas predeterminadas.</p>
      `
    }
  }
};

// Solutions Interactive Modal Details (Bilingual)
const serviceDetails = {
  en: {
    landing: {
      tag: 'DIGITAL PRESENCE & CONVERSION',
      icon: 'globe',
      title: 'Landing Pages',
      subtitle: 'High-converting single-page digital assets built to capture leads and drive action.',
      impactTitle: 'Why your business needs it',
      impactText: 'When potential clients see your promotions or search for your services, a generic social profile or outdated page loses their attention. A dedicated landing page gives visitors clarity in 5 seconds, builds trust instantly, and provides a direct, frictionless path to contact you.',
      deliverablesTitle: 'Concrete deliverables included:',
      deliverables: [
        'Fast load speed < 1.5s optimized for mobile devices',
        'Direct WhatsApp click-to-chat & instant call buttons',
        'Event measurement & analytics setup (clicks, views, form fills)',
        'Persuasive copywriting and clear value proposition hierarchy',
        'Secure SSL certificate, custom domain setup & hosting guidance'
      ],
      guarantee: 'Tailored solutions • Direct human support • No hidden fees',
      ctaLabel: "Let's Talk About Your Business",
      prefill: 'Hello, I would like to learn more details about the solution: Landing Pages.'
    },
    website: {
      tag: 'DIGITAL IDENTITY & INFRASTRUCTURE',
      icon: 'monitor',
      title: 'Websites',
      subtitle: 'Modern multi-section web platforms engineered to establish authority and trust.',
      impactTitle: 'Why your business needs it',
      impactText: 'Your website is your company’s permanent digital headquarters. A professional, mobile-ready website validates your credibility when clients evaluate your business against competitors, providing a structured showcase for all your services, past projects, and customer reviews.',
      deliverablesTitle: 'Concrete deliverables included:',
      deliverables: [
        'Multi-page responsive architecture (Home, Services, About, Projects, Contact)',
        'Fast performance (< 1.5s load time) and fluid navigation',
        'Technical SEO optimization (meta tags, semantic HTML, Google indexing)',
        'Direct WhatsApp & interactive contact forms with instant notifications',
        'Full content ownership and step-by-step training on how to manage it'
      ],
      guarantee: 'Tailored solutions • Direct human support • No hidden fees',
      ctaLabel: "Let's Talk About Your Business",
      prefill: 'Hello, I would like to learn more details about the solution: Websites.'
    },
    ads: {
      tag: 'CUSTOMER ACQUISITION & MARKETING',
      icon: 'target',
      title: 'Meta Ads',
      subtitle: 'Targeted Facebook and Instagram advertising campaigns built to acquire qualified inquiries.',
      impactTitle: 'Why your business needs it',
      impactText: 'Relying solely on word-of-mouth creates unpredictable revenue months. Meta Ads allow you to proactively position your business in front of specific local customers looking for your exact services right now, turning social feeds into a predictable client generation channel.',
      deliverablesTitle: 'Concrete deliverables included:',
      deliverables: [
        'Meta Pixel and Conversions API (CAPI) installation & event verification',
        'Target audience segmentation by local radius, demographics, and buyer intent',
        'Creative ad design & persuasive Spanish/English sales copy',
        'Campaign optimization focused on low cost per WhatsApp conversation or lead',
        'Bi-weekly transparent performance reporting with key business metrics'
      ],
      guarantee: 'Tailored solutions • Direct human support • No hidden fees',
      ctaLabel: "Let's Talk About Your Business",
      prefill: 'Hello, I would like to learn more details about the solution: Meta Ads.'
    },
    dashboard: {
      tag: 'FEATURED TOOL • OPERATIONAL CONTROL',
      icon: 'layout-dashboard',
      title: 'Administrative Dashboard',
      subtitle: 'A centralized executive tool to track cash flow, income, expenses, and payroll in real time.',
      impactTitle: 'Why your business needs it',
      impactText: 'Without centralized numbers, business owners spend hours hunting through receipts and bank statements, never truly knowing their exact net margin. This customized dashboard consolidates your operational data into a single clear view, showing exactly where money is coming in, where it leaks, and how profitable each job is.',
      deliverablesTitle: 'Concrete deliverables included:',
      deliverables: [
        'Real-time Income, Expense, and Net Margin visual tracking',
        'Payroll, subcontractor, and material cost recording system',
        'Client receivable status & pending payment alert badges',
        'Interactive executive charts with monthly and quarterly comparison',
        'One-on-one setup walkthrough & personalized workflow calibration'
      ],
      guarantee: 'Tailored solutions • Direct human support • No hidden fees',
      ctaLabel: "Let's Talk About Your Business",
      prefill: 'Hello, I would like to learn more details about the solution: Administrative Dashboard.'
    },
    templates: {
      tag: 'INTERNAL ORGANIZATION & EFFICIENCY',
      icon: 'file-spreadsheet',
      title: 'Business Templates',
      subtitle: 'Practical, ready-to-use Excel and spreadsheet systems to organize your daily business.',
      impactTitle: 'Why your business needs it',
      impactText: 'Complex software often comes with steep learning curves and heavy monthly subscriptions. Our business templates are clean, automated, and built around your existing habits, giving your team immediate structure for quoting, expense logs, and inventory without complexity.',
      deliverablesTitle: 'Concrete deliverables included:',
      deliverables: [
        'Automated quoting & client invoice generator templates',
        'Daily expense categorization & supplier disbursement sheet',
        'Project cost estimation & labor margin calculation formulas',
        'Zero recurring software subscriptions — you own the files permanently',
        'Easy color-coded layout designed for quick data entry on PC or tablet'
      ],
      guarantee: 'Tailored solutions • Direct human support • No hidden fees',
      ctaLabel: "Let's Talk About Your Business",
      prefill: 'Hello, I would like to learn more details about the solution: Business Templates.'
    },
    consulting: {
      tag: 'MANAGEMENT ADVISORY & STRATEGY',
      icon: 'briefcase',
      title: 'Business Consulting',
      subtitle: 'Personalized executive advisory based on your real business data and operational challenges.',
      impactTitle: 'Why your business needs it',
      impactText: 'Growing a business requires stepping back from the daily grind to analyze what works and what doesn’t. With over a decade of administrative experience, we sit down with you to review your numbers, eliminate operational bottlenecks, and chart an actionable roadmap for sustained profitability.',
      deliverablesTitle: 'Concrete deliverables included:',
      deliverables: [
        'Comprehensive operational and financial diagnostic review',
        'Cost reduction & margin optimization action plan',
        'Standard operating procedure (SOP) design for key workflows',
        'Virtual or in-person advisory sessions in New Jersey',
        'Direct messaging follow-up to support implementation and accountability'
      ],
      guarantee: 'Tailored solutions • Direct human support • No hidden fees',
      ctaLabel: "Let's Talk About Your Business",
      prefill: 'Hello, I would like to learn more details about the solution: Business Consulting.'
    }
  },
  es: {
    landing: {
      tag: 'PRESENCIA DIGITAL Y CONVERSIÓN',
      icon: 'globe',
      title: 'Landing Pages',
      subtitle: 'Páginas de aterrizaje diseñadas para presentar tus servicios con claridad y captar clientes potenciales.',
      impactTitle: 'Por qué tu negocio lo necesita',
      impactText: 'Cuando los clientes ven tus promociones o buscan tus servicios, un perfil desorganizado o una página lenta les hace perder el interés. Una landing page profesional transmite confianza inmediata, comunica tu propuesta en segundos y guía al visitante directamente a contactarte sin fricción.',
      deliverablesTitle: 'Entregables concretos incluidos:',
      deliverables: [
        'Carga rápida < 1.5s optimizada para móviles',
        'Integración con WhatsApp y llamadas directas en un clic',
        'Medición de eventos y analítica (clics, visitas, formularios)',
        'Redacción estratégica orientada a generar confianza y acción',
        'Configuración de dominio propio, certificado SSL y hosting'
      ],
      guarantee: 'Soluciones a la medida • Acompañamiento humano directo • Sin costos ocultos',
      ctaLabel: 'Hablemos de tu negocio',
      prefill: 'Hola, me interesa conocer más detalles sobre la solución de: Landing Pages.'
    },
    website: {
      tag: 'IDENTIDAD DIGITAL E INFRAESTRUCTURA',
      icon: 'monitor',
      title: 'Sitios Web',
      subtitle: 'Plataformas web modernas diseñadas a la medida para consolidar la credibilidad de tu empresa.',
      impactTitle: 'Por qué tu negocio lo necesita',
      impactText: 'Tu sitio web es la sede principal de tu empresa en internet. Un sitio web moderno y responsivo genera autoridad inmediata cuando los clientes te comparan con la competencia, mostrando de forma ordenada todos tus servicios, casos de éxito y vías de contacto.',
      deliverablesTitle: 'Entregables concretos incluidos:',
      deliverables: [
        'Estructura multi-página responsiva (Inicio, Servicios, Nosotros, Proyectos, Contacto)',
        'Optimización de velocidad (< 1.5s de carga) en móviles y computadoras',
        'Configuración de SEO técnico (meta etiquetas, indexación en Google)',
        'Integración con WhatsApp y formulario de contacto automatizado',
        'Propiedad total de la web y capacitación básica para su administración'
      ],
      guarantee: 'Soluciones a la medida • Acompañamiento humano directo • Sin costos ocultos',
      ctaLabel: 'Hablemos de tu negocio',
      prefill: 'Hola, me interesa conocer más detalles sobre la solución de: Sitios Web.'
    },
    ads: {
      tag: 'CAPTACIÓN DE CLIENTES Y VENTAS',
      icon: 'target',
      title: 'Meta Ads',
      subtitle: 'Publicidad digital segmentada para conectar tu negocio con clientes potenciales calificados.',
      impactTitle: 'Por qué tu negocio lo necesita',
      impactText: 'Depender únicamente del boca a boca genera meses con ventas irregulares. Las campañas en Meta Ads te permiten mostrar tus servicios activamente a personas en tu zona geográfica con interés real de compra, transformando tus redes en un canal predecible de nuevos prospectos.',
      deliverablesTitle: 'Entregables concretos incluidos:',
      deliverables: [
        'Instalación del Píxel de Meta y API de conversiones con eventos clave',
        'Segmentación hiperlocal por radio de atención y perfil de cliente ideal',
        'Diseño de anuncios visuales y redacción de textos publicitarios efectivos',
        'Optimización orientada a bajo costo por conversación en WhatsApp o registro',
        'Reportes periódicos claros y comprensibles sobre rendimiento e inversión'
      ],
      guarantee: 'Soluciones a la medida • Acompañamiento humano directo • Sin costos ocultos',
      ctaLabel: 'Hablemos de tu negocio',
      prefill: 'Hola, me interesa conocer más detalles sobre la solución de: Meta Ads.'
    },
    dashboard: {
      tag: 'HERRAMIENTA DESTACADA • CONTROL OPERATIVO',
      icon: 'layout-dashboard',
      title: 'Dashboard Administrativo de Gestión',
      subtitle: 'Herramienta centralizada para monitorear ingresos, gastos, nómina y rentabilidad en tiempo real.',
      impactTitle: 'Por qué tu negocio lo necesita',
      impactText: 'Sin cifras claras y unificadas, los dueños de negocios pasan horas revisando recibos y estados de cuenta sin saber con certeza su margen real de ganancia. Este dashboard reúne toda tu operación en una vista intuitiva para saber exactamente dónde entra el dinero, dónde se escapa y qué proyectos son los más rentables.',
      deliverablesTitle: 'Entregables concretos incluidos:',
      deliverables: [
        'Control automatizado de ingresos, gastos operativos y margen neto real',
        'Módulo de nómina, pagos a colaboradores y costos por proyecto',
        'Alertas visuales de cuentas por cobrar y pagos pendientes de clientes',
        'Gráficos ejecutivos interactivos con comparativa mes a mes',
        'Sesión de inducción personalizada y calibración según tus operaciones'
      ],
      guarantee: 'Soluciones a la medida • Acompañamiento humano directo • Sin costos ocultos',
      ctaLabel: 'Hablemos de tu negocio',
      prefill: 'Hola, me interesa conocer más detalles sobre la solución de: Dashboard Administrativo de Gestión.'
    },
    templates: {
      tag: 'ORGANIZACIÓN INTERNA Y EFICIENCIA',
      icon: 'file-spreadsheet',
      title: 'Plantillas Empresariales',
      subtitle: 'Sistemas prácticos en Excel listos para estructurar y organizar la rutina diaria de tu empresa.',
      impactTitle: 'Por qué tu negocio lo necesita',
      impactText: 'Muchos programas complejos requieren meses de aprendizaje y costosas mensualidades. Nuestras plantillas están automatizadas y listas para usar, ofreciendo una estructura clara para cotizaciones, control de gastos diarios y proveedores sin añadir complejidad innecesaria a tu rutina.',
      deliverablesTitle: 'Entregables concretos incluidos:',
      deliverables: [
        'Generador automático de cotizaciones y órdenes de servicio profesionales',
        'Hoja de control de gastos diarios y clasificación por proveedores',
        'Fórmulas de cálculo de margen por hora de trabajo o por proyecto',
        'Cero suscripciones mensuales: los archivos son 100% de tu propiedad',
        'Diseño visual intuitivo con código de color para fácil captura en PC o tablet'
      ],
      guarantee: 'Soluciones a la medida • Acompañamiento humano directo • Sin costos ocultos',
      ctaLabel: 'Hablemos de tu negocio',
      prefill: 'Hola, me interesa conocer más detalles sobre la solución de: Plantillas Empresariales.'
    },
    consulting: {
      tag: 'ASESORÍA ESTRATÉGICA Y GESTIÓN',
      icon: 'briefcase',
      title: 'Consultoría Empresarial',
      subtitle: 'Acompañamiento administrativo personalizado basado en datos reales y retos de tu negocio.',
      impactTitle: 'Por qué tu negocio lo necesita',
      impactText: 'Hacer crecer una empresa exige pausar la rutina operativa para evaluar con cabeza fría qué funciona y qué frena el avance. Con más de una década de experiencia administrativa, revisamos tus números junto a ti, detectamos cuellos de botella y trazamos un plan de acción práctico para elevar la rentabilidad.',
      deliverablesTitle: 'Entregables concretos incluidos:',
      deliverables: [
        'Diagnóstico integral administrativo, operativo y financiero',
        'Plan de acción concreto para reducción de mermas y aumento de márgenes',
        'Estandarización de procesos clave y rutinas de supervisión',
        'Sesiones de consultoría virtuales o presenciales en New Jersey',
        'Acompañamiento directo vía WhatsApp para resolver dudas en la ejecución'
      ],
      guarantee: 'Soluciones a la medida • Acompañamiento humano directo • Sin costos ocultos',
      ctaLabel: 'Hablemos de tu negocio',
      prefill: 'Hola, me interesa conocer más detalles sobre la solución de: Consultoría Empresarial.'
    }
  }
};

// Global References
const savedLanguage = localStorage.getItem('doublej-language') || 'en';
const menuToggle = document.querySelector('.menu-toggle');
const primaryNav = document.querySelector('.primary-nav');
const header = document.querySelector('.site-header');
const backToTopBtn = document.querySelector('#back-to-top');
const cursorGlow = document.querySelector('#cursor-glow');

// Legal Modal References
const legalModalOverlay = document.querySelector('#legal-modal-overlay');
const modalTitle = document.querySelector('#modal-title');
const modalBodyContent = document.querySelector('#modal-body-content');
const modalCloseBtn = document.querySelector('#modal-close-btn');
const modalOkBtn = document.querySelector('#modal-ok-btn');
let activeModalKey = null;

// Service Modal References
const serviceModalOverlay = document.querySelector('#service-modal-overlay');
const serviceModalWindow = serviceModalOverlay ? serviceModalOverlay.querySelector('.service-modal-window') : null;
const serviceModalIconWrap = document.querySelector('#service-modal-icon-wrap');
const serviceModalTag = document.querySelector('#service-modal-tag');
const serviceModalTitle = document.querySelector('#service-modal-title');
const serviceModalSubtitle = document.querySelector('#service-modal-subtitle');
const serviceModalImpactTitle = document.querySelector('#service-modal-impact-title');
const serviceModalImpactText = document.querySelector('#service-modal-impact-text');
const serviceModalDeliverablesTitle = document.querySelector('#service-modal-deliverables-title');
const serviceModalDeliverablesList = document.querySelector('#service-modal-deliverables-list');
const serviceModalGuaranteeText = document.querySelector('#service-modal-guarantee-text');
const serviceModalCtaBtn = document.querySelector('#service-modal-cta-btn');
const serviceModalCtaLabel = document.querySelector('#service-modal-cta-label');
const serviceModalCloseBtn = document.querySelector('#service-modal-close-btn');
let activeServiceKey = null;

// Initialize Icons
function refreshIcons() {
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }
}

function openLegalModal(modalKey) {
  activeModalKey = modalKey;
  const currentLang = document.documentElement.lang || 'en';
  const docGroup = legalDocuments[currentLang] || legalDocuments.en;
  const doc = docGroup[modalKey] || docGroup.terms;

  if (modalTitle) modalTitle.textContent = doc.title;
  if (modalBodyContent) modalBodyContent.innerHTML = doc.content;

  if (legalModalOverlay) {
    legalModalOverlay.classList.add('is-active');
    legalModalOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    if (modalOkBtn) modalOkBtn.focus();
  }
  refreshIcons();
}

function closeLegalModal() {
  if (legalModalOverlay) {
    legalModalOverlay.classList.remove('is-active');
    legalModalOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
  activeModalKey = null;
}

// Service Modal Open & Close Functions
function openServiceModal(serviceKey) {
  if (!serviceDetails.en[serviceKey]) return;
  activeServiceKey = serviceKey;

  const currentLang = document.documentElement.lang || 'en';
  const data = (serviceDetails[currentLang] && serviceDetails[currentLang][serviceKey]) || serviceDetails.en[serviceKey];

  if (serviceModalIconWrap) {
    serviceModalIconWrap.innerHTML = `<i data-lucide="${data.icon}"></i>`;
  }
  if (serviceModalTag) serviceModalTag.textContent = data.tag;
  if (serviceModalTitle) serviceModalTitle.textContent = data.title;
  if (serviceModalSubtitle) serviceModalSubtitle.textContent = data.subtitle;
  if (serviceModalImpactTitle) serviceModalImpactTitle.textContent = data.impactTitle;
  if (serviceModalImpactText) serviceModalImpactText.textContent = data.impactText;
  if (serviceModalDeliverablesTitle) serviceModalDeliverablesTitle.textContent = data.deliverablesTitle;
  if (serviceModalGuaranteeText) serviceModalGuaranteeText.textContent = data.guarantee;
  if (serviceModalCtaLabel) serviceModalCtaLabel.textContent = data.ctaLabel;

  if (serviceModalDeliverablesList) {
    serviceModalDeliverablesList.innerHTML = data.deliverables.map((item) => `
      <li>
        <span class="deliverable-check"><i data-lucide="check"></i></span>
        <span class="deliverable-text">${item}</span>
      </li>
    `).join('');
  }

  refreshIcons();

  if (serviceModalOverlay) {
    serviceModalOverlay.classList.add('is-active');
    serviceModalOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    if (window.gsap && serviceModalWindow) {
      gsap.fromTo(serviceModalWindow,
        { scale: 0.9, y: 26, opacity: 0 },
        { scale: 1, y: 0, opacity: 1, duration: 0.36, ease: 'power3.out', overwrite: 'auto' }
      );
      const items = serviceModalDeliverablesList ? serviceModalDeliverablesList.querySelectorAll('li') : [];
      if (items.length) {
        gsap.fromTo(items,
          { opacity: 0, x: -10 },
          { opacity: 1, x: 0, duration: 0.25, stagger: 0.04, ease: 'power2.out', delay: 0.08 }
        );
      }
    }

    if (serviceModalCtaBtn) {
      serviceModalCtaBtn.focus();
    }
  }
}

function closeServiceModal(callback) {
  if (!serviceModalOverlay || !serviceModalOverlay.classList.contains('is-active')) {
    if (typeof callback === 'function') callback();
    return;
  }

  const finalizeClose = () => {
    serviceModalOverlay.classList.remove('is-active');
    serviceModalOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    activeServiceKey = null;
    if (typeof callback === 'function') {
      callback();
    }
  };

  if (window.gsap && serviceModalWindow) {
    gsap.to(serviceModalWindow, {
      scale: 0.92,
      y: 18,
      opacity: 0,
      duration: 0.22,
      ease: 'power2.in',
      onComplete: finalizeClose
    });
  } else {
    finalizeClose();
  }
}

// Language Switcher Functionality
function setLanguage(language) {
  const dictionary = translations[language] || translations.en;
  document.documentElement.lang = language;
  
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key] !== undefined) {
      element.innerHTML = dictionary[key];
    }
  });

  document.querySelectorAll('[data-language]').forEach((button) => {
    const active = button.dataset.language === language;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-pressed', String(active));
  });

  document.querySelectorAll('[data-placeholder-en]').forEach((field) => {
    field.placeholder = language === 'es' ? field.dataset.placeholderEs : field.dataset.placeholderEn;
  });

  localStorage.setItem('doublej-language', language);
  refreshIcons();

  if (activeModalKey && legalModalOverlay && legalModalOverlay.classList.contains('is-active')) {
    openLegalModal(activeModalKey);
  }
  if (activeServiceKey && serviceModalOverlay && serviceModalOverlay.classList.contains('is-active')) {
    openServiceModal(activeServiceKey);
  }
}

// Initial Language Setup
setLanguage(savedLanguage);
document.addEventListener('click', (e) => {
  const button = e.target.closest('[data-language]');
  if (button && button.dataset.language) {
    setLanguage(button.dataset.language);
  }
});

// Mobile Navigation Toggle
menuToggle.addEventListener('click', () => {
  const open = primaryNav.classList.toggle('is-open');
  menuToggle.classList.toggle('is-open', open);
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
});

document.querySelectorAll('[data-nav], .primary-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    primaryNav.classList.remove('is-open');
    menuToggle.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

// Form Submission with Feedback
const form = document.querySelector('#contact-form');
const formStatus = form.querySelector('.form-status');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  let valid = true;

  form.querySelectorAll('[required]').forEach((field) => {
    const okay = field.value.trim() && field.checkValidity();
    field.setAttribute('aria-invalid', String(!okay));
    if (!okay) valid = false;
  });

  const language = document.documentElement.lang;
  formStatus.className = 'form-status';

  if (!valid) {
    formStatus.textContent = language === 'es'
      ? 'Revisa los campos marcados e inténtalo de nuevo.'
      : 'Please review the highlighted fields and try again.';
    return;
  }

  formStatus.classList.add('success');
  formStatus.textContent = language === 'es'
    ? '¡Gracias! Tu mensaje ha sido enviado exitosamente. Nos comunicaremos contigo pronto.'
    : 'Thank you! Your message has been sent successfully. We will get in touch shortly.';
  form.reset();
  form.querySelectorAll('[aria-invalid]').forEach((field) => field.removeAttribute('aria-invalid'));
});

// Update Copyright Year
document.querySelector('#year').textContent = new Date().getFullYear();

// ==========================================================================
// Modal Event Listeners (Legal & Service Solutions)
// ==========================================================================

// Legal Modal triggers
document.querySelectorAll('[data-modal]').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    openLegalModal(btn.dataset.modal);
  });
});

if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeLegalModal);
if (modalOkBtn) modalOkBtn.addEventListener('click', closeLegalModal);

if (legalModalOverlay) {
  legalModalOverlay.addEventListener('click', (e) => {
    if (e.target === legalModalOverlay) {
      closeLegalModal();
    }
  });
}

// Service Solution Modal triggers
document.querySelectorAll('[data-service-trigger]').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const serviceKey = btn.dataset.serviceTrigger;
    if (serviceKey) {
      openServiceModal(serviceKey);
    }
  });
});

if (serviceModalCloseBtn) {
  serviceModalCloseBtn.addEventListener('click', () => closeServiceModal());
}

if (serviceModalOverlay) {
  serviceModalOverlay.addEventListener('click', (e) => {
    if (e.target === serviceModalOverlay) {
      closeServiceModal();
    }
  });
}

// Direct Action CTA Button within Service Modal
if (serviceModalCtaBtn) {
  serviceModalCtaBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const currentLang = document.documentElement.lang || 'en';
    const currentKey = activeServiceKey;
    const serviceData = currentKey && ((serviceDetails[currentLang] && serviceDetails[currentLang][currentKey]) || serviceDetails.en[currentKey]);
    const prefillMessage = serviceData ? serviceData.prefill : '';

    // Smoothly close modal via GSAP, then auto-scroll and prefill
    closeServiceModal(() => {
      const contactSection = document.querySelector('#contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }

      const messageField = document.querySelector('#contact-form textarea[name="message"]');
      if (messageField && prefillMessage) {
        messageField.value = prefillMessage;
        messageField.dispatchEvent(new Event('input', { bubbles: true }));

        // Delay focus slightly so smooth scroll has reached the contact form
        setTimeout(() => {
          messageField.focus();
          try {
            messageField.setSelectionRange(messageField.value.length, messageField.value.length);
          } catch (_) {
            // Browser compatibility safeguard
          }

          // Trigger glowing highlight pulse
          messageField.classList.remove('field-highlight');
          void messageField.offsetWidth; // Force reflow
          messageField.classList.add('field-highlight');

          setTimeout(() => {
            messageField.classList.remove('field-highlight');
          }, 3200);
        }, 500);
      }
    });
  });
}

// Global Escape Key to close any active modal
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (serviceModalOverlay && serviceModalOverlay.classList.contains('is-active')) {
      closeServiceModal();
    } else if (legalModalOverlay && legalModalOverlay.classList.contains('is-active')) {
      closeLegalModal();
    }
  }
});

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Header & Back to Top button visibility via native scroll (Instant response, zero mouse wheel delay)
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY > 30;
  header.classList.toggle('is-scrolled', scrolled);

  if (backToTopBtn) {
    backToTopBtn.classList.toggle('is-visible', window.scrollY > 400);
  }
}, { passive: true });

// Back to Top action (Native instant smooth scroll)
if (backToTopBtn) {
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Ambient Cursor Glow (desktop only)
if (cursorGlow && window.matchMedia('(pointer: fine)').matches && !prefersReducedMotion) {
  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let currentX = mouseX;
  let currentY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursorGlow.style.opacity = '1';
  });

  window.addEventListener('mouseleave', () => {
    cursorGlow.style.opacity = '0';
  });

  function renderCursor() {
    currentX += (mouseX - currentX) * 0.15;
    currentY += (mouseY - currentY) * 0.15;
    cursorGlow.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
    requestAnimationFrame(renderCursor);
  }
  renderCursor();
}

// Interactive Spotlight for Cards
document.querySelectorAll('.problem-card, .solution-card, .team-card').forEach((card) => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  });
});

// 3D Parallax Tilt for Hero Visual
const heroVisual = document.querySelector('.hero-visual');
const dashboardWrapper = document.querySelector('.dashboard-wrapper');

if (heroVisual && dashboardWrapper && !prefersReducedMotion) {
  heroVisual.addEventListener('mousemove', (e) => {
    const rect = heroVisual.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    if (window.gsap) {
      gsap.to(dashboardWrapper, {
        rotateY: x * 8,
        rotateX: -y * 8,
        transformPerspective: 1000,
        ease: 'power2.out',
        duration: 0.5
      });
    }
  });

  heroVisual.addEventListener('mouseleave', () => {
    if (window.gsap) {
      gsap.to(dashboardWrapper, {
        rotateY: 0,
        rotateX: 0,
        ease: 'power3.out',
        duration: 0.8
      });
    }
  });
}

// Master GSAP Entrance & Scroll Orchestration
function initLoadingAndAnimations() {
  refreshIcons();

  // If GSAP is missing or user prefers reduced motion, show immediately
  if (!window.gsap || prefersReducedMotion) {
    document.querySelectorAll('[data-animate]').forEach((el) => el.classList.add('is-visible'));
    return;
  }

  // Register ScrollTrigger
  if (window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
  }

  // Play Hero entrance immediately and initialize scroll triggers
  playHeroEntrance();
  initScrollTriggers();
}

// Hero Entrance Animation
function playHeroEntrance() {
  if (!window.gsap) return;

  const heroTl = gsap.timeline();

  heroTl.from('.site-header', {
    y: -40,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
  });

  heroTl.from('.hero-copy .eyebrow', {
    y: 20,
    opacity: 0,
    duration: 0.6,
    ease: 'power3.out'
  }, '-=0.5');

  heroTl.from('#hero-title', {
    y: 35,
    opacity: 0,
    duration: 0.85,
    ease: 'power4.out'
  }, '-=0.4');

  heroTl.from('.hero-lead', {
    y: 25,
    opacity: 0,
    duration: 0.7,
    ease: 'power3.out'
  }, '-=0.5');

  heroTl.from('.hero-pills span', {
    scale: 0.85,
    opacity: 0,
    duration: 0.5,
    stagger: 0.08,
    ease: 'back.out(1.7)'
  }, '-=0.4');

  heroTl.from('.hero-btn, .hero-note', {
    y: 20,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
    ease: 'power3.out'
  }, '-=0.3');

  heroTl.from('.visual-glow', {
    scale: 0.4,
    opacity: 0,
    duration: 1.2,
    ease: 'power2.out'
  }, '-=0.8');

  heroTl.from('.dashboard-wrapper', {
    y: 40,
    opacity: 0,
    scale: 0.94,
    duration: 0.9,
    ease: 'power3.out'
  }, '-=0.8');

  heroTl.from('.chart-line', {
    strokeDasharray: 600,
    strokeDashoffset: 600,
    duration: 1.5,
    ease: 'power2.out'
  }, '-=0.6');

  heroTl.from('.floating-card-a', {
    scale: 0.7,
    opacity: 0,
    duration: 0.5,
    ease: 'back.out(1.8)'
  }, '-=0.5');

  heroTl.from('.floating-card-b', {
    scale: 0.7,
    opacity: 0,
    duration: 0.5,
    ease: 'back.out(1.8)'
  }, '-=0.4');

  heroTl.from('.visual-caption, .scroll-cue', {
    opacity: 0,
    duration: 0.8,
    ease: 'power2.out'
  }, '-=0.4');

  // Continuous subtle ambient float
  gsap.to('.orbit-one', {
    rotation: 360,
    duration: 110,
    repeat: -1,
    ease: 'none'
  });

  gsap.to('.orbit-two', {
    rotation: -360,
    duration: 85,
    repeat: -1,
    ease: 'none'
  });

  gsap.to('.dashboard-wrapper', {
    y: '+=6',
    duration: 3.5,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
  });
}

// ScrollTrigger Animations Across All Sections
function initScrollTriggers() {
  if (!window.gsap || !window.ScrollTrigger) return;

  // Animate Section Headings
  document.querySelectorAll('[data-animate="heading"]').forEach((heading) => {
    gsap.from(heading.children, {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: heading,
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    });
  });

  // Fade-up elements
  document.querySelectorAll('[data-animate="fade-up"]').forEach((el) => {
    gsap.from(el, {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 88%',
        toggleActions: 'play none none none'
      }
    });
  });

  // Stagger Cards (Problem, Solutions, Projects, Team)
  document.querySelectorAll('[data-animate="stagger-cards"]').forEach((grid) => {
    const cards = grid.children;
    gsap.from(cards, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.12,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: grid,
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    });
  });

  // Growth Path Timeline Fill on Scroll
  const growthPath = document.querySelector('[data-animate="growth-path"]');
  if (growthPath) {
    const steps = growthPath.querySelectorAll('.growth-step');
    const pathLines = growthPath.querySelectorAll('.path-line-fill');

    gsap.from(steps, {
      y: 35,
      opacity: 0,
      duration: 0.7,
      stagger: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: growthPath,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });

    pathLines.forEach((fill) => {
      gsap.to(fill, {
        scaleX: 1,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: growthPath,
          start: 'top 75%',
          toggleActions: 'play none none none'
        }
      });
    });
  }

  // Process items staggered slide-in (vertical only, no horizontal shifting)
  const processList = document.querySelector('[data-animate="process-list"]');
  if (processList) {
    const items = processList.querySelectorAll('.process-item');
    gsap.from(items, {
      y: 25,
      opacity: 0,
      duration: 0.65,
      stagger: 0.12,
      ease: 'power3.out',
      clearProps: 'transform,opacity',
      scrollTrigger: {
        trigger: processList,
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    });
  }

  // Stamp rotation on scroll in About section
  const stamp = document.querySelector('[data-animate="stamp-rotate"]');
  if (stamp) {
    gsap.to(stamp, {
      rotation: 15,
      ease: 'none',
      scrollTrigger: {
        trigger: stamp,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1.2
      }
    });
  }

  // Mini bars in featured solution card
  const miniBars = document.querySelectorAll('.dashboard-mini span');
  if (miniBars.length > 0) {
    gsap.from(miniBars, {
      scaleY: 0,
      transformOrigin: 'bottom',
      duration: 0.8,
      stagger: 0.08,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.solution-featured',
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });
  }
}

// Run loading on DOM Ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initLoadingAndAnimations);
} else {
  initLoadingAndAnimations();
}
