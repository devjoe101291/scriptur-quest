import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  BookOpen, 
  Flame, 
  Trophy, 
  Play, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import StatCard from '@/components/StatCard';
import { useApp } from '@/contexts/AppContext';
import { bibleBooks } from '@/data/bible-books';
import { cn } from '@/lib/utils';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { progress, streak, currentSession, settings, resumeQuiz } = useApp();

  const completedPercentage = Math.round(
    (progress.booksCompleted.length / bibleBooks.length) * 100
  );
  
  const overallAccuracy = progress.totalQuestions > 0
    ? Math.round((progress.totalCorrectAnswers / progress.totalQuestions) * 100)
    : 0;

  const handleResume = () => {
    if (resumeQuiz()) {
      navigate('/quiz');
    }
  };

  return (
    <div className="min-h-screen pb-24 parchment-gradient">
      {/* Header */}
      <div className="safe-top px-5 pt-4 pb-6">
        <div className={cn(
          'text-center space-y-2',
          settings.animationsEnabled && 'animate-fade-in'
        )}>
          <div className="flex items-center justify-center gap-2">
            <Sparkles className="h-5 w-5 text-accent" />
            <h1 className="font-display text-2xl font-bold text-foreground">
              Bible Trivia
            </h1>
            <Sparkles className="h-5 w-5 text-accent" />
          </div>
          <p className="text-muted-foreground">Test your knowledge of Scripture</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-5 space-y-6">
        {/* Resume Quiz Card */}
        {currentSession && !currentSession.completed && (
          <div className={cn(
            'p-5 rounded-2xl royal-gradient text-primary-foreground shadow-card',
            settings.animationsEnabled && 'animate-scale-in'
          )}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-primary-foreground/80 text-sm font-medium mb-1">
                  Continue Quiz
                </p>
                <h3 className="font-display text-xl font-semibold">
                  {bibleBooks.find(b => b.id === currentSession.bookId)?.name}
                </h3>
                <p className="text-primary-foreground/70 text-sm mt-1">
                  Question {currentSession.currentIndex + 1} of {currentSession.questions.length}
                </p>
              </div>
              <Button
                onClick={handleResume}
                size="lg"
                className="rounded-xl bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                <Play className="h-5 w-5 mr-2" />
                Resume
              </Button>
            </div>
          </div>
        )}

        {/* Quick Start */}
        <div className={cn(
          'space-y-3',
          settings.animationsEnabled && 'animate-slide-up'
        )}>
          <h2 className="font-display text-lg font-semibold text-foreground px-1">
            Quick Start
          </h2>
          <Button
            onClick={() => navigate('/books')}
            size="lg"
            className="w-full h-14 rounded-xl gold-gradient text-primary-foreground shadow-glow hover:opacity-90 transition-opacity"
          >
            <BookOpen className="h-5 w-5 mr-3" />
            <span className="font-display font-semibold">Start New Quiz</span>
            <ArrowRight className="h-5 w-5 ml-auto" />
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="space-y-3">
          <h2 className="font-display text-lg font-semibold text-foreground px-1">
            Your Progress
          </h2>
          <div className="grid grid-cols-2 gap-3">
            <StatCard
              icon={<Flame className="h-4 w-4" />}
              label="Day Streak"
              value={streak.currentStreak}
              subtext={`Best: ${streak.longestStreak} days`}
              highlight={streak.currentStreak > 0}
            />
            <StatCard
              icon={<Trophy className="h-4 w-4" />}
              label="Accuracy"
              value={`${overallAccuracy}%`}
              subtext={`${progress.totalCorrectAnswers}/${progress.totalQuestions}`}
            />
            <StatCard
              icon={<BookOpen className="h-4 w-4" />}
              label="Books Mastered"
              value={`${progress.booksCompleted.length}/${bibleBooks.length}`}
              subtext={`${completedPercentage}% complete`}
            />
            <StatCard
              icon={<Sparkles className="h-4 w-4" />}
              label="Quizzes Taken"
              value={progress.totalQuizzesTaken}
              subtext="Keep going!"
            />
          </div>
        </div>

        {/* Featured Books */}
        <div className="space-y-3">
          <div className="flex items-center justify-between px-1">
            <h2 className="font-display text-lg font-semibold text-foreground">
              Popular Books
            </h2>
            <button
              onClick={() => navigate('/books')}
              className="text-sm text-primary font-medium hover:underline"
            >
              See all
            </button>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
            {['genesis', 'psalms', 'matthew', 'john', 'romans'].map((bookId, index) => {
              const book = bibleBooks.find(b => b.id === bookId);
              if (!book) return null;
              
              const bestScore = progress.bestScores[bookId];
              
              return (
                <button
                  key={bookId}
                  onClick={() => navigate(`/quiz-setup/${bookId}`)}
                  className={cn(
                    'flex-shrink-0 w-28 p-4 rounded-xl',
                    'bg-card border border-border shadow-soft',
                    'transition-all duration-200 touch-feedback',
                    'hover:shadow-card hover:border-primary/30',
                    settings.animationsEnabled && 'animate-slide-up'
                  )}
                  style={settings.animationsEnabled ? { animationDelay: `${index * 0.05}s` } : undefined}
                >
                  <div className={cn(
                    'w-10 h-10 rounded-lg flex items-center justify-center mb-3 mx-auto',
                    'font-display text-sm font-semibold',
                    progress.booksCompleted.includes(bookId)
                      ? 'gold-gradient text-primary-foreground'
                      : 'bg-secondary text-secondary-foreground'
                  )}>
                    {book.abbreviation.slice(0, 2)}
                  </div>
                  <h3 className="font-medium text-foreground text-sm text-center truncate">
                    {book.name}
                  </h3>
                  {bestScore !== undefined && (
                    <p className="text-xs text-accent text-center mt-1">
                      Best: {bestScore}%
                    </p>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
