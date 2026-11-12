/* ===== DATOS CENTRALIZADOS =====
   Para agregar/editar un OVA basta con modificar este archivo.
   Textos tomados del guion «Bienvenida al sitio web» y del cuadro «OVAS Lengua Castellana y Didáctica Virtual». */
window.AULA = {
  /* Imágenes opcionales: escribe la ruta, p. ej. "assets/img/hero.webp". Vacío = diseño por defecto. */
  imagenes: { hero: "assets/img/hero.webp", fondo: "assets/img/fondo.webp",
    /* Sol del centro del universo 3D. Si el archivo no existe, se muestra el sol provisional. */
    sol: "assets/img/sol.webp" },
  /* En cada OVA puedes añadir:  imagen: "assets/img/ova-1.webp"  y  foco: 0.42  (0 = recorte a la izquierda, 1 = a la derecha; solo afecta al planeta del 3D) */
  frases: [
    "Aprender también es explorar.",
    "La tecnología abre puertas al conocimiento.",
    "Cada interacción es una oportunidad para aprender.",
    "Innovar, crear y transformar la educación.",
    "El aprendizaje no tiene límites."
  ],
  ovas: [
    { n: 1, foco: 0.42, nombre: "La personificación", imagen: "assets/img/ova-1.webp", grado: "4°", autores: "Frankyn Hernández - Danna Alvear",
      desc: "Descubre cómo los objetos, animales y elementos de la naturaleza pueden adquirir características y comportamientos humanos mediante la personificación. Aprende a reconocer y utilizar este recurso literario.",
      enlace: "https://share.articulate.com/I5RqnD7UDh4U5Z95Jehmi" },
    { n: 2, foco: 0.5, nombre: "La anécdota", imagen: "assets/img/ova-2.webp", grado: "5°", autores: "Wenndy Velazco - Claudia Cristancho",
      desc: "Aprende qué es una anécdota, cuáles son sus características y cómo narrar experiencias y acontecimientos personales de manera clara, organizada y creativa.",
      enlace: "https://view.genially.com/6af251dc8f6c982e0eb4e57d",
      alterno: "http://6af3185e02f70.site123.me" },
    { n: 3, foco: 0.38, nombre: "La historieta", imagen: "assets/img/ova-3.webp", grado: "5°", autores: "Daniel Suárez y Diego Lizcano",
      desc: "Explora el mundo de las historietas, sus elementos, personajes, viñetas y globos de diálogo. Desarrolla tu imaginación creando historias a través de imágenes y palabras.",
      enlace: "https://view.genially.com/6af2aced1c0cea4ba433da2c" },
    { n: 4, foco: 0.5, nombre: "Características de los dialectos en Colombia", imagen: "assets/img/ova-4.webp", grado: "6°", autores: "Juliana Moreno - Valentina Pulgarín",
      desc: "Conoce la diversidad lingüística de Colombia e identifica cómo cambian la pronunciación, el vocabulario y algunas expresiones del español según las diferentes regiones del país.",
      enlace: "https://canva.link/ik11na3i88hl00c" },
    { n: 5, foco: 0.45, nombre: "Los medios de comunicación", imagen: "assets/img/ova-5.webp", grado: "2°", autores: "Xiomara Acosta y Juliana Rojas",
      desc: "Descubre los diferentes medios de comunicación, su importancia y cómo nos permiten compartir información y comunicarnos con las personas que nos rodean.",
      enlace: "https://valjul-web.github.io/comunicaci-n/" },
    { n: 6, foco: 0.5, nombre: "La biografía", imagen: "assets/img/ova-6.webp", grado: "5°", autores: "Diana Sandoval y Paula Patiño",
      desc: "Aprende a identificar las características y la estructura de una biografía, reconociendo los acontecimientos más importantes de la vida de una persona.",
      enlace: "https://patinopaula15.wixsite.com/gina-web-pedag" },
    { n: 7, foco: 0.4, nombre: "Las epopeyas", imagen: "assets/img/ova-7.webp", grado: "6°", autores: "Xina García - Mario Atuesta",
      desc: "Adéntrate en el mundo de las epopeyas y conoce sus características, héroes, hazañas y relatos extraordinarios que narran las grandes aventuras de diferentes culturas.",
      enlace: "https://sites.google.com/view/laepopeyaviajaconloshroesdelaa?usp=sharing" },
    { n: 8, foco: 0.5, nombre: "Los textos multimodales", imagen: "assets/img/ova-8.webp", grado: "6°", autores: "Hary Natalia Serrano Atala",
      desc: "Explora cómo se combinan diferentes formas de comunicación, como imágenes, palabras, sonidos, símbolos y videos, para transmitir mensajes y construir significados.",
      enlace: "https://gibbon-bqkygr.my.canva.site/" }
  ]
};
