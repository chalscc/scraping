(() => {
  const searchInput = document.querySelector('#search_input');
  const searchButton = document.querySelector('#search_btn');

  if (!searchInput || !searchButton) {
    console.error('❌ Elementos del formulario no encontrados.');
    return;
  }

  const inputVal = searchInput.value.trim();
  if (!inputVal) {
    console.warn('⚠️ El campo de búsqueda está vacío.');
    return;
  }

  // Ejecutar la función ya definida en la página para lanzar la búsqueda
  if (typeof clickSearch === 'function') {
    console.log(`🔍 Buscando: ${inputVal}`);
    clickSearch();
  } else {
    console.error('❌ La función clickSearch no está definida en el contexto.');
  }
})();
