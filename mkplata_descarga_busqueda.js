(async () => {
  const productos = [];
  const delay = ms => new Promise(res => setTimeout(res, ms));
  const botonSelector = 'button.beshop_searchbar_showmore_listing_button.btn';

  while (true) {
    const boton = document.querySelector(botonSelector);

    if (!boton) {
      console.log('No hay más botón "Mostrar más". Finalizando clicks.');
      break;
    }

    console.log('Click en "Mostrar más"...');
    boton.click();
    await delay(2000);  
  }

  const items = document.querySelectorAll('.product_list_item');

  items.forEach(item => {
    const enlace = item.querySelector('a')?.href || '';
    const nombre = item.querySelector('a')?.title || '';
    const stock = item.querySelector('.product-available')?.innerText.trim() || 'SIN DATOS';
    const precio = item.querySelector('.price')?.innerText.trim() || '';

    const imgEl = item.querySelector('img.front-image');
    const imagen = imgEl?.getAttribute('data-src') || imgEl?.src || '';

    const referencia = item.querySelector('.reference')?.innerText.trim() || '';

    productos.push({ nombre, precio, imagen, enlace, stock, referencia });
  });

  console.log(`🎉 Scraping completado. Total productos visibles: ${productos.length}`);

  function descargarExcel(data, filename = 'productos.xlsx') {
    if (typeof XLSX === 'undefined') {
      const script = document.createElement('script');
      script.src = 'https://cdn.sheetjs.com/xlsx-latest/package/dist/xlsx.full.min.js';
      script.onload = () => {
        crearYDescargarExcel(data, filename);
      };
      document.head.appendChild(script);
    } else {
      crearYDescargarExcel(data, filename);
    }
  }

  function crearYDescargarExcel(data, filename) {
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Productos");
    XLSX.writeFile(wb, filename);
  }

  descargarExcel(productos);
})();
