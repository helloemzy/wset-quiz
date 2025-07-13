'use client'

import { useState } from 'react'
import { wineCountries, WineCountry, WineRegion, getCountriesByContinent, searchCountriesAndRegions, getAllRegions } from '@/data/wineCountries'
import WorldMapImproved from './WorldMapImproved'
import CountryDetails from './CountryDetails'
import RegionDetails from './RegionDetails'

export default function RegionsPageImproved() {
  const [selectedCountry, setSelectedCountry] = useState<WineCountry | null>(null)
  const [selectedRegion, setSelectedRegion] = useState<WineRegion | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [viewMode, setViewMode] = useState<'map' | 'list'>('list')

  const countriesByContinent = getCountriesByContinent()
  const allRegions = getAllRegions()
  const { countries: filteredCountries, regions: filteredRegions } = searchQuery 
    ? searchCountriesAndRegions(searchQuery)
    : { countries: wineCountries, regions: allRegions }

  const handleCountrySelect = (country: WineCountry) => {
    setSelectedCountry(country)
    setSelectedRegion(null)
  }

  const handleRegionSelect = (region: WineRegion) => {
    setSelectedRegion(region)
  }

  const handleBackToCountries = () => {
    setSelectedCountry(null)
    setSelectedRegion(null)
  }

  const handleBackToCountry = () => {
    setSelectedRegion(null)
  }

  // If a specific region is selected, show region details
  if (selectedRegion) {
    return (
      <RegionDetails 
        region={selectedRegion} 
        onBack={handleBackToCountry}
      />
    )
  }

  // If a country is selected, show country details
  if (selectedCountry) {
    return (
      <CountryDetails 
        country={selectedCountry} 
        onBack={handleBackToCountries}
        onRegionClick={handleRegionSelect}
      />
    )
  }

  // Main regions page
  return (
    <div className="wine-regions-page-improved">
      {/* Header Section */}
      <div className="wine-regions-header">
        <div className="wine-regions-header-content">
          <h1 className="wine-heading-1">🍷 WSET Level 3 Wine Regions</h1>
          <p className="wine-body-large wine-text-secondary">
            Browse all wine regions with memorable acronyms and study aids. 
            Click any region for detailed information or switch to map view to explore by country.
          </p>
        </div>
      </div>

      {/* Search and View Controls */}
      <div className="wine-regions-controls">
        <div className="wine-regions-search">
          <div className="wine-search-wrapper">
            <span className="wine-search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search countries, regions, grapes, or acronyms..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="wine-search-input"
            />
          </div>
        </div>

        <div className="wine-view-toggle">
          <button
            onClick={() => setViewMode('list')}
            className={`wine-toggle-button ${viewMode === 'list' ? 'active' : ''}`}
          >
            📋 All Regions
          </button>
          <button
            onClick={() => setViewMode('map')}
            className={`wine-toggle-button ${viewMode === 'map' ? 'active' : ''}`}
          >
            🗺️ Map View
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="wine-regions-content">
        {viewMode === 'map' ? (
          <div className="wine-map-container">
            <WorldMapImproved 
              countries={filteredCountries}
              onCountryClick={handleCountrySelect}
            />
            
            {/* Quick Stats */}
            <div className="wine-map-stats">
              <div className="wine-stat-card">
                <span className="wine-stat-number">{filteredCountries.length}</span>
                <span className="wine-stat-label">Wine Countries</span>
              </div>
              <div className="wine-stat-card">
                <span className="wine-stat-number">
                  {filteredCountries.reduce((sum, country) => sum + country.totalRegions, 0)}
                </span>
                <span className="wine-stat-label">Total Regions</span>
              </div>
              <div className="wine-stat-card">
                <span className="wine-stat-number">{Object.keys(countriesByContinent).length}</span>
                <span className="wine-stat-label">Continents</span>
              </div>
            </div>

            {/* Memory Aid Tips */}
            <div className="wine-memory-tips-section">
              <h3 className="wine-heading-4">🧠 Study with Acronyms & Memory Aids</h3>
              <div className="wine-memory-tips-grid">
                <div className="wine-memory-tip">
                  <span className="wine-tip-icon">🔤</span>
                  <span className="wine-tip-text">Each country has a memorable acronym</span>
                </div>
                <div className="wine-memory-tip">
                  <span className="wine-tip-icon">📍</span>
                  <span className="wine-tip-text">Regions have nicknames for easy recall</span>
                </div>
                <div className="wine-memory-tip">
                  <span className="wine-tip-icon">🍇</span>
                  <span className="wine-tip-text">Grape varieties grouped by acronyms</span>
                </div>
                <div className="wine-memory-tip">
                  <span className="wine-tip-icon">💡</span>
                  <span className="wine-tip-text">Memory tricks for each region</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="wine-regions-list-all">
            <div className="wine-regions-overview">
              <div className="wine-overview-stats">
                <div className="wine-stat-card">
                  <span className="wine-stat-number">{filteredRegions.length}</span>
                  <span className="wine-stat-label">Total Wine Regions</span>
                </div>
                <div className="wine-stat-card">
                  <span className="wine-stat-number">{filteredCountries.length}</span>
                  <span className="wine-stat-label">Wine Countries</span>
                </div>
                <div className="wine-stat-card">
                  <span className="wine-stat-number">{Object.keys(countriesByContinent).length}</span>
                  <span className="wine-stat-label">Continents</span>
                </div>
              </div>
            </div>

            {/* All Wine Regions Grid */}
            <div className="wine-all-regions-grid">
              {filteredRegions.map((region) => {
                // Find the country this region belongs to
                const country = wineCountries.find(c => c.regions.some(r => r.id === region.id))
                const isOldWorld = country?.continent === 'Europe'
                
                return (
                  <div
                    key={region.id}
                    className="wine-region-card-full"
                    onClick={() => handleRegionSelect(region)}
                  >
                    {/* Region Header */}
                    <div className="wine-region-card-header">
                      <div className="wine-region-title-section">
                        <h3 className="wine-heading-4">{region.name}</h3>
                        <div className="wine-region-location-info">
                          <span className="wine-region-nickname-badge">&quot;{region.nickname}&quot;</span>
                          <span className="wine-region-location-badge">{region.location}</span>
                        </div>
                      </div>
                      <div className="wine-region-classification">
                        <span className={`wine-world-badge ${isOldWorld ? 'old-world' : 'new-world'}`}>
                          {isOldWorld ? '🍇 Old World' : '🌍 New World'}
                        </span>
                        <span className="wine-module-badge">{region.module}</span>
                      </div>
                    </div>

                    {/* Memory Tricks - Featured prominently */}
                    <div className="wine-memory-section-card">
                      <h4 className="wine-memory-heading-small">🧠 Memory Aids</h4>
                      <div className="wine-memory-tricks-preview">
                        {region.memoryTricks.slice(0, 2).map((trick, index) => (
                          <div key={index} className="wine-memory-trick-preview">
                            <span className="wine-memory-bullet">💡</span>
                            <span className="wine-memory-text">{trick}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Acronym Quick Reference */}
                    <div className="wine-acronyms-preview">
                      <div className="wine-acronym-row">
                        <span className="wine-acronym-label">Climate:</span>
                        <span className="wine-acronym-value">{region.climateAcronym}</span>
                      </div>
                      <div className="wine-acronym-row">
                        <span className="wine-acronym-label">Grapes:</span>
                        <span className="wine-acronym-value">{region.grapeAcronyms.white} | {region.grapeAcronyms.red}</span>
                      </div>
                    </div>

                    {/* Key Information */}
                    <div className="wine-region-summary-preview">
                      <div className="wine-summary-item">
                        <span className="wine-summary-icon">🌡️</span>
                        <span className="wine-summary-text">{region.climate}</span>
                      </div>
                      <div className="wine-summary-item">
                        <span className="wine-summary-icon">🍇</span>
                        <span className="wine-summary-text">
                          {[...region.keyGrapes.white.slice(0, 2), ...region.keyGrapes.red.slice(0, 2)].join(', ')}
                        </span>
                      </div>
                    </div>

                    {/* Characteristics Preview */}
                    <div className="wine-characteristics-preview">
                      {region.characteristics.slice(0, 3).map((char, index) => (
                        <span key={index} className="wine-characteristic-tag-small">
                          {char}
                        </span>
                      ))}
                    </div>

                    {/* Explore Button */}
                    <div className="wine-region-card-footer">
                      <span className="wine-explore-hint">🔍 Click to explore {region.name} in detail</span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </div>

      {/* Legend for Map View */}
      {viewMode === 'map' && (
        <div className="wine-map-legend">
          <h3 className="wine-heading-5">🍷 Wine Countries Legend</h3>
          <div className="wine-legend-items">
            <div className="wine-legend-item">
              <div className="wine-legend-dot wine-legend-europe"></div>
              <span>Europe (6 countries)</span>
            </div>
            <div className="wine-legend-item">
              <div className="wine-legend-dot wine-legend-north-america"></div>
              <span>North America (1 country)</span>
            </div>
            <div className="wine-legend-item">
              <div className="wine-legend-dot wine-legend-south-america"></div>
              <span>South America (2 countries)</span>
            </div>
            <div className="wine-legend-item">
              <div className="wine-legend-dot wine-legend-oceania"></div>
              <span>Oceania (1 country)</span>
            </div>
          </div>
          <p className="wine-legend-hint">
            💡 Numbers on dots show region count • Hover for details • Click to explore
          </p>
        </div>
      )}
    </div>
  )
}