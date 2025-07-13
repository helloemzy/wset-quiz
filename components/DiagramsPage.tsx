'use client'

import { useState } from 'react'
import DiagramSelector from './DiagramSelector'
import ProcessDiagram from './ProcessDiagram'
import { winemakingProcesses } from '@/data/winemakingProcesses'

export default function DiagramsPage() {
  const [selectedProcessId, setSelectedProcessId] = useState<string | null>(null)

  const selectedProcess = selectedProcessId 
    ? winemakingProcesses.find(p => p.id === selectedProcessId) || null
    : null

  const handleBackToSelection = () => {
    setSelectedProcessId(null)
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Interactive Winemaking Process Diagrams
          </h1>
          <p className="text-lg text-gray-600">
            Explore the step-by-step processes for creating different types of wine
          </p>
        </div>

        {!selectedProcess ? (
          <DiagramSelector
            processes={winemakingProcesses}
            onSelectProcess={setSelectedProcessId}
          />
        ) : (
          <div className="wine-process-view">
            <div className="back-button-container">
              <button
                onClick={handleBackToSelection}
                className="wine-back-button"
                aria-label="Return to process selection"
              >
                <span className="back-arrow">←</span>
                Back to Process Selection
              </button>
            </div>
            {selectedProcess && <ProcessDiagram process={selectedProcess} />}
          </div>
        )}
      </div>
    </div>
  )
}