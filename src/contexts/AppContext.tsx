import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { 
  AppSettings, 
  UserProgress, 
  StreakData,
  getSettings, 
  saveSettings,
  getProgress,
  getStreak,
  updateStreak as updateStreakStorage,
  updateProgressWithResult,
  saveScore,
  getCurrentSession,
  saveCurrentSession,
  clearCurrentSession,
  resetAllProgress,
} from '@/lib/storage';
import { QuizSession, QuizResult, generateQuizSession, calculateResults } from '@/lib/quiz-generator';

interface AppContextType {
  // Settings
  settings: AppSettings;
  updateSettings: (updates: Partial<AppSettings>) => void;
  
  // Progress
  progress: UserProgress;
  streak: StreakData;
  
  // Quiz
  currentSession: QuizSession | null;
  startQuiz: (bookId: string, difficulty?: 'easy' | 'medium' | 'hard' | 'all') => void;
  answerQuestion: (answerIndex: number) => void;
  nextQuestion: () => void;
  completeQuiz: () => QuizResult | null;
  resumeQuiz: () => boolean;
  abandonQuiz: () => void;
  
  // Data management
  resetProgress: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<AppSettings>(getSettings);
  const [progress, setProgress] = useState<UserProgress>(getProgress);
  const [streak, setStreak] = useState<StreakData>(getStreak);
  const [currentSession, setCurrentSession] = useState<QuizSession | null>(null);

  // Apply dark mode
  useEffect(() => {
    if (settings.darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [settings.darkMode]);

  // Check for saved session on mount
  useEffect(() => {
    const saved = getCurrentSession();
    if (saved && !saved.completed) {
      setCurrentSession(saved);
    }
  }, []);

  const handleUpdateSettings = useCallback((updates: Partial<AppSettings>) => {
    setSettings(prev => {
      const updated = { ...prev, ...updates };
      saveSettings(updated);
      return updated;
    });
  }, []);

  const startQuiz = useCallback((bookId: string, difficulty: 'easy' | 'medium' | 'hard' | 'all' = 'all') => {
    const session = generateQuizSession(bookId, difficulty);
    setCurrentSession(session);
    saveCurrentSession(session);
    
    // Update streak when starting a quiz
    const updatedStreak = updateStreakStorage();
    setStreak(updatedStreak);
  }, []);

  const answerQuestion = useCallback((answerIndex: number) => {
    if (!currentSession) return;
    
    const updatedSession = {
      ...currentSession,
      answers: currentSession.answers.map((a, i) => 
        i === currentSession.currentIndex ? answerIndex : a
      ),
    };
    
    setCurrentSession(updatedSession);
    saveCurrentSession(updatedSession);
  }, [currentSession]);

  const nextQuestion = useCallback(() => {
    if (!currentSession) return;
    
    const updatedSession = {
      ...currentSession,
      currentIndex: currentSession.currentIndex + 1,
    };
    
    setCurrentSession(updatedSession);
    saveCurrentSession(updatedSession);
  }, [currentSession]);

  const completeQuiz = useCallback((): QuizResult | null => {
    if (!currentSession) return null;
    
    const completedSession: QuizSession = {
      ...currentSession,
      completed: true,
      endTime: Date.now(),
    };
    
    const result = calculateResults(completedSession);
    
    // Save result and update progress
    saveScore(result);
    const updatedProgress = updateProgressWithResult(result);
    setProgress(updatedProgress);
    
    // Clear current session
    setCurrentSession(null);
    clearCurrentSession();
    
    return result;
  }, [currentSession]);

  const resumeQuiz = useCallback((): boolean => {
    const saved = getCurrentSession();
    if (saved && !saved.completed) {
      setCurrentSession(saved);
      return true;
    }
    return false;
  }, []);

  const abandonQuiz = useCallback(() => {
    setCurrentSession(null);
    clearCurrentSession();
  }, []);

  const resetProgress = useCallback(() => {
    resetAllProgress();
    setProgress(getProgress());
    setStreak(getStreak());
    setCurrentSession(null);
  }, []);

  return (
    <AppContext.Provider
      value={{
        settings,
        updateSettings: handleUpdateSettings,
        progress,
        streak,
        currentSession,
        startQuiz,
        answerQuestion,
        nextQuestion,
        completeQuiz,
        resumeQuiz,
        abandonQuiz,
        resetProgress,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
