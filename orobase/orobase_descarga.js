(async () => {

  const oro = [
    'https://orobase.es/articulos.php?m=100&p=1080&t=Anillas',
    'https://orobase.es/articulos.php?m=100&p=1220&t=Ballestillas',
    'https://orobase.es/articulos.php?m=100&p=1360&t=Bolas',
    'https://orobase.es/articulos.php?m=100&p=1550&t=Broches',
    'https://orobase.es/articulos.php?m=100&p=1545&t=Broches de bola',
    'https://orobase.es/articulos.php?m=100&p=1565&t=Broches de fundición',
    'https://orobase.es/articulos.php?m=100&p=1555&t=Broches de fundición con casquillas',
    'https://orobase.es/articulos.php?m=100&p=1570&t=Broches multihilos',
    'https://orobase.es/articulos.php?m=100&p=1050&t=Cadenas de seguridad',
    'https://orobase.es/articulos.php?m=100&p=1230&t=Casquillas',
    'https://orobase.es/articulos.php?m=100&p=1240&t=Casquillas con palillo',
    'https://orobase.es/articulos.php?m=100&p=1300&t=Casquillas para colgantes',
    'https://orobase.es/articulos.php?m=100&p=1340&t=Chatones',
    'https://orobase.es/articulos.php?m=100&p=1350&t=Chatones con palillo',
    'https://orobase.es/articulos.php?m=100&p=1060&t=Cierres ',
    'https://orobase.es/articulos.php?m=100&p=1275&t=Componentes para broches y alfileres',
    'https://orobase.es/articulos.php?m=100&p=1250&t=Crucetas con palillo',
    'https://orobase.es/articulos.php?m=100&p=1425&t=Donuts',
    'https://orobase.es/articulos.php?m=100&p=1210&t=Ganchos para pendientes',
    'https://orobase.es/articulos.php?m=100&p=1320&t=Garras',
    'https://orobase.es/articulos.php?m=100&p=1330&t=Garras con palillo',
    'https://orobase.es/articulos.php?m=100&p=1280&t=Gemelos',
    'https://orobase.es/articulos.php?m=100&p=1070&t=Llaveritos',
    'https://orobase.es/articulos.php?m=100&p=1480&t=Llaveros',
    'https://orobase.es/articulos.php?m=100&p=1352&t=Monturas para colgantes',
    'https://orobase.es/articulos.php?m=100&p=1353&t=Monturas para sortijas',
    'https://orobase.es/articulos.php?m=100&p=1030&t=Mosquetones',
    'https://orobase.es/articulos.php?m=100&p=1200&t=Omegas',
    'https://orobase.es/articulos.php?m=100&p=1260&t=Pendientes con palillo',
    'https://orobase.es/articulos.php?m=100&p=1530&t=Pins',
    'https://orobase.es/articulos.php?m=100&p=1130&t=Presiones',
    'https://orobase.es/articulos.php?m=100&p=1140&t=Presiones Alfa y Guardian',
    'https://orobase.es/articulos.php?m=100&p=1010&t=Reasas',
    'https://orobase.es/articulos.php?m=100&p=1015&t=Reasas marineras',
    'https://orobase.es/articulos.php?m=100&p=1400&t=Rondeles',
    'https://orobase.es/articulos.php?m=100&p=1190&t=Sistemas para pendientes',
    'https://orobase.es/articulos.php?m=100&p=1170&t=Terminales',
    'https://orobase.es/articulos.php?m=100&p=1150&t=Tuercas y palillos',
    'https://orobase.es/articulos.php?m=100&p=1355&t=Pulseras y pendientes riviere',
    'https://orobase.es/articulos.php?m=200&p=1080&t=Anillas',
    'https://orobase.es/articulos.php?m=200&p=1360&t=Bolas',
    'https://orobase.es/articulos.php?m=200&p=1050&t=Cadenas de seguridad',
    'https://orobase.es/articulos.php?m=200&p=1070&t=Llaveritos',
    'https://orobase.es/articulos.php?m=200&p=1030&t=Mosquetones',
    'https://orobase.es/articulos.php?m=200&p=1130&t=Presiones',
    'https://orobase.es/articulos.php?m=200&p=1010&t=Reasas'
  ]

  const galeriasGrarrasChatones = [
    'https://orobase.es/articulos.php?m=100&p=1320'
  ]

  const foniturasGoldFilled = [
    'https://orobase.es/articulos.php?m=400&p=1080&t=Anillas',
    'https://orobase.es/articulos.php?m=400&p=1220&t=Ballestillas',
    'https://orobase.es/articulos.php?m=400&p=1360&t=Bolas',
    'https://orobase.es/articulos.php?m=400&p=1050&t=Cadenas de seguridad',
    'https://orobase.es/articulos.php?m=400&p=1240&t=Casquillas con palillo',
    'https://orobase.es/articulos.php?m=400&p=1510&t=Chafas',
    'https://orobase.es/articulos.php?m=400&p=1425&t=Donuts',
    'https://orobase.es/articulos.php?m=400&p=1210&t=Ganchos para pendientes',
    'https://orobase.es/articulos.php?m=400&p=1520&t=Hilos',
    'https://orobase.es/articulos.php?m=400&p=1070&t=Llaveritos',
    'https://orobase.es/articulos.php?m=400&p=1030&t=Mosquetones',
    'https://orobase.es/articulos.php?m=400&p=1260&t=Pendientes con palillo',
    'https://orobase.es/articulos.php?m=400&p=1130&t=Presiones',
    'https://orobase.es/articulos.php?m=400&p=1010&t=Reasas',
    'https://orobase.es/articulos.php?m=400&p=1170&t=Terminales'
  ]

  const forniturasPlata = [
    'https://orobase.es/articulos.php?m=300&p=1630&t=Acortacollares',
    'https://orobase.es/articulos.php?m=300&p=1055&t=Alargadores',
    'https://orobase.es/articulos.php?m=300&p=1080&t=Anillas',
    'https://orobase.es/articulos.php?m=300&p=1100&t=Anillas magic ring',
    'https://orobase.es/articulos.php?m=300&p=1220&t=Ballestillas',
    'https://orobase.es/articulos.php?m=300&p=1360&t=Bolas',
    'https://orobase.es/articulos.php?m=300&p=1370&t=Bolas con anillas',
    'https://orobase.es/articulos.php?m=300&p=1550&t=Broches',
    'https://orobase.es/articulos.php?m=300&p=1557&t=Broches compuestos',
    'https://orobase.es/articulos.php?m=300&p=1545&t=Broches de bola',
    'https://orobase.es/articulos.php?m=300&p=1565&t=Broches de fundición',
    'https://orobase.es/articulos.php?m=300&p=1555&t=Broches de fundición con casquillas',
    'https://orobase.es/articulos.php?m=300&p=1570&t=Broches multihilos',
    'https://orobase.es/articulos.php?m=300&p=1580&t=Broches de imán',
    'https://orobase.es/articulos.php?m=300&p=1050&t=Cadenas de seguridad',
    'https://orobase.es/articulos.php?m=300&p=1430&t=Calabrotes',
    'https://orobase.es/articulos.php?m=300&p=1240&t=Casquillas con palillo',
    'https://orobase.es/articulos.php?m=300&p=1490&t=Cercos',
    'https://orobase.es/articulos.php?m=300&p=1510&t=Chafas',
    'https://orobase.es/articulos.php?m=300&p=1470&t=Chapitas',
    'https://orobase.es/articulos.php?m=300&p=1060&t=Cierres ',
    'https://orobase.es/articulos.php?m=300&p=1180&t=Cierres con terminales',
    'https://orobase.es/articulos.php?m=300&p=1420&t=Cilindros',
    'https://orobase.es/articulos.php?m=300&p=1275&t=Componentes para broches y alfileres',
    'https://orobase.es/articulos.php?m=300&p=1250&t=Crucetas con palillo',
    'https://orobase.es/articulos.php?m=300&p=1440&t=Cubrebolas',
    'https://orobase.es/articulos.php?m=300&p=1247&t=Discos con palillo',
    'https://orobase.es/articulos.php?m=300&p=1425&t=Donuts',
    'https://orobase.es/articulos.php?m=300&p=1390&t=Entrepiezas',
    'https://orobase.es/articulos.php?m=300&p=1265&t=Figuras con palillo',
    'https://orobase.es/articulos.php?m=300&p=1210&t=Ganchos para pendientes',
    'https://orobase.es/articulos.php?m=300&p=1280&t=Gemelos',
    'https://orobase.es/articulos.php?m=300&p=1520&t=Hilos',
    'https://orobase.es/articulos.php?m=300&p=1070&t=Llaveritos',
    'https://orobase.es/articulos.php?m=300&p=1480&t=Llaveros',
    'https://orobase.es/articulos.php?m=300&p=1030&t=Mosquetones',
    'https://orobase.es/articulos.php?m=300&p=1380&t=Olivinas',
    'https://orobase.es/articulos.php?m=300&p=1200&t=Omegas',
    'https://orobase.es/articulos.php?m=300&p=1160&t=Palillos',
    'https://orobase.es/articulos.php?m=300&p=1260&t=Pendientes con palillo',
    'https://orobase.es/articulos.php?m=300&p=1269&t=Pendientes de aro',
    'https://orobase.es/articulos.php?m=300&p=1268&t=Pendientes reversibles',
    'https://orobase.es/articulos.php?m=300&p=1530&t=Pins',
    'https://orobase.es/articulos.php?m=300&p=1130&t=Presiones',
    'https://orobase.es/articulos.php?m=300&p=1272&t=Pulseras',
    'https://orobase.es/articulos.php?m=300&p=1010&t=Reasas',
    'https://orobase.es/articulos.php?m=300&p=1015&t=Reasas marineras',
    'https://orobase.es/articulos.php?m=300&p=1400&t=Rondeles',
    'https://orobase.es/articulos.php?m=300&p=1263&t=Rondeles y cubos con palillo',
    'https://orobase.es/articulos.php?m=300&p=1270&t=Sortijas',
    'https://orobase.es/articulos.php?m=300&p=1290&t=Sujetacorbatas',
    'https://orobase.es/articulos.php?m=300&p=1170&t=Terminales',
    'https://orobase.es/articulos.php?m=300&p=1500&t=Tubos',
    'https://orobase.es/articulos.php?m=300&p=1150&t=Tuercas y palillos'
  ];
  const forniturasOtrosMateriales = [
    'https://orobase.es/articulos.php?m=500&p=1520&t=Hilos',
    'https://orobase.es/articulos.php?m=500&p=1530&t=Pins',
    'https://orobase.es/articulos.php?m=500&p=1130&t=Presiones',
    'https://orobase.es/articulos.php?m=500&p=2000&t=Productos de limpieza para joyería',
    'https://orobase.es/articulos.php?m=500&p=1540&t=Tapapuntas',
    'https://orobase.es/articulos.php?m=500&p=2000'
  ];

  const cadenasOro = [
    'https://orobase.es/articulos.php?m=700&p=500',
    'https://orobase.es/articulos.php?m=750&p=550',
    'https://orobase.es/articulos.php?m=650&p=300'
  ];

  const cadenasPlata = [
    'https://orobase.es/articulos.php?m=600&p=260',
    'https://orobase.es/articulos.php?m=600&p=263',
    'https://orobase.es/articulos.php?m=600&p=265',
    'https://orobase.es/articulos.php?m=600&p=267',
    'https://orobase.es/articulos.php?m=600&p=269',
    'https://orobase.es/articulos.php?m=600&p=270',
    'https://orobase.es/articulos.php?m=600&p=271',
    'https://orobase.es/articulos.php?m=600&p=272',
    'https://orobase.es/articulos.php?m=600&p=280',
    'https://orobase.es/articulos.php?m=600&p=290',
    'https://orobase.es/articulos.php?promociones=cadenas_plata'
  ];

  const urls = [
    ...oro,
    ...galeriasGrarrasChatones,
    ...foniturasGoldFilled,
    ...forniturasPlata,
    ...forniturasOtrosMateriales,
    ...cadenasOro,
    ...cadenasPlata
  ];

  async function scrapUrl(url) {
    console.log(`⏳ Cargando: ${url}`);
    const respuesta = await fetch(url);
    const html = await respuesta.text();

    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    const piezas = doc.querySelectorAll('div.lista_grupo div.lista_pieza');
    const productos = [];

    piezas.forEach((pieza) => {
      const enlaceEl = pieza.querySelector('div.lista_foto a');
      const enlace = enlaceEl ? new URL(enlaceEl.getAttribute('href'), location.origin).href : '';

      const imgEl = pieza.querySelector('div.lista_foto img');
      const imagen = imgEl ? new URL(imgEl.getAttribute('src'), location.origin).href : '';

      const textoEl = pieza.querySelector('div.lista_texto a.lista_ref_ref');
      const texto = textoEl?.innerText.trim() || '';

      const [refLine, descLine] = texto.split('\n');
      const referencia = refLine?.replace('Ref.:', '').trim() || '';
      const descripcion = descLine?.trim() || '';

      productos.push({
        referencia,
        descripcion,
        enlace,
        imagen
      });
    });

    console.log(`✅ Productos encontrados en ${url}: ${productos.length}`);

    // Crear nombre de archivo a partir de la URL
    const urlObj = new URL(url);
    const nombreCategoria = urlObj.searchParams.get('t') || 'categoria';
    const filename = `productos_${nombreCategoria.replace(/[^\w]/g, '_')}.xlsx`;

    createExcel(productos, filename);
  }

  function createExcel(data, filename) {
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Productos");
    XLSX.writeFile(wb, filename);
    console.log(`✅ Archivo Excel generado: ${filename}`);
  }

  function loadSheetJs(callback) {
    if (typeof XLSX === 'undefined') {
      const script = document.createElement('script');
      script.src = 'https://cdn.sheetjs.com/xlsx-latest/package/dist/xlsx.full.min.js';
      script.onload = callback;
      document.head.appendChild(script);
    } else {
      callback();
    }
  }

  loadSheetJs(async () => {
    for (const url of urls) {
      await scrapUrl(url);
    }

    console.log("🎉 Scraping completado. Todos los Excels generados.");
  });
})();
