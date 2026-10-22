// Escala cada vista previa (1280 px de ancho real) al tamaño de su miniatura.
(function () {
  const ANCHO_REAL = 1280;

  function escalar() {
    document.querySelectorAll(".version__vista").forEach((vista) => {
      const iframe = vista.querySelector("iframe");
      if (!iframe) return;
      const escala = vista.clientWidth / ANCHO_REAL;
      iframe.style.transform = `scale(${escala})`;
      iframe.style.height = `${vista.clientHeight / escala}px`;
    });
  }

  window.addEventListener("resize", escalar);
  document.addEventListener("DOMContentLoaded", escalar);
  escalar();
})();
