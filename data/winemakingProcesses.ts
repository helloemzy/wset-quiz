export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  details: string;
  temperature?: string;
  duration?: string;
  keyPoints?: string[];
  alternatives?: string[];
}

export interface WinemakingProcess {
  id: string;
  name: string;
  color: string;
  steps: ProcessStep[];
  overview: string;
  keyCharacteristics: string[];
}

export const winemakingProcesses: WinemakingProcess[] = [
  {
    id: 'white',
    name: 'White Wine Production',
    color: '#f4f1e8',
    overview: 'White wine production focuses on minimal skin contact and controlled fermentation to preserve delicate flavors and maintain fresh acidity.',
    keyCharacteristics: [
      'Immediate pressing to avoid skin contact',
      'Cool fermentation temperatures (12-18°C)',
      'Protection from oxidation throughout process',
      'Optional malolactic fermentation for texture',
      'Potential oak aging for complexity'
    ],
    steps: [
      {
        id: 1,
        title: 'Grape Reception & Sorting',
        description: 'Grapes arrive at the winery and are sorted to remove damaged fruit',
        details: 'White grapes are typically harvested earlier than red grapes to maintain high acidity. Sorting removes leaves, stems, and damaged grapes that could contribute unwanted flavors or cause oxidation.',
        temperature: 'Cool morning temperatures preferred',
        duration: '1-2 hours',
        keyPoints: [
          'Hand or machine harvesting',
          'Quick transport to minimize oxidation',
          'Optical or manual sorting',
          'Removal of MOG (material other than grapes)'
        ]
      },
      {
        id: 2,
        title: 'Crushing & Destemming',
        description: 'Grapes are gently crushed and separated from stems',
        details: 'Gentle crushing breaks the grape skins to release juice. Destemming removes stems which could contribute excessive tannins and bitterness to white wines.',
        duration: '30 minutes',
        keyPoints: [
          'Gentle pressure to avoid breaking seeds',
          'Complete destemming for most white wines',
          'Some producers use whole bunch pressing',
          'Immediate addition of SO2 to prevent oxidation'
        ]
      },
      {
        id: 3,
        title: 'Pressing',
        description: 'Juice is extracted from the grape skins immediately',
        details: 'Pressing separates the juice from skins, seeds, and pulp. This is done immediately for white wines to minimize skin contact and prevent color extraction and excessive tannins.',
        duration: '2-4 hours',
        keyPoints: [
          'Pneumatic or hydraulic press most common',
          'Multiple press fractions of increasing quality',
          'Free-run juice highest quality',
          'Press juice may be kept separate or blended'
        ],
        alternatives: [
          'Whole bunch pressing (Champagne style)',
          'Direct pressing without crushing'
        ]
      },
      {
        id: 4,
        title: 'Juice Clarification',
        description: 'Suspended particles are removed from the juice',
        details: 'Clarification removes grape solids, dead yeast cells, and other particles that could cause off-flavors during fermentation. This step is crucial for clean, crisp white wines.',
        temperature: '4-10°C',
        duration: '12-24 hours',
        keyPoints: [
          'Settling by gravity most common',
          'Cold settling preferred',
          'Racking off clear juice',
          'Enzymatic clarification possible'
        ],
        alternatives: [
          'Centrifugation for speed',
          'Flotation with nitrogen',
          'Filtration'
        ]
      },
      {
        id: 5,
        title: 'Fermentation',
        description: 'Yeast converts sugars to alcohol and CO2',
        details: 'Alcoholic fermentation is the heart of winemaking. Cool temperatures preserve delicate aromas and prevent loss of acidity. Stainless steel tanks are most common for crisp styles.',
        temperature: '12-18°C',
        duration: '2-4 weeks',
        keyPoints: [
          'Commercial or indigenous yeast',
          'Controlled temperature crucial',
          'Stainless steel or oak vessels',
          'Regular monitoring of sugar levels'
        ],
        alternatives: [
          'Oak barrel fermentation for texture',
          'Concrete or clay vessels',
          'Wild yeast fermentation'
        ]
      },
      {
        id: 6,
        title: 'Malolactic Fermentation (Optional)',
        description: 'Bacterial conversion of malic acid to lactic acid',
        details: 'MLF softens acidity and adds complexity. Common for oak-aged whites like Chardonnay, but avoided for crisp styles like Sauvignon Blanc to maintain bright acidity.',
        temperature: '18-22°C',
        duration: '2-6 weeks',
        keyPoints: [
          'Reduces acidity and adds texture',
          'Creates creamy, buttery flavors',
          'Not suitable for all styles',
          'Can be partial or complete'
        ]
      },
      {
        id: 7,
        title: 'Aging & Maturation',
        description: 'Wine develops complexity during aging period',
        details: 'Aging allows flavors to integrate and develop. Stainless steel maintains freshness, while oak adds vanilla, spice, and texture. Lees contact can add creaminess.',
        temperature: '12-15°C',
        duration: '3-18 months',
        keyPoints: [
          'Stainless steel for crisp styles',
          'Oak barrels for complexity',
          'Lees stirring (bâtonnage)',
          'Protection from oxidation'
        ]
      },
      {
        id: 8,
        title: 'Clarification & Stabilization',
        description: 'Final cleaning and stabilization of the wine',
        details: 'Removes any remaining particles and ensures wine stability. Cold stabilization prevents tartrate crystals, while protein stabilization prevents cloudiness.',
        temperature: '-2 to 4°C for cold stabilization',
        duration: '1-2 weeks',
        keyPoints: [
          'Racking to remove sediment',
          'Cold stabilization for tartrates',
          'Protein stabilization with bentonite',
          'Filtration if needed'
        ]
      },
      {
        id: 9,
        title: 'Bottling',
        description: 'Final packaging of the finished wine',
        details: 'Sterile bottling under controlled conditions. SO2 levels adjusted for preservation. Quality control ensures consistency across bottles.',
        duration: '1 day',
        keyPoints: [
          'Sterile bottling line',
          'Final SO2 adjustment',
          'Quality control testing',
          'Cork or screw cap closure'
        ]
      }
    ]
  },
  {
    id: 'red',
    name: 'Red Wine Production',
    color: '#722f37',
    overview: 'Red wine production emphasizes skin contact during fermentation to extract color, tannins, and flavor compounds, creating wines with structure and aging potential.',
    keyCharacteristics: [
      'Extended skin contact during fermentation',
      'Higher fermentation temperatures (25-30°C)',
      'Extraction techniques for color and tannins',
      'Malolactic fermentation standard',
      'Often aged in oak for complexity'
    ],
    steps: [
      {
        id: 1,
        title: 'Grape Reception & Sorting',
        description: 'Red grapes are received and sorted for quality',
        details: 'Red grapes can be harvested at higher sugar levels than whites. Careful sorting is crucial as damaged grapes can lead to off-flavors during the extended skin contact period.',
        temperature: 'Ambient temperature acceptable',
        duration: '1-2 hours',
        keyPoints: [
          'Higher sugar levels than white grapes',
          'Phenolic ripeness important',
          'Removal of damaged or unripe grapes',
          'Assessment of grape condition'
        ]
      },
      {
        id: 2,
        title: 'Destemming & Crushing',
        description: 'Grapes are destemmed and gently crushed',
        details: 'Most red wines are destemmed to avoid harsh stem tannins, though some producers include stems for structure. Crushing releases juice and begins skin contact.',
        duration: '30-60 minutes',
        keyPoints: [
          'Destemming removes harsh tannins',
          'Gentle crushing to avoid seed breakage',
          'Some whole bunch fermentation',
          'Cold maceration may follow'
        ],
        alternatives: [
          'Whole bunch fermentation',
          'Partial destemming',
          'Cold maceration'
        ]
      },
      {
        id: 3,
        title: 'Cold Maceration (Optional)',
        description: 'Pre-fermentation extraction at low temperatures',
        details: 'Cold maceration extracts color and flavor compounds without extracting harsh tannins. This technique enhances fruit character and color intensity.',
        temperature: '4-10°C',
        duration: '3-7 days',
        keyPoints: [
          'Extracts color without tannins',
          'Enhances fruit character',
          'CO2 or SO2 to prevent fermentation',
          'Not suitable for all varieties'
        ]
      },
      {
        id: 4,
        title: 'Alcoholic Fermentation',
        description: 'Fermentation with extended skin contact',
        details: 'The key difference from white wine production. Fermentation occurs with grape skins, extracting color, tannins, and flavor. Higher temperatures promote extraction.',
        temperature: '25-30°C',
        duration: '1-3 weeks',
        keyPoints: [
          'Fermentation on skins',
          'Cap management essential',
          'Regular punch-downs or pump-overs',
          'Temperature control crucial'
        ]
      },
      {
        id: 5,
        title: 'Cap Management',
        description: 'Managing the cap of grape skins during fermentation',
        details: 'CO2 pushes grape skins to the surface, forming a cap. This must be managed to extract color and tannins while preventing bacterial spoilage.',
        duration: 'Throughout fermentation',
        keyPoints: [
          'Punch-downs (pigeage)',
          'Pump-overs (remontage)',
          'Rack-and-return',
          'Prevents bacterial growth on cap'
        ],
        alternatives: [
          'Rotary fermenters',
          'Submerged cap systems',
          'Délestage (rack and return)'
        ]
      },
      {
        id: 6,
        title: 'Pressing',
        description: 'Separating wine from grape skins after fermentation',
        details: 'After alcoholic fermentation, the wine is pressed off the skins. Free-run wine and press wine may be kept separate due to different tannin levels.',
        duration: '2-6 hours',
        keyPoints: [
          'Free-run wine lighter in tannins',
          'Press wine more structured',
          'Multiple press fractions',
          'Blending decisions made later'
        ]
      },
      {
        id: 7,
        title: 'Malolactic Fermentation',
        description: 'Secondary fermentation to soften acidity',
        details: 'Almost universal in red wine production. Reduces acidity, adds complexity, and stabilizes the wine. Usually occurs naturally after alcoholic fermentation.',
        temperature: '18-22°C',
        duration: '2-8 weeks',
        keyPoints: [
          'Reduces harsh acidity',
          'Adds complexity and stability',
          'Usually spontaneous in reds',
          'Creates creamy texture'
        ]
      },
      {
        id: 8,
        title: 'Aging & Maturation',
        description: 'Extended aging develops complexity and structure',
        details: 'Red wines often undergo extended aging to integrate tannins and develop complexity. Oak aging adds vanilla, spice, and structure while allowing slow oxidation.',
        temperature: '12-16°C',
        duration: '6 months - 3 years',
        keyPoints: [
          'Tannin integration',
          'Oak aging common',
          'Slow oxidation beneficial',
          'Lees contact in some styles'
        ],
        alternatives: [
          'Stainless steel for fruit-forward styles',
          'Large format oak',
          'Concrete or amphora aging'
        ]
      },
      {
        id: 9,
        title: 'Blending & Final Adjustments',
        description: 'Combining different lots and making final adjustments',
        details: 'Red wines often benefit from blending different grape varieties, vineyard lots, or barrel selections to achieve balance and complexity.',
        duration: '1-2 weeks',
        keyPoints: [
          'Varietal blending',
          'Vineyard lot blending',
          'Barrel selection',
          'Final acid/tannin balance'
        ]
      },
      {
        id: 10,
        title: 'Clarification & Bottling',
        description: 'Final clarification and bottling',
        details: 'Final clarification removes sediment while preserving structure. Many premium reds are bottled unfiltered to maintain body and complexity.',
        duration: '1-2 weeks',
        keyPoints: [
          'Gentle clarification',
          'Minimal filtration',
          'Egg white fining traditional',
          'Cork closure standard'
        ]
      }
    ]
  },
  {
    id: 'rose',
    name: 'Rosé Wine Production',
    color: '#ffc0cb',
    overview: 'Rosé production involves limited skin contact to achieve the desired pink color while maintaining fresh, crisp characteristics similar to white wine production.',
    keyCharacteristics: [
      'Limited skin contact (2-24 hours)',
      'Cool fermentation like white wines',
      'Fresh, fruit-forward style',
      'Usually no malolactic fermentation',
      'Typically consumed young'
    ],
    steps: [
      {
        id: 1,
        title: 'Grape Selection',
        description: 'Choose appropriate red grape varieties for rosé',
        details: 'Rosé can be made from any red grape variety. Popular choices include Grenache, Syrah, Pinot Noir, and Sangiovese. Grape quality is crucial for delicate rosé wines.',
        keyPoints: [
          'Any red grape variety suitable',
          'Grenache, Syrah, Pinot Noir popular',
          'High acidity preferred',
          'Harvest timing critical'
        ]
      },
      {
        id: 2,
        title: 'Crushing & Destemming',
        description: 'Gentle processing of red grapes',
        details: 'Similar to red wine production but with gentle handling to avoid excessive color extraction. Some producers prefer direct pressing without crushing.',
        duration: '30 minutes',
        keyPoints: [
          'Gentle handling crucial',
          'Avoid excessive extraction',
          'Complete destemming usual',
          'Direct pressing alternative'
        ]
      },
      {
        id: 3,
        title: 'Skin Contact',
        description: 'Brief maceration to extract color',
        details: 'The defining step of rosé production. Skin contact time determines final color intensity. Shorter contact creates pale rosé, longer contact creates deeper color.',
        temperature: '10-15°C',
        duration: '2-24 hours',
        keyPoints: [
          'Color extraction primary goal',
          'Time determines intensity',
          'Temperature affects extraction',
          'Regular color monitoring'
        ],
        alternatives: [
          'Saignée method (bleeding off red wine)',
          'Direct pressing method',
          'Blending (rare, mainly Champagne)'
        ]
      },
      {
        id: 4,
        title: 'Pressing & Juice Separation',
        description: 'Separating the pink juice from grape skins',
        details: 'Gentle pressing extracts the pink-colored juice. The goal is to achieve desired color while avoiding excessive tannin extraction.',
        duration: '2-3 hours',
        keyPoints: [
          'Gentle pressure essential',
          'Color assessment during pressing',
          'Avoid tannin extraction',
          'Multiple press fractions possible'
        ]
      },
      {
        id: 5,
        title: 'Juice Clarification',
        description: 'Removing solids from the pink juice',
        details: 'Similar to white wine clarification. Cold settling is preferred to maintain fresh fruit character and prevent unwanted color changes.',
        temperature: '4-8°C',
        duration: '12-24 hours',
        keyPoints: [
          'Cold settling preferred',
          'Maintains fresh character',
          'Prevents color changes',
          'Gentle handling essential'
        ]
      },
      {
        id: 6,
        title: 'Fermentation',
        description: 'Cool fermentation like white wine',
        details: 'Fermentation follows white wine protocols with cool temperatures to preserve delicate fruit aromas and maintain fresh acidity.',
        temperature: '12-16°C',
        duration: '2-4 weeks',
        keyPoints: [
          'Cool fermentation essential',
          'Preserves fruit character',
          'Stainless steel preferred',
          'Temperature control crucial'
        ]
      },
      {
        id: 7,
        title: 'Post-Fermentation',
        description: 'Completing fermentation and initial aging',
        details: 'MLF is usually avoided to maintain crisp acidity. Brief aging on lees may add texture, but extended aging is uncommon for most rosé styles.',
        duration: '1-3 months',
        keyPoints: [
          'MLF usually avoided',
          'Brief lees contact possible',
          'Maintain fresh character',
          'Quick processing preferred'
        ]
      },
      {
        id: 8,
        title: 'Clarification & Stabilization',
        description: 'Preparing rosé for bottling',
        details: 'Final clarification and stabilization similar to white wine. Cold stabilization prevents tartrate crystals, important for rosé clarity.',
        temperature: '0-4°C',
        duration: '1-2 weeks',
        keyPoints: [
          'Cold stabilization important',
          'Maintain color stability',
          'Gentle clarification',
          'Quick turnaround preferred'
        ]
      },
      {
        id: 9,
        title: 'Bottling',
        description: 'Early bottling to preserve freshness',
        details: 'Rosé is typically bottled within 6 months of harvest to maintain fresh fruit character. Early release captures peak freshness.',
        duration: '1 day',
        keyPoints: [
          'Early bottling preferred',
          'Preserve fresh character',
          'Quality control essential',
          'Often early market release'
        ]
      }
    ]
  },
  {
    id: 'sparkling',
    name: 'Sparkling Wine Production',
    color: '#fff700',
    overview: 'Sparkling wine production involves a secondary fermentation to create CO2, either in bottle (traditional method) or in tank (Charmat method), creating the characteristic bubbles.',
    keyCharacteristics: [
      'Secondary fermentation creates CO2',
      'Traditional method (bottle) or tank method',
      'Extended lees aging for complexity',
      'Riddling and disgorgement (traditional method)',
      'Dosage adjustment for sweetness'
    ],
    steps: [
      {
        id: 1,
        title: 'Base Wine Production',
        description: 'Creating the still base wine',
        details: 'Base wines for sparkling production are made using white wine techniques, maintaining high acidity and neutral character. Multiple vineyard lots often blended.',
        temperature: '12-16°C',
        duration: '2-4 weeks',
        keyPoints: [
          'High acidity essential',
          'Neutral flavor profile',
          'Multiple lots for blending',
          'MLF optional depending on style'
        ]
      },
      {
        id: 2,
        title: 'Blending (Assemblage)',
        description: 'Creating the final blend before secondary fermentation',
        details: 'Master blender combines base wines from different varieties, vineyards, and vintages to achieve house style. This is crucial for consistency.',
        duration: '2-4 weeks',
        keyPoints: [
          'House style consistency',
          'Variety blending',
          'Vintage blending (NV)',
          'Reserve wine integration'
        ]
      },
      {
        id: 3,
        title: 'Tirage',
        description: 'Adding yeast and sugar for secondary fermentation',
        details: 'A mixture of yeast, sugar, and nutrients (liqueur de tirage) is added to create secondary fermentation. This step determines final pressure.',
        duration: '1 day',
        keyPoints: [
          'Precise sugar calculation',
          'Special yeast strains',
          'Creates 6 atmospheres pressure',
          'Immediate bottling follows'
        ]
      },
      {
        id: 4,
        title: 'Secondary Fermentation',
        description: 'In-bottle or in-tank fermentation creating CO2',
        details: 'Secondary fermentation occurs in sealed containers, trapping CO2. Traditional method uses bottles, tank method uses pressurized tanks.',
        temperature: '12-14°C',
        duration: '6-8 weeks',
        keyPoints: [
          'CO2 trapped in container',
          'Bottle or tank method',
          'Cool temperature essential',
          'Creates wine pressure'
        ],
        alternatives: [
          'Traditional method (bottle)',
          'Tank method (Charmat)',
          'Transfer method'
        ]
      },
      {
        id: 5,
        title: 'Lees Aging',
        description: 'Extended aging on dead yeast cells',
        details: 'Extended contact with dead yeast (lees) creates complexity, creamy texture, and brioche-like flavors. Minimum 12 months for Champagne.',
        temperature: '10-12°C',
        duration: '12 months - 10+ years',
        keyPoints: [
          'Creates complexity and texture',
          'Brioche, toast flavors',
          'Minimum aging requirements',
          'Premium wines aged longer'
        ]
      },
      {
        id: 6,
        title: 'Riddling (Remuage)',
        description: 'Consolidating lees in bottle neck',
        details: 'Traditional method bottles are gradually rotated and tilted to move sediment into the neck. Modern gyropalettes automate this process.',
        duration: '2-8 weeks',
        keyPoints: [
          'Consolidates sediment',
          'Traditional pupitres or gyropalettes',
          'Gradual rotation and tilting',
          'Prepares for disgorgement'
        ]
      },
      {
        id: 7,
        title: 'Disgorgement',
        description: 'Removing the lees sediment',
        details: 'The neck is frozen and the plug of sediment is expelled under pressure. Modern technique is efficient and minimizes wine loss.',
        duration: '1 day',
        keyPoints: [
          'Neck freezing technique',
          'Expels frozen sediment plug',
          'Minimal wine loss',
          'Quick and efficient'
        ]
      },
      {
        id: 8,
        title: 'Dosage',
        description: 'Adding final sweetness adjustment',
        details: 'A mixture of wine and sugar (liqueur d\'expédition) adjusts final sweetness level. Dosage level determines style from Brut Nature to Demi-Sec.',
        duration: '1 day',
        keyPoints: [
          'Determines sweetness level',
          'Brut, Extra Brut, Demi-Sec',
          'House style consistency',
          'Final flavor adjustment'
        ]
      },
      {
        id: 9,
        title: 'Final Corking & Aging',
        description: 'Final closure and post-disgorgement aging',
        details: 'Special mushroom cork and wire cage secure the bottle. Brief aging allows dosage to integrate before release.',
        duration: '3-6 months',
        keyPoints: [
          'Mushroom cork and cage',
          'Dosage integration',
          'Quality control',
          'Final packaging'
        ]
      }
    ]
  },
  {
    id: 'fortified',
    name: 'Fortified Wine Production',
    color: '#8b4513',
    overview: 'Fortified wine production involves adding grape spirit to stop fermentation and increase alcohol content, creating wines with unique flavors and extended aging potential.',
    keyCharacteristics: [
      'Addition of grape spirit (brandy)',
      'Higher alcohol content (15-22%)',
      'Stopped or completed fermentation',
      'Unique aging systems (Solera, etc.)',
      'Extended aging potential'
    ],
    steps: [
      {
        id: 1,
        title: 'Grape Selection & Processing',
        description: 'Choosing appropriate grapes for fortification style',
        details: 'Different fortified wine styles require specific grape varieties and processing. Port uses red grapes, Sherry uses Palomino, Madeira uses noble varieties.',
        keyPoints: [
          'Style-specific varieties',
          'Port: red grapes (Touriga Nacional)',
          'Sherry: Palomino Fino',
          'Madeira: Sercial, Verdelho, Bual, Malmsey'
        ]
      },
      {
        id: 2,
        title: 'Initial Fermentation',
        description: 'Beginning alcoholic fermentation',
        details: 'Fermentation begins normally but may be stopped early (Port) or allowed to complete (Sherry). Timing of fortification determines sweetness.',
        temperature: '20-28°C',
        duration: '2-7 days',
        keyPoints: [
          'Normal fermentation start',
          'Early stopping for sweet styles',
          'Complete for dry styles',
          'Timing determines sweetness'
        ]
      },
      {
        id: 3,
        title: 'Fortification',
        description: 'Adding grape spirit to stop fermentation',
        details: 'High-proof grape spirit (77% alcohol) is added to stop fermentation and increase alcohol content. Timing determines final sweetness level.',
        duration: '1 day',
        keyPoints: [
          '77% grape spirit added',
          'Stops fermentation',
          'Increases alcohol to 15-20%',
          'Timing affects sweetness'
        ],
        alternatives: [
          'Early fortification (sweet wines)',
          'Late fortification (dry wines)',
          'Multiple additions'
        ]
      },
      {
        id: 4,
        title: 'Initial Aging',
        description: 'First stage of maturation',
        details: 'Initial aging varies by style. Port ages in large vats or barrels, Sherry develops under flor or oxidatively, Madeira undergoes heat treatment.',
        duration: '1-3 years',
        keyPoints: [
          'Style-specific aging',
          'Port: large vats or barrels',
          'Sherry: flor development or oxidation',
          'Madeira: estufagem (heating)'
        ]
      },
      {
        id: 5,
        title: 'Classification & Selection',
        description: 'Determining final style and aging path',
        details: 'Wines are tasted and classified for their aging potential and style. This determines whether they enter solera systems, extended barrel aging, or bottling.',
        duration: 'Ongoing',
        keyPoints: [
          'Tasting and assessment',
          'Style determination',
          'Aging path selection',
          'Quality classification'
        ]
      },
      {
        id: 6,
        title: 'Extended Aging',
        description: 'Long-term maturation in specialized systems',
        details: 'Extended aging develops complexity. Sherry uses solera system, Port ages in barrel or bottle, Madeira uses canteiro aging for premium wines.',
        duration: '3-50+ years',
        keyPoints: [
          'Develops complexity',
          'Sherry: solera system',
          'Port: barrel or bottle aging',
          'Madeira: canteiro aging'
        ],
        alternatives: [
          'Solera system (Sherry)',
          'Barrel aging (Port, Madeira)',
          'Bottle aging (Vintage Port)'
        ]
      },
      {
        id: 7,
        title: 'Blending',
        description: 'Creating consistent house styles',
        details: 'Master blenders combine wines of different ages and characteristics to maintain house style consistency. This is especially important for solera systems.',
        duration: 'Ongoing',
        keyPoints: [
          'Maintains consistency',
          'House style preservation',
          'Age blending',
          'Quality standardization'
        ]
      },
      {
        id: 8,
        title: 'Final Preparation',
        description: 'Preparing fortified wine for market',
        details: 'Final clarification, possible filtration, and bottling. Some styles require special handling to maintain character.',
        duration: '1-2 weeks',
        keyPoints: [
          'Gentle clarification',
          'Minimal processing',
          'Style preservation',
          'Quality control'
        ]
      },
      {
        id: 9,
        title: 'Bottling & Release',
        description: 'Final packaging and market release',
        details: 'Bottling under controlled conditions. Many fortified wines improve with bottle aging, while others are ready for immediate consumption.',
        duration: '1 day',
        keyPoints: [
          'Controlled bottling',
          'Age statement accuracy',
          'Cork vs. synthetic closure',
          'Market timing'
        ]
      }
    ]
  },
  {
    id: 'carbonic',
    name: 'Carbonic Maceration',
    color: '#9b59b6',
    overview: 'Carbonic maceration is a unique winemaking technique where whole grape clusters ferment in a carbon dioxide-rich environment, creating distinctive fruity, aromatic wines with soft tannins.',
    keyCharacteristics: [
      'Whole bunch fermentation without crushing',
      'CO2-rich anaerobic environment',
      'Intracellular fermentation inside grapes',
      'Distinctive banana and candy aromas',
      'Soft tannins and bright color'
    ],
    steps: [
      {
        id: 1,
        title: 'Harvest & Selection',
        description: 'Careful hand-harvesting of whole clusters',
        details: 'Grapes must be hand-harvested to keep clusters intact. Machine harvesting would crush grapes, preventing true carbonic maceration. Gamay is the classic variety.',
        temperature: 'Cool morning harvest',
        duration: '1 day',
        keyPoints: [
          'Hand harvest essential',
          'Whole clusters required',
          'No crushing or destemming',
          'Perfect grape condition crucial'
        ]
      },
      {
        id: 2,
        title: 'Tank Preparation',
        description: 'Creating CO2-rich environment',
        details: 'Sealed tank is filled with CO2 to create anaerobic conditions. This prevents normal fermentation and triggers intracellular fermentation within the grapes.',
        temperature: '15-20°C',
        duration: '2-4 hours',
        keyPoints: [
          'Sealed fermentation vessel',
          'CO2 blanket essential',
          'Excludes oxygen completely',
          'May add dry ice or inject CO2'
        ]
      },
      {
        id: 3,
        title: 'Loading Whole Clusters',
        description: 'Placing intact grape clusters in CO2 environment',
        details: 'Whole clusters are gently placed in the CO2-filled tank. Bottom grapes may crush under weight, starting some traditional fermentation.',
        duration: '2-4 hours',
        keyPoints: [
          'Gentle handling crucial',
          'Minimize grape damage',
          'Layer clusters carefully',
          'Bottom layer may crush naturally'
        ],
        alternatives: [
          'Semi-carbonic (partial crushing)',
          'Traditional with carbonic portion'
        ]
      },
      {
        id: 4,
        title: 'Intracellular Fermentation',
        description: 'Fermentation inside intact grapes',
        details: 'In the absence of oxygen, enzymes inside the grapes convert sugar to alcohol without yeast. This creates unique flavor compounds including distinctive esters.',
        temperature: '30-35°C',
        duration: '5-15 days',
        keyPoints: [
          'Anaerobic metabolism',
          'No yeast involvement initially',
          'Creates unique esters',
          'Produces 1-2% alcohol'
        ]
      },
      {
        id: 5,
        title: 'Berry Breakdown',
        description: 'Grapes begin to break down and release juice',
        details: 'As intracellular fermentation progresses, grape cells die and berries begin to break down, releasing their juice which collects at the bottom.',
        temperature: '30-35°C',
        duration: 'During fermentation',
        keyPoints: [
          'Natural grape breakdown',
          'Juice accumulates at bottom',
          'Color extraction begins',
          'Traditional fermentation starts in juice'
        ]
      },
      {
        id: 6,
        title: 'Pressing',
        description: 'Separating wine from remaining solids',
        details: 'After carbonic phase, grapes are pressed to extract remaining juice. Free-run and press fractions may be kept separate due to different characteristics.',
        duration: '4-6 hours',
        keyPoints: [
          'Gentle pressing important',
          'Free-run wine fruitiest',
          'Press wine adds structure',
          'May blend fractions'
        ]
      },
      {
        id: 7,
        title: 'Completing Fermentation',
        description: 'Traditional yeast fermentation completes',
        details: 'The pressed juice completes fermentation with yeast in traditional fashion. This converts remaining sugars to alcohol.',
        temperature: '18-25°C',
        duration: '1-2 weeks',
        keyPoints: [
          'Yeast completes fermentation',
          'Lower temperature than carbonic phase',
          'Preserves fruit character',
          'May add cultured yeast'
        ]
      },
      {
        id: 8,
        title: 'Maturation',
        description: 'Brief aging to integrate flavors',
        details: 'Carbonic wines are typically aged briefly to integrate flavors while maintaining fresh fruit character. Extended aging is rare.',
        temperature: '12-15°C',
        duration: '2-6 months',
        keyPoints: [
          'Brief aging only',
          'Stainless steel usual',
          'Preserve fruit character',
          'No oak typically'
        ]
      },
      {
        id: 9,
        title: 'Early Bottling',
        description: 'Quick bottling to preserve freshness',
        details: 'Carbonic wines are bottled young to capture their distinctive fresh, fruity character. Many are released within months of harvest.',
        duration: '1 day',
        keyPoints: [
          'Early bottling essential',
          'Captures fresh fruit',
          'Light filtration only',
          'Quick market release'
        ]
      }
    ]
  },
  {
    id: 'sweet',
    name: 'Sweet Wine Production',
    color: '#ffd700',
    overview: 'Sweet wine production concentrates grape sugars through various methods including late harvest, noble rot (botrytis), and drying grapes, creating lusciously sweet wines with balancing acidity.',
    keyCharacteristics: [
      'Multiple concentration methods',
      'High residual sugar balanced by acidity',
      'Noble rot creates unique flavors',
      'Labor-intensive production',
      'Lower yields, higher quality'
    ],
    steps: [
      {
        id: 1,
        title: 'Grape Sugar Concentration',
        description: 'Various methods to concentrate grape sugars',
        details: 'Sweet wines require concentrated grape sugars. Methods include late harvest (extended ripening), noble rot infection (botrytis), or drying grapes (passito/straw wines).',
        temperature: 'Varies by method',
        duration: 'Weeks to months',
        keyPoints: [
          'Late harvest - extended hang time',
          'Noble rot - botrytis cinerea',
          'Dried grapes - passito method',
          'Frozen grapes - ice wine'
        ],
        alternatives: [
          'Late harvest',
          'Botrytis/Noble rot',
          'Appassimento (drying)',
          'Cryoextraction (freezing)'
        ]
      },
      {
        id: 2,
        title: 'Selective Harvesting',
        description: 'Multiple passes through vineyard',
        details: 'Sweet wine grapes often require multiple harvest passes to select only perfectly ripe or botrytized grapes. This is extremely labor-intensive.',
        duration: 'Several weeks',
        keyPoints: [
          'Hand harvesting essential',
          'Multiple vineyard passes',
          'Berry by berry selection',
          'Timing critical for botrytis'
        ]
      },
      {
        id: 3,
        title: 'Gentle Processing',
        description: 'Careful handling of concentrated grapes',
        details: 'Concentrated grapes require gentle handling. Botrytized grapes are particularly fragile. Pressing must extract the thick, concentrated juice.',
        duration: '4-8 hours',
        keyPoints: [
          'Very gentle pressing',
          'Extended press cycles',
          'Low juice yields',
          'Thick, viscous must'
        ]
      },
      {
        id: 4,
        title: 'Must Clarification',
        description: 'Clarifying the concentrated juice',
        details: 'The thick, concentrated must requires special clarification. High sugar content makes settling difficult. Extended time needed.',
        temperature: '4-8°C',
        duration: '24-48 hours',
        keyPoints: [
          'Difficult clarification',
          'High viscosity challenging',
          'Extended settling time',
          'May need enzyme assistance'
        ]
      },
      {
        id: 5,
        title: 'Slow Fermentation',
        description: 'Extended fermentation of high-sugar must',
        details: 'High sugar levels stress yeast, causing slow fermentation. May stop naturally leaving residual sugar, or be stopped by chilling or fortification.',
        temperature: '12-18°C',
        duration: '1-6 months',
        keyPoints: [
          'Very slow fermentation',
          'High sugar stresses yeast',
          'May stop naturally',
          'Or stopped by winemaker'
        ]
      },
      {
        id: 6,
        title: 'Fermentation Arrest',
        description: 'Stopping fermentation to retain sweetness',
        details: 'Fermentation is stopped while residual sugar remains. Methods include chilling, sulfur addition, or sterile filtration. Balance with acidity crucial.',
        temperature: '0-4°C',
        duration: '1-2 days',
        keyPoints: [
          'Multiple stopping methods',
          'Chilling most common',
          'SO2 addition',
          'Sterile filtration possible'
        ]
      },
      {
        id: 7,
        title: 'Maturation',
        description: 'Aging to develop complexity',
        details: 'Sweet wines often benefit from extended aging. Oak aging common for premium styles. Develops complexity while maintaining fruit character.',
        temperature: '10-14°C',
        duration: '6 months - 3 years',
        keyPoints: [
          'Oak aging common',
          'Develops complexity',
          'Maintains fruit/sweetness balance',
          'Some styles age decades'
        ]
      },
      {
        id: 8,
        title: 'Stabilization',
        description: 'Ensuring stability of sweet wine',
        details: 'Sweet wines require careful stabilization to prevent refermentation. Sterile filtration often necessary. SO2 levels carefully managed.',
        temperature: '0-4°C',
        duration: '2-4 weeks',
        keyPoints: [
          'Prevent refermentation',
          'Sterile filtration common',
          'SO2 management crucial',
          'Microbiological stability'
        ]
      },
      {
        id: 9,
        title: 'Bottling',
        description: 'Careful bottling of sweet wines',
        details: 'Sterile bottling conditions essential to prevent refermentation. Quality corks important for age-worthy styles. Many improve with bottle age.',
        duration: '1 day',
        keyPoints: [
          'Sterile bottling essential',
          'Quality closures important',
          'Age-worthy styles',
          'Cellaring potential decades'
        ]
      }
    ]
  },
  {
    id: 'orange',
    name: 'Orange Wine Production',
    color: '#ff8c00',
    overview: 'Orange wine (skin-contact white wine) is made by fermenting white grapes with extended skin contact, like red wine production, creating unique amber-colored wines with tannin structure.',
    keyCharacteristics: [
      'White grapes with skin contact',
      'Amber/orange color from phenolics',
      'Tannin structure unusual for whites',
      'Ancient winemaking method revived',
      'Complex, savory flavor profile'
    ],
    steps: [
      {
        id: 1,
        title: 'White Grape Selection',
        description: 'Choosing appropriate white varieties',
        details: 'Any white grape can make orange wine, but thick-skinned varieties work best. Pinot Grigio, Ribolla Gialla, and Rkatsiteli are traditional choices.',
        keyPoints: [
          'Thick-skinned varieties preferred',
          'Phenolic ripeness important',
          'Traditional varieties excel',
          'Organic grapes common'
        ]
      },
      {
        id: 2,
        title: 'Crushing with Stems (Optional)',
        description: 'Gentle crushing, often with stems',
        details: 'Unlike white wine, grapes are crushed but not pressed. Some producers include stems for additional structure and tannins, similar to whole-bunch red fermentation.',
        duration: '30-60 minutes',
        keyPoints: [
          'No immediate pressing',
          'Stems often included',
          'Gentle crushing only',
          'Begins skin contact immediately'
        ],
        alternatives: [
          'Whole bunch fermentation',
          'Partial destemming',
          'Complete destemming'
        ]
      },
      {
        id: 3,
        title: 'Extended Skin Contact',
        description: 'White grapes ferment on skins',
        details: 'The defining characteristic of orange wine. White grapes ferment with skins for days to months, extracting color, tannins, and complex flavors.',
        temperature: '20-25°C',
        duration: '4 days - 6 months',
        keyPoints: [
          'Extended maceration period',
          'Extracts phenolics and tannins',
          'Creates amber/orange color',
          'Develops complex flavors'
        ]
      },
      {
        id: 4,
        title: 'Fermentation Vessel Choice',
        description: 'Traditional vessels often used',
        details: 'Many orange wine producers use traditional vessels like Georgian qvevri (clay amphora), concrete eggs, or old oak. These allow micro-oxidation.',
        temperature: '18-25°C',
        duration: '2-8 weeks',
        keyPoints: [
          'Qvevri traditional in Georgia',
          'Concrete eggs popular',
          'Old oak barrels common',
          'Natural temperature control'
        ]
      },
      {
        id: 5,
        title: 'Cap Management',
        description: 'Managing the floating grape skins',
        details: 'Like red wine, a cap of skins forms during fermentation. Gentle punch-downs or pump-overs extract flavor while avoiding harsh tannins.',
        duration: 'Throughout fermentation',
        keyPoints: [
          'Gentle extraction preferred',
          'Manual punch-downs common',
          'Avoid over-extraction',
          'Natural cap management in amphora'
        ]
      },
      {
        id: 6,
        title: 'Pressing',
        description: 'Separating wine from skins after maceration',
        details: 'After extended skin contact, wine is pressed off skins. Timing determines tannin levels and color intensity. Gentle pressing preserves quality.',
        duration: '4-6 hours',
        keyPoints: [
          'Timing crucial for style',
          'Gentle pressing important',
          'Free-run vs press fractions',
          'Tannin management'
        ]
      },
      {
        id: 7,
        title: 'Extended Aging',
        description: 'Long maturation period typical',
        details: 'Orange wines often undergo extended aging to integrate tannins and develop complexity. Traditional vessels or neutral oak common.',
        temperature: '12-16°C',
        duration: '6 months - 3 years',
        keyPoints: [
          'Extended aging common',
          'Tannin integration important',
          'Oxidative aging acceptable',
          'Develops savory complexity'
        ]
      },
      {
        id: 8,
        title: 'Minimal Intervention',
        description: 'Natural winemaking approach',
        details: 'Many orange wine producers follow minimal intervention philosophy. Limited SO2, no fining or filtration, allowing natural stability.',
        keyPoints: [
          'Minimal SO2 use',
          'No fining common',
          'Unfiltered typical',
          'Natural stabilization'
        ]
      },
      {
        id: 9,
        title: 'Bottling',
        description: 'Bottling with minimal processing',
        details: 'Orange wines are often bottled unfiltered and unfined. Some sediment normal. Natural cork closures common for traditional approach.',
        duration: '1 day',
        keyPoints: [
          'Minimal processing',
          'Sediment acceptable',
          'Natural corks preferred',
          'Continue evolving in bottle'
        ]
      }
    ]
  },
  {
    id: 'natural',
    name: 'Natural Wine Production',
    color: '#90ee90',
    overview: 'Natural wine production emphasizes minimal intervention, using organic/biodynamic grapes, native yeasts, and avoiding additives to create wines that express terroir authentically.',
    keyCharacteristics: [
      'Organic or biodynamic viticulture',
      'Native yeast fermentation',
      'Minimal to no sulfur additions',
      'No additives or adjustments',
      'Unfiltered and unfined wines'
    ],
    steps: [
      {
        id: 1,
        title: 'Organic/Biodynamic Farming',
        description: 'Chemical-free vineyard management',
        details: 'Natural wines start in the vineyard with organic or biodynamic farming. No synthetic pesticides, herbicides, or fertilizers. Healthy soil microbiome essential.',
        duration: 'Year-round',
        keyPoints: [
          'No synthetic chemicals',
          'Biodiversity encouraged',
          'Soil health priority',
          'Manual vineyard work'
        ]
      },
      {
        id: 2,
        title: 'Hand Harvesting',
        description: 'Careful selection of healthy grapes',
        details: 'Hand harvesting allows selection of only healthy grapes. Lower yields from organic farming often mean better grape quality and concentration.',
        duration: '1-3 days',
        keyPoints: [
          'Hand harvest essential',
          'Healthy grapes only',
          'Lower yields typical',
          'Perfect ripeness crucial'
        ]
      },
      {
        id: 3,
        title: 'Native Yeast Fermentation',
        description: 'Spontaneous fermentation with indigenous yeasts',
        details: 'No commercial yeast added. Fermentation relies on native yeasts from vineyard and winery. Creates unique flavor profiles but requires careful monitoring.',
        temperature: 'Ambient',
        duration: '2-8 weeks',
        keyPoints: [
          'No cultured yeast',
          'Spontaneous fermentation',
          'Unique flavor development',
          'Slower, less predictable'
        ]
      },
      {
        id: 4,
        title: 'Minimal Temperature Control',
        description: 'Allowing natural temperature variations',
        details: 'Many natural winemakers avoid temperature control, allowing fermentation to follow ambient conditions. This can create more complex flavors.',
        keyPoints: [
          'Ambient temperatures',
          'Natural variations accepted',
          'May stress some yeasts',
          'Complex flavor development'
        ]
      },
      {
        id: 5,
        title: 'No Additives',
        description: 'Avoiding all winemaking additives',
        details: 'Natural wines avoid additives like acid, sugar, tannins, enzymes, or nutrients. Only minimal SO2 at bottling, if any. Wine must self-stabilize.',
        keyPoints: [
          'No acidification/deacidification',
          'No chaptalization',
          'No commercial nutrients',
          'Minimal or no SO2'
        ]
      },
      {
        id: 6,
        title: 'Extended Lees Contact',
        description: 'Long aging on lees for stability',
        details: 'Extended lees contact helps naturally stabilize wine and adds complexity. Lees provide natural antioxidants, reducing need for SO2.',
        duration: '6-24 months',
        keyPoints: [
          'Natural stabilization',
          'Adds complexity',
          'Antioxidant protection',
          'No stirring typical'
        ]
      },
      {
        id: 7,
        title: 'No Fining or Filtration',
        description: 'Allowing natural clarification',
        details: 'Natural wines rely on time and gravity for clarification. No fining agents or filtration used. Results in cloudy appearance sometimes.',
        duration: '3-12 months',
        keyPoints: [
          'Gravity clarification only',
          'No fining agents',
          'No filtration',
          'Cloudiness acceptable'
        ]
      },
      {
        id: 8,
        title: 'Minimal SO2 at Bottling',
        description: 'Very low or no sulfur additions',
        details: 'If SO2 is used at all, only minimal amounts at bottling. Many natural wines have no added SO2. Requires perfect fruit and sanitation.',
        keyPoints: [
          'Maximum 30-40 ppm total SO2',
          'Often zero added',
          'Requires perfect conditions',
          'More fragile wines'
        ]
      },
      {
        id: 9,
        title: 'Living Wine Bottling',
        description: 'Bottling wines that continue evolving',
        details: 'Natural wines are often "living" - containing active yeasts and bacteria. May continue evolving in bottle. Proper storage crucial.',
        duration: '1 day',
        keyPoints: [
          'May contain live cultures',
          'Continues evolving',
          'Temperature-sensitive',
          'Unique bottle variation'
        ]
      }
    ]
  },
  {
    id: 'icewine',
    name: 'Ice Wine Production',
    color: '#87ceeb',
    overview: 'Ice wine (Eiswein) production involves harvesting and pressing naturally frozen grapes, concentrating sugars and acids to create intensely sweet dessert wines with vibrant acidity.',
    keyCharacteristics: [
      'Grapes frozen on the vine',
      'Harvest at -8°C or below',
      'Pressed while frozen',
      'Extremely concentrated juice',
      'High sugar, high acidity balance'
    ],
    steps: [
      {
        id: 1,
        title: 'Vineyard Preparation',
        description: 'Protecting grapes for winter harvest',
        details: 'Grapes are left on vines into winter. Nets protect from birds. Healthy grapes essential as they must survive months of weather. Riesling and Vidal common varieties.',
        duration: 'September-December',
        keyPoints: [
          'Bird netting essential',
          'Healthy grapes required',
          'Cold-climate regions only',
          'Risk of total crop loss'
        ]
      },
      {
        id: 2,
        title: 'Waiting for Freeze',
        description: 'Monitoring for ideal harvest conditions',
        details: 'Grapes must freeze naturally on the vine. Temperature must be -8°C or colder. Timing critical - too early and sugars too low, too late risks crop loss.',
        temperature: '-8°C or below',
        duration: 'November-January',
        keyPoints: [
          'Natural freezing required',
          'Minimum -8°C by law',
          'Weather dependent',
          'Multiple freeze-thaw cycles ideal'
        ]
      },
      {
        id: 3,
        title: 'Night Harvesting',
        description: 'Harvesting frozen grapes quickly',
        details: 'Harvest happens at night or early morning when grapes are frozen solid. Speed essential to maintain frozen state. All hand-harvested.',
        temperature: '-8°C to -12°C',
        duration: '4-8 hours',
        keyPoints: [
          'Night harvest mandatory',
          'Grapes must stay frozen',
          'Hand harvest only',
          'Race against sunrise'
        ]
      },
      {
        id: 4,
        title: 'Immediate Pressing',
        description: 'Pressing frozen grapes',
        details: 'Frozen grapes pressed immediately while still frozen. Ice crystals remain in press, only concentrated juice extracted. Extremely low yields.',
        temperature: 'Below 0°C',
        duration: '6-12 hours',
        keyPoints: [
          'Press while frozen solid',
          'Ice stays in press',
          'Only concentrated juice flows',
          'Yields only 10-20% normal'
        ]
      },
      {
        id: 5,
        title: 'Concentrated Must',
        description: 'Collecting ultra-concentrated juice',
        details: 'The extracted juice is extremely concentrated - sugar levels 35-45 Brix common. High acidity balances sweetness. Viscous, syrup-like consistency.',
        keyPoints: [
          'Sugar concentration 35-45 Brix',
          'High acidity crucial',
          'Syrup consistency',
          'Small volumes only'
        ]
      },
      {
        id: 6,
        title: 'Slow Fermentation',
        description: 'Extended fermentation of concentrated must',
        details: 'Extremely high sugar levels make fermentation very slow. Special cold-tolerant yeasts needed. May take months to reach 9-11% alcohol.',
        temperature: '10-15°C',
        duration: '3-6 months',
        keyPoints: [
          'Very slow process',
          'Cold-tolerant yeasts',
          'Stops at 9-11% alcohol',
          'High residual sugar remains'
        ]
      },
      {
        id: 7,
        title: 'Clarification',
        description: 'Natural settling of wine',
        details: 'Ice wine clarifies slowly due to high sugar content. Cold settling and racking used. Filtration avoided to preserve concentration.',
        temperature: '0-4°C',
        duration: '2-6 months',
        keyPoints: [
          'Slow natural settling',
          'Multiple rackings',
          'Minimal intervention',
          'Preserve concentration'
        ]
      },
      {
        id: 8,
        title: 'Aging',
        description: 'Developing complexity',
        details: 'Ice wines typically aged in stainless steel to preserve fruit purity. Some producers use neutral oak. Develops complexity while maintaining freshness.',
        temperature: '8-12°C',
        duration: '6-12 months',
        keyPoints: [
          'Stainless steel typical',
          'Preserves fruit character',
          'Neutral oak possible',
          'Limited aging needed'
        ]
      },
      {
        id: 9,
        title: 'Bottling',
        description: 'Careful bottling of precious wine',
        details: 'Usually bottled in small formats (375ml) due to intensity and value. Can age for decades due to high sugar and acid. Proper closure crucial.',
        duration: '1 day',
        keyPoints: [
          'Small bottle formats',
          'Exceptional aging potential',
          'Quality closures essential',
          'Limited production volumes'
        ]
      }
    ]
  }
];

export default winemakingProcesses;