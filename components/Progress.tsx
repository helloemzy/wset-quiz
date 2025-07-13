'use client';

interface ProgressProps {
  current: number;
  total: number;
  answered: number;
}

export default function Progress({ current, total, answered }: ProgressProps) {
  const progressPercentage = (current / total) * 100;
  const answeredPercentage = (answered / total) * 100;

  return (
    <div className="progress-container">
      <div className="progress-text" style={{ justifyContent: 'space-between' }}>
        <span>Progress: {current}/{total}</span>
        <span>Answered: {answered}/{total}</span>
      </div>
      
      <div className="progress-bar">
        <div 
          className="progress-fill"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
    </div>
  );
}