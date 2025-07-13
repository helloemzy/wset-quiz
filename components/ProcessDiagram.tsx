'use client';

import { useState } from 'react';
import { WinemakingProcess, ProcessStep } from '@/data/winemakingProcesses';
import { 
  StepNumberBadge, 
  FlowArrow, 
  TemperatureIcon, 
  DurationIcon,
  GrapesIcon,
  MachineryIcon,
  FermentationIcon
} from './WineIcons';

interface ProcessDiagramProps {
  process: WinemakingProcess;
}

const processIcons = {
  1: GrapesIcon,      // Reception
  2: MachineryIcon,   // Processing
  3: FermentationIcon, // Fermentation
  4: MachineryIcon,   // Further processing
  5: FermentationIcon, // Secondary processes
  6: MachineryIcon,   // Equipment steps
  7: FermentationIcon, // Aging/Storage
  8: MachineryIcon,   // Final processing
  9: MachineryIcon,   // Bottling
  10: MachineryIcon   // Final steps
};

export default function ProcessDiagram({ process }: ProcessDiagramProps) {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const handleStepClick = (stepId: number) => {
    setActiveStep(activeStep === stepId ? null : stepId);
  };

  return (
    <div className="wine-process-diagram">
      {/* Process Header */}
      <div className="process-header">
        <h2 className="wine-heading-2" style={{ color: process.color !== '#F4F1E8' ? process.color : 'var(--wine-primary)' }}>
          {process.name}
        </h2>
        <p className="wine-overview">
          {process.overview}
        </p>
        
        <div className="key-characteristics-section">
          <h3 className="wine-heading-5">
            Key Characteristics
          </h3>
          <ul className="process-characteristics-list">
            {process.keyCharacteristics.map((characteristic, index) => (
              <li key={index} className="wine-body-small">
                • {characteristic}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Process Steps */}
      <div className="process-steps-container">
        {process.steps.map((step, index) => {
          const IconComponent = processIcons[step.id as keyof typeof processIcons] || MachineryIcon;
          const isActive = activeStep === step.id;
          const isCompleted = false; // TODO: Add completion logic
          
          return (
            <div key={step.id} className="step-wrapper">
              <div 
                className={`wine-process-step ${isActive ? 'active' : ''}`}
                onClick={() => handleStepClick(step.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleStepClick(step.id);
                  }
                }}
                aria-expanded={isActive}
                aria-label={`Step ${step.id}: ${step.title}`}
              >
                <div className="step-badge-container">
                  <StepNumberBadge 
                    number={step.id} 
                    isActive={isActive}
                    isCompleted={isCompleted}
                    className="step-badge"
                  />
                </div>
                
                <div className="step-icon-container">
                  <IconComponent className="step-icon" />
                </div>
                
                <div className="step-content">
                  <h3 className="wine-heading-4 step-title">
                    {step.title}
                  </h3>
                  <p className="wine-body step-description">
                    {step.description}
                  </p>
                  
                  {(step.temperature || step.duration) && (
                    <div className="technical-data-container">
                      {step.temperature && (
                        <div className="technical-badge">
                          <TemperatureIcon className="tech-icon" />
                          <span className="wine-technical">{step.temperature}</span>
                        </div>
                      )}
                      {step.duration && (
                        <div className="technical-badge">
                          <DurationIcon className="tech-icon" />
                          <span className="wine-technical">{step.duration}</span>
                        </div>
                      )}
                    </div>
                  )}
                  
                  <div className="expand-hint">
                    <span className="wine-caption">
                      {isActive ? 'Click to collapse' : 'Click for details'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Expanded Detail Panel */}
              {isActive && (
                <div className="wine-detail-panel">
                  <div className="detail-content">
                    <h4 className="wine-heading-5 detail-title">
                      Detailed Information
                    </h4>
                    <p className="wine-body detail-description">
                      {step.details}
                    </p>
                    
                    {step.keyPoints && (
                      <div className="detail-section">
                        <h5 className="wine-heading-5 section-title">
                          Key Points:
                        </h5>
                        <ul className="detail-list">
                          {step.keyPoints.map((point, pointIndex) => (
                            <li key={pointIndex} className="wine-body-small">
                              • {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {step.alternatives && (
                      <div className="detail-section">
                        <h5 className="wine-heading-5 section-title">
                          Alternative Methods:
                        </h5>
                        <ul className="detail-list">
                          {step.alternatives.map((alt, altIndex) => (
                            <li key={altIndex} className="wine-body-small">
                              • {alt}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Flow Arrow */}
              {index < process.steps.length - 1 && (
                <div className="flow-arrow-container">
                  <FlowArrow className="flow-arrow" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Special Sections for Different Wine Types */}
      {process.id === 'red' && (
        <div className="wine-special-section red-wine-section">
          <h3 className="wine-heading-3 special-section-title">
            🍇 Red Wine Extraction Techniques
          </h3>
          <p className="wine-body-small special-section-subtitle">
            Different methods for extracting color, tannins, and flavor compounds from grape skins
          </p>
          <div className="branching-methods-grid">
            <div className="method-card">
              <div className="method-icon">🥊</div>
              <h4 className="wine-heading-5">Punch Down (Pigeage)</h4>
              <p className="wine-body-small">Manual or pneumatic breaking of cap to extract color and tannins</p>
              <div className="method-badge">Traditional</div>
            </div>
            <div className="method-card">
              <div className="method-icon">🔄</div>
              <h4 className="wine-heading-5">Pump Over (Remontage)</h4>
              <p className="wine-body-small">Pumping juice over cap for extraction and cap management</p>
              <div className="method-badge">Common</div>
            </div>
            <div className="method-card">
              <div className="method-icon">⚡</div>
              <h4 className="wine-heading-5">Rack & Return</h4>
              <p className="wine-body-small">Draining tank and returning wine over cap for intensive extraction</p>
              <div className="method-badge">Intensive</div>
            </div>
          </div>
        </div>
      )}

      {process.id === 'sparkling' && (
        <div className="wine-special-section sparkling-wine-section">
          <h3 className="wine-heading-3 special-section-title">
            🥂 Sparkling Wine Production Methods
          </h3>
          <p className="wine-body-small special-section-subtitle">
            Three primary approaches to creating effervescence in wine
          </p>
          <div className="branching-methods-grid">
            <div className="method-card">
              <div className="method-icon">🍾</div>
              <h4 className="wine-heading-5">Traditional Method</h4>
              <p className="wine-body-small">Secondary fermentation in bottle with riddling and disgorgement</p>
              <div className="method-badge premium">Premium</div>
            </div>
            <div className="method-card">
              <div className="method-icon">🏭</div>
              <h4 className="wine-heading-5">Tank Method (Charmat)</h4>
              <p className="wine-body-small">Secondary fermentation in pressurized tanks, filtered under pressure</p>
              <div className="method-badge efficient">Efficient</div>
            </div>
            <div className="method-card">
              <div className="method-icon">🔀</div>
              <h4 className="wine-heading-5">Transfer Method</h4>
              <p className="wine-body-small">Bottle fermentation followed by transfer to tank for processing</p>
              <div className="method-badge hybrid">Hybrid</div>
            </div>
          </div>
        </div>
      )}

      {process.id === 'fortified' && (
        <div className="wine-special-section fortified-wine-section">
          <h3 className="wine-heading-3 special-section-title">
            🥃 Fortified Wine Styles
          </h3>
          <p className="wine-body-small special-section-subtitle">
            Classic fortification approaches from different wine regions
          </p>
          <div className="branching-methods-grid">
            <div className="method-card">
              <div className="method-icon">🇵🇹</div>
              <h4 className="wine-heading-5">Port Style</h4>
              <p className="wine-body-small">Early fortification creates sweet wines, aged in barrel or bottle</p>
              <div className="method-badge sweet">Sweet</div>
            </div>
            <div className="method-card">
              <div className="method-icon">🇪🇸</div>
              <h4 className="wine-heading-5">Sherry Style</h4>
              <p className="wine-body-small">Complete fermentation then fortification, biological or oxidative aging</p>
              <div className="method-badge dry">Dry</div>
            </div>
            <div className="method-card">
              <div className="method-icon">🔥</div>
              <h4 className="wine-heading-5">Madeira Style</h4>
              <p className="wine-body-small">Heat treatment (estufagem) creates unique cooked flavors</p>
              <div className="method-badge unique">Unique</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}