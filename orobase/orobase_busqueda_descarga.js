(() => {
  const tabla = document.querySelector('#tabla_busqueda');
  if (!tabla) {
    console.error('❌ No se encontró la tabla con id "tabla_busqueda".');
    return;
  }

  const rows = tabla.querySelectorAll('tr');
  const productos = [];

  rows.forEach((row, index) => {
    if (index === 0) return; // saltar cabecera

    const cells = row.querySelectorAll('td');
    if (cells.length < 4) return;

    // Foto
    const imgEl = cells[0].querySelector('img');
    const foto = imgEl ? new URL(imgEl.getAttribute('src'), location.origin).href : '';

    // Metal y producto
    const metal = cells[1]?.innerText.trim() || '';
    const producto = cells[2]?.innerText.trim() || '';

    // Celda "Referencia - Descripción"
    const refCell = cells[3];
    const enlaceEl = refCell.querySelector('a');
    const enlace = enlaceEl ? new URL(enlaceEl.getAttribute('href'), location.origin).href : '';

    // Referencia (preferir texto del <a>, si no usar query ?ref= o ?buscar=)
    let referencia = (enlaceEl?.textContent || '').trim();
    if (!referencia && enlace) {
      try {
        const u = new URL(enlace, location.origin);
        referencia = u.searchParams.get('ref') || u.searchParams.get('buscar') || '';
        referencia = (referencia || '').trim();
      } catch {}
    }

    // Descripción: tomar todo el texto del <td>, quitar la referencia y el separador
    let descripcion = refCell.innerText.replace(/\s+/g, ' ').trim(); // normaliza espacios
    if (referencia) {
      const i = descripcion.indexOf(referencia);
      if (i >= 0) descripcion = descripcion.slice(i + referencia.length).trim();
    }
    // Quitar separadores iniciales como " - ", "– ", "— ", ": "
    descripcion = descripcion.replace(/^[-–—:]\s*/, '');

    productos.push({
      foto,
      metal,
      producto,
      referencia,
      descripcion,
      enlace
    });
  });

  console.log(`🎉 Productos encontrados: ${productos.length}`);
  console.table(productos);

  // Excel
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
