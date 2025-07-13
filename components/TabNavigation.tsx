'use client'

import { useState } from 'react'

interface TabNavigationProps {
  children: React.ReactNode[]
  tabLabels: string[]
}

const tabIcons = {
  'Quiz Practice': '📚',
  'Winemaking Diagrams': '🍷',
  'Wine Regions': '🌍',
  'Short Answers': '✍️',
  'Comparisons': '⚖️'
}

export default function TabNavigation({ children, tabLabels }: TabNavigationProps) {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className="min-h-screen flex flex-col wine-app-container">
      {/* Main content area */}
      <div className="flex-1 overflow-auto">
        {children[activeTab]}
      </div>
      
      {/* Wine-themed elegant tabs at bottom */}
      <div className="wine-tab-navigation">
        <div className="wine-tab-background">
          <div className="wine-tab-container">
            <div className="wine-tabs-wrapper">
              {tabLabels.map((label, index) => {
                const icon = tabIcons[label as keyof typeof tabIcons] || '📖'
                const isActive = activeTab === index
                
                return (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`wine-tab ${isActive ? 'wine-tab-active' : 'wine-tab-inactive'}`}
                    aria-label={`Switch to ${label}`}
                    role="tab"
                    aria-selected={isActive}
                  >
                    <div className="wine-tab-content">
                      <span className="wine-tab-icon">{icon}</span>
                      <span className="wine-tab-label">{label}</span>
                    </div>
                    
                    {/* Wine glass accent for active tab */}
                    {isActive && (
                      <div className="wine-tab-accent">
                        <div className="wine-tab-accent-line"></div>
                      </div>
                    )}
                    
                    {/* Elegant hover indicator */}
                    <div className="wine-tab-hover-indicator"></div>
                  </button>
                )
              })}
            </div>
            
            {/* Wine-themed decorative elements */}
            <div className="wine-tab-decoration">
              <div className="wine-drops">
                <span className="wine-drop wine-drop-1">🍇</span>
                <span className="wine-drop wine-drop-2">🍷</span>
                <span className="wine-drop wine-drop-3">🥂</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}