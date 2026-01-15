import React from 'react';
import { ChevronRight, CheckCircle, Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import { BibleBook } from '@/data/bible-books';
import { useApp } from '@/contexts/AppContext';

interface BookCardProps {
  book: BibleBook;
  onClick: () => void;
  index?: number;
}

const BookCard: React.FC<BookCardProps> = ({ book, onClick, index = 0 }) => {
  const { progress, settings } = useApp();
  const bestScore = progress.bestScores[book.id];
  const isCompleted = progress.booksCompleted.includes(book.id);

  return (
    <button
      onClick={onClick}
      className={cn(
        'w-full flex items-center gap-4 p-4 rounded-xl',
        'bg-card border border-border shadow-soft',
        'transition-all duration-200 touch-feedback',
        'hover:shadow-card hover:border-primary/30',
        'text-left',
        settings.animationsEnabled && 'animate-slide-up'
      )}
      style={settings.animationsEnabled ? { animationDelay: `${index * 0.05}s` } : undefined}
    >
      {/* Book Icon/Badge */}
      <div className={cn(
        'flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center',
        'font-display text-lg font-semibold',
        isCompleted 
          ? 'gold-gradient text-primary-foreground shadow-glow' 
          : 'bg-secondary text-secondary-foreground'
      )}>
        {book.abbreviation.slice(0, 2)}
      </div>

      {/* Book Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <h3 className="font-display font-semibold text-foreground truncate">
            {book.name}
          </h3>
          {isCompleted && (
            <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
          )}
        </div>
        <div className="flex items-center gap-3 mt-1">
          <span className="text-sm text-muted-foreground">
            {book.chapters} {book.chapters === 1 ? 'chapter' : 'chapters'}
          </span>
          {bestScore !== undefined && (
            <div className="flex items-center gap-1 text-sm">
              <Star className="h-3.5 w-3.5 text-accent fill-accent" />
              <span className="text-accent font-medium">{bestScore}%</span>
            </div>
          )}
        </div>
      </div>

      {/* Arrow */}
      <ChevronRight className="h-5 w-5 text-muted-foreground flex-shrink-0" />
    </button>
  );
};

export default BookCard;
