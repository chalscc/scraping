(async () => {
  const categoryUrls = [
    "https://www.nowley.com/es/55-colecciones",
    "https://www.nowley.com/es/144-smart",
    "https://www.nowley.com/es/167-jewelry",
  ];

  // Extraer nombre de categoría desde URL para el nombre del archivo
  function getCategoryName(url) {
    const match = url.match(/\/(\d+)-([\w-]+)/);
    return match ? match[2] : "categoria";
  }

  async function scrapCategory(url) {
    const productos = [];
    let page = 1;
    let totalPages = 1;

    // Función para armar URL con paginación
    const buildPageUrl = (base, page) => (page > 1 ? `${base}#/page-${page}` : base);

    // Obtener total de páginas en la primera carga
    async function getTotalPages(doc) {
      const pages = [...doc.querySelectorAll("ul.pagination li a span")]
        .map((el) => parseInt(el.textContent))
        .filter((n) => !isNaN(n));
      return pages.length ? Math.max(...pages) : 1;
    }

    async function fetchPage(pageUrl) {
      const response = await fetch(pageUrl);
      const html = await response.text();
      return new DOMParser().parseFromString(html, "text/html");
    }

    async function scrapeFromDoc(doc) {
      const items = doc.querySelectorAll("ul.product_list li.ajax_block_product");
      items.forEach((item) => {
        const nombre = item.querySelector(".product-name")?.textContent.trim() || "";
        const enlace = item.querySelector(".product_img_link")?.href || "";
        const imagen = item.querySelector(".product_img_link img")?.src || "";
        const precio = item.querySelector(".price")?.textContent.trim() || "";
        const disponibilidad = item.querySelector(".available-now")?.textContent.trim() || "";
        const idMatch = enlace.match(/(\d+)-[\w-]+\.html/);
        const id = idMatch ? idMatch[1] : "";

        productos.push({ id, nombre, precio, enlace, imagen, disponibilidad });
      });
    }

    // Procesar primera página
    const firstUrl = buildPageUrl(url, 1);
    console.log(`🔎 Procesando categoría: ${url} (página 1)`);
    const firstDoc = await fetchPage(firstUrl);
    await scrapeFromDoc(firstDoc);
    totalPages = await getTotalPages(firstDoc);

    // Resto de páginas
    for (let p = 2; p <= totalPages; p++) {
      const pageUrl = buildPageUrl(url, p);
      console.log(`⏳ Página ${p} de ${totalPages} en ${url}`);
      const doc = await fetchPage(pageUrl);
      await scrapeFromDoc(doc);
    }

    console.log(`✅ Finalizada categoría ${url}. Total productos: ${productos.length}`);
    return productos;
  }

  // Función para crear y descargar Excel
  function createAndDownloadExcel(data, filename) {
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Productos");
    XLSX.writeFile(wb, filename);
  }

  // Cargar SheetJS (si no está ya cargado)
  async function loadSheetJS() {
    if (typeof XLSX === "undefined") {
      return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = "https://cdn.sheetjs.com/xlsx-latest/package/dist/xlsx.full.min.js";
        script.onload = resolve;
        document.head.appendChild(script);
      });
    }
  }

  await loadSheetJS();

  // Recorrer todas las categorías
  for (const url of categoryUrls) {
    const productos = await scrapCategory(url);
    const catName = getCategoryName(url);
    const filename = `productos_${catName}.xlsx`;
    createAndDownloadExcel(productos, filename);
  }

  console.log("🎉 Todos los Excel generados y descargados.");
})();
