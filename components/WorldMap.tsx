'use client'

import { useState } from 'react'
import { WineRegion } from '@/data/wineRegions'

interface WorldMapProps {
  regions: WineRegion[]
  onRegionClick: (region: WineRegion) => void
}

export default function WorldMap({ regions, onRegionClick }: WorldMapProps) {
  const [hoveredRegion, setHoveredRegion] = useState<WineRegion | null>(null)

  const getContinentColor = (continent: string) => {
    switch (continent) {
      case 'Europe': return 'var(--wine-primary)'
      case 'North America': return 'var(--wine-gold)'
      case 'South America': return 'var(--rose-wine)'
      case 'Oceania': return 'var(--sparkling-wine)'
      case 'Africa': return 'var(--fortified-wine)'
      default: return 'var(--wine-primary)'
    }
  }

  // Convert lat/lng to SVG coordinates (simplified projection)
  const projectToSVG = (lat: number, lng: number) => {
    // Simple equirectangular projection scaled to SVG viewBox 0 0 1000 500
    const x = ((lng + 180) / 360) * 1000
    const y = ((90 - lat) / 180) * 500
    return { x, y }
  }

  return (
    <div className="wine-world-map">
      <svg 
        viewBox="0 0 1000 500" 
        className="world-map-svg"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* World Map Background - Simplified continents */}
        <defs>
          <style>
            {`
              .continent { fill: var(--cream-bg); stroke: var(--text-secondary); stroke-width: 1; opacity: 0.3; }
              .continent:hover { opacity: 0.5; }
              .wine-region-dot { cursor: pointer; transition: all 0.3s ease; }
              .wine-region-dot:hover { transform: scale(1.5); }
            `}
          </style>
        </defs>

        {/* Simplified World Map Shapes */}
        {/* Europe */}
        <path 
          d="M450 100 L550 90 L580 120 L570 150 L520 160 L480 150 L450 120 Z" 
          className="continent" 
          id="europe"
        />
        
        {/* North America */}
        <path 
          d="M150 80 L350 70 L380 100 L370 180 L320 200 L250 190 L180 170 L150 120 Z" 
          className="continent" 
          id="north-america"
        />
        
        {/* South America */}
        <path 
          d="M280 250 L350 240 L380 280 L370 400 L340 420 L300 410 L280 380 L270 320 Z" 
          className="continent" 
          id="south-america"
        />
        
        {/* Australia/Oceania */}
        <path 
          d="M750 320 L850 310 L880 340 L870 370 L820 380 L770 370 L750 350 Z" 
          className="continent" 
          id="oceania"
        />
        
        {/* Africa */}
        <path 
          d="M480 200 L550 190 L580 220 L570 350 L540 380 L500 370 L480 340 L470 270 Z" 
          className="continent" 
          id="africa"
        />

        {/* Wine Region Dots */}
        {regions.map((region) => {
          const { x, y } = projectToSVG(region.coordinates.lat, region.coordinates.lng)
          const color = getContinentColor(region.continent)
          
          return (
            <g key={region.id}>
              {/* Glow effect for hovered region */}
              {hoveredRegion?.id === region.id && (
                <circle
                  cx={x}
                  cy={y}
                  r="15"
                  fill={color}
                  opacity="0.3"
                  className="wine-region-glow"
                />
              )}
              
              {/* Main region dot */}
              <circle
                cx={x}
                cy={y}
                r="6"
                fill={color}
                stroke="white"
                strokeWidth="2"
                className="wine-region-dot"
                onMouseEnter={() => setHoveredRegion(region)}
                onMouseLeave={() => setHoveredRegion(null)}
                onClick={() => onRegionClick(region)}
              />
              
              {/* Region label on hover */}
              {hoveredRegion?.id === region.id && (
                <g>
                  <rect
                    x={x - 40}
                    y={y - 35}
                    width="80"
                    height="20"
                    fill="white"
                    stroke={color}
                    strokeWidth="1"
                    rx="4"
                    className="wine-region-tooltip"
                  />
                  <text
                    x={x}
                    y={y - 20}
                    textAnchor="middle"
                    fontSize="10"
                    fill="var(--text-primary)"
                    className="wine-region-label"
                  >
                    {region.name}
                  </text>
                </g>
              )}
            </g>
          )
        })}
        
        {/* Map Title */}
        <text 
          x="500" 
          y="30" 
          textAnchor="middle" 
          fontSize="24" 
          fill="var(--wine-primary)" 
          className="wine-heading-3"
        >
          WSET Level 3 Wine Regions World Map
        </text>
      </svg>

      {/* Detailed Region Info on Hover */}
      {hoveredRegion && (
        <div className="wine-region-hover-card">
          <div className="wine-region-hover-header">
            <h4 className="wine-heading-4">{hoveredRegion.name}</h4>
            <span className="wine-region-hover-country">{hoveredRegion.country}</span>
          </div>
          
          <div className="wine-region-hover-content">
            <div className="wine-hover-detail">
              <span className="wine-hover-label">Climate:</span>
              <span className="wine-hover-value">{hoveredRegion.climate}</span>
            </div>
            
            <div className="wine-hover-detail">
              <span className="wine-hover-label">Key Grapes:</span>
              <span className="wine-hover-value">
                {[...hoveredRegion.keyGrapes.white, ...hoveredRegion.keyGrapes.red]
                  .slice(0, 3)
                  .join(', ')}
                {[...hoveredRegion.keyGrapes.white, ...hoveredRegion.keyGrapes.red].length > 3 && '...'}
              </span>
            </div>
            
            <div className="wine-hover-detail">
              <span className="wine-hover-label">Characteristics:</span>
              <span className="wine-hover-value">
                {hoveredRegion.characteristics.slice(0, 2).join(', ')}
              </span>
            </div>
          </div>
          
          <div className="wine-region-hover-footer">
            <span className="wine-click-hint">🖱️ Click to explore in detail</span>
          </div>
        </div>
      )}
    </div>
  )
}