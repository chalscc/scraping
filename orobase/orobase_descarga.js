(async () => {

  const toSameOrigin = (u) => {
    const x = new URL(u);
    x.protocol = location.protocol;
    x.host = location.host;
    return x.toString();
  };

  const normalizeAll = (arr) => arr.map(toSameOrigin);

  const oro = normalizeAll([
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
  ])

  const galeriasGrarrasChatones = normalizeAll([
    'https://orobase.es/articulos.php?m=100&p=1320'
  ])

  const foniturasGoldFilled = normalizeAll([
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
  ])

  const forniturasPlata = normalizeAll([
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
  ]);
  const forniturasOtrosMateriales = normalizeAll([
    'https://orobase.es/articulos.php?m=500&p=1520&t=Hilos',
    'https://orobase.es/articulos.php?m=500&p=1530&t=Pins',
    'https://orobase.es/articulos.php?m=500&p=1130&t=Presiones',
    'https://orobase.es/articulos.php?m=500&p=2000&t=Productos de limpieza para joyería',
    'https://orobase.es/articulos.php?m=500&p=1540&t=Tapapuntas',
    'https://orobase.es/articulos.php?m=500&p=2000'
  ]);

  const cadenasOro = normalizeAll([
    'https://orobase.es/articulos.php?m=700&p=500',
    'https://orobase.es/articulos.php?m=750&p=550',
    'https://orobase.es/articulos.php?m=650&p=300'
  ]);

  const cadenasPlata = normalizeAll([
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
  ]);

  const urls = [
    ...oro,
    ...galeriasGrarrasChatones,
    ...foniturasGoldFilled,
    ...forniturasPlata,
    ...forniturasOtrosMateriales,
    ...cadenasOro,
    ...cadenasPlata
  ];

  const SLEEP_MS_BETWEEN_DETAIL = 150; // pequeña pausa para no saturar

  const text = (el) => (el ? el.textContent.trim() : '').trim();
  const html = (el) => (el ? el.innerHTML : '');
  const clean = (s) => (s || '').replace(/\s+/g, ' ').trim();
  const cleanNumber = (s) => {
    if (!s) return '';
    // Normaliza "6,145" -> "6.145" y quita separadores de miles estilo europeo
    const t = s.replace(/\./g, '').replace(',', '.').replace(/[^\d.]/g, '');
    return t;
  };

  const sleep = (ms) => new Promise(r => setTimeout(r, ms));

  async function fetchDoc(url) {
    const resp = await fetch(url, { credentials: 'same-origin' });
    const raw = await resp.text();
    const parser = new DOMParser();
    return parser.parseFromString(raw, 'text/html');
  }

  async function extraerPreciosDesdeFicha(detalleUrl) {
    const doc = await fetchDoc(detalleUrl);
    const tabla = doc.querySelector('#tabla_ref_datos');
    const precios = [];
    if (!tabla) return precios;

    const filas = Array.from(tabla.querySelectorAll('tr'));
    // Saltar la cabecera (th) y el último bloque de botones
    for (const tr of filas) {
      const tds = Array.from(tr.querySelectorAll('td.borde'));
      if (tds.length >= 2) {
        // La estructura esperada: [Unidades, Precio, (Cantidad rowspan), Importe]
        const unidadesTd = tds[0];
        const precioTd = tds[1];

        const unidades = clean(unidadesTd ? unidadesTd.textContent.replace(/\(.*?\)/g, '') : '');
        const precioStr = clean(precioTd ? precioTd.textContent : '');
        if (unidades && precioStr) {
          precios.push({
            tipoPrecio: 'tramo',
            unidades,
            precio: cleanNumber(precioStr)
          });
        }
      }
    }
    return precios;
  }

  function extraerPreciosDesdeListado(pieza) {
    // Caso 1: precio por gramo dentro de un span (nota: hay un typo 'clas' a veces)
    const textoNodo = pieza.querySelector('.lista_texto span, .lista_texto .lista_ref_ref, .lista_texto');
    const fullText = clean(text(textoNodo));

    const precios = [];

    // Detecta "…: 91,87 €/gramo"
    const mGramo = fullText.match(/([\d\.,]+)\s*€\s*\/\s*gramo/i);
    if (mGramo) {
      precios.push({
        tipoPrecio: 'precio_por_gramo',
        unidades: '€/gramo',
        precio: cleanNumber(mGramo[1])
      });
    }

    // Caso 2: variantes con enlaces: "42 cm 79,93 € 0,87 g"
    const variantes = pieza.querySelectorAll('.lista_texto a');
    variantes.forEach(a => {
      const t = clean(text(a));
      // Captura: [variante] [precio €] [peso opcional]
      // p.ej. "42 cm 79,93 € 0,87 g"
      const m = t.match(/^(.*?)\s+([\d\.,]+)\s*€(?:\s+([\d\.,]+)\s*g)?/i);
      if (m) {
        precios.push({
          tipoPrecio: 'variante',
          variante: clean(m[1]),
          precio: cleanNumber(m[2]),
          pesoGramos: m[3] ? cleanNumber(m[3]) : ''
        });
      }
    });

    return precios;
  }

async function scrapUrl(url) {
  console.log(`⏳ Cargando: ${url}`);
  const doc = await fetchDoc(url);
  const piezas = doc.querySelectorAll('.lista_pieza'); 
  const filasExcel = [];

  for (const pieza of Array.from(piezas)) {
    // Imagen
    const imgEl = pieza.querySelector('.lista_foto img');
    const imagen = imgEl ? new URL(imgEl.getAttribute('src'), url).href : '';

    // Enlace y texto
    const enlaceEl = pieza.querySelector('.lista_texto a.lista_ref_ref') || pieza.querySelector('.lista_texto a[href*="referencia.php"]');
    const enlace = enlaceEl ? new URL(enlaceEl.getAttribute('href'), url).href : '';

    // Referencia y descripción (usando innerHTML y <br>)
    let referencia = '';
    let descripcion = '';
    if (enlaceEl && /lista_ref_ref/.test(enlaceEl.className || '')) {
      const [refHtml = '', descHtml = ''] = html(enlaceEl).split(/<br\s*\/?>/i);
      const refLine = clean(refHtml.replace(/<[^>]*>/g, ''));
      const descLine = clean(descHtml.replace(/<[^>]*>/g, ''));
      referencia = clean(refLine.replace(/Ref\.\s*:/i, ''));
      descripcion = descLine;
    } else {
      // Fallback: intentar capturar ref/desc del bloque de texto
      const txtBlock = pieza.querySelector('.lista_texto') || pieza;
      const raw = html(txtBlock);
      if (raw) {
        const [refHtml = '', descHtml = ''] = raw.split(/<br\s*\/?>/i);
        const refLine = clean(refHtml.replace(/<[^>]*>/g, ''));
        const descLine = clean(descHtml.replace(/<[^>]*>/g, ''));
        const mRef = refLine.match(/Ref\.\s*:\s*([^\s<]+)/i);
        if (mRef) referencia = clean(mRef[1]);
        if (descLine) descripcion = descLine;
      }
    }

    // Fallback con ALT si hiciera falta
    if (!descripcion && imgEl?.alt) {
      const m = imgEl.alt.match(/Ref\.\s*:\s*([^\s-]+)\s*[-–—]\s*(.+)/i);
      if (m) {
        if (!referencia) referencia = clean(m[1]);
        descripcion = clean(m[2]);
      }
    }

    // Detectar si hay "VER PRECIOS"
    const hayVerPrecios = !!Array.from(pieza.querySelectorAll('a')).find(a => /ver\s*precios/i.test(a.textContent || ''));

    let precios = [];
    if (hayVerPrecios && enlace) {
      try {
        await sleep(SLEEP_MS_BETWEEN_DETAIL);
        precios = await extraerPreciosDesdeFicha(enlace);
      } catch (e) {
        console.warn('No se pudieron extraer precios de la ficha:', enlace, e);
      }
    } else {
      // Intentar leer precios directamente del listado (precio por gramo / variantes)
      precios = extraerPreciosDesdeListado(pieza);
    }

    if (precios.length === 0) {
      // Sin precios: fila básica
      filasExcel.push({
        referencia,
        descripcion,
        enlace,
        imagen,
        tipoPrecio: '',
        unidades: '',
        precio: '',
        variante: '',
        pesoGramos: '',
        tramo: ''
      });
    } else {
      // Numeración incremental por producto para tramos y variantes
      let tramoN = 0;
      precios.forEach(p => {
        const esTramo = (p.tipoPrecio || '').toLowerCase() === 'tramo';
        const esVariante = (p.tipoPrecio || '').toLowerCase() === 'variante';
        if (esTramo || esVariante) tramoN += 1;

        filasExcel.push({
          referencia,
          descripcion,
          enlace,
          imagen,
          tipoPrecio: p.tipoPrecio || '',
          unidades: p.unidades || '',
          precio: p.precio || '',
          variante: p.variante || '',
          pesoGramos: p.pesoGramos || '',
          tramo: (esTramo || esVariante) ? tramoN : ''
        });
      });
    }
  }

  console.log(`✅ Filas generadas en ${url}: ${filasExcel.length}`);
  console.log(filasExcel);

  const urlObj = new URL(url);
  const nombreCategoria = urlObj.searchParams.get('t') || 'categoria';
  const filename = `productos_${nombreCategoria.replace(/[^\w]/g, '_')}.xlsx`;

  crearExcel(filasExcel, filename);
}

  function crearExcel(datos, nombreArchivo) {
    const ws = XLSX.utils.json_to_sheet(datos);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Productos");
    XLSX.writeFile(wb, nombreArchivo);
    console.log(`📦 Excel creado: ${nombreArchivo}`);
  }

  function cargarSheetJs(callback) {
    if (typeof XLSX === 'undefined') {
      const script = document.createElement('script');
      script.src = 'https://cdn.sheetjs.com/xlsx-latest/package/dist/xlsx.full.min.js';
      script.onload = callback;
      document.head.appendChild(script);
    } else {
      callback();
    }
  }

  // Ejecutar
  cargarSheetJs(async () => {
    for (const url of urls) {
      await scrapUrl(url);
    }
    console.log("🎉 Scraping terminado. Excels creados.");
  });
})();
