(() => {
  const input = document.querySelector('input#caja_busqueda');
  if (!input) {
    console.error('❌ Input de búsqueda no encontrado.');
    return;
  }

  const valor = input.value.trim();
  if (!valor) {
    console.warn('⚠️ El campo de búsqueda está vacío.');
    return;
  }

  const url = `https://orobase.es/buscador.php?valor=${encodeURIComponent(valor)}`;
  console.log(`🔁 Redirigiendo a: ${url}`);
  window.location.href = url;
})();
