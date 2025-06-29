(async () => {
  const baseUrl = 'https://pedidos.promojoya.net';

  const URL = {
    joyasAbalorios: 'https://pedidos.promojoya.net/catalog.php/microsite/list/collection/250/id/4',
    joyasAnillos: 'https://pedidos.promojoya.net/catalog.php/microsite/list/page/1/id/4/collection/296',
    joyasBroches: 'https://pedidos.promojoya.net/catalog.php/microsite/list/collection/301/id/4',
    joyasCadenas: 'https://pedidos.promojoya.net/catalog.php/microsite/list/collection/264/id/4',
    joyasColgantes: 'https://pedidos.promojoya.net/catalog.php/microsite/list/page/1/id/4/collection/302',
    joyasCordon: 'https://pedidos.promojoya.net/catalog.php/microsite/list/collection/276/id/4',
    joyasGargantillas: 'https://pedidos.promojoya.net/catalog.php/microsite/list/page/1/id/4/collection/229',
    joyasGemelos: 'https://pedidos.promojoya.net/catalog.php/microsite/list/collection/292/id/4',
    joyasJuegos: 'https://pedidos.promojoya.net/catalog.php/microsite/list/collection/305/id/4',
    joyasLlaveros: 'https://pedidos.promojoya.net/catalog.php/microsite/list/page/1/id/4/collection/230',
    joyasMarcapaginas: 'https://pedidos.promojoya.net/catalog.php/microsite/list/collection/306/id/4',
    joyasPendientes: 'https://pedidos.promojoya.net/catalog.php/microsite/list/page/1/id/4/collection/309',
    joyasPulseras: 'https://pedidos.promojoya.net/catalog.php/microsite/list/collection/321/id/4',
    joyasRelojes: 'https://pedidos.promojoya.net/catalog.php/microsite/list/collection/247/id/4',
    joyasTobilleras: 'https://pedidos.promojoya.net/catalog.php/microsite/list/collection/248/id/4',
    joyasFornituras: 'https://pedidos.promojoya.net/catalog.php/microsite/list/collection/977157/id/4',
    joyasPackImplantacion: 'https://pedidos.promojoya.net/catalog.php/microsite/list/collection/1086777/id/4',

    finDeCurso: 'https://pedidos.promojoya.net/catalog.php/microsite/list/collection/847886/id/4',
    rocioMartin: 'https://pedidos.promojoya.net/catalog.php/microsite/list/collection/999531/id/4',
    mrJewel: 'https://pedidos.promojoya.net/catalog.php/microsite/list/collection/1070005/id/4',
    earCuff: 'https://pedidos.promojoya.net/catalog.php/microsite/list/collection/568764/id/4',
    tobilleras: 'https://pedidos.promojoya.net/catalog.php/microsite/list/collection/847885/id/4',
    comunion: 'https://pedidos.promojoya.net/catalog.php/microsite/list/collection/4898/id/4',
    littleRainbow: 'https://pedidos.promojoya.net/catalog.php/microsite/list/collection/1095942/id/4',
    laVida: 'https://pedidos.promojoya.net/catalog.php/microsite/list/collection/648637/id/4',
    aTuLado: 'https://pedidos.promojoya.net/catalog.php/microsite/list/collection/803771/id/4',
    eresLoMas: 'https://pedidos.promojoya.net/catalog.php/microsite/list/collection/1058684/id/4',
    perla: 'https://pedidos.promojoya.net/catalog.php/microsite/list/collection/949791/id/4',
    ocean: 'https://pedidos.promojoya.net/catalog.php/microsite/list/collection/846925/id/4',
    topStyle: 'https://pedidos.promojoya.net/catalog.php/microsite/list/collection/949795/id/4',
    myPet: 'https://pedidos.promojoya.net/catalog.php/microsite/list/collection/707905/id/4',
    colores: 'https://pedidos.promojoya.net/catalog.php/microsite/list/collection/999533/id/4',
    coquette: 'https://pedidos.promojoya.net/catalog.php/microsite/list/collection/949793/id/4',
    party: 'https://pedidos.promojoya.net/catalog.php/microsite/list/collection/949796/id/4',
    historiasDeAmor: 'https://pedidos.promojoya.net/catalog.php/microsite/list/collection/240001/id/4',
    noMeOlvides: 'https://pedidos.promojoya.net/catalog.php/microsite/list/collection/648636/id/4',
    porBandera: 'https://pedidos.promojoya.net/catalog.php/microsite/list/collection/949789/id/4',
    colecciones: 'https://pedidos.promojoya.net/catalog.php/microsite/list/collection/17463/id/4',
    basicos: 'https://pedidos.promojoya.net/catalog.php/microsite/list/collection/12412/id/4',
    outlet: 'https://pedidos.promojoya.net/catalog.php/microsite/list/collection/829282/id/4'
  };

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
    const match = href.match(/page\/(\d+)(\/|$)/);
    return match ? parseInt(match[1]) : 1;
  }

  const pages = [...doc.querySelectorAll('.pagination li a.page')];
  const pageNumbers = pages.map(a => parseInt(a.textContent)).filter(n => !isNaN(n));
  return Math.max(...pageNumbers, 1);
}

  function scrapeItems(doc, productos, baseUrl) {
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

  function createExcel(data, filename) {
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Productos");
    XLSX.writeFile(wb, filename);
  }

  async function scrapeCollection(name, startUrl) {
    const productos = [];
    const firstDoc = await getDocument(startUrl);
    const totalPages = getTotalPages(firstDoc);
    console.log(`🔎 Colección: ${name} | Total páginas: ${totalPages}`);

    for (let page = 1; page <= totalPages; page++) {
      let url = startUrl;

      if (!url.includes(`/page/`)) {
        // Agregar paginación si no está en la URL
        url = url.replace(/(\/collection\/\d+\/id\/\d+)/, `/page/${page}$1`);
      } else {
        // Reemplazar página si ya hay
        url = url.replace(/page\/\d+/, `page/${page}`);
      }

      console.log(`⏳ ${name}: Procesando página ${page}...`);
      const doc = page === 1 ? firstDoc : await getDocument(url);
      scrapeItems(doc, productos, baseUrl);
      console.log(`✅ ${name}: Página ${page} procesada`);
    }

    console.log(`🎉 ${name}: Total productos: ${productos.length}`);
    createExcel(productos, `${name}.xlsx`);
  }

  if (typeof XLSX === 'undefined') {
    const script = document.createElement('script');
    script.src = 'https://cdn.sheetjs.com/xlsx-latest/package/dist/xlsx.full.min.js';
    script.onload = async () => {
      for (const [name, url] of Object.entries(URL)) {
        await scrapeCollection(name, url);
      }
    };
    document.head.appendChild(script);
  } else {
    for (const [name, url] of Object.entries(URL)) {
      await scrapeCollection(name, url);
    }
  }

})();
