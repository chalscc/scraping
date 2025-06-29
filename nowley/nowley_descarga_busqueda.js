(async () => {
  const productos = [];

  // Obtener la URL base (sin paginación hash)
  const baseUrl = location.href.split("#")[0];

  // Construir URL con hash para cada página
  const buildPageUrl = (page) => (page > 1 ? `${baseUrl}#/page-${page}` : baseUrl);

  // Obtener total de páginas desde un documento
  const getTotalPages = (doc) => {
    const pages = [...doc.querySelectorAll("ul.pagination li a span")]
      .map((el) => parseInt(el.textContent))
      .filter((n) => !isNaN(n));
    return pages.length ? Math.max(...pages) : 1;
  };

  // Descargar y parsear página
  async function fetchPage(url) {
    const response = await fetch(url);
    const html = await response.text();
    return new DOMParser().parseFromString(html, "text/html");
  }

  // Extraer productos de documento
  function scrapeFromDoc(doc) {
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

  // Procesar primera página para ver total
  console.log(`🔎 Procesando categoría actual: ${baseUrl}`);
  const firstDoc = await fetchPage(buildPageUrl(1));
  scrapeFromDoc(firstDoc);
  const totalPages = getTotalPages(firstDoc);
  console.log(`📄 Total de páginas: ${totalPages}`);

  // Procesar resto de páginas
  for (let p = 2; p <= totalPages; p++) {
    const pageUrl = buildPageUrl(p);
    console.log(`⏳ Procesando página ${p}/${totalPages}`);
    const doc = await fetchPage(pageUrl);
    scrapeFromDoc(doc);
  }

  console.log("🎉 Scraping completado. Total productos:", productos.length);
  console.table(productos);

  // Descargar como Excel
  function createAndDownloadExcel(data, filename = "productos_categoria.xlsx") {
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Productos");
    XLSX.writeFile(wb, filename);
    console.log("✅ Archivo Excel generado y descargado.");
  }

  // Cargar SheetJS si no está cargado
  if (typeof XLSX === "undefined") {
    const script = document.createElement("script");
    script.src = "https://cdn.sheetjs.com/xlsx-latest/package/dist/xlsx.full.min.js";
    script.onload = () => createAndDownloadExcel(productos);
    document.head.appendChild(script);
  } else {
    createAndDownloadExcel(productos);
  }
})();
