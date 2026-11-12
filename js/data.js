/* ===== DATOS CENTRALIZADOS =====
   Para agregar/editar un OVA basta con modificar este archivo.
   Textos tomados del guion «Bienvenida al sitio web» y del cuadro «OVAS Lengua Castellana y Didáctica Virtual». */
window.AULA = {
  /* Imágenes opcionales: escribe la ruta, p. ej. "assets/img/hero.webp". Vacío = diseño por defecto. */
  imagenes: { hero: "assets/img/hero.webp", fondo: "assets/img/fondo.webp" },
  /* En cada OVA (y en camu) puedes añadir:  imagen: "assets/img/ova-1.webp"  */
  frases: [
    "Aprender también es explorar.",
    "La tecnología abre puertas al conocimiento.",
    "Cada interacción es una oportunidad para aprender.",
    "Innovar, crear y transformar la educación.",
    "El aprendizaje no tiene límites."
  ],
  ovas: [
    { n: 1, nombre: "La personificación", imagen: "assets/img/ova-1.webp", grado: "4°", autores: "Frankyn Hernadez - Dana Alvear",
      desc: "Descubre cómo los objetos, animales y elementos de la naturaleza pueden adquirir características y comportamientos humanos mediante la personificación. Aprende a reconocer y utilizar este recurso literario.",
      enlace: "https://share.articulate.com/I5RqnD7UDh4U5Z95Jehmi" },
    { n: 2, nombre: "La anécdota", imagen: "assets/img/ova-2.webp", grado: "5°", autores: "Wendy Velazco - Claudia Cristancho",
      desc: "Aprende qué es una anécdota, cuáles son sus características y cómo narrar experiencias y acontecimientos personales de manera clara, organizada y creativa.",
      enlace: "https://view.genially.com/6af251dc8f6c982e0eb4e57d",
      alterno: "http://6af3185e02f70.site123.me" },
    { n: 3, nombre: "La historieta", imagen: "assets/img/ova-3.webp", grado: "5°", autores: "Daniel Suárez y Diego Lizcano",
      desc: "Explora el mundo de las historietas, sus elementos, personajes, viñetas y globos de diálogo. Desarrolla tu imaginación creando historias a través de imágenes y palabras.",
      enlace: "https://view.genially.com/6af2aced1c0cea4ba433da2c" },
    { n: 4, nombre: "Características de los dialectos en Colombia", imagen: "assets/img/ova-4.webp", grado: "6°", autores: "Juliana Moreno - Valentina Pulgarin",
      desc: "Conoce la diversidad lingüística de Colombia e identifica cómo cambian la pronunciación, el vocabulario y algunas expresiones del español según las diferentes regiones del país.",
      enlace: "https://canva.link/ik11na3i88hl00c" },
    { n: 5, nombre: "Los medios de comunicación", imagen: "assets/img/ova-5.webp", grado: "2°", autores: "Xiomara Acosta y Juliana Rojas",
      desc: "Descubre los diferentes medios de comunicación, su importancia y cómo nos permiten compartir información y comunicarnos con las personas que nos rodean.",
      enlace: "https://valjul-web.github.io/comunicaci-n/" },
    { n: 6, nombre: "La biografía", imagen: "assets/img/ova-6.webp", grado: "5°", autores: "Diana Sandoval y Paula Patiño",
      desc: "Aprende a identificar las características y la estructura de una biografía, reconociendo los acontecimientos más importantes de la vida de una persona.",
      enlace: "https://patinopaula15.wixsite.com/gina-web-pedag" },
    { n: 7, nombre: "Las epopeyas", imagen: "assets/img/ova-7.webp", grado: "6°", autores: "Xina Garcia - Mario Cuestas",
      desc: "Adéntrate en el mundo de las epopeyas y conoce sus características, héroes, hazañas y relatos extraordinarios que narran las grandes aventuras de diferentes culturas.",
      enlace: "https://sites.google.com/view/laepopeyaviajaconloshroesdelaa?usp=sharing" },
    { n: 8, nombre: "Los textos multimodales", imagen: "assets/img/ova-8.webp", grado: "6°", autores: "Hary Natalia Serrano Atala",
      desc: "Explora cómo se combinan diferentes formas de comunicación, como imágenes, palabras, sonidos, símbolos y videos, para transmitir mensajes y construir significados.",
      enlace: "https://gibbon-bqkygr.my.canva.site/" }
  ],
  /* OVA de CAMU: PROVISIONAL. Completar cuando se entreguen los datos reales (no inventar). */
  camu: { n: "★", nombre: "OVA de CAMU", imagen: "assets/img/camu.webp", provisional: true, grado: "[Grado por definir]",
    autores: "[Autor(es) por definir]",
    desc: "[PROVISIONAL] Descripción pendiente de entrega.",
    enlace: "" }
};
