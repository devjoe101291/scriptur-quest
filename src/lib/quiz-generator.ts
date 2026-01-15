import { questions, QuizQuestion, shuffleQuestions } from '@/data/questions';

export interface QuizSession {
  id: string;
  bookId: string;
  difficulty: 'easy' | 'medium' | 'hard' | 'all';
  questions: QuizQuestion[];
  currentIndex: number;
  answers: (number | null)[];
  startTime: number;
  endTime?: number;
  completed: boolean;
}

export interface QuizResult {
  sessionId: string;
  bookId: string;
  difficulty: string;
  totalQuestions: number;
  correctAnswers: number;
  percentage: number;
  timeTaken: number;
  date: number;
}

const QUESTIONS_PER_QUIZ = 10;

export const generateQuizSession = (
  bookId: string,
  difficulty: 'easy' | 'medium' | 'hard' | 'all' = 'all'
): QuizSession => {
  let availableQuestions = questions.filter(q => q.bookId === bookId);
  
  if (difficulty !== 'all') {
    availableQuestions = availableQuestions.filter(q => q.difficulty === difficulty);
  }
  
  // If not enough questions for this book/difficulty, include similar difficulty or all
  if (availableQuestions.length < QUESTIONS_PER_QUIZ) {
    availableQuestions = questions.filter(q => q.bookId === bookId);
  }
  
  // If still not enough, we'll use what we have
  const shuffled = shuffleQuestions(availableQuestions);
  const selectedQuestions = shuffled.slice(0, Math.min(QUESTIONS_PER_QUIZ, shuffled.length));
  
  return {
    id: `quiz-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    bookId,
    difficulty,
    questions: selectedQuestions,
    currentIndex: 0,
    answers: new Array(selectedQuestions.length).fill(null),
    startTime: Date.now(),
    completed: false,
  };
};

export const calculateResults = (session: QuizSession): QuizResult => {
  const correctCount = session.answers.reduce((count, answer, index) => {
    if (answer === session.questions[index]?.correctAnswer) {
      return count + 1;
    }
    return count;
  }, 0);

  return {
    sessionId: session.id,
    bookId: session.bookId,
    difficulty: session.difficulty,
    totalQuestions: session.questions.length,
    correctAnswers: correctCount,
    percentage: Math.round((correctCount / session.questions.length) * 100),
    timeTaken: (session.endTime || Date.now()) - session.startTime,
    date: Date.now(),
  };
};

export const formatTime = (ms: number): string => {
  const seconds = Math.floor(ms / 1000);
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
};
