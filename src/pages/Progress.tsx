import React from 'react';
import { 
  BookOpen, 
  Trophy, 
  Flame, 
  Target, 
  TrendingUp,
  CheckCircle
} from 'lucide-react';
import { Progress as ProgressBar } from '@/components/ui/progress';
import StatCard from '@/components/StatCard';
import { useApp } from '@/contexts/AppContext';
import { bibleBooks, getBooksByTestament } from '@/data/bible-books';
import { cn } from '@/lib/utils';

const Progress: React.FC = () => {
  const { progress, streak, settings } = useApp();

  const oldTestamentBooks = getBooksByTestament('old');
  const newTestamentBooks = getBooksByTestament('new');

  const oldTestamentCompleted = progress.booksCompleted.filter(
    id => oldTestamentBooks.some(b => b.id === id)
  ).length;
  
  const newTestamentCompleted = progress.booksCompleted.filter(
    id => newTestamentBooks.some(b => b.id === id)
  ).length;

  const overallProgress = Math.round(
    (progress.booksCompleted.length / bibleBooks.length) * 100
  );

  const overallAccuracy = progress.totalQuestions > 0
    ? Math.round((progress.totalCorrectAnswers / progress.totalQuestions) * 100)
    : 0;

  return (
    <div className="min-h-screen pb-24 parchment-gradient">
      {/* Header */}
      <div className="safe-top px-5 pt-4 pb-6">
        <h1 className={cn(
          'font-display text-2xl font-bold text-foreground text-center',
          settings.animationsEnabled && 'animate-fade-in'
        )}>
          Your Progress
        </h1>
      </div>

      {/* Content */}
      <div className="px-5 space-y-6">
        {/* Overall Progress Card */}
        <div className={cn(
          'p-6 rounded-2xl bg-card border border-border shadow-card',
          settings.animationsEnabled && 'animate-scale-in'
        )}>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="font-display text-lg font-semibold text-foreground">
                Bible Mastery
              </h2>
              <p className="text-sm text-muted-foreground">
                {progress.booksCompleted.length} of {bibleBooks.length} books mastered
              </p>
            </div>
            <div className="text-right">
              <span className="font-display text-3xl font-bold text-primary">
                {overallProgress}%
              </span>
            </div>
          </div>
          <ProgressBar value={overallProgress} className="h-3" />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-3">
          <StatCard
            icon={<Flame className="h-4 w-4" />}
            label="Current Streak"
            value={`${streak.currentStreak} days`}
            subtext={`Best: ${streak.longestStreak} days`}
            highlight={streak.currentStreak > 0}
          />
          <StatCard
            icon={<Target className="h-4 w-4" />}
            label="Accuracy"
            value={`${overallAccuracy}%`}
            subtext={`${progress.totalCorrectAnswers} correct`}
          />
          <StatCard
            icon={<Trophy className="h-4 w-4" />}
            label="Quizzes Taken"
            value={progress.totalQuizzesTaken}
          />
          <StatCard
            icon={<TrendingUp className="h-4 w-4" />}
            label="Questions Answered"
            value={progress.totalQuestions}
          />
        </div>

        {/* Testament Progress */}
        <div className="space-y-4">
          <h2 className="font-display text-lg font-semibold text-foreground px-1">
            Testament Progress
          </h2>

          {/* Old Testament */}
          <div className={cn(
            'p-4 rounded-xl bg-card border border-border shadow-soft',
            settings.animationsEnabled && 'animate-slide-up'
          )}>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                  <BookOpen className="h-5 w-5 text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Old Testament</h3>
                  <p className="text-sm text-muted-foreground">
                    {oldTestamentCompleted} of {oldTestamentBooks.length} books
                  </p>
                </div>
              </div>
              <span className="font-display font-semibold text-foreground">
                {Math.round((oldTestamentCompleted / oldTestamentBooks.length) * 100)}%
              </span>
            </div>
            <ProgressBar 
              value={(oldTestamentCompleted / oldTestamentBooks.length) * 100} 
              className="h-2" 
            />
          </div>

          {/* New Testament */}
          <div className={cn(
            'p-4 rounded-xl bg-card border border-border shadow-soft',
            settings.animationsEnabled && 'animate-slide-up'
          )}
          style={settings.animationsEnabled ? { animationDelay: '0.1s' } : undefined}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg gold-gradient flex items-center justify-center">
                  <BookOpen className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">New Testament</h3>
                  <p className="text-sm text-muted-foreground">
                    {newTestamentCompleted} of {newTestamentBooks.length} books
                  </p>
                </div>
              </div>
              <span className="font-display font-semibold text-foreground">
                {Math.round((newTestamentCompleted / newTestamentBooks.length) * 100)}%
              </span>
            </div>
            <ProgressBar 
              value={(newTestamentCompleted / newTestamentBooks.length) * 100} 
              className="h-2" 
            />
          </div>
        </div>

        {/* Mastered Books */}
        {progress.booksCompleted.length > 0 && (
          <div className="space-y-3">
            <h2 className="font-display text-lg font-semibold text-foreground px-1">
              Mastered Books
            </h2>
            <div className="flex flex-wrap gap-2">
              {progress.booksCompleted.map((bookId, index) => {
                const book = bibleBooks.find(b => b.id === bookId);
                if (!book) return null;
                
                return (
                  <div
                    key={bookId}
                    className={cn(
                      'flex items-center gap-2 px-3 py-2 rounded-lg',
                      'bg-success/10 border border-success/30 text-success',
                      settings.animationsEnabled && 'animate-scale-in'
                    )}
                    style={settings.animationsEnabled ? { animationDelay: `${index * 0.05}s` } : undefined}
                  >
                    <CheckCircle className="h-4 w-4" />
                    <span className="text-sm font-medium">{book.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {progress.booksCompleted.length === 0 && (
          <div className={cn(
            'text-center py-8',
            settings.animationsEnabled && 'animate-fade-in'
          )}>
            <Trophy className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
            <p className="text-muted-foreground">
              Score 80% or higher on a book quiz to master it!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Progress;
