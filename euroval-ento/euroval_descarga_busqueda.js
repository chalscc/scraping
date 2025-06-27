(async () => {
  const productos = [];
  const delay = ms => new Promise(res => setTimeout(res, ms));
  const botonSelector = 'button.beshop_searchbar_showmore_listing_button';

  while (true) {
    const boton = document.querySelector(botonSelector);
    if (!boton || boton.disabled || boton.style.display === 'none') {
      console.log('✅ No hay más botón "Ver más".');
      break;
    }

    console.log('➡️ Clic en botón "Ver más"...');
    boton.click();
    await delay(2000); // esperar a que cargue
  }

  // Paso 2: Scraping de productos
  const items = document.querySelectorAll('div.product_list.row article.product-miniature');

    items.forEach(item => {
    const enlace = item.querySelector('a.product-thumbnail')?.href || '';
    const nombre = item.querySelector('h3.product-name a')?.innerText.trim() || '';
    const nuevo = item.querySelector('li.flag_new')?.innerText.trim() || '';
    const stock = item.querySelector('.product-available')?.innerText.trim() || '';
    const fabricacion = item.querySelector('.product-unavailable')?.innerText.trim() || '';
    const precio = item.querySelector('.price')?.innerText.trim() || '';
    const imgEl = item.querySelector('a.product-thumbnail img');
    const imagen = imgEl?.src || '';
    const referencia = item.querySelector('#reference span')?.innerText.trim() || '';
    const categoria = item.querySelector('p.product-category')?.innerText.trim() || '';

    productos.push({ nombre, categoria, precio, imagen, enlace, stock, fabricacion, referencia, nuevo });
    });

  console.log(`🎉 Scraping completado. Total productos: ${productos.length}`);
  console.table(productos);

  // Paso 3: Descargar Excel
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
