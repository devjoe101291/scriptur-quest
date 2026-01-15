import React from 'react';
import { cn } from '@/lib/utils';
import { useApp } from '@/contexts/AppContext';

interface QuizProgressProps {
  current: number;
  total: number;
  answers: (number | null)[];
  correctAnswers: number[];
}

const QuizProgress: React.FC<QuizProgressProps> = ({
  current,
  total,
  answers,
  correctAnswers,
}) => {
  const { settings } = useApp();

  return (
    <div className="space-y-3">
      {/* Progress Bar */}
      <div className="flex items-center gap-3">
        <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
          <div
            className={cn(
              'h-full gold-gradient transition-all duration-500',
              settings.animationsEnabled && 'ease-out'
            )}
            style={{ width: `${((current + 1) / total) * 100}%` }}
          />
        </div>
        <span className="text-sm font-medium text-muted-foreground min-w-[3rem] text-right">
          {current + 1}/{total}
        </span>
      </div>

      {/* Question Dots */}
      <div className="flex justify-center gap-1.5">
        {Array.from({ length: total }).map((_, index) => {
          const answer = answers[index];
          const isAnswered = answer !== null;
          const isCorrect = isAnswered && answer === correctAnswers[index];
          const isCurrent = index === current;

          return (
            <div
              key={index}
              className={cn(
                'h-2 rounded-full transition-all duration-300',
                isCurrent ? 'w-6' : 'w-2',
                !isAnswered && !isCurrent && 'bg-secondary',
                !isAnswered && isCurrent && 'bg-primary',
                isAnswered && isCorrect && 'bg-success',
                isAnswered && !isCorrect && 'bg-destructive'
              )}
            />
          );
        })}
      </div>
    </div>
  );
};

export default QuizProgress;
