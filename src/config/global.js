export default {
  global: {
    componenteFormativo: 'Plan de comunicación',
    descripcionCurso:
      'Un plan de comunicación como cualquier otro plan requiere la implementación de estrategias y acciones que lleven al cumplimiento de los objetivos propuestos, los cuales ya se han analizado en temas anteriores y deben tener dos tipos de enfoque: en los medios y en el mensaje. Por ende, en este plan se determinarán las actividades que una empresa debe realizar para el cumplimiento de dichos objetivos.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },

      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'El plan de comunicación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'La comunicación en la empresa',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Proceso de la comunicación',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Técnicas de comunicación',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Medios de comunicación',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Estructura del plan de comunicación',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Estructura gráfica del plan',
        desarrolloContenidos: true,
        subMenu: [],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },

      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },

      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  creditos: {
    liderEquipo: {
      nombre: 'Maria Camila Garcia Santamaria',
      cargo: 'Líder del equipo',
    },
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },

      {
        nombre: 'Manuel Augusto Arias López',
        cargo: 'Instructor-Experto temático',
        centro: 'Centro de Comercio y Servicios',
        regional: 'Regional Quindío',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Diseñador instruccional',
        centro: 'Centro de Diseño y Metrología',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'Vilma Lucía Perilla Méndez',
        cargo: 'Evaluadora Instruccional',
        centro: 'Centro para la Industria y la Comunicación Gráfica ',
        regional: 'Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Integración de recursos y pruebas',
      },
      {
        nombre: [
          'Adriana Rincón Avendaño',
          'Eulises Orduz Amezquita',
          'Adriana Rincón Avendaño',
          'Maria Camila Ovalle Ospina',
          'Yazmin Rocio Figueroa Pacheco',
          'Yenny patricia Ulloa Villamizar',
          'Víctor Raúl Cárdenas Cáceres',
        ],
        cargo: 'Diseño web y Producción Audiovisual',
      },
      {
        nombre: 'Jorge Leonardo Camacho Pardo',
        cargo: 'Desarrollo Front-End',
      },

      {
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: ['Yuli Marcela Gómez Tarazona'],
        cargo: ['Validación de diseño y contenido'],
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Coll, P. y Lluís, J. (2018). Marketing y Comunicación en la Nueva Economía. Editorial UOC.',
    },
    {
      referencia:
        'Cuenca, J. y Verazzi, L. (2018). Guía Fundamental de la Comunicación Interna. Editorial UOC.',
    },
    {
      referencia:
        'Davara, A. M. (1992). Estrategias de Comunicación en Marketing. Edit. DOSSAT S.A.',
    },
    {
      referencia:
        'Estrella, A. M. y Segovia, C. (2016). Comunicación Integrada de Marketing. ESIC EDITORIAL.',
    },
    {
      referencia:
        'InformaBTL. (2010, 6 de octubre). Marketing de Guerrilla en la Nieve. ',
      link: 'https://www.informabtl.com/marketing-de-guerrilla-en-la-nieve/ ',
    },
    {
      referencia:
        'Kotler, P. y Armstrong, G. (2003). Fundamentos de Marketing. (6ta ed.). Prentice Hall.',
    },
    {
      referencia:
        'Monserrat, J. y Sabater, F. (2017). Planificación Estratégica de Comunicación en Redes Sociales. Editorial UOC.',
    },
    {
      referencia:
        'Puon, L. (2013, 7 de diciembre). Definición de Publicidad. Merca 2.0. ',
      link:
        'https://www.merca20.com/definicion-de-publicidad/#:~:text=Philip%20Kotler%20define%20publicidad%20%E2%80%9Ccomo,%3A%20informar%2Cpersuadir%20y%20recordar. ',
    },
    {
      referencia:
        'Stanton, W., Etzel, M. y Walker, B. (2004). Fundamentos de Marketing. (13a ed.). Mc Graw Hill.',
    },
    {
      referencia:
        'Thompson. I. (2006, febrero). Definición de Propaganda. PromonegocioS.net. ',
      link:
        'https://www.promonegocios.net/mercadotecnia/propaganda-definicion.html',
    },
    {
      referencia:
        'Timoteo, A. J. (2013). Manejo de la Comunicación Organizacional. Ediciones Díaz de Santos.',
    },
    {
      referencia: 'Vila, F. (2013). Comunicación Estratégica. Editorial UOC.',
    },
    {
      referencia:
        'Xunta de Galicia. (s.f.). Manuales prácticos de la Mipyme: Como Elaborar el Plan de Comunicación.',
      link:
        'http://biblioteca.udgvirtual.udg.mx/jspui/bitstream/123456789/1919/1/Como%20elaborar%20el%20plan%20de%20comunicaci%c3%b3n.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Above The Line (ATL) o por encima de la línea',
      significado:
        'técnica basada en la utilización de medios de publicidad tradicional o convencional. Los medios Above The Line hacen referencia a los medios masivos, con gran difusión, que se caracterizan por su elevado coste. Los medios tradicionales son televisión, radio, prensa y publicidad exterior.',
    },
    {
      termino: 'Below The Line (BTL) o por debajo de la línea',
      significado:
        'técnica basada en la utilización de medios de publicidad no convencionales. Se caracterizan por ser más directos y personales. Los medios BTL son el marketing directo, promociones al consumidor, promociones al fabricante, relaciones públicas, internet. Internet es un medio considerado por unos autores en la clasificación ATL mientras que por otros en la BTL.',
    },
    {
      termino: 'Comunicación corporativa',
      significado:
        'comunicación por la cual la empresa premeditadamente emite un mensaje con el fin de transmitir o decir al público lo que la empresa es.',
    },
    {
      termino: 'Lobbying o grupos de presión',
      significado:
        'proceso planificado de comunicación persuasiva cuyo fin es influir y predisponer al receptor del mensaje para conseguir determinados objetivos para la empresa. Los lobbys actúan como grupos de presión.',
    },
    {
      termino: 'Mailing',
      significado:
        'Envío de información a través del correo. Se trata de una alternativa del marketing directo.',
    },
    {
      termino: 'Marketing de guerrilla',
      significado:
        'Se trata de cualquier alternativa comercial a la publicidad convencional, que utiliza altas dosis de creatividad e impacto visual para captar al público objetivo. Suele elegir la vía pública para el reclamo publicitario.',
    },
    {
      termino: 'Publicidad viral',
      significado:
        'Integra a todos los mensajes comerciales que se generan fundamentalmente a partir de un vídeo y que ofrecen un mensaje indirecto, no relacionado con una marca en concreto, pero que tienen un alto impacto en las redes sociales. Una publicidad se convierte en viral (virus) cuando es compartida por muchas personas a través de la mencionada herramienta de la Web 2.0.',
    },
  ],
}
