export interface ShortAnswerQuestion {
  id: number;
  title: string;
  question: string;
  answer: string | { [key: string]: string | string[] };
  marks: number;
  module: string;
}

export const shortAnswerQuestions: ShortAnswerQuestion[] = [
  // Southern Rhône Production Methods
  {
    id: 1,
    title: "Southern Rhône Rosé Production Methods",
    question: "Name and describe TWO methods of production used for making rosé wines in the Southern Rhône.",
    answer: {
      "Method 1": "Saignée (bleeding) method",
      "Description 1": "Free-run juice is bled off from red wine tanks after brief skin contact (2-12 hours). This concentrates the remaining red wine while producing rosé with good color intensity and flavor concentration.",
      "Method 2": "Direct pressing method", 
      "Description 2": "Red grapes are pressed immediately or after very brief skin contact (2-4 hours). This produces lighter colored, more delicate rosé wines with fresh fruit flavors and crisp acidity."
    },
    marks: 7,
    module: "Southern Rhône Production"
  },
  {
    id: 2,
    title: "Semi-Carbonic Maceration Grape Selection",
    question: "What are the main considerations when selecting grapes for semi-carbonic maceration?",
    answer: "Grapes must be whole and uncrushed bunches in perfect condition. Thin-skinned varieties work best as they allow easier intracellular fermentation. Grapes should have moderate sugar levels and good acidity. Stems should be ripe and not green to avoid harsh tannins.",
    marks: 2,
    module: "Southern Rhône Production"
  },
  {
    id: 3,
    title: "Semi-Carbonic Maceration Process",
    question: "Describe the process of semi-carbonic maceration.",
    answer: "Whole bunches are placed in sealed tanks filled with CO2. Bottom 20-30% of grapes are crushed under weight and undergo normal fermentation, producing CO2. Upper grapes undergo intracellular fermentation in anaerobic conditions for 5-20 days. This produces distinctive fruity aromas (banana, bubble gum) and extracts color while minimizing tannin extraction.",
    marks: 4,
    module: "Southern Rhône Production"
  },
  {
    id: 4,
    title: "Carbonic Maceration Wine Style",
    question: "Under the headings Nose, Palate, and Conclusions, describe the typical style of a newly released, inexpensive red Côtes du Rhône wine produced by semi-carbonic or carbonic maceration.",
    answer: {
      "Nose - Aroma Characteristics": "Distinctive banana, bubble gum, and kirsch aromas. Fresh red fruit (strawberry, raspberry). Light floral notes. Minimal oak influence.",
      "Palate - Sweetness": "Dry",
      "Palate - Tannin": "Low to medium-, soft and smooth texture",
      "Palate - Body": "Light to medium body",
      "Conclusions - Readiness for drinking and ageing": "Ready to drink immediately. Best consumed within 2-3 years. Limited ageing potential due to low tannin structure."
    },
    marks: 6,
    module: "Southern Rhône Production"
  },
  {
    id: 5,
    title: "Southern Rhône Blending Reasons",
    question: "State the stylistic and practical reasons why a winemaker in the Southern Rhône might choose to blend grape varieties.",
    answer: {
      "Stylistic reasons": "To balance structure, color, and flavor complexity. Grenache provides alcohol and fruit, Syrah adds color and tannin structure, Mourvèdre contributes spice and ageability. Creates more complex and harmonious wines than single varieties.",
      "Practical reasons": "Different varieties ripen at different times, spreading harvest risk. Some varieties are more resistant to disease or weather problems. Blending allows correction of deficiencies in individual lots. Economic efficiency and consistent wine style year to year."
    },
    marks: 6,
    module: "Southern Rhône Production"
  },

  // Pinot Grigio/Pinot Gris
  {
    id: 6,
    title: "Pinot Grigio vs Pinot Gris Wine Styles",
    question: "Under the following headings describe two different styles of Pinot Grigio/Pinot Gris wines: a light Italian style and a rich Alsace style.",
    answer: {
      "Sweetness and body": "Italian Pinot Grigio: Dry, light body. Alsace Pinot Gris: Dry to off-dry, medium to full body.",
      "Aroma and flavour characteristics": "Italian: Fresh citrus, green apple, pear, mineral. Clean and crisp. Alsace: Ripe stone fruit, honey, spice, sometimes smoky. Rich and complex.",
      "Expected quality": "Italian: Good to very good quality, simple and refreshing. Alsace: Very good to outstanding quality, complex and age-worthy."
    },
    marks: 10,
    module: "Alsace and Italian Wines"
  },
  {
    id: 7,
    title: "Alsace Natural Factors",
    question: "Describe the key natural factors in Alsace and explain how these contribute to the style of rich Pinot Gris wines.",
    answer: "Continental climate with warm, dry summers and cold winters. Vosges Mountains provide rain shadow effect, creating sunny, dry conditions ideal for ripeness. Diverse soils including limestone, sandstone, and granite provide mineral complexity. Long growing season allows slow ripening and flavor development. Steep slopes with south-facing exposure maximize sun exposure. These factors combine to produce fully ripe grapes with concentrated flavors and good acidity.",
    marks: 7,
    module: "Alsace Natural Factors"
  },
  {
    id: 8,
    title: "Alsace Oak Influence",
    question: "Large, old oak barrels used in Alsace have little influence on the wines' aromas. Explain why.",
    answer: "Large oak barrels (foudres) have a low surface area to volume ratio, minimizing oak contact. The oak is old and has been used many times, so extractable compounds are depleted. These barrels are used primarily for slow, gentle oxidation and texture development rather than flavor addition. The focus is on preserving pure fruit character and terroir expression.",
    marks: 3,
    module: "Alsace Winemaking"
  },
  {
    id: 9,
    title: "Alsace Wine Storage Conditions",
    question: "What storage conditions would you recommend for the long-term ageing of a premium Alsace Pinot Gris sealed with natural cork?",
    answer: "Store horizontally to keep cork moist. Constant temperature of 10-15°C (50-59°F). High humidity (70-80%) to prevent cork drying. Away from light, vibration, and strong odors. Good air circulation but not drafts. Stable conditions are more important than exact temperature. Can age 10-20+ years under proper conditions.",
    marks: 5,
    module: "Wine Storage and Service"
  },

  // Pinot Noir Climate Factors
  {
    id: 10,
    title: "Pinot Noir Climate Requirements",
    question: "Pinot Noir is best grown in cool and moderate climates. Why is this?",
    answer: "Pinot Noir has thin skins and is susceptible to heat damage and sunburn. Cool climates preserve the grape's delicate fruit flavors and natural acidity. Warm climates can cause rapid sugar accumulation before flavor development is complete. Cool conditions allow slow, even ripening which develops complex flavors while maintaining freshness and elegance characteristic of quality Pinot Noir.",
    marks: 2,
    module: "Pinot Noir Viticulture"
  },
  {
    id: 11,
    title: "Los Carneros Climate Moderation",
    question: "For Los Carneros, identify TWO natural factors and explain how they moderate the climate for successful Pinot Noir cultivation.",
    answer: {
      "Natural Factors": "Pacific Ocean influence and San Pablo Bay proximity",
      "Explanation": "Cool Pacific Ocean creates marine layer and fog that moderates daytime temperatures, especially in mornings. San Pablo Bay acts as cooling influence and creates air circulation. These factors prevent excessive heat buildup, maintain diurnal temperature variation, and extend growing season for gradual flavor development while preserving acidity."
    },
    marks: 6,
    module: "California Climate Factors"
  },
  {
    id: 12,
    title: "Central Otago Climate Moderation", 
    question: "For Central Otago, identify TWO natural factors and explain how they moderate the climate for successful Pinot Noir cultivation.",
    answer: {
      "Natural Factors": "High altitude and continental climate with large diurnal temperature variation",
      "Explanation": "Altitude (200-400m) provides cooling effect despite southern latitude. Continental climate creates large diurnal temperature shifts - warm days for ripening, cool nights for acidity retention. Mountain protection creates stable growing conditions. These factors allow full flavor development while maintaining the freshness and elegance essential for quality Pinot Noir."
    },
    marks: 6,
    module: "New Zealand Climate Factors"
  },

  // Hunter Valley Semillon
  {
    id: 13,
    title: "Hunter Valley Semillon Characteristics",
    question: "Identify ONE human influence in the vineyard and ONE human influence in the winery which contribute to the distinctive characteristics of Hunter Valley Semillon. Explain how they do so.",
    answer: {
      "Vineyard influence": "Early harvest timing - grapes picked at lower Baumé (sugar levels) to retain high acidity and prevent over-ripeness in the hot climate. This preserves the wine's aging potential and characteristic austere style.",
      "Winery influence": "Fermentation in stainless steel with no oak aging or malolactic fermentation. This preserves the pure fruit character and natural acidity, allowing the wine's distinctive honey and toast flavors to develop through bottle aging rather than winemaking techniques."
    },
    marks: 6,
    module: "Hunter Valley Production"
  },

  // Russian River Valley Chardonnay
  {
    id: 14,
    title: "Russian River Valley Chardonnay MLF",
    question: "Explain why the producer of an outstanding quality Chardonnay from Russian River Valley AVA might choose to use malolactic fermentation.",
    answer: "Malolactic fermentation converts sharp malic acid to softer lactic acid, creating a rounder, creamier mouthfeel. In the cool Russian River Valley climate, Chardonnay can have quite high natural acidity. MLF helps balance this acidity while adding complexity through diacetyl production (buttery flavors). It also enhances the wine's ability to integrate with oak aging and creates better texture for premium wine styles. The process adds complexity that justifies higher pricing for outstanding quality wines.",
    marks: 5,
    module: "California Chardonnay Production"
  },

  // Sparkling Wine Production
  {
    id: 15,
    title: "Traditional Method Sugar Levels",
    question: "Explain why a producer of traditional method sparkling wines requires grapes with relatively low sugar levels.",
    answer: "Low sugar grapes (around 10-11% potential alcohol) are needed because the wine undergoes two fermentations. The first creates a base wine of moderate alcohol, then the second fermentation (prise de mousse) adds approximately 1.5% more alcohol. This prevents the final wine from becoming too alcoholic. Low sugar also helps retain high acidity essential for sparkling wine quality and aging potential.",
    marks: 2,
    module: "Sparkling Wine Production"
  },
  {
    id: 16,
    title: "Traditional Method Bread and Biscuit Flavors",
    question: "Name and describe the process by which traditional method sparkling wines acquire flavours of bread and biscuit.",
    answer: "Autolysis - the breakdown of dead yeast cells (lees) during extended contact in bottle. After second fermentation, dead yeast cells break down over months or years, releasing amino acids and proteins that create bread, biscuit, and brioche flavors. Minimum 15 months on lees for Champagne, but premium wines often age much longer to develop greater complexity.",
    marks: 3,
    module: "Sparkling Wine Production"
  },
  {
    id: 17,
    title: "Making Sweet Sparkling Wines",
    question: "Identify and describe two ways of making sparkling wines sweet.",
    answer: {
      "Method 1": "Dosage - Adding a mixture of wine and sugar (liqueur d'expédition) after disgorgement. The amount added determines sweetness level from Brut (0-12g/L) to Doux (50g/L+). This is the most common method.",
      "Method 2": "Stopping fermentation early by chilling and/or filtration, leaving residual sugar from the grapes. This retains natural grape sweetness but is technically challenging and less common in traditional method wines."
    },
    marks: 5,
    module: "Sparkling Wine Production"
  },

  // Fortified Wine Production
  {
    id: 18,
    title: "Muscat Fortified Wine Production",
    question: "Describe how two different styles of Muscat-based fortified wines are made: a young, fresh style and an aged, oxidative style.",
    answer: {
      "Young Muscat (Muscat de Beaumes-de-Venise style)": "Grapes are pressed and fermentation is stopped early by adding neutral grape spirit. This preserves residual sugar and fresh fruit flavors. Wine is aged briefly in stainless steel to maintain freshness and primary fruit character. Served chilled as an aperitif or dessert wine.",
      "Aged Muscat (Rutherglen Muscat style)": "Similar initial production but wine is aged for years in old oak barrels with controlled oxidation. Heat and evaporation concentrate flavors. Regular racking and solera-style blending develops complex rancio character with coffee, chocolate, and dried fruit flavors. Much more complex and intense."
    },
    marks: 10,
    module: "Fortified Wine Production"
  },
  {
    id: 19,
    title: "Vintage Port Decanting",
    question: "Describe the process of opening and decanting a fully mature Vintage Port.",
    answer: "Store bottle upright for 24-48 hours to allow sediment to settle. Remove capsule and cork carefully. Wipe bottle neck clean. Light a candle or use bright light source. Pour wine slowly into decanter while watching for sediment in bottle neck/shoulder. Stop pouring when sediment reaches neck. Pour in one continuous motion to avoid disturbing sediment. Some sediment loss is normal. Serve at room temperature.",
    marks: 5,
    module: "Wine Service"
  },

  // German Wine Production
  {
    id: 20,
    title: "German Riesling Sweetness Levels",
    question: "Explain how German Riesling wines achieve different sweetness levels and name THREE official classifications.",
    answer: {
      "How sweetness is achieved": "Natural grape sugar retained by stopping fermentation early through chilling, filtration, or adding sulfur dioxide. Higher ripeness levels (measured in Oechsle degrees) indicate more concentrated sugars. Botrytis cinerea can further concentrate sugars in late harvest wines.",
      "Three classifications": [
        "Kabinett - lightest style, delicate with lower alcohol",
        "Spätlese - late harvest, more concentrated and fuller",
        "Auslese - select harvest, ripe grapes, often sweet"
      ]
    },
    marks: 8,
    module: "German Wine Production"
  },

  // Burgundy Production
  {
    id: 21,
    title: "Burgundy Pinot Noir Winemaking",
    question: "Describe the key winemaking techniques used to maximize quality in Burgundy Pinot Noir production.",
    answer: "Cold pre-fermentation maceration (4-6 days) extracts color and aroma without tannins. Gentle extraction through punch-downs or pump-overs. Native yeast fermentation for complexity. Malolactic fermentation to soften acidity. Aging in French oak (25-100% new) adds structure and complexity. Long elevage (12-18 months) allows integration. Minimal filtration preserves texture and complexity.",
    marks: 7,
    module: "Burgundy Red Wine Production"
  },
  {
    id: 22,
    title: "Burgundy White Wine Sur Lie Aging",
    question: "Explain the benefits of sur lie aging for white Burgundy wines and describe the technique.",
    answer: "Sur lie aging involves leaving white wine in contact with dead yeast cells (lees) after fermentation. Benefits include: enhanced texture and mouthfeel, protection from oxidation, development of complex flavors (bread, nuts, cream), and integration of oak. Technique involves regular bâtonnage (lees stirring) to increase contact and prevent off-flavors. Duration typically 6-12 months depending on wine style.",
    marks: 6,
    module: "Burgundy White Wine Production"
  },

  // Bordeaux Production
  {
    id: 23,
    title: "Bordeaux Left Bank vs Right Bank",
    question: "Compare the grape varieties, soil types, and wine styles of Bordeaux Left Bank and Right Bank regions.",
    answer: {
      "Left Bank - Grape varieties": "Cabernet Sauvignon dominant, blended with Merlot, Cabernet Franc, Petit Verdot",
      "Left Bank - Soil types": "Gravel over limestone/clay, providing excellent drainage and heat retention",
      "Left Bank - Wine styles": "Structured, tannic, age-worthy wines with cassis and cedar flavors",
      "Right Bank - Grape varieties": "Merlot dominant, blended with Cabernet Franc, some Cabernet Sauvignon",
      "Right Bank - Soil types": "Clay and limestone, retaining moisture and providing earlier ripening",
      "Right Bank - Wine styles": "Softer, more approachable wines with plum and spice character"
    },
    marks: 9,
    module: "Bordeaux Regional Differences"
  },
  {
    id: 24,
    title: "Bordeaux Barrel Aging",
    question: "Explain why barrel aging is essential for premium Bordeaux red wines and describe the process.",
    answer: "Barrel aging provides micro-oxygenation that softens tannins and integrates flavors. French oak adds complementary flavors (vanilla, spice, toast) and tannin structure. The process involves 12-24 months in 225L barriques, with regular topping up to prevent oxidation. Racking every 3-4 months clarifies wine and controls extraction. Premium estates use 50-100% new oak for added complexity and aging potential.",
    marks: 6,
    module: "Bordeaux Winemaking"
  },

  // Loire Valley Production  
  {
    id: 25,
    title: "Loire Valley Sauvignon Blanc Styles",
    question: "Compare the production methods and resulting wine styles of Sancerre and Pouilly-Fumé Sauvignon Blanc.",
    answer: {
      "Sancerre production": "Stainless steel fermentation, no oak aging, early bottling to preserve freshness. Some producers use oak or lees contact for premium wines.",
      "Sancerre style": "Crisp, mineral, citrus and herb flavors, high acidity, food-friendly",
      "Pouilly-Fumé production": "Similar to Sancerre but some producers use oak aging and lees contact more frequently. Silex (flint) soils contribute unique character.",
      "Pouilly-Fumé style": "Often more rounded than Sancerre, distinctive smoky/gunflint character, citrus and stone fruit flavors"
    },
    marks: 8,
    module: "Loire Valley White Wines"
  },
  {
    id: 26,
    title: "Chenin Blanc Versatility",
    question: "Explain how Chenin Blanc's characteristics allow it to produce diverse wine styles in the Loire Valley.",
    answer: "Chenin Blanc has naturally high acidity that provides structure for dry, sweet, and sparkling wines. Its neutral flavor profile allows terroir expression. The grape's susceptibility to botrytis enables sweet wine production. High acidity provides aging potential. Early harvest creates crisp dry wines, late harvest develops sweetness, and traditional method sparkling wine production is possible. The variety's resilience allows production in various Loire Valley appellations.",
    marks: 7,
    module: "Loire Valley Chenin Blanc"
  },

  // Rhône Valley Production
  {
    id: 27,
    title: "Northern Rhône Syrah Character",
    question: "Describe the typical character of Northern Rhône Syrah and explain how terroir influences the style.",
    answer: "Northern Rhône Syrah displays dark fruit (blackberry, olive), black pepper spice, smoked meat, and floral (violet) notes. Cool continental climate preserves acidity and develops complex aromatics. Steep granite slopes with heat-retaining stones ensure ripeness despite northern latitude. Different soil types create variation - Hermitage produces powerful wines, Côte-Rôtie more elegant. Traditional whole-cluster fermentation and aging in large old oak preserves fruit character.",
    marks: 8,
    module: "Northern Rhône Production"
  },
  {
    id: 28,
    title: "Châteauneuf-du-Pape Regulations",
    question: "Explain the key regulations for Châteauneuf-du-Pape production and how they ensure quality.",
    answer: "18 permitted grape varieties allow blending flexibility. Minimum alcohol 12.5% ensures ripeness. Yields limited to 35 hl/ha concentrate flavors. Triage (sorting) mandates 5% of harvest discarded. No irrigation forces deep rooting. Traditional vinification methods preserve character. These regulations ensure concentrated, complex wines worthy of the appellation's reputation while maintaining traditional production methods.",
    marks: 7,
    module: "Southern Rhône Regulations"
  },

  // Spanish Wine Production
  {
    id: 29,
    title: "Rioja Aging Classifications",
    question: "Describe the four aging classifications for Rioja wines and their requirements.",
    answer: {
      "Joven": "Young wines with no mandatory aging requirements, released immediately or after brief aging",
      "Crianza": "Minimum 2 years aging with at least 1 year in oak barrels (225L maximum), plus bottle aging",
      "Reserva": "Minimum 3 years aging with at least 1 year in oak, remaining time in bottle or oak",
      "Gran Reserva": "Minimum 5 years aging with at least 18 months in oak, remainder in bottle. Only made in exceptional years."
    },
    marks: 8,
    module: "Spanish Wine Classifications"
  },
  {
    id: 30,
    title: "Sherry Production Process",
    question: "Describe the traditional solera system used in Sherry production.",
    answer: "The solera system involves fractional blending through multiple levels of barrels. Oldest wine sits in bottom row (solera), younger wines in upper rows (criaderas). Wine for bottling is drawn from solera barrels, which are topped up from first criadera, which is topped up from second criadera, etc. New wine enters top level. This creates consistent style and quality across years while maintaining average age. System never empties completely, ensuring continuity.",
    marks: 6,
    module: "Sherry Production"
  },

  // Italian Wine Production
  {
    id: 31,
    title: "Chianti Classico Production",
    question: "Explain the grape varieties, production methods, and aging requirements for Chianti Classico DOCG.",
    answer: "Minimum 80% Sangiovese, up to 20% other authorized varieties (Cabernet Sauvignon, Merlot, etc.). Traditional Tuscan methods with extended maceration for color and tannin extraction. Aging minimum 12 months, Riserva minimum 24 months with 3 months bottle aging. Oak aging (large Slavonian oak traditional, French barriques for premium wines) develops complexity. Strict yield limits and quality controls ensure concentration.",
    marks: 9,
    module: "Italian Wine Production"
  },
  {
    id: 32,
    title: "Barolo vs Barbaresco",
    question: "Compare the production and style differences between Barolo and Barbaresco wines.",
    answer: {
      "Grape variety": "Both made from 100% Nebbiolo",
      "Climate differences": "Barolo has cooler, more continental climate; Barbaresco slightly warmer and maritime influenced",
      "Aging requirements": "Barolo minimum 38 months (18 in wood); Barbaresco minimum 26 months (9 in wood)",
      "Style differences": "Barolo more powerful, tannic, structured, needs longer aging; Barbaresco more elegant, approachable earlier, but still age-worthy",
      "Soil": "Both calcareous clay, but Barbaresco generally lighter soils"
    },
    marks: 10,
    module: "Piedmont Wine Production"
  },

  // Portuguese Wine Production
  {
    id: 33,
    title: "Port Wine Categories",
    question: "Describe the difference between wood-aged and bottle-aged Port styles.",
    answer: {
      "Wood-aged Ports": "Tawny, Colheita, and Aged Tawny Ports. Aged in small oak barrels with controlled oxidation. Develop nutty, caramel, dried fruit flavors. Ready to drink when bottled. Lighter color, smooth texture.",
      "Bottle-aged Ports": "Vintage, Late Bottled Vintage (traditional), and Crusted Port. Minimal wood aging before bottling. Develop in bottle under reductive conditions. Retain dark color, concentrated fruit flavors. Form sediment and require decanting."
    },
    marks: 8,
    module: "Port Production"
  },

  // Austrian Wine Production
  {
    id: 34,
    title: "Austrian Grüner Veltliner Styles",
    question: "Describe the different styles of Grüner Veltliner produced in Austria and their production methods.",
    answer: "Light style: Early harvest, stainless steel fermentation, young consumption. Shows citrus and herb character. Premium style: Later harvest from top sites, possible oak aging, lees contact. More complex with stone fruit and spice. Smaragd (Reserve level): Fully ripe grapes, oak aging common, rich and full-bodied with aging potential. All styles benefit from Austria's continental climate and diverse soil types.",
    marks: 7,
    module: "Austrian Wine Production"
  },

  // New World Production Techniques
  {
    id: 35,
    title: "California Cabernet Sauvignon Production",
    question: "Describe the key production techniques used for premium California Cabernet Sauvignon.",
    answer: "Hand harvesting ensures grape selection. Extended maceration (4-6 weeks) extracts color and tannins. Controlled fermentation temperatures (25-30°C) preserve fruit character. Malolactic fermentation softens acidity. Aging 18-24 months in French and/or American oak (50-100% new for premium wines). Blending with Merlot, Cabernet Franc for complexity. Minimal filtration preserves texture and concentration.",
    marks: 8,
    module: "California Red Wine Production"
  },
  {
    id: 36,
    title: "Australian Shiraz Regional Styles",
    question: "Compare the styles and production approaches of Shiraz from three major Australian regions.",
    answer: {
      "Barossa Valley": "Full-bodied, rich, chocolate and spice flavors. Warm climate, old vine fruit, American oak aging traditional",
      "Hunter Valley": "Medium-bodied, earthy, leather notes. Warm climate but earlier harvest, large old oak for aging",
      "Eden Valley": "Elegant, structured, pepper and dark fruit. Cool climate, higher altitude, French oak more common"
    },
    marks: 9,
    module: "Australian Wine Regions"
  },
  {
    id: 37,
    title: "New Zealand Sauvignon Blanc Production",
    question: "Explain the production techniques that create the distinctive style of Marlborough Sauvignon Blanc.",
    answer: "Cool climate preserves high natural acidity and intense aromatics. Machine harvesting at night preserves freshness. Cool fermentation (12-15°C) in stainless steel retains fruit character. Some producers use wild yeast for complexity. Minimal or no malolactic fermentation maintains crisp acidity. Early bottling captures vibrant fruit flavors. Some premium producers use oak or lees contact for texture.",
    marks: 7,
    module: "New Zealand Wine Production"
  },

  // Chilean Wine Production
  {
    id: 38,
    title: "Chilean Carmenère Characteristics",
    question: "Describe the distinctive characteristics of Chilean Carmenère and the factors that influence its style.",
    answer: "Carmenère shows dark fruit flavors (blackberry, plum), green bell pepper notes when under-ripe, chocolate and spice when fully ripe. Requires warm, sunny conditions for full ripening - Central Valley ideal. Late ripening variety needs extended hang time. Traditional winemaking with oak aging develops complexity. Proper site selection and canopy management essential to avoid herbaceous character.",
    marks: 6,
    module: "Chilean Wine Production"
  },

  // Argentinian Wine Production  
  {
    id: 39,
    title: "Argentine Malbec Terroir",
    question: "Explain how altitude and climate in Mendoza influence the style of Argentine Malbec.",
    answer: "High altitude (800-1500m) provides intense UV radiation that develops thick skins and concentrated flavors. Large diurnal temperature variation preserves acidity despite warm days. Low rainfall requires irrigation but allows vintage control. Desert climate minimizes disease pressure. These factors combine to produce dark, concentrated Malbec with ripe fruit flavors, good structure, and aging potential while maintaining freshness.",
    marks: 8,
    module: "Argentine Wine Production"
  },

  // South African Wine Production
  {
    id: 40,
    title: "South African Pinotage",
    question: "Describe the characteristics and production challenges of South African Pinotage.",
    answer: "Pinotage (Pinot Noir x Cinsaut cross) shows red berry fruit, often with smoky, earthy, sometimes rubber-like notes. Production challenges include tendency to develop volatile acidity and managing extraction to avoid harsh tannins. Modern techniques use temperature control, careful extraction, and selective use of oak to produce cleaner, more fruit-focused styles. Best examples balance fruit intensity with South African terroir expression.",
    marks: 6,
    module: "South African Wine Production"
  },

  // Advanced Production Techniques
  {
    id: 41,
    title: "Biodynamic Viticulture Principles",
    question: "Explain the key principles of biodynamic viticulture and how they differ from organic farming.",
    answer: "Biodynamic farming treats the vineyard as a living organism, following lunar and cosmic cycles. Uses homeopathic preparations (500-508) to enhance soil and plant health. Emphasizes biodiversity and self-sufficiency. Goes beyond organic by incorporating spiritual and philosophical elements. Preparations like cow horn silica and chamomile flowers are used. Timing of vineyard operations follows biodynamic calendar. Goal is to enhance terroir expression and vine health naturally.",
    marks: 8,
    module: "Sustainable Viticulture"
  },
  {
    id: 42,
    title: "Micro-oxygenation Technique",
    question: "Describe the micro-oxygenation technique and its effects on red wine production.",
    answer: "Micro-oxygenation involves controlled addition of small amounts of oxygen during fermentation or aging. Helps stabilize color, soften tannins, and improve mouthfeel. Can replace or supplement traditional barrel aging. Allows precise oxygen control compared to barrel aging. Particularly useful for wines that would benefit from oxygen exposure but where new oak flavors are not desired. Requires careful monitoring to avoid over-oxidation.",
    marks: 6,
    module: "Modern Winemaking Techniques"
  },

  // Wine Faults and Corrections
  {
    id: 43,
    title: "Cork Taint (TCA) in Wine",
    question: "Describe cork taint (TCA), its causes, and prevention methods.",
    answer: "TCA (2,4,6-trichloroanisole) creates musty, wet cardboard aromas that mask fruit character. Caused by reaction between chlorine compounds and natural fungi in cork. Prevention includes: cork supplier quality control, avoiding chlorine-based sanitizers, proper cork storage, alternative closures (synthetic, screwcap). TCA can also originate from winery environment (wooden structures, packaging materials). Modern cork production uses steam sterilization and TCA testing.",
    marks: 7,
    module: "Wine Faults and Quality Control"
  },
  {
    id: 44,
    title: "Brettanomyces Management",
    question: "Explain how Brettanomyces affects wine quality and describe prevention strategies.",
    answer: "Brettanomyces produces 4-ethylphenol and 4-ethylguaiacol, creating 'barnyard,' 'Band-Aid,' or 'medicinal' aromas. At low levels may add complexity, but typically considered a fault. Prevention: proper sanitation, SO2 management, temperature control, prompt malolactic fermentation completion, filtration when necessary. Treatment options include sterile filtration, SO2 adjustment, or DMDC (dimethyl dicarbonate) addition.",
    marks: 8,
    module: "Wine Microbiology"
  },

  // Wine Service and Storage
  {
    id: 45,
    title: "Proper Wine Glass Selection",
    question: "Explain how glass shape affects wine perception and recommend appropriate glasses for different wine styles.",
    answer: {
      "How glass shape affects perception": "Bowl size concentrates or disperses aromatics. Rim diameter affects wine delivery to palate. Bowl shape directs wine to specific taste areas on tongue.",
      "Red wines": "Large bowls to concentrate aromatics, wide rim for full palate contact",
      "White wines": "Smaller bowls to maintain cooler temperature, narrower rim to direct wine to front of palate", 
      "Sparkling wines": "Tall, narrow flutes preserve bubbles and concentrate delicate aromatics"
    },
    marks: 6,
    module: "Wine Service"
  },

  // Advanced Wine Analysis
  {
    id: 46,
    title: "Wine pH and Acidity Analysis",
    question: "Explain the difference between pH and titratable acidity in wine analysis and their importance.",
    answer: "pH measures hydrogen ion concentration (strength of acidity), scale 0-14 with wine typically 3.0-4.0. Titratable acidity measures total acid content, expressed as g/L tartaric acid equivalent. Low pH (high acidity) provides microbial stability, color stability in reds, and fresh taste. TA affects wine balance and aging potential. Both parameters must be considered together - wine can have high TA but moderate pH if acids are buffered.",
    marks: 8,
    module: "Wine Chemistry"
  },

  // Terroir and Climate Change
  {
    id: 47,
    title: "Climate Change Impact on Wine Regions",
    question: "Describe how climate change is affecting traditional wine regions and adaptation strategies being employed.",
    answer: "Rising temperatures are advancing harvest dates, increasing alcohol levels, and reducing acidity. Traditional cool climate regions becoming warmer, while hot regions face heat stress. Adaptation strategies include: planting at higher altitudes/latitudes, changing grape varieties, adjusting canopy management, using shade cloth, deficit irrigation, earlier harvest timing. Some regions benefit from warmer conditions while others struggle to maintain traditional styles.",
    marks: 9,
    module: "Climate and Viticulture"
  },

  // Wine Marketing and Economics
  {
    id: 48,
    title: "Terroir vs Brand Marketing",
    question: "Compare terroir-based marketing versus brand-based marketing approaches in the wine industry.",
    answer: {
      "Terroir-based marketing": "Emphasizes place of origin, soil, climate, tradition. Common in Old World regions. Builds on appellation reputation and vintage variation. Appeals to wine enthusiasts seeking authenticity.",
      "Brand-based marketing": "Emphasizes consistent style, producer reputation, lifestyle association. Common in New World regions. Focuses on reliable quality across vintages. Appeals to broader consumer base seeking familiarity.",
      "Both approaches": "Can be combined effectively, using terroir to differentiate premium tiers while maintaining brand consistency"
    },
    marks: 8,
    module: "Wine Business"
  },

  // Advanced Tasting and Evaluation
  {
    id: 49,
    title: "Blind Tasting Methodology",
    question: "Describe a systematic approach to blind wine tasting and explain how to identify grape variety and region.",
    answer: "Systematic approach: 1) Visual assessment (color, intensity, clarity) 2) Nose analysis (intensity, fruit character, secondary/tertiary aromas) 3) Palate evaluation (sweetness, acidity, tannin, body, flavor intensity, finish length) 4) Quality assessment and conclusions. Identify variety through characteristic aromatics and structure. Determine climate from acidity/alcohol balance. Regional identification requires knowledge of typical styles and production methods.",
    marks: 10,
    module: "Wine Tasting and Evaluation"
  },

  // Wine and Food Pairing
  {
    id: 50,
    title: "Wine and Food Pairing Principles",
    question: "Explain the fundamental principles of successful wine and food pairing.",
    answer: "Match intensity levels - light wines with delicate dishes, bold wines with robust flavors. Consider acidity - high acid wines cut through rich foods and cleanse palate. Tannins pair well with protein and fat. Sweet wines should be sweeter than dessert. Complement or contrast flavors thoughtfully. Regional pairings often work well. Consider cooking methods - grilled foods pair with bold wines, poached foods with delicate wines.",
    marks: 8,
    module: "Wine and Food Pairing"
  },

  // Continue with remaining 50 questions covering all WSET Level 3 topics...
  // [Questions 51-100 would continue with similar format covering remaining modules]
  
  {
    id: 51,
    title: "Champagne Riddling Process",
    question: "Describe the riddling (remuage) process in traditional method sparkling wine production.",
    answer: "Riddling involves gradually rotating and tilting bottles to move sediment into the neck. Bottles are placed in riddling racks (pupitres) at 45-degree angle. Over 6-8 weeks, bottles are turned 1/8 turn and tilted slightly each day until vertical, neck-down. This consolidates sediment in neck for easy removal during disgorgement. Modern gyropalettes automate this process, completing riddling in 1 week.",
    marks: 5,
    module: "Sparkling Wine Production"
  },

  {
    id: 52,
    title: "German Wine Classifications",
    question: "Explain the German Prädikatswein classifications and their harvest requirements.",
    answer: {
      "Kabinett": "Lightest style, minimum 70-85° Oechsle depending on region, delicate wines often off-dry",
      "Spätlese": "Late harvest, minimum 85-95° Oechsle, fuller bodied, can be dry or sweet",
      "Auslese": "Select harvest, minimum 95-105° Oechsle, concentrated, often sweet", 
      "Beerenauslese": "Berry selection, minimum 125° Oechsle, individual berry selection, sweet dessert wine",
      "Trockenbeerenauslese": "Dried berry selection, minimum 150° Oechsle, botrytis-affected grapes, extremely sweet and concentrated"
    },
    marks: 10,
    module: "German Wine Classifications"
  },

  {
    id: 53,
    title: "Burgundy Grand Cru vs Premier Cru",
    question: "Explain the differences between Grand Cru and Premier Cru classifications in Burgundy.",
    answer: "Grand Cru represents the highest classification - exceptional vineyard sites with their own AOC status. Only 33 Grand Cru vineyards exist, mainly in Côte d'Or. Premier Cru sites are excellent but slightly less exceptional, designated within village appellations. Grand Cru wines typically show greater concentration, complexity, and aging potential. Premier Cru offers better value while still representing superior terroir. Both classifications reflect centuries of observation about site quality.",
    marks: 7,
    module: "Burgundy Classifications"
  },

  {
    id: 54,
    title: "Vintage Port Declaration",
    question: "Explain the process and criteria for declaring a Vintage Port year.",
    answer: "Vintage Port is only declared in exceptional years (roughly 3 times per decade). Each house makes independent declaration decision based on grape quality, weather conditions, and wine potential. Grapes must be from single vintage, made using traditional foot-treading methods. Wine is aged 2 years in wood before bottling. Declared vintage represents house's best wine in that year. Recent climate change has increased declaration frequency in some houses.",
    marks: 6,
    module: "Port Wine Classifications"
  },

  {
    id: 55,
    title: "French Oak vs American Oak",
    question: "Compare the characteristics and effects of French oak versus American oak in wine aging.",
    answer: {
      "French Oak": "Tighter grain, more subtle flavors (vanilla, spice, toast), higher tannins, more expensive. Contributes elegance and complexity without overpowering wine character.",
      "American Oak": "Wider grain, more pronounced flavors (coconut, vanilla, dill), lower tannins, less expensive. Provides bolder oak character, traditional in some regions (Spain, Australia).",
      "Both types": "Provide micro-oxygenation, color stabilization, and tannin integration. Choice depends on desired wine style and regional tradition."
    },
    marks: 8,
    module: "Oak Aging Effects"
  },

  {
    id: 56,
    title: "Alsace Grand Cru Regulations",
    question: "Describe the regulations governing Alsace Grand Cru wines and their impact on quality.",
    answer: "51 designated Grand Cru sites with specific geological and climatic characteristics. Only four noble grapes permitted: Riesling, Gewürztraminer, Pinot Gris, Muscat. Stricter yield limits (55 hl/ha vs 80 hl/ha for basic Alsace). Hand harvesting required. Minimum ripeness levels specified. Some sites have additional restrictions (grape varieties, harvesting methods). These regulations ensure concentration and site expression in premium wines.",
    marks: 8,
    module: "Alsace Grand Cru System"
  },

  {
    id: 57,
    title: "Madeira Production Process",
    question: "Describe the estufagem process used in Madeira wine production and its effects.",
    answer: "Estufagem involves heating wine to 45-50°C for minimum 3 months to simulate tropical aging. Modern process uses stainless steel tanks with heating coils. Traditional canteiro method uses natural heat in lodge attics over many years. Heat creates characteristic burnt, caramelized flavors and brown color. Process also concentrates wine through evaporation and creates unique oxidized style that is virtually indestructible.",
    marks: 7,
    module: "Fortified Wine Production"
  },

  {
    id: 58,
    title: "Super Tuscan Wines",
    question: "Explain the development of Super Tuscan wines and their impact on Italian wine classification.",
    answer: "Super Tuscans developed in 1970s when producers wanted to use international grape varieties (Cabernet Sauvignon, Merlot) not permitted in Chianti DOCG. Initially classified as Vino da Tavola despite high quality and prices. Led to creation of IGT (Indicazione Geografica Tipica) classification in 1992. Demonstrated that innovation could coexist with tradition. Influenced modernization of DOC/DOCG regulations and acceptance of international varieties.",
    marks: 8,
    module: "Italian Wine Evolution"
  },

  {
    id: 59,
    title: "Cava Production Methods",
    question: "Describe the production methods for Cava and explain how they differ from Champagne.",
    answer: "Cava uses traditional method (metodo tradicional) like Champagne but with different grape varieties: Macabeo, Xarel-lo, Parellada (traditional), plus Chardonnay and Pinot Noir. Minimum 9 months on lees (vs 15 for Champagne). Warmer climate allows riper grapes. Often machine harvested. Generally less expensive due to lower land costs and mechanization. Quality levels vary widely from basic to premium Gran Reserva (30+ months aging).",
    marks: 8,
    module: "Spanish Sparkling Wine"
  },

  {
    id: 60,
    title: "Douro Valley Viticulture",
    question: "Describe the unique viticulture challenges and solutions in the Douro Valley.",
    answer: "Extremely steep slate and schist terraces (quintas) require hand cultivation. Harsh continental climate with hot summers and cold winters. Low rainfall requires water conservation. Traditional stone terraces (socalcos) prevent erosion. Modern patamares (wider terraces) allow mechanization. Altitude variation creates multiple mesoclimates. Old vine heritage provides concentration but low yields. Climate change bringing earlier harvest dates and higher alcohol levels.",
    marks: 9,
    module: "Portuguese Viticulture"
  },

  // Continue with remaining questions to reach 100...
  
  {
    id: 61,
    title: "Tokaj Aszú Production",
    question: "Describe the traditional production method for Tokaj Aszú dessert wines.",
    answer: "Botrytis-affected grapes (aszú berries) are hand-selected and macerated with base wine. Traditional measure uses 'puttonyos' (baskets) - 3-6 puttonyos per barrel determine sweetness level. Fermentation is slow due to high sugar and can take years. Aging in small oak barrels develops complexity. Modern production may use crushing instead of maceration. The unique climate of Tokaj region, with morning mists from rivers, promotes botrytis development.",
    marks: 8,
    module: "Hungarian Dessert Wines"
  },

  {
    id: 62,
    title: "Riesling Style Variations",
    question: "Compare the different styles of Riesling produced in Germany, Alsace, and Australia.",
    answer: {
      "German Riesling": "Range from bone dry to very sweet, high acidity, delicate fruit flavors, lower alcohol, mineral expression important",
      "Alsace Riesling": "Predominantly dry, fuller body, higher alcohol, intense fruit concentration, pronounced mineral character from varied soils",
      "Australian Riesling": "Dry style dominant, citrus and lime flavors, crisp acidity, often aged in stainless steel, develops petrol character with age"
    },
    marks: 9,
    module: "International Riesling Styles"
  },

  {
    id: 63,
    title: "Beaujolais Cru Differences",
    question: "Explain the differences between Beaujolais-Villages and the Beaujolais Crus.",
    answer: "Beaujolais-Villages comes from 39 designated villages with better sites than basic Beaujolais. The 10 Crus (Fleurie, Morgon, etc.) represent the best sites with individual appellations. Crus must be 100% Gamay, typically use traditional rather than carbonic maceration, have more structure and aging potential. Each Cru has distinctive character - Fleurie is floral, Morgon is structured, Moulin-à-Vent is powerful. Crus can age 5-10+ years versus 2-3 for Villages.",
    marks: 8,
    module: "Beaujolais Classifications"
  },

  {
    id: 64,
    title: "Mosel Riesling Terroir",
    question: "Explain how the terroir of the Mosel Valley influences Riesling wine style.",
    answer: "Steep slate slopes provide excellent drainage and heat retention. River reflection amplifies sunlight and moderates temperature. Cool climate preserves acidity and extends growing season. Blue Devonian slate soils impart distinctive mineral character. South-facing slopes crucial for ripening. Hand cultivation required due to steepness. Results in wines with piercing acidity, delicate fruit flavors, and characteristic slate minerality.",
    marks: 7,
    module: "German Terroir"
  },

  {
    id: 65,
    title: "Amarone Production Process",
    question: "Describe the appassimento process used to make Amarone della Valpolicella.",
    answer: "Healthy Corvina, Rondinella, and Molinara grapes are dried on straw mats or modern drying rooms for 3-4 months until December-February. Grapes lose 35-45% of water weight, concentrating sugars and flavors. Dried grapes are pressed and fermented slowly for months. High sugar content results in high alcohol (14-16%) but wine is typically dry as yeast consumes most sugars. Extended aging (2+ years) develops complexity.",
    marks: 7,
    module: "Italian Dried Grape Wines"
  },

  {
    id: 66,
    title: "Sauternes Production Conditions",
    question: "Explain the specific conditions required for Sauternes production and the role of botrytis cinerea.",
    answer: "Morning mists from Garonne and Ciron rivers promote botrytis development. Afternoon sun desiccates grapes. Botrytis punctures grape skins, allowing water evaporation while concentrating sugars and developing unique flavors. Multiple selective harvests required as botrytis develops unevenly. Noble rot adds honeyed, dried fruit, and spice character. Perfect balance of humidity and warmth essential - too wet causes grey rot, too dry prevents botrytis.",
    marks: 9,
    module: "French Dessert Wines"
  },

  {
    id: 67,
    title: "Barossa Valley Old Vine Wines",
    question: "Explain the significance of old vine Shiraz in the Barossa Valley and its impact on wine quality.",
    answer: "Some vines date to 1840s, among world's oldest. Old vines have extensive root systems accessing deep water and nutrients. Lower yields naturally concentrate flavors. Vines adapted to local conditions provide consistency. Genetic diversity from old vine selections adds complexity. Cultural heritage value drives premium pricing. Old vine fruit shows greater concentration, complexity, and distinctive regional character compared to young vine fruit.",
    marks: 8,
    module: "Australian Old Vine Heritage"
  },

  {
    id: 68,
    title: "Loire Valley Muscadet Production",
    question: "Describe the production of Muscadet Sèvre-et-Maine sur lie and explain the benefits of lees aging.",
    answer: "Made from Melon de Bourgogne (called Muscadet locally) in the Sèvre-et-Maine appellation. 'Sur lie' indicates wine remained on lees until at least March 1st following harvest without racking. Lees contact adds texture, complexity, and slight effervescence. Protects wine from oxidation. Creates fuller mouthfeel while maintaining crisp character. Bottling directly from tank preserves freshness and terroir expression.",
    marks: 7,
    module: "Loire Valley White Wine Production"
  },

  {
    id: 69,
    title: "Oregon Pinot Noir Terroir",
    question: "Explain how the climate and soils of the Willamette Valley influence Oregon Pinot Noir style.",
    answer: "Cool, wet winters and warm, dry summers with long growing season. Marine influence from Pacific Ocean moderates temperature. Jory (volcanic) and Willakenzie (sedimentary) soils provide different expressions. High elevation sites (200-700 feet) above fog line. Long hang time develops complexity while preserving acidity. Results in elegant, structured Pinot Noir with bright fruit, earth notes, and good aging potential.",
    marks: 8,
    module: "Oregon Wine Terroir"
  },

  {
    id: 70,
    title: "Jerez Flor Development",
    question: "Explain the formation and role of flor in Fino and Manzanilla Sherry production.",
    answer: "Flor is a film of native yeasts (Saccharomyces cerevisiae) that develops naturally on wine surface in partially filled barrels. Forms in cool, humid conditions (15-20°C, 60-70% humidity). Feeds on alcohol and glycerol, preventing oxidation. Imparts distinctive flavors - almonds, fresh bread, sea breeze. Essential for Fino/Manzanilla style. Dies above 17% alcohol. Seasonal variation affects flor thickness and wine character.",
    marks: 8,
    module: "Sherry Production Microbiology"
  },

  {
    id: 71,
    title: "Cognac Distillation Process",
    question: "Describe the double distillation process used in Cognac production.",
    answer: "First distillation (première chauffe) in copper pot still produces 'brouillis' at 28-32% alcohol. Second distillation of brouillis produces 'bonne chauffe' at 70% alcohol. Only heart of second distillation (40 minutes of 8-hour process) becomes Cognac. Head and tail portions recycled. Copper stills remove sulfur compounds and add character. Process concentrates flavors and creates spirit suitable for oak aging.",
    marks: 7,
    module: "French Brandy Production"
  },

  {
    id: 72,
    title: "Priorat Wine Terroir",
    question: "Explain how the unique terroir of Priorat influences wine style and quality.",
    answer: "Llicorella soils (black slate with quartz) provide excellent drainage and heat retention. Steep terraced vineyards at 100-700m elevation. Continental climate with maritime influence. Very low yields due to poor soils concentrate flavors. Old Garnacha and Cariñena vines adapted to harsh conditions. Modern plantings of Cabernet Sauvignon and Syrah. Results in powerful, mineral-driven wines with intense concentration and distinctive terroir expression.",
    marks: 9,
    module: "Spanish Premium Wine Regions"
  },

  {
    id: 73,
    title: "Canadian Icewine Production",
    question: "Describe the production requirements and characteristics of Canadian Icewine.",
    answer: "Grapes must freeze naturally on vine at -8°C or lower. Harvesting typically December-February in frozen conditions. Grapes pressed while frozen, separating concentrated juice from ice crystals. Must achieve minimum 35° Brix sugar level. Fermentation slow and often stops naturally at 8-13% alcohol. Results in intensely sweet wine with high acidity, concentrated fruit flavors, and excellent aging potential. VQA regulations ensure authenticity.",
    marks: 8,
    module: "Canadian Dessert Wine Production"
  },

  {
    id: 74,
    title: "Rutherford Dust Phenomenon",
    question: "Explain the 'Rutherford Dust' characteristic in Napa Valley Cabernet Sauvignon and its origins.",
    answer: "Distinctive dusty, earthy tannin character found in Cabernet Sauvignon from Rutherford AVA. Attributed to well-drained alluvial soils with gravel, sand, and clay. Moderate water stress concentrates flavors. Warm days and cool nights from bay influence. Creates wines with firm but silky tannins, cassis fruit, and distinctive mineral/earth undertones. Considered benchmark style for Napa Cabernet Sauvignon.",
    marks: 7,
    module: "Napa Valley Terroir"
  },

  {
    id: 75,
    title: "Burgundy Climat System",
    question: "Explain the concept of 'climat' in Burgundy and its importance to wine classification.",
    answer: "Climat refers to specific vineyard plots with unique terroir characteristics - soil, slope, exposure, microclimate. Over 1,200 named climats in Côte d'Or. Each has distinct personality reflected in wine character. Forms basis of Burgundy's classification system from Regional to Grand Cru. Centuries of observation identified best sites. UNESCO World Heritage recognition confirms cultural significance. Represents perfect expression of terroir concept.",
    marks: 8,
    module: "Burgundy Terroir Classification"
  },

  // Continue adding questions to reach 100 total...

  {
    id: 76,
    title: "Italian Wine Laws Evolution",
    question: "Explain the development of Italian wine laws from DOC to DOCG and the introduction of IGT.",
    answer: "DOC (1963) established controlled origins but was too restrictive. DOCG (1980) added government guarantee for highest quality wines. IGT (1992) created flexibility for innovative wines outside DOC rules. System allows traditional (DOC/DOCG) and modern (IGT) approaches. Super Tuscans catalyst for IGT creation. Recent reforms allow more grape varieties and modern techniques in DOC wines while preserving tradition.",
    marks: 8,
    module: "Italian Wine Law Development"
  },

  {
    id: 77,
    title: "Burgundy Négociant vs Domaine",
    question: "Compare the roles and approaches of négociants versus domaines in Burgundy.",
    answer: {
      "Négociants": "Purchase grapes, juice, or finished wine from growers. Large volumes allow consistent availability. Professional winemaking and marketing. Access to multiple appellations. Examples: Louis Jadot, Joseph Drouhin.",
      "Domaines": "Estate-grown and bottled wines. Complete control over viticulture and winemaking. Limited quantities, often from family holdings. Direct terroir expression. Examples: Domaine de la Romanée-Conti, Domaine Leroy.",
      "Modern trend": "Quality négociants work closely with growers, some domaines purchase grapes to expand range."
    },
    marks: 9,
    module: "Burgundy Production Systems"
  },

  {
    id: 78,
    title: "German VDP Classification",
    question: "Explain the VDP (Verband Deutscher Prädikatsweingüter) classification system and its significance.",
    answer: "Private association of top German producers created hierarchical classification: VDP.Grosse Lage (Grand Cru sites), VDP.Erste Lage (Premier Cru), VDP.Ortswein (village level), VDP.Gutswein (regional level). Based on Burgundy model emphasizing site quality over ripeness. Stricter standards than official German law. Promotes dry wines and terroir expression. Helps consumers navigate complex German wine landscape.",
    marks: 8,
    module: "German Wine Classification Reform"
  },

  {
    id: 79,
    title: "Rhône Valley Appellation Hierarchy",
    question: "Describe the appellation hierarchy in the Rhône Valley and the differences between Northern and Southern Rhône.",
    answer: {
      "Northern Rhône": "Individual appellations (Hermitage, Côte-Rôtie, etc.) for specific sites. Predominantly Syrah for reds, Marsanne/Roussanne for whites. Steep granite slopes.",
      "Southern Rhône": "Regional appellations (Côtes du Rhône) and village appellations (Châteauneuf-du-Pape, Gigondas, etc.). Blend-based, multiple grape varieties. Rolling hills with diverse soils.",
      "Quality hierarchy": "Côtes du Rhône (regional) → Côtes du Rhône-Villages → Individual village appellations → Cru appellations"
    },
    marks: 10,
    module: "Rhône Valley Structure"
  },

  {
    id: 80,
    title: "Australian Wine Show System",
    question: "Explain the Australian wine show system and its influence on wine style development.",
    answer: "Competitive wine shows judge wines by style categories with detailed scoring. Influential judges shape industry standards and consumer preferences. Historically favored rich, oaky styles that performed well in competition. Recent evolution toward site-specific and restrained styles. Alternative wine movement emerged partly in reaction to show wine styles. System still important for smaller producers gaining recognition and market access.",
    marks: 7,
    module: "Australian Wine Culture"
  },

  {
    id: 81,
    title: "Moscato d'Asti Production",
    question: "Describe the production method for Moscato d'Asti and how it differs from Asti Spumante.",
    answer: {
      "Moscato d'Asti": "Partial fermentation stopped by chilling and filtration. Lower alcohol (5.5%), light effervescence, residual sweetness. Bottled under pressure without secondary fermentation.",
      "Asti Spumante": "Tank method fermentation continued until desired pressure reached. Higher alcohol (7-9%), more effervescence, can be drier.",
      "Both": "Made from Moscato Bianco grapes, preserve fresh grape character, no malolactic fermentation, consumed young"
    },
    marks: 7,
    module: "Italian Sparkling Wine Production"
  },

  {
    id: 82,
    title: "Finger Lakes Riesling Terroir",
    question: "Explain how the unique terroir of the Finger Lakes region influences Riesling production.",
    answer: "Deep glacial lakes moderate temperature extremes and extend growing season. Steep slopes provide drainage and sun exposure. Shale and limestone soils impart mineral character. Cool climate preserves acidity and allows slow ripening. Lake effect reduces frost risk and creates ideal conditions for late harvest wines. Results in Rieslings with bright acidity, citrus flavors, and distinctive minerality comparable to German styles.",
    marks: 8,
    module: "New York State Viticulture"
  },

  {
    id: 83,
    title: "Côtes du Rhône Production Regulations",
    question: "Describe the production regulations for Côtes du Rhône AOC and explain their quality impact.",
    answer: "Minimum 40% Grenache and/or Syrah in blends. Maximum 30% white grapes allowed in red blends. Yield limits 52 hl/ha for reds, 58 hl/ha for whites. Minimum alcohol 11% for reds, 10.5% for whites. Traditional grape varieties emphasized. Regulations ensure typicity while allowing flexibility for different terroirs across large region. Quality control maintains reputation of this entry-level Rhône appellation.",
    marks: 8,
    module: "French AOC Regulations"
  },

  {
    id: 84,
    title: "Mendoza Altitude Viticulture",
    question: "Explain how altitude affects viticulture in Mendoza and the resulting wine styles.",
    answer: "Vineyards range from 600m to over 1,500m elevation. Higher altitude provides cooler temperatures despite desert latitude. Intense UV radiation at altitude thickens grape skins and concentrates color compounds. Large diurnal temperature variation preserves acidity. Different varieties suited to different elevations - Malbec excels at 1,000-1,400m. High altitude wines show greater freshness, structure, and aging potential.",
    marks: 8,
    module: "Argentine High Altitude Viticulture"
  },

  {
    id: 85,
    title: "Stellenbosch Wine Terroir",
    question: "Describe the diverse terroir of Stellenbosch and its impact on wine styles.",
    answer: "Complex geology with granite, sandstone, and shale soils. Mountain slopes provide elevation and cooling. Mediterranean climate with wet winters, dry summers. Diverse mesoclimates from coastal influence to inland heat. Multiple ward system recognizes terroir differences. Suitable for Bordeaux varieties (Cabernet Sauvignon, Merlot) and traditional varieties (Chenin Blanc). Quality varies significantly with site selection and elevation.",
    marks: 9,
    module: "South African Wine Regions"
  },

  {
    id: 86,
    title: "Champagne Blending Philosophy",
    question: "Explain the blending philosophy in Champagne production and the role of reserve wines.",
    answer: "Blending creates house style consistency across vintages. Combines different grape varieties (Chardonnay, Pinot Noir, Pinot Meunier), villages, and vintages. Reserve wines from previous harvests provide continuity and complexity. Chef de cave role crucial in maintaining style. Non-vintage represents 80%+ of production. Enables quality in difficult years and expression of house character rather than single vintage characteristics.",
    marks: 8,
    module: "Champagne Blending Techniques"
  },

  {
    id: 87,
    title: "Central Otago Pinot Noir Style",
    question: "Describe the distinctive characteristics of Central Otago Pinot Noir and the factors that create this style.",
    answer: "Intense fruit concentration with dark cherry and plum flavors. Firm structure with good tannins and acidity. Often displays spice and herb notes. Continental climate with warm days and cool nights. Schist soils provide mineral backbone. High UV radiation at latitude and altitude concentrates flavors. Relatively young wine region allows modern techniques and site selection.",
    marks: 7,
    module: "New Zealand Regional Styles"
  },

  {
    id: 88,
    title: "Rioja Oak Aging Traditions",
    question: "Explain the traditional oak aging practices in Rioja and their evolution in modern production.",
    answer: {
      "Traditional practices": "Long aging in large American oak barrels (225L). Imparts coconut, vanilla, dill flavors. Multiple rackings during aging. Emphasis on bottle aging after oak aging.",
      "Modern evolution": "Some producers use French oak for elegance. Shorter oak aging, more fruit-focused styles. Concrete and stainless steel alternatives. Balance between tradition and innovation.",
      "Classifications": "Still based on aging requirements but allow more flexibility in oak types and sizes"
    },
    marks: 8,
    module: "Spanish Oak Aging Evolution"
  },

  {
    id: 89,
    title: "Chablis Terroir Expression",
    question: "Explain how the terroir of Chablis creates its distinctive mineral character in Chardonnay.",
    answer: "Kimmeridgian limestone soils rich in marine fossils. Cool continental climate preserves acidity and restrains ripeness. Minimal oak aging preserves pure fruit and mineral expression. Frost risk necessitates careful site selection. Ancient seabed geology contributes distinctive minerality often described as 'oyster shell' or 'wet stones'. Results in lean, precise Chardonnay unlike any other region.",
    marks: 8,
    module: "Chablis Terroir"
  },

  {
    id: 90,
    title: "Paso Robles AVA Diversity",
    question: "Describe the diversity within Paso Robles AVA and the resulting wine styles.",
    answer: "Large AVA with varied elevations (700-2,400 feet) and climates. Eastside warmer, suitable for Zinfandel, Petite Sirah, Rhône varieties. Westside cooler with marine influence, better for Pinot Noir, Chardonnay. Diverse soils from limestone to volcanic. Recent sub-AVA recognition (Adelaida District, Willow Creek District) acknowledges differences. Allows wide range of varieties and styles within single AVA.",
    marks: 9,
    module: "California AVA Complexity"
  },

  {
    id: 91,
    title: "Sancerre vs Pouilly-Fumé Terroir",
    question: "Compare the terroir differences between Sancerre and Pouilly-Fumé and their impact on Sauvignon Blanc style.",
    answer: {
      "Sancerre": "Diverse soils - limestone (caillottes), clay-limestone (terres blanches), flint (silex). Generally more structured, mineral-driven wines. Multiple soil types create style variation.",
      "Pouilly-Fumé": "Predominantly flint/silex soils create distinctive 'gunflint' smoky character. More homogeneous soil type leads to consistent style. Often more aromatic intensity.",
      "Both": "Loire River influence, continental climate, but subtle terroir differences create distinct regional characters despite same grape variety"
    },
    marks: 9,
    module: "Loire Valley Terroir Comparison"
  },

  {
    id: 92,
    title: "Brunello di Montalcino Regulations",
    question: "Describe the production regulations for Brunello di Montalcino and their quality impact.",
    answer: "100% Sangiovese (Brunello clone) required. Minimum 5 years aging (2 in oak, 4 months in bottle). Riserva requires 6 years total aging. Yield limits 52 hl/ha. Hand harvesting mandatory. Cannot be released until January 1st, 5 years after harvest. Strict regulations ensure concentration, complexity, and aging potential. Represents pinnacle of Sangiovese expression.",
    marks: 8,
    module: "Italian Premium Wine Regulations"
  },

  {
    id: 93,
    title: "Marlborough Sauvignon Blanc Success",
    question: "Explain the factors that led to Marlborough's success with Sauvignon Blanc and its global impact.",
    answer: "Cool climate preserves intense aromatics and high acidity. Diverse soils from river terraces create complexity. Long sunshine hours with cool nights. Modern winemaking preserves fruit character. Distinctive regional style (tropical fruit, herbs, minerality) different from Loire. Marketing success created new benchmark for variety. Influenced Sauvignon Blanc production worldwide.",
    marks: 8,
    module: "New Zealand Wine Industry Development"
  },

  {
    id: 94,
    title: "Port Wine Aging Systems",
    question: "Compare the aging systems used for different styles of Port wine.",
    answer: {
      "Ruby Port aging": "Large concrete or stainless steel vats, minimal oxidation, preserves fruit character, shorter aging periods",
      "Tawny Port aging": "Small oak barrels with controlled oxidation, develops nutty and caramel flavors, longer aging periods, color fades to tawny",
      "Vintage Port aging": "Brief barrel aging (2 years) then bottle aging for decades, reductive environment preserves color and fruit intensity",
      "Colheita Port": "Single vintage tawny aged minimum 7 years in barrel before bottling"
    },
    marks: 10,
    module: "Port Aging Classification"
  },

  {
    id: 95,
    title: "Australian GI System",
    question: "Explain the Australian Geographical Indications (GI) system and its approach to wine classification.",
    answer: "Hierarchical system: Zones → Regions → Sub-regions. Based on homogeneous grape-growing attributes. Less restrictive than European systems - focuses on origin rather than grape varieties or winemaking methods. Allows innovation while indicating source. Major zones include South Eastern Australia (multi-state blend permitted). System balances tradition with New World flexibility and market-driven approach.",
    marks: 8,
    module: "Australian Wine Classification"
  },

  {
    id: 96,
    title: "Grüner Veltliner Characteristics",
    question: "Describe the characteristic flavors and styles of Austrian Grüner Veltliner and the factors that influence them.",
    answer: "Characteristic white pepper spice, citrus, green apple, and mineral flavors. Light style: crisp, herbaceous, early drinking. Premium style: more complex with stone fruit, honey notes, aging potential. Terroir influence significant - loess soils create richness, primary rock provides minerality. Cool climate preserves acidity. Variable yields and harvest timing create style range from light to concentrated.",
    marks: 8,
    module: "Austrian Wine Styles"
  },

  {
    id: 97,
    title: "Chilean Terroir Diversity",
    question: "Explain the diverse terroir of Chilean wine regions and their suitability for different grape varieties.",
    answer: "Aconcagua Valley: warm, suitable for Cabernet Sauvignon. Casablanca Valley: cool, coastal influence, ideal for Chardonnay and Pinot Noir. Maipo Valley: moderate climate, traditional Cabernet Sauvignon region. Rapel Valley: warm inland valleys, good for reds. Coastal influence decreases with distance from Pacific. Andes altitude provides cooling. Desert north to temperate south creates diverse options.",
    marks: 10,
    module: "Chilean Regional Diversity"
  },

  {
    id: 98,
    title: "Burgundy Premier Cru Concept",
    question: "Explain the Premier Cru classification system in Burgundy and how it reflects terroir differences.",
    answer: "Premier Cru vineyards represent superior sites within village appellations. Over 600 Premier Cru vineyards across Burgundy. Each has individual name reflecting specific terroir characteristics. Quality between village and Grand Cru levels. Slope position, exposure, soil composition determine classification. Historical performance over centuries validates classifications. Allows terroir expression at more accessible price point than Grand Cru.",
    marks: 8,
    module: "Burgundy Classification Details"
  },

  {
    id: 99,
    title: "Modern Winemaking Technology Impact",
    question: "Discuss how modern winemaking technology has influenced wine quality and style development.",
    answer: "Temperature control enables precise fermentation management. Stainless steel preserves fruit character and enables reductive winemaking. Pneumatic presses provide gentle extraction. Micro-oxygenation allows tannin management. Reverse osmosis enables alcohol adjustment. Technology enables consistency and allows expression of terroir without technical faults. Debate continues over balance between technology and tradition.",
    marks: 9,
    module: "Winemaking Technology Evolution"
  },

  {
    id: 100,
    title: "Global Climate Change Adaptation",
    question: "Analyze how wine regions worldwide are adapting to climate change challenges.",
    answer: "Vineyard adaptations: higher altitude plantings, changing grape varieties, improved canopy management, earlier harvest timing. Winemaking adaptations: acidification, alcohol reduction techniques, different fermentation approaches. Regional shifts: traditional cool regions warming, new regions becoming viable. Long-term strategies: research into heat-resistant varieties, changed viticultural practices, potential regional relocations. Industry working on both mitigation and adaptation strategies.",
    marks: 10,
    module: "Climate Change and Wine Industry"
  }
];