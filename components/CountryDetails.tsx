'use client'

import { WineCountry, WineRegion } from '@/data/wineCountries'

interface CountryDetailsProps {
  country: WineCountry
  onBack: () => void
  onRegionClick: (region: WineRegion) => void
}

export default function CountryDetails({ country, onBack, onRegionClick }: CountryDetailsProps) {
  const getContinentEmoji = (continent: string) => {
    switch (continent) {
      case 'Europe': return '🇪🇺'
      case 'North America': return '🇺🇸'
      case 'South America': return '🌎'
      case 'Oceania': return '🇦🇺'
      case 'Africa': return '🌍'
      default: return '🌍'
    }
  }

  return (
    <div className="wine-country-details">
      {/* Header with Back Button */}
      <div className="wine-country-details-header">
        <button onClick={onBack} className="wine-back-button">
          ← Back to World Map
        </button>
        
        <div className="wine-country-title-section">
          <div className="wine-country-title-main">
            <h1 className="wine-heading-1">
              {getContinentEmoji(country.continent)} {country.name}
            </h1>
            <div className="wine-country-acronym-section">
              <span className="wine-country-acronym-badge">{country.countryAcronym}</span>
              <span className="wine-region-count-badge">{country.totalRegions} Regions</span>
            </div>
          </div>
          
          <div className="wine-country-memory-trick-main">
            <span className="wine-memory-icon">🧠</span>
            <span className="wine-memory-text">{country.countryMemoryTrick}</span>
          </div>
        </div>
      </div>

      {/* Country Characteristics Overview */}
      <div className="wine-country-overview">
        <h2 className="wine-heading-3">🏛️ Country Characteristics</h2>
        <div className="wine-country-char-grid">
          {country.keyCharacteristics.map((characteristic, index) => (
            <div key={index} className="wine-country-char-card">
              <span className="wine-country-char-text">{characteristic}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Wine Regions Grid */}
      <div className="wine-regions-in-country">
        <h2 className="wine-heading-2">🍷 Wine Regions in {country.name}</h2>
        
        <div className="wine-regions-country-grid">
          {country.regions.map((region) => (
            <div key={region.id} className="wine-region-country-card">
              {/* Region Header */}
              <div className="wine-region-country-header">
                <div className="wine-region-title-group">
                  <h3 className="wine-heading-4">{region.name}</h3>
                  <span className="wine-region-nickname">&quot;{region.nickname}&quot;</span>
                </div>
                <div className="wine-region-location">{region.location}</div>
              </div>

              {/* Memory Tricks Section - Featured prominently */}
              <div className="wine-memory-tricks-section">
                <h4 className="wine-memory-heading">🧠 Memory Aids</h4>
                <div className="wine-memory-tricks-list">
                  {region.memoryTricks.map((trick, index) => (
                    <div key={index} className="wine-memory-trick-item">
                      <span className="wine-memory-bullet">💡</span>
                      <span className="wine-memory-trick-text">{trick}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Acronym Quick Reference */}
              <div className="wine-acronym-quick-ref">
                <div className="wine-acronym-grid">
                  <div className="wine-acronym-item">
                    <span className="wine-acronym-label">Climate:</span>
                    <span className="wine-acronym-value">{region.climateAcronym}</span>
                  </div>
                  <div className="wine-acronym-item">
                    <span className="wine-acronym-label">Soils:</span>
                    <span className="wine-acronym-value">{region.soilAcronym}</span>
                  </div>
                  <div className="wine-acronym-item">
                    <span className="wine-acronym-label">White Grapes:</span>
                    <span className="wine-acronym-value">{region.grapeAcronyms.white}</span>
                  </div>
                  <div className="wine-acronym-item">
                    <span className="wine-acronym-label">Red Grapes:</span>
                    <span className="wine-acronym-value">{region.grapeAcronyms.red}</span>
                  </div>
                  <div className="wine-acronym-item">
                    <span className="wine-acronym-label">Character:</span>
                    <span className="wine-acronym-value">{region.characteristicsAcronym}</span>
                  </div>
                  <div className="wine-acronym-item">
                    <span className="wine-acronym-label">Sub-regions:</span>
                    <span className="wine-acronym-value">{region.subRegionAcronym}</span>
                  </div>
                </div>
              </div>

              {/* Key Information Summary */}
              <div className="wine-region-summary">
                <div className="wine-summary-row">
                  <div className="wine-summary-item">
                    <span className="wine-summary-icon">🌡️</span>
                    <div className="wine-summary-content">
                      <span className="wine-summary-label">Climate</span>
                      <span className="wine-summary-value">{region.climate}</span>
                    </div>
                  </div>
                  
                  <div className="wine-summary-item">
                    <span className="wine-summary-icon">🍇</span>
                    <div className="wine-summary-content">
                      <span className="wine-summary-label">Key Grapes</span>
                      <span className="wine-summary-value">
                        {[...region.keyGrapes.white.slice(0, 2), ...region.keyGrapes.red.slice(0, 2)].join(', ')}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="wine-summary-row">
                  <div className="wine-summary-item">
                    <span className="wine-summary-icon">📚</span>
                    <div className="wine-summary-content">
                      <span className="wine-summary-label">WSET Module</span>
                      <span className="wine-summary-value">{region.module}</span>
                    </div>
                  </div>
                  
                  <div className="wine-summary-item">
                    <span className="wine-summary-icon">⏰</span>
                    <div className="wine-summary-content">
                      <span className="wine-summary-label">Aging</span>
                      <span className="wine-summary-value">{region.agingPotential}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Explore Button */}
              <button 
                onClick={() => onRegionClick(region)}
                className="wine-explore-region-button"
              >
                🔍 Explore {region.name} in Detail
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Study Tips Section */}
      <div className="wine-study-tips-section">
        <h2 className="wine-heading-3">📖 Study Tips for {country.name}</h2>
        <div className="wine-study-tips-grid">
          <div className="wine-study-tip-card">
            <h4 className="wine-tip-title">🔤 Acronym Strategy</h4>
            <p className="wine-tip-text">
              Use the acronyms provided for each region to memorize key characteristics. 
              Start with the country acronym &quot;{country.countryAcronym}&quot; and build from there.
            </p>
          </div>
          
          <div className="wine-study-tip-card">
            <h4 className="wine-tip-title">🗺️ Geographic Context</h4>
            <p className="wine-tip-text">
              Remember {country.name} has {country.totalRegions} major wine regions. 
              Each has unique climate, soil, and grape combinations that define their style.
            </p>
          </div>
          
          <div className="wine-study-tip-card">
            <h4 className="wine-tip-title">🍷 Style Patterns</h4>
            <p className="wine-tip-text">
              Notice how {country.keyCharacteristics.join(', ').toLowerCase()} define {country.name}&apos;s 
              overall wine identity across different regions.
            </p>
          </div>
          
          <div className="wine-study-tip-card">
            <h4 className="wine-tip-title">🧠 Memory Palace</h4>
            <p className="wine-tip-text">
              Create mental journeys through {country.name}, visiting each region and 
              associating them with their nickname and key characteristics.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}