'use client';

// Wine Glass Icons for each wine type
export const WhiteWineGlass = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M7 2h10l-1 8c0 2.5-2 4.5-4.5 4.5S7 12.5 7 10L7 2z" 
      fill="var(--white-wine)" 
      stroke="var(--wine-primary)" 
      strokeWidth="1.5"
    />
    <path 
      d="M11.5 14.5v5.5M9 20h5" 
      stroke="var(--wine-primary)" 
      strokeWidth="1.5" 
      strokeLinecap="round"
    />
  </svg>
);

export const RedWineGlass = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M7 2h10l-1 8c0 2.5-2 4.5-4.5 4.5S7 12.5 7 10L7 2z" 
      fill="var(--red-wine)" 
      stroke="var(--wine-primary)" 
      strokeWidth="1.5"
    />
    <path 
      d="M11.5 14.5v5.5M9 20h5" 
      stroke="var(--wine-primary)" 
      strokeWidth="1.5" 
      strokeLinecap="round"
    />
  </svg>
);

export const RoseWineGlass = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M7 2h10l-1 8c0 2.5-2 4.5-4.5 4.5S7 12.5 7 10L7 2z" 
      fill="var(--rose-wine)" 
      stroke="var(--wine-primary)" 
      strokeWidth="1.5"
    />
    <path 
      d="M11.5 14.5v5.5M9 20h5" 
      stroke="var(--wine-primary)" 
      strokeWidth="1.5" 
      strokeLinecap="round"
    />
  </svg>
);

export const SparklingWineGlass = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M8 2h8l-1 6c0 1.5-1.5 3-3.5 3S8 9.5 8 8L8 2z" 
      fill="var(--sparkling-wine)" 
      stroke="var(--wine-primary)" 
      strokeWidth="1.5"
    />
    <path 
      d="M11.5 11v9M9 20h5" 
      stroke="var(--wine-primary)" 
      strokeWidth="1.5" 
      strokeLinecap="round"
    />
    {/* Bubbles */}
    <circle cx="10" cy="6" r="0.5" fill="var(--wine-gold)" />
    <circle cx="12" cy="7" r="0.5" fill="var(--wine-gold)" />
    <circle cx="11" cy="5" r="0.3" fill="var(--wine-gold)" />
    <circle cx="13" cy="6" r="0.3" fill="var(--wine-gold)" />
  </svg>
);

export const FortifiedWineGlass = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M8 2h8v8c0 2-1.5 3.5-3.5 3.5S8 12 8 10V2z" 
      fill="var(--fortified-wine)" 
      stroke="var(--wine-primary)" 
      strokeWidth="1.5"
    />
    <path 
      d="M12 13.5v6.5M9.5 20h5" 
      stroke="var(--wine-primary)" 
      strokeWidth="1.5" 
      strokeLinecap="round"
    />
  </svg>
);

// Process Step Icons
export const GrapesIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="8" r="2" fill="var(--wine-primary)" />
    <circle cx="12" cy="6" r="2" fill="var(--wine-primary)" />
    <circle cx="16" cy="8" r="2" fill="var(--wine-primary)" />
    <circle cx="10" cy="11" r="2" fill="var(--wine-primary)" />
    <circle cx="14" cy="11" r="2" fill="var(--wine-primary)" />
    <circle cx="8" cy="14" r="2" fill="var(--wine-primary)" />
    <circle cx="12" cy="14" r="2" fill="var(--wine-primary)" />
    <circle cx="16" cy="14" r="2" fill="var(--wine-primary)" />
    <path d="M12 2C13 2 14 3 14 4V6" stroke="var(--success-green)" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const MachineryIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="8" width="16" height="8" fill="var(--text-secondary)" stroke="var(--wine-primary)" strokeWidth="1.5" rx="2" />
    <circle cx="8" cy="12" r="2" fill="var(--wine-primary)" />
    <circle cx="16" cy="12" r="2" fill="var(--wine-primary)" />
    <path d="M6 8V6c0-1 1-2 2-2h8c1 0 2 1 2 2v2" stroke="var(--wine-primary)" strokeWidth="1.5" />
    <path d="M10 16v2M14 16v2" stroke="var(--wine-primary)" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const FermentationIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="6" width="12" height="14" fill="var(--white-wine)" stroke="var(--wine-primary)" strokeWidth="1.5" rx="2" />
    <path d="M6 12h12" stroke="var(--wine-primary)" strokeWidth="1" />
    {/* Bubbles */}
    <circle cx="9" cy="9" r="0.5" fill="var(--wine-gold)" />
    <circle cx="11" cy="10" r="0.5" fill="var(--wine-gold)" />
    <circle cx="13" cy="9" r="0.5" fill="var(--wine-gold)" />
    <circle cx="15" cy="10" r="0.5" fill="var(--wine-gold)" />
    <circle cx="10" cy="16" r="0.5" fill="var(--wine-gold)" />
    <circle cx="14" cy="17" r="0.5" fill="var(--wine-gold)" />
  </svg>
);

export const TemperatureIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="3" width="4" height="12" fill="var(--wine-primary)" rx="2" />
    <circle cx="12" cy="17" r="3" fill="var(--wine-primary)" />
    <path d="M12 15v-8" stroke="white" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const DurationIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="9" fill="none" stroke="var(--wine-primary)" strokeWidth="2" />
    <path d="M12 7v5l3 3" stroke="var(--wine-primary)" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// Arrow Connectors
export const FlowArrow = ({ className = "w-6 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M12 0v28M8 24l4 4 4-4" 
      stroke="var(--wine-primary)" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

// Progress and Status Indicators
export const CheckmarkIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="var(--success-green)" />
    <path d="M8 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const StepNumberBadge = ({ number, isActive = false, isCompleted = false, className = "w-8 h-8" }: { 
  number: number; 
  isActive?: boolean; 
  isCompleted?: boolean;
  className?: string;
}) => (
  <div 
    className={`${className} rounded-full flex items-center justify-center font-semibold text-sm transition-all duration-300 ${
      isCompleted 
        ? 'bg-green-500 text-white' 
        : isActive 
          ? 'bg-wine-primary text-white' 
          : 'bg-gray-200 text-gray-600'
    }`}
    style={{
      backgroundColor: isCompleted 
        ? 'var(--success-green)' 
        : isActive 
          ? 'var(--wine-primary)' 
          : '#E2E8F0',
      color: isCompleted || isActive ? 'white' : 'var(--text-secondary)'
    }}
  >
    {isCompleted ? <CheckmarkIcon className="w-4 h-4" /> : number}
  </div>
);