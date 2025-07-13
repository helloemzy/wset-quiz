export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  module: string;
}

// Import the new WSET L3 practice questions
import { wsetL3PracticeQuestions } from './wset_l3_practice_questions';

export const questions: Question[] = [
  {
    id: 1,
    question: "What are the three main components of the WSET Systematic Approach to Tasting Wine?",
    options: [
      "Color, Aroma, Taste",
      "Appearance, Nose, and Palate",
      "Visual, Olfactory, Gustatory",
      "Primary, Secondary, Tertiary"
    ],
    correctAnswer: 1,
    explanation: "The WSET Systematic Approach consists of Appearance, Nose, and Palate (including conclusions about quality and readiness for drinking).",
    module: "Module 1: Systematic Approach"
  },
  {
    id: 2,
    question: "What intensity levels are used to describe wine appearance?",
    options: [
      "Light, Medium, Heavy",
      "Weak, Moderate, Strong",
      "Pale, Medium, Deep",
      "Low, Average, High"
    ],
    correctAnswer: 2,
    explanation: "Wine color intensity is described as Pale, Medium, or Deep.",
    module: "Module 1: Systematic Approach"
  },
  {
    id: 3,
    question: "What are primary aromas in wine?",
    options: [
      "Aromas from oak aging",
      "Aromas that come from the grape variety itself",
      "Aromas from bottle aging",
      "Aromas from fermentation"
    ],
    correctAnswer: 1,
    explanation: "Primary aromas come from the grape variety itself, including fruit, floral, and herbal characteristics.",
    module: "Module 1: Systematic Approach"
  },
  {
    id: 4,
    question: "What is the ideal temperature range for vine growth?",
    options: [
      "10-15°C (50-59°F)",
      "16-21°C (61-70°F)",
      "22-27°C (72-81°F)",
      "28-33°C (82-91°F)"
    ],
    correctAnswer: 1,
    explanation: "The ideal temperature range for vine growth is 16-21°C (61-70°F) average during the growing season.",
    module: "Module 2: Vineyard Factors"
  },
  {
    id: 5,
    question: "What is veraison?",
    options: [
      "The pruning of vines",
      "The onset of ripening when grapes change color",
      "The harvest period",
      "The dormant season for vines"
    ],
    correctAnswer: 1,
    explanation: "Veraison is the onset of ripening when grapes change color and begin to soften.",
    module: "Module 2: Vineyard Factors"
  },
  {
    id: 6,
    question: "What is malolactic fermentation?",
    options: [
      "Primary alcohol fermentation",
      "A secondary fermentation converting malic acid to lactic acid",
      "Fermentation in oak barrels",
      "Cold fermentation process"
    ],
    correctAnswer: 1,
    explanation: "Malolactic fermentation is a secondary fermentation where malic acid is converted to lactic acid by bacteria, softening the wine's acidity.",
    module: "Module 3: Winery Factors"
  },
  {
    id: 7,
    question: "What is bâtonnage?",
    options: [
      "Crushing grapes before fermentation",
      "The stirring of lees in wine",
      "Filtering wine before bottling",
      "Adding sulfur to wine"
    ],
    correctAnswer: 1,
    explanation: "Bâtonnage is the stirring of lees (dead yeast cells) in wine to add texture and flavor complexity.",
    module: "Module 3: Winery Factors"
  },
  {
    id: 8,
    question: "What are the four noble grape varieties of Alsace?",
    options: [
      "Chardonnay, Sauvignon Blanc, Riesling, Pinot Gris",
      "Riesling, Gewürztraminer, Pinot Gris, Muscat",
      "Gewürztraminer, Sylvaner, Pinot Blanc, Riesling",
      "Muscat, Chardonnay, Gewürztraminer, Pinot Noir"
    ],
    correctAnswer: 1,
    explanation: "The four noble grape varieties of Alsace are Riesling, Gewürztraminer, Pinot Gris, and Muscat.",
    module: "Module 4: Alsace, Germany, Austria, Tokaj"
  },
  {
    id: 9,
    question: "What is the main grape variety used in Tokaji Aszú?",
    options: [
      "Riesling",
      "Furmint",
      "Gewürztraminer",
      "Pinot Gris"
    ],
    correctAnswer: 1,
    explanation: "Furmint is the main grape variety used in Tokaji Aszú, typically blended with Hárslevelű.",
    module: "Module 4: Alsace, Germany, Austria, Tokaj"
  },
  {
    id: 10,
    question: "What is the primary grape variety for white Burgundy?",
    options: [
      "Sauvignon Blanc",
      "Chardonnay",
      "Pinot Gris",
      "Riesling"
    ],
    correctAnswer: 1,
    explanation: "Chardonnay is the primary grape variety for white Burgundy.",
    module: "Module 5: Burgundy, Loire, Bordeaux Whites"
  },
  {
    id: 11,
    question: "What grape variety is used for Pouilly-Fumé?",
    options: [
      "Chardonnay",
      "Sauvignon Blanc",
      "Chenin Blanc",
      "Muscadet"
    ],
    correctAnswer: 1,
    explanation: "Sauvignon Blanc is the grape variety used for Pouilly-Fumé.",
    module: "Module 5: Burgundy, Loire, Bordeaux Whites"
  },
  {
    id: 12,
    question: "What are the main grape varieties in Left Bank Bordeaux?",
    options: [
      "Merlot, Cabernet Franc, Malbec",
      "Cabernet Sauvignon, Merlot, Cabernet Franc",
      "Pinot Noir, Gamay, Syrah",
      "Tempranillo, Garnacha, Graciano"
    ],
    correctAnswer: 1,
    explanation: "Left Bank Bordeaux uses Cabernet Sauvignon (dominant), Merlot, Cabernet Franc, Petit Verdot, and Malbec.",
    module: "Module 6: Bordeaux Reds"
  },
  {
    id: 13,
    question: "What is the primary grape variety in Cahors?",
    options: [
      "Cabernet Sauvignon",
      "Malbec",
      "Merlot",
      "Tannat"
    ],
    correctAnswer: 1,
    explanation: "Malbec is the primary grape variety in Cahors (minimum 70%, locally called Côt).",
    module: "Module 6: Bordeaux Reds"
  },
  {
    id: 14,
    question: "What is the only red grape variety permitted in red Burgundy?",
    options: [
      "Cabernet Sauvignon",
      "Pinot Noir",
      "Syrah",
      "Gamay"
    ],
    correctAnswer: 1,
    explanation: "Pinot Noir is the only red grape variety permitted in red Burgundy.",
    module: "Module 7: Burgundy and Rhône Reds"
  },
  {
    id: 15,
    question: "What is the main grape variety in Northern Rhône red wines?",
    options: [
      "Grenache",
      "Syrah",
      "Mourvèdre",
      "Cinsault"
    ],
    correctAnswer: 1,
    explanation: "Syrah is the main grape variety in Northern Rhône red wines (100% in most appellations).",
    module: "Module 7: Burgundy and Rhône Reds"
  },
  {
    id: 16,
    question: "How many grape varieties are permitted in Châteauneuf-du-Pape?",
    options: [
      "13",
      "18",
      "15",
      "20"
    ],
    correctAnswer: 1,
    explanation: "18 grape varieties are permitted in Châteauneuf-du-Pape (13 originally, with 5 additional ones recently approved).",
    module: "Module 8: Southern Rhône and Spain"
  },
  {
    id: 17,
    question: "What does 'Crianza' mean in Spanish wine law?",
    options: [
      "Young wine with no aging",
      "Red wine aged for 2 years minimum, with at least 6 months in oak",
      "Wine aged for 5 years",
      "Reserve quality wine"
    ],
    correctAnswer: 1,
    explanation: "Crianza means red wine aged for 2 years minimum, with at least 6 months in oak.",
    module: "Module 8: Southern Rhône and Spain"
  },
  {
    id: 18,
    question: "What is the main grape variety in Barolo and Barbaresco?",
    options: [
      "Sangiovese",
      "Nebbiolo",
      "Barbera",
      "Dolcetto"
    ],
    correctAnswer: 1,
    explanation: "Nebbiolo is the main grape variety in both Barolo and Barbaresco.",
    module: "Module 9: Northern Spain and Italy"
  },
  {
    id: 19,
    question: "What is the minimum aging requirement for Rioja Gran Reserva?",
    options: [
      "3 years total",
      "5 years total, with at least 2 years in oak",
      "7 years total",
      "2 years in oak only"
    ],
    correctAnswer: 1,
    explanation: "Rioja Gran Reserva requires 5 years total aging, with at least 2 years in oak and 3 years in bottle.",
    module: "Module 9: Northern Spain and Italy"
  },
  {
    id: 20,
    question: "What is the main grape variety in Chianti Classico?",
    options: [
      "Nebbiolo",
      "Sangiovese",
      "Barbera",
      "Montepulciano"
    ],
    correctAnswer: 1,
    explanation: "Sangiovese is the main grape variety in Chianti Classico (minimum 80%).",
    module: "Module 10: Central Italy"
  },
  {
    id: 21,
    question: "What is the main grape variety in Brunello di Montalcino?",
    options: [
      "Sangiovese blend",
      "100% Sangiovese",
      "Sangiovese and Cabernet",
      "Nebbiolo"
    ],
    correctAnswer: 1,
    explanation: "Brunello di Montalcino must be 100% Sangiovese (locally called Brunello).",
    module: "Module 10: Central Italy"
  },
  {
    id: 22,
    question: "What is the most planted red grape variety in Australia?",
    options: [
      "Cabernet Sauvignon",
      "Shiraz",
      "Pinot Noir",
      "Merlot"
    ],
    correctAnswer: 1,
    explanation: "Shiraz (Syrah) is the most planted red grape variety in Australia.",
    module: "Module 11: New World Reds"
  },
  {
    id: 23,
    question: "What is the signature red wine region of New Zealand?",
    options: [
      "Marlborough for Pinot Noir",
      "Central Otago for Pinot Noir",
      "Hawke's Bay for Cabernet",
      "Canterbury for Syrah"
    ],
    correctAnswer: 1,
    explanation: "Central Otago is New Zealand's signature region for Pinot Noir.",
    module: "Module 11: New World Reds"
  },
  {
    id: 24,
    question: "What made New Zealand Marlborough Sauvignon Blanc famous?",
    options: [
      "Subtle mineral character",
      "Intense aromatics of passion fruit, gooseberry, and jalapeño",
      "Rich, oaky style",
      "Sweet, dessert-like character"
    ],
    correctAnswer: 1,
    explanation: "Marlborough Sauvignon Blanc became famous for its intense aromatics of passion fruit, gooseberry, and jalapeño, with high acidity.",
    module: "Module 12: New World Whites"
  },
  {
    id: 25,
    question: "What is the signature grape of Argentina?",
    options: [
      "Cabernet Sauvignon",
      "Malbec",
      "Carmenère",
      "Tempranillo"
    ],
    correctAnswer: 1,
    explanation: "Malbec is Argentina's signature grape, particularly from Mendoza.",
    module: "Module 13: Regional Specialties"
  },
  {
    id: 26,
    question: "What are the grape varieties in traditional Champagne?",
    options: [
      "Chardonnay, Sauvignon Blanc, Pinot Noir",
      "Chardonnay, Pinot Noir, and Pinot Meunier",
      "Chardonnay, Riesling, Pinot Noir",
      "Chenin Blanc, Pinot Noir, Chardonnay"
    ],
    correctAnswer: 1,
    explanation: "Traditional Champagne uses Chardonnay, Pinot Noir, and Pinot Meunier (plus 4 other permitted varieties).",
    module: "Module 14: Sparkling Wines"
  },
  {
    id: 27,
    question: "What is the minimum aging on lees for non-vintage Champagne?",
    options: [
      "6 months",
      "12 months",
      "18 months",
      "24 months"
    ],
    correctAnswer: 1,
    explanation: "Non-vintage Champagne requires minimum 15 months on lees (12 months for secondary fermentation) before release.",
    module: "Module 14: Sparkling Wines"
  },
  {
    id: 28,
    question: "What are the main styles of Sherry?",
    options: [
      "Dry, Medium, Sweet",
      "Fino, Manzanilla, Amontillado, Oloroso",
      "Young, Aged, Vintage",
      "Light, Medium, Full"
    ],
    correctAnswer: 1,
    explanation: "The main Sherry styles are Fino, Manzanilla, Amontillado, Oloroso, Palo Cortado, and Pedro Ximénez.",
    module: "Module 15: Fortified Wines"
  },
  {
    id: 29,
    question: "What is flor?",
    options: [
      "A type of grape disease",
      "A layer of yeast that forms on certain Sherries",
      "A winemaking technique",
      "A type of oak barrel"
    ],
    correctAnswer: 1,
    explanation: "Flor is a layer of yeast that forms on Fino and Manzanilla Sherries, protecting them from oxidation.",
    module: "Module 15: Fortified Wines"
  },
  {
    id: 30,
    question: "What is the difference between Old World and New World wines?",
    options: [
      "Age of the wine",
      "Old World is terroir-driven, New World is fruit-forward",
      "Alcohol content",
      "Production methods"
    ],
    correctAnswer: 1,
    explanation: "Old World (Europe) tends toward terroir-driven, food-friendly styles; New World emphasizes fruit-forward, variety-driven styles.",
    module: "General Wine Knowledge"
  },
  {
    id: 31,
    question: "What is the ideal serving temperature for full-bodied red wine?",
    options: [
      "10-12°C (50-54°F)",
      "15-18°C (59-64°F)",
      "20-22°C (68-72°F)",
      "8-10°C (46-50°F)"
    ],
    correctAnswer: 1,
    explanation: "Full-bodied red wines are best served at 15-18°C (59-64°F).",
    module: "Wine Service"
  },
  {
    id: 32,
    question: "What causes cork taint?",
    options: [
      "Old cork",
      "TCA (2,4,6-trichloroanisole)",
      "Poor storage",
      "Oxidation"
    ],
    correctAnswer: 1,
    explanation: "Cork taint is caused by TCA (2,4,6-trichloroanisole), which gives wine musty, wet cardboard aromas.",
    module: "Wine Faults"
  },
  {
    id: 33,
    question: "What is green harvesting?",
    options: [
      "Harvesting unripe grapes",
      "Removing unripe grape bunches to concentrate flavors",
      "Using green machinery",
      "Harvesting early in the morning"
    ],
    correctAnswer: 1,
    explanation: "Green harvesting involves removing unripe grape bunches during veraison to concentrate flavors in remaining grapes.",
    module: "Viticulture"
  },
  {
    id: 34,
    question: "What is carbonic maceration?",
    options: [
      "Fermentation with added CO2",
      "Whole bunch fermentation in CO2 atmosphere",
      "Cold fermentation",
      "Extended maceration"
    ],
    correctAnswer: 1,
    explanation: "Carbonic maceration is whole bunch fermentation in CO2, creating fruity wines with low tannins (used in Beaujolais).",
    module: "Winemaking Techniques"
  },
  {
    id: 35,
    question: "What is the typical pressure in a Champagne bottle?",
    options: [
      "3 atmospheres",
      "6 atmospheres",
      "9 atmospheres",
      "12 atmospheres"
    ],
    correctAnswer: 1,
    explanation: "A Champagne bottle typically contains approximately 6 atmospheres of pressure (about 90 psi).",
    module: "Sparkling Wine Production"
  },
  {
    id: 36,
    question: "What does 'GG' stand for on German wine labels?",
    options: [
      "Great German",
      "Grosses Gewächs",
      "Grand German",
      "Grosse Garage"
    ],
    correctAnswer: 1,
    explanation: "GG stands for Grosses Gewächs - a dry wine from a Grosse Lage (Grand Cru) vineyard.",
    module: "German Wine Classification"
  },
  {
    id: 37,
    question: "What are the four sub-regions of the Loire Valley?",
    options: [
      "Upper, Middle, Lower, Central",
      "Pays Nantais, Anjou-Saumur, Touraine, Central Vineyards",
      "East, West, North, South",
      "Atlantic, Continental, Mediterranean, Mountain"
    ],
    correctAnswer: 1,
    explanation: "The Loire Valley has four sub-regions: Pays Nantais, Anjou-Saumur, Touraine, and Central Vineyards.",
    module: "Loire Valley"
  },
  {
    id: 38,
    question: "Which Northern Rhône appellation can add up to 20% Viognier to Syrah?",
    options: [
      "Hermitage",
      "Côte-Rôtie",
      "Cornas",
      "Saint-Joseph"
    ],
    correctAnswer: 1,
    explanation: "Côte-Rôtie can add up to 20% Viognier to Syrah.",
    module: "Northern Rhône"
  },
  {
    id: 39,
    question: "What is the main grape variety in Bandol rouge?",
    options: [
      "Grenache",
      "Mourvèdre",
      "Syrah",
      "Cinsault"
    ],
    correctAnswer: 1,
    explanation: "Mourvèdre is the main grape variety in Bandol rouge (minimum 50%).",
    module: "Southern France"
  },
  {
    id: 40,
    question: "What does 'Amarone' mean?",
    options: [
      "Sweet wine",
      "A dry wine made from dried grapes",
      "Sparkling wine",
      "Young wine"
    ],
    correctAnswer: 1,
    explanation: "Amarone is a dry wine made from dried grapes in Valpolicella (literally means 'bitter' referring to the dry style).",
    module: "Italian Wine Styles"
  },
  {
    id: 41,
    question: "What is Assyrtiko?",
    options: [
      "A Greek wine region",
      "Greece's most important white grape variety",
      "A winemaking technique",
      "A type of soil"
    ],
    correctAnswer: 1,
    explanation: "Assyrtiko is Greece's most important white grape variety, particularly famous from Santorini.",
    module: "Greek Wines"
  },
  {
    id: 42,
    question: "What is the cooling influence in California's coastal regions?",
    options: [
      "Mountain winds",
      "The California Current and Pacific fog",
      "Altitude",
      "Underground springs"
    ],
    correctAnswer: 1,
    explanation: "The California Current and fog from the Pacific Ocean provide cooling influence in California's coastal regions.",
    module: "California Climate"
  },
  {
    id: 43,
    question: "What is Carmenère's significance in Chile?",
    options: [
      "It's a new hybrid grape",
      "Once thought extinct, rediscovered in Chile",
      "It's the oldest grape variety",
      "It only grows in Chile"
    ],
    correctAnswer: 1,
    explanation: "Carmenère was once thought extinct but was rediscovered in Chile where it had been mistaken for Merlot.",
    module: "Chilean Wine History"
  },
  {
    id: 44,
    question: "What is Pinotage?",
    options: [
      "A French grape variety",
      "A South African crossing of Pinot Noir and Cinsault",
      "A winemaking technique",
      "A wine region"
    ],
    correctAnswer: 1,
    explanation: "Pinotage is a South African crossing of Pinot Noir and Cinsault, created in 1925.",
    module: "South African Wines"
  },
  {
    id: 45,
    question: "What grape varieties are used in Cava?",
    options: [
      "Chardonnay, Pinot Noir, Pinot Meunier",
      "Macabeo, Xarel-lo, and Parellada",
      "Tempranillo, Garnacha, Graciano",
      "Palomino, Pedro Ximénez, Moscatel"
    ],
    correctAnswer: 1,
    explanation: "Traditional Cava uses Macabeo, Xarel-lo, and Parellada, with Chardonnay and Pinot Noir also permitted.",
    module: "Spanish Sparkling Wine"
  },
  {
    id: 46,
    question: "What is the solera system?",
    options: [
      "A pruning method",
      "A fractional blending system used in Sherry",
      "A type of fermentation",
      "A classification system"
    ],
    correctAnswer: 1,
    explanation: "The solera system is a fractional blending system used in Sherry production to ensure consistency across vintages.",
    module: "Sherry Production"
  },
  {
    id: 47,
    question: "What is the difference between Ruby and Tawny Port?",
    options: [
      "Different grape varieties",
      "Ruby aged in large vats, Tawny in small barrels",
      "Different alcohol levels",
      "Different regions"
    ],
    correctAnswer: 1,
    explanation: "Ruby Port is aged in large vats to preserve fruit; Tawny Port is aged in small barrels for oxidative character.",
    module: "Port Styles"
  },
  {
    id: 48,
    question: "What percentage of alcohol classifies a wine as fortified?",
    options: [
      "12-14% ABV",
      "15-22% ABV",
      "23-30% ABV",
      "Above 30% ABV"
    ],
    correctAnswer: 1,
    explanation: "Fortified wines typically contain 15-22% ABV, achieved by adding grape spirit.",
    module: "Fortified Wine Classification"
  },
  {
    id: 49,
    question: "What is the purpose of decanting?",
    options: [
      "To cool the wine",
      "To separate wine from sediment and aerate",
      "To add flavor",
      "To preserve the wine"
    ],
    correctAnswer: 1,
    explanation: "Decanting separates wine from sediment and/or aerates the wine to release aromas.",
    module: "Wine Service"
  },
  {
    id: 50,
    question: "What is en primeur?",
    options: [
      "First press juice",
      "A method of buying wine futures",
      "Premium quality wine",
      "Young wine"
    ],
    correctAnswer: 1,
    explanation: "En primeur is a method of buying wine futures, particularly in Bordeaux, where wine is sold while still in barrel.",
    module: "Wine Trading"
  },
  // Questions 51-100
  {
    id: 51,
    question: "What is the difference between volatile acidity and fixed acidity?",
    options: [
      "Different levels of intensity",
      "Volatile acidity can evaporate, fixed acidity remains in solution",
      "Different pH levels",
      "Different grape sources"
    ],
    correctAnswer: 1,
    explanation: "Volatile acidity can evaporate (mainly acetic acid); fixed acidity remains in solution (tartaric, malic, lactic).",
    module: "Wine Chemistry"
  },
  {
    id: 52,
    question: "What causes reduction in wine?",
    options: [
      "Too much oxygen exposure",
      "Lack of oxygen during winemaking",
      "High alcohol content",
      "Low pH levels"
    ],
    correctAnswer: 1,
    explanation: "Reduction is caused by lack of oxygen during winemaking, creating sulfur compounds with struck match or rotten egg aromas.",
    module: "Wine Faults"
  },
  {
    id: 53,
    question: "What is the maximum yield for Châteauneuf-du-Pape?",
    options: [
      "50 hectoliters per hectare",
      "35 hectoliters per hectare",
      "40 hectoliters per hectare",
      "45 hectoliters per hectare"
    ],
    correctAnswer: 1,
    explanation: "Châteauneuf-du-Pape has a maximum yield of 35 hectoliters per hectare, one of the lowest in France.",
    module: "French Wine Law"
  },
  {
    id: 54,
    question: "What distinguishes Vino Nobile di Montepulciano from Brunello di Montalcino?",
    options: [
      "Different grape varieties entirely",
      "Both use Sangiovese; Vino Nobile requires minimum 70% and allows blending",
      "Different aging requirements only",
      "Different regions only"
    ],
    correctAnswer: 1,
    explanation: "Both use Sangiovese; Vino Nobile requires minimum 70% and allows blending, while Brunello is 100% Sangiovese.",
    module: "Italian Wine Classification"
  },
  {
    id: 55,
    question: "What is the minimum vine age for 'Vieilles Vignes' in France?",
    options: [
      "25 years",
      "No legal definition exists",
      "35 years",
      "50 years"
    ],
    correctAnswer: 1,
    explanation: "No legal definition exists for 'Vieilles Vignes' in France; typically producers use it for vines over 35-40 years old.",
    module: "French Wine Terms"
  },
  {
    id: 56,
    question: "What is the main difference between Sancerre and Pouilly-Fumé?",
    options: [
      "Different grape varieties",
      "Both use Sauvignon Blanc from opposite banks of the Loire",
      "Different winemaking methods",
      "Different climate zones"
    ],
    correctAnswer: 1,
    explanation: "Both use Sauvignon Blanc; they're from opposite banks of the Loire with slightly different soil types.",
    module: "Loire Valley"
  },
  {
    id: 57,
    question: "What percentage of Champagne production is Rosé?",
    options: [
      "5%",
      "Approximately 10%",
      "15%",
      "20%"
    ],
    correctAnswer: 1,
    explanation: "Approximately 10% of total Champagne production is Rosé.",
    module: "Champagne Production"
  },
  {
    id: 58,
    question: "What is the relationship between pH and sulfur dioxide effectiveness?",
    options: [
      "Higher pH makes SO2 more effective",
      "Lower pH makes SO2 more effective",
      "pH has no effect on SO2",
      "Only temperature affects SO2"
    ],
    correctAnswer: 1,
    explanation: "Lower pH (higher acidity) makes SO2 more effective as an antimicrobial agent.",
    module: "Winemaking Chemistry"
  },
  {
    id: 59,
    question: "What is micro-oxygenation?",
    options: [
      "Completely removing oxygen from wine",
      "Controlled addition of oxygen during winemaking",
      "Natural oxygen absorption",
      "Filtering oxygen out of wine"
    ],
    correctAnswer: 1,
    explanation: "Micro-oxygenation is the controlled addition of oxygen during winemaking to soften tannins and stabilize color.",
    module: "Modern Winemaking"
  },
  {
    id: 60,
    question: "What is the aging requirement for Barolo?",
    options: [
      "24 months minimum",
      "38 months minimum, with at least 18 months in oak",
      "48 months minimum",
      "60 months minimum"
    ],
    correctAnswer: 1,
    explanation: "Barolo requires minimum 38 months aging, with at least 18 months in oak.",
    module: "Italian Wine Law"
  },
  {
    id: 61,
    question: "What is the signature wine of Hunter Valley, Australia?",
    options: [
      "Chardonnay",
      "Semillon",
      "Shiraz",
      "Riesling"
    ],
    correctAnswer: 1,
    explanation: "Hunter Valley Semillon is the signature wine, developing honeyed, toasty complexity with age despite low alcohol.",
    module: "Australian Regional Specialties"
  },
  {
    id: 62,
    question: "What are the noble grape varieties for Madeira?",
    options: [
      "Chardonnay, Sauvignon Blanc, Riesling, Gewürztraminer",
      "Sercial, Verdelho, Bual, and Malmsey",
      "Palomino, Pedro Ximénez, Moscatel, Albariño",
      "Touriga Nacional, Touriga Franca, Tinta Roriz, Tinta Cão"
    ],
    correctAnswer: 1,
    explanation: "The noble grape varieties for Madeira are Sercial, Verdelho, Bual, and Malmsey (Malvasia).",
    module: "Fortified Wines"
  },
  {
    id: 63,
    question: "What is the altitude range of vineyards in Mendoza's Uco Valley?",
    options: [
      "500-800 meters",
      "900-1,500 meters",
      "1,600-2,000 meters",
      "200-600 meters"
    ],
    correctAnswer: 1,
    explanation: "Mendoza's Uco Valley vineyards are planted at 900-1,500 meters above sea level.",
    module: "Argentine Wine Regions"
  },
  {
    id: 64,
    question: "What is the difference between Brut Nature and Brut?",
    options: [
      "Different grape varieties",
      "Brut Nature has 0-3 g/L residual sugar, Brut has up to 12 g/L",
      "Different production methods",
      "Different aging requirements"
    ],
    correctAnswer: 1,
    explanation: "Brut Nature has 0-3 g/L residual sugar with no dosage; Brut has up to 12 g/L residual sugar.",
    module: "Sparkling Wine Sweetness"
  },
  {
    id: 65,
    question: "What is the climate characteristic of Casablanca Valley in Chile?",
    options: [
      "Hot continental climate",
      "Cool climate influenced by the Pacific Ocean",
      "Mediterranean mountain climate",
      "Desert climate"
    ],
    correctAnswer: 1,
    explanation: "Casablanca Valley has a cool climate influenced by the Pacific Ocean, ideal for Sauvignon Blanc and Chardonnay.",
    module: "Chilean Wine Regions"
  },
  {
    id: 66,
    question: "What distinguishes Oregon Pinot Gris from Alsace?",
    options: [
      "Different grape variety",
      "Oregon style is typically drier and more crisp",
      "Higher alcohol content",
      "Different harvest timing"
    ],
    correctAnswer: 1,
    explanation: "Oregon Pinot Gris is typically drier, lighter, and more crisp than the richer Alsace versions.",
    module: "New World vs Old World"
  },
  {
    id: 67,
    question: "What is the signature white variety of South Africa?",
    options: [
      "Sauvignon Blanc",
      "Chenin Blanc",
      "Chardonnay",
      "Riesling"
    ],
    correctAnswer: 1,
    explanation: "Chenin Blanc is South Africa's signature white variety (locally also called Steen).",
    module: "South African Wines"
  },
  {
    id: 68,
    question: "What are the premium Chardonnay regions in Australia?",
    options: [
      "Barossa Valley, Clare Valley, Eden Valley",
      "Margaret River, Yarra Valley, Adelaide Hills, Tasmania",
      "Hunter Valley, Riverland, Murray River",
      "Coonawarra, Padthaway, Wrattonbully"
    ],
    correctAnswer: 1,
    explanation: "Australia's premium Chardonnay regions include Margaret River, Yarra Valley, Adelaide Hills, and Tasmania.",
    module: "Australian White Wines"
  },
  {
    id: 69,
    question: "What distinguishes Australian Barossa Valley Shiraz?",
    options: [
      "Light and elegant style",
      "Full-bodied, high alcohol, with intense dark fruit and spice",
      "Mineral and austere character",
      "High acidity and low alcohol"
    ],
    correctAnswer: 1,
    explanation: "Barossa Valley Shiraz is full-bodied with high alcohol, intense dark fruit, chocolate, and spice notes, often from old vines.",
    module: "Australian Red Wines"
  },
  {
    id: 70,
    question: "What are the main sub-regions of Napa Valley?",
    options: [
      "North Coast, Central Coast, South Coast",
      "Rutherford, Oakville, Stags Leap District, Howell Mountain",
      "Sonoma Coast, Russian River, Alexander Valley",
      "Santa Barbara, Santa Maria, Paso Robles"
    ],
    correctAnswer: 1,
    explanation: "Major Napa Valley sub-regions include Rutherford, Oakville, Stags Leap District, Howell Mountain, and others (16 AVAs total).",
    module: "California Wine Regions"
  },
  {
    id: 71,
    question: "What is the main red grape of Portugal's Douro Valley?",
    options: [
      "Tempranillo",
      "Touriga Nacional",
      "Castelão",
      "Aragonez"
    ],
    correctAnswer: 1,
    explanation: "Touriga Nacional is the main red grape of Portugal's Douro Valley (among many others used in blends).",
    module: "Portuguese Wines"
  },
  {
    id: 72,
    question: "What is the main grape variety in Ribera del Duero?",
    options: [
      "Garnacha",
      "Tempranillo",
      "Monastrell",
      "Graciano"
    ],
    correctAnswer: 1,
    explanation: "Tempranillo is the main grape variety in Ribera del Duero (locally called Tinto Fino or Tinta del País).",
    module: "Spanish Wine Regions"
  },
  {
    id: 73,
    question: "What is the main grape variety in Rioja?",
    options: [
      "Garnacha",
      "Tempranillo",
      "Mazuelo",
      "Graciano"
    ],
    correctAnswer: 1,
    explanation: "Tempranillo is the main grape variety in Rioja, blended with Garnacha, Graciano, and Mazuelo/Carignan.",
    module: "Spanish Wine Law"
  },
  {
    id: 74,
    question: "What grape variety is Vinho Verde Alvarinho?",
    options: [
      "Loureiro",
      "Albariño",
      "Arinto",
      "Trajadura"
    ],
    correctAnswer: 1,
    explanation: "Vinho Verde Alvarinho is made from Albariño grapes (called Alvarinho in Portugal).",
    module: "Portuguese White Wines"
  },
  {
    id: 75,
    question: "What are the main red grape varieties in Southern Rhône?",
    options: [
      "Syrah, Cabernet Sauvignon, Merlot",
      "Grenache, Syrah, Mourvèdre",
      "Pinot Noir, Gamay, Poulsard",
      "Sangiovese, Nebbiolo, Barbera"
    ],
    correctAnswer: 1,
    explanation: "Southern Rhône uses Grenache, Syrah, Mourvèdre (GSM blend), plus others like Cinsault.",
    module: "Southern Rhône"
  },
  {
    id: 76,
    question: "What are the main white grape varieties in Bordeaux?",
    options: [
      "Chardonnay, Sauvignon Blanc, Riesling",
      "Sauvignon Blanc, Sémillon, Muscadelle",
      "Chenin Blanc, Melon de Bourgogne, Muscadet",
      "Gewürztraminer, Pinot Gris, Sylvaner"
    ],
    correctAnswer: 1,
    explanation: "Bordeaux white wines use Sauvignon Blanc, Sémillon, and Muscadelle.",
    module: "Bordeaux White Wines"
  },
  {
    id: 77,
    question: "What are the main appellations of the Right Bank?",
    options: [
      "Margaux and Pauillac",
      "Saint-Émilion and Pomerol",
      "Saint-Estèphe and Saint-Julien",
      "Graves and Pessac-Léognan"
    ],
    correctAnswer: 1,
    explanation: "The main Right Bank appellations are Saint-Émilion and Pomerol.",
    module: "Bordeaux Geography"
  },
  {
    id: 78,
    question: "Which Loire Valley region is famous for Cabernet Franc?",
    options: [
      "Sancerre",
      "Chinon",
      "Muscadet",
      "Pouilly-Fumé"
    ],
    correctAnswer: 1,
    explanation: "Chinon is famous for Cabernet Franc (also Bourgueil and Saint-Nicolas-de-Bourgueil).",
    module: "Loire Valley Reds"
  },
  {
    id: 79,
    question: "What are the quality levels in Burgundy from lowest to highest?",
    options: [
      "Village, Regional, Premier Cru, Grand Cru",
      "Regional, Village, Premier Cru, Grand Cru",
      "Grand Cru, Premier Cru, Village, Regional",
      "Premier Cru, Grand Cru, Village, Regional"
    ],
    correctAnswer: 1,
    explanation: "Burgundy quality levels from lowest to highest: Regional (Bourgogne), Village, Premier Cru, and Grand Cru.",
    module: "Burgundy Classification"
  },
  {
    id: 80,
    question: "What are the five main districts of Burgundy from north to south?",
    options: [
      "Côte de Nuits, Côte de Beaune, Côte Chalonnaise, Mâconnais, Chablis",
      "Chablis, Côte de Nuits, Côte de Beaune, Côte Chalonnaise, Mâconnais",
      "Mâconnais, Côte Chalonnaise, Côte de Beaune, Côte de Nuits, Chablis",
      "Côte de Beaune, Côte de Nuits, Chablis, Côte Chalonnaise, Mâconnais"
    ],
    correctAnswer: 1,
    explanation: "Burgundy's five main districts from north to south: Chablis, Côte de Nuits, Côte de Beaune, Côte Chalonnaise, and Mâconnais.",
    module: "Burgundy Geography"
  },
  {
    id: 81,
    question: "What is the minimum alcohol level for Austrian Smaragd wines?",
    options: [
      "11.5% ABV",
      "12.5% ABV",
      "13.5% ABV",
      "14% ABV"
    ],
    correctAnswer: 1,
    explanation: "Austrian Smaragd wines require a minimum alcohol level of 12.5% ABV.",
    module: "Austrian Wine Classification"
  },
  {
    id: 82,
    question: "What does 'Prädikatswein' mean in German wine classification?",
    options: [
      "Regional wine quality",
      "The highest level based on must weight at harvest",
      "Table wine quality",
      "Sparkling wine classification"
    ],
    correctAnswer: 1,
    explanation: "Prädikatswein is the highest level of German wine quality, based on must weight at harvest, with six ripeness levels.",
    module: "German Wine Law"
  },
  {
    id: 83,
    question: "What is terroir?",
    options: [
      "A winemaking technique",
      "The combination of climate, soil, topography, and human factors",
      "A type of grape variety",
      "An aging process"
    ],
    correctAnswer: 1,
    explanation: "Terroir is the combination of climate, soil, topography, and human factors that gives a wine its sense of place.",
    module: "Wine Fundamentals"
  },
  {
    id: 84,
    question: "What are the main soil nutrients needed for healthy vine growth?",
    options: [
      "Carbon, hydrogen, oxygen",
      "Nitrogen, phosphorus, potassium, magnesium",
      "Calcium, sulfur, iron",
      "Zinc, copper, boron"
    ],
    correctAnswer: 1,
    explanation: "The main soil nutrients needed for healthy vine growth are nitrogen, phosphorus, potassium, and magnesium.",
    module: "Viticulture"
  },
  {
    id: 85,
    question: "What is the difference between climate and weather?",
    options: [
      "They are the same thing",
      "Climate is long-term patterns, weather is annual variation",
      "Climate is daily, weather is seasonal",
      "Climate affects temperature, weather affects rainfall"
    ],
    correctAnswer: 1,
    explanation: "Climate is the annual pattern of temperature, sunlight, and rainfall averaged over several years; weather is the annual variation from this average.",
    module: "Climate and Weather"
  },
  {
    id: 86,
    question: "What temperature range is typical for red wine fermentation?",
    options: [
      "15-20°C (59-68°F)",
      "20-32°C (68-90°F)",
      "32-40°C (90-104°F)",
      "10-15°C (50-59°F)"
    ],
    correctAnswer: 1,
    explanation: "Red wine fermentation typically occurs at 20-32°C (68-90°F).",
    module: "Winemaking Temperatures"
  },
  {
    id: 87,
    question: "What is cold maceration?",
    options: [
      "Fermentation at low temperatures",
      "Keeping crushed grapes at low temperatures before fermentation",
      "Aging wine at cold temperatures",
      "Storing wine in cold cellars"
    ],
    correctAnswer: 1,
    explanation: "Cold maceration involves keeping crushed grapes at low temperatures before fermentation to extract color and flavor compounds without extracting tannins.",
    module: "Pre-fermentation Techniques"
  },
  {
    id: 88,
    question: "What are the main types of wine faults?",
    options: [
      "Color, aroma, taste faults",
      "Cork taint, oxidation, volatile acidity, reduction, Brettanomyces",
      "Primary, secondary, tertiary faults",
      "Grape, fermentation, aging faults"
    ],
    correctAnswer: 1,
    explanation: "The main wine faults are cork taint (TCA), oxidation, volatile acidity, reduction, and Brettanomyces.",
    module: "Wine Faults"
  },
  {
    id: 89,
    question: "What is the purpose of sulfur dioxide in winemaking?",
    options: [
      "To add flavor to wine",
      "Anti-oxidant and anti-microbial protection",
      "To increase alcohol content",
      "To enhance color"
    ],
    correctAnswer: 1,
    explanation: "Sulfur dioxide serves as an anti-oxidant and anti-microbial agent that protects wine freshness.",
    module: "Winemaking Additives"
  },
  {
    id: 90,
    question: "What is the difference between punch down and pump over?",
    options: [
      "Different grape varieties used",
      "Both extract color and tannins; punch down pushes cap into wine, pump over circulates wine",
      "Different fermentation temperatures",
      "Different aging methods"
    ],
    correctAnswer: 1,
    explanation: "Both extract color and tannins; punch down pushes the cap into wine, pump over circulates wine over the cap.",
    module: "Red Wine Extraction"
  },
  {
    id: 91,
    question: "What information must appear on an EU wine label?",
    options: [
      "Vintage, vineyard, winemaker",
      "Producer name, volume, alcohol content, country of origin, allergen warnings",
      "Grape variety, harvest date, bottling date",
      "Price, distributor, storage instructions"
    ],
    correctAnswer: 1,
    explanation: "EU wine labels must show producer name, volume, alcohol content, country of origin, and allergen warnings (sulfites).",
    module: "Wine Labeling Law"
  },
  {
    id: 92,
    question: "What is the correct order for tasting multiple wines?",
    options: [
      "Red before white, sweet before dry",
      "Light before full-bodied, dry before sweet, young before old",
      "High alcohol before low alcohol",
      "Expensive before inexpensive"
    ],
    correctAnswer: 1,
    explanation: "The correct order is light before full-bodied, dry before sweet, young before old, white before red (with exceptions).",
    module: "Wine Service"
  },
  {
    id: 93,
    question: "What factors affect a wine's aging potential?",
    options: [
      "Color and clarity only",
      "Tannin structure, acidity, alcohol, sugar, flavor concentration",
      "Bottle size and cork quality only",
      "Price and reputation only"
    ],
    correctAnswer: 1,
    explanation: "Aging potential depends on tannin structure, acidity level, alcohol content, sugar content, and initial concentration of flavor.",
    module: "Wine Aging"
  },
  {
    id: 94,
    question: "What is the difference between organic and biodynamic viticulture?",
    options: [
      "They are the same thing",
      "Organic avoids synthetic chemicals; biodynamic follows organic plus holistic farming",
      "Organic is newer than biodynamic",
      "Biodynamic only applies to white wines"
    ],
    correctAnswer: 1,
    explanation: "Organic avoids synthetic chemicals; biodynamic follows organic principles plus holistic farming practices based on lunar cycles.",
    module: "Sustainable Viticulture"
  },
  {
    id: 95,
    question: "What are tertiary aromas?",
    options: [
      "Aromas from grape variety",
      "Aromas that develop from aging in oak and bottle",
      "Aromas from fermentation",
      "Aromas from soil"
    ],
    correctAnswer: 1,
    explanation: "Tertiary aromas develop from aging (both in oak and bottle), such as leather, tobacco, mushroom, and oxidative notes.",
    module: "Wine Tasting"
  },
  {
    id: 96,
    question: "What can 'legs' or 'tears' on a wine glass indicate?",
    options: [
      "Wine quality level",
      "Higher alcohol content or residual sugar",
      "Grape variety used",
      "Age of the wine"
    ],
    correctAnswer: 1,
    explanation: "Legs or tears can indicate higher alcohol content or residual sugar content in the wine.",
    module: "Wine Analysis"
  },
  {
    id: 97,
    question: "What is the traditional method called in different regions?",
    options: [
      "All regions use the same name",
      "Méthode Traditionnelle, Metodo Classico, Traditional Method, Cap Classique",
      "Only Champagne uses traditional method",
      "Each region has unique methods"
    ],
    correctAnswer: 1,
    explanation: "Traditional method is called Méthode Champenoise/Traditionnelle (Champagne), Metodo Classico (Italy), Traditional Method (English), Cap Classique (South Africa).",
    module: "Sparkling Wine Methods"
  },
  {
    id: 98,
    question: "What factors determine wine quality in the WSET systematic approach?",
    options: [
      "Price and reputation",
      "Balance, length, intensity, complexity, typicity",
      "Alcohol content and color",
      "Age and vintage"
    ],
    correctAnswer: 1,
    explanation: "Wine quality is determined by balance, length, intensity, complexity, and typicity of the wine.",
    module: "Wine Evaluation"
  },
  {
    id: 99,
    question: "What is the difference between Old World and New World wine styles?",
    options: [
      "Age of the wine",
      "Old World is terroir-driven and food-friendly; New World is fruit-forward",
      "Production volume",
      "Alcohol content levels"
    ],
    correctAnswer: 1,
    explanation: "Old World (Europe) tends toward terroir-driven, food-friendly styles; New World emphasizes fruit-forward, variety-driven styles.",
    module: "Wine Styles"
  },
  {
    id: 100,
    question: "What is the ideal serving temperature for light-bodied white wines?",
    options: [
      "15-18°C (59-64°F)",
      "8-12°C (46-54°F)",
      "18-20°C (64-68°F)",
      "4-6°C (39-43°F)"
    ],
    correctAnswer: 1,
    explanation: "Light-bodied white wines are best served chilled at 8-12°C (46-54°F).",
    module: "Wine Service"
  },
  // Add the new WSET L3 practice questions, adjusting IDs to continue sequence
  ...wsetL3PracticeQuestions.map(q => ({
    ...q,
    id: q.id + 100 // Offset IDs to avoid conflicts
  }))
];

// Complete 200 questions covering all WSET Level 3 modules and topics