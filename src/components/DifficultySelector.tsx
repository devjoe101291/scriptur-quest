import React from 'react';
import { Zap, Flame, Skull, Shuffle } from 'lucide-react';
import { cn } from '@/lib/utils';

type Difficulty = 'easy' | 'medium' | 'hard' | 'all';

interface DifficultySelectorProps {
  selected: Difficulty;
  onSelect: (difficulty: Difficulty) => void;
}

const difficulties: { id: Difficulty; label: string; icon: React.ReactNode; color: string }[] = [
  { id: 'easy', label: 'Easy', icon: <Zap className="h-5 w-5" />, color: 'text-success' },
  { id: 'medium', label: 'Medium', icon: <Flame className="h-5 w-5" />, color: 'text-accent' },
  { id: 'hard', label: 'Hard', icon: <Skull className="h-5 w-5" />, color: 'text-destructive' },
  { id: 'all', label: 'Mixed', icon: <Shuffle className="h-5 w-5" />, color: 'text-primary' },
];

const DifficultySelector: React.FC<DifficultySelectorProps> = ({ selected, onSelect }) => {
  return (
    <div className="grid grid-cols-2 gap-3">
      {difficulties.map((diff) => (
        <button
          key={diff.id}
          onClick={() => onSelect(diff.id)}
          className={cn(
            'flex items-center justify-center gap-2 p-4 rounded-xl',
            'border-2 transition-all duration-200 touch-feedback',
            'font-medium',
            selected === diff.id
              ? 'border-primary bg-primary/10 shadow-soft'
              : 'border-border bg-card hover:border-primary/30'
          )}
        >
          <span className={diff.color}>{diff.icon}</span>
          <span>{diff.label}</span>
        </button>
      ))}
    </div>
  );
};

export default DifficultySelector;
