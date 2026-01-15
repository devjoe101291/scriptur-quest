export interface QuizQuestion {
  id: string;
  bookId: string;
  difficulty: 'easy' | 'medium' | 'hard';
  type: 'multiple-choice' | 'verse-completion' | 'who-said' | 'which-book';
  question: string;
  options: string[];
  correctAnswer: number;
  reference?: string;
  explanation?: string;
}

// Import all book-specific questions
import { genesisQuestions } from './questions/genesis-questions';
import { exodusQuestions } from './questions/exodus-questions';
import { psalmsQuestions } from './questions/psalms-questions';
import { matthewQuestions } from './questions/matthew-questions';
import { johnQuestions } from './questions/john-questions';
import {
  leviticusQuestions,
  numbersQuestions,
  deuteronomyQuestions,
  joshuaQuestions,
  judgesQuestions,
  ruthQuestions,
  samuel1Questions,
  samuel2Questions,
  kings1Questions,
  kings2Questions,
  chronicles1Questions,
  chronicles2Questions,
  ezraQuestions,
  nehemiahQuestions,
  estherQuestions,
  jobQuestions,
  proverbsQuestions,
  ecclesiastesQuestions,
  songOfSolomonQuestions,
  isaiahQuestions,
  jeremiahQuestions,
  lamentationsQuestions,
  ezekielQuestions,
  danielQuestions,
  hoseaQuestions,
  joelQuestions,
  amosQuestions,
  obadiahQuestions,
  jonahQuestions,
  micahQuestions,
  nahumQuestions,
  habakkukQuestions,
  zephaniahQuestions,
  haggaiQuestions,
  zechariahQuestions,
  malachiQuestions,
  markQuestions,
  lukeQuestions,
  actsQuestions,
  romansQuestions,
  corinthians1Questions,
  corinthians2Questions,
  galatiansQuestions,
  ephesiansQuestions,
  philippiansQuestions,
  colossiansQuestions,
  thessalonians1Questions,
  thessalonians2Questions,
  timothy1Questions,
  timothy2Questions,
  titusQuestions,
  philemonQuestions,
  hebrewsQuestions,
  jamesQuestions,
  peter1Questions,
  peter2Questions,
  john1Questions,
  john2Questions,
  john3Questions,
  judeQuestions,
  revelationQuestions,
} from './questions/remaining-books-questions';

// Combine all questions into one array
export const questions: QuizQuestion[] = [
  ...genesisQuestions,
  ...exodusQuestions,
  ...leviticusQuestions,
  ...numbersQuestions,
  ...deuteronomyQuestions,
  ...joshuaQuestions,
  ...judgesQuestions,
  ...ruthQuestions,
  ...samuel1Questions,
  ...samuel2Questions,
  ...kings1Questions,
  ...kings2Questions,
  ...chronicles1Questions,
  ...chronicles2Questions,
  ...ezraQuestions,
  ...nehemiahQuestions,
  ...estherQuestions,
  ...jobQuestions,
  ...psalmsQuestions,
  ...proverbsQuestions,
  ...ecclesiastesQuestions,
  ...songOfSolomonQuestions,
  ...isaiahQuestions,
  ...jeremiahQuestions,
  ...lamentationsQuestions,
  ...ezekielQuestions,
  ...danielQuestions,
  ...hoseaQuestions,
  ...joelQuestions,
  ...amosQuestions,
  ...obadiahQuestions,
  ...jonahQuestions,
  ...micahQuestions,
  ...nahumQuestions,
  ...habakkukQuestions,
  ...zephaniahQuestions,
  ...haggaiQuestions,
  ...zechariahQuestions,
  ...malachiQuestions,
  ...matthewQuestions,
  ...markQuestions,
  ...lukeQuestions,
  ...johnQuestions,
  ...actsQuestions,
  ...romansQuestions,
  ...corinthians1Questions,
  ...corinthians2Questions,
  ...galatiansQuestions,
  ...ephesiansQuestions,
  ...philippiansQuestions,
  ...colossiansQuestions,
  ...thessalonians1Questions,
  ...thessalonians2Questions,
  ...timothy1Questions,
  ...timothy2Questions,
  ...titusQuestions,
  ...philemonQuestions,
  ...hebrewsQuestions,
  ...jamesQuestions,
  ...peter1Questions,
  ...peter2Questions,
  ...john1Questions,
  ...john2Questions,
  ...john3Questions,
  ...judeQuestions,
  ...revelationQuestions,
];

export const getQuestionsByBook = (bookId: string) =>
  questions.filter(q => q.bookId === bookId);

export const getQuestionsByDifficulty = (bookId: string, difficulty: 'easy' | 'medium' | 'hard') =>
  questions.filter(q => q.bookId === bookId && q.difficulty === difficulty);

export const shuffleQuestions = (questionsArray: QuizQuestion[]): QuizQuestion[] => {
  const shuffled = [...questionsArray];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Get statistics about available questions
export const getQuestionStats = () => {
  const stats = {
    total: questions.length,
    byDifficulty: {
      easy: questions.filter(q => q.difficulty === 'easy').length,
      medium: questions.filter(q => q.difficulty === 'medium').length,
      hard: questions.filter(q => q.difficulty === 'hard').length,
    },
    byBook: {} as Record<string, number>,
  };
  
  questions.forEach(q => {
    stats.byBook[q.bookId] = (stats.byBook[q.bookId] || 0) + 1;
  });
  
  return stats;
};
