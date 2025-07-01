(async () => {
  const sleep = (ms) => new Promise(r => setTimeout(r, ms));

  const book = $("#mybook").data("wowBook");
  if (!book) {
    console.log("❌ No se encontró el libro.");
    return;
  }

  const totalPages = book.pages.length;
  console.log(`📖 Total de páginas: ${totalPages}`);

  const downloadedPages = new Set();

  for (let i = 0; i < totalPages; i += 2) {
    book.gotoPage(i);
    await sleep(2500); // deja cargar la animación y el lazy

    // Seleccionamos solo las visibles (display: block)
    const visiblePages = Array.from(document.querySelectorAll(".wowbook-page"))
      .filter(el => el.style.display === "block");

    for (const pageEl of visiblePages) {
      const content = pageEl.querySelector(".book-page.wowbook-page-content");
      if (!content) continue;

      const imageUrl = content.getAttribute("data-image");
      if (!imageUrl) continue;

      // Intentamos obtener el número de página
      let pageNum = content.querySelector(".wowbook-page-number")?.textContent.trim();
      if (!pageNum) {
        // fallback: usa el data-id
        pageNum = content.getAttribute("data-id");
      }
      if (!pageNum) {
        // fallback: índice
        pageNum = "unknown";
      }

      const filename = `pagina-${pageNum}.jpg`;

      // Evita descargar duplicados
      if (!downloadedPages.has(filename)) {
        await downloadImage(imageUrl, filename);
        downloadedPages.add(filename);
      }
    }
  }

  console.log("✅ ¡Descarga completa!");
})();

async function downloadImage(url, filename) {
  if (!url) {
    console.log(`⚠️ URL vacía para ${filename}`);
    return;
  }
  if (!url.startsWith("http")) {
    url = window.location.origin + url;
  }

  try {
    const response = await fetch(url);
    const blob = await response.blob();
    const blobUrl = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = blobUrl;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    URL.revokeObjectURL(blobUrl);

    console.log(`✅ Descargada: ${filename}`);
  } catch (error) {
    console.log(`❌ Error descargando ${filename}:`, error);
  }
}
