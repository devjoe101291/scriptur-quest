import React, { useEffect, useRef } from 'react';
import { Check, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useApp } from '@/contexts/AppContext';
import { useSoundEffects } from '@/hooks/useSoundEffects';

interface QuizOptionProps {
  option: string;
  index: number;
  isSelected: boolean;
  isCorrect: boolean;
  showResult: boolean;
  onSelect: () => void;
  disabled: boolean;
}

const optionLabels = ['A', 'B', 'C', 'D'];

const QuizOption: React.FC<QuizOptionProps> = ({
  option,
  index,
  isSelected,
  isCorrect,
  showResult,
  onSelect,
  disabled,
}) => {
  const { settings } = useApp();
  const { playCorrect, playWrong, playTap } = useSoundEffects();
  const hasPlayedSound = useRef(false);

  // Play sound when result is shown
  useEffect(() => {
    if (showResult && isSelected && !hasPlayedSound.current) {
      hasPlayedSound.current = true;
      if (isCorrect) {
        playCorrect();
      } else {
        playWrong();
      }
    }
    if (!showResult) {
      hasPlayedSound.current = false;
    }
  }, [showResult, isSelected, isCorrect, playCorrect, playWrong]);

  const handleSelect = () => {
    playTap();
    onSelect();
  };

  const getOptionState = () => {
    if (!showResult) {
      return isSelected ? 'selected' : 'default';
    }
    if (isCorrect) return 'correct';
    if (isSelected && !isCorrect) return 'wrong';
    return 'default';
  };

  const state = getOptionState();

  return (
    <button
      onClick={handleSelect}
      disabled={disabled}
      className={cn(
        'quiz-option w-full flex items-center gap-4 text-left',
        state === 'selected' && 'selected',
        state === 'correct' && 'correct',
        state === 'wrong' && 'wrong',
        state === 'correct' && settings.animationsEnabled && 'pulse-glow-success',
        state === 'wrong' && settings.animationsEnabled && 'shake',
        disabled && 'pointer-events-none',
        settings.animationsEnabled && 'animate-slide-up'
      )}
      style={settings.animationsEnabled ? { animationDelay: `${index * 0.1}s` } : undefined}
    >
      {/* Option Label */}
      <div className={cn(
        'flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center',
        'font-display font-semibold text-sm',
        state === 'correct' && 'bg-success text-success-foreground',
        state === 'wrong' && 'bg-destructive text-destructive-foreground',
        state === 'selected' && 'bg-primary text-primary-foreground',
        state === 'default' && 'bg-secondary text-secondary-foreground'
      )}>
        {showResult ? (
          state === 'correct' ? (
            <Check className="h-5 w-5" />
          ) : state === 'wrong' ? (
            <X className="h-5 w-5" />
          ) : (
            optionLabels[index]
          )
        ) : (
          optionLabels[index]
        )}
      </div>

      {/* Option Text */}
      <span className={cn(
        'flex-1 font-medium',
        state === 'correct' && 'text-success',
        state === 'wrong' && 'text-destructive'
      )}>
        {option}
      </span>
    </button>
  );
};

export default QuizOption;
