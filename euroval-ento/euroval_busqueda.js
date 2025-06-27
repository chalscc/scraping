(() => {
  // Buscar input donde el usuario ha escrito algo
  const input = [...document.querySelectorAll('input[name="beshop_searchinput"]')]
    .find(el => el.offsetParent !== null && el.value?.trim());

  if (!input) {
    console.warn('❌ No se encontró input visible con valor.');
    return;
  }

  // Buscar formulario asociado
  const form = input.closest('form');
  if (!form) {
    console.error('❌ No se encontró formulario padre del input.');
    return;
  }

  // Buscar el select de tipo búsqueda
  const select = form.querySelector('select[name="beshop_searchtype"]');
  const inputVal = input.value.trim();
  const selectVal = select?.value || '1';

  console.log('📝 Valor ingresado:', inputVal);

  if (!inputVal) {
    console.warn('⚠️ El campo de búsqueda está vacío.');
    return;
  }

  const action = form.getAttribute('action') || form.action;

  const params = new URLSearchParams({
    beshop_searchtype: selectVal,
    beshop_searchinput: inputVal,
    beshop_searchbar_form: ''
  });

  const fullUrl = `${action}?${params.toString()}`;
  console.log(`🔁 Redirigiendo a: ${fullUrl}`);
  window.location.href = fullUrl;
})();
