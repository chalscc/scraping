(() => {
  const tabla = document.querySelector('#tabla_busqueda');
  if (!tabla) {
    console.error('❌ No se encontró la tabla con id "tabla_busqueda".');
    return;
  }

  const rows = tabla.querySelectorAll('tr');
  const productos = [];

  // Saltar header
  rows.forEach((row, index) => {
    if (index === 0) return;

    const cells = row.querySelectorAll('td');

    const imgEl = cells[0].querySelector('img');
    const foto = imgEl ? new URL(imgEl.getAttribute('src'), location.origin).href : '';

    const metal = cells[1]?.innerText.trim() || '';
    const producto = cells[2]?.innerText.trim() || '';
    const refDesc = cells[3]?.innerText.trim() || '';

    const enlaceEl = cells[3]?.querySelector('a');
    const enlace = enlaceEl ? new URL(enlaceEl.getAttribute('href'), location.origin).href : '';

    productos.push({
      foto,
      metal,
      producto,
      referenciaDescripcion: refDesc,
      enlace
    });
  });

  console.log(`🎉 Productos encontrados: ${productos.length}`);
  console.table(productos);

  // Función para crear y descargar Excel
  function createAndDownloadExcel(data, filename = "productos_orobase.xlsx") {
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
