'use client';

import React, { useState } from 'react';
import { comparisonQuestions, ComparisonQuestion } from '../data/comparisonQuestions';

export default function ComparisonsPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [filter, setFilter] = useState('all');

  const filteredQuestions = filter === 'all' 
    ? comparisonQuestions 
    : comparisonQuestions.filter(q => q.category === filter);

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

  const uniqueCategories = [...new Set(comparisonQuestions.map(q => q.category))];

  return (
    <div className="comparisons-page">
      <div className="wine-container">
        <div className="wine-header-section">
          <h1 className="wine-heading-1">Wine Comparisons</h1>
          <p className="wine-subtitle">WSET Level 3 Comparative Analysis Questions</p>
        </div>

        {/* Filter Controls */}
        <div className="filter-section">
          <label htmlFor="category-filter" className="filter-label">Filter by Category:</label>
          <select 
            id="category-filter"
            value={filter} 
            onChange={(e) => handleFilterChange(e.target.value)}
            className="category-filter-select"
          >
            <option value="all">All Categories ({comparisonQuestions.length} questions)</option>
            {uniqueCategories.map(category => {
              const count = comparisonQuestions.filter(q => q.category === category).length;
              return (
                <option key={category} value={category}>
                  {category} ({count} questions)
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
        <div className="comparison-card">
          <div className="comparison-header">
            <h2 className="comparison-title">
              {currentQuestion.title}
            </h2>
            <div className="comparison-meta">
              <span className="comparison-category">{currentQuestion.category}</span>
              <span className="comparison-marks">{currentQuestion.marks} marks</span>
            </div>
          </div>

          <div className="comparison-content">
            <div className="comparison-question">
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
              <div className="comparison-answer-section">
                <h3 className="answer-title">Model Answer (6 marks)</h3>
                <div className="comparison-answer-content">
                  {currentQuestion.comparisonPoints.map((point, index) => (
                    <div key={index} className="comparison-point">
                      <div className="point-header">
                        <span className="point-number">Point {index + 1}</span>
                        <span className="point-marks">(1 mark)</span>
                      </div>
                      <div className="point-content">
                        <h4 className="point-aspect">{point.aspect}:</h4>
                        <div className="point-details">
                          <div className="detail-item">
                            <span className="detail-label">{point.item1}:</span>
                            <span className="detail-text">{point.description1}</span>
                          </div>
                          <div className="detail-item">
                            <span className="detail-label">{point.item2}:</span>
                            <span className="detail-text">{point.description2}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {currentQuestion.summary && (
                  <div className="comparison-summary">
                    <h4 className="summary-title">Summary</h4>
                    <p className="summary-text">{currentQuestion.summary}</p>
                  </div>
                )}
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