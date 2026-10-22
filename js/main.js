// Demaria Consultorios: comportamiento de la página.
// Los datos editables están en js/config.js (objeto CONFIG).

document.addEventListener("DOMContentLoaded", () => {
  aplicarConfiguracion();

  // Año automático en el pie
  const anio = document.getElementById("anio");
  if (anio) anio.textContent = new Date().getFullYear();

  // Menú móvil
  const boton = document.querySelector(".menu-toggle");
  const menu = document.getElementById("menu");

  if (boton && menu) {
    boton.addEventListener("click", () => {
      const abierto = menu.classList.toggle("abierto");
      boton.setAttribute("aria-expanded", String(abierto));
    });

    menu.querySelectorAll("a").forEach((enlace) => {
      enlace.addEventListener("click", () => {
        menu.classList.remove("abierto");
        boton.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Todos los botones de reserva llevan a WhatsApp con el mensaje de config.js
  const mensaje = encodeURIComponent(CONFIG.mensajeWhatsapp);
  document.querySelectorAll(".js-whatsapp").forEach((enlace) => {
    enlace.href = `https://wa.me/${CONFIG.whatsapp}?text=${mensaje}`;
    enlace.target = "_blank";
    enlace.rel = "noopener";
  });
});

// Completa en la página los textos que dependen de config.js
function aplicarConfiguracion() {
  const pendienteWhatsapp = CONFIG.whatsapp.includes("X");

  const valores = {
    nombre: CONFIG.nombre,
    ciudad: CONFIG.ciudad,
    precioHora: `${CONFIG.moneda}${CONFIG.precioHora}`,
    tallerMaximo: String(CONFIG.tallerMaximo),
    cancelacionHoras: String(CONFIG.cancelacionHoras),
    direccion: CONFIG.direccion,
    whatsappVisible: pendienteWhatsapp ? "[COMPLETAR: número]" : `+${CONFIG.whatsapp}`,
  };

  document.querySelectorAll("[data-config]").forEach((el) => {
    const clave = el.dataset.config;
    if (!(clave in valores)) return;
    el.textContent = valores[clave];
    // Los valores aún sin completar se muestran resaltados
    if (clave === "direccion" || clave === "whatsappVisible") {
      const pendiente = clave === "whatsappVisible" ? pendienteWhatsapp : CONFIG.direccion.startsWith("[");
      el.classList.toggle("completar", pendiente);
    }
  });

  // Horarios
  const tbody = document.getElementById("horarios-tbody");
  if (tbody) {
    tbody.replaceChildren(
      ...CONFIG.horarios.map((h) => {
        const fila = document.createElement("tr");
        const dia = document.createElement("th");
        dia.scope = "row";
        dia.textContent = h.dias;
        const horas = document.createElement("td");
        horas.textContent = h.horas;
        fila.append(dia, horas);
        return fila;
      })
    );
  }

  // Mapa
  const mapa = document.querySelector(".mapa");
  if (mapa && CONFIG.mapaEmbedUrl) {
    const iframe = document.createElement("iframe");
    iframe.src = CONFIG.mapaEmbedUrl;
    iframe.title = "Mapa de ubicación";
    iframe.loading = "lazy";
    iframe.style.cssText = "border:0;width:100%;height:100%;border-radius:14px;";
    mapa.replaceChildren(iframe);
    mapa.classList.remove("mapa--vacio");
  }
}
