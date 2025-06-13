(async () => {
  const urls = [
    'https://www.mkplata.es/novedades',
    // 'https://www.mkplata.es/10032-metal',
    // 'https://www.mkplata.es/20-plata'
  ];

  const productos = [];

  async function scrapUrl(url) {
    let page = 1;
    let hasNextPage = true;

    while (hasNextPage) {
      console.log(`⏳ Cargando página ${page} de ${url}...`);
      const respuesta = await fetch(`${url}?page=${page}`);
      const html = await respuesta.text();

      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');

      const items = doc.querySelectorAll('.product_list_item');

      if (items.length === 0) {
        console.log(`❌ No se encontraron más productos en la página ${page} de ${url}. Finalizando esta URL.`);
        hasNextPage = false;
        break;
      }

      items.forEach((item) => {
        const enlace = item.querySelector('a')?.href || '';
        const nombre = item.querySelector('a')?.title || '';
        const stock = item.querySelector('.product-available')?.innerText.trim() || 'SIN DATOS';
        const precio = item.querySelector('.price')?.innerText.trim() || '';

        const imgEl = item.querySelector('img.front-image');
        const imagen = imgEl?.getAttribute('data-src') || imgEl?.src || '';

        const referencia = item.querySelector('.reference')?.innerText.trim() || '';

        productos.push({ nombre, precio, imagen, enlace, stock, referencia });
      });

      console.log(`✅ Página ${page} de ${url} procesada: ${items.length} productos.`);
      page++;
    }
  }

  for (const url of urls) {
    await scrapUrl(url);
  }

  console.log("🎉 Scraping completado. Total productos:", productos.length);
  console.log(JSON.stringify(productos, null, 2));
})();
