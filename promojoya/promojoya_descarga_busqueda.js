(async () => {
  const baseUrl = 'https://pedidos.promojoya.net';
  const startUrl = `${baseUrl}/catalog.php/microsite/list/page/1/id/4/collection/369`;
  const productos = [];

  async function getDocument(url) {
    const respuesta = await fetch(url);
    const html = await respuesta.text();
    const parser = new DOMParser();
    return parser.parseFromString(html, 'text/html');
  }

  function getTotalPages(doc) {
    const lastPageLink = doc.querySelector('ul.pagination li a[aria-label="Last"]');
    if (lastPageLink) {
      const href = lastPageLink.getAttribute('href');
      const match = href.match(/page\/(\d+)\//);
      return match ? parseInt(match[1]) : 1;
    }

    // Fallback: usar números visibles si no hay botón "Last"
    const pages = [...doc.querySelectorAll('.pagination li a.page')];
    const pageNumbers = pages.map(a => parseInt(a.textContent)).filter(n => !isNaN(n));
    return Math.max(...pageNumbers, 1);
  }

  function scrapeItems(doc) {
    const items = doc.querySelectorAll('.product_item_div');

    items.forEach(item => {
      const link = item.querySelector('a')?.getAttribute('href') || '';
      const enlace = baseUrl + link;

      const bgStyle = item.querySelector('.item_img')?.getAttribute('style') || '';
      const imagenMatch = bgStyle.match(/url\('(.+?)'\)/);
      const imagen = imagenMatch ? baseUrl + imagenMatch[1] : '';

      const referencia = item.querySelector('.ref .item_price_list')?.innerText.trim() || '';
      const precio = item.querySelector('.price .item_price_list')?.innerText.trim() || '';

      productos.push({ enlace, imagen, referencia, precio });
    });
  }

  const firstDoc = await getDocument(startUrl);
  const totalPages = getTotalPages(firstDoc);
  console.log(`🔍 Total de páginas detectadas: ${totalPages}`);

  for (let page = 1; page <= totalPages; page++) {
    const url = `${baseUrl}/catalog.php/microsite/list/page/${page}/id/4/collection/369`;
    console.log(`⏳ Procesando página ${page}...`);
    const doc = page === 1 ? firstDoc : await getDocument(url);
    scrapeItems(doc);
    console.log(`✅ Página ${page} procesada`);
  }

  console.log("🎉 Scraping completado. Total productos:", productos.length);

  function createExcel(data, filename) {
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Productos");
    XLSX.writeFile(wb, filename);
  }

  function downloadExcel(data, filename = 'productos.xlsx') {
    if (typeof XLSX === 'undefined') {
      const script = document.createElement('script');
      script.src = 'https://cdn.sheetjs.com/xlsx-latest/package/dist/xlsx.full.min.js';
      script.onload = () => {
        createExcel(data, filename);
      };
      document.head.appendChild(script);
    } else {
      createExcel(data, filename);
    }
  }

  downloadExcel(productos);
})();
