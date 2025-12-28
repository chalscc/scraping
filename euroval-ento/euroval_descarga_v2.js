(async () => {
  console.log('🚀 EUROVAL SCRAPER - MULTI-URL AUTOMÁTICO\n');
  
  // ============================================
  // 📋 CONFIGURACIÓN - EDITA TUS URLs AQUÍ
  // ============================================

const URLS_ORO = [
  // Novedades
  'https://www.euroval-ento.com/300-novedades',
  
  // Oro 9 kilates
  'https://www.euroval-ento.com/10042-oro-9-kilates',
  'https://www.euroval-ento.com/10031-cadenas-9-kts',
  'https://www.euroval-ento.com/10038-45-cm-',
  'https://www.euroval-ento.com/10039-50-cm-',
  'https://www.euroval-ento.com/10112-60-cm',
  'https://www.euroval-ento.com/10115-colgantes-9-kts',
  'https://www.euroval-ento.com/10114-criollas-9-kts',
  'https://www.euroval-ento.com/10092-cruces-9-kts',
  'https://www.euroval-ento.com/10116-gargantillas-9-kts',
  'https://www.euroval-ento.com/10119-iniciales-9k',
  'https://www.euroval-ento.com/10117-juegos-comunion-9-kts',
  'https://www.euroval-ento.com/10080-pendientes-9-kts',
  'https://www.euroval-ento.com/10043-pulseras-bebe-9-kts',
  'https://www.euroval-ento.com/10090-sellos-9-kts',
  'https://www.euroval-ento.com/10118-sortijas-9-kts',
  'https://www.euroval-ento.com/10130-medallas-9k',
  
  // Bebe
  'https://www.euroval-ento.com/301-bebe',
  'https://www.euroval-ento.com/3010-pendientes',
  'https://www.euroval-ento.com/3011-medallas',
  'https://www.euroval-ento.com/10098-angel-guarda',
  'https://www.euroval-ento.com/10101-hora',
  'https://www.euroval-ento.com/10099-virgen-nina',
  'https://www.euroval-ento.com/10100-san-francisco',
  'https://www.euroval-ento.com/3012-pulseras',
  'https://www.euroval-ento.com/3013-sellos-y-solitarios',
  'https://www.euroval-ento.com/3014-aderezos',
  'https://www.euroval-ento.com/3015-alfileres',
  
  // Alianzas
  'https://www.euroval-ento.com/302-alianzas',
  
  // Brillantes
  'https://www.euroval-ento.com/325-brillantes',
  'https://www.euroval-ento.com/3254-gargantillas',
  'https://www.euroval-ento.com/10027-iniciales-blanco',
  'https://www.euroval-ento.com/10028-iniciales-amarillo',
  'https://www.euroval-ento.com/10046-piercing',
  'https://www.euroval-ento.com/3250-pendientes-bebe',
  'https://www.euroval-ento.com/3251-solitarios',
  'https://www.euroval-ento.com/3252-sortijas',
  
  // Cadena
  'https://www.euroval-ento.com/303-cadena',
  'https://www.euroval-ento.com/3030-oro-amarillo',
  'https://www.euroval-ento.com/30300-cadena-40-cm',
  'https://www.euroval-ento.com/30301-cadena-45-cm',
  'https://www.euroval-ento.com/30302-cadena-50-cm',
  'https://www.euroval-ento.com/30303-cadena-60-cm',
  'https://www.euroval-ento.com/30304-cordones',
  'https://www.euroval-ento.com/3031-oro-blanco',
  'https://www.euroval-ento.com/30310-cadena-40-cm',
  'https://www.euroval-ento.com/30311-cadena-45-cm',
  'https://www.euroval-ento.com/30313-cadena-50-cm',
  'https://www.euroval-ento.com/30314-cadena-60-cm',
  'https://www.euroval-ento.com/30330-oro-rosa',
  'https://www.euroval-ento.com/10069-40-cm',
  'https://www.euroval-ento.com/10075-45-cm',
  
  // Cañas
  'https://www.euroval-ento.com/304-canas',
  'https://www.euroval-ento.com/3040-oro-amarillo',
  'https://www.euroval-ento.com/3041-oro-blanco',
  
  // Colgantes
  'https://www.euroval-ento.com/305-colgantes',
  'https://www.euroval-ento.com/3050-colgantes',
  'https://www.euroval-ento.com/10102-oro-amarillo',
  'https://www.euroval-ento.com/10103-oro-blanco',
  'https://www.euroval-ento.com/10104-oro-bicolor',
  'https://www.euroval-ento.com/3051-discos',
  'https://www.euroval-ento.com/3052-dijes',
  'https://www.euroval-ento.com/3053-horoscopos',
  'https://www.euroval-ento.com/3054-placas',
  
  // Comunion
  'https://www.euroval-ento.com/306-comunion',
  'https://www.euroval-ento.com/30325-pendientes',
  'https://www.euroval-ento.com/3063-juegos',
  'https://www.euroval-ento.com/10105-oro-amarillo',
  'https://www.euroval-ento.com/10106-oro-blanco',
  'https://www.euroval-ento.com/3061-medallas',
  'https://www.euroval-ento.com/3060-cruces',
  'https://www.euroval-ento.com/3062-pulseras',
  'https://www.euroval-ento.com/3064-sellos-y-solitarios',
  
  // Criollas
  'https://www.euroval-ento.com/307-criollas',
  'https://www.euroval-ento.com/3070-oro-amarillo',
  'https://www.euroval-ento.com/3071-oro-blanco',
  
  // Dia de la madre
  'https://www.euroval-ento.com/309-dia-de-la-madre',
  'https://www.euroval-ento.com/3090-madre',
  
  // Cruces
  'https://www.euroval-ento.com/308-cruces',
  'https://www.euroval-ento.com/3080-caravacas',
  'https://www.euroval-ento.com/3081-comunion',
  'https://www.euroval-ento.com/3082-lisas',
  'https://www.euroval-ento.com/3083-piedras',
  'https://www.euroval-ento.com/30317-especiales',
  'https://www.euroval-ento.com/10108-marineras',
  'https://www.euroval-ento.com/10109-david',
  'https://www.euroval-ento.com/10110-legion',
  'https://www.euroval-ento.com/10111-dali',
  
  // Fornitura
  'https://www.euroval-ento.com/310-fornitura',
  'https://www.euroval-ento.com/3100-oro-amarillo',
  'https://www.euroval-ento.com/3101-oro-blanco',
  'https://www.euroval-ento.com/30331-oro-rosa',
  
  // Gargantillas
  'https://www.euroval-ento.com/311-gargantillas',
  'https://www.euroval-ento.com/3110-oro-amarillo',
  'https://www.euroval-ento.com/3111-oro-blanco',
  'https://www.euroval-ento.com/3113-diamantes',
  
  // Horoscopos
  'https://www.euroval-ento.com/312-horoscopos',
  'https://www.euroval-ento.com/3120-pergamino',
  'https://www.euroval-ento.com/3121-redondo-calado',
  'https://www.euroval-ento.com/3122-redondo',
  
  // Iniciales
  'https://www.euroval-ento.com/313-iniciales',
  'https://www.euroval-ento.com/3130-lisas',
  'https://www.euroval-ento.com/3131-1-circonita',
  'https://www.euroval-ento.com/3132-5-circonitas',
  'https://www.euroval-ento.com/3133-circonitas',
  
  // Insignias
  'https://www.euroval-ento.com/314-insignias',
  'https://www.euroval-ento.com/3140-insignias',
  
  // Medallas
  'https://www.euroval-ento.com/315-medallas',
  'https://www.euroval-ento.com/3150-bebe',
  'https://www.euroval-ento.com/3151-comunion',
  'https://www.euroval-ento.com/3152-medallas',
  
  // Monturas Brillantes
  'https://www.euroval-ento.com/10026-monturas-brillantes',
  
  // Virgenes
  'https://www.euroval-ento.com/316-virgenes',
  
  // Pendientes
  'https://www.euroval-ento.com/317-pendientes',
  'https://www.euroval-ento.com/3171-bebe',
  'https://www.euroval-ento.com/3172-boda',
  'https://www.euroval-ento.com/3173-coral-y-turquesa',
  'https://www.euroval-ento.com/3174-cierre-presion',
  'https://www.euroval-ento.com/3175-cierre-omega',
  'https://www.euroval-ento.com/3176-cierre-catalan',
  'https://www.euroval-ento.com/30320-tu-y-yo',
  'https://www.euroval-ento.com/30321-perla',
  
  // Personalizado
  'https://www.euroval-ento.com/318-personalizado',
  'https://www.euroval-ento.com/3180-colgantes',
  'https://www.euroval-ento.com/3181-pulseras',
  'https://www.euroval-ento.com/3182-gargantillas',
  'https://www.euroval-ento.com/3183-iniciales',
  'https://www.euroval-ento.com/3184-sortijas',
  'https://www.euroval-ento.com/3185-pendientes',
  
  // Piercing
  'https://www.euroval-ento.com/319-piercing',
  'https://www.euroval-ento.com/3190-labio',
  'https://www.euroval-ento.com/3191-ceja',
  'https://www.euroval-ento.com/3192-nariz',
  'https://www.euroval-ento.com/3193-ombligo',
  'https://www.euroval-ento.com/3194-lengua',
  'https://www.euroval-ento.com/3195-cartilago',
  
  // Placas
  'https://www.euroval-ento.com/320-placas',
  'https://www.euroval-ento.com/3020-discos-lisos',
  'https://www.euroval-ento.com/3021-pergaminos',
  'https://www.euroval-ento.com/3022-placas',
  
  // Pulseras
  'https://www.euroval-ento.com/321-pulseras',
  'https://www.euroval-ento.com/3210-bebe',
  'https://www.euroval-ento.com/3211-comunion',
  'https://www.euroval-ento.com/3212-senora',
  'https://www.euroval-ento.com/3213-caballero',
  'https://www.euroval-ento.com/3214-diamantes',
  
  // Sellos
  'https://www.euroval-ento.com/322-sellos',
  'https://www.euroval-ento.com/3220-bebe',
  'https://www.euroval-ento.com/3221-caballero',
  'https://www.euroval-ento.com/3222-comunion',
  
  // Solitarios
  'https://www.euroval-ento.com/323-solitarios',
  'https://www.euroval-ento.com/3230-bebe',
  'https://www.euroval-ento.com/3232-senora',
  'https://www.euroval-ento.com/3231-caballero',
  'https://www.euroval-ento.com/30318-comunion',
  'https://www.euroval-ento.com/3233-diamantes',
  
  // Sortijas
  'https://www.euroval-ento.com/324-sortijas',
  'https://www.euroval-ento.com/3240-oro-amarillo',
  'https://www.euroval-ento.com/3241-oro-blanco',
  'https://www.euroval-ento.com/3242-diamantes'
];

const URLS_PLATA = [
  // Novedades y Colecciones
  'https://www.euroval-ento.com/200-novedades',
  'https://www.euroval-ento.com/201-coleccion-dia-de-la-madre',
  'https://www.euroval-ento.com/10089-moda-italiana',
  'https://www.euroval-ento.com/2168-coleccion-enamorados',
  
  // Colección Aguamarina
  'https://www.euroval-ento.com/10062-coleccion-aguamarina',
  'https://www.euroval-ento.com/10065-colgantes',
  'https://www.euroval-ento.com/10064-pendientes',
  'https://www.euroval-ento.com/10066-gargantillas',
  'https://www.euroval-ento.com/10067-pulseras',
  'https://www.euroval-ento.com/10068-sortijas',
  
  // Otras Colecciones
  'https://www.euroval-ento.com/2200-coleccion-arbol-de-la-vida',
  'https://www.euroval-ento.com/10051-coleccion-black-gold',
  'https://www.euroval-ento.com/10088-coleccion-deluxe',
  
  // Colección Esmeralda Rubi Zafiro
  'https://www.euroval-ento.com/10040-coleccion-esmeralda-rubi-zafiro',
  'https://www.euroval-ento.com/10041-esmeralda-rubi-zafiro',
  
  'https://www.euroval-ento.com/10063-coleccion-modelos-especiales',
  'https://www.euroval-ento.com/10087-coleccion-perlas',
  
  // Colección Provincias
  'https://www.euroval-ento.com/10025-coleccion-provincias',
  'https://www.euroval-ento.com/10077-asturias',
  'https://www.euroval-ento.com/10078-almeria',
  'https://www.euroval-ento.com/10079-murcia',
  'https://www.euroval-ento.com/10094-valencia',
  'https://www.euroval-ento.com/10095-barcelona',
  
  // Alianzas
  'https://www.euroval-ento.com/202-alianzas',
  
  // Cadenas con protección
  'https://www.euroval-ento.com/10009-cadenas-con-proteccion',
  'https://www.euroval-ento.com/10010-40-cm',
  'https://www.euroval-ento.com/10011-45-cm-',
  'https://www.euroval-ento.com/10012-50-cm',
  'https://www.euroval-ento.com/10013-60-cm',
  'https://www.euroval-ento.com/10049-100-cm',
  'https://www.euroval-ento.com/10083-cadenas-doradas',
  
  // Cadenas Rodiadas
  'https://www.euroval-ento.com/203-cadenas-rodiadas',
  'https://www.euroval-ento.com/2032-40-cm',
  'https://www.euroval-ento.com/2033-45-cm',
  
  // Colgantes
  'https://www.euroval-ento.com/204-colgantes',
  'https://www.euroval-ento.com/2143-lisos',
  'https://www.euroval-ento.com/2041-circonitas',
  'https://www.euroval-ento.com/2165-chakras',
  'https://www.euroval-ento.com/2043-dijes',
  'https://www.euroval-ento.com/2044-llamadores',
  'https://www.euroval-ento.com/2042-charms',
  'https://www.euroval-ento.com/2045-placas',
  'https://www.euroval-ento.com/2199-constelaciones',
  
  // Comunión
  'https://www.euroval-ento.com/205-comunion',
  
  // Criollas
  'https://www.euroval-ento.com/210-criollas',
  'https://www.euroval-ento.com/10050-balinesas',
  'https://www.euroval-ento.com/2101-lisas',
  'https://www.euroval-ento.com/2102-circonitas',
  'https://www.euroval-ento.com/2142-plateadas-y-doradas',
  'https://www.euroval-ento.com/2170-motivos',
  
  // Cruces
  'https://www.euroval-ento.com/206-cruces',
  
  // Expositores
  'https://www.euroval-ento.com/10014-expositores',
  
  // Fornituras
  'https://www.euroval-ento.com/2145-fornituras',
  
  // Gargantillas
  'https://www.euroval-ento.com/207-gargantillas',
  'https://www.euroval-ento.com/2071-lisas',
  'https://www.euroval-ento.com/10023-perlas',
  'https://www.euroval-ento.com/2144-circonitas',
  'https://www.euroval-ento.com/2167-dobles',
  'https://www.euroval-ento.com/2149-nina',
  'https://www.euroval-ento.com/2148-iniciales-circonitas',
  'https://www.euroval-ento.com/2180-iniciales-circonitas-color',
  'https://www.euroval-ento.com/2147-iniciales-lisas',
  
  // Iniciales
  'https://www.euroval-ento.com/2151-iniciales',
  'https://www.euroval-ento.com/2171-combinables',
  'https://www.euroval-ento.com/2152-gargantillas-lisas',
  'https://www.euroval-ento.com/2153-gargantillas-circonitas',
  'https://www.euroval-ento.com/2182-gargantillas-circ-color',
  'https://www.euroval-ento.com/2181-sortijas',
  'https://www.euroval-ento.com/2205-pendientes-lisos',
  'https://www.euroval-ento.com/2191-pendientes-circonitas',
  'https://www.euroval-ento.com/2184-pendientes-cadena-bano-oro-18k',
  'https://www.euroval-ento.com/2185-pulseras-bano-18-k',
  'https://www.euroval-ento.com/2190-pulseras-circonitas',
  
  // Juegos
  'https://www.euroval-ento.com/208-juegos',
  'https://www.euroval-ento.com/2154-con-cadena',
  'https://www.euroval-ento.com/2155-sin-cadena',
  
  // Mascotas
  'https://www.euroval-ento.com/10008-mascotas',
  
  // Medallas
  'https://www.euroval-ento.com/2173-medallas',
  
  // Pendientes
  'https://www.euroval-ento.com/209-pendientes',
  'https://www.euroval-ento.com/2095-boda',
  'https://www.euroval-ento.com/10091-catalan',
  'https://www.euroval-ento.com/2092-cortos',
  'https://www.euroval-ento.com/2091-dormilones-rodio',
  'https://www.euroval-ento.com/10047-dormilon-platinum',
  'https://www.euroval-ento.com/2189-dormilones-bano-oro-18k',
  'https://www.euroval-ento.com/2203-ear-cuff',
  'https://www.euroval-ento.com/2160-largos',
  'https://www.euroval-ento.com/2158-omegas',
  'https://www.euroval-ento.com/2202-pendiente-mini',
  'https://www.euroval-ento.com/2093-perla',
  'https://www.euroval-ento.com/10045-riviere',
  'https://www.euroval-ento.com/2157-rosetones',
  'https://www.euroval-ento.com/10093-sets',
  'https://www.euroval-ento.com/2164-trepadores',
  'https://www.euroval-ento.com/2094-tu-y-yo',
  
  // Personalizado
  'https://www.euroval-ento.com/10016-personalizado',
  'https://www.euroval-ento.com/10018-gargantillas',
  'https://www.euroval-ento.com/10021-garg-colgante-nombres',
  'https://www.euroval-ento.com/10017-pulseras-',
  'https://www.euroval-ento.com/10019-pendientes',
  'https://www.euroval-ento.com/10020-sortijas',
  
  // Pulseras
  'https://www.euroval-ento.com/211-pulseras',
  'https://www.euroval-ento.com/2111-pulseras',
  'https://www.euroval-ento.com/10044-profesiones',
  'https://www.euroval-ento.com/10030-riviere',
  'https://www.euroval-ento.com/2112-canas-y-semanarios',
  'https://www.euroval-ento.com/2161-bebe-nina-o',
  'https://www.euroval-ento.com/2162-placa',
  'https://www.euroval-ento.com/2178-milan',
  'https://www.euroval-ento.com/10022-perlas',
  
  'https://www.euroval-ento.com/10107-pulseras-piedra-natural',
  'https://www.euroval-ento.com/10096-puntos-de-luz',
  
  // Sellos y Solitarios
  'https://www.euroval-ento.com/2193-sellos-y-solitarios-hombre',
  'https://www.euroval-ento.com/212-solitarios',
  
  // Sortijas
  'https://www.euroval-ento.com/213-sortijas',
  'https://www.euroval-ento.com/2131-lisas',
  'https://www.euroval-ento.com/2132-circonita',
  'https://www.euroval-ento.com/2179-iniciales',
  'https://www.euroval-ento.com/10113-sortijas-xl',
  
  // Tobilleras
  'https://www.euroval-ento.com/214-tobilleras'
];

const URLS_ACERO = [
  // Acero
  'https://www.euroval-ento.com/10-acero',
  'https://www.euroval-ento.com/100-novedades',
  'https://www.euroval-ento.com/2172-dia-de-la-madre',
  'https://www.euroval-ento.com/10085-brazalettes',
  'https://www.euroval-ento.com/10081-cadenas',
  'https://www.euroval-ento.com/10002-criollas-',
  'https://www.euroval-ento.com/2169-dia-del-padre',
  'https://www.euroval-ento.com/10086-dijes',
  'https://www.euroval-ento.com/10003-gargantillas',
  'https://www.euroval-ento.com/2188-gracias-heroes',
  'https://www.euroval-ento.com/10048-juegos',
  'https://www.euroval-ento.com/10004-pendientes',
  'https://www.euroval-ento.com/101-pulseras',
  'https://www.euroval-ento.com/10076-pulseras-espana',
  'https://www.euroval-ento.com/2174-profesores',
  'https://www.euroval-ento.com/2183-placa-militar',
  'https://www.euroval-ento.com/10024-tobilleras-kolore',
  'https://www.euroval-ento.com/10029-sortijas-sellos',
  'https://www.euroval-ento.com/10084-gemelos',
  
  // Latón
  'https://www.euroval-ento.com/10033-laton',
  'https://www.euroval-ento.com/10034-criollas',
  'https://www.euroval-ento.com/10035-gargantillas',
  'https://www.euroval-ento.com/10036-sortijas',
  'https://www.euroval-ento.com/10037-pulseras'
];

  const URLS = [
    ...URLS_ORO,
    ...URLS_PLATA,
    ...URLS_ACERO
  ];

  const CONFIG = {
    delayEntreRequests: 1500,  // ms entre peticiones
    maxPaginasPorCategoria: 500, // límite de seguridad
    nombreExcel: 'euroval_productos_completo.xlsx'
  };

  const todosLosProductos = [];
  let totalCategorias = URLS.length;
  let categoriasProcesadas = 0;

  // ============================================
  // FUNCIONES AUXILIARES
  // ============================================
  
  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  function log(mensaje, tipo = 'info') {
    const emojis = {
      info: 'ℹ️',
      success: '✅',
      error: '❌',
      warning: '⚠️',
      progress: '🔄'
    };
    console.log(`${emojis[tipo]} ${mensaje}`);
  }

  function extraerNombreCategoriaDeURL(url) {
    const match = url.match(/\/\d+-([^/?]+)/);
    if (match) {
      return match[1].replace(/-/g, ' ').toUpperCase();
    }
    return 'Categoría desconocida';
  }

  // ============================================
  // FETCH Y PARSEO DE HTML
  // ============================================
  
  async function fetchHTML(url) {
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const html = await response.text();
      return html;
    } catch (error) {
      log(`Error fetching ${url}: ${error.message}`, 'error');
      return null;
    }
  }

  function parseHTML(htmlString) {
    const parser = new DOMParser();
    return parser.parseFromString(htmlString, 'text/html');
  }

  // ============================================
  // EXTRACCIÓN DE DATOS
  // ============================================
  
  function obtenerTotalPaginasDeDoc(doc) {
    const paginacionElems = doc.querySelectorAll('.beshop_filters_goTo');
    let maxPagina = 1;
    
    paginacionElems.forEach(el => {
      const pageNum = parseInt(el.getAttribute('page'));
      if (!isNaN(pageNum) && pageNum > maxPagina) {
        maxPagina = pageNum;
      }
    });
    
    return Math.min(maxPagina, CONFIG.maxPaginasPorCategoria);
  }

  function extraerProductosDeDoc(doc, nombreCategoria) {
    const items = doc.querySelectorAll('article.product-miniature');
    const productos = [];
    
    items.forEach((item, index) => {
      try {
        // ID
        const id = item.getAttribute('data-id-product') || '';
        
        // Enlace
        const enlaceElement = item.querySelector('a.product-thumbnail');
        const enlace = enlaceElement ? enlaceElement.getAttribute('href') : '';
        
        // Nombre
        const nombreElement = item.querySelector('h3.product-name a');
        const nombre = nombreElement ? nombreElement.textContent.trim() : '';
        
        // Categoría del producto
        const categoriaElement = item.querySelector('p.product-category');
        const categoriaProducto = categoriaElement ? categoriaElement.textContent.trim() : '';
        
        // Referencia
        const referenciaElement = item.querySelector('#reference span');
        const referencia = referenciaElement ? referenciaElement.textContent.trim() : '';
        
        // Precios
        const precioActualElement = item.querySelector('span.price');
        const precioActual = precioActualElement ? precioActualElement.textContent.trim() : '';
        
        const precioAnteriorElement = item.querySelector('span.regular-price');
        const precioAnterior = precioAnteriorElement ? precioAnteriorElement.textContent.trim() : '';
        
        // Calcular descuento
        let descuento = '';
        let ahorroNumerico = '';
        if (precioAnterior && precioActual) {
          const valorAnterior = parseFloat(precioAnterior.replace(/[^\d,]/g, '').replace(',', '.'));
          const valorActual = parseFloat(precioActual.replace(/[^\d,]/g, '').replace(',', '.'));
          if (!isNaN(valorAnterior) && !isNaN(valorActual)) {
            const descPorcentaje = ((valorAnterior - valorActual) / valorAnterior * 100).toFixed(2);
            const ahorro = (valorAnterior - valorActual).toFixed(2);
            descuento = `${descPorcentaje}%`;
            ahorroNumerico = `${ahorro}€`;
          }
        }
        
        // Disponibilidad
        const stockElement = item.querySelector('.product-available');
        const fabricacionElement = item.querySelector('.product-unavailable');
        let disponibilidad = 'Desconocido';
        
        if (stockElement) {
          disponibilidad = stockElement.textContent.trim();
        } else if (fabricacionElement) {
          disponibilidad = fabricacionElement.textContent.trim();
        }
        
        // Etiquetas
        const esNuevo = item.querySelector('li.flag_new') ? 'SÍ' : 'NO';
        const enOferta = precioAnterior ? 'SÍ' : 'NO';
        
        // Imagen
        const imgElement = item.querySelector('a.product-thumbnail img');
        let imagenURL = '';
        if (imgElement) {
          imagenURL = imgElement.getAttribute('src') || imgElement.getAttribute('data-src') || '';
        }
        
        // Moneda
        const moneda = precioActual.includes('€') ? 'EUR' : 
                      (precioActual.includes('$') ? 'USD' : '');

        // Solo agregar si tiene datos mínimos válidos
        if (id && nombre) {
          productos.push({
            id,
            nombre,
            categoriaProducto,
            categoriaPagina: nombreCategoria,
            referencia,
            precioActual,
            precioAnterior: precioAnterior || '-',
            descuento: descuento || '-',
            ahorro: ahorroNumerico || '-',
            moneda,
            esNuevo,
            enOferta,
            disponibilidad,
            imagenURL,
            enlace: enlace.startsWith('http') ? enlace : `https://www.euroval-ento.com${enlace}`
          });
        }
        
      } catch (error) {
        log(`Error extrayendo producto ${index + 1}: ${error.message}`, 'warning');
      }
    });
    
    return productos;
  }

  // ============================================
  // CONSTRUIR URL DE PAGINACIÓN
  // ============================================
  
  function construirURLPagina(urlBase, numeroPagina) {
    // Euroval usa este formato: ?bsf=bsf=/&bspag=2/&bspag=/
    // o simplemente: ?page=2
    
    // Limpiar parámetros existentes de paginación
    let url = urlBase.split('?')[0];
    
    // Agregar parámetro de página
    return `${url}?bsf=bsf=/&bspag=${numeroPagina}/&bspag=/`;
  }

  // ============================================
  // SCRAPEAR UNA CATEGORÍA COMPLETA
  // ============================================
  
  async function scrapearCategoria(url, nombreCategoria) {
    log(`\nProcesando: ${nombreCategoria}`, 'progress');
    log(`URL: ${url}`, 'info');
    
    const productosCategoria = [];
    
    try {
      // Obtener primera página
      const html1 = await fetchHTML(url);
      if (!html1) {
        log('No se pudo obtener HTML', 'error');
        return productosCategoria;
      }
      
      const doc1 = parseHTML(html1);
      
      // Detectar total de páginas
      const totalPaginas = obtenerTotalPaginasDeDoc(doc1);
      log(`Total de páginas: ${totalPaginas}`, 'info');
      
      // Extraer productos de página 1
      const productosPag1 = extraerProductosDeDoc(doc1, nombreCategoria);
      productosCategoria.push(...productosPag1);
      log(`Página 1: ${productosPag1.length} productos`, 'success');
      
      // Procesar páginas restantes
      for (let pag = 2; pag <= totalPaginas; pag++) {
        await delay(CONFIG.delayEntreRequests);
        
        const urlPagina = construirURLPagina(url, pag);
        log(`Obteniendo página ${pag}/${totalPaginas}...`, 'progress');
        
        const htmlPagina = await fetchHTML(urlPagina);
        if (!htmlPagina) {
          log(`Error en página ${pag}`, 'warning');
          continue;
        }
        
        const docPagina = parseHTML(htmlPagina);
        const productosPagina = extraerProductosDeDoc(docPagina, nombreCategoria);
        productosCategoria.push(...productosPagina);
        log(`Página ${pag}: ${productosPagina.length} productos`, 'success');
      }
      
      log(`✓ Categoría completada: ${productosCategoria.length} productos totales`, 'success');
      
    } catch (error) {
      log(`Error en categoría: ${error.message}`, 'error');
    }
    
    return productosCategoria;
  }

  // ============================================
  // PROCESO PRINCIPAL
  // ============================================
  
  try {
    console.log('='.repeat(70));
    log('INICIANDO SCRAPING MULTI-CATEGORÍA', 'info');
    console.log('='.repeat(70));
    log(`Total de categorías: ${totalCategorias}`, 'info');
    console.log('='.repeat(70) + '\n');
    
    // Procesar cada URL
    for (const url of URLS) {
      const nombreCategoria = extraerNombreCategoriaDeURL(url);
      
      const productosCategoria = await scrapearCategoria(url, nombreCategoria);
      todosLosProductos.push(...productosCategoria);
      
      categoriasProcesadas++;
      
      console.log(`\n${'─'.repeat(70)}`);
      log(`Progreso: ${categoriasProcesadas}/${totalCategorias} categorías`, 'info');
      log(`Total acumulado: ${todosLosProductos.length} productos`, 'info');
      console.log('─'.repeat(70) + '\n');
      
      // Delay entre categorías
      if (categoriasProcesadas < totalCategorias) {
        await delay(CONFIG.delayEntreRequests);
      }
    }
    
    // ============================================
    // ELIMINAR DUPLICADOS
    // ============================================
    
    log('Eliminando productos duplicados...', 'progress');
    const productosUnicos = Array.from(
      new Map(todosLosProductos.map(p => [p.id, p])).values()
    );
    
    // ============================================
    // ESTADÍSTICAS FINALES
    // ============================================
    
    console.log('\n' + '='.repeat(70));
    log('SCRAPING COMPLETADO', 'success');
    console.log('='.repeat(70));
    log(`Total productos: ${productosUnicos.length}`, 'info');
    log(`Productos duplicados eliminados: ${todosLosProductos.length - productosUnicos.length}`, 'info');
    log(`Con descuento: ${productosUnicos.filter(p => p.enOferta === 'SÍ').length}`, 'info');
    log(`Productos nuevos: ${productosUnicos.filter(p => p.esNuevo === 'SÍ').length}`, 'info');
    log(`En stock: ${productosUnicos.filter(p => p.disponibilidad.includes('STOCK')).length}`, 'info');
    
    // Estadísticas por categoría
    const porCategoria = {};
    productosUnicos.forEach(p => {
      if (!porCategoria[p.categoriaPagina]) {
        porCategoria[p.categoriaPagina] = 0;
      }
      porCategoria[p.categoriaPagina]++;
    });
    
    console.log('\n📊 Productos por categoría:');
    Object.entries(porCategoria).forEach(([cat, count]) => {
      console.log(`   ${cat}: ${count}`);
    });
    console.log('='.repeat(70) + '\n');
    
    // Mostrar preview
    console.log('📋 Preview de productos:');
    console.table(productosUnicos.slice(0, 10));
    
    // ============================================
    // DESCARGAR EXCEL
    // ============================================
    
    log('Preparando descarga de Excel...', 'progress');
    
    function descargarExcel() {
      if (typeof XLSX === 'undefined') {
        log('Cargando librería SheetJS...', 'progress');
        const script = document.createElement('script');
        script.src = 'https://cdn.sheetjs.com/xlsx-latest/package/dist/xlsx.full.min.js';
        
        script.onload = () => {
          crearYDescargarExcel();
        };
        
        script.onerror = () => {
          log('Error cargando SheetJS. Descargando JSON como alternativa...', 'error');
          descargarJSON();
        };
        
        document.head.appendChild(script);
      } else {
        crearYDescargarExcel();
      }
    }
    
    function crearYDescargarExcel() {
      // Preparar datos para Excel
      const datosExcel = productosUnicos.map(p => ({
        'ID': p.id,
        'Nombre': p.nombre,
        'Categoría Producto': p.categoriaProducto,
        'Categoría Página': p.categoriaPagina,
        'Referencia': p.referencia,
        'Precio Actual': p.precioActual,
        'Precio Anterior': p.precioAnterior,
        'Descuento %': p.descuento,
        'Ahorro €': p.ahorro,
        'Moneda': p.moneda,
        'Nuevo': p.esNuevo,
        'En Oferta': p.enOferta,
        'Disponibilidad': p.disponibilidad,
        'Enlace': p.enlace,
        'Imagen': p.imagenURL
      }));
      
      // Crear worksheet
      const ws = XLSX.utils.json_to_sheet(datosExcel);
      
      // Ajustar ancho de columnas
      ws['!cols'] = [
        { wch: 8 },   // ID
        { wch: 55 },  // Nombre
        { wch: 20 },  // Categoría Producto
        { wch: 25 },  // Categoría Página
        { wch: 20 },  // Referencia
        { wch: 15 },  // Precio Actual
        { wch: 15 },  // Precio Anterior
        { wch: 12 },  // Descuento
        { wch: 12 },  // Ahorro
        { wch: 8 },   // Moneda
        { wch: 8 },   // Nuevo
        { wch: 10 },  // En Oferta
        { wch: 18 },  // Disponibilidad
        { wch: 70 },  // Enlace
        { wch: 70 }   // Imagen
      ];
      
      // Crear workbook
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Productos Euroval');
      
      // Generar nombre con fecha
      const fecha = new Date().toISOString().split('T')[0];
      const hora = new Date().toTimeString().split(' ')[0].replace(/:/g, '-');
      const nombreArchivo = `euroval_${fecha}_${hora}.xlsx`;
      
      // Descargar
      XLSX.writeFile(wb, nombreArchivo);
      
      log(`Excel descargado: ${nombreArchivo}`, 'success');
      console.log('\n✅ PROCESO COMPLETADO CON ÉXITO\n');
    }
    
    function descargarJSON() {
      const dataStr = JSON.stringify(productosUnicos, null, 2);
      const blob = new Blob([dataStr], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      const fecha = new Date().toISOString().split('T')[0];
      a.download = `euroval_${fecha}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      log('JSON descargado como alternativa', 'success');
    }
    
    // Ejecutar descarga
    descargarExcel();
    
    // Hacer datos disponibles globalmente
    window.productosEuroval = productosUnicos;
    console.log('\n💡 Los datos están disponibles en: window.productosEuroval');
    
  } catch (error) {
    log(`Error fatal: ${error.message}`, 'error');
    console.error(error);
  }
  
})();
