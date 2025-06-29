(async () => {
  const productos = [];

  const baseUrl = "https://www.nowley.com";
  const searchInput = document.querySelector("#search_query_top");
  const searchTerm = searchInput?.value?.trim();

  if (!searchTerm) {
    console.warn("❌ No se encontró término de búsqueda en el input.");
    return;
  }

  console.log(`🔎 Buscando productos con: "${searchTerm}"`);

  const buildSearchUrl = (page = 1) => {
    const params = new URLSearchParams({
      controller: "search",
      orderby: "position",
      orderway: "desc",
      search_query: searchTerm,
      submit_search: "",
    });

    if (page > 1) params.append("p", page);

    return `${baseUrl}/es/buscar?${params.toString()}`;
  };

  const getTotalPages = (doc) => {
    const pages = [...doc.querySelectorAll("ul.pagination li a span")]
      .map((el) => parseInt(el.textContent))
      .filter((n) => !isNaN(n));
    return pages.length ? Math.max(...pages) : 1;
  };

  async function fetchPage(url) {
    const response = await fetch(url);
    const html = await response.text();
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc;
  }

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

  const firstUrl = buildSearchUrl(1);
  const firstDoc = await fetchPage(firstUrl);
  scrapeFromDoc(firstDoc);
  const totalPages = getTotalPages(firstDoc);

  console.log(`📄 Total de páginas: ${totalPages}`);

  for (let p = 2; p <= totalPages; p++) {
    const pageUrl = buildSearchUrl(p);
    console.log(`⏳ Procesando página ${p}...`);
    const doc = await fetchPage(pageUrl);
    scrapeFromDoc(doc);
  }

  console.log("🎉 Scraping completado. Total productos:", productos.length);
  console.table(productos);

  // Descargar como Excel
  // Cargar SheetJS desde CDN
  const script = document.createElement("script");
  script.src = "https://cdn.sheetjs.com/xlsx-latest/package/dist/xlsx.full.min.js";
  script.onload = () => {
    const ws = XLSX.utils.json_to_sheet(productos);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Productos");

    const wbout = XLSX.write(wb, { bookType: "xlsx", type: "array" });

    const blob = new Blob([wbout], { type: "application/octet-stream" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `productos_${searchTerm}.xlsx`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    console.log("✅ Archivo Excel generado y descargado.");
  };
  document.body.appendChild(script);
})();
