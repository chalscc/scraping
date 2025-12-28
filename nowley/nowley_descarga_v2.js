(async () => {
  console.log("🚀 Iniciando scraper universal de Nowley.com...");
  
  // ============================================
  // CONFIGURACIÓN
  // ============================================
  const CONFIG = {
    delayEntrePaginas: 2000,
    maxReintentos: 3,
    tiempoEsperaAjax: 1500
  };
  
  // ============================================
  // EXTRAER INFORMACIÓN DE CATEGORÍAS
  // ============================================
  function obtenerInformacionCategoria() {
    const info = {
      categoriaPrincipal: '',
      urlCategoria: window.location.href
    };
    
    // Categoría principal desde breadcrumb
    const breadcrumbCategoria = document.querySelector('.breadcrumb .navigation_page');
    if (breadcrumbCategoria) {
      info.categoriaPrincipal = breadcrumbCategoria.textContent.trim();
    }
    
    // También desde el título de la página
    const tituloCategoria = document.querySelector('.page-heading .cat-name');
    if (tituloCategoria && !info.categoriaPrincipal) {
      info.categoriaPrincipal = tituloCategoria.textContent.trim();
    }
    
    return info;
  }
  
  // ============================================
  // EXTRAER COLECCIÓN Y SUBCATEGORÍA DE LA URL
  // ============================================
  function extraerCategoriasDeURL(urlProducto) {
    // URL ejemplo: https://www.nowley.com/es/chic/71548-8-0016-0-0.html
    // Patrón: /es/{coleccion}/{id}-{referencia}.html
    
    const match = urlProducto.match(/\/es\/([^\/]+)\/\d+-(.+)\.html/);
    
    if (match) {
      return {
        coleccion: match[1] || '',
        slug: match[2] || ''
      };
    }
    
    return { coleccion: '', slug: '' };
  }
  
  // ============================================
  // EXTRAER CATEGORÍAS DEL TEXTO DESCRIPTIVO
  // ============================================
  function extraerCategoriasDeDescripcion(descripcion) {
    const categorias = {};
    
    // Para JEWELRY
    const coleccionMatch = descripcion.match(/Colección\s*:\s*([^\n]+)/i);
    if (coleccionMatch) {
      categorias.coleccionTexto = coleccionMatch[1].trim();
    }
    
    const articuloMatch = descripcion.match(/Artículo\s*:\s*([^\n]+)/i);
    if (articuloMatch) {
      categorias.articulo = articuloMatch[1].trim();
    }
    
    const materialMatch = descripcion.match(/Material\s*:\s*([^\n]+)/i);
    if (materialMatch) {
      categorias.material = materialMatch[1].trim();
    }
    
    const acabadoMatch = descripcion.match(/Acabado\s*:\s*([^\n]+)/i);
    if (acabadoMatch) {
      categorias.acabado = acabadoMatch[1].trim();
    }
    
    // Para RELOJES - Extraer "Tipo"
    const tipoMatch = descripcion.match(/Tipo\s*:\s*([^\n]+)/i);
    if (tipoMatch) {
      categorias.tipo = tipoMatch[1].trim();
    }
    
    // Para RELOJES - Extraer "Descripción"
    const descripcionMatch = descripcion.match(/Descripción\s*:\s*([^\n]+)/i);
    if (descripcionMatch) {
      categorias.descripcionTipo = descripcionMatch[1].trim();
    }
    
    return categorias;
  }
  
  // ============================================
  // DETERMINAR SUBCATEGORÍA
  // ============================================
  function determinarSubcategoria(categorias, categoriaPrincipal) {
    // Si está en el sidebar seleccionado
    const subcategoriaActiva = document.querySelector('#categories_block_left a.selected');
    if (subcategoriaActiva) {
      const textoSubcategoria = subcategoriaActiva.textContent.trim();
      
      // Para JEWELRY
      if (['Mujer', 'Hombre', 'Junior'].includes(textoSubcategoria) && categoriaPrincipal === 'Jewelry') {
        return textoSubcategoria;
      }
      
      // Para RELOJES
      if (['Hombre', 'Mujer', 'Juvenil', 'Infantil', 'Bolsillo'].includes(textoSubcategoria) && categoriaPrincipal === 'Relojes') {
        return textoSubcategoria;
      }
    }
    
    // Inferir de la descripción para RELOJES
    if (categoriaPrincipal === 'Relojes' && categorias.tipo) {
      const tipo = categorias.tipo.toLowerCase();
      if (tipo.includes('mujer')) return 'Mujer';
      if (tipo.includes('hombre')) return 'Hombre';
      if (tipo.includes('juvenil')) return 'Juvenil';
      if (tipo.includes('infantil')) return 'Infantil';
    }
    
    // Inferir de la colección para JEWELRY
    if (categoriaPrincipal === 'Jewelry') {
      const coleccionesJewelry = {
        'Mujer': ['alphabet', 'mama', 'cuore', 'nuxor', 'bella', 'rose', 'butterfly', 
                  'promise', 'petal', 'caprice', 'dragon-fly', 'vita', 'glacial', 
                  'violet', 'cotton', 'music', 'gliss', 'city', 'eden', 'halo'],
        'Hombre': ['urban'],
        'Junior': ['joy']
      };
      
      const coleccionLower = categorias.coleccion?.toLowerCase() || '';
      
      for (const [subcategoria, coleccionesList] of Object.entries(coleccionesJewelry)) {
        if (coleccionesList.includes(coleccionLower)) {
          return subcategoria;
        }
      }
    }
    
    // Inferir de la colección para RELOJES
    if (categoriaPrincipal === 'Relojes') {
      const coleccionesRelojes = {
        'Hombre': ['hot', 'vintage', 'classic', 'racing', 'prisma', 'nude'],
        'Mujer': ['chic', 'vintage', 'classic', 'racing', 'prisma', 'nude'],
        'Juvenil': ['junior', 'racing'],
        'Infantil': ['kids', 'racing'],
        'Bolsillo': ['vintage']
      };
      
      const coleccionLower = categorias.coleccion?.toLowerCase() || '';
      
      // Buscar coincidencia
      for (const [subcategoria, coleccionesList] of Object.entries(coleccionesRelojes)) {
        if (coleccionesList.includes(coleccionLower)) {
          return subcategoria;
        }
      }
    }
    
    // Para SMART no hay subcategoría
    if (categoriaPrincipal === 'Smart') {
      return '';
    }
    
    return '';
  }
  
  // ============================================
  // OBTENER TOTAL DE PÁGINAS
  // ============================================
  function obtenerTotalPaginas() {
    const paginationItems = document.querySelectorAll('ul.pagination li:not(.pagination_previous):not(.pagination_next):not(.truncate):not(.active)');
    let maxPage = 1;
    paginationItems.forEach(item => {
      const link = item.querySelector('a span');
      if (link) {
        const pageNum = parseInt(link.textContent.trim());
        if (!isNaN(pageNum) && pageNum > maxPage) maxPage = pageNum;
      }
    });
    return maxPage;
  }
  
  // ============================================
  // EXTRAER PRODUCTOS DE LA PÁGINA ACTUAL
  // ============================================
  function extraerProductosPaginaActual(infoCategoria) {
    const productos = [];
    const items = document.querySelectorAll('ul.product_list li.ajax_block_product');
    
    items.forEach(item => {
      // Datos básicos
      const nombreEl = item.querySelector('.product-name');
      const nombre = nombreEl ? nombreEl.textContent.trim() : '';
      
      const enlaceEl = item.querySelector('.product_img_link');
      const enlace = enlaceEl ? enlaceEl.href : '';
      
      // ID del producto
      let id = '';
      if (enlace) {
        const idMatch = enlace.match(/\/(\d+)-[\w-]+\.html/);
        id = idMatch ? idMatch[1] : '';
      }
      
      // Imagen
      const imagenEl = item.querySelector('.product_img_link img');
      const imagen = imagenEl ? (imagenEl.getAttribute('src') || imagenEl.getAttribute('data-src') || '') : '';
      
      // Descripción
      const descripcionEl = item.querySelector('.product-desc');
      const descripcion = descripcionEl ? descripcionEl.textContent.trim() : '';
      
      // Referencia
      const refMatch = enlace.match(/\/\d+-([\w-]+)\.html/);
      const referencia = refMatch ? refMatch[1] : nombre;
      
      // ============================================
      // EXTRAER CATEGORÍAS
      // ============================================
      
      // Categorías de la URL
      const categoriasURL = extraerCategoriasDeURL(enlace);
      
      // Categorías de la descripción
      const categoriasDescripcion = extraerCategoriasDeDescripcion(descripcion);
      
      // Subcategoría determinada
      const subcategoria = determinarSubcategoria({
        ...categoriasURL,
        ...categoriasDescripcion
      }, infoCategoria.categoriaPrincipal);
      
      // Capitalizar colección
      const coleccion = categoriasURL.coleccion
        .split('-')
        .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1))
        .join(' ');
      
      // ============================================
      // CONSTRUIR OBJETO PRODUCTO
      // ============================================
      const producto = {
        // Información básica
        id,
        referencia,
        nombre,
        descripcion,
        enlace,
        imagen,
        
        // Categorización completa
        categoriaPrincipal: infoCategoria.categoriaPrincipal,
        subcategoria: subcategoria,
        coleccion: coleccion
      };
      
      // Campos específicos para JEWELRY
      if (infoCategoria.categoriaPrincipal === 'Jewelry') {
        producto.articulo = categoriasDescripcion.articulo || '';
        producto.material = categoriasDescripcion.material || '';
        producto.acabado = categoriasDescripcion.acabado || '';
      }
      
      // Campos específicos para RELOJES
      if (infoCategoria.categoriaPrincipal === 'Relojes') {
        producto.tipo = categoriasDescripcion.tipo || '';
        producto.descripcionTipo = categoriasDescripcion.descripcionTipo || '';
      }
      
      productos.push(producto);
    });
    
    return productos;
  }
  
  // ============================================
  // ESPERAR CARGA
  // ============================================
  async function esperarCargaProductos() {
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
    let intentos = 0;
    
    while (intentos < CONFIG.maxReintentos) {
      await sleep(CONFIG.tiempoEsperaAjax);
      const loader = document.querySelector('.ajax-loading, .loading, .loader');
      const productos = document.querySelectorAll('ul.product_list li.ajax_block_product');
      
      if (!loader && productos.length > 0) {
        console.log(`   ✅ ${productos.length} productos cargados`);
        return true;
      }
      intentos++;
    }
    
    await sleep(1000);
    return true;
  }
  
  // ============================================
  // NAVEGAR A PÁGINA
  // ============================================
  async function irAPagina(numeroPagina) {
    if (numeroPagina === 1) {
      window.location.hash = '';
    } else {
      window.location.hash = `/page-${numeroPagina}`;
    }
    await esperarCargaProductos();
    window.scrollTo(0, 0);
    return true;
  }
  
  // ============================================
  // SCRAPEAR CATEGORÍA
  // ============================================
  async function scrapearCategoria() {
    const productos = [];
    
    // Obtener información de la categoría actual
    const infoCategoria = obtenerInformacionCategoria();
    
    console.log(`\n📂 Categoría: ${infoCategoria.categoriaPrincipal}`);
    console.log(`🔗 URL: ${infoCategoria.urlCategoria}`);
    
    await irAPagina(1);
    const totalPaginas = obtenerTotalPaginas();
    console.log(`📊 Total de páginas: ${totalPaginas}\n`);
    
    for (let pagina = 1; pagina <= totalPaginas; pagina++) {
      console.log(`⏳ Procesando página ${pagina}/${totalPaginas}...`);
      await irAPagina(pagina);
      
      const productosEnPagina = extraerProductosPaginaActual(infoCategoria);
      productos.push(...productosEnPagina);
      
      console.log(`   ✓ ${productosEnPagina.length} productos | Total: ${productos.length}`);
      
      if (pagina < totalPaginas) {
        console.log(`   ⏸️  Esperando ${CONFIG.delayEntrePaginas}ms...`);
        await new Promise(r => setTimeout(r, CONFIG.delayEntrePaginas));
      }
    }
    
    return { 
      categoria: infoCategoria.categoriaPrincipal, 
      productos 
    };
  }
  
  // ============================================
  // DESCARGAR EXCEL
  // ============================================
  async function descargarExcel(data, categoria) {
    if (typeof XLSX === 'undefined') {
      console.log('📥 Cargando librería SheetJS...');
      await new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = 'https://cdn.sheetjs.com/xlsx-latest/package/dist/xlsx.full.min.js';
        script.onload = resolve;
        document.head.appendChild(script);
      });
    }
    
    const ws = XLSX.utils.json_to_sheet(data);
    
    // Ajustar ancho de columnas dinámicamente según categoría
    let columnas = [
      { wch: 10 },  // ID
      { wch: 25 },  // Referencia
      { wch: 40 },  // Nombre
      { wch: 70 },  // Descripción
      { wch: 60 },  // Enlace
      { wch: 60 },  // Imagen
      { wch: 15 },  // Categoría Principal
      { wch: 15 },  // Subcategoría
      { wch: 20 }   // Colección
    ];
    
    // Añadir columnas específicas según categoría
    if (categoria === 'Jewelry') {
      columnas.push(
        { wch: 20 },  // Artículo
        { wch: 40 },  // Material
        { wch: 25 }   // Acabado
      );
    } else if (categoria === 'Relojes') {
      columnas.push(
        { wch: 25 },  // Tipo
        { wch: 30 }   // Descripción Tipo
      );
    }
    
    ws['!cols'] = columnas;
    
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Productos');
    
    const fecha = new Date().toISOString().split('T')[0];
    const nombreCategoria = categoria.toLowerCase().replace(/\s+/g, '_');
    const nombreArchivo = `nowley_${nombreCategoria}_${fecha}.xlsx`;
    
    XLSX.writeFile(wb, nombreArchivo);
    console.log(`\n✅ Excel descargado: ${nombreArchivo}`);
  }
  
  // ============================================
  // EJECUCIÓN PRINCIPAL
  // ============================================
  try {
    const resultado = await scrapearCategoria();
    
    console.log(`\n${'='.repeat(60)}`);
    console.log(`🎉 SCRAPING COMPLETADO`);
    console.log(`${'='.repeat(60)}`);
    console.log(`📂 Categoría: ${resultado.categoria}`);
    console.log(`📦 Total productos: ${resultado.productos.length}`);
    
    // Mostrar resumen de categorías
    const colecciones = [...new Set(resultado.productos.map(p => p.coleccion))].filter(Boolean);
    const subcategorias = [...new Set(resultado.productos.map(p => p.subcategoria))].filter(Boolean);
    
    console.log(`\n📊 Resumen de Categorización:`);
    if (subcategorias.length > 0) {
      console.log(`   Subcategorías: ${subcategorias.join(', ')}`);
    }
    console.log(`   Colecciones encontradas: ${colecciones.length}`);
    console.log(`   ${colecciones.slice(0, 5).join(', ')}${colecciones.length > 5 ? '...' : ''}`);
    
    // Mostrar preview
    console.log(`\n📋 Preview de productos (primeros 3):`);
    console.table(resultado.productos.slice(0, 3));
    
    // Descargar Excel
    await descargarExcel(resultado.productos, resultado.categoria);
    
    // Guardar globalmente
    window.nowleyProductos = resultado.productos;
    console.log('\n💡 TIP: Los datos están disponibles en: window.nowleyProductos');
    
  } catch (error) {
    console.error('❌ Error durante el scraping:', error);
  }
  
})();
