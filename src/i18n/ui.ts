export const languages = { es: 'ES', en: 'EN' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'es';

export const ui = {
  es: {
    // ── Navbar ─────────────────────────────────────
    'nav.home':     'Inicio',
    'nav.about':    'Sobre mí',
    'nav.projects': 'Proyectos',
    'nav.cv':       'Descargar CV',
    'nav.lang':     'EN',
    'nav.langFull': 'Switch to English',
    'nav.theme':    'Cambiar tema',
    'nav.menu':     'Abrir menú',

    // ── Hero ────────────────────────────────────────
    'hero.line1':    'donde-',
    'hero.line2':    '-el código',
    'hero.line3':    'vive-',
    'hero.line4':    '-aquí',
    'hero.tagline':  '//CONSTRUIDO\nPARA LA WEB.',
    'hero.category': '//DEV',
    'hero.desc':     'Explora mis proyectos, habilidades y experiencia, cuidadosamente reunidos en un solo lugar.',
    'hero.stat':     'PROYECTOS',
    'hero.year':     '/ Portafolio\n2026',

    // ── About ───────────────────────────────────────
    'about.heading1': 'Todo -',
    'about.heading2': 'sobre mí',
    'about.heading3': '©26',
    'about.viewProject': 'Ver Proyecto',
    'about.text':     'Cada línea de código tiene un propósito más allá de la sintaxis — es lógica y significado donde la arquitectura limpia se une al impacto real.',
    'about.skills':   [
      { label: 'Frontend',  count: 12 },
      { label: 'Backend',   count: 8  },
      { label: 'Base de datos', count: 6 },
      { label: 'DevOps',    count: 4  },
      { label: 'Diseño',    count: 5  },
    ],

    // ── Carousel ────────────────────────────────────
    'carousel.heading1': '©portafolio —',
    'carousel.heading2': 'mis proyectos',
    'carousel.label':    '[Destacados]',
    'carousel.prev':     'Anterior',
    'carousel.next':     'Siguiente',

    // ── Accordion ───────────────────────────────────
    'accordion.desc':    'Desde landing pages simples hasta aplicaciones full-stack complejas, cada proyecto está construido con intención y cuidado.',
    'accordion.getStarted': 'Ver más',
    'accordion.items': [
      { title: 'Proyectos Full Stack 2026', year: '2026', link: '#', expanded: false, description: '', image: '' },
      {
        title: 'Frontend & UI 2025', year: '2025', link: '#', expanded: true,
        description: 'Interfaces limpias y responsivas construidas con React, TypeScript y arquitectura CSS moderna.',
        image: 'https://placehold.co/180x130/ccc8c2/333?text=UI',
      },
      { title: 'Backend & APIs 2024', year: '2024', link: '#', expanded: false, description: '', image: '' },
    ],

    // ── Ticker 2 ────────────────────────────────────
    'ticker2': ['CÓDIGO LIMPIO', 'SISTEMAS ESCALABLES', 'PIXEL PERFECT', 'ALTO RENDIMIENTO', 'ACCESIBLE', 'ENFOCADO AL USUARIO', 'OPEN SOURCE'],

    // ── Footer ──────────────────────────────────────
    'footer.contact':      'Contáctame',
    'footer.heading1':     'Construyamos',
    'footer.heading2':     '__algo genial',
    'footer.location':     'Ubicación',
    'footer.call':         'Teléfono',
    'footer.email':        'Email',
    'footer.availability': 'Disponibilidad',
    'footer.follow':       'Sígueme',
    'footer.terms':        'Términos y Condiciones',
    'footer.privacy':      'Política de Privacidad',
    'footer.rights':       'Todos los derechos reservados.',
    'footer.menu':         'Menú',
    'footer.stack':        'Stack',
    'footer.services':     'Servicios',
    'footer.more':         'Más',
    'footer.menuLinks':    ['Inicio', 'Sobre mí', 'Proyectos', 'Habilidades'],
    'footer.services.list':['Aplicaciones Web', 'APIs', 'Diseño UI', 'Consultoría'],
    'footer.more.list':    ['Blog', 'Contacto', 'Curriculum', 'GitHub'],
    'form.name':           'Tu nombre',
    'form.namePlaceholder':'Carlos García',
    'form.email':          'Email',
    'form.emailPlaceholder':'hola@ejemplo.com',
    'form.message':        '¿En qué puedo ayudarte?',
    'form.messagePlaceholder': 'Cuéntame sobre tu proyecto, idea o consulta...',
    'form.submit':         'Enviar mensaje',
    'form.sending':        'Enviando...',
    'form.success':        '¡Mensaje enviado!',
    'form.successNote':    'Te responderé a la brevedad. ¡Gracias!',
    'form.errorEmail':     'Por favor ingresa un email válido.',
    'form.errorSend':      'Error al enviar. Intenta de nuevo.',

    // ── Mobile nav ──────────────────────────────────
    'mobile.menu':    'Menú',
    'mobile.close':   'Cerrar menú',
    'mobile.links':   [
      { label: 'Inicio',      href: '/'         },
      { label: 'Sobre mí',    href: '#about'    },
      { label: 'Proyectos',   href: '#projects' },
      { label: 'Tecnologías', href: '#skills'   },
      { label: 'Contacto',    href: '#contact'  },
      { label: 'Personal',    href: '/personal' },
    ],
    'mobile.copyright': 'Carlos Sanchez',

    // ── Página personal ─────────────────────────────
    'personal.nav':           'Personal',
    'personal.title':         'Carlos Sanchez — Personal',
    'personal.hero.tag':      '//HUMAN BEHIND THE CODE',
    'personal.hero.line1':    'más allá-',
    'personal.hero.line2':    '-del código',
    'personal.hero.desc':     'Desarrollador, curioso por naturaleza. Aquí encontrarás la parte humana detrás de los proyectos.',
    'personal.now.tag':       '//AHORA MISMO',
    'personal.now.heading':   'En qué estoy\nenfocado',
    'personal.now.items': [
      { icon: '⚡', label: 'Aprendiendo', text: 'Profundizando en arquitectura de sistemas distribuidos y edge computing.' },
      { icon: '🔨', label: 'Construyendo', text: 'Un SaaS propio para automatización de workflows con IA.' },
      { icon: '📖', label: 'Leyendo', text: '"The Pragmatic Programmer" — segunda lectura, siempre encuentro algo nuevo.' },
      { icon: '🎯', label: 'Meta 2026', text: 'Contribuir a 3 proyectos open source y lanzar mi primer producto.' },
    ],
    'personal.hobbies.tag':   '//FUERA DEL TRABAJO',
    'personal.hobbies.heading': 'Lo que me\nmantiene vivo',
    'personal.hobbies.items': [
      { emoji: '🎸', title: 'Música',     desc: 'Toco guitarra desde los 14. Rock, jazz, lo que sea con buenas notas.' },
      { emoji: '📷', title: 'Fotografía', desc: 'Calles, luces y momentos cotidianos que nadie más nota.' },
      { emoji: '🧗', title: 'Escalada',   desc: 'Resolver problemas con el cuerpo. El boulder es meditación en movimiento.' },
      { emoji: '♟️', title: 'Ajedrez',    desc: 'ELO 1450 y subiendo. El juego más honesto que existe.' },
      { emoji: '✈️', title: 'Viajes',     desc: 'Cada ciudad es una perspectiva nueva. Próximo destino: Japón.' },
      { emoji: '🍳', title: 'Cocinar',    desc: 'La cocina es el único lugar donde experimento sin miedo a romper nada.' },
    ],
    'personal.spotify.tag':     '//LO QUE SUENA',
    'personal.spotify.heading': 'Mi playlist\nactual',
    'personal.spotify.note':    'Lo que escucho mientras programo',
    'personal.gallery.tag':     '//MOMENTOS',
    'personal.gallery.heading': 'Fotos\nrecientes',
  },

  en: {
    // ── Navbar ─────────────────────────────────────
    'nav.home':     'Home',
    'nav.about':    'About',
    'nav.projects': 'Projects',
    'nav.cv':       'Download CV',
    'nav.lang':     'ES',
    'nav.langFull': 'Cambiar a Español',
    'nav.theme':    'Toggle theme',
    'nav.menu':     'Open menu',

    // ── Hero ────────────────────────────────────────
    'hero.line1':    'where-',
    'hero.line2':    '-code',
    'hero.line3':    'lives-',
    'hero.line4':    '-here',
    'hero.tagline':  '//BUILT FOR\nTHE WEB.',
    'hero.category': '//DEV',
    'hero.desc':     'Explore my projects, skills and experience, thoughtfully crafted in one portfolio.',
    'hero.stat':     'PROJECTS',
    'hero.year':     '/ Portfolio\n2026',

    // ── About ───────────────────────────────────────
    'about.heading1': 'All -',
    'about.heading2': 'about me',
    'about.heading3': '©26',
    'about.viewProject': 'View Project',
    'about.text':     'Every line of code carries purpose beyond syntax — it\'s logic and meaning, where clean architecture meets real-world impact.',
    'about.skills':   [
      { label: 'Frontend',  count: 12 },
      { label: 'Backend',   count: 8  },
      { label: 'Database',  count: 6  },
      { label: 'DevOps',    count: 4  },
      { label: 'Design',    count: 5  },
    ],

    // ── Carousel ────────────────────────────────────
    'carousel.heading1': '©portfolio —',
    'carousel.heading2': 'project showcase',
    'carousel.label':    '[Featured]',
    'carousel.prev':     'Previous',
    'carousel.next':     'Next',

    // ── Accordion ───────────────────────────────────
    'accordion.desc':    'From simple landing pages to complex full-stack applications, every project is built with intention and care.',
    'accordion.getStarted': 'Get Started',
    'accordion.items': [
      { title: 'Full Stack Projects 2026', year: '2026', link: '#', expanded: false, description: '', image: '' },
      {
        title: 'Frontend & UI 2025', year: '2025', link: '#', expanded: true,
        description: 'Clean, responsive interfaces built with React, TypeScript and modern CSS architecture.',
        image: 'https://placehold.co/180x130/ccc8c2/333?text=UI',
      },
      { title: 'Backend & APIs 2024', year: '2024', link: '#', expanded: false, description: '', image: '' },
    ],

    // ── Ticker 2 ────────────────────────────────────
    'ticker2': ['CLEAN CODE', 'SCALABLE SYSTEMS', 'PIXEL PERFECT', 'FAST PERFORMANCE', 'ACCESSIBLE', 'USER FOCUSED', 'OPEN SOURCE'],

    // ── Footer ──────────────────────────────────────
    'footer.contact':      'Contact Me',
    'footer.heading1':     "Let's build",
    'footer.heading2':     '__something great',
    'footer.location':     'Location',
    'footer.call':         'Call Us',
    'footer.email':        'Email',
    'footer.availability': 'Availability',
    'footer.follow':       'Follow Us',
    'footer.terms':        'Terms & Conditions',
    'footer.privacy':      'Privacy Policy',
    'footer.rights':       'All rights reserved.',
    'footer.menu':         'Menu',
    'footer.stack':        'Stack',
    'footer.services':     'Services',
    'footer.more':         'More',
    'footer.menuLinks':    ['Home', 'About', 'Projects', 'Skills'],
    'footer.services.list':['Web Apps', 'APIs', 'UI Design', 'Consulting'],
    'footer.more.list':    ['Blog', 'Contact', 'Resume', 'GitHub'],
    'form.name':           'Your name',
    'form.namePlaceholder':'John Doe',
    'form.email':          'Email',
    'form.emailPlaceholder':'hello@example.com',
    'form.message':        'How can I help you?',
    'form.messagePlaceholder': 'Tell me about your project, idea or question...',
    'form.submit':         'Send message',
    'form.sending':        'Sending...',
    'form.success':        'Message sent!',
    'form.successNote':    "I'll get back to you shortly. Thank you!",
    'form.errorEmail':     'Please enter a valid email.',
    'form.errorSend':      'Failed to send. Please try again.',

    // ── Mobile nav ──────────────────────────────────
    'mobile.menu':    'Menu',
    'mobile.close':   'Close menu',
    'mobile.links':   [
      { label: 'Home',         href: '/en'          },
      { label: 'About',        href: '/en#about'    },
      { label: 'Projects',     href: '/en#projects' },
      { label: 'Technologies', href: '/en#skills'   },
      { label: 'Contact',      href: '/en#contact'  },
      { label: 'Personal',     href: '/en/personal' },
    ],
    'mobile.copyright': 'Carlos Sanchez',

    // ── Personal page ───────────────────────────────
    'personal.nav':           'Personal',
    'personal.title':         'Carlos Sanchez — Personal',
    'personal.hero.tag':      '//HUMAN BEHIND THE CODE',
    'personal.hero.line1':    'beyond-',
    'personal.hero.line2':    '-the code',
    'personal.hero.desc':     'Developer, curious by nature. Here you\'ll find the human side behind the projects.',
    'personal.now.tag':       '//RIGHT NOW',
    'personal.now.heading':   'What I\'m\nfocused on',
    'personal.now.items': [
      { icon: '⚡', label: 'Learning', text: 'Going deep into distributed systems architecture and edge computing.' },
      { icon: '🔨', label: 'Building', text: 'My own SaaS for AI-powered workflow automation.' },
      { icon: '📖', label: 'Reading', text: '"The Pragmatic Programmer" — second read, always find something new.' },
      { icon: '🎯', label: 'Goal 2026', text: 'Contribute to 3 open source projects and ship my first product.' },
    ],
    'personal.hobbies.tag':   '//OUTSIDE WORK',
    'personal.hobbies.heading': 'What keeps\nme alive',
    'personal.hobbies.items': [
      { emoji: '🎸', title: 'Music',       desc: 'Playing guitar since I was 14. Rock, jazz, anything with good notes.' },
      { emoji: '📷', title: 'Photography', desc: 'Streets, light and everyday moments nobody else notices.' },
      { emoji: '🧗', title: 'Climbing',    desc: 'Solving problems with your body. Bouldering is moving meditation.' },
      { emoji: '♟️', title: 'Chess',       desc: 'ELO 1450 and climbing. The most honest game there is.' },
      { emoji: '✈️', title: 'Travel',      desc: 'Every city is a new perspective. Next stop: Japan.' },
      { emoji: '🍳', title: 'Cooking',     desc: 'The kitchen is the only place I experiment without fear of breaking anything.' },
    ],
    'personal.spotify.tag':     '//WHAT\'S PLAYING',
    'personal.spotify.heading': 'My current\nplaylist',
    'personal.spotify.note':    'What I listen to while coding',
    'personal.gallery.tag':     '//MOMENTS',
    'personal.gallery.heading': 'Recent\nphotos',
  },
} as const;

export type TranslationKey = keyof typeof ui[typeof defaultLang];

export function useTranslations(lang: Lang) {
  return function t(key: TranslationKey) {
    return (ui[lang] as Record<string, unknown>)[key] ?? (ui[defaultLang] as Record<string, unknown>)[key];
  };
}
