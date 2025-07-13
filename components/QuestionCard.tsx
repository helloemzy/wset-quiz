'use client';

import { Question } from '@/data/questions';

interface QuestionCardProps {
  question: Question;
  selectedAnswer?: number;
  onAnswer: (selectedAnswer: number) => void;
  questionNumber: number;
}

export default function QuestionCard({ 
  question, 
  selectedAnswer, 
  onAnswer, 
  questionNumber 
}: QuestionCardProps) {
  return (
    <div className="question-card">
      <div style={{ marginBottom: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
          <span className="module-tag">
            {question.module}
          </span>
          <span className="question-number">
            Question {questionNumber}
          </span>
        </div>
        
        <h2 className="question-text">
          {question.question}
        </h2>
      </div>

      <div className="options">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(index)}
            className={`option ${selectedAnswer === index ? 'selected' : ''}`}
          >
            <span className="option-letter">
              {String.fromCharCode(65 + index)}
            </span>
            <span>{option}</span>
          </button>
        ))}
      </div>

      {selectedAnswer !== undefined && (
        <div className="explanation">
          <strong>Explanation:</strong> {question.explanation}
        </div>
      )}
    </div>
  );
}