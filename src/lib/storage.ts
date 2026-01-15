import { QuizSession, QuizResult } from './quiz-generator';

const STORAGE_KEYS = {
  SCORES: 'bible-trivia-scores',
  PROGRESS: 'bible-trivia-progress',
  CURRENT_SESSION: 'bible-trivia-current-session',
  SETTINGS: 'bible-trivia-settings',
  STREAK: 'bible-trivia-streak',
} as const;

export interface UserProgress {
  booksCompleted: string[];
  totalQuizzesTaken: number;
  totalCorrectAnswers: number;
  totalQuestions: number;
  bestScores: Record<string, number>; // bookId -> best percentage
}

export interface AppSettings {
  darkMode: boolean;
  soundEnabled: boolean;
  animationsEnabled: boolean;
  defaultDifficulty: 'easy' | 'medium' | 'hard' | 'all';
  hapticFeedback: boolean;
}

export interface StreakData {
  currentStreak: number;
  longestStreak: number;
  lastPlayedDate: string | null;
}

const DEFAULT_SETTINGS: AppSettings = {
  darkMode: false,
  soundEnabled: true,
  animationsEnabled: true,
  defaultDifficulty: 'all',
  hapticFeedback: true,
};

const DEFAULT_PROGRESS: UserProgress = {
  booksCompleted: [],
  totalQuizzesTaken: 0,
  totalCorrectAnswers: 0,
  totalQuestions: 0,
  bestScores: {},
};

const DEFAULT_STREAK: StreakData = {
  currentStreak: 0,
  longestStreak: 0,
  lastPlayedDate: null,
};

// Generic storage helpers
const getItem = <T>(key: string, defaultValue: T): T => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch {
    return defaultValue;
  }
};

const setItem = <T>(key: string, value: T): void => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('Failed to save to localStorage:', error);
  }
};

// Settings
export const getSettings = (): AppSettings => 
  getItem(STORAGE_KEYS.SETTINGS, DEFAULT_SETTINGS);

export const saveSettings = (settings: AppSettings): void => 
  setItem(STORAGE_KEYS.SETTINGS, settings);

export const updateSettings = (updates: Partial<AppSettings>): AppSettings => {
  const current = getSettings();
  const updated = { ...current, ...updates };
  saveSettings(updated);
  return updated;
};

// Progress
export const getProgress = (): UserProgress =>
  getItem(STORAGE_KEYS.PROGRESS, DEFAULT_PROGRESS);

export const saveProgress = (progress: UserProgress): void =>
  setItem(STORAGE_KEYS.PROGRESS, progress);

export const updateProgressWithResult = (result: QuizResult): UserProgress => {
  const progress = getProgress();
  
  progress.totalQuizzesTaken += 1;
  progress.totalCorrectAnswers += result.correctAnswers;
  progress.totalQuestions += result.totalQuestions;
  
  // Update best score for this book
  const currentBest = progress.bestScores[result.bookId] || 0;
  if (result.percentage > currentBest) {
    progress.bestScores[result.bookId] = result.percentage;
  }
  
  // Mark book as completed if scored >= 80%
  if (result.percentage >= 80 && !progress.booksCompleted.includes(result.bookId)) {
    progress.booksCompleted.push(result.bookId);
  }
  
  saveProgress(progress);
  return progress;
};

// Scores history
export const getScores = (): QuizResult[] =>
  getItem(STORAGE_KEYS.SCORES, []);

export const saveScore = (result: QuizResult): void => {
  const scores = getScores();
  scores.unshift(result); // Add to beginning
  // Keep only last 100 scores
  const trimmed = scores.slice(0, 100);
  setItem(STORAGE_KEYS.SCORES, trimmed);
};

// Current session (for resume functionality)
export const getCurrentSession = (): QuizSession | null =>
  getItem(STORAGE_KEYS.CURRENT_SESSION, null);

export const saveCurrentSession = (session: QuizSession | null): void =>
  setItem(STORAGE_KEYS.CURRENT_SESSION, session);

export const clearCurrentSession = (): void =>
  localStorage.removeItem(STORAGE_KEYS.CURRENT_SESSION);

// Streak
export const getStreak = (): StreakData =>
  getItem(STORAGE_KEYS.STREAK, DEFAULT_STREAK);

export const updateStreak = (): StreakData => {
  const streak = getStreak();
  const today = new Date().toISOString().split('T')[0];
  const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
  
  if (streak.lastPlayedDate === today) {
    // Already played today, no update needed
    return streak;
  }
  
  if (streak.lastPlayedDate === yesterday) {
    // Continuing streak
    streak.currentStreak += 1;
    if (streak.currentStreak > streak.longestStreak) {
      streak.longestStreak = streak.currentStreak;
    }
  } else {
    // Streak broken, start new one
    streak.currentStreak = 1;
  }
  
  streak.lastPlayedDate = today;
  setItem(STORAGE_KEYS.STREAK, streak);
  return streak;
};

// Reset all data
export const resetAllProgress = (): void => {
  localStorage.removeItem(STORAGE_KEYS.SCORES);
  localStorage.removeItem(STORAGE_KEYS.PROGRESS);
  localStorage.removeItem(STORAGE_KEYS.CURRENT_SESSION);
  localStorage.removeItem(STORAGE_KEYS.STREAK);
};
