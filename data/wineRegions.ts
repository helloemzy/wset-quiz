export interface WineRegion {
  id: string;
  name: string;
  country: string;
  continent: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  climate: string;
  soils: string[];
  keyGrapes: {
    white: string[];
    red: string[];
  };
  wineStyles: string[];
  characteristics: string[];
  notableSubRegions: string[];
  classification: string;
  keyProducers: string[];
  foodPairings: string[];
  servingTemperature: string;
  agingPotential: string;
  module: string;
  funFacts: string[];
}

export const wineRegions: WineRegion[] = [
  // FRANCE
  {
    id: 'champagne',
    name: 'Champagne',
    country: 'France',
    continent: 'Europe',
    coordinates: { lat: 49.2, lng: 4.0 },
    climate: 'Cool continental',
    soils: ['Chalk', 'Limestone', 'Clay'],
    keyGrapes: {
      white: ['Chardonnay', 'Pinot Blanc'],
      red: ['Pinot Noir', 'Pinot Meunier']
    },
    wineStyles: ['Traditional Method Sparkling', 'Blanc de Blancs', 'Blanc de Noirs', 'Rosé Champagne'],
    characteristics: ['High acidity', 'Fine bubbles', 'Brioche notes', 'Mineral finish'],
    notableSubRegions: ['Côte des Blancs', 'Montagne de Reims', 'Vallée de la Marne'],
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
    ]
  },
  {
    id: 'burgundy',
    name: 'Burgundy (Bourgogne)',
    country: 'France',
    continent: 'Europe',
    coordinates: { lat: 47.0, lng: 4.5 },
    climate: 'Cool continental',
    soils: ['Limestone', 'Clay', 'Marl'],
    keyGrapes: {
      white: ['Chardonnay', 'Aligoté'],
      red: ['Pinot Noir']
    },
    wineStyles: ['Elegant reds', 'Mineral whites', 'Village wines', 'Premier & Grand Cru'],
    characteristics: ['Terroir-driven', 'Elegant', 'Age-worthy', 'Complex minerality'],
    notableSubRegions: ['Chablis', 'Côte de Nuits', 'Côte de Beaune', 'Côte Chalonnaise', 'Mâconnais'],
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
    ]
  },
  {
    id: 'bordeaux',
    name: 'Bordeaux',
    country: 'France',
    continent: 'Europe',
    coordinates: { lat: 44.8, lng: -0.6 },
    climate: 'Maritime temperate',
    soils: ['Gravel (Left Bank)', 'Clay-limestone (Right Bank)'],
    keyGrapes: {
      white: ['Sauvignon Blanc', 'Sémillon', 'Muscadelle'],
      red: ['Cabernet Sauvignon', 'Merlot', 'Cabernet Franc', 'Petit Verdot', 'Malbec']
    },
    wineStyles: ['Left Bank blends', 'Right Bank blends', 'Sweet whites (Sauternes)', 'Dry whites'],
    characteristics: ['Structured tannins', 'Age-worthy', 'Blended wines', 'Elegant complexity'],
    notableSubRegions: ['Médoc', 'Saint-Émilion', 'Pomerol', 'Sauternes', 'Pessac-Léognan'],
    classification: '1855 Classification, Saint-Émilion Classification, Cru Bourgeois',
    keyProducers: ['Château Margaux', 'Château Pétrus', 'Château d\'Yquem'],
    foodPairings: ['Lamb', 'Aged beef', 'Foie gras (with Sauternes)', 'Hard cheeses'],
    servingTemperature: '16-18°C (61-64°F)',
    agingPotential: '10-50+ years',
    module: 'Module 5 & 6: Bordeaux',
    funFacts: [
      'Bordeaux produces more fine wine than any other region',
      'The famous 1855 Classification is still used today',
      'Noble rot is essential for Sauternes production'
    ]
  },
  {
    id: 'loire-valley',
    name: 'Loire Valley',
    country: 'France',
    continent: 'Europe',
    coordinates: { lat: 47.5, lng: 1.0 },
    climate: 'Cool continental to maritime',
    soils: ['Limestone', 'Flint', 'Volcanic tuff', 'Gravel'],
    keyGrapes: {
      white: ['Sauvignon Blanc', 'Chenin Blanc', 'Muscadet', 'Chardonnay'],
      red: ['Cabernet Franc', 'Pinot Noir', 'Gamay']
    },
    wineStyles: ['Crisp whites', 'Light reds', 'Sweet whites', 'Sparkling wines'],
    characteristics: ['High acidity', 'Mineral-driven', 'Food-friendly', 'Diverse styles'],
    notableSubRegions: ['Sancerre', 'Pouilly-Fumé', 'Vouvray', 'Chinon', 'Muscadet'],
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
    ]
  },
  {
    id: 'rhone-valley',
    name: 'Rhône Valley',
    country: 'France',
    continent: 'Europe',
    coordinates: { lat: 44.5, lng: 4.8 },
    climate: 'Continental (North) to Mediterranean (South)',
    soils: ['Granite (North)', 'Galets (South)', 'Clay-limestone'],
    keyGrapes: {
      white: ['Viognier', 'Marsanne', 'Roussanne', 'Grenache Blanc'],
      red: ['Syrah', 'Grenache', 'Mourvèdre', 'Cinsault']
    },
    wineStyles: ['Powerful reds', 'Aromatic whites', 'GSM blends', 'Single varietals'],
    characteristics: ['Full-bodied', 'Spicy', 'Sun-ripened', 'Robust tannins'],
    notableSubRegions: ['Hermitage', 'Côte-Rôtie', 'Châteauneuf-du-Pape', 'Condrieu'],
    classification: 'Cru system in the North, AOC in the South',
    keyProducers: ['E. Guigal', 'M. Chapoutier', 'Domaine de la Janasse'],
    foodPairings: ['Grilled meats', 'Game', 'Provence herbs', 'Strong cheeses'],
    servingTemperature: '14-18°C (57-64°F)',
    agingPotential: '5-25+ years',
    module: 'Module 7 & 8: Rhône Valley',
    funFacts: [
      'Hermitage Hill is so steep that terraces are necessary',
      'Châteauneuf-du-Pape allows 13 different grape varieties',
      'The Mistral wind helps keep vineyards dry and healthy'
    ]
  },
  {
    id: 'alsace',
    name: 'Alsace',
    country: 'France',
    continent: 'Europe',
    coordinates: { lat: 48.3, lng: 7.5 },
    climate: 'Cool continental',
    soils: ['Granite', 'Limestone', 'Sandstone', 'Volcanic'],
    keyGrapes: {
      white: ['Riesling', 'Gewürztraminer', 'Pinot Gris', 'Muscat', 'Pinot Blanc'],
      red: ['Pinot Noir']
    },
    wineStyles: ['Dry whites', 'Off-dry wines', 'Sweet wines', 'Late harvest'],
    characteristics: ['Aromatic intensity', 'Pure fruit', 'Mineral backbone', 'Food-friendly'],
    notableSubRegions: ['Ribeauvillé', 'Riquewihr', 'Colmar'],
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
    ]
  },

  // GERMANY
  {
    id: 'mosel',
    name: 'Mosel',
    country: 'Germany',
    continent: 'Europe',
    coordinates: { lat: 49.9, lng: 6.9 },
    climate: 'Cool continental',
    soils: ['Slate (Devon and Silurian)', 'Quartzite', 'Red sandstone'],
    keyGrapes: {
      white: ['Riesling', 'Müller-Thurgau', 'Pinot Blanc'],
      red: ['Pinot Noir (Spätburgunder)']
    },
    wineStyles: ['Light Rieslings', 'Kabinett', 'Spätlese', 'Auslese', 'Eiswein'],
    characteristics: ['Low alcohol', 'High acidity', 'Mineral precision', 'Delicate fruit'],
    notableSubRegions: ['Bernkastel', 'Piesport', 'Wehlen'],
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
    ]
  },

  // AUSTRIA
  {
    id: 'wachau',
    name: 'Wachau',
    country: 'Austria',
    continent: 'Europe',
    coordinates: { lat: 48.4, lng: 15.4 },
    climate: 'Cool continental with Pannonian influence',
    soils: ['Primary rock (gneiss and amphibolite)', 'Loess'],
    keyGrapes: {
      white: ['Grüner Veltliner', 'Riesling'],
      red: []
    },
    wineStyles: ['Steinfeder (light)', 'Federspiel (medium)', 'Smaragd (full-bodied)'],
    characteristics: ['Mineral-driven', 'Age-worthy', 'Pure fruit', 'Elegant structure'],
    notableSubRegions: ['Dürnstein', 'Spitz', 'Weissenkirchen'],
    classification: 'Wachau specific: Steinfeder, Federspiel, Smaragd',
    keyProducers: ['Domäne Wachau', 'F.X. Pichler', 'Emmerich Knoll'],
    foodPairings: ['Austrian cuisine', 'River fish', 'White asparagus', 'Schnitzel'],
    servingTemperature: '9-12°C (48-54°F)',
    agingPotential: '5-15+ years',
    module: 'Module 4: Austria',
    funFacts: [
      'UNESCO World Heritage site for its cultural landscape',
      'Wachau has its own quality classification system',
      'The Danube River moderates the climate'
    ]
  },

  // HUNGARY
  {
    id: 'tokaj',
    name: 'Tokaj',
    country: 'Hungary',
    continent: 'Europe',
    coordinates: { lat: 48.1, lng: 21.4 },
    climate: 'Continental with long, warm autumns',
    soils: ['Volcanic (rhyolite and andesite)', 'Clay', 'Loess'],
    keyGrapes: {
      white: ['Furmint', 'Hárslevelű', 'Sárga Muskotály'],
      red: []
    },
    wineStyles: ['Tokaj Aszú (sweet)', 'Tokaj Eszencia', 'Dry Furmint'],
    characteristics: ['Noble rot', 'Honeyed sweetness', 'High acidity', 'Complex aging'],
    notableSubRegions: ['Tarcal', 'Tolcsva', 'Mád'],
    classification: 'Tokaj PDO, Puttonyos system (3-6)',
    keyProducers: ['Royal Tokaji', 'Disznókő', 'Oremus'],
    foodPairings: ['Foie gras', 'Blue cheese', 'Fruit tarts', 'Rich desserts'],
    servingTemperature: '8-10°C (46-50°F)',
    agingPotential: '20-100+ years',
    module: 'Module 4: Tokaj',
    funFacts: [
      'Called "Wine of Kings and King of Wines" by Louis XIV',
      'Botrytis cinerea (noble rot) is essential for Aszú production',
      'Eszencia can take decades to ferment naturally'
    ]
  },

  // SPAIN
  {
    id: 'rioja',
    name: 'Rioja',
    country: 'Spain',
    continent: 'Europe',
    coordinates: { lat: 42.5, lng: -2.7 },
    climate: 'Continental with maritime Atlantic influence',
    soils: ['Clay-limestone', 'Alluvial', 'Iron-rich clay'],
    keyGrapes: {
      white: ['Viura (Macabeo)', 'Malvasía', 'Garnacha Blanca'],
      red: ['Tempranillo', 'Garnacha', 'Graciano', 'Mazuelo']
    },
    wineStyles: ['Traditional oak-aged reds', 'Modern fruit-forward style', 'White Rioja'],
    characteristics: ['Oak influence', 'Vanilla notes', 'Silky tannins', 'Age-worthy'],
    notableSubRegions: ['Rioja Alta', 'Rioja Alavesa', 'Rioja Baja'],
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
    ]
  },
  {
    id: 'ribera-del-duero',
    name: 'Ribera del Duero',
    country: 'Spain',
    continent: 'Europe',
    coordinates: { lat: 41.6, lng: -3.7 },
    climate: 'Continental with extreme temperature variations',
    soils: ['Limestone', 'Clay', 'Sandy loam'],
    keyGrapes: {
      white: ['Albillo'],
      red: ['Tinto Fino (Tempranillo)', 'Cabernet Sauvignon', 'Merlot', 'Malbec']
    },
    wineStyles: ['Powerful reds', 'Age-worthy wines', 'Premium reserves'],
    characteristics: ['Intense color', 'Concentrated fruit', 'Robust tannins', 'Long aging potential'],
    notableSubRegions: ['La Horra', 'Roa', 'Aranda de Duero'],
    classification: 'Joven, Crianza, Reserva, Gran Reserva',
    keyProducers: ['Vega Sicilia', 'Pingus', 'Pesquera'],
    foodPairings: ['Roasted meats', 'Game', 'Strong cheeses', 'Cocido madrileño'],
    servingTemperature: '16-18°C (61-64°F)',
    agingPotential: '10-30+ years',
    module: 'Module 9: Northern Spain',
    funFacts: [
      'Home to Spain&apos;s most expensive wine (Vega Sicilia Único)',
      'Extreme diurnal temperature variation preserves acidity',
      'Altitude ranges from 750-900 meters'
    ]
  },

  // PORTUGAL
  {
    id: 'douro-valley',
    name: 'Douro Valley',
    country: 'Portugal',
    continent: 'Europe',
    coordinates: { lat: 41.2, lng: -7.8 },
    climate: 'Continental with hot, dry summers',
    soils: ['Schist', 'Granite'],
    keyGrapes: {
      white: ['Gouveio', 'Viosinho', 'Rabigato'],
      red: ['Touriga Nacional', 'Touriga Franca', 'Tinta Roriz', 'Tinta Barroca']
    },
    wineStyles: ['Port wines', 'Dry red Douro wines', 'White Douro wines'],
    characteristics: ['Powerful', 'Concentrated', 'Age-worthy', 'Fortified tradition'],
    notableSubRegions: ['Baixo Corgo', 'Cima Corgo', 'Douro Superior'],
    classification: 'Port: Vintage, LBV, Tawny; Table wines: DOC Douro',
    keyProducers: ['Quinta do Noval', 'Taylor&apos;s', 'Niepoort'],
    foodPairings: ['Blue cheese (with Port)', 'Grilled meats', 'Dark chocolate', 'Nuts'],
    servingTemperature: '16-18°C (61-64°F) for reds, 6-8°C for Port',
    agingPotential: '10-50+ years',
    module: 'Module 8 & 15: Portugal',
    funFacts: [
      'UNESCO World Heritage site',
      'Terraced vineyards carved into schist slopes',
      'Port was the first wine with protected designation of origin'
    ]
  },

  // ITALY
  {
    id: 'piedmont',
    name: 'Piedmont',
    country: 'Italy',
    continent: 'Europe',
    coordinates: { lat: 44.7, lng: 8.0 },
    climate: 'Continental with fog (nebbia)',
    soils: ['Calcareous marl', 'Sandstone', 'Clay'],
    keyGrapes: {
      white: ['Arneis', 'Cortese', 'Moscato'],
      red: ['Nebbiolo', 'Barbera', 'Dolcetto']
    },
    wineStyles: ['Barolo and Barbaresco', 'Barbera d&apos;Alba', 'Moscato d&apos;Asti', 'Gavi'],
    characteristics: ['High tannins', 'High acidity', 'Age-worthy', 'Elegant complexity'],
    notableSubRegions: ['Barolo', 'Barbaresco', 'Alba', 'Asti'],
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
    ]
  },
  {
    id: 'tuscany',
    name: 'Tuscany',
    country: 'Italy',
    continent: 'Europe',
    coordinates: { lat: 43.4, lng: 11.1 },
    climate: 'Mediterranean with continental influences',
    soils: ['Galestro', 'Alberese', 'Clay', 'Sand'],
    keyGrapes: {
      white: ['Trebbiano', 'Malvasia', 'Vermentino'],
      red: ['Sangiovese', 'Cabernet Sauvignon', 'Merlot', 'Cabernet Franc']
    },
    wineStyles: ['Chianti Classico', 'Brunello di Montalcino', 'Super Tuscans', 'Vino Nobile'],
    characteristics: ['Cherry fruit', 'Earthy undertones', 'High acidity', 'Food-friendly'],
    notableSubRegions: ['Chianti Classico', 'Montalcino', 'Montepulciano', 'Bolgheri'],
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
    ]
  },

  // AUSTRALIA
  {
    id: 'barossa-valley',
    name: 'Barossa Valley',
    country: 'Australia',
    continent: 'Oceania',
    coordinates: { lat: -34.5, lng: 139.0 },
    climate: 'Continental with warm summers',
    soils: ['Clay', 'Sand', 'Limestone'],
    keyGrapes: {
      white: ['Riesling', 'Chardonnay', 'Viognier'],
      red: ['Shiraz', 'Grenache', 'Mourvèdre', 'Cabernet Sauvignon']
    },
    wineStyles: ['Full-bodied Shiraz', 'Eden Valley Riesling', 'GSM blends', 'Fortified wines'],
    characteristics: ['Rich and powerful', 'Ripe fruit', 'Spice and pepper', 'Generous oak'],
    notableSubRegions: ['Eden Valley', 'Marananga', 'Tanunda'],
    classification: 'Barossa Valley GI, Eden Valley GI',
    keyProducers: ['Penfolds', 'Henschke', 'Torbreck'],
    foodPairings: ['BBQ meats', 'Kangaroo', 'Aged cheddar', 'Dark chocolate'],
    servingTemperature: '16-18°C (61-64°F)',
    agingPotential: '10-25+ years',
    module: 'Module 11: Australia',
    funFacts: [
      'Home to some of the world&apos;s oldest Shiraz vines',
      'German and British settlers established the region',
      'Penfolds Grange is Australia&apos;s most famous wine'
    ]
  },
  {
    id: 'hunter-valley',
    name: 'Hunter Valley',
    country: 'Australia',
    continent: 'Oceania',
    coordinates: { lat: -32.8, lng: 151.3 },
    climate: 'Humid subtropical',
    soils: ['Volcanic', 'Alluvial', 'Clay'],
    keyGrapes: {
      white: ['Sémillon', 'Chardonnay'],
      red: ['Shiraz', 'Cabernet Sauvignon']
    },
    wineStyles: ['Hunter Valley Sémillon', 'Traditional Shiraz', 'Show Reserve wines'],
    characteristics: ['Unique terroir', 'Aged Sémillon complexity', 'Earthy Shiraz', 'Longevity'],
    notableSubRegions: ['Lower Hunter', 'Upper Hunter', 'Broke Fordwich'],
    classification: 'Hunter Valley GI',
    keyProducers: ['Tyrrell&apos;s', 'Brokenwood', 'McWilliam&apos;s'],
    foodPairings: ['Fresh seafood', 'Asian cuisine', 'Grilled vegetables', 'Soft cheeses'],
    servingTemperature: '10-12°C for whites, 16-18°C for reds',
    agingPotential: '10-20+ years',
    module: 'Module 13: Australian Regional Specialties',
    funFacts: [
      'Australia&apos;s oldest wine region',
      'Hunter Valley Sémillon is unique - aged without oak',
      'Vintage variation is extreme due to weather patterns'
    ]
  },

  // NEW ZEALAND
  {
    id: 'marlborough',
    name: 'Marlborough',
    country: 'New Zealand',
    continent: 'Oceania',
    coordinates: { lat: -41.5, lng: 173.9 },
    climate: 'Cool maritime',
    soils: ['Stony', 'Free-draining', 'Alluvial'],
    keyGrapes: {
      white: ['Sauvignon Blanc', 'Chardonnay', 'Riesling', 'Pinot Gris'],
      red: ['Pinot Noir']
    },
    wineStyles: ['Vibrant Sauvignon Blanc', 'Elegant Pinot Noir', 'Cool-climate whites'],
    characteristics: ['Intense aromatics', 'Crisp acidity', 'Pure fruit', 'Herbaceous notes'],
    notableSubRegions: ['Wairau Valley', 'Awatere Valley', 'Southern Valleys'],
    classification: 'Marlborough GI',
    keyProducers: ['Cloudy Bay', 'Villa Maria', 'Oyster Bay'],
    foodPairings: ['Fresh seafood', 'Goat cheese', 'Asian cuisine', 'Light salads'],
    servingTemperature: '8-12°C (46-54°F)',
    agingPotential: '2-8 years for Sauvignon Blanc, 5-12 years for Pinot Noir',
    module: 'Module 12: New World Whites',
    funFacts: [
      'Put New Zealand wine on the international map',
      'Sauvignon Blanc style is distinctly different from Loire',
      'Diurnal temperature variation preserves aromatics'
    ]
  },
  {
    id: 'central-otago',
    name: 'Central Otago',
    country: 'New Zealand',
    continent: 'Oceania',
    coordinates: { lat: -45.0, lng: 169.1 },
    climate: 'Continental with extreme diurnal variation',
    soils: ['Schist', 'Volcanic', 'Alluvial'],
    keyGrapes: {
      white: ['Pinot Gris', 'Chardonnay', 'Riesling'],
      red: ['Pinot Noir']
    },
    wineStyles: ['Premium Pinot Noir', 'Aromatic whites', 'Single vineyard wines'],
    characteristics: ['Intense fruit', 'Elegant structure', 'Pure expression', 'Mineral complexity'],
    notableSubRegions: ['Bannockburn', 'Gibbston', 'Cromwell', 'Wanaka'],
    classification: 'Central Otago GI',
    keyProducers: ['Felton Road', 'Rippon', 'Chard Farm'],
    foodPairings: ['Venison', 'Duck', 'Salmon', 'Soft cheeses'],
    servingTemperature: '14-16°C (57-61°F)',
    agingPotential: '5-15+ years',
    module: 'Module 11: New World Reds',
    funFacts: [
      'World&apos;s southernmost wine region',
      'Extreme diurnal temperature variation (up to 25°C difference)',
      'Only commercial wine region with a continental climate in NZ'
    ]
  },

  // USA - CALIFORNIA
  {
    id: 'napa-valley',
    name: 'Napa Valley',
    country: 'USA',
    continent: 'North America',
    coordinates: { lat: 38.5, lng: -122.3 },
    climate: 'Mediterranean with marine influence',
    soils: ['Volcanic', 'Alluvial', 'Sedimentary'],
    keyGrapes: {
      white: ['Chardonnay', 'Sauvignon Blanc'],
      red: ['Cabernet Sauvignon', 'Merlot', 'Pinot Noir', 'Zinfandel']
    },
    wineStyles: ['Premium Cabernet Sauvignon', 'Oaked Chardonnay', 'Bordeaux-style blends'],
    characteristics: ['Rich and powerful', 'Ripe fruit', 'Generous oak', 'Age-worthy'],
    notableSubRegions: ['Rutherford', 'Oakville', 'Stags Leap District', 'Howell Mountain'],
    classification: 'Napa Valley AVA and sub-AVAs',
    keyProducers: ['Screaming Eagle', 'Opus One', 'Caymus'],
    foodPairings: ['Prime steaks', 'Lamb', 'Rich poultry', 'Aged cheeses'],
    servingTemperature: '16-18°C (61-64°F)',
    agingPotential: '10-30+ years',
    module: 'Module 11 & 13: California',
    funFacts: [
      'Established America&apos;s first agricultural preserve',
      '1976 Judgment of Paris put Napa on the world map',
      'Home to some of America&apos;s most expensive wines'
    ]
  },
  {
    id: 'sonoma-county',
    name: 'Sonoma County',
    country: 'USA',
    continent: 'North America',
    coordinates: { lat: 38.4, lng: -122.8 },
    climate: 'Diverse microclimates from cool coastal to warm inland',
    soils: ['Volcanic', 'Alluvial', 'Marine sedimentary'],
    keyGrapes: {
      white: ['Chardonnay', 'Sauvignon Blanc', 'Pinot Gris'],
      red: ['Pinot Noir', 'Cabernet Sauvignon', 'Zinfandel', 'Syrah']
    },
    wineStyles: ['Elegant Pinot Noir', 'Balanced Chardonnay', 'Old-vine Zinfandel'],
    characteristics: ['Diverse styles', 'Coastal elegance', 'Food-friendly', 'Terroir-driven'],
    notableSubRegions: ['Russian River Valley', 'Sonoma Coast', 'Alexander Valley', 'Dry Creek Valley'],
    classification: 'Sonoma County AVA with numerous sub-AVAs',
    keyProducers: ['Kistler', 'Williams Selyem', 'Ridge'],
    foodPairings: ['Pacific salmon', 'Roasted chicken', 'Mushroom dishes', 'Artisanal cheeses'],
    servingTemperature: '12-16°C (54-61°F)',
    agingPotential: '5-20+ years',
    module: 'Module 11 & 13: California',
    funFacts: [
      'More diverse than Napa with over 60 soil types',
      'Russian River Valley is famous for sparkling wine',
      'Some Zinfandel vines are over 100 years old'
    ]
  },

  // OREGON
  {
    id: 'willamette-valley',
    name: 'Willamette Valley',
    country: 'USA',
    continent: 'North America',
    coordinates: { lat: 45.3, lng: -123.0 },
    climate: 'Cool marine with dry summers',
    soils: ['Volcanic (Jory)', 'Marine sedimentary (Willakenzie)', 'Loess'],
    keyGrapes: {
      white: ['Pinot Gris', 'Chardonnay', 'Riesling'],
      red: ['Pinot Noir']
    },
    wineStyles: ['Elegant Pinot Noir', 'Crisp Pinot Gris', 'Sparkling wines'],
    characteristics: ['Restraint and elegance', 'Bright acidity', 'Earth and fruit balance', 'Age-worthy'],
    notableSubRegions: ['Dundee Hills', 'Yamhill-Carlton', 'Ribbon Ridge', 'Chehalem Mountains'],
    classification: 'Willamette Valley AVA with nested sub-AVAs',
    keyProducers: ['Domaine Drouhin', 'Archery Summit', 'Sokol Blosser'],
    foodPairings: ['Pacific Northwest salmon', 'Wild mushrooms', 'Duck', 'Hazelnuts'],
    servingTemperature: '14-16°C (57-61°F)',
    agingPotential: '5-15+ years',
    module: 'Module 13: Regional Specialties USA',
    funFacts: [
      'Burgundian producers established wineries here',
      'Volcanic Jory soil is red and well-draining',
      'Cool climate similar to Burgundy&apos;s Côte d&apos;Or'
    ]
  },

  // ARGENTINA
  {
    id: 'mendoza',
    name: 'Mendoza',
    country: 'Argentina',
    continent: 'South America',
    coordinates: { lat: -33.0, lng: -68.8 },
    climate: 'High-altitude desert with irrigation',
    soils: ['Alluvial', 'Clay', 'Sand', 'Limestone'],
    keyGrapes: {
      white: ['Torrontés', 'Chardonnay', 'Sauvignon Blanc'],
      red: ['Malbec', 'Cabernet Sauvignon', 'Merlot', 'Syrah']
    },
    wineStyles: ['Powerful Malbec', 'High-altitude wines', 'Bordeaux-style blends'],
    characteristics: ['Intense color', 'Concentrated fruit', 'Soft tannins', 'High alcohol'],
    notableSubRegions: ['Maipú', 'Luján de Cuyo', 'Valle de Uco'],
    classification: 'Mendoza GI with sub-regions',
    keyProducers: ['Catena Zapata', 'Achaval Ferrer', 'Zuccardi'],
    foodPairings: ['Argentine beef', 'Empanadas', 'Chimichurri', 'Provoleta'],
    servingTemperature: '16-18°C (61-64°F)',
    agingPotential: '5-20+ years',
    module: 'Module 13: Argentina',
    funFacts: [
      'Highest wine region in the world (up to 3,000m elevation)',
      'Malbec was rescued from near extinction in France',
      'Andes mountains provide snowmelt for irrigation'
    ]
  },

  // CHILE
  {
    id: 'casablanca-valley',
    name: 'Casablanca Valley',
    country: 'Chile',
    continent: 'South America',
    coordinates: { lat: -33.3, lng: -71.4 },
    climate: 'Cool maritime with ocean influence',
    soils: ['Granite', 'Clay', 'Limestone'],
    keyGrapes: {
      white: ['Sauvignon Blanc', 'Chardonnay', 'Pinot Grigio'],
      red: ['Pinot Noir', 'Syrah', 'Merlot']
    },
    wineStyles: ['Crisp white wines', 'Elegant Pinot Noir', 'Cool-climate styles'],
    characteristics: ['Fresh acidity', 'Mineral precision', 'Restrained fruit', 'Food-friendly'],
    notableSubRegions: ['Tapihue', 'Las Dichas', 'Lo Ovalle'],
    classification: 'Casablanca Valley DO',
    keyProducers: ['Casa Marín', 'Matetic', 'Kingston Family'],
    foodPairings: ['Seafood', 'Ceviche', 'Goat cheese', 'Light poultry'],
    servingTemperature: '8-14°C (46-57°F)',
    agingPotential: '3-10 years',
    module: 'Module 13: Chile',
    funFacts: [
      'One of Chile&apos;s coolest wine regions',
      'Morning fog from Pacific Ocean',
      'Pioneered cool-climate viticulture in Chile'
    ]
  },
  {
    id: 'colchagua-valley',
    name: 'Colchagua Valley',
    country: 'Chile',
    continent: 'South America',
    coordinates: { lat: -34.6, lng: -71.2 },
    climate: 'Mediterranean with cooling influences',
    soils: ['Alluvial', 'Granite', 'Clay'],
    keyGrapes: {
      white: ['Carmenère', 'Chardonnay'],
      red: ['Carmenère', 'Cabernet Sauvignon', 'Merlot', 'Syrah']
    },
    wineStyles: ['Premium Carmenère', 'Bordeaux-style blends', 'Icon wines'],
    characteristics: ['Rich and structured', 'Ripe fruit', 'Herbal notes', 'Age-worthy'],
    notableSubRegions: ['Apalta', 'Santa Cruz', 'Nancagua'],
    classification: 'Colchagua Valley DO',
    keyProducers: ['Montes', 'Casa Lapostolle', 'Viu Manent'],
    foodPairings: ['Red meats', 'Spiced dishes', 'Hard cheeses', 'Dark chocolate'],
    servingTemperature: '16-18°C (61-64°F)',
    agingPotential: '8-20+ years',
    module: 'Module 13: Chile',
    funFacts: [
      'Home to Chile&apos;s first icon wines',
      'Carmenère was thought to be Merlot until 1994',
      'Apalta is considered one of Chile&apos;s best terroirs'
    ]
  },

  // SOUTH AFRICA
  {
    id: 'stellenbosch',
    name: 'Stellenbosch',
    country: 'South Africa',
    continent: 'Africa',
    coordinates: { lat: -33.9, lng: 18.9 },
    climate: 'Mediterranean with cooling winds',
    soils: ['Granite', 'Sandstone', 'Shale'],
    keyGrapes: {
      white: ['Chenin Blanc', 'Sauvignon Blanc', 'Chardonnay'],
      red: ['Cabernet Sauvignon', 'Pinotage', 'Shiraz', 'Merlot']
    },
    wineStyles: ['Premium red blends', 'Cape Blend (with Pinotage)', 'Chenin Blanc styles'],
    characteristics: ['Structured tannins', 'Ripe fruit', 'Good aging potential', 'Unique terroir'],
    notableSubRegions: ['Simonsberg', 'Helderberg', 'Jonkershoek Valley'],
    classification: 'Stellenbosch WO',
    keyProducers: ['Klein Constantia', 'Kanonkop', 'Rust en Vrede'],
    foodPairings: ['Game meats', 'Boerewors', 'Biltong', 'Cape Malay curry'],
    servingTemperature: '16-18°C (61-64°F)',
    agingPotential: '5-20+ years',
    module: 'Module 13: South Africa',
    funFacts: [
      'Home to South Africa&apos;s first wine estate (1679)',
      'Pinotage was created here in 1925',
      'University town with a strong wine research tradition'
    ]
  }
];

// Helper function to get regions by continent
export function getRegionsByContinent() {
  const continents = wineRegions.reduce((acc, region) => {
    if (!acc[region.continent]) {
      acc[region.continent] = [];
    }
    acc[region.continent].push(region);
    return acc;
  }, {} as Record<string, WineRegion[]>);
  
  return continents;
}

// Helper function to get regions by country
export function getRegionsByCountry() {
  const countries = wineRegions.reduce((acc, region) => {
    if (!acc[region.country]) {
      acc[region.country] = [];
    }
    acc[region.country].push(region);
    return acc;
  }, {} as Record<string, WineRegion[]>);
  
  return countries;
}

// Helper function to search regions
export function searchRegions(query: string): WineRegion[] {
  const lowercaseQuery = query.toLowerCase();
  return wineRegions.filter(region => 
    region.name.toLowerCase().includes(lowercaseQuery) ||
    region.country.toLowerCase().includes(lowercaseQuery) ||
    region.keyGrapes.white.some(grape => grape.toLowerCase().includes(lowercaseQuery)) ||
    region.keyGrapes.red.some(grape => grape.toLowerCase().includes(lowercaseQuery)) ||
    region.characteristics.some(char => char.toLowerCase().includes(lowercaseQuery))
  );
}