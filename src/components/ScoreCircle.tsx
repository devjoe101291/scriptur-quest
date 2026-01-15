import React from 'react';
import { cn } from '@/lib/utils';
import { useApp } from '@/contexts/AppContext';

interface ScoreCircleProps {
  percentage: number;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
}

const sizes = {
  sm: { container: 'w-20 h-20', text: 'text-2xl', stroke: 6 },
  md: { container: 'w-32 h-32', text: 'text-4xl', stroke: 8 },
  lg: { container: 'w-48 h-48', text: 'text-6xl', stroke: 10 },
};

const ScoreCircle: React.FC<ScoreCircleProps> = ({
  percentage,
  size = 'md',
  showLabel = true,
}) => {
  const { settings } = useApp();
  const { container, text, stroke } = sizes[size];
  
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;
  
  const getScoreColor = () => {
    if (percentage >= 80) return 'text-success';
    if (percentage >= 60) return 'text-accent';
    if (percentage >= 40) return 'text-orange-500';
    return 'text-destructive';
  };

  const getStrokeColor = () => {
    if (percentage >= 80) return 'stroke-success';
    if (percentage >= 60) return 'stroke-accent';
    if (percentage >= 40) return 'stroke-orange-500';
    return 'stroke-destructive';
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <div className={cn('relative', container)}>
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          {/* Background circle */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth={stroke}
            className="text-secondary"
          />
          {/* Progress circle */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={settings.animationsEnabled ? offset : offset}
            className={cn(
              getStrokeColor(),
              settings.animationsEnabled && 'transition-all duration-1000 ease-out'
            )}
            style={settings.animationsEnabled ? {
              animation: 'circle-progress 1s ease-out forwards',
            } : undefined}
          />
        </svg>
        
        {/* Percentage Text */}
        <div className={cn(
          'absolute inset-0 flex items-center justify-center',
          'font-display font-bold',
          text,
          getScoreColor()
        )}>
          {percentage}%
        </div>
      </div>
      
      {showLabel && (
        <div className={cn(
          'text-sm font-medium',
          getScoreColor()
        )}>
          {percentage >= 80 && 'Excellent!'}
          {percentage >= 60 && percentage < 80 && 'Good Job!'}
          {percentage >= 40 && percentage < 60 && 'Keep Practicing'}
          {percentage < 40 && 'Study More'}
        </div>
      )}
    </div>
  );
};

export default ScoreCircle;
