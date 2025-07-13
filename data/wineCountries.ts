export interface WineRegion {
  id: string;
  name: string;
  nickname: string; // Memorable acronym/nickname
  location: string;
  climate: string;
  climateAcronym: string; // Memory aid for climate
  soils: string[];
  soilAcronym: string; // Memory aid for soil types
  keyGrapes: {
    white: string[];
    red: string[];
  };
  grapeAcronyms: {
    white: string; // Memory aid for white grapes
    red: string; // Memory aid for red grapes
  };
  wineStyles: string[];
  characteristics: string[];
  characteristicsAcronym: string; // Memory aid for characteristics
  notableSubRegions: string[];
  subRegionAcronym: string; // Memory aid for sub-regions
  classification: string;
  keyProducers: string[];
  foodPairings: string[];
  servingTemperature: string;
  agingPotential: string;
  module: string;
  funFacts: string[];
  memoryTricks: string[]; // Special memory aids and mnemonics
}

export interface WineCountry {
  id: string;
  name: string;
  continent: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  countryAcronym: string; // Memorable acronym for the country's wine identity
  totalRegions: number;
  keyCharacteristics: string[];
  regions: WineRegion[];
  countryMemoryTrick: string; // Overall memory aid for the country
}

export const wineCountries: WineCountry[] = [
  // FRANCE - "Forever Refining Amazing Noble Classics Expertly"
  {
    id: 'france',
    name: 'France',
    continent: 'Europe',
    coordinates: { lat: 46.6, lng: 2.2 },
    countryAcronym: 'FRANCE',
    totalRegions: 6,
    keyCharacteristics: ['Terroir-driven', 'Traditional methods', 'AOC system', 'Diverse climates'],
    countryMemoryTrick: 'Forever Refining Amazing Noble Classics Expertly - France sets the global wine standard',
    regions: [
      {
        id: 'champagne',
        name: 'Champagne',
        nickname: 'BUBBLES',
        location: 'Northeast France',
        climate: 'Cool continental',
        climateAcronym: 'CHILL',
        soils: ['Chalk', 'Limestone', 'Clay'],
        soilAcronym: 'CLC (See-Light-Chalk)',
        keyGrapes: {
          white: ['Chardonnay'],
          red: ['Pinot Noir', 'Pinot Meunier']
        },
        grapeAcronyms: {
          white: 'C (Chardonnay)',
          red: 'PNM (Pinot Noir-Meunier)'
        },
        wineStyles: ['Traditional Method Sparkling', 'Blanc de Blancs', 'Blanc de Noirs', 'Rosé Champagne'],
        characteristics: ['High acidity', 'Fine bubbles', 'Brioche notes', 'Mineral finish'],
        characteristicsAcronym: 'HFBM (High-Fine-Brioche-Mineral)',
        notableSubRegions: ['Côte des Blancs', 'Montagne de Reims', 'Vallée de la Marne'],
        subRegionAcronym: 'CMV (Côte-Montagne-Vallée)',
        classification: 'AOC Champagne',
        keyProducers: ['Dom Pérignon', 'Krug', 'Bollinger', 'Pol Roger'],
        foodPairings: ['Oysters', 'Caviar', 'Roasted poultry', 'Aged cheeses'],
        servingTemperature: '6-8°C (43-46°F)',
        agingPotential: '3-20+ years',
        module: 'Module 14: Sparkling Wines',
        funFacts: [
          'Only sparkling wine from this region can legally be called "Champagne"',
          'Dom Pérignon is credited with developing the traditional method',
          'The pressure in a Champagne bottle is about 3 times that of a car tire'
        ],
        memoryTricks: [
          'BUBBLES = Best Universal Bubbly Because Louis Enjoyed Sparkling',
          'Remember: Champagne = Chalk + Chardonnay + Celebration',
          'CMV regions = "Come Meet Véuve" (Veuve Clicquot reference)'
        ]
      },
      {
        id: 'burgundy',
        name: 'Burgundy (Bourgogne)',
        nickname: 'PINOT',
        location: 'East-central France',
        climate: 'Cool continental',
        climateAcronym: 'CRISP',
        soils: ['Limestone', 'Clay', 'Marl'],
        soilAcronym: 'LCM (Limestone-Clay-Marl)',
        keyGrapes: {
          white: ['Chardonnay'],
          red: ['Pinot Noir']
        },
        grapeAcronyms: {
          white: 'C (Only Chardonnay)',
          red: 'PN (Pure Noir)'
        },
        wineStyles: ['Elegant reds', 'Mineral whites', 'Village wines', 'Premier & Grand Cru'],
        characteristics: ['Terroir-driven', 'Elegant', 'Age-worthy', 'Complex minerality'],
        characteristicsAcronym: 'TEAC (Terroir-Elegant-Age-Complex)',
        notableSubRegions: ['Chablis', 'Côte de Nuits', 'Côte de Beaune', 'Côte Chalonnaise', 'Mâconnais'],
        subRegionAcronym: 'C²BCM (Chablis-Côte²-Beaune-Chalonnaise-Mâconnais)',
        classification: 'Regional → Village → Premier Cru → Grand Cru',
        keyProducers: ['Domaine de la Romanée-Conti', 'Louis Jadot', 'Joseph Drouhin'],
        foodPairings: ['Coq au vin', 'Escargot', 'Brie de Meaux', 'Duck confit'],
        servingTemperature: '12-16°C (54-61°F)',
        agingPotential: '5-25+ years',
        module: 'Module 5 & 7: Burgundy',
        funFacts: [
          'Home to the most expensive wine in the world (Romanée-Conti)',
          'Climate change is allowing harvest dates earlier than ever recorded',
          'Some vineyards are smaller than a football field'
        ],
        memoryTricks: [
          'PINOT = Pure Identity Needs Outstanding Terroir',
          'Remember: Burgundy = 2 grapes, 4 levels, infinite terroir',
          'C²BCM = "Côte Calls Burgundy Champions Make"'
        ]
      },
      {
        id: 'bordeaux',
        name: 'Bordeaux',
        nickname: 'BLEND',
        location: 'Southwest France',
        climate: 'Maritime temperate',
        climateAcronym: 'OCEAN',
        soils: ['Gravel (Left Bank)', 'Clay-limestone (Right Bank)'],
        soilAcronym: 'GC (Gravel-Clay split)',
        keyGrapes: {
          white: ['Sauvignon Blanc', 'Sémillon', 'Muscadelle'],
          red: ['Cabernet Sauvignon', 'Merlot', 'Cabernet Franc', 'Petit Verdot', 'Malbec']
        },
        grapeAcronyms: {
          white: 'SSM (Sauvignon-Sémillon-Muscadelle)',
          red: 'CMCPM (Cab-Merlot-CabFranc-Petit-Malbec)'
        },
        wineStyles: ['Left Bank blends', 'Right Bank blends', 'Sweet whites (Sauternes)', 'Dry whites'],
        characteristics: ['Structured tannins', 'Age-worthy', 'Blended wines', 'Elegant complexity'],
        characteristicsAcronym: 'SABE (Structured-Age-Blend-Elegant)',
        notableSubRegions: ['Médoc', 'Saint-Émilion', 'Pomerol', 'Sauternes', 'Pessac-Léognan'],
        subRegionAcronym: 'MSPSP (Médoc-Saint-Pomerol-Sauternes-Pessac)',
        classification: '1855 Classification, Saint-Émilion Classification, Cru Bourgeois',
        keyProducers: ['Château Margaux', 'Château Pétrus', "Château d'Yquem"],
        foodPairings: ['Lamb', 'Aged beef', 'Foie gras (with Sauternes)', 'Hard cheeses'],
        servingTemperature: '16-18°C (61-64°F)',
        agingPotential: '10-50+ years',
        module: 'Module 5 & 6: Bordeaux',
        funFacts: [
          'Bordeaux produces more fine wine than any other region',
          'The famous 1855 Classification is still used today',
          'Noble rot is essential for Sauternes production'
        ],
        memoryTricks: [
          'BLEND = Bordeaux Loves Every Noble Drop',
          'Left Bank = Cabernet Sauvignon + Gravel',
          'Right Bank = Merlot + Clay',
          'Remember: MSPSP = "Most Serious People Sip Properly"'
        ]
      },
      {
        id: 'loire-valley',
        name: 'Loire Valley',
        nickname: 'RIVER',
        location: 'Central France',
        climate: 'Cool continental to maritime',
        climateAcronym: 'FRESH',
        soils: ['Limestone', 'Flint', 'Volcanic tuff', 'Gravel'],
        soilAcronym: 'LFVG (Limestone-Flint-Volcanic-Gravel)',
        keyGrapes: {
          white: ['Sauvignon Blanc', 'Chenin Blanc', 'Melon de Bourgogne', 'Chardonnay'],
          red: ['Cabernet Franc', 'Pinot Noir', 'Gamay']
        },
        grapeAcronyms: {
          white: 'SCMC (Sauvignon-Chenin-Melon-Chardonnay)',
          red: 'CPG (Cabernet Franc-Pinot-Gamay)'
        },
        wineStyles: ['Crisp whites', 'Light reds', 'Sweet whites', 'Sparkling wines'],
        characteristics: ['High acidity', 'Mineral-driven', 'Food-friendly', 'Diverse styles'],
        characteristicsAcronym: 'HMFD (High-Mineral-Food-Diverse)',
        notableSubRegions: ['Sancerre', 'Pouilly-Fumé', 'Vouvray', 'Chinon', 'Muscadet'],
        subRegionAcronym: 'SPVCM (Sancerre-Pouilly-Vouvray-Chinon-Muscadet)',
        classification: 'AOC system with various appellations',
        keyProducers: ['Henri Bourgeois', 'Huet', 'Charles Joguet'],
        foodPairings: ['Goat cheese', 'River fish', 'Charcuterie', 'Light poultry'],
        servingTemperature: '8-14°C (46-57°F)',
        agingPotential: '2-20+ years (depending on style)',
        module: 'Module 5 & 6: Loire Valley',
        funFacts: [
          'Sancerre and Pouilly-Fumé are on opposite banks of the Loire River',
          'Muscadet is one of the few wines named after its grape variety',
          'Many châteaux in the region inspired fairy tales'
        ],
        memoryTricks: [
          'RIVER = Really Interesting Valley Expresses Refinement',
          'Loire = Long River = Long Valley = 4 regions',
          'SPVCM = "Sancerre People Very Carefully Make"'
        ]
      },
      {
        id: 'rhone-valley',
        name: 'Rhône Valley',
        nickname: 'SYRAH',
        location: 'Southeast France',
        climate: 'Continental (North) to Mediterranean (South)',
        climateAcronym: 'WARM',
        soils: ['Granite (North)', 'Galets (South)', 'Clay-limestone'],
        soilAcronym: 'GGC (Granite-Galets-Clay)',
        keyGrapes: {
          white: ['Viognier', 'Marsanne', 'Roussanne', 'Grenache Blanc'],
          red: ['Syrah', 'Grenache', 'Mourvèdre', 'Cinsault']
        },
        grapeAcronyms: {
          white: 'VMRG (Viognier-Marsanne-Roussanne-Grenache)',
          red: 'SGMC (Syrah-Grenache-Mourvèdre-Cinsault)'
        },
        wineStyles: ['Powerful reds', 'Aromatic whites', 'GSM blends', 'Single varietals'],
        characteristics: ['Full-bodied', 'Spicy', 'Sun-ripened', 'Robust tannins'],
        characteristicsAcronym: 'FSSR (Full-Spicy-Sun-Robust)',
        notableSubRegions: ['Hermitage', 'Côte-Rôtie', 'Châteauneuf-du-Pape', 'Condrieu'],
        subRegionAcronym: 'HCCC (Hermitage-Côte-Châteauneuf-Condrieu)',
        classification: 'Cru system in the North, AOC in the South',
        keyProducers: ['E. Guigal', 'M. Chapoutier', 'Domaine de la Janasse'],
        foodPairings: ['Grilled meats', 'Game', 'Provence herbs', 'Strong cheeses'],
        servingTemperature: '14-18°C (57-64°F)',
        agingPotential: '5-25+ years',
        module: 'Module 7 & 8: Rhône Valley',
        funFacts: [
          'Hermitage Hill is so steep that terraces are necessary',
          'Châteauneuf-du-Pape allows 18 grape varieties (13 originally)',
          'The Mistral wind helps keep vineyards dry and healthy'
        ],
        memoryTricks: [
          'SYRAH = Strong Yields Robust Aromatic Heritage',
          'North = Syrah = Steep slopes',
          'South = GSM blends = Gentle slopes',
          'HCCC = "Hermitage Creates Classic Cuvées"'
        ]
      },
      {
        id: 'alsace',
        name: 'Alsace',
        nickname: 'NOBLE',
        location: 'Northeast France (German border)',
        climate: 'Cool continental',
        climateAcronym: 'DRY',
        soils: ['Granite', 'Limestone', 'Sandstone', 'Volcanic'],
        soilAcronym: 'GLSV (Granite-Limestone-Sandstone-Volcanic)',
        keyGrapes: {
          white: ['Riesling', 'Gewürztraminer', 'Pinot Gris', 'Muscat', 'Pinot Blanc'],
          red: ['Pinot Noir']
        },
        grapeAcronyms: {
          white: 'RGPMB (Riesling-Gewürz-Pinot Gris-Muscat-Blanc)',
          red: 'PN (Pure Noir)'
        },
        wineStyles: ['Dry whites', 'Off-dry wines', 'Sweet wines', 'Late harvest'],
        characteristics: ['Aromatic intensity', 'Pure fruit', 'Mineral backbone', 'Food-friendly'],
        characteristicsAcronym: 'APMF (Aromatic-Pure-Mineral-Food)',
        notableSubRegions: ['Ribeauvillé', 'Riquewihr', 'Colmar'],
        subRegionAcronym: 'RRC (Ribeauvillé-Riquewihr-Colmar)',
        classification: 'Alsace AOC, Alsace Grand Cru, Vendange Tardive, Sélection de Grains Nobles',
        keyProducers: ['Trimbach', 'Hugel', 'Zind-Humbrecht'],
        foodPairings: ['Choucroute', 'Foie gras', 'Munster cheese', 'Asian cuisine'],
        servingTemperature: '8-12°C (46-54°F)',
        agingPotential: '3-20+ years',
        module: 'Module 4: Alsace',
        funFacts: [
          'Alsace is the only French region to label wines by grape variety',
          'The Vosges Mountains create a rain shadow effect',
          'Many producers still use traditional Alsatian flute bottles'
        ],
        memoryTricks: [
          'NOBLE = Notable Outstanding Bottles Love Excellence',
          '4 Noble grapes: RGPM (Really Great Pinots Make)',
          'RRC = "Riesling Rules Completely"'
        ]
      }
    ]
  },

  // GERMANY - "Great Rieslings Maintain Ancient Noble Yields"
  {
    id: 'germany',
    name: 'Germany',
    continent: 'Europe',
    coordinates: { lat: 51.2, lng: 10.5 },
    countryAcronym: 'GERMANY',
    totalRegions: 1,
    keyCharacteristics: ['Riesling mastery', 'Cool climate', 'Slate soils', 'Prädikat system'],
    countryMemoryTrick: 'Great Rieslings Maintain Ancient Noble Yields - Germany perfects cool-climate whites',
    regions: [
      {
        id: 'mosel',
        name: 'Mosel',
        nickname: 'SLATE',
        location: 'Western Germany',
        climate: 'Cool continental',
        climateAcronym: 'STEEP',
        soils: ['Slate (Devonian and Silurian)', 'Quartzite', 'Red sandstone'],
        soilAcronym: 'SQR (Slate-Quartzite-Red)',
        keyGrapes: {
          white: ['Riesling', 'Müller-Thurgau', 'Pinot Blanc'],
          red: ['Pinot Noir (Spätburgunder)']
        },
        grapeAcronyms: {
          white: 'RMP (Riesling-Müller-Pinot)',
          red: 'S (Spätburgunder)'
        },
        wineStyles: ['Light Rieslings', 'Kabinett', 'Spätlese', 'Auslese', 'Eiswein'],
        characteristics: ['Low alcohol', 'High acidity', 'Mineral precision', 'Delicate fruit'],
        characteristicsAcronym: 'LHMD (Low-High-Mineral-Delicate)',
        notableSubRegions: ['Bernkastel', 'Piesport', 'Wehlen'],
        subRegionAcronym: 'BPW (Bernkastel-Piesport-Wehlen)',
        classification: 'VDP classification system, QbA, QmP',
        keyProducers: ['Dr. Loosen', 'Fritz Haag', 'Egon Müller'],
        foodPairings: ['Spicy Asian food', 'Pork', 'Apple desserts', 'Fresh seafood'],
        servingTemperature: '7-10°C (45-50°F)',
        agingPotential: '5-30+ years',
        module: 'Module 4: Germany',
        funFacts: [
          'Vineyards are planted on slopes up to 70% gradient',
          'Slate soils retain heat and reflect it back to the vines',
          'Some vineyards can only be worked by hand due to steepness'
        ],
        memoryTricks: [
          'SLATE = Steep Land Always Tastes Excellent',
          'Mosel = Most Original Steep Land',
          'BPW = "Best Producers Win"'
        ]
      }
    ]
  },

  // ITALY - "Incredible Terroir Always Loves Yearning"
  {
    id: 'italy',
    name: 'Italy',
    continent: 'Europe',
    coordinates: { lat: 42.8, lng: 12.6 },
    countryAcronym: 'ITALY',
    totalRegions: 2,
    keyCharacteristics: ['Native varietals', 'Diverse terroir', 'Food-focused', 'Ancient traditions'],
    countryMemoryTrick: 'Incredible Terroir Always Loves Yearning - Italy celebrates indigenous grapes and food harmony',
    regions: [
      {
        id: 'piedmont',
        name: 'Piedmont',
        nickname: 'NEBBIOLO',
        location: 'Northwest Italy',
        climate: 'Continental with fog (nebbia)',
        climateAcronym: 'FOGGY',
        soils: ['Calcareous marl', 'Sandstone', 'Clay'],
        soilAcronym: 'CSC (Calcareous-Sandstone-Clay)',
        keyGrapes: {
          white: ['Arneis', 'Cortese', 'Moscato'],
          red: ['Nebbiolo', 'Barbera', 'Dolcetto']
        },
        grapeAcronyms: {
          white: 'ACM (Arneis-Cortese-Moscato)',
          red: 'NBD (Nebbiolo-Barbera-Dolcetto)'
        },
        wineStyles: ['Barolo and Barbaresco', "Barbera d'Alba", "Moscato d'Asti", 'Gavi'],
        characteristics: ['High tannins', 'High acidity', 'Age-worthy', 'Elegant complexity'],
        characteristicsAcronym: 'HHAE (High-High-Age-Elegant)',
        notableSubRegions: ['Barolo', 'Barbaresco', 'Alba', 'Asti'],
        subRegionAcronym: 'BBAA (Barolo-Barbaresco-Alba-Asti)',
        classification: 'DOCG, DOC, IGT',
        keyProducers: ['Gaja', 'Antinori', 'Bruno Giacosa'],
        foodPairings: ['Truffle dishes', 'Brasato al Barolo', 'Aged cheeses', 'Game'],
        servingTemperature: '16-18°C (61-64°F)',
        agingPotential: '10-30+ years',
        module: 'Module 9: Northern Italy',
        funFacts: [
          'Barolo is called "King of Wines and Wine of Kings"',
          'Nebbiolo gets its name from "nebbia" (fog)',
          'White truffles from Alba are world-renowned'
        ],
        memoryTricks: [
          'NEBBIOLO = Noble Excellence Brings Beautiful Italian Outstanding Legacy',
          'Nebbiolo = Nebbia (fog) = Needs time',
          'BBAA = "Barolo Barbaresco Always Age"'
        ]
      },
      {
        id: 'tuscany',
        name: 'Tuscany',
        nickname: 'SANGIOVESE',
        location: 'Central Italy',
        climate: 'Mediterranean with continental influences',
        climateAcronym: 'SUNNY',
        soils: ['Galestro', 'Alberese', 'Clay', 'Sand'],
        soilAcronym: 'GACS (Galestro-Alberese-Clay-Sand)',
        keyGrapes: {
          white: ['Trebbiano', 'Malvasia', 'Vermentino'],
          red: ['Sangiovese', 'Cabernet Sauvignon', 'Merlot', 'Cabernet Franc']
        },
        grapeAcronyms: {
          white: 'TMV (Trebbiano-Malvasia-Vermentino)',
          red: 'SCMC (Sangiovese-Cabernet S-Merlot-Cabernet F)'
        },
        wineStyles: ['Chianti Classico', 'Brunello di Montalcino', 'Super Tuscans', 'Vino Nobile'],
        characteristics: ['Cherry fruit', 'Earthy undertones', 'High acidity', 'Food-friendly'],
        characteristicsAcronym: 'CEHF (Cherry-Earthy-High-Food)',
        notableSubRegions: ['Chianti Classico', 'Montalcino', 'Montepulciano', 'Bolgheri'],
        subRegionAcronym: 'CMMB (Chianti-Montalcino-Montepulciano-Bolgheri)',
        classification: 'DOCG, DOC, IGT, Super Tuscan',
        keyProducers: ['Sassicaia', 'Ornellaia', 'Banfi'],
        foodPairings: ['Bistecca alla Fiorentina', 'Wild boar', 'Pecorino cheese', 'Ribollita'],
        servingTemperature: '16-18°C (61-64°F)',
        agingPotential: '5-25+ years',
        module: 'Module 10: Central Italy',
        funFacts: [
          'Super Tuscans broke traditional winemaking rules',
          'Chianti bottles were traditionally in straw baskets (fiasco)',
          'Brunello must be 100% Sangiovese'
        ],
        memoryTricks: [
          'SANGIOVESE = Super Amazing Noble Grape In Outstanding Vineyards Everywhere',
          'Chianti = Cherry + Anti-acid (high acidity)',
          'CMMB = "Chianti Makes Many Bottles"'
        ]
      }
    ]
  },

  // SPAIN - "Strong Passionate Ancient Noble Imports"
  {
    id: 'spain',
    name: 'Spain',
    continent: 'Europe',
    coordinates: { lat: 40.0, lng: -4.0 },
    countryAcronym: 'SPAIN',
    totalRegions: 2,
    keyCharacteristics: ['Tempranillo dominance', 'Oak aging', 'Continental climate', 'Traditional methods'],
    countryMemoryTrick: 'Strong Passionate Ancient Noble Imports - Spain balances tradition with innovation',
    regions: [
      {
        id: 'rioja',
        name: 'Rioja',
        nickname: 'TEMPRANILLO',
        location: 'Northern Spain',
        climate: 'Continental with maritime Atlantic influence',
        climateAcronym: 'MIXED',
        soils: ['Clay-limestone', 'Alluvial', 'Iron-rich clay'],
        soilAcronym: 'CAI (Clay-Alluvial-Iron)',
        keyGrapes: {
          white: ['Viura (Macabeo)', 'Malvasía', 'Garnacha Blanca'],
          red: ['Tempranillo', 'Garnacha', 'Graciano', 'Mazuelo']
        },
        grapeAcronyms: {
          white: 'VMG (Viura-Malvasía-Garnacha)',
          red: 'TGGM (Tempranillo-Garnacha-Graciano-Mazuelo)'
        },
        wineStyles: ['Traditional oak-aged reds', 'Modern fruit-forward style', 'White Rioja'],
        characteristics: ['Oak influence', 'Vanilla notes', 'Silky tannins', 'Age-worthy'],
        characteristicsAcronym: 'OVSA (Oak-Vanilla-Silky-Age)',
        notableSubRegions: ['Rioja Alta', 'Rioja Alavesa', 'Rioja Baja'],
        subRegionAcronym: 'AAB (Alta-Alavesa-Baja)',
        classification: 'Joven, Crianza, Reserva, Gran Reserva',
        keyProducers: ['Marqués de Riscal', 'López de Heredia', 'CVNE'],
        foodPairings: ['Jamón ibérico', 'Roasted lamb', 'Manchego cheese', 'Paella'],
        servingTemperature: '16-18°C (61-64°F)',
        agingPotential: '5-20+ years',
        module: 'Module 8 & 9: Spain',
        funFacts: [
          'First Spanish region to receive DOC status',
          'American oak was traditionally used for aging',
          'Tempranillo is called different names in different regions'
        ],
        memoryTricks: [
          'TEMPRANILLO = Terrific Excellence Makes Perfect Rioja Always Notable In Local Landmarks',
          'Rioja = 3 parts: AAB (Always Ages Beautifully)',
          'Remember: Tempranillo = Temp (early) + America oak'
        ]
      },
      {
        id: 'ribera-del-duero',
        name: 'Ribera del Duero',
        nickname: 'TINTO',
        location: 'Central Spain',
        climate: 'Continental with extreme temperature variations',
        climateAcronym: 'EXTREME',
        soils: ['Limestone', 'Clay', 'Sandy loam'],
        soilAcronym: 'LCS (Limestone-Clay-Sandy)',
        keyGrapes: {
          white: ['Albillo'],
          red: ['Tinto Fino (Tempranillo)', 'Cabernet Sauvignon', 'Merlot', 'Malbec']
        },
        grapeAcronyms: {
          white: 'A (Albillo only)',
          red: 'TCMM (Tinto-Cabernet-Merlot-Malbec)'
        },
        wineStyles: ['Powerful reds', 'Age-worthy wines', 'Premium reserves'],
        characteristics: ['Intense color', 'Concentrated fruit', 'Robust tannins', 'Long aging potential'],
        characteristicsAcronym: 'ICRL (Intense-Concentrated-Robust-Long)',
        notableSubRegions: ['La Horra', 'Roa', 'Aranda de Duero'],
        subRegionAcronym: 'LRA (La Horra-Roa-Aranda)',
        classification: 'Joven, Crianza, Reserva, Gran Reserva',
        keyProducers: ['Vega Sicilia', 'Pingus', 'Pesquera'],
        foodPairings: ['Roasted meats', 'Game', 'Strong cheeses', 'Cocido madrileño'],
        servingTemperature: '16-18°C (61-64°F)',
        agingPotential: '10-30+ years',
        module: 'Module 9: Northern Spain',
        funFacts: [
          "Home to Spain's most expensive wine (Vega Sicilia Único)",
          'Extreme diurnal temperature variation preserves acidity',
          'Altitude ranges from 750-900 meters'
        ],
        memoryTricks: [
          'TINTO = Terrific Intense Noble Tempranillo Outdoes',
          'Ribera = River + Extreme temps = Intensity',
          'LRA = "La Ribera Always" (remembers its river heritage)'
        ]
      }
    ]
  },

  // AUSTRALIA - "Amazing Unique Shiraz Tastes Remarkably Amazing Long In Australia"
  {
    id: 'australia',
    name: 'Australia',
    continent: 'Oceania',
    coordinates: { lat: -25.0, lng: 135.0 },
    countryAcronym: 'AUSTRALIA',
    totalRegions: 2,
    keyCharacteristics: ['Shiraz excellence', 'Diverse climates', 'Modern techniques', 'Value proposition'],
    countryMemoryTrick: 'Amazing Unique Shiraz Tastes Remarkably Amazing Long In Australia - New World innovation meets Old World quality',
    regions: [
      {
        id: 'barossa-valley',
        name: 'Barossa Valley',
        nickname: 'SHIRAZ',
        location: 'South Australia',
        climate: 'Continental with warm summers',
        climateAcronym: 'WARM',
        soils: ['Clay', 'Sand', 'Limestone'],
        soilAcronym: 'CSL (Clay-Sand-Limestone)',
        keyGrapes: {
          white: ['Riesling', 'Chardonnay', 'Viognier'],
          red: ['Shiraz', 'Grenache', 'Mourvèdre', 'Cabernet Sauvignon']
        },
        grapeAcronyms: {
          white: 'RCV (Riesling-Chardonnay-Viognier)',
          red: 'SGMC (Shiraz-Grenache-Mourvèdre-Cabernet)'
        },
        wineStyles: ['Full-bodied Shiraz', 'Eden Valley Riesling', 'GSM blends', 'Fortified wines'],
        characteristics: ['Rich and powerful', 'Ripe fruit', 'Spice and pepper', 'Generous oak'],
        characteristicsAcronym: 'RRSG (Rich-Ripe-Spice-Generous)',
        notableSubRegions: ['Eden Valley', 'Marananga', 'Tanunda'],
        subRegionAcronym: 'EMT (Eden-Marananga-Tanunda)',
        classification: 'Barossa Valley GI, Eden Valley GI',
        keyProducers: ['Penfolds', 'Henschke', 'Torbreck'],
        foodPairings: ['BBQ meats', 'Kangaroo', 'Aged cheddar', 'Dark chocolate'],
        servingTemperature: '16-18°C (61-64°F)',
        agingPotential: '10-25+ years',
        module: 'Module 11: Australia',
        funFacts: [
          "Home to some of the world's oldest Shiraz vines",
          'German and British settlers established the region',
          "Penfolds Grange is Australia's most famous wine"
        ],
        memoryTricks: [
          'SHIRAZ = Strong Heritage In Rich Australian Zones',
          'Barossa = Big Australian Rich Old Shiraz Always',
          'EMT = "Every Magnificent Terroir"'
        ]
      },
      {
        id: 'hunter-valley',
        name: 'Hunter Valley',
        nickname: 'SEMILLON',
        location: 'New South Wales',
        climate: 'Humid subtropical',
        climateAcronym: 'HUMID',
        soils: ['Volcanic', 'Alluvial', 'Clay'],
        soilAcronym: 'VAC (Volcanic-Alluvial-Clay)',
        keyGrapes: {
          white: ['Sémillon', 'Chardonnay'],
          red: ['Shiraz', 'Cabernet Sauvignon']
        },
        grapeAcronyms: {
          white: 'SC (Sémillon-Chardonnay)',
          red: 'SC (Shiraz-Cabernet)'
        },
        wineStyles: ['Hunter Valley Sémillon', 'Traditional Shiraz', 'Show Reserve wines'],
        characteristics: ['Unique terroir', 'Aged Sémillon complexity', 'Earthy Shiraz', 'Longevity'],
        characteristicsAcronym: 'UAEL (Unique-Aged-Earthy-Long)',
        notableSubRegions: ['Lower Hunter', 'Upper Hunter', 'Broke Fordwich'],
        subRegionAcronym: 'LUB (Lower-Upper-Broke)',
        classification: 'Hunter Valley GI',
        keyProducers: ["Tyrrell's", 'Brokenwood', "McWilliam's"],
        foodPairings: ['Fresh seafood', 'Asian cuisine', 'Grilled vegetables', 'Soft cheeses'],
        servingTemperature: '10-12°C for whites, 16-18°C for reds',
        agingPotential: '10-20+ years',
        module: 'Module 13: Australian Regional Specialties',
        funFacts: [
          "Australia's oldest wine region",
          'Hunter Valley Sémillon is unique - aged without oak',
          'Vintage variation is extreme due to weather patterns'
        ],
        memoryTricks: [
          'SEMILLON = Superb Early Maturation In Long-Lived Outstanding Notes',
          'Hunter = Hunts unique Sémillon style',
          'LUB = "Love Unique Bottles"'
        ]
      }
    ]
  },

  // USA - "Unbelievable Sophisticated American"
  {
    id: 'usa',
    name: 'United States',
    continent: 'North America',
    coordinates: { lat: 39.0, lng: -98.0 },
    countryAcronym: 'USA',
    totalRegions: 2,
    keyCharacteristics: ['Diverse terroir', 'Innovation', 'Premium focus', 'AVA system'],
    countryMemoryTrick: 'Unbelievable Sophisticated American - USA brings New World innovation to fine wine',
    regions: [
      {
        id: 'napa-valley',
        name: 'Napa Valley',
        nickname: 'CABERNET',
        location: 'Northern California',
        climate: 'Mediterranean with marine influence',
        climateAcronym: 'PERFECT',
        soils: ['Volcanic', 'Alluvial', 'Sedimentary'],
        soilAcronym: 'VAS (Volcanic-Alluvial-Sedimentary)',
        keyGrapes: {
          white: ['Chardonnay', 'Sauvignon Blanc'],
          red: ['Cabernet Sauvignon', 'Merlot', 'Pinot Noir', 'Zinfandel']
        },
        grapeAcronyms: {
          white: 'CS (Chardonnay-Sauvignon)',
          red: 'CMPZ (Cabernet-Merlot-Pinot-Zinfandel)'
        },
        wineStyles: ['Premium Cabernet Sauvignon', 'Oaked Chardonnay', 'Bordeaux-style blends'],
        characteristics: ['Rich and powerful', 'Ripe fruit', 'Generous oak', 'Age-worthy'],
        characteristicsAcronym: 'RRGA (Rich-Ripe-Generous-Age)',
        notableSubRegions: ['Rutherford', 'Oakville', 'Stags Leap District', 'Howell Mountain'],
        subRegionAcronym: 'ROSH (Rutherford-Oakville-Stags-Howell)',
        classification: 'Napa Valley AVA and sub-AVAs',
        keyProducers: ['Screaming Eagle', 'Opus One', 'Caymus'],
        foodPairings: ['Prime steaks', 'Lamb', 'Rich poultry', 'Aged cheeses'],
        servingTemperature: '16-18°C (61-64°F)',
        agingPotential: '10-30+ years',
        module: 'Module 11 & 13: California',
        funFacts: [
          "Established America's first agricultural preserve",
          '1976 Judgment of Paris put Napa on the world map',
          "Home to some of America's most expensive wines"
        ],
        memoryTricks: [
          "CABERNET = California's Amazing Bordeaux-Replicated Noble Exquisite Taste",
          'Napa = North America Premium Always',
          'ROSH = "Rich Opulent Stags Howell"'
        ]
      },
      {
        id: 'willamette-valley',
        name: 'Willamette Valley',
        nickname: 'PINOT',
        location: 'Oregon',
        climate: 'Cool marine with dry summers',
        climateAcronym: 'COOL',
        soils: ['Volcanic (Jory)', 'Marine sedimentary (Willakenzie)', 'Loess'],
        soilAcronym: 'VML (Volcanic-Marine-Loess)',
        keyGrapes: {
          white: ['Pinot Gris', 'Chardonnay', 'Riesling'],
          red: ['Pinot Noir']
        },
        grapeAcronyms: {
          white: 'PCR (Pinot Gris-Chardonnay-Riesling)',
          red: 'PN (Pure Noir)'
        },
        wineStyles: ['Elegant Pinot Noir', 'Crisp Pinot Gris', 'Sparkling wines'],
        characteristics: ['Restraint and elegance', 'Bright acidity', 'Earth and fruit balance', 'Age-worthy'],
        characteristicsAcronym: 'RBEA (Restraint-Bright-Earth-Age)',
        notableSubRegions: ['Dundee Hills', 'Yamhill-Carlton', 'Ribbon Ridge', 'Chehalem Mountains'],
        subRegionAcronym: 'DYRC (Dundee-Yamhill-Ribbon-Chehalem)',
        classification: 'Willamette Valley AVA with nested sub-AVAs',
        keyProducers: ['Domaine Drouhin', 'Archery Summit', 'Sokol Blosser'],
        foodPairings: ['Pacific Northwest salmon', 'Wild mushrooms', 'Duck', 'Hazelnuts'],
        servingTemperature: '14-16°C (57-61°F)',
        agingPotential: '5-15+ years',
        module: 'Module 13: Regional Specialties USA',
        funFacts: [
          'Burgundian producers established wineries here',
          'Volcanic Jory soil is red and well-draining',
          "Cool climate similar to Burgundy's Côte d'Or"
        ],
        memoryTricks: [
          'PINOT = Perfect In Northern Oregon Territory',
          'Willamette = Will Always Make Elegant Terroir',
          'DYRC = "Dundee Yields Remarkable Character"'
        ]
      }
    ]
  },

  // AUSTRIA - "Amazing Unique Sweet Treasures Ripen In Austria"
  {
    id: 'austria',
    name: 'Austria',
    continent: 'Europe',
    coordinates: { lat: 47.5, lng: 14.5 },
    countryAcronym: 'AUSTRIA',
    totalRegions: 2,
    keyCharacteristics: ['Grüner Veltliner', 'Sweet wines', 'Cool climate', 'Quality focus'],
    countryMemoryTrick: 'Amazing Unique Sweet Treasures Ripen In Austria - Austria excels at distinctive whites and noble sweet wines',
    regions: [
      {
        id: 'wachau',
        name: 'Wachau',
        nickname: 'GRUNER',
        location: 'Danube Valley, Lower Austria',
        climate: 'Cool continental with Danube influence',
        climateAcronym: 'DANUBE',
        soils: ['Primary rock', 'Loess', 'Sandy gravel'],
        soilAcronym: 'PLS (Primary-Loess-Sandy)',
        keyGrapes: {
          white: ['Grüner Veltliner', 'Riesling'],
          red: []
        },
        grapeAcronyms: {
          white: 'GR (Grüner-Riesling)',
          red: 'None'
        },
        wineStyles: ['Steinfeder (light)', 'Federspiel (medium)', 'Smaragd (full-bodied)'],
        characteristics: ['White pepper notes', 'Mineral precision', 'Citrus freshness', 'Age-worthy'],
        characteristicsAcronym: 'PMCA (Pepper-Mineral-Citrus-Age)',
        notableSubRegions: ['Loiben', 'Dürnstein', 'Spitz'],
        subRegionAcronym: 'LDS (Loiben-Dürnstein-Spitz)',
        classification: 'Vinea Wachau classification system',
        keyProducers: ['F.X. Pichler', 'Domäne Wachau', 'Knoll'],
        foodPairings: ['Wiener Schnitzel', 'Asparagus', 'River fish', 'Vegetarian cuisine'],
        servingTemperature: '8-10°C (46-50°F)',
        agingPotential: '5-20+ years',
        module: 'Module 4: Austria',
        funFacts: [
          'Smaragd wines are named after emerald lizards in the vineyards',
          'Terraced vineyards date back to Roman times',
          'Danube River moderates extreme temperatures'
        ],
        memoryTricks: [
          'GRUNER = Green Refreshing Unique Notes Elevate Reputation',
          'Wachau = Watch out for 3 levels: SFS (Steinfeder-Federspiel-Smaragd)',
          'LDS = "Loiben Delivers Smaragd"'
        ]
      },
      {
        id: 'burgenland',
        name: 'Burgenland',
        nickname: 'SWEET',
        location: 'Eastern Austria, Hungarian border',
        climate: 'Continental with Pannonian influence',
        climateAcronym: 'MISTY',
        soils: ['Clay', 'Limestone', 'Gravel'],
        soilAcronym: 'CLG (Clay-Limestone-Gravel)',
        keyGrapes: {
          white: ['Welschriesling', 'Chardonnay', 'Grüner Veltliner'],
          red: ['Blaufränkisch', 'Zweigelt', 'St. Laurent']
        },
        grapeAcronyms: {
          white: 'WCG (Welschriesling-Chardonnay-Grüner)',
          red: 'BZS (Blaufränkisch-Zweigelt-St.Laurent)'
        },
        wineStyles: ['Noble sweet wines', 'TBA', 'Eiswein', 'Dry reds'],
        characteristics: ['Botrytis influence', 'Concentrated sweetness', 'Balanced acidity', 'Complex'],
        characteristicsAcronym: 'BCBC (Botrytis-Concentrated-Balanced-Complex)',
        notableSubRegions: ['Neusiedlersee', 'Rust', 'Mittelburgenland'],
        subRegionAcronym: 'NRM (Neusiedlersee-Rust-Mittelburgenland)',
        classification: 'DAC system, Prädikat levels',
        keyProducers: ['Kracher', 'Feiler-Artinger', 'Umathum'],
        foodPairings: ['Foie gras', 'Blue cheese', 'Fruit tarts', 'Spicy Asian cuisine'],
        servingTemperature: '6-8°C for sweet wines',
        agingPotential: '10-30+ years',
        module: 'Module 4: Austria',
        funFacts: [
          'Lake Neusiedl creates perfect conditions for noble rot',
          'Austro-Hungarian Empire heritage influences wine styles',
          'Ausbruch is a unique local sweet wine category'
        ],
        memoryTricks: [
          'SWEET = Special Wines Excel Every Time',
          'Burgenland = Botrytis + Lake = Sweet success',
          'NRM = "Noble Rot Makes" great wines'
        ]
      }
    ]
  },

  // PORTUGAL - "Port Outstanding Regional Treasures Unique Grapes Amazing Legacy"
  {
    id: 'portugal',
    name: 'Portugal',
    continent: 'Europe',
    coordinates: { lat: 39.5, lng: -8.0 },
    countryAcronym: 'PORTUGAL',
    totalRegions: 2,
    keyCharacteristics: ['Indigenous varieties', 'Fortified wines', 'Atlantic influence', 'Value wines'],
    countryMemoryTrick: 'Port Outstanding Regional Treasures Unique Grapes Amazing Legacy - Portugal preserves unique native grapes and traditions',
    regions: [
      {
        id: 'douro',
        name: 'Douro Valley',
        nickname: 'PORT',
        location: 'Northern Portugal',
        climate: 'Continental with Atlantic influence',
        climateAcronym: 'STEEP',
        soils: ['Schist', 'Granite'],
        soilAcronym: 'SG (Schist-Granite)',
        keyGrapes: {
          white: ['Malvasia Fina', 'Viosinho', 'Gouveio'],
          red: ['Touriga Nacional', 'Touriga Franca', 'Tinta Roriz', 'Tinta Barroca', 'Tinto Cão']
        },
        grapeAcronyms: {
          white: 'MVG (Malvasia-Viosinho-Gouveio)',
          red: 'TTTTT (Touriga²-Tinta³)'
        },
        wineStyles: ['Port wines', 'Dry red table wines', 'White Port'],
        characteristics: ['Powerful structure', 'Complex layers', 'Sweet fortified', 'Age-worthy'],
        characteristicsAcronym: 'PCSA (Powerful-Complex-Sweet-Age)',
        notableSubRegions: ['Baixo Corgo', 'Cima Corgo', 'Douro Superior'],
        subRegionAcronym: 'BCC (Baixo-Cima-Corgo + Superior)',
        classification: 'Beneficio system for Port, DOC Douro',
        keyProducers: ["Taylor's", 'Graham\'s', 'Quinta do Noval'],
        foodPairings: ['Stilton cheese', 'Dark chocolate', 'Walnuts', 'Dried fruits'],
        servingTemperature: '14-18°C (57-64°F)',
        agingPotential: '20-50+ years for Vintage Port',
        module: 'Module 15: Fortified Wines',
        funFacts: [
          'Oldest demarcated wine region in the world (1756)',
          'Terraces are UNESCO World Heritage sites',
          'Over 100 grape varieties authorized for Port'
        ],
        memoryTricks: [
          'PORT = Portugal\'s Outstanding Regional Treasure',
          'Douro = Do Our Unique River Opus',
          'BCC = "Best Comes from Cima"'
        ]
      },
      {
        id: 'vinho-verde',
        name: 'Vinho Verde',
        nickname: 'GREEN',
        location: 'Northwest Portugal',
        climate: 'Maritime Atlantic',
        climateAcronym: 'FRESH',
        soils: ['Granite', 'Sandy'],
        soilAcronym: 'GS (Granite-Sandy)',
        keyGrapes: {
          white: ['Alvarinho', 'Loureiro', 'Trajadura', 'Avesso'],
          red: ['Vinhão', 'Espadeiro']
        },
        grapeAcronyms: {
          white: 'ALTA (Alvarinho-Loureiro-Trajadura-Avesso)',
          red: 'VE (Vinhão-Espadeiro)'
        },
        wineStyles: ['Light, fresh whites', 'Slightly sparkling', 'Red Vinho Verde'],
        characteristics: ['Low alcohol', 'High acidity', 'Citrus notes', 'Light effervescence'],
        characteristicsAcronym: 'LHCL (Low-High-Citrus-Light)',
        notableSubRegions: ['Monção e Melgaço', 'Lima', 'Cávado'],
        subRegionAcronym: 'MLC (Monção-Lima-Cávado)',
        classification: 'DOC Vinho Verde with sub-regions',
        keyProducers: ['Quinta de Soalheiro', 'Anselmo Mendes', 'Aphros'],
        foodPairings: ['Fresh seafood', 'Salads', 'Sushi', 'Light appetizers'],
        servingTemperature: '6-8°C (43-46°F)',
        agingPotential: '1-3 years (drink young)',
        module: 'Module 10: Portugal',
        funFacts: [
          '"Green wine" refers to youth, not color',
          'Traditional pergola training system',
          'Perfect summer wine with natural low alcohol'
        ],
        memoryTricks: [
          'GREEN = Great Refreshing Early Enjoyment Naturally',
          'Vinho Verde = Young + Fresh + Fun',
          'MLC = "Most Light Crisp"'
        ]
      }
    ]
  },

  // GREECE - "Great Regional Excellence Expressing Classic Elements"
  {
    id: 'greece',
    name: 'Greece',
    continent: 'Europe',
    coordinates: { lat: 39.0, lng: 22.0 },
    countryAcronym: 'GREECE',
    totalRegions: 2,
    keyCharacteristics: ['Ancient heritage', 'Indigenous varieties', 'Mediterranean climate', 'Island wines'],
    countryMemoryTrick: 'Great Regional Excellence Expressing Classic Elements - Greece combines ancient winemaking with unique native grapes',
    regions: [
      {
        id: 'santorini',
        name: 'Santorini',
        nickname: 'VOLCANIC',
        location: 'Cyclades Islands, Aegean Sea',
        climate: 'Hot Mediterranean with cooling winds',
        climateAcronym: 'WINDY',
        soils: ['Volcanic ash', 'Pumice', 'Lava'],
        soilAcronym: 'VPL (Volcanic-Pumice-Lava)',
        keyGrapes: {
          white: ['Assyrtiko', 'Athiri', 'Aidani'],
          red: ['Mavrotragano', 'Mandilaria']
        },
        grapeAcronyms: {
          white: 'AAA (Assyrtiko-Athiri-Aidani)',
          red: 'MM (Mavrotragano-Mandilaria)'
        },
        wineStyles: ['Dry mineral whites', 'Vinsanto (sweet)', 'Nykteri (oak-aged)'],
        characteristics: ['High acidity', 'Mineral intensity', 'Salt notes', 'Age-worthy'],
        characteristicsAcronym: 'HMSA (High-Mineral-Salt-Age)',
        notableSubRegions: ['Pyrgos', 'Megalochori', 'Akrotiri'],
        subRegionAcronym: 'PMA (Pyrgos-Megalochori-Akrotiri)',
        classification: 'PDO Santorini',
        keyProducers: ['Sigalas', 'Gaia', 'Argyros'],
        foodPairings: ['Fresh seafood', 'Feta cheese', 'Grilled octopus', 'Greek salad'],
        servingTemperature: '8-10°C (46-50°F)',
        agingPotential: '5-15+ years',
        module: 'Module 10: Greece',
        funFacts: [
          'Vines trained in basket shape (kouloura) for wind protection',
          'No phylloxera due to volcanic soils',
          'Some vines are over 200 years old'
        ],
        memoryTricks: [
          'VOLCANIC = Very Outstanding Lava Creates Amazing Notes In Caldera',
          'Santorini = Salt + Assyrtiko = Sea minerality',
          'AAA = "Absolutely Amazing Assyrtiko"'
        ]
      },
      {
        id: 'naoussa',
        name: 'Naoussa',
        nickname: 'XINOMAVRO',
        location: 'Macedonia, Northern Greece',
        climate: 'Continental with Mediterranean influence',
        climateAcronym: 'COOL',
        soils: ['Limestone', 'Clay', 'Sandy loam'],
        soilAcronym: 'LCS (Limestone-Clay-Sandy)',
        keyGrapes: {
          white: [],
          red: ['Xinomavro']
        },
        grapeAcronyms: {
          white: 'None',
          red: 'X (Xinomavro only)'
        },
        wineStyles: ['Age-worthy reds', 'Rosé', 'Traditional style'],
        characteristics: ['High tannins', 'High acidity', 'Tomato notes', 'Complex aromatics'],
        characteristicsAcronym: 'HHTC (High-High-Tomato-Complex)',
        notableSubRegions: ['Trilouris', 'Fytia', 'Gastra'],
        subRegionAcronym: 'TFG (Trilouris-Fytia-Gastra)',
        classification: 'PDO Naoussa',
        keyProducers: ['Kir-Yianni', 'Boutari', 'Thymiopoulos'],
        foodPairings: ['Lamb dishes', 'Game meats', 'Aged cheeses', 'Mushroom dishes'],
        servingTemperature: '16-18°C (61-64°F)',
        agingPotential: '10-25+ years',
        module: 'Module 10: Greece',
        funFacts: [
          'Xinomavro means "acid black" in Greek',
          'Often compared to Nebbiolo for structure',
          'Traditional Easter lamb pairing'
        ],
        memoryTricks: [
          'XINOMAVRO = eXceptional Indigenous Noble Outstanding Mediterranean Aromatic Variety Really Outstanding',
          'Naoussa = Greece\'s Nebbiolo',
          'TFG = "Traditional Fine Greeks"'
        ]
      }
    ]
  },

  // CHILE - "Cool Heights Inspire Long Excellence"
  {
    id: 'chile',
    name: 'Chile',
    continent: 'South America',
    coordinates: { lat: -35.0, lng: -71.0 },
    countryAcronym: 'CHILE',
    totalRegions: 2,
    keyCharacteristics: ['Phylloxera-free', 'Coastal influence', 'Altitude variation', 'Value to premium'],
    countryMemoryTrick: 'Cool Heights Inspire Long Excellence - Chile stretches from desert to ice with perfect vine conditions',
    regions: [
      {
        id: 'maipo-valley',
        name: 'Maipo Valley',
        nickname: 'CABERNET',
        location: 'Central Valley, near Santiago',
        climate: 'Mediterranean with Andean influence',
        climateAcronym: 'ANDEAN',
        soils: ['Alluvial', 'Colluvial', 'Rocky'],
        soilAcronym: 'ACR (Alluvial-Colluvial-Rocky)',
        keyGrapes: {
          white: ['Chardonnay', 'Sauvignon Blanc'],
          red: ['Cabernet Sauvignon', 'Carmenère', 'Merlot', 'Syrah']
        },
        grapeAcronyms: {
          white: 'CS (Chardonnay-Sauvignon)',
          red: 'CCMS (Cabernet-Carmenère-Merlot-Syrah)'
        },
        wineStyles: ['Premium Cabernet', 'Bordeaux blends', 'Icon wines'],
        characteristics: ['Eucalyptus notes', 'Firm structure', 'Cassis fruit', 'Mint hints'],
        characteristicsAcronym: 'EFCM (Eucalyptus-Firm-Cassis-Mint)',
        notableSubRegions: ['Alto Maipo', 'Central Maipo', 'Puente Alto'],
        subRegionAcronym: 'ACP (Alto-Central-Puente)',
        classification: 'DO Maipo Valley',
        keyProducers: ['Concha y Toro', 'Santa Rita', 'Almaviva'],
        foodPairings: ['Grilled beef', 'Empanadas', 'Hard cheeses', 'Roasted vegetables'],
        servingTemperature: '16-18°C (61-64°F)',
        agingPotential: '10-25+ years',
        module: 'Module 13: Chile',
        funFacts: [
          'Chile\'s wine capital and oldest wine region',
          'Don Melchor was Chile\'s first icon wine',
          'Andes Mountains provide natural irrigation'
        ],
        memoryTricks: [
          'CABERNET = Chile\'s Amazing Bordeaux Excellence Really Notable Especially Terrific',
          'Maipo = My Premium Option',
          'ACP = "Alto Creates Prestige"'
        ]
      },
      {
        id: 'casablanca-valley',
        name: 'Casablanca Valley',
        nickname: 'COASTAL',
        location: 'Coast between Santiago and Valparaíso',
        climate: 'Cool maritime',
        climateAcronym: 'FOGGY',
        soils: ['Clay', 'Sandy loam', 'Granite'],
        soilAcronym: 'CSG (Clay-Sandy-Granite)',
        keyGrapes: {
          white: ['Sauvignon Blanc', 'Chardonnay', 'Pinot Grigio'],
          red: ['Pinot Noir', 'Syrah']
        },
        grapeAcronyms: {
          white: 'SCP (Sauvignon-Chardonnay-Pinot)',
          red: 'PS (Pinot-Syrah)'
        },
        wineStyles: ['Crisp whites', 'Cool-climate reds', 'Sparkling wines'],
        characteristics: ['Bright acidity', 'Citrus notes', 'Mineral finish', 'Fresh herbs'],
        characteristicsAcronym: 'BCMF (Bright-Citrus-Mineral-Fresh)',
        notableSubRegions: ['Las Dichas', 'Lo Orrego', 'Lo Ovalle'],
        subRegionAcronym: 'LLL (Las Dichas-Lo Orrego-Lo Ovalle)',
        classification: 'DO Casablanca Valley',
        keyProducers: ['Casas del Bosque', 'Matetic', 'Kingston Family'],
        foodPairings: ['Ceviche', 'White fish', 'Goat cheese', 'Green salads'],
        servingTemperature: '8-12°C (46-54°F)',
        agingPotential: '2-8 years',
        module: 'Module 13: Chile',
        funFacts: [
          'Morning fog from Pacific Ocean cools vineyards',
          'Planted in 1980s, revolutionized Chilean whites',
          'Only 20km from the Pacific Ocean'
        ],
        memoryTricks: [
          'COASTAL = Cool Ocean Air Stimulates Terrific Aromatic Levels',
          'Casablanca = Casa (house) + Blanca (white) = White wine house',
          'LLL = "Lovely Light Locations"'
        ]
      }
    ]
  },

  // ARGENTINA - "Amazing Reds Generated Everywhere Near Tremendous Andes"
  {
    id: 'argentina',
    name: 'Argentina',
    continent: 'South America',
    coordinates: { lat: -32.0, lng: -64.0 },
    countryAcronym: 'ARGENTINA',
    totalRegions: 2,
    keyCharacteristics: ['Malbec mastery', 'High altitude', 'Continental climate', 'Torrontés uniqueness'],
    countryMemoryTrick: 'Amazing Reds Generated Everywhere Near Tremendous Incredible Natural Andes - Argentina elevates wine to new heights',
    regions: [
      {
        id: 'mendoza',
        name: 'Mendoza',
        nickname: 'MALBEC',
        location: 'Western Argentina, Andean foothills',
        climate: 'Continental desert with altitude cooling',
        climateAcronym: 'HIGH',
        soils: ['Alluvial', 'Sandy', 'Rocky with calcium carbonate'],
        soilAcronym: 'ASR (Alluvial-Sandy-Rocky)',
        keyGrapes: {
          white: ['Torrontés', 'Chardonnay'],
          red: ['Malbec', 'Cabernet Sauvignon', 'Bonarda', 'Syrah']
        },
        grapeAcronyms: {
          white: 'TC (Torrontés-Chardonnay)',
          red: 'MCBS (Malbec-Cabernet-Bonarda-Syrah)'
        },
        wineStyles: ['Premium Malbec', 'High-altitude wines', 'Bordeaux blends'],
        characteristics: ['Intense color', 'Ripe black fruit', 'Floral notes', 'Velvety tannins'],
        characteristicsAcronym: 'IRFV (Intense-Ripe-Floral-Velvety)',
        notableSubRegions: ['Luján de Cuyo', 'Valle de Uco', 'Maipú'],
        subRegionAcronym: 'LUM (Luján-Uco-Maipú)',
        classification: 'DOC system with sub-regions',
        keyProducers: ['Catena Zapata', 'Achaval Ferrer', 'Cheval des Andes'],
        foodPairings: ['Asado (BBQ)', 'Empanadas', 'Provoleta cheese', 'Beef steak'],
        servingTemperature: '16-18°C (61-64°F)',
        agingPotential: '5-20+ years',
        module: 'Module 13: Argentina',
        funFacts: [
          'World\'s highest commercial vineyards (up to 3,000m)',
          'Irrigation from Andean snowmelt',
          'Malbec found its best expression here'
        ],
        memoryTricks: [
          'MALBEC = Magnificent Altitude Loves Building Exceptional Character',
          'Mendoza = Malbec\'s home',
          'LUM = "Luján Uco Maipú" = "Lovely Upper Mountains"'
        ]
      },
      {
        id: 'salta',
        name: 'Salta',
        nickname: 'EXTREME',
        location: 'Northwest Argentina',
        climate: 'High altitude desert',
        climateAcronym: 'HIGHEST',
        soils: ['Sandy', 'Rocky', 'Alluvial'],
        soilAcronym: 'SRA (Sandy-Rocky-Alluvial)',
        keyGrapes: {
          white: ['Torrontés'],
          red: ['Malbec', 'Tannat', 'Cabernet Sauvignon']
        },
        grapeAcronyms: {
          white: 'T (Torrontés specialty)',
          red: 'MTC (Malbec-Tannat-Cabernet)'
        },
        wineStyles: ['Aromatic Torrontés', 'High-altitude Malbec', 'Intense reds'],
        characteristics: ['Intense aromatics', 'High UV influence', 'Thick skins', 'Concentrated flavors'],
        characteristicsAcronym: 'IHTC (Intense-High-Thick-Concentrated)',
        notableSubRegions: ['Cafayate', 'Molinos', 'Cachi'],
        subRegionAcronym: 'CMC (Cafayate-Molinos-Cachi)',
        classification: 'Salta DOC',
        keyProducers: ['Colomé', 'El Esteco', 'Etchart'],
        foodPairings: ['Spicy empanadas', 'Llama meat', 'Quinoa dishes', 'Humita'],
        servingTemperature: '8-10°C whites, 16-18°C reds',
        agingPotential: '3-15 years',
        module: 'Module 13: Argentina',
        funFacts: [
          'Cafayate vineyards reach 3,111 meters altitude',
          'Torrontés is Argentina\'s signature white grape',
          '350+ days of sunshine per year'
        ],
        memoryTricks: [
          'EXTREME = Exceptionally Xtreme Regions Elevate Malbec Excellence',
          'Salta = Sky + Altitude',
          'CMC = "Cafayate Makes Champions"'
        ]
      }
    ]
  },

  // SOUTH AFRICA - "Stunning Outstanding Unique Terroir Heritage"
  {
    id: 'south-africa',
    name: 'South Africa',
    continent: 'Africa',
    coordinates: { lat: -29.0, lng: 24.0 },
    countryAcronym: 'SOUTH AFRICA',
    totalRegions: 2,
    keyCharacteristics: ['Old vines', 'Biodiversity', 'Cape Doctor wind', 'Chenin Blanc excellence'],
    countryMemoryTrick: 'Stunning Outstanding Unique Terroir Heritage - Africa\'s First Really Incredible Cape Area - South Africa blends Old and New World',
    regions: [
      {
        id: 'stellenbosch',
        name: 'Stellenbosch',
        nickname: 'DIVERSE',
        location: 'Western Cape',
        climate: 'Mediterranean with mountain influence',
        climateAcronym: 'VARIED',
        soils: ['Granite', 'Sandstone', 'Shale'],
        soilAcronym: 'GSS (Granite-Sandstone-Shale)',
        keyGrapes: {
          white: ['Chenin Blanc', 'Sauvignon Blanc', 'Chardonnay'],
          red: ['Cabernet Sauvignon', 'Merlot', 'Pinotage', 'Syrah']
        },
        grapeAcronyms: {
          white: 'CSC (Chenin-Sauvignon-Chardonnay)',
          red: 'CMPS (Cabernet-Merlot-Pinotage-Syrah)'
        },
        wineStyles: ['Bordeaux blends', 'Cape blends', 'Single varietals', 'Premium wines'],
        characteristics: ['Elegant structure', 'Complex flavors', 'Age-worthy', 'Terroir-driven'],
        characteristicsAcronym: 'ECAT (Elegant-Complex-Age-Terroir)',
        notableSubRegions: ['Simonsberg', 'Helderberg', 'Jonkershoek Valley'],
        subRegionAcronym: 'SHJ (Simonsberg-Helderberg-Jonkershoek)',
        classification: 'Wine of Origin (WO) Stellenbosch',
        keyProducers: ['Kanonkop', 'Rust en Vrede', 'Meerlust'],
        foodPairings: ['Braai (BBQ)', 'Bobotie', 'Biltong', 'Karoo lamb'],
        servingTemperature: '14-18°C (57-64°F)',
        agingPotential: '10-25+ years',
        module: 'Module 11: New World',
        funFacts: [
          'Second oldest wine region in South Africa (1679)',
          'University town with strong wine research',
          'Pinotage was created here (Pinot Noir x Cinsault)'
        ],
        memoryTricks: [
          'DIVERSE = Delightfully Interesting Varieties Excel Really Superbly Everywhere',
          'Stellenbosch = Stellar + Boss of SA wine',
          'SHJ = "Stellenbosch Has Jewels"'
        ]
      },
      {
        id: 'swartland',
        name: 'Swartland',
        nickname: 'CHENIN',
        location: 'Western Cape, north of Cape Town',
        climate: 'Hot Mediterranean',
        climateAcronym: 'DRY',
        soils: ['Shale', 'Granite', 'Iron-rich'],
        soilAcronym: 'SGI (Shale-Granite-Iron)',
        keyGrapes: {
          white: ['Chenin Blanc', 'Colombard', 'Grenache Blanc'],
          red: ['Syrah', 'Grenache', 'Mourvèdre', 'Cinsault']
        },
        grapeAcronyms: {
          white: 'CCG (Chenin-Colombard-Grenache)',
          red: 'SGMC (Syrah-Grenache-Mourvèdre-Cinsault)'
        },
        wineStyles: ['Old vine Chenin', 'Rhône-style blends', 'Natural wines'],
        characteristics: ['Concentrated fruit', 'Mineral notes', 'Textured whites', 'Bold reds'],
        characteristicsAcronym: 'CMTB (Concentrated-Mineral-Textured-Bold)',
        notableSubRegions: ['Riebeek', 'Malmesbury', 'Paardeberg'],
        subRegionAcronym: 'RMP (Riebeek-Malmesbury-Paardeberg)',
        classification: 'WO Swartland',
        keyProducers: ['Eben Sadie', 'Mullineux', 'AA Badenhorst'],
        foodPairings: ['Cape Malay curry', 'Grilled fish', 'Snoek', 'Boerewors'],
        servingTemperature: '10-14°C (50-57°F)',
        agingPotential: '5-15+ years',
        module: 'Module 11: New World',
        funFacts: [
          'Revolution in South African wine led by young winemakers',
          'Old bush vines over 100 years old',
          '"Black land" named for indigenous Renosterbos shrub'
        ],
        memoryTricks: [
          'CHENIN = Classic Heritage Expressing Natural Indigenous Notes',
          'Swartland = Start with old vines',
          'RMP = "Really Magnificent Parcels"'
        ]
      }
    ]
  },

  // NEW ZEALAND - "Noble Excellence Wins"
  {
    id: 'new-zealand',
    name: 'New Zealand',
    continent: 'Oceania',
    coordinates: { lat: -42.0, lng: 174.0 },
    countryAcronym: 'NEW ZEALAND',
    totalRegions: 2,
    keyCharacteristics: ['Sauvignon Blanc', 'Cool climate', 'Maritime influence', 'Sustainable practices'],
    countryMemoryTrick: 'Noble Excellence Wins - Zealously Excellent Aromatic Land And Natural Distinction - New Zealand defines pure, intense flavors',
    regions: [
      {
        id: 'marlborough',
        name: 'Marlborough',
        nickname: 'SAUVIGNON',
        location: 'South Island, northeast',
        climate: 'Cool maritime with long sunshine hours',
        climateAcronym: 'SUNNY',
        soils: ['Alluvial gravel', 'Clay', 'Loess'],
        soilAcronym: 'ACL (Alluvial-Clay-Loess)',
        keyGrapes: {
          white: ['Sauvignon Blanc', 'Pinot Gris', 'Riesling', 'Chardonnay'],
          red: ['Pinot Noir']
        },
        grapeAcronyms: {
          white: 'SPRC (Sauvignon-Pinot-Riesling-Chardonnay)',
          red: 'P (Pinot only)'
        },
        wineStyles: ['Intense Sauvignon Blanc', 'Sparkling wines', 'Aromatic whites'],
        characteristics: ['Explosive aromatics', 'Passion fruit', 'Gooseberry', 'Crisp acidity'],
        characteristicsAcronym: 'EPGC (Explosive-Passion-Gooseberry-Crisp)',
        notableSubRegions: ['Wairau Valley', 'Awatere Valley', 'Southern Valleys'],
        subRegionAcronym: 'WAS (Wairau-Awatere-Southern)',
        classification: 'Marlborough GI',
        keyProducers: ['Cloudy Bay', 'Greywacke', 'Dog Point'],
        foodPairings: ['Green-lipped mussels', 'Fresh oysters', 'Goat cheese salad', 'Asian fusion'],
        servingTemperature: '7-9°C (45-48°F)',
        agingPotential: '2-5 years (drink fresh)',
        module: 'Module 12: New Zealand',
        funFacts: [
          'Produces 77% of New Zealand\'s wine',
          'Put NZ Sauvignon Blanc on the world map',
          'Diurnal temperature variation preserves aromatics'
        ],
        memoryTricks: [
          'SAUVIGNON = Super Aromatic Unique Vibrant Intense Gooseberry Notes Outstanding New-world',
          'Marlborough = Marl (soil) + Borough of Sauvignon',
          'WAS = "Wine\'s Amazing Star"'
        ]
      },
      {
        id: 'central-otago',
        name: 'Central Otago',
        nickname: 'PINOT',
        location: 'South Island, inland',
        climate: 'Continental - southernmost wine region',
        climateAcronym: 'EXTREME',
        soils: ['Schist', 'Gravel', 'Loess'],
        soilAcronym: 'SGL (Schist-Gravel-Loess)',
        keyGrapes: {
          white: ['Pinot Gris', 'Riesling', 'Chardonnay'],
          red: ['Pinot Noir']
        },
        grapeAcronyms: {
          white: 'PRC (Pinot Gris-Riesling-Chardonnay)',
          red: 'PN (Pinot Noir excellence)'
        },
        wineStyles: ['World-class Pinot Noir', 'Aromatic whites', 'Late harvest wines'],
        characteristics: ['Pure fruit expression', 'Silky texture', 'Complex aromatics', 'Vibrant acidity'],
        characteristicsAcronym: 'PSCV (Pure-Silky-Complex-Vibrant)',
        notableSubRegions: ['Bannockburn', 'Gibbston', 'Wanaka', 'Alexandra'],
        subRegionAcronym: 'BGWA (Bannockburn-Gibbston-Wanaka-Alexandra)',
        classification: 'Central Otago GI',
        keyProducers: ['Felton Road', 'Rippon', 'Mt Difficulty'],
        foodPairings: ['Venison', 'Duck confit', 'Wild mushrooms', 'Lamb rack'],
        servingTemperature: '14-16°C (57-61°F)',
        agingPotential: '5-15+ years',
        module: 'Module 12: New Zealand',
        funFacts: [
          'World\'s southernmost wine region (45° south)',
          'Gold rush history before wine',
          'Dramatic landscape featured in Lord of the Rings'
        ],
        memoryTricks: [
          'PINOT = Perfectly Intense Notes Otago Terroir',
          'Central Otago = Center of Pinot excellence',
          'BGWA = "Beautiful Grapes Win Awards"'
        ]
      }
    ]
  }
];

// Helper functions for the new structure
export function getCountryById(id: string): WineCountry | undefined {
  return wineCountries.find(country => country.id === id);
}

export function getRegionById(countryId: string, regionId: string): WineRegion | undefined {
  const country = getCountryById(countryId);
  return country?.regions.find(region => region.id === regionId);
}

export function getAllRegions(): WineRegion[] {
  return wineCountries.flatMap(country => country.regions);
}

export function getCountriesByContinent() {
  const continents = wineCountries.reduce((acc, country) => {
    if (!acc[country.continent]) {
      acc[country.continent] = [];
    }
    acc[country.continent].push(country);
    return acc;
  }, {} as Record<string, WineCountry[]>);
  
  return continents;
}

export function searchCountriesAndRegions(query: string): {countries: WineCountry[], regions: WineRegion[]} {
  const lowercaseQuery = query.toLowerCase();
  
  const matchingCountries = wineCountries.filter(country => 
    country.name.toLowerCase().includes(lowercaseQuery) ||
    country.countryAcronym.toLowerCase().includes(lowercaseQuery) ||
    country.keyCharacteristics.some(char => char.toLowerCase().includes(lowercaseQuery))
  );
  
  const matchingRegions = getAllRegions().filter(region => 
    region.name.toLowerCase().includes(lowercaseQuery) ||
    region.nickname.toLowerCase().includes(lowercaseQuery) ||
    region.keyGrapes.white.some(grape => grape.toLowerCase().includes(lowercaseQuery)) ||
    region.keyGrapes.red.some(grape => grape.toLowerCase().includes(lowercaseQuery)) ||
    region.characteristics.some(char => char.toLowerCase().includes(lowercaseQuery))
  );
  
  return { countries: matchingCountries, regions: matchingRegions };
}