'use client';

import { useState, useEffect } from 'react';
import { questions, Question } from '@/data/questions';
import QuestionCard from './QuestionCard';
import Results from './Results';
import Progress from './Progress';

export interface Answer {
  questionId: number;
  selectedAnswer: number;
  isCorrect: boolean;
}

export default function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [timeStarted, setTimeStarted] = useState<Date | null>(null);
  const [timeCompleted, setTimeCompleted] = useState<Date | null>(null);

  useEffect(() => {
    setTimeStarted(new Date());
  }, []);

  const handleAnswer = (selectedAnswer: number) => {
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    
    const newAnswer: Answer = {
      questionId: currentQuestion.id,
      selectedAnswer,
      isCorrect
    };

    const updatedAnswers = [...answers];
    const existingAnswerIndex = updatedAnswers.findIndex(
      answer => answer.questionId === currentQuestion.id
    );

    if (existingAnswerIndex >= 0) {
      updatedAnswers[existingAnswerIndex] = newAnswer;
    } else {
      updatedAnswers.push(newAnswer);
    }

    setAnswers(updatedAnswers);
  };

  const goToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const finishQuiz = () => {
    setTimeCompleted(new Date());
    setShowResults(true);
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setShowResults(false);
    setTimeStarted(new Date());
    setTimeCompleted(null);
  };

  const getSelectedAnswer = (questionId: number): number | undefined => {
    const answer = answers.find(a => a.questionId === questionId);
    return answer?.selectedAnswer;
  };

  if (showResults) {
    const timeTaken = timeStarted && timeCompleted 
      ? Math.round((timeCompleted.getTime() - timeStarted.getTime()) / 1000)
      : 0;

    return (
      <Results 
        answers={answers}
        questions={questions}
        timeTaken={timeTaken}
        onRestart={restartQuiz}
      />
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const selectedAnswer = getSelectedAnswer(currentQuestion.id);
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  return (
    <div className="container">
      <div className="quiz-header">
        <h1 className="quiz-title">WSET Level 3 Wine Quiz</h1>
        <Progress 
          current={currentQuestionIndex + 1} 
          total={questions.length}
          answered={answers.length}
        />
      </div>

      <QuestionCard 
        question={currentQuestion}
        selectedAnswer={selectedAnswer}
        onAnswer={handleAnswer}
        questionNumber={currentQuestionIndex + 1}
      />

      <div className="navigation">
        <button
          onClick={goToPreviousQuestion}
          disabled={currentQuestionIndex === 0}
          className="btn btn-secondary"
        >
          Previous
        </button>

        <div style={{ display: 'flex', gap: '10px' }}>
          {isLastQuestion ? (
            <button
              onClick={finishQuiz}
              disabled={answers.length < questions.length}
              className="btn btn-success"
            >
              Finish Quiz
            </button>
          ) : (
            <button
              onClick={goToNextQuestion}
              className="btn btn-primary"
            >
              Next
            </button>
          )}
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '20px', color: 'white' }}>
        <p>
          Question {currentQuestionIndex + 1} of {questions.length} | 
          Answered: {answers.length}/{questions.length}
        </p>
      </div>
    </div>
  );
}