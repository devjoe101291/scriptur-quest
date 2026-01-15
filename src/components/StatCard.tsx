import React from 'react';
import { cn } from '@/lib/utils';

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  subtext?: string;
  className?: string;
  highlight?: boolean;
}

const StatCard: React.FC<StatCardProps> = ({
  icon,
  label,
  value,
  subtext,
  className,
  highlight = false,
}) => {
  return (
    <div
      className={cn(
        'p-4 rounded-xl border',
        highlight
          ? 'gold-gradient text-primary-foreground border-accent/30 shadow-glow'
          : 'bg-card border-border shadow-soft',
        className
      )}
    >
      <div className={cn(
        'flex items-center gap-2 mb-2',
        highlight ? 'text-primary-foreground/80' : 'text-muted-foreground'
      )}>
        {icon}
        <span className="text-sm font-medium">{label}</span>
      </div>
      <div className={cn(
        'font-display text-2xl font-bold',
        highlight ? 'text-primary-foreground' : 'text-foreground'
      )}>
        {value}
      </div>
      {subtext && (
        <div className={cn(
          'text-xs mt-1',
          highlight ? 'text-primary-foreground/70' : 'text-muted-foreground'
        )}>
          {subtext}
        </div>
      )}
    </div>
  );
};

export default StatCard;
