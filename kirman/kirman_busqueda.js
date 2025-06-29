(() => {
  const form = document.querySelector('form#small-search-box-form');
  if (!form) {
    console.error('❌ Formulario no encontrado.');
    return;
  }

  const input = form.querySelector('input[name="q"]');
  const inputVal = input?.value?.trim();

  if (!inputVal) {
    console.warn('⚠️ El campo de búsqueda está vacío.');
    return;
  }

  const fullUrl = `/filterSearch?q=${encodeURIComponent(inputVal)}`;
  console.log(`🔁 Redirigiendo a: ${fullUrl}`);
  window.location.href = fullUrl;
})();
