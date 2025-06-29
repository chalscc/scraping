(async () => {
  console.log("⚡ Empezando scroll rápido para cargar TODOS los productos...");

  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  const countProducts = () => document.querySelectorAll("div.products-wrapper div.item-box").length;

  let lastCount = 0;
  let currentCount = countProducts();

  while (true) {
    window.scrollTo(0, document.body.scrollHeight);
    console.log("🔽 Scroll rápido...");

    await sleep(500);

    let tries = 10;
    while (tries > 0) {
      const loaderVisible = document.querySelector(".ajax-products-busy")?.offsetParent !== null;
      if (!loaderVisible) break;
      await sleep(300);
      tries--;
    }

    currentCount = countProducts();
    console.log(`📦 Productos cargados: ${currentCount}`);

    if (currentCount === lastCount) {
      console.log("✅ Ya no se cargan más productos. Scroll terminado.");
      break;
    }

    lastCount = currentCount;

    await sleep(200);
  }

  console.log("✅ Extrayendo datos de productos...");

  const productos = [];
  const items = document.querySelectorAll("div.products-wrapper div.item-box");

  items.forEach((item) => {
    const enlaceEl = item.querySelector("h2.product-title a");
    const nombre = enlaceEl?.innerText.trim() || "";
    const enlace = enlaceEl ? new URL(enlaceEl.getAttribute("href"), location.origin).href : "";

    const imgEl = item.querySelector(".picture img");
    const imagen = imgEl?.getAttribute("data-lazyloadsrc") || imgEl?.getAttribute("src") || "";

    const precio = item.querySelector(".prices .price")?.innerText.trim() || "";
    const referencia = item.querySelector(".sku")?.innerText.trim() || "";
    const descripcion = item.querySelector(".description")?.innerText.trim() || "";

    productos.push({ referencia, nombre, precio, descripcion, enlace, imagen });
  });

  console.log(`🎉 Productos encontrados: ${productos.length}`);
  console.table(productos);

  function createAndDownloadExcel(data, filename = "productos_kirman.xlsx") {
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Productos");
    XLSX.writeFile(wb, filename);
    console.log("✅ Archivo Excel generado y descargado.");
  }

  if (typeof XLSX === "undefined") {
    const script = document.createElement("script");
    script.src = "https://cdn.sheetjs.com/xlsx-latest/package/dist/xlsx.full.min.js";
    script.onload = () => createAndDownloadExcel(productos);
    document.head.appendChild(script);
  } else {
    createAndDownloadExcel(productos);
  }
})();
