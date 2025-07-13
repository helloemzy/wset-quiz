'use client';

import React, { useState } from 'react';
import { shortAnswerQuestions, ShortAnswerQuestion } from '../data/shortAnswerQuestions';

export default function ShortAnswersPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [filter, setFilter] = useState('all');

  const filteredQuestions = filter === 'all' 
    ? shortAnswerQuestions 
    : shortAnswerQuestions.filter(q => q.module === filter);

  const currentQuestion = filteredQuestions[currentQuestionIndex];
  const totalQuestions = filteredQuestions.length;

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setShowAnswer(false);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setShowAnswer(false);
    }
  };

  const handleShowAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
    setCurrentQuestionIndex(0);
    setShowAnswer(false);
  };

  const uniqueModules = [...new Set(shortAnswerQuestions.map(q => q.module))];

  return (
    <div className="short-answers-page">
      <div className="wine-container">
        <div className="wine-header-section">
          <h1 className="wine-heading-1">Short Answer Practice</h1>
          <p className="wine-subtitle">WSET Level 3 Short Written Answer Questions</p>
        </div>

        {/* Filter Controls */}
        <div className="filter-section">
          <label htmlFor="module-filter" className="filter-label">Filter by Module:</label>
          <select 
            id="module-filter"
            value={filter} 
            onChange={(e) => handleFilterChange(e.target.value)}
            className="module-filter-select"
          >
            <option value="all">All Modules ({shortAnswerQuestions.length} questions)</option>
            {uniqueModules.map(module => {
              const count = shortAnswerQuestions.filter(q => q.module === module).length;
              return (
                <option key={module} value={module}>
                  {module} ({count} questions)
                </option>
              );
            })}
          </select>
        </div>

        {/* Progress Indicator */}
        <div className="progress-section">
          <div className="progress-info">
            <span className="question-counter">
              Question {currentQuestionIndex + 1} of {totalQuestions}
            </span>
            <span className="progress-marks">
              {currentQuestion.marks} marks
            </span>
          </div>
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <div className="question-card">
          <div className="question-header">
            <h2 className="question-title">
              {currentQuestion.title}
            </h2>
            <div className="question-meta">
              <span className="question-module">{currentQuestion.module}</span>
              <span className="question-marks">{currentQuestion.marks} marks</span>
            </div>
          </div>

          <div className="question-content">
            <div className="question-text">
              {currentQuestion.question}
            </div>

            {/* Show/Hide Answer Button */}
            <div className="answer-controls">
              <button 
                onClick={handleShowAnswer}
                className="show-answer-btn"
              >
                {showAnswer ? 'Hide Answer' : 'Show Answer'}
              </button>
            </div>

            {/* Answer Section */}
            {showAnswer && (
              <div className="answer-section">
                <h3 className="answer-title">Model Answer</h3>
                <div className="answer-content">
                  {typeof currentQuestion.answer === 'string' ? (
                    <p>{currentQuestion.answer}</p>
                  ) : (
                    <div>
                      {Object.entries(currentQuestion.answer).map(([key, value]) => (
                        <div key={key} className="answer-part">
                          <h4 className="answer-part-title">{key}:</h4>
                          {Array.isArray(value) ? (
                            <ul className="answer-list">
                              {value.map((item, index) => (
                                <li key={index}>{item}</li>
                              ))}
                            </ul>
                          ) : (
                            <p>{value}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="navigation-controls">
          <button 
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
            className="nav-btn prev-btn"
          >
            ← Previous
          </button>
          
          <span className="nav-info">
            {currentQuestionIndex + 1} / {totalQuestions}
          </span>
          
          <button 
            onClick={handleNext}
            disabled={currentQuestionIndex === totalQuestions - 1}
            className="nav-btn next-btn"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}