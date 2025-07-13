'use client';

import { WinemakingProcess } from '@/data/winemakingProcesses';
import { 
  WhiteWineGlass, 
  RedWineGlass, 
  RoseWineGlass, 
  SparklingWineGlass, 
  FortifiedWineGlass 
} from './WineIcons';

interface DiagramSelectorProps {
  processes: WinemakingProcess[];
  onSelectProcess: (processId: string) => void;
}

const wineIcons = {
  white: WhiteWineGlass,
  red: RedWineGlass,
  rose: RoseWineGlass,
  sparkling: SparklingWineGlass,
  fortified: FortifiedWineGlass,
  carbonic: RedWineGlass, // Use red wine glass for carbonic maceration
  sweet: WhiteWineGlass, // Use white wine glass for sweet wines
  orange: WhiteWineGlass, // Use white wine glass for orange wines
  natural: RedWineGlass, // Use red wine glass for natural wines
  icewine: WhiteWineGlass, // Use white wine glass for ice wines
};

export default function DiagramSelector({ 
  processes, 
  onSelectProcess 
}: DiagramSelectorProps) {
  return (
    <div className="wine-process-selector">
      <div className="text-center mb-12">
        <h1 className="wine-heading-1">
          Interactive Winemaking Process Diagrams
        </h1>
        <p className="wine-subtitle">
          Explore the art and science of wine production through detailed, step-by-step processes
        </p>
      </div>

      <div className="process-cards-grid">
        {processes.map((process) => {
          const IconComponent = wineIcons[process.id as keyof typeof wineIcons] || WhiteWineGlass;
          
          return (
            <div
              key={process.id}
              className="wine-process-card"
              onClick={() => onSelectProcess(process.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectProcess(process.id);
                }
              }}
              aria-label={`Explore ${process.name} process`}
            >
              <div className="wine-icon-container">
                <IconComponent className="wine-glass-icon" />
              </div>
              
              <h3 className="wine-heading-4 text-center">
                {process.name}
              </h3>
              
              <p className="wine-overview text-center">
                {process.overview}
              </p>
              
              <div className="key-characteristics">
                <h4 className="wine-caption font-medium text-wine-primary mb-2">
                  Key Characteristics:
                </h4>
                <ul className="characteristics-list">
                  {process.keyCharacteristics.slice(0, 3).map((char, index) => (
                    <li key={index} className="wine-body-small">
                      • {char}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="steps-badge-container">
                <span className="steps-badge">
                  {process.steps.length} Steps
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}