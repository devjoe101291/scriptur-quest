import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Play, BookOpen, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import DifficultySelector from '@/components/DifficultySelector';
import { getBookById } from '@/data/bible-books';
import { getQuestionsByBook } from '@/data/questions';
import { useApp } from '@/contexts/AppContext';
import { cn } from '@/lib/utils';

const QuizSetup: React.FC = () => {
  const navigate = useNavigate();
  const { bookId } = useParams<{ bookId: string }>();
  const { startQuiz, settings, progress } = useApp();
  const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard' | 'all'>(
    settings.defaultDifficulty
  );

  const book = bookId ? getBookById(bookId) : null;
  const questions = bookId ? getQuestionsByBook(bookId) : [];
  const bestScore = bookId ? progress.bestScores[bookId] : undefined;

  if (!book) {
    return (
      <div className="min-h-screen flex items-center justify-center parchment-gradient">
        <div className="text-center">
          <p className="text-muted-foreground">Book not found</p>
          <Button onClick={() => navigate('/books')} className="mt-4">
            Go Back
          </Button>
        </div>
      </div>
    );
  }

  const handleStart = () => {
    startQuiz(book.id, difficulty);
    navigate('/quiz');
  };

  return (
    <div className="min-h-screen parchment-gradient">
      {/* Header */}
      <div className="safe-top px-5 pt-4 pb-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back</span>
        </button>

        {/* Book Info Card */}
        <div className={cn(
          'p-6 rounded-2xl bg-card border border-border shadow-card text-center',
          settings.animationsEnabled && 'animate-scale-in'
        )}>
          <div className={cn(
            'w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4',
            'font-display text-2xl font-bold',
            progress.booksCompleted.includes(book.id)
              ? 'gold-gradient text-primary-foreground shadow-glow'
              : 'bg-secondary text-secondary-foreground'
          )}>
            {book.abbreviation}
          </div>
          
          <h1 className="font-display text-2xl font-bold text-foreground">
            {book.name}
          </h1>
          
          <div className="flex items-center justify-center gap-4 mt-3 text-muted-foreground text-sm">
            <div className="flex items-center gap-1.5">
              <BookOpen className="h-4 w-4" />
              <span>{book.chapters} chapters</span>
            </div>
            <div className="flex items-center gap-1.5">
              <HelpCircle className="h-4 w-4" />
              <span>{questions.length} questions</span>
            </div>
          </div>

          {bestScore !== undefined && (
            <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent">
              <span className="font-medium">Best Score: {bestScore}%</span>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="px-5 space-y-6">
        {/* Difficulty Selection */}
        <div className={cn(
          'space-y-3',
          settings.animationsEnabled && 'animate-slide-up'
        )}>
          <h2 className="font-display text-lg font-semibold text-foreground px-1">
            Select Difficulty
          </h2>
          <DifficultySelector
            selected={difficulty}
            onSelect={setDifficulty}
          />
        </div>

        {/* Quiz Info */}
        <div className={cn(
          'p-4 rounded-xl bg-secondary/50 border border-border',
          settings.animationsEnabled && 'animate-slide-up'
        )}
        style={settings.animationsEnabled ? { animationDelay: '0.1s' } : undefined}
        >
          <h3 className="font-medium text-foreground mb-2">Quiz Info</h3>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• 10 questions per quiz</li>
            <li>• Multiple choice answers</li>
            <li>• Score 80% or higher to master this book</li>
            <li>• Your progress is saved automatically</li>
          </ul>
        </div>

        {/* Start Button */}
        <Button
          onClick={handleStart}
          size="lg"
          disabled={questions.length === 0}
          className={cn(
            'w-full h-14 rounded-xl gold-gradient text-primary-foreground',
            'shadow-glow hover:opacity-90 transition-opacity',
            'font-display font-semibold text-lg',
            settings.animationsEnabled && 'animate-slide-up'
          )}
          style={settings.animationsEnabled ? { animationDelay: '0.2s' } : undefined}
        >
          <Play className="h-5 w-5 mr-3" />
          Start Quiz
        </Button>

        {questions.length === 0 && (
          <p className="text-center text-muted-foreground text-sm">
            No questions available for this book yet.
          </p>
        )}
      </div>
    </div>
  );
};

export default QuizSetup;
