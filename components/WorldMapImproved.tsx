'use client'

import { useState } from 'react'
import Image from 'next/image'
import { WineCountry } from '@/data/wineCountries'

interface WorldMapImprovedProps {
  countries: WineCountry[]
  onCountryClick: (country: WineCountry) => void
}

export default function WorldMapImproved({ countries, onCountryClick }: WorldMapImprovedProps) {
  const [hoveredCountry, setHoveredCountry] = useState<WineCountry | null>(null)
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 })

  // Classify countries as Old World vs New World
  const isOldWorld = (country: WineCountry) => {
    return ['Europe'].includes(country.continent)
  }

  // Position coordinates based on the actual winemap.webp image
  // These percentages correspond to where countries appear on the wine map
  const getCountryPosition = (country: WineCountry) => {
    const positions: { [key: string]: { x: number; y: number } } = {
      // Europe (Old World) - Green/Olive regions on the map
      'France': { x: 48, y: 33 },       // Center of France in Western Europe
      'Italy': { x: 51.5, y: 38 },      // Italian peninsula
      'Spain': { x: 45.5, y: 37 },      // Center of Iberian peninsula
      'Germany': { x: 50.5, y: 30 },    // Central Europe, north
      'Portugal': { x: 43.5, y: 37.5 }, // Western edge of Iberia
      'Austria': { x: 52.5, y: 32 },    // East of Germany, Alpine region
      
      // New World (Red regions on the map)
      'United States': { x: 18, y: 36 },      // North America red area (US/Canada)
      'Australia': { x: 83, y: 72 },          // Center of large red continent
      'Argentina': { x: 29, y: 76 },          // Eastern South America (larger red area)
      'Chile': { x: 27, y: 74 },              // Thin western coast strip
      'South Africa': { x: 55, y: 75 },       // Southern tip of Africa
      'New Zealand': { x: 93, y: 77 }         // Small red area east of Australia
    }
    return positions[country.name] || { x: 50, y: 50 }
  }

  // Handle mouse enter with position tracking to prevent flashing
  const handleMouseEnter = (event: React.MouseEvent, country: WineCountry) => {
    const rect = event.currentTarget.getBoundingClientRect()
    setHoverPosition({
      x: rect.left + rect.width / 2,
      y: rect.top
    })
    setHoveredCountry(country)
  }

  // Handle mouse leave with delay to prevent flashing
  const handleMouseLeave = () => {
    // Small delay to prevent flashing when moving between elements
    setTimeout(() => {
      setHoveredCountry(null)
    }, 100)
  }

  return (
    <div className="wine-world-map-with-image">
      <div className="wine-map-header">
        <h2 className="wine-map-title">🌍 WINE REGION MAP</h2>
        <p className="wine-map-subtitle">OLD WORLD | NEW WORLD</p>
      </div>

      <div className="wine-map-image-container">
        {/* Background wine map image */}
        <div className="wine-map-background">
          <Image 
            src="/winemap.webp" 
            alt="Wine Region World Map showing Old World and New World wine regions"
            className="wine-map-image"
            width={800}
            height={400}
            priority
          />
          
          {/* Country dots overlaid on the image */}
          <div className="wine-countries-overlay">
            {countries.map((country) => {
              const position = getCountryPosition(country)
              const dotColor = isOldWorld(country) ? '#6B8E23' : '#B22222'
              const isHovered = hoveredCountry?.id === country.id
              
              return (
                <div
                  key={country.id}
                  className={`wine-country-dot ${isHovered ? 'hovered' : ''}`}
                  style={{
                    left: `${position.x}%`,
                    top: `${position.y}%`,
                    backgroundColor: dotColor,
                    borderColor: 'white'
                  }}
                  onMouseEnter={(e) => handleMouseEnter(e, country)}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => onCountryClick(country)}
                >
                  {/* Wine Glass Icon */}
                  <span className="wine-glass-icon">🍷</span>
                  
                  {/* Region count badge */}
                  <div 
                    className="wine-region-count-badge"
                    style={{ borderColor: dotColor, color: dotColor }}
                  >
                    {country.totalRegions}
                  </div>
                  
                  {/* Country name label - only show on hover */}
                  {isHovered && (
                    <div 
                      className="wine-country-name-label"
                    >
                      {country.name}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Legend */}
        <div className="wine-map-legend-image">
          <div className="wine-legend-section">
            <div className="wine-legend-item">
              <div className="wine-legend-dot old-world"></div>
              <span className="wine-legend-text">🍇 Old World</span>
            </div>
            <div className="wine-legend-item">
              <div className="wine-legend-dot new-world"></div>
              <span className="wine-legend-text">🌍 New World</span>
            </div>
          </div>
          <p className="wine-legend-note">
            💡 Numbers show wine regions • Click any country to explore
          </p>
        </div>
      </div>

      {/* Stable hover card positioned outside the map to prevent flashing */}
      {hoveredCountry && (
        <div 
          className="wine-country-info-card-stable"
          style={{
            position: 'fixed',
            left: `${hoverPosition.x}px`,
            top: `${hoverPosition.y - 20}px`,
            transform: 'translate(-50%, -100%)',
            zIndex: 1000
          }}
        >
          <div className="wine-country-hover-header">
            <div className="wine-country-hover-title">
              <span className="wine-country-world-badge">
                {isOldWorld(hoveredCountry) ? '🍇 Old World' : '🌍 New World'}
              </span>
              <h4 className="wine-heading-4">{hoveredCountry.name}</h4>
            </div>
            <span className="wine-country-acronym-hover">{hoveredCountry.countryAcronym}</span>
          </div>
          
          <div className="wine-country-hover-content">
            <div className="wine-country-stats-hover">
              <div className="wine-stat-hover">
                <span className="wine-stat-number">{hoveredCountry.totalRegions}</span>
                <span className="wine-stat-label">Wine Regions</span>
              </div>
              <div className="wine-stat-hover">
                <span className="wine-stat-icon">📍</span>
                <span className="wine-stat-label">{hoveredCountry.continent}</span>
              </div>
            </div>
            
            <div className="wine-country-characteristics-hover">
              {hoveredCountry.keyCharacteristics.slice(0, 2).map((char, index) => (
                <span key={index} className="wine-char-tag-hover">
                  {char}
                </span>
              ))}
            </div>
            
            <div className="wine-memory-trick-hover">
              <span className="wine-memory-icon">🧠</span>
              <span className="wine-memory-text-hover">
                {hoveredCountry.countryMemoryTrick.split(' - ')[0]}...
              </span>
            </div>
          </div>
          
          <div className="wine-click-hint-hover">
            🖱️ Click to explore {hoveredCountry.name}&apos;s wine regions
          </div>
        </div>
      )}
    </div>
  )
}