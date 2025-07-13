'use client'

import { WineRegion } from '@/data/wineCountries'

interface RegionDetailsProps {
  region: WineRegion
  onBack: () => void
}

export default function RegionDetails({ region, onBack }: RegionDetailsProps) {
  const getRegionEmoji = (nickname: string) => {
    switch (nickname) {
      case 'BUBBLES': return '🥂'
      case 'PINOT': return '🍷'
      case 'BLEND': return '🍾'
      case 'RIVER': return '🌊'
      case 'SYRAH': return '🔥'
      case 'NOBLE': return '👑'
      case 'SLATE': return '🪨'
      case 'NEBBIOLO': return '🌫️'
      case 'SANGIOVESE': return '🍒'
      case 'TEMPRANILLO': return '⏰'
      case 'TINTO': return '🍇'
      case 'SHIRAZ': return '🌶️'
      case 'SEMILLON': return '🐝'
      case 'CABERNET': return '💎'
      default: return '🍷'
    }
  }

  const getClimateEmoji = (climate: string) => {
    if (climate.includes('cool') || climate.includes('Cool')) return '❄️'
    if (climate.includes('continental') || climate.includes('Continental')) return '🌡️'
    if (climate.includes('maritime') || climate.includes('Maritime')) return '🌊'
    if (climate.includes('mediterranean') || climate.includes('Mediterranean')) return '☀️'
    if (climate.includes('desert') || climate.includes('Desert')) return '🏜️'
    return '🌡️'
  }

  return (
    <div className="wine-region-details">
      {/* Header with Back Button */}
      <div className="wine-region-details-header">
        <button onClick={onBack} className="wine-back-button">
          ← Back to Regions
        </button>
        
        <div className="wine-region-title-section">
          <div className="wine-region-title-main">
            <h1 className="wine-heading-1">
              {getRegionEmoji(region.nickname)} {region.name}
            </h1>
            <div className="wine-region-location">
              <span className="wine-region-nickname-large">&quot;{region.nickname}&quot;</span>
              <span className="wine-region-location-badge">{region.location}</span>
            </div>
          </div>
          
          <div className="wine-region-memory-main">
            <span className="wine-memory-icon">🧠</span>
            <span className="wine-memory-text">
              {region.memoryTricks[0] || `Remember ${region.name} as "${region.nickname}"`}
            </span>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="wine-region-content-grid">
        {/* Memory Tricks Section - Most Important */}
        <div className="wine-region-section wine-memory-section">
          <h2 className="wine-heading-3">🧠 Memory Aids & Study Tricks</h2>
          
          <div className="wine-memory-tricks-comprehensive">
            {region.memoryTricks.map((trick, index) => (
              <div key={index} className="wine-memory-trick-card">
                <span className="wine-memory-bullet">💡</span>
                <span className="wine-memory-trick-text">{trick}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Acronym Quick Reference */}
        <div className="wine-region-section wine-acronyms-section">
          <h2 className="wine-heading-3">🔤 Acronym Quick Reference</h2>
          
          <div className="wine-acronyms-comprehensive">
            <div className="wine-acronym-major">
              <span className="wine-acronym-major-label">Climate:</span>
              <span className="wine-acronym-major-value">{region.climateAcronym}</span>
            </div>
            <div className="wine-acronym-major">
              <span className="wine-acronym-major-label">Soils:</span>
              <span className="wine-acronym-major-value">{region.soilAcronym}</span>
            </div>
            <div className="wine-acronym-major">
              <span className="wine-acronym-major-label">White Grapes:</span>
              <span className="wine-acronym-major-value">{region.grapeAcronyms.white}</span>
            </div>
            <div className="wine-acronym-major">
              <span className="wine-acronym-major-label">Red Grapes:</span>
              <span className="wine-acronym-major-value">{region.grapeAcronyms.red}</span>
            </div>
            <div className="wine-acronym-major">
              <span className="wine-acronym-major-label">Characteristics:</span>
              <span className="wine-acronym-major-value">{region.characteristicsAcronym}</span>
            </div>
            <div className="wine-acronym-major">
              <span className="wine-acronym-major-label">Sub-regions:</span>
              <span className="wine-acronym-major-value">{region.subRegionAcronym}</span>
            </div>
          </div>
        </div>

        {/* Climate & Terroir Section */}
        <div className="wine-region-section wine-climate-section">
          <h2 className="wine-heading-3">
            {getClimateEmoji(region.climate)} Climate & Terroir
          </h2>
          
          <div className="wine-climate-card">
            <div className="wine-climate-main">
              <span className="wine-climate-label">Climate Type:</span>
              <span className="wine-climate-value">{region.climate}</span>
              <span className="wine-climate-acronym">({region.climateAcronym})</span>
            </div>
            
            <div className="wine-soils-section">
              <h4 className="wine-heading-5">🪨 Soil Types ({region.soilAcronym}):</h4>
              <div className="wine-soil-tags">
                {region.soils.map((soil, index) => (
                  <span key={index} className="wine-soil-tag">
                    {soil}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Grape Varieties Section */}
        <div className="wine-region-section wine-grapes-section">
          <h2 className="wine-heading-3">🍇 Key Grape Varieties</h2>
          
          <div className="wine-grapes-grid">
            <div className="wine-grape-category">
              <h4 className="wine-heading-5">🤍 White Grapes</h4>
              <div className="wine-grape-list">
                {region.keyGrapes.white.length > 0 ? (
                  region.keyGrapes.white.map((grape, index) => (
                    <span key={index} className="wine-grape-badge wine-white-grape">
                      {grape}
                    </span>
                  ))
                ) : (
                  <span className="wine-no-grapes">No white grapes specified</span>
                )}
              </div>
            </div>
            
            <div className="wine-grape-category">
              <h4 className="wine-heading-5">❤️ Red Grapes</h4>
              <div className="wine-grape-list">
                {region.keyGrapes.red.length > 0 ? (
                  region.keyGrapes.red.map((grape, index) => (
                    <span key={index} className="wine-grape-badge wine-red-grape">
                      {grape}
                    </span>
                  ))
                ) : (
                  <span className="wine-no-grapes">No red grapes specified</span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Wine Styles Section */}
        <div className="wine-region-section wine-styles-section">
          <h2 className="wine-heading-3">🍷 Wine Styles</h2>
          
          <div className="wine-styles-grid">
            {region.wineStyles.map((style, index) => (
              <div key={index} className="wine-style-card">
                <span className="wine-style-name">{style}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Characteristics Section */}
        <div className="wine-region-section wine-characteristics-section">
          <h2 className="wine-heading-3">✨ Wine Characteristics</h2>
          
          <div className="wine-characteristics-grid">
            {region.characteristics.map((characteristic, index) => (
              <div key={index} className="wine-characteristic-card">
                <span className="wine-characteristic-text">{characteristic}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sub-regions Section */}
        {region.notableSubRegions.length > 0 && (
          <div className="wine-region-section wine-subregions-section">
            <h2 className="wine-heading-3">🏞️ Notable Sub-regions</h2>
            
            <div className="wine-subregions-list">
              {region.notableSubRegions.map((subregion, index) => (
                <span key={index} className="wine-subregion-badge">
                  {subregion}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Classification Section */}
        <div className="wine-region-section wine-classification-section">
          <h2 className="wine-heading-3">🏆 Classification System</h2>
          
          <div className="wine-classification-card">
            <span className="wine-classification-text">{region.classification}</span>
          </div>
        </div>

        {/* Serving & Aging Section */}
        <div className="wine-region-section wine-serving-section">
          <h2 className="wine-heading-3">🍽️ Serving & Aging</h2>
          
          <div className="wine-serving-grid">
            <div className="wine-serving-detail">
              <span className="wine-serving-icon">🌡️</span>
              <div className="wine-serving-info">
                <span className="wine-serving-label">Serving Temperature:</span>
                <span className="wine-serving-value">{region.servingTemperature}</span>
              </div>
            </div>
            
            <div className="wine-serving-detail">
              <span className="wine-serving-icon">⏰</span>
              <div className="wine-serving-info">
                <span className="wine-serving-label">Aging Potential:</span>
                <span className="wine-serving-value">{region.agingPotential}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Food Pairings Section */}
        <div className="wine-region-section wine-food-section">
          <h2 className="wine-heading-3">🍽️ Food Pairings</h2>
          
          <div className="wine-food-grid">
            {region.foodPairings.map((food, index) => (
              <div key={index} className="wine-food-card">
                <span className="wine-food-name">{food}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Key Producers Section */}
        {region.keyProducers.length > 0 && (
          <div className="wine-region-section wine-producers-section">
            <h2 className="wine-heading-3">🏅 Key Producers</h2>
            
            <div className="wine-producers-grid">
              {region.keyProducers.map((producer, index) => (
                <div key={index} className="wine-producer-card">
                  <span className="wine-producer-name">{producer}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Fun Facts Section */}
        {region.funFacts.length > 0 && (
          <div className="wine-region-section wine-fun-facts-section">
            <h2 className="wine-heading-3">🎉 Fun Facts</h2>
            
            <div className="wine-fun-facts-list">
              {region.funFacts.map((fact, index) => (
                <div key={index} className="wine-fun-fact-card">
                  <span className="wine-fun-fact-icon">💡</span>
                  <span className="wine-fun-fact-text">{fact}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* WSET Module Reference */}
        <div className="wine-region-section wine-module-section">
          <h2 className="wine-heading-3">📚 WSET Level 3 Reference</h2>
          
          <div className="wine-module-card">
            <span className="wine-module-badge-large">{region.module}</span>
            <p className="wine-module-description">
              This region is covered in detail in the WSET Level 3 curriculum. 
              Review your study materials for additional context and exam preparation.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}