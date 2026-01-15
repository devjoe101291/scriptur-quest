import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, ArrowRight, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import QuizProgress from '@/components/QuizProgress';
import QuizOption from '@/components/QuizOption';
import { useApp } from '@/contexts/AppContext';
import { getBookById } from '@/data/bible-books';
import { cn } from '@/lib/utils';

const Quiz: React.FC = () => {
  const navigate = useNavigate();
  const { 
    currentSession, 
    answerQuestion, 
    nextQuestion, 
    completeQuiz, 
    abandonQuiz,
    settings 
  } = useApp();
  
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Redirect if no session
  useEffect(() => {
    if (!currentSession) {
      navigate('/');
    }
  }, [currentSession, navigate]);

  if (!currentSession) {
    return null;
  }

  const book = getBookById(currentSession.bookId);
  const currentQuestion = currentSession.questions[currentSession.currentIndex];
  const isLastQuestion = currentSession.currentIndex === currentSession.questions.length - 1;
  const correctAnswers = currentSession.questions.map(q => q.correctAnswer);
  
  // Check if current question is already answered (from saved state)
  useEffect(() => {
    const savedAnswer = currentSession.answers[currentSession.currentIndex];
    if (savedAnswer !== null) {
      setSelectedAnswer(savedAnswer);
      setShowResult(true);
    } else {
      setSelectedAnswer(null);
      setShowResult(false);
    }
  }, [currentSession.currentIndex, currentSession.answers]);

  const handleSelectAnswer = (index: number) => {
    if (showResult) return;
    
    setSelectedAnswer(index);
    setShowResult(true);
    answerQuestion(index);
  };

  const handleNext = () => {
    if (isLastQuestion) {
      const result = completeQuiz();
      if (result) {
        navigate('/results', { state: { result } });
      }
    } else {
      setIsTransitioning(true);
      setTimeout(() => {
        nextQuestion();
        setSelectedAnswer(null);
        setShowResult(false);
        setIsTransitioning(false);
      }, settings.animationsEnabled ? 300 : 0);
    }
  };

  const handleAbandon = () => {
    if (window.confirm('Are you sure you want to quit? Your progress will be saved.')) {
      navigate('/');
    }
  };

  const getQuestionTypeLabel = (type: string) => {
    switch (type) {
      case 'verse-completion': return 'Complete the verse';
      case 'who-said': return 'Who said this?';
      case 'which-book': return 'Which book?';
      default: return 'Multiple Choice';
    }
  };

  return (
    <div className="min-h-screen parchment-gradient flex flex-col">
      {/* Header */}
      <div className="safe-top px-5 pt-4 pb-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className={cn(
              'w-10 h-10 rounded-lg flex items-center justify-center',
              'font-display text-sm font-semibold',
              'bg-secondary text-secondary-foreground'
            )}>
              {book?.abbreviation.slice(0, 2)}
            </div>
            <div>
              <h1 className="font-display font-semibold text-foreground">
                {book?.name}
              </h1>
              <p className="text-xs text-muted-foreground">
                {getQuestionTypeLabel(currentQuestion.type)}
              </p>
            </div>
          </div>
          <button
            onClick={handleAbandon}
            className="p-2 rounded-lg hover:bg-secondary transition-colors"
          >
            <X className="h-6 w-6 text-muted-foreground" />
          </button>
        </div>

        <QuizProgress
          current={currentSession.currentIndex}
          total={currentSession.questions.length}
          answers={currentSession.answers}
          correctAnswers={correctAnswers}
        />
      </div>

      {/* Question Content */}
      <div className={cn(
        'flex-1 px-5 py-6',
        isTransitioning && settings.animationsEnabled && 'opacity-0 translate-y-4 transition-all duration-300'
      )}>
        {/* Question Card */}
        <div className={cn(
          'p-6 rounded-2xl bg-card border border-border shadow-card mb-6',
          settings.animationsEnabled && !isTransitioning && 'animate-scale-in'
        )}>
          <p className="text-lg font-medium text-foreground leading-relaxed">
            {currentQuestion.question}
          </p>
          {currentQuestion.reference && showResult && (
            <div className="flex items-center gap-2 mt-4 text-sm text-muted-foreground">
              <BookOpen className="h-4 w-4" />
              <span>{currentQuestion.reference}</span>
            </div>
          )}
        </div>

        {/* Options */}
        <div className="space-y-3">
          {currentQuestion.options.map((option, index) => (
            <QuizOption
              key={index}
              option={option}
              index={index}
              isSelected={selectedAnswer === index}
              isCorrect={index === currentQuestion.correctAnswer}
              showResult={showResult}
              onSelect={() => handleSelectAnswer(index)}
              disabled={showResult}
            />
          ))}
        </div>

        {/* Explanation */}
        {showResult && currentQuestion.explanation && (
          <div className={cn(
            'mt-6 p-4 rounded-xl bg-secondary/50 border border-border',
            settings.animationsEnabled && 'animate-slide-up'
          )}>
            <p className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">Explanation: </span>
              {currentQuestion.explanation}
            </p>
          </div>
        )}
      </div>

      {/* Bottom Action */}
      {showResult && (
        <div className={cn(
          'px-5 pb-8 safe-bottom',
          settings.animationsEnabled && 'animate-slide-up'
        )}>
          <Button
            onClick={handleNext}
            size="lg"
            className={cn(
              'w-full h-14 rounded-xl font-display font-semibold text-lg',
              isLastQuestion
                ? 'gold-gradient text-primary-foreground shadow-glow'
                : 'bg-primary text-primary-foreground'
            )}
          >
            {isLastQuestion ? 'See Results' : 'Next Question'}
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
