export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  module: string;
}

export const wsetL3PracticeQuestions: Question[] = [
  // Southern Rhône - Rosé Production Methods
  {
    id: 1,
    question: "Which method of rosé production involves bleeding off juice from red wine tanks?",
    options: [
      "Direct pressing method",
      "Saignée (bleeding) method", 
      "Blending method",
      "Skin contact method"
    ],
    correctAnswer: 1,
    explanation: "The saignée method involves bleeding off free-run juice from red wine tanks after brief skin contact, concentrating the remaining red wine while producing rosé.",
    module: "Southern Rhône Production"
  },
  {
    id: 2,
    question: "What is the typical skin contact time for Southern Rhône rosé wines using direct pressing?",
    options: [
      "12-24 hours",
      "2-4 hours", 
      "No skin contact",
      "1-2 weeks"
    ],
    correctAnswer: 1,
    explanation: "Direct pressing rosé typically involves 2-4 hours of skin contact to extract light color and delicate flavors before pressing.",
    module: "Southern Rhône Production"
  },
  {
    id: 3,
    question: "In semi-carbonic maceration, what percentage of grapes are typically crushed?",
    options: [
      "100% - all grapes are crushed",
      "0% - no grapes are crushed",
      "20-30% at the bottom of the tank",
      "50% - half the grapes"
    ],
    correctAnswer: 2,
    explanation: "In semi-carbonic maceration, 20-30% of grapes at the bottom are crushed under the weight, while the rest undergo carbonic maceration.",
    module: "Southern Rhône Production"
  },
  {
    id: 4,
    question: "What type of grapes are preferred for semi-carbonic maceration?",
    options: [
      "Grapes with thick skins and high tannins",
      "Whole, uncrushed bunches with thin skins",
      "Overripe grapes with high sugar",
      "Grapes with high acidity only"
    ],
    correctAnswer: 1,
    explanation: "Semi-carbonic maceration requires whole, uncrushed bunches, preferably with thin skins to allow easy intracellular fermentation.",
    module: "Southern Rhône Production"
  },
  {
    id: 5,
    question: "What is a characteristic aroma of wines made by carbonic or semi-carbonic maceration?",
    options: [
      "Oak and vanilla",
      "Citrus and mineral",
      "Banana and bubble gum",
      "Earthy and leathery"
    ],
    correctAnswer: 2,
    explanation: "Carbonic and semi-carbonic maceration produces distinctive banana and bubble gum aromas due to enhanced ester production.",
    module: "Southern Rhône Production"
  },
  {
    id: 6,
    question: "How do tannin levels typically compare in carbonic maceration wines versus traditional red wines?",
    options: [
      "Much higher tannins",
      "Same tannin levels",
      "Lower tannins with softer texture",
      "No tannins present"
    ],
    correctAnswer: 2,
    explanation: "Carbonic maceration extracts less tannin, resulting in softer, more approachable wines with lower tannin levels.",
    module: "Southern Rhône Production"
  },
  {
    id: 7,
    question: "What is a stylistic reason for blending in Southern Rhône red wines?",
    options: [
      "To reduce production costs",
      "To meet minimum volume requirements",
      "To balance structure, color, and flavor complexity",
      "To increase alcohol levels"
    ],
    correctAnswer: 2,
    explanation: "Blending allows winemakers to balance different grape varieties' characteristics - structure from Syrah, color from Grenache, spice from Mourvèdre.",
    module: "Southern Rhône Production"
  },
  {
    id: 8,
    question: "What is a practical reason for blending grape varieties in the Southern Rhône?",
    options: [
      "Legal requirements for AOC",
      "Risk management against vintage variation and disease",
      "To increase wine prices",
      "To reduce fermentation time"
    ],
    correctAnswer: 1,
    explanation: "Blending provides practical benefits like risk management - if one variety fails due to weather or disease, others can compensate.",
    module: "Southern Rhône Production"
  },

  // Pinot Grigio/Pinot Gris
  {
    id: 9,
    question: "How does Alsatian Pinot Gris typically differ from Italian Pinot Grigio in body?",
    options: [
      "Alsatian is lighter bodied",
      "Both have the same body",
      "Alsatian is fuller bodied with more richness",
      "Italian is always sparkling"
    ],
    correctAnswer: 2,
    explanation: "Alsatian Pinot Gris is typically fuller bodied with more richness and complexity compared to the lighter, crisper Italian Pinot Grigio style.",
    module: "Pinot Grigio/Pinot Gris"
  },
  {
    id: 10,
    question: "What natural factor in Alsace contributes to the rich style of Pinot Gris?",
    options: [
      "High altitude vineyards only",
      "Constant rainfall throughout growing season",
      "Vosges Mountains creating a rain shadow effect",
      "Proximity to the Mediterranean Sea"
    ],
    correctAnswer: 2,
    explanation: "The Vosges Mountains create a rain shadow effect, giving Alsace a dry climate that allows grapes to ripen fully, creating richer wines.",
    module: "Pinot Grigio/Pinot Gris"
  },
  {
    id: 11,
    question: "Why do large, old oak barrels used in Alsace have little influence on wine aromas?",
    options: [
      "They are made from different wood types",
      "The oak is old and neutral, imparting no flavors",
      "They are only used for storage, not fermentation",
      "The wines are aged for very short periods"
    ],
    correctAnswer: 1,
    explanation: "Large, old oak barrels are neutral because they've been used many times, so the oak flavors have been extracted in previous uses.",
    module: "Pinot Grigio/Pinot Gris"
  },
  {
    id: 12,
    question: "What storage temperature is recommended for long-term aging of premium Alsace Pinot Gris?",
    options: [
      "18-20°C (room temperature)",
      "10-15°C (cool and constant)",
      "5-8°C (refrigerator temperature)",
      "Below 0°C (freezing)"
    ],
    correctAnswer: 1,
    explanation: "Premium wines should be stored at 10-15°C in cool, constant conditions to age properly without temperature fluctuations.",
    module: "Pinot Grigio/Pinot Gris"
  },
  {
    id: 13,
    question: "What humidity level is ideal for wine storage with natural cork closures?",
    options: [
      "30-40% (very dry)",
      "70-75% (optimal for cork)",
      "90-95% (very humid)",
      "Humidity doesn't matter"
    ],
    correctAnswer: 1,
    explanation: "70-75% humidity is ideal to keep natural corks moist and prevent oxidation while avoiding mold growth from excessive humidity.",
    module: "Pinot Grigio/Pinot Gris"
  },

  // Pinot Noir Climate Requirements
  {
    id: 14,
    question: "Why is Pinot Noir best grown in cool to moderate climates?",
    options: [
      "It has very thin skins that burn easily in hot climates",
      "It only grows in mountainous regions",
      "It requires winter snow to survive",
      "It cannot produce enough sugar in warm climates"
    ],
    correctAnswer: 0,
    explanation: "Pinot Noir has thin skins that are easily damaged by excessive heat and sun, and it loses its delicate character in hot climates.",
    module: "Pinot Noir Climate"
  },
  {
    id: 15,
    question: "What natural factor moderates the climate in Los Carneros for Pinot Noir cultivation?",
    options: [
      "High altitude and mountain slopes",
      "Cool morning fog from San Pablo Bay",
      "Constant rainfall throughout summer",
      "Underground springs"
    ],
    correctAnswer: 1,
    explanation: "Los Carneros benefits from cool morning fog rolling in from San Pablo Bay, moderating temperatures for cool-climate grape varieties.",
    module: "Pinot Noir Climate"
  },
  {
    id: 16,
    question: "How do afternoon winds in Los Carneros affect grape growing?",
    options: [
      "They increase humidity and disease pressure",
      "They have no effect on viticulture",
      "They help cool the vineyards and reduce disease pressure",
      "They damage the vines"
    ],
    correctAnswer: 2,
    explanation: "Afternoon winds help cool the vineyards and reduce disease pressure by improving air circulation and lowering humidity.",
    module: "Pinot Noir Climate"
  },
  {
    id: 17,
    question: "What makes Central Otago suitable for Pinot Noir despite its latitude?",
    options: [
      "It's located at sea level",
      "High altitude (200-400m) moderates temperature",
      "Constant cloud cover",
      "Geothermal heating"
    ],
    correctAnswer: 1,
    explanation: "Central Otago's high altitude (200-400m) creates cooler temperatures suitable for Pinot Noir despite being at a relatively low latitude.",
    module: "Pinot Noir Climate"
  },
  {
    id: 18,
    question: "How does Central Otago's continental climate benefit Pinot Noir?",
    options: [
      "Warm days and cool nights preserve acidity and develop flavors",
      "Constant temperature throughout day and night",
      "High humidity promotes disease",
      "Short growing season limits ripening"
    ],
    correctAnswer: 0,
    explanation: "Continental climate provides warm days for ripening and cool nights that preserve acidity and develop complex flavors.",
    module: "Pinot Noir Climate"
  },

  // Hunter Valley Semillon
  {
    id: 19,
    question: "What human influence in Hunter Valley vineyards contributes to distinctive Semillon character?",
    options: [
      "Late harvest timing to maximize ripeness",
      "Early harvest to retain high acidity and prevent botrytis",
      "Extensive use of oak barrels",
      "Addition of sulfur during harvest"
    ],
    correctAnswer: 1,
    explanation: "Hunter Valley Semillon is picked early to retain high acidity and prevent botrytis, creating its distinctive lean, mineral style.",
    module: "Hunter Valley Semillon"
  },
  {
    id: 20,
    question: "What winery influence contributes to Hunter Valley Semillon's distinctive character?",
    options: [
      "Extensive malolactic fermentation",
      "Heavy oak aging for complexity",
      "Minimal intervention with neutral vessel aging",
      "Fortification with grape spirit"
    ],
    correctAnswer: 2,
    explanation: "Hunter Valley Semillon uses minimal intervention and neutral vessel aging to preserve its pure, mineral character.",
    module: "Hunter Valley Semillon"
  },
  {
    id: 21,
    question: "How does Hunter Valley Semillon change with bottle aging?",
    options: [
      "It becomes lighter and more acidic",
      "It develops honey and toast flavors while retaining acidity",
      "It loses all its flavor characteristics",
      "It becomes sweeter"
    ],
    correctAnswer: 1,
    explanation: "Hunter Valley Semillon develops complex honey and toast flavors with bottle aging while retaining its characteristic high acidity.",
    module: "Hunter Valley Semillon"
  },

  // Russian River Valley Chardonnay
  {
    id: 22,
    question: "Why might a Russian River Valley Chardonnay producer choose malolactic fermentation?",
    options: [
      "To increase alcohol levels",
      "To add creamy texture and reduce sharp acidity",
      "To create sparkling wine",
      "To prevent oxidation"
    ],
    correctAnswer: 1,
    explanation: "Malolactic fermentation adds creamy texture and reduces sharp malic acidity, creating a rounder, more complex Chardonnay.",
    module: "Russian River Valley Chardonnay"
  },
  {
    id: 23,
    question: "What bacterial process occurs during malolactic fermentation?",
    options: [
      "Conversion of alcohol to acetic acid",
      "Conversion of malic acid to lactic acid",
      "Conversion of sugar to alcohol",
      "Conversion of tannins to anthocyanins"
    ],
    correctAnswer: 1,
    explanation: "Malolactic fermentation converts sharp malic acid into softer lactic acid through bacterial action.",
    module: "Russian River Valley Chardonnay"
  },
  {
    id: 24,
    question: "What flavor compounds are created during malolactic fermentation?",
    options: [
      "Citrus and tropical fruit flavors",
      "Butter and cream flavors from diacetyl production",
      "Floral and herbal notes",
      "Smoky and earthy characteristics"
    ],
    correctAnswer: 1,
    explanation: "Malolactic fermentation produces diacetyl, which creates butter and cream flavors in wine.",
    module: "Russian River Valley Chardonnay"
  },

  // Traditional Method Sparkling Wines
  {
    id: 25,
    question: "Why do traditional method sparkling wine producers require grapes with low sugar levels?",
    options: [
      "To create sweeter final wines",
      "To prevent over-fermentation",
      "To allow for second fermentation without excessive alcohol",
      "To reduce production costs"
    ],
    correctAnswer: 2,
    explanation: "Low sugar grapes create a base wine around 11% alcohol, allowing second fermentation to reach appropriate final alcohol levels (12-12.5%).",
    module: "Traditional Method Sparkling"
  },
  {
    id: 26,
    question: "What process gives traditional method sparkling wines bread and biscuit flavors?",
    options: [
      "Oak barrel aging",
      "Malolactic fermentation",
      "Autolysis - aging on lees",
      "Cold stabilization"
    ],
    correctAnswer: 2,
    explanation: "Autolysis occurs when dead yeast cells break down during extended aging on lees, creating bread and biscuit flavors.",
    module: "Traditional Method Sparkling"
  },
  {
    id: 27,
    question: "How long must Champagne age on lees for non-vintage wines?",
    options: [
      "6 months minimum",
      "12 months minimum",
      "15 months minimum",
      "3 years minimum"
    ],
    correctAnswer: 2,
    explanation: "Champagne AOC requires minimum 15 months aging on lees for non-vintage wines to develop characteristic flavors.",
    module: "Traditional Method Sparkling"
  },
  {
    id: 28,
    question: "What is dosage in sparkling wine production?",
    options: [
      "Adding sugar during first fermentation",
      "Adding liqueur d'expédition to adjust sweetness after disgorgement",
      "Adding sulfur dioxide for preservation",
      "Adding acid for balance"
    ],
    correctAnswer: 1,
    explanation: "Dosage is the addition of liqueur d'expédition (wine and sugar mixture) after disgorgement to adjust final sweetness level.",
    module: "Traditional Method Sparkling"
  },
  {
    id: 29,
    question: "What is another method to make sparkling wines sweet besides dosage?",
    options: [
      "Partial fermentation leaving residual sugar",
      "Adding grape juice concentrate",
      "Extended aging on lees",
      "Cold stabilization"
    ],
    correctAnswer: 0,
    explanation: "Partial fermentation can be stopped before all sugar is converted, leaving natural residual sugar for sweetness.",
    module: "Traditional Method Sparkling"
  },

  // Fortified Wines - Muscat
  {
    id: 30,
    question: "When is fortification typically added for sweet Muscat wines?",
    options: [
      "Before fermentation starts",
      "During fermentation to retain grape sweetness",
      "After fermentation completes",
      "Only during aging"
    ],
    correctAnswer: 1,
    explanation: "For sweet Muscat wines, fortification is added during fermentation to stop it and retain natural grape sweetness.",
    module: "Fortified Wines - Muscat"
  },
  {
    id: 31,
    question: "What distinguishes Muscat de Beaumes-de-Venise from dry Muscat wines?",
    options: [
      "Different grape variety used",
      "Fortification during fermentation creates sweetness",
      "Addition of sugar after fermentation",
      "Extended skin contact"
    ],
    correctAnswer: 1,
    explanation: "Muscat de Beaumes-de-Venise is fortified during fermentation, stopping it and retaining natural grape sugars for sweetness.",
    module: "Fortified Wines - Muscat"
  },
  {
    id: 32,
    question: "What alcohol level do fortified wines typically reach?",
    options: [
      "11-13% (same as table wine)",
      "15-20% (fortified wine range)",
      "25-30% (spirits range)",
      "5-8% (low alcohol)"
    ],
    correctAnswer: 1,
    explanation: "Fortified wines typically reach 15-20% alcohol through the addition of neutral grape spirit.",
    module: "Fortified Wines - Muscat"
  },
  {
    id: 33,
    question: "How should a mature Vintage Port be positioned before decanting?",
    options: [
      "Upright for several days to let sediment settle",
      "On its side as stored",
      "Upside down to mix sediment",
      "Shaken to distribute sediment"
    ],
    correctAnswer: 0,
    explanation: "Vintage Port should be stood upright for several days before serving to allow sediment to settle to the bottom.",
    module: "Fortified Wines - Port"
  },
  {
    id: 34,
    question: "What tool is traditionally used to open an old Vintage Port?",
    options: [
      "Standard corkscrew",
      "Hot tongs (port tongs) to crack the neck",
      "Electric opener",
      "Champagne saber"
    ],
    correctAnswer: 1,
    explanation: "Hot port tongs are used to crack the neck of old Vintage Port bottles when corks have deteriorated.",
    module: "Fortified Wines - Port"
  },
  {
    id: 35,
    question: "When decanting Vintage Port, what indicates you should stop pouring?",
    options: [
      "When exactly half the bottle is poured",
      "When sediment begins to appear near the neck",
      "After exactly 30 seconds",
      "When the wine changes color"
    ],
    correctAnswer: 1,
    explanation: "Stop decanting when sediment begins to appear near the bottle neck to avoid clouding the clear wine.",
    module: "Fortified Wines - Port"
  },

  // Extended Southern Rhône Questions
  {
    id: 36,
    question: "What is the primary grape variety in most Southern Rhône red blends?",
    options: [
      "Syrah",
      "Grenache",
      "Mourvèdre",
      "Cinsault"
    ],
    correctAnswer: 1,
    explanation: "Grenache is typically the primary grape in Southern Rhône blends, providing fruit, alcohol, and body to the wines.",
    module: "Southern Rhône Varieties"
  },
  {
    id: 37,
    question: "What does Syrah typically contribute to Southern Rhône blends?",
    options: [
      "High alcohol and low acidity",
      "Light color and floral aromas",
      "Structure, color, and spicy notes",
      "Sweetness and low tannins"
    ],
    correctAnswer: 2,
    explanation: "Syrah adds structure, deep color, and distinctive spicy, peppery notes to Southern Rhône blends.",
    module: "Southern Rhône Varieties"
  },
  {
    id: 38,
    question: "What role does Mourvèdre play in Southern Rhône blends?",
    options: [
      "Adds tannin structure and earthy complexity",
      "Provides high acidity and citrus flavors",
      "Creates light, easy-drinking wines",
      "Adds sweetness and low alcohol"
    ],
    correctAnswer: 0,
    explanation: "Mourvèdre contributes firm tannin structure and earthy, gamey complexity to blends, especially in Châteauneuf-du-Pape.",
    module: "Southern Rhône Varieties"
  },
  {
    id: 39,
    question: "How many grape varieties are permitted in Châteauneuf-du-Pape AOC?",
    options: [
      "5 varieties",
      "10 varieties",
      "18 varieties",
      "25 varieties"
    ],
    correctAnswer: 2,
    explanation: "Châteauneuf-du-Pape AOC permits 18 grape varieties, though most wines use only a handful of the allowed grapes.",
    module: "Southern Rhône AOC"
  },
  {
    id: 40,
    question: "What soil type is characteristic of Châteauneuf-du-Pape vineyards?",
    options: [
      "Pure limestone",
      "Volcanic ash",
      "Large rounded stones (galets roulés)",
      "Heavy clay"
    ],
    correctAnswer: 2,
    explanation: "Châteauneuf-du-Pape is famous for its large rounded stones (galets roulés) that store heat and aid ripening.",
    module: "Southern Rhône Terroir"
  },

  // Alsace Extended
  {
    id: 41,
    question: "What are the four noble grape varieties of Alsace?",
    options: [
      "Pinot Gris, Chardonnay, Sauvignon Blanc, Pinot Noir",
      "Riesling, Gewürztraminer, Pinot Gris, Muscat",
      "Riesling, Pinot Blanc, Sylvaner, Auxerrois",
      "Gewürztraminer, Pinot Noir, Chardonnay, Muscat"
    ],
    correctAnswer: 1,
    explanation: "The four noble varieties allowed in Alsace Grand Cru are Riesling, Gewürztraminer, Pinot Gris, and Muscat.",
    module: "Alsace Varieties"
  },
  {
    id: 42,
    question: "What does 'Vendanges Tardives' indicate on an Alsace wine label?",
    options: [
      "Dry wine with no residual sugar",
      "Late harvest wine, potentially with some sweetness",
      "Sparkling wine made by traditional method",
      "Wine aged in new oak barrels"
    ],
    correctAnswer: 1,
    explanation: "Vendanges Tardives (late harvest) indicates grapes were picked later for higher sugar levels, often resulting in off-dry to sweet wines.",
    module: "Alsace Classifications"
  },
  {
    id: 43,
    question: "What is required for Alsace Grand Cru wines?",
    options: [
      "Blend of multiple grape varieties",
      "100% single noble variety from designated vineyard",
      "Minimum 5 years bottle aging",
      "Sparkling wine production method"
    ],
    correctAnswer: 1,
    explanation: "Alsace Grand Cru requires 100% of one of the four noble varieties from a classified vineyard site.",
    module: "Alsace Classifications"
  },
  {
    id: 44,
    question: "What climate factor makes Alsace one of France's driest wine regions?",
    options: [
      "High altitude vineyards",
      "Constant sea breezes",
      "Rain shadow effect from Vosges Mountains",
      "Underground cave systems"
    ],
    correctAnswer: 2,
    explanation: "The Vosges Mountains block rain clouds from the west, creating a rain shadow that makes Alsace very dry.",
    module: "Alsace Climate"
  },

  // New World Cool Climate Regions
  {
    id: 45,
    question: "What makes the Sonoma Coast suitable for Pinot Noir cultivation?",
    options: [
      "High temperatures and low rainfall",
      "Cool maritime influence from Pacific Ocean",
      "Continental climate with hot summers",
      "High altitude desert conditions"
    ],
    correctAnswer: 1,
    explanation: "The Sonoma Coast benefits from cool maritime influence from the Pacific Ocean, creating ideal conditions for Pinot Noir.",
    module: "Sonoma Coast Climate"
  },
  {
    id: 46,
    question: "How does the Russian River Valley's location affect its climate?",
    options: [
      "It creates a hot, dry desert climate",
      "Cool fog flows inland through the river valley",
      "High altitude creates alpine conditions",
      "Constant rainfall throughout the year"
    ],
    correctAnswer: 1,
    explanation: "Cool fog follows the Russian River inland from the Pacific, creating ideal cool climate conditions for Chardonnay and Pinot Noir.",
    module: "Russian River Valley"
  },
  {
    id: 47,
    question: "What distinguishes Anderson Valley's climate for cool climate varieties?",
    options: [
      "Extreme high altitude",
      "Desert heat and minimal rainfall",
      "Deep valley funneling cool marine air inland",
      "Tropical monsoon conditions"
    ],
    correctAnswer: 2,
    explanation: "Anderson Valley's deep, narrow valley funnels cool marine air inland, creating excellent conditions for cool climate varieties.",
    module: "Anderson Valley"
  },
  {
    id: 48,
    question: "Why is Tasmania becoming known for premium cool climate wines?",
    options: [
      "High altitude vineyards only",
      "Cool maritime climate and clean environment",
      "Volcanic soil exclusively",
      "Extreme rainfall throughout growing season"
    ],
    correctAnswer: 1,
    explanation: "Tasmania's cool maritime climate and pristine environment create ideal conditions for premium cool climate varieties.",
    module: "Tasmania Climate"
  },

  // Winemaking Techniques
  {
    id: 49,
    question: "What is the main difference between carbonic and semi-carbonic maceration?",
    options: [
      "Temperature during fermentation",
      "Length of skin contact",
      "Proportion of crushed versus whole grapes",
      "Type of yeast used"
    ],
    correctAnswer: 2,
    explanation: "Semi-carbonic uses some crushed grapes (20-30%) while carbonic uses 100% whole grapes in CO2 environment.",
    module: "Maceration Techniques"
  },
  {
    id: 50,
    question: "What enzyme is responsible for intracellular fermentation in carbonic maceration?",
    options: [
      "Pectinase",
      "Malate dehydrogenase",
      "Alcohol dehydrogenase",
      "Invertase"
    ],
    correctAnswer: 2,
    explanation: "Alcohol dehydrogenase within grape cells converts sugar to alcohol during intracellular fermentation in carbonic maceration.",
    module: "Maceration Techniques"
  },
  {
    id: 51,
    question: "At what temperature does carbonic maceration typically occur?",
    options: [
      "Below 10°C",
      "30-35°C",
      "45-50°C",
      "Above 60°C"
    ],
    correctAnswer: 1,
    explanation: "Carbonic maceration occurs at 30-35°C to promote intracellular fermentation while preventing traditional yeast fermentation.",
    module: "Maceration Techniques"
  },
  {
    id: 52,
    question: "What is the typical duration of carbonic maceration?",
    options: [
      "1-2 days",
      "5-15 days",
      "1-2 months",
      "6 months to 1 year"
    ],
    correctAnswer: 1,
    explanation: "Carbonic maceration typically lasts 5-15 days depending on desired style and grape variety.",
    module: "Maceration Techniques"
  },

  // Oak and Aging
  {
    id: 53,
    question: "What compounds in new oak barrels contribute vanilla flavors to wine?",
    options: [
      "Tannins",
      "Vanillin and other aldehydes",
      "Anthocyanins",
      "Tartaric acid"
    ],
    correctAnswer: 1,
    explanation: "Vanillin and other aldehydes from new oak contribute characteristic vanilla flavors to wine.",
    module: "Oak Aging"
  },
  {
    id: 54,
    question: "How does French oak typically differ from American oak in flavor contribution?",
    options: [
      "French oak gives stronger vanilla flavors",
      "American oak is more subtle and spicy",
      "French oak is more subtle; American oak more vanilla/coconut",
      "No difference between the two"
    ],
    correctAnswer: 2,
    explanation: "French oak tends to be more subtle and spicy, while American oak gives stronger vanilla and coconut flavors.",
    module: "Oak Aging"
  },
  {
    id: 55,
    question: "What is the purpose of barrel toasting during cooperage?",
    options: [
      "To sterilize the wood",
      "To bend the staves into shape",
      "To develop flavor compounds and modify tannins",
      "To increase barrel capacity"
    ],
    correctAnswer: 2,
    explanation: "Toasting develops specific flavor compounds and modifies tannin structure to create desired flavor profiles.",
    module: "Oak Aging"
  },
  {
    id: 56,
    question: "How many times can a barrel be used before becoming 'neutral'?",
    options: [
      "1-2 times",
      "3-4 times",
      "10-15 times",
      "Barrels never become neutral"
    ],
    correctAnswer: 1,
    explanation: "After 3-4 uses, barrels become largely neutral as most extractable compounds have been removed.",
    module: "Oak Aging"
  },

  // Fermentation Science
  {
    id: 57,
    question: "What is the ideal temperature range for red wine fermentation?",
    options: [
      "10-15°C",
      "20-30°C",
      "35-40°C",
      "Above 45°C"
    ],
    correctAnswer: 1,
    explanation: "Red wine fermentation typically occurs at 20-30°C to extract color and tannins while maintaining aromatic compounds.",
    module: "Fermentation Temperature"
  },
  {
    id: 58,
    question: "Why are white wines typically fermented at cooler temperatures than reds?",
    options: [
      "To increase alcohol levels",
      "To preserve delicate aromas and prevent oxidation",
      "To extract more color",
      "To speed up fermentation"
    ],
    correctAnswer: 1,
    explanation: "Cool fermentation preserves delicate aromatic compounds and prevents oxidation in white wines.",
    module: "Fermentation Temperature"
  },
  {
    id: 59,
    question: "What happens to wine if fermentation temperature becomes too high?",
    options: [
      "Alcohol levels decrease",
      "Color becomes lighter",
      "Aromatic compounds can be lost or damaged",
      "Wine becomes sweeter"
    ],
    correctAnswer: 2,
    explanation: "Excessive fermentation temperature can cause loss of delicate aromatic compounds and create off-flavors.",
    module: "Fermentation Temperature"
  },
  {
    id: 60,
    question: "What is stuck fermentation?",
    options: [
      "Fermentation that happens too quickly",
      "Fermentation that stops before all sugar is converted",
      "Fermentation at very high temperatures",
      "Fermentation that produces no alcohol"
    ],
    correctAnswer: 1,
    explanation: "Stuck fermentation occurs when yeast stops working before converting all sugar to alcohol, often due to stress factors.",
    module: "Fermentation Problems"
  },

  // Viticultural Practices
  {
    id: 61,
    question: "What is the purpose of canopy management in viticulture?",
    options: [
      "To increase vine height only",
      "To control light exposure, air circulation, and grape ripening",
      "To prevent any sunlight from reaching grapes",
      "To increase water consumption"
    ],
    correctAnswer: 1,
    explanation: "Canopy management optimizes light exposure, air circulation, and microclimate to achieve desired grape ripening and health.",
    module: "Viticultural Practices"
  },
  {
    id: 62,
    question: "What is green harvesting (crop thinning)?",
    options: [
      "Harvesting grapes before they're ripe",
      "Removing excess grape bunches to concentrate remaining fruit",
      "Harvesting only green, unripe grapes",
      "Using green machinery for harvest"
    ],
    correctAnswer: 1,
    explanation: "Green harvesting involves removing excess grape bunches during summer to concentrate flavors in remaining fruit.",
    module: "Viticultural Practices"
  },
  {
    id: 63,
    question: "What is the purpose of leaf removal around grape clusters?",
    options: [
      "To hide grapes from birds",
      "To improve air circulation and reduce disease pressure",
      "To prevent any ripening",
      "To increase water retention"
    ],
    correctAnswer: 1,
    explanation: "Strategic leaf removal improves air circulation, reduces disease pressure, and optimizes light exposure for ripening.",
    module: "Viticultural Practices"
  },
  {
    id: 64,
    question: "When is véraison in the grape growing cycle?",
    options: [
      "When grapes first form after flowering",
      "When grapes begin to change color and soften",
      "When grapes are harvested",
      "When vines go dormant in winter"
    ],
    correctAnswer: 1,
    explanation: "Véraison is when grapes begin changing color, softening, and accumulating sugar - the start of ripening.",
    module: "Viticultural Practices"
  },

  // Wine Faults and Quality Issues
  {
    id: 65,
    question: "What causes cork taint (TCA) in wine?",
    options: [
      "Oxidation during aging",
      "Contaminated cork containing 2,4,6-trichloroanisole",
      "Excessive sulfur dioxide",
      "High alcohol levels"
    ],
    correctAnswer: 1,
    explanation: "Cork taint is caused by TCA (2,4,6-trichloroanisole) contamination in cork, creating musty, moldy aromas.",
    module: "Wine Faults"
  },
  {
    id: 66,
    question: "What causes oxidation in wine?",
    options: [
      "Too much sulfur dioxide",
      "Exposure to oxygen during winemaking or storage",
      "Low alcohol levels",
      "Cold storage temperatures"
    ],
    correctAnswer: 1,
    explanation: "Oxidation occurs when wine is exposed to excessive oxygen, causing browning and loss of fresh fruit character.",
    module: "Wine Faults"
  },
  {
    id: 67,
    question: "What is reduction in wine?",
    options: [
      "Lower alcohol content",
      "Lack of oxygen creating sulfur-like odors",
      "Decreased acidity",
      "Loss of color"
    ],
    correctAnswer: 1,
    explanation: "Reduction occurs from lack of oxygen, creating sulfur-like odors (rubber, struck match, rotten eggs).",
    module: "Wine Faults"
  },
  {
    id: 68,
    question: "What causes volatile acidity (VA) in wine?",
    options: [
      "Acetic acid bacteria producing vinegar-like flavors",
      "Too much tartaric acid",
      "Low pH levels",
      "Excessive tannins"
    ],
    correctAnswer: 0,
    explanation: "Volatile acidity is caused by acetic acid bacteria converting alcohol to acetic acid, creating vinegar-like aromas.",
    module: "Wine Faults"
  },

  // Sparkling Wine Production Extended
  {
    id: 69,
    question: "What is riddling (remuage) in traditional method sparkling wine production?",
    options: [
      "Adding sugar for second fermentation",
      "Gradually rotating bottles to move sediment to neck",
      "Removing sediment after aging",
      "Adding final dosage"
    ],
    correctAnswer: 1,
    explanation: "Riddling involves gradually rotating and tilting bottles to consolidate sediment in the neck for easy removal.",
    module: "Traditional Method Details"
  },
  {
    id: 70,
    question: "What is disgorgement in sparkling wine production?",
    options: [
      "Initial fermentation process",
      "Removing the sediment plug from bottle neck",
      "Adding bubbles to still wine",
      "Final corking process"
    ],
    correctAnswer: 1,
    explanation: "Disgorgement is the removal of frozen sediment plug from the bottle neck after riddling and before final dosage.",
    module: "Traditional Method Details"
  },
  {
    id: 71,
    question: "What is the difference between Blanc de Blancs and Blanc de Noirs Champagne?",
    options: [
      "Sweetness levels",
      "Blanc de Blancs uses only white grapes; Blanc de Noirs only black grapes",
      "Production method",
      "Aging time requirements"
    ],
    correctAnswer: 1,
    explanation: "Blanc de Blancs uses only Chardonnay (white grapes), while Blanc de Noirs uses only Pinot Noir and/or Pinot Meunier (black grapes).",
    module: "Champagne Styles"
  },
  {
    id: 72,
    question: "What is the tank method (Charmat method) for sparkling wine?",
    options: [
      "Second fermentation occurs in bottles",
      "Second fermentation occurs in pressurized tanks",
      "No second fermentation is used",
      "Carbonation is injected artificially"
    ],
    correctAnswer: 1,
    explanation: "The tank method conducts second fermentation in large pressurized tanks rather than individual bottles.",
    module: "Sparkling Wine Methods"
  },

  // Regional Specialties Extended
  {
    id: 73,
    question: "What makes Chablis wines distinctive from other Chardonnays?",
    options: [
      "Always aged in new oak",
      "High alcohol and low acidity",
      "Mineral, crisp style from Kimmeridgian soil",
      "Sweet, dessert wine style"
    ],
    correctAnswer: 2,
    explanation: "Chablis is known for its mineral, crisp style derived from Kimmeridgian limestone and clay soils with minimal oak use.",
    module: "Burgundy - Chablis"
  },
  {
    id: 74,
    question: "What are the four classifications of Chablis vineyards?",
    options: [
      "Village, Premier Cru, Grand Cru, Regional",
      "Petit Chablis, Chablis, Chablis Premier Cru, Chablis Grand Cru",
      "First, Second, Third, Fourth Growth",
      "Basic, Reserve, Special Reserve, Grand Reserve"
    ],
    correctAnswer: 1,
    explanation: "Chablis has four levels: Petit Chablis, Chablis, Chablis Premier Cru, and Chablis Grand Cru.",
    module: "Burgundy - Chablis"
  },
  {
    id: 75,
    question: "How many Grand Cru vineyards are there in Chablis?",
    options: [
      "3",
      "7",
      "12",
      "25"
    ],
    correctAnswer: 1,
    explanation: "Chablis has 7 Grand Cru vineyards: Blanchot, Bougros, Les Clos, Grenouilles, Les Preuses, Valmur, and Vaudésir.",
    module: "Burgundy - Chablis"
  },
  {
    id: 76,
    question: "What weather hazard is Chablis particularly susceptible to?",
    options: [
      "Drought",
      "Spring frost damage",
      "Hurricane winds",
      "Excessive rainfall during harvest"
    ],
    correctAnswer: 1,
    explanation: "Chablis is vulnerable to spring frosts that can damage buds and significantly reduce yields.",
    module: "Burgundy - Chablis"
  },

  // Loire Valley
  {
    id: 77,
    question: "What grape variety is used for Sancerre wines?",
    options: [
      "Chardonnay",
      "Sauvignon Blanc",
      "Chenin Blanc",
      "Muscadet"
    ],
    correctAnswer: 1,
    explanation: "Sancerre is made exclusively from Sauvignon Blanc, known for its crisp, mineral style with gooseberry and citrus flavors.",
    module: "Loire Valley - Sancerre"
  },
  {
    id: 78,
    question: "What soil type in Sancerre contributes to its mineral character?",
    options: [
      "Granite",
      "Limestone and flint (silex)",
      "Volcanic ash",
      "Heavy clay"
    ],
    correctAnswer: 1,
    explanation: "Sancerre's limestone and flint (silex) soils contribute to its distinctive mineral character and crisp acidity.",
    module: "Loire Valley - Sancerre"
  },
  {
    id: 79,
    question: "Which Loire Valley appellation is famous for Chenin Blanc?",
    options: [
      "Sancerre",
      "Muscadet",
      "Vouvray",
      "Pouilly-Fumé"
    ],
    correctAnswer: 2,
    explanation: "Vouvray is the most famous Loire appellation for Chenin Blanc, producing styles from dry to sweet.",
    module: "Loire Valley - Vouvray"
  },
  {
    id: 80,
    question: "What allows Vouvray to produce different sweetness levels?",
    options: [
      "Different grape varieties",
      "Chenin Blanc's high acidity and ability to develop botrytis",
      "Addition of sugar",
      "Different fermentation temperatures only"
    ],
    correctAnswer: 1,
    explanation: "Chenin Blanc's naturally high acidity and susceptibility to botrytis allows Vouvray producers to make dry, off-dry, and sweet wines.",
    module: "Loire Valley - Vouvray"
  },

  // German Riesling
  {
    id: 81,
    question: "What is the German classification for dry Riesling?",
    options: [
      "Lieblich",
      "Trocken",
      "Halbtrocken",
      "Süß"
    ],
    correctAnswer: 1,
    explanation: "Trocken indicates dry German wines with minimal residual sugar (less than 4g/L or 9g/L if acidity is high).",
    module: "German Riesling"
  },
  {
    id: 82,
    question: "What does Spätlese indicate in German wine classification?",
    options: [
      "Dry wine",
      "Late harvest wine with higher sugar levels",
      "Sparkling wine",
      "Fortified wine"
    ],
    correctAnswer: 1,
    explanation: "Spätlese means 'late harvest' - grapes picked later for higher sugar levels, typically producing off-dry wines.",
    module: "German Riesling"
  },
  {
    id: 83,
    question: "What is Eiswein in German wine classification?",
    options: [
      "Sparkling wine",
      "Dry wine aged in ice cellars",
      "Wine made from grapes frozen on the vine",
      "Wine with ice added during production"
    ],
    correctAnswer: 2,
    explanation: "Eiswein is made from grapes that freeze naturally on the vine, concentrating sugars and acids for intense sweet wines.",
    module: "German Riesling"
  },
  {
    id: 84,
    question: "Which German region is considered the most prestigious for Riesling?",
    options: [
      "Pfalz",
      "Rheinhessen",
      "Mosel",
      "Baden"
    ],
    correctAnswer: 2,
    explanation: "The Mosel region is considered Germany's most prestigious area for Riesling, known for steep slate vineyards and elegant wines.",
    module: "German Riesling"
  },

  // Australian Wine Regions
  {
    id: 85,
    question: "What makes Barossa Valley ideal for Shiraz production?",
    options: [
      "Cool maritime climate",
      "High altitude vineyards",
      "Warm, dry climate and old vine plantings",
      "Volcanic soils exclusively"
    ],
    correctAnswer: 2,
    explanation: "Barossa Valley's warm, dry climate and some of the world's oldest Shiraz vines (planted in 1840s) create ideal conditions.",
    module: "Australian Regions"
  },
  {
    id: 86,
    question: "What distinguishes Clare Valley Riesling?",
    options: [
      "Always sweet with low acidity",
      "Dry style with high acidity and citrus/mineral character",
      "Sparkling wine production only",
      "Heavy oak influence"
    ],
    correctAnswer: 1,
    explanation: "Clare Valley Riesling is known for its dry style with vibrant acidity and pure citrus/mineral character.",
    module: "Australian Regions"
  },
  {
    id: 87,
    question: "What makes Margaret River suitable for Bordeaux varieties?",
    options: [
      "Tropical climate",
      "Desert conditions",
      "Maritime climate with gravelly soils",
      "High altitude alpine conditions"
    ],
    correctAnswer: 2,
    explanation: "Margaret River's maritime climate and gravelly soils are similar to Bordeaux, making it ideal for Cabernet Sauvignon and Merlot.",
    module: "Australian Regions"
  },
  {
    id: 88,
    question: "Why is Tasmania gaining recognition for sparkling wine?",
    options: [
      "Hot climate accelerates fermentation",
      "Cool climate preserves acidity needed for sparkling wine",
      "High altitude reduces alcohol levels",
      "Unique soil types only"
    ],
    correctAnswer: 1,
    explanation: "Tasmania's cool climate preserves the high acidity essential for quality sparkling wine production.",
    module: "Australian Regions"
  },

  // New Zealand Wine Regions
  {
    id: 89,
    question: "What makes Marlborough ideal for Sauvignon Blanc?",
    options: [
      "Hot, humid climate",
      "Cool climate with long sunshine hours and diurnal temperature variation",
      "Tropical conditions",
      "Desert climate"
    ],
    correctAnswer: 1,
    explanation: "Marlborough's cool climate with long sunshine hours and large diurnal temperature variation preserves aromatic intensity in Sauvignon Blanc.",
    module: "New Zealand Regions"
  },
  {
    id: 90,
    question: "Central Otago is known for which grape variety?",
    options: [
      "Sauvignon Blanc",
      "Chardonnay",
      "Pinot Noir",
      "Cabernet Sauvignon"
    ],
    correctAnswer: 2,
    explanation: "Central Otago is New Zealand's premier region for Pinot Noir, with its continental climate and high altitude.",
    module: "New Zealand Regions"
  },
  {
    id: 91,
    question: "What climatic influence affects most New Zealand wine regions?",
    options: [
      "Continental climate from large landmass",
      "Maritime climate from surrounding ocean",
      "Desert climate from interior",
      "Tropical monsoon climate"
    ],
    correctAnswer: 1,
    explanation: "New Zealand's narrow geography means most wine regions are influenced by maritime climate from the surrounding ocean.",
    module: "New Zealand Regions"
  },
  {
    id: 92,
    question: "What contributes to the intense fruit flavors in Marlborough Sauvignon Blanc?",
    options: [
      "Extended oak aging",
      "Cool climate and UV-intense sunlight",
      "Hot fermentation temperatures",
      "Addition of fruit extracts"
    ],
    correctAnswer: 1,
    explanation: "Cool climate preserves aromatics while UV-intense sunlight contributes to the development of intense fruit flavors.",
    module: "New Zealand Regions"
  },

  // Wine Service and Storage
  {
    id: 93,
    question: "At what temperature should light red wines (like Beaujolais) be served?",
    options: [
      "Room temperature (20°C)",
      "Slightly chilled (12-14°C)",
      "Ice cold (6°C)",
      "Very warm (25°C)"
    ],
    correctAnswer: 1,
    explanation: "Light red wines are best served slightly chilled at 12-14°C to highlight their fresh fruit character.",
    module: "Wine Service"
  },
  {
    id: 94,
    question: "Why might you decant a young, tannic red wine?",
    options: [
      "To remove sediment only",
      "To cool the wine down",
      "To aerate and soften tannins",
      "To add carbonation"
    ],
    correctAnswer: 2,
    explanation: "Decanting young, tannic wines allows aeration that can help soften harsh tannins and open up aromas.",
    module: "Wine Service"
  },
  {
    id: 95,
    question: "What is the ideal serving temperature for Champagne?",
    options: [
      "Room temperature (20°C)",
      "6-8°C (well chilled)",
      "12-14°C (lightly chilled)",
      "0°C (freezing)"
    ],
    correctAnswer: 1,
    explanation: "Champagne should be served well chilled at 6-8°C to maintain its effervescence and crisp character.",
    module: "Wine Service"
  },
  {
    id: 96,
    question: "How long can an opened bottle of wine typically be stored?",
    options: [
      "6 months",
      "2 weeks",
      "3-5 days with proper storage",
      "1 year"
    ],
    correctAnswer: 2,
    explanation: "Opened wine typically remains good for 3-5 days when properly re-corked and stored in the refrigerator.",
    module: "Wine Storage"
  },

  // Wine and Food Pairing
  {
    id: 97,
    question: "What wine characteristic should match the weight of food?",
    options: [
      "Color intensity",
      "Body and intensity",
      "Alcohol level only",
      "Sweetness level"
    ],
    correctAnswer: 1,
    explanation: "The body and intensity of wine should match the weight and intensity of the food for balanced pairing.",
    module: "Wine and Food Pairing"
  },
  {
    id: 98,
    question: "Which wine would pair best with rich, creamy pasta dishes?",
    options: [
      "Light, crisp Sauvignon Blanc",
      "Full-bodied, oaked Chardonnay",
      "Delicate Pinot Grigio",
      "Bone-dry Riesling"
    ],
    correctAnswer: 1,
    explanation: "Full-bodied, oaked Chardonnay has the weight and richness to complement creamy pasta dishes without being overwhelmed.",
    module: "Wine and Food Pairing"
  },
  {
    id: 99,
    question: "What effect does high acidity in wine have on food pairing?",
    options: [
      "It clashes with all foods",
      "It cuts through rich, fatty foods effectively",
      "It only pairs with sweet foods",
      "It has no effect on food pairing"
    ],
    correctAnswer: 1,
    explanation: "High acidity in wine acts as a palate cleanser and cuts through rich, fatty foods, creating balanced pairings.",
    module: "Wine and Food Pairing"
  },
  {
    id: 100,
    question: "Which wines pair best with spicy Asian cuisine?",
    options: [
      "High-alcohol, oaky reds",
      "Dry, high-acid whites only",
      "Off-dry whites with low alcohol and good acidity",
      "Fortified wines exclusively"
    ],
    correctAnswer: 2,
    explanation: "Off-dry whites with lower alcohol and good acidity (like Riesling or Gewürztraminer) complement spicy foods by cooling the palate.",
    module: "Wine and Food Pairing"
  }
];