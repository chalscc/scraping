(async () => {
  const productos = [];

  // Función para scrapear los productos actuales en DOM
  function scrapearPagina() {
    const items = document.querySelectorAll('div.product_list.row article.product-miniature');
    const productosPagina = [];
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
    return productosPagina;
  }

  // Función para esperar que aparezcan productos (esperar carga)
  function esperarCargaProductos(timeout = 10000) {
    return new Promise((resolve, reject) => {
      const start = Date.now();
      const check = () => {
        const productosActuales = document.querySelectorAll('div.product_list.row article.product-miniature').length;
        if (productosActuales > 0) {
          resolve();
        } else if (Date.now() - start > timeout) {
          reject(new Error('Timeout esperando productos'));
        } else {
          setTimeout(check, 500);
        }
      };
      check();
    });
  }

  // Obtener número máximo de páginas desde el DOM
  const paginacionElems = document.querySelectorAll('.beshop_filters_goTo');
  let totalPaginas = 1;
  paginacionElems.forEach(el => {
    const pageNum = parseInt(el.getAttribute('page'));
    if (!isNaN(pageNum) && pageNum > totalPaginas) totalPaginas = pageNum;
  });

  console.log(`Total páginas detectadas: ${totalPaginas}`);

  // Scrapear primera página
  await esperarCargaProductos();
  productos.push(...scrapearPagina());

  // Función para hacer click en siguiente página mediante el botón o elemento
  async function irAPagina(numPagina) {
    // Buscamos botón o div que tenga atributo page=numPagina
    const botonPagina = document.querySelector(`.beshop_filters_goTo[page="${numPagina}"]`);
    if (botonPagina) {
      botonPagina.click();
    }

    // Esperar que cambien los productos
    await esperarCargaProductos();

    // Pequeño delay extra para asegurar carga
    await new Promise(r => setTimeout(r, 1000));
  }

  // Iterar todas las páginas siguientes y scrapear
  for (let p = 2; p <= totalPaginas; p++) {
    console.log(`Cargando página ${p}...`);
    await irAPagina(p);
    productos.push(...scrapearPagina());
  }

  console.log(`🎉 Scraping completado. Total productos: ${productos.length}`);
  console.table(productos);

  // Descargar Excel (igual que antes)
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
