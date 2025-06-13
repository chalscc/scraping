(() => {
  const form = document.querySelector('form#id_beshop_searchbar_form');
  if (!form) {
    console.error('❌ Formulario no encontrado.');
    return;
  }

  const input = form.querySelector('input[name="beshop_searchinput"]');
  const select = form.querySelector('select[name="beshop_searchtype"]');

  const inputVal = input?.value?.trim();
  const selectVal = select?.value;

  if (!inputVal) {
    console.warn('⚠️ El campo de búsqueda está vacío.');
    return;
  }

  const action = form.getAttribute('action');
  const params = new URLSearchParams({
    beshop_searchtype: selectVal || '1',
    beshop_searchinput: inputVal,
    beshop_searchbar_form: ''
  });

  const fullUrl = `${action}?${params.toString()}`;
  console.log(`🔁 Redirigiendo a: ${fullUrl}`);
  window.location.href = fullUrl;
})();
