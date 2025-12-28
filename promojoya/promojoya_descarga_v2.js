(async () => {
  const baseUrl = 'https://pedidos.promojoya.net';
  
  // Configuración
  const config = {
    delayBetweenPages: 1000, // 1 segundo entre páginas
    delayBetweenCollections: 2000, // 2 segundos entre colecciones
    maxRetries: 3
  };

  const colecciones = {
    // JOYAS - Principales
    joyasAbalorios: { url: '/catalog.php/microsite/list/collection/250/id/4', nombre: 'Joyas_Abalorios', categoria: 'Joyas - Abalorios' },
    joyasAnillos: { url: '/catalog.php/microsite/list/collection/296/id/4', nombre: 'Joyas_Anillos', categoria: 'Joyas - Anillos' },
    joyasBroches: { url: '/catalog.php/microsite/list/collection/301/id/4', nombre: 'Joyas_Broches', categoria: 'Joyas - Broches' },
    joyasCadenas: { url: '/catalog.php/microsite/list/collection/264/id/4', nombre: 'Joyas_Cadenas', categoria: 'Joyas - Cadenas' },
    joyasColgantes: { url: '/catalog.php/microsite/list/collection/302/id/4', nombre: 'Joyas_Colgantes', categoria: 'Joyas - Colgantes' },
    joyasCordon: { url: '/catalog.php/microsite/list/collection/276/id/4', nombre: 'Joyas_Cordon', categoria: 'Joyas - Cordón' },
    joyasGargantillas: { url: '/catalog.php/microsite/list/collection/229/id/4', nombre: 'Joyas_Gargantillas', categoria: 'Joyas - Gargantillas' },
    joyasGemelos: { url: '/catalog.php/microsite/list/collection/292/id/4', nombre: 'Joyas_Gemelos', categoria: 'Joyas - Gemelos' },
    joyasJuegos: { url: '/catalog.php/microsite/list/collection/305/id/4', nombre: 'Joyas_Juegos', categoria: 'Joyas - Juegos' },
    joyasLlaveros: { url: '/catalog.php/microsite/list/collection/230/id/4', nombre: 'Joyas_Llaveros', categoria: 'Joyas - Llaveros' },
    joyasMarcapaginas: { url: '/catalog.php/microsite/list/collection/306/id/4', nombre: 'Joyas_Marcapaginas', categoria: 'Joyas - Marcapáginas' },
    joyasPendientes: { url: '/catalog.php/microsite/list/collection/309/id/4', nombre: 'Joyas_Pendientes', categoria: 'Joyas - Pendientes' },
    joyasPulseras: { url: '/catalog.php/microsite/list/collection/321/id/4', nombre: 'Joyas_Pulseras', categoria: 'Joyas - Pulseras' },
    joyasRelojes: { url: '/catalog.php/microsite/list/collection/247/id/4', nombre: 'Joyas_Relojes', categoria: 'Joyas - Relojes' },
    joyasTobilleras: { url: '/catalog.php/microsite/list/collection/248/id/4', nombre: 'Joyas_Tobilleras', categoria: 'Joyas - Tobilleras' },
    joyasFornituras: { url: '/catalog.php/microsite/list/collection/977157/id/4', nombre: 'Joyas_Fornituras', categoria: 'Joyas - Fornituras' },
    
    // Marcas/Colecciones especiales
    rocioMartin: { url: '/catalog.php/microsite/list/collection/999531/id/4', nombre: 'Rocio_Martin', categoria: 'Rocío Martín' },
    mrJewel: { url: '/catalog.php/microsite/list/collection/1070005/id/4', nombre: 'Mr_Jewel', categoria: 'Mr. Jewel' },
    earCuff: { url: '/catalog.php/microsite/list/collection/568764/id/4', nombre: 'Ear_Cuff', categoria: 'Ear Cuff, Piercings y Trepadores' },
    comunion: { url: '/catalog.php/microsite/list/collection/4898/id/4', nombre: 'Comunion', categoria: 'Comunión' },
    littleRainbow: { url: '/catalog.php/microsite/list/collection/1095942/id/4', nombre: 'Little_Rainbow', categoria: 'Little Rainbow' },
    laVida: { url: '/catalog.php/microsite/list/collection/648637/id/4', nombre: 'La_Vida', categoria: 'La Vida' },
    aTuLado: { url: '/catalog.php/microsite/list/collection/803771/id/4', nombre: 'A_Tu_Lado', categoria: 'A Tu Lado' },
    eresLoMas: { url: '/catalog.php/microsite/list/collection/1058684/id/4', nombre: 'Eres_Lo_Mas', categoria: 'Eres Lo Más' },
    perla: { url: '/catalog.php/microsite/list/collection/949791/id/4', nombre: 'Perla', categoria: 'Perla' },
    ocean: { url: '/catalog.php/microsite/list/collection/846925/id/4', nombre: 'Ocean', categoria: 'Ocean' },
    topStyle: { url: '/catalog.php/microsite/list/collection/949795/id/4', nombre: 'Top_Style', categoria: 'Top Style' },
    myPet: { url: '/catalog.php/microsite/list/collection/707905/id/4', nombre: 'My_Pet', categoria: 'My Pet' },
    colores: { url: '/catalog.php/microsite/list/collection/999533/id/4', nombre: 'Colores', categoria: 'Colores' },
    coquette: { url: '/catalog.php/microsite/list/collection/949793/id/4', nombre: 'Coquette', categoria: 'Coquette' },
    party: { url: '/catalog.php/microsite/list/collection/949796/id/4', nombre: 'Party', categoria: 'Party' },
    historiasDeAmor: { url: '/catalog.php/microsite/list/collection/240001/id/4', nombre: 'Historias_De_Amor', categoria: 'Historias de Amor' },
    noMeOlvides: { url: '/catalog.php/microsite/list/collection/648636/id/4', nombre: 'No_Me_Olvides', categoria: 'Nomeolvides' },
    porBandera: { url: '/catalog.php/microsite/list/collection/949789/id/4', nombre: 'Por_Bandera', categoria: 'Por Bandera' },
    basicos: { url: '/catalog.php/microsite/list/collection/12412/id/4', nombre: 'Basicos', categoria: 'Básicos' },
    outlet: { url: '/catalog.php/microsite/list/collection/829282/id/4', nombre: 'Outlet', categoria: 'Outlet' }
  };

  // Función para esperar
  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  // Obtener documento HTML
  async function getDocument(url, retries = 0) {
    try {
      console.log(`📡 Fetching: ${url}`);
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      
      const html = await response.text();
      const parser = new DOMParser();
      return parser.parseFromString(html, 'text/html');
    } catch (error) {
      if (retries < config.maxRetries) {
        console.warn(`⚠️ Error fetching ${url}, retry ${retries + 1}/${config.maxRetries}`);
        await sleep(2000 * (retries + 1));
        return getDocument(url, retries + 1);
      }
      console.error(`❌ Failed to fetch ${url}:`, error);
      throw error;
    }
  }

  // Detectar total de páginas
  function getTotalPages(doc) {
    // Método 1: Buscar link "Last"
    const lastPageLink = doc.querySelector('ul.pagination li a[aria-label="Last"]');
    if (lastPageLink) {
      const href = lastPageLink.getAttribute('href');
      const match = href.match(/\/page\/(\d+)/);
      if (match) {
        return parseInt(match[1]);
      }
    }

    // Método 2: Buscar todos los números de página
    const pageLinks = doc.querySelectorAll('.pagination li a');
    let maxPage = 1;
    
    pageLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href) {
        const match = href.match(/\/page\/(\d+)/);
        if (match) {
          maxPage = Math.max(maxPage, parseInt(match[1]));
        }
      }
      
      const text = link.textContent.trim();
      const num = parseInt(text);
      if (!isNaN(num)) {
        maxPage = Math.max(maxPage, num);
      }
    });

    return maxPage;
  }

  // Construir URL de página
  function buildPageUrl(baseCollectionUrl, pageNum) {
    // Si la URL ya tiene /page/, reemplazarlo
    if (baseCollectionUrl.includes('/page/')) {
      return baseCollectionUrl.replace(/\/page\/\d+/, `/page/${pageNum}`);
    }
    
    // Agregar /page/ antes de /collection/
    return baseCollectionUrl.replace(
      /\/collection\//,
      `/page/${pageNum}/collection/`
    );
  }

  // Extraer productos de una página
  function scrapeItems(doc, productos, categoria) {
    const items = doc.querySelectorAll('.product_item_div');
    let count = 0;

    items.forEach(item => {
      try {
        const linkElement = item.querySelector('a');
        const link = linkElement?.getAttribute('href') || '';
        const enlace = link ? baseUrl + link : '';

        const imgElement = item.querySelector('.item_img');
        const bgStyle = imgElement?.getAttribute('style') || '';
        const imagenMatch = bgStyle.match(/url\(['"]?(.+?)['"]?\)/);
        const imagen = imagenMatch ? baseUrl + imagenMatch[1] : '';

        const referenciaElement = item.querySelector('.ref .item_price_list');
        const referencia = referenciaElement?.textContent.trim().replace('Ref. ', '') || '';

        const precioElement = item.querySelector('.price .item_price_list');
        const precio = precioElement?.textContent.trim() || '';

        if (referencia && precio) {
          productos.push({ 
            categoria,
            referencia, 
            precio, 
            enlace, 
            imagen 
          });
          count++;
        }
      } catch (error) {
        console.warn('⚠️ Error scraping item:', error);
      }
    });

    return count;
  }

  // Crear Excel
  function createExcel(data, filename) {
    if (data.length === 0) {
      console.warn(`⚠️ No hay datos para crear ${filename}`);
      return;
    }

    const ws = XLSX.utils.json_to_sheet(data);
    
    // Ajustar anchos de columna
    ws['!cols'] = [
      { wch: 30 }, // categoria
      { wch: 15 }, // referencia
      { wch: 12 }, // precio
      { wch: 60 }, // enlace
      { wch: 60 }  // imagen
    ];

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Productos");
    XLSX.writeFile(wb, filename);
    console.log(`💾 Excel creado: ${filename} (${data.length} productos)`);
  }

  // Scrapear una colección completa
  async function scrapeCollection(coleccionData) {
    const { url, nombre, categoria } = coleccionData;
    const fullUrl = baseUrl + url;
    const productos = [];
    
    try {
      console.log(`\n${'='.repeat(60)}`);
      console.log(`🎯 Iniciando: ${nombre} (${categoria})`);
      console.log(`${'='.repeat(60)}`);
      
      // Obtener primera página
      const firstDoc = await getDocument(fullUrl);
      const totalPages = getTotalPages(firstDoc);
      
      console.log(`📄 Total de páginas detectadas: ${totalPages}`);
      
      // Scrapear primera página
      const count1 = scrapeItems(firstDoc, productos, categoria);
      console.log(`✅ Página 1/${totalPages} - ${count1} productos`);
      
      // Scrapear páginas restantes
      for (let page = 2; page <= totalPages; page++) {
        await sleep(config.delayBetweenPages);
        
        const pageUrl = buildPageUrl(fullUrl, page);
        const doc = await getDocument(pageUrl);
        const count = scrapeItems(doc, productos, categoria);
        
        console.log(`✅ Página ${page}/${totalPages} - ${count} productos`);
      }
      
      console.log(`\n🎉 ${nombre} completado: ${productos.length} productos totales`);
      
      // Crear Excel
      const filename = `${nombre}_${new Date().toISOString().split('T')[0]}.xlsx`;
      createExcel(productos, filename);
      
      return { nombre, total: productos.length, success: true };
      
    } catch (error) {
      console.error(`❌ Error en ${nombre}:`, error);
      return { nombre, total: 0, success: false, error: error.message };
    }
  }

  // Función principal
  async function scrapearTodo() {
    console.log(`
╔═══════════════════════════════════════════════════════════╗
║                PROMOJOYA SCRAPER v2.1                     ║
║          Scrapeando todas las colecciones                  ║
║          (Incluye categoría en Excel)                      ║
╚═══════════════════════════════════════════════════════════╝
    `);
    
    const inicio = Date.now();
    const resultados = [];
    const coleccionesArray = Object.values(colecciones);
    
    for (let i = 0; i < coleccionesArray.length; i++) {
      const coleccion = coleccionesArray[i];
      console.log(`\n[${i + 1}/${coleccionesArray.length}] Procesando: ${coleccion.nombre}`);
      
      const resultado = await scrapeCollection(coleccion);
      resultados.push(resultado);
      
      // Delay entre colecciones
      if (i < coleccionesArray.length - 1) {
        await sleep(config.delayBetweenCollections);
      }
    }
    
    // Resumen final
    const duracion = ((Date.now() - inicio) / 1000 / 60).toFixed(2);
    const exitosas = resultados.filter(r => r.success).length;
    const totalProductos = resultados.reduce((sum, r) => sum + r.total, 0);
    
    console.log(`\n
╔═══════════════════════════════════════════════════════════╗
║                    RESUMEN FINAL                          ║
╠═══════════════════════════════════════════════════════════╣
║  ✅ Colecciones exitosas: ${exitosas}/${coleccionesArray.length}
║  📦 Total productos: ${totalProductos}
║  ⏱️  Duración: ${duracion} minutos
╚═══════════════════════════════════════════════════════════╝
    `);
    
    // Mostrar errores si los hay
    const errores = resultados.filter(r => !r.success);
    if (errores.length > 0) {
      console.log('\n❌ Colecciones con errores:');
      errores.forEach(e => {
        console.log(`   - ${e.nombre}: ${e.error}`);
      });
    }
    
    console.log('\n✨ Proceso completado. Revisa los archivos Excel descargados.');
  }

  // Verificar que XLSX esté disponible
  if (typeof XLSX === 'undefined') {
    console.log('📚 Cargando librería XLSX...');
    const script = document.createElement('script');
    script.src = 'https://cdn.sheetjs.com/xlsx-latest/package/dist/xlsx.full.min.js';
    script.onload = () => {
      console.log('✅ XLSX cargado');
      scrapearTodo();
    };
    document.head.appendChild(script);
  } else {
    scrapearTodo();
  }

})();
