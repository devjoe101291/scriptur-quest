import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, RotateCcw, Share2, Trophy, Clock, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ScoreCircle from '@/components/ScoreCircle';
import StatCard from '@/components/StatCard';
import { QuizResult, formatTime } from '@/lib/quiz-generator';
import { getBookById } from '@/data/bible-books';
import { useApp } from '@/contexts/AppContext';
import { cn } from '@/lib/utils';

const Results: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { settings } = useApp();
  
  const result = location.state?.result as QuizResult | undefined;

  if (!result) {
    return (
      <div className="min-h-screen flex items-center justify-center parchment-gradient">
        <div className="text-center">
          <p className="text-muted-foreground">No results to display</p>
          <Button onClick={() => navigate('/')} className="mt-4">
            Go Home
          </Button>
        </div>
      </div>
    );
  }

  const book = getBookById(result.bookId);
  const isPerfect = result.percentage === 100;
  const isMastered = result.percentage >= 80;

  const handleShare = async () => {
    const text = `I scored ${result.percentage}% on ${book?.name || 'Bible'} Trivia! 📖✨`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Bible Trivia Score',
          text,
        });
      } catch (err) {
        // User cancelled or error
      }
    } else {
      // Fallback to clipboard
      navigator.clipboard.writeText(text);
    }
  };

  const handlePlayAgain = () => {
    navigate(`/quiz-setup/${result.bookId}`);
  };

  return (
    <div className="min-h-screen parchment-gradient">
      {/* Celebration Header */}
      <div className={cn(
        'safe-top px-5 pt-8 pb-6 text-center',
        isMastered && 'gold-gradient'
      )}>
        <div className={cn(
          settings.animationsEnabled && 'animate-bounce-in'
        )}>
          {isPerfect ? (
            <div className="text-6xl mb-4">🏆</div>
          ) : isMastered ? (
            <div className="text-6xl mb-4">🌟</div>
          ) : result.percentage >= 60 ? (
            <div className="text-6xl mb-4">👏</div>
          ) : (
            <div className="text-6xl mb-4">📚</div>
          )}
        </div>
        
        <h1 className={cn(
          'font-display text-2xl font-bold',
          isMastered ? 'text-primary-foreground' : 'text-foreground'
        )}>
          {isPerfect ? 'Perfect Score!' : isMastered ? 'Well Done!' : result.percentage >= 60 ? 'Good Effort!' : 'Keep Studying!'}
        </h1>
        
        <p className={cn(
          'mt-2',
          isMastered ? 'text-primary-foreground/80' : 'text-muted-foreground'
        )}>
          {book?.name} Quiz Complete
        </p>
      </div>

      {/* Score Circle */}
      <div className={cn(
        'flex justify-center py-8',
        settings.animationsEnabled && 'animate-scale-in'
      )}>
        <ScoreCircle percentage={result.percentage} size="lg" />
      </div>

      {/* Stats */}
      <div className="px-5 space-y-4">
        <div className="grid grid-cols-3 gap-3">
          <StatCard
            icon={<Target className="h-4 w-4" />}
            label="Correct"
            value={`${result.correctAnswers}/${result.totalQuestions}`}
          />
          <StatCard
            icon={<Clock className="h-4 w-4" />}
            label="Time"
            value={formatTime(result.timeTaken)}
          />
          <StatCard
            icon={<Trophy className="h-4 w-4" />}
            label="Difficulty"
            value={result.difficulty.charAt(0).toUpperCase() + result.difficulty.slice(1)}
          />
        </div>

        {isMastered && (
          <div className={cn(
            'p-4 rounded-xl bg-success/10 border border-success/30 text-center',
            settings.animationsEnabled && 'animate-slide-up'
          )}>
            <p className="text-success font-medium">
              🎉 You've mastered {book?.name}!
            </p>
          </div>
        )}

        {/* Actions */}
        <div className={cn(
          'space-y-3 pt-4',
          settings.animationsEnabled && 'animate-slide-up'
        )}
        style={settings.animationsEnabled ? { animationDelay: '0.2s' } : undefined}
        >
          <Button
            onClick={handlePlayAgain}
            size="lg"
            className="w-full h-14 rounded-xl gold-gradient text-primary-foreground shadow-glow hover:opacity-90"
          >
            <RotateCcw className="h-5 w-5 mr-2" />
            Play Again
          </Button>
          
          <div className="grid grid-cols-2 gap-3">
            <Button
              onClick={handleShare}
              variant="outline"
              size="lg"
              className="h-12 rounded-xl"
            >
              <Share2 className="h-5 w-5 mr-2" />
              Share
            </Button>
            <Button
              onClick={() => navigate('/')}
              variant="outline"
              size="lg"
              className="h-12 rounded-xl"
            >
              <Home className="h-5 w-5 mr-2" />
              Home
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
