'use client';

import { Answer } from './Quiz';
import { Question } from '@/data/questions';

interface ResultsProps {
  answers: Answer[];
  questions: Question[];
  timeTaken: number;
  onRestart: () => void;
}

export default function Results({ answers, questions, timeTaken, onRestart }: ResultsProps) {
  const correctAnswers = answers.filter(answer => answer.isCorrect).length;
  const totalQuestions = questions.length;
  const percentage = Math.round((correctAnswers / totalQuestions) * 100);
  
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const getGrade = (percentage: number) => {
    if (percentage >= 90) return { grade: 'A+', className: 'excellent', description: 'Excellent!' };
    if (percentage >= 80) return { grade: 'A', className: 'good', description: 'Very Good!' };
    if (percentage >= 70) return { grade: 'B', className: 'good', description: 'Good!' };
    if (percentage >= 60) return { grade: 'C', className: 'fair', description: 'Fair' };
    if (percentage >= 50) return { grade: 'D', className: 'fair', description: 'Needs Improvement' };
    return { grade: 'F', className: 'poor', description: 'More Study Needed' };
  };

  const gradeInfo = getGrade(percentage);

  // Group questions by module for detailed breakdown
  const moduleBreakdown = questions.reduce((acc, question) => {
    const answer = answers.find(a => a.questionId === question.id);
    if (!acc[question.module]) {
      acc[question.module] = { total: 0, correct: 0 };
    }
    acc[question.module].total++;
    if (answer?.isCorrect) {
      acc[question.module].correct++;
    }
    return acc;
  }, {} as Record<string, { total: number; correct: number }>);

  return (
    <div className="container">
      <div className="results">
        <h1 style={{ fontSize: '2.5em', marginBottom: '30px' }}>Quiz Complete!</h1>
        
        <div style={{ marginBottom: '40px' }}>
          <div className={`score ${gradeInfo.className}`}>
            {percentage}%
          </div>
          <div style={{ fontSize: '1.5em', fontWeight: '600', marginBottom: '10px' }}>
            Grade: {gradeInfo.grade}
          </div>
          <div style={{ fontSize: '1.1em', color: '#666' }}>
            {gradeInfo.description}
          </div>
        </div>

        <div className="stats">
          <div className="stat">
            <div className="stat-value">
              {correctAnswers}/{totalQuestions}
            </div>
            <div className="stat-label">Correct Answers</div>
          </div>
          
          <div className="stat">
            <div className="stat-value">
              {formatTime(timeTaken)}
            </div>
            <div className="stat-label">Time Taken</div>
          </div>
          
          <div className="stat">
            <div className="stat-value">
              {Math.round(timeTaken / totalQuestions)}s
            </div>
            <div className="stat-label">Avg. per Question</div>
          </div>
        </div>

        <div style={{ marginBottom: '40px', textAlign: 'left' }}>
          <h2 style={{ fontSize: '1.5em', marginBottom: '20px', textAlign: 'center' }}>Module Breakdown</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {Object.entries(moduleBreakdown).map(([module, stats]) => {
              const modulePercentage = Math.round((stats.correct / stats.total) * 100);
              return (
                <div key={module} style={{ background: '#f7fafc', padding: '15px', borderRadius: '8px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                    <span style={{ fontWeight: '600' }}>{module}</span>
                    <span style={{ fontSize: '0.9em', color: '#666' }}>
                      {stats.correct}/{stats.total} ({modulePercentage}%)
                    </span>
                  </div>
                  <div style={{ width: '100%', background: '#e2e8f0', borderRadius: '4px', height: '8px', overflow: 'hidden' }}>
                    <div 
                      style={{ 
                        height: '100%', 
                        background: '#667eea', 
                        borderRadius: '4px',
                        width: `${modulePercentage}%`,
                        transition: 'width 0.3s ease'
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <button
          onClick={onRestart}
          className="btn btn-primary"
          style={{ fontSize: '1.1em', padding: '15px 30px' }}
        >
          Take Quiz Again
        </button>

        <div style={{ marginTop: '30px', fontSize: '0.9em', color: '#666' }}>
          <p>
            WSET Level 3 Practice Quiz • Study well and good luck with your exam!
          </p>
        </div>
      </div>
    </div>
  );
}