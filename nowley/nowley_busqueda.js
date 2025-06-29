(() => {
  // Obtener el valor del input de búsqueda
  const searchInput = document.querySelector('#search_query_top');
  if (!searchInput) {
    console.error('❌ No se encontró el campo de búsqueda');
    return;
  }

  const searchTerm = searchInput.value.trim();

  if (!searchTerm) {
    console.warn('⚠️ El campo de búsqueda está vacío');
    return;
  }

  // Construir la URL de búsqueda
  const searchUrl = `https://www.nowley.com/es/buscar?controller=search&orderby=position&orderway=desc&search_query=${encodeURIComponent(searchTerm)}&submit_search=`;

  // Redirigir en la misma pestaña
  window.location.href = searchUrl;
})();
