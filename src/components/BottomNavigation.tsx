import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Home, BookOpen, Trophy, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useApp } from '@/contexts/AppContext';

interface NavItem {
  path: string;
  icon: React.ReactNode;
  label: string;
}

const navItems: NavItem[] = [
  { path: '/', icon: <Home className="h-6 w-6" />, label: 'Home' },
  { path: '/books', icon: <BookOpen className="h-6 w-6" />, label: 'Books' },
  { path: '/progress', icon: <Trophy className="h-6 w-6" />, label: 'Progress' },
  { path: '/settings', icon: <Settings className="h-6 w-6" />, label: 'Settings' },
];

const BottomNavigation: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { settings } = useApp();

  // Don't show navigation during quiz
  if (location.pathname.startsWith('/quiz')) {
    return null;
  }

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 glass-effect border-t border-border safe-bottom">
      <div className="flex items-center justify-around h-16 max-w-lg mx-auto px-4">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={cn(
                'flex flex-col items-center justify-center flex-1 h-full',
                'transition-all duration-200 touch-feedback',
                settings.animationsEnabled && 'hover:scale-105',
                isActive ? 'text-nav-active' : 'text-nav-inactive'
              )}
            >
              <div className={cn(
                'relative',
                isActive && settings.animationsEnabled && 'animate-bounce-in'
              )}>
                {item.icon}
                {isActive && (
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />
                )}
              </div>
              <span className={cn(
                'text-xs mt-1 font-medium',
                isActive ? 'opacity-100' : 'opacity-70'
              )}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNavigation;
