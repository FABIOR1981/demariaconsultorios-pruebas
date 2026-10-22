// =====================================================================
// CONFIGURACIÓN DE DEMARIA CONSULTORIOS
// Editá solo este archivo para cambiar datos de contacto, precios,
// horarios y políticas. El resto del sitio se actualiza solo.
// =====================================================================

const CONFIG = {

  // ----- Datos generales -----
  nombre: "DeMaria Consultorios",
  ciudad: "Cordón, Montevideo",

  // ----- Contacto -----
  // Número de WhatsApp en formato internacional, sin "+" ni espacios.
  // Ejemplo: "59899123456"
  whatsapp: "59891001334",
  // Mensaje que se precarga cuando alguien toca un botón de reserva.
  mensajeWhatsapp: "Hola, quisiera consultar disponibilidad para reservar un consultorio en DeMaria Consultorios.",

  // ----- Ubicación -----
  direccion: "Dr. Pablo de María 1334, Cordón, Montevideo",
  // Link de inserción de Google Maps (el valor de src del iframe).
  // Dejar vacío para mostrar el marcador de posición.
  mapaEmbedUrl: "https://www.google.com/maps?q=Dr.+Pablo+de+Mar%C3%ADa+1334%2C+Cord%C3%B3n%2C+Montevideo&z=17&output=embed",

  // ----- Precios -----
  moneda: "$",
  precioHora: 280,

  // ----- Talleres y reuniones -----
  tallerMaximo: 10,

  // ----- Políticas -----
  // Horas de anticipación para cancelar sin costo.
  cancelacionHoras: 24,

  // ----- Horarios -----
  horarios: [
    { dias: "Lunes a viernes", horas: "8:00 a 21:00" },
    { dias: "Sábados", horas: "8:00 a 16:00" },
    { dias: "Domingos", horas: "Cerrado" },
  ],
};
