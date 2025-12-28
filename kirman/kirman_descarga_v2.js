(async () => {
  console.log("⚡ Empezando scroll rápido para cargar TODOS los productos...");
  
  // ============================================
  // FUNCIÓN PARA EXTRAER CATEGORÍA DE LA URL
  // ============================================
  function extraerCategoria() {
    const url = window.location.href;
    
    // Extraer la parte después de /tienda/
    const match = url.match(/\/tienda\/([^#?]+)/);
    
    if (!match) {
      return 'Sin categoría';
    }
    
    let categoria = match[1];
    
    // Decodificar URL encoding (ej: l%C3%ADquidos → líquidos)
    categoria = decodeURIComponent(categoria);
    
    // Reemplazar guiones por espacios
    categoria = categoria.replace(/-/g, ' ');
    
    // Capitalizar primera letra de cada palabra
    categoria = categoria
      .split(' ')
      .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase())
      .join(' ');
    
    return categoria;
  }
  
  const CATEGORIA = extraerCategoria();
  console.log(`📂 Categoría detectada: ${CATEGORIA}`);
  
  // ============================================
  // FUNCIONES AUXILIARES
  // ============================================
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const countProducts = () => document.querySelectorAll("div.products-wrapper div.item-box").length;
  
  // ============================================
  // INFINITE SCROLL
  // ============================================
  let lastCount = 0;
  let currentCount = countProducts();
  
  while (true) {
    window.scrollTo(0, document.body.scrollHeight);
    console.log("🔽 Scroll rápido...");
    await sleep(500);
    
    // Esperar a que termine de cargar
    let tries = 10;
    while (tries > 0) {
      const loaderVisible = document.querySelector(".ajax-products-busy")?.offsetParent !== null;
      if (!loaderVisible) break;
      await sleep(300);
      tries--;
    }
    
    currentCount = countProducts();
    console.log(`📦 Productos cargados: ${currentCount}`);
    
    // Si no se cargan más productos, terminar
    if (currentCount === lastCount) {
      console.log("✅ Ya no se cargan más productos. Scroll terminado.");
      break;
    }
    
    lastCount = currentCount;
    await sleep(200);
  }
  
  // ============================================
  // EXTRACCIÓN DE DATOS
  // ============================================
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
    
    productos.push({ 
      categoria: CATEGORIA,  // ✨ Nueva columna
      referencia, 
      nombre, 
      precio, 
      descripcion, 
      enlace, 
      imagen 
    });
  });
  
  console.log(`🎉 Productos encontrados: ${productos.length}`);
  console.table(productos);
  
  // ============================================
  // EXPORTAR A EXCEL
  // ============================================
  function createAndDownloadExcel(data, filename = "productos_kirman.xlsx") {
    const ws = XLSX.utils.json_to_sheet(data);
    
    // Ajustar ancho de columnas
    ws['!cols'] = [
      { wch: 25 },  // Categoría
      { wch: 20 },  // Referencia
      { wch: 50 },  // Nombre
      { wch: 15 },  // Precio
      { wch: 60 },  // Descripción
      { wch: 70 },  // Enlace
      { wch: 70 }   // Imagen
    ];
    
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Productos");
    
    const fecha = new Date().toISOString().split('T')[0];
    const nombreArchivo = `kirman_${CATEGORIA.toLowerCase().replace(/\s+/g, '_')}_${fecha}.xlsx`;
    
    XLSX.writeFile(wb, nombreArchivo);
    console.log(`✅ Archivo Excel generado: ${nombreArchivo}`);
  }
  
  if (typeof XLSX === "undefined") {
    const script = document.createElement("script");
    script.src = "https://cdn.sheetjs.com/xlsx-latest/package/dist/xlsx.full.min.js";
    script.onload = () => createAndDownloadExcel(productos);
    document.head.appendChild(script);
  } else {
    createAndDownloadExcel(productos);
  }
  
  // Hacer datos disponibles globalmente
  window.productosKirman = productos;
  console.log("\n💡 TIP: Los datos están disponibles en: window.productosKirman");
  
})();
