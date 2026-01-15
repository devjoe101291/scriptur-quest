export interface BibleBook {
  id: string;
  name: string;
  abbreviation: string;
  testament: 'old' | 'new';
  chapters: number;
  category: string;
}

export const bibleBooks: BibleBook[] = [
  // Old Testament - Law/Pentateuch
  { id: 'genesis', name: 'Genesis', abbreviation: 'Gen', testament: 'old', chapters: 50, category: 'Law' },
  { id: 'exodus', name: 'Exodus', abbreviation: 'Exod', testament: 'old', chapters: 40, category: 'Law' },
  { id: 'leviticus', name: 'Leviticus', abbreviation: 'Lev', testament: 'old', chapters: 27, category: 'Law' },
  { id: 'numbers', name: 'Numbers', abbreviation: 'Num', testament: 'old', chapters: 36, category: 'Law' },
  { id: 'deuteronomy', name: 'Deuteronomy', abbreviation: 'Deut', testament: 'old', chapters: 34, category: 'Law' },
  
  // Old Testament - History
  { id: 'joshua', name: 'Joshua', abbreviation: 'Josh', testament: 'old', chapters: 24, category: 'History' },
  { id: 'judges', name: 'Judges', abbreviation: 'Judg', testament: 'old', chapters: 21, category: 'History' },
  { id: 'ruth', name: 'Ruth', abbreviation: 'Ruth', testament: 'old', chapters: 4, category: 'History' },
  { id: '1-samuel', name: '1 Samuel', abbreviation: '1 Sam', testament: 'old', chapters: 31, category: 'History' },
  { id: '2-samuel', name: '2 Samuel', abbreviation: '2 Sam', testament: 'old', chapters: 24, category: 'History' },
  { id: '1-kings', name: '1 Kings', abbreviation: '1 Kgs', testament: 'old', chapters: 22, category: 'History' },
  { id: '2-kings', name: '2 Kings', abbreviation: '2 Kgs', testament: 'old', chapters: 25, category: 'History' },
  { id: '1-chronicles', name: '1 Chronicles', abbreviation: '1 Chr', testament: 'old', chapters: 29, category: 'History' },
  { id: '2-chronicles', name: '2 Chronicles', abbreviation: '2 Chr', testament: 'old', chapters: 36, category: 'History' },
  { id: 'ezra', name: 'Ezra', abbreviation: 'Ezra', testament: 'old', chapters: 10, category: 'History' },
  { id: 'nehemiah', name: 'Nehemiah', abbreviation: 'Neh', testament: 'old', chapters: 13, category: 'History' },
  { id: 'esther', name: 'Esther', abbreviation: 'Esth', testament: 'old', chapters: 10, category: 'History' },
  
  // Old Testament - Poetry/Wisdom
  { id: 'job', name: 'Job', abbreviation: 'Job', testament: 'old', chapters: 42, category: 'Wisdom' },
  { id: 'psalms', name: 'Psalms', abbreviation: 'Ps', testament: 'old', chapters: 150, category: 'Wisdom' },
  { id: 'proverbs', name: 'Proverbs', abbreviation: 'Prov', testament: 'old', chapters: 31, category: 'Wisdom' },
  { id: 'ecclesiastes', name: 'Ecclesiastes', abbreviation: 'Eccl', testament: 'old', chapters: 12, category: 'Wisdom' },
  { id: 'song-of-solomon', name: 'Song of Solomon', abbreviation: 'Song', testament: 'old', chapters: 8, category: 'Wisdom' },
  
  // Old Testament - Major Prophets
  { id: 'isaiah', name: 'Isaiah', abbreviation: 'Isa', testament: 'old', chapters: 66, category: 'Major Prophets' },
  { id: 'jeremiah', name: 'Jeremiah', abbreviation: 'Jer', testament: 'old', chapters: 52, category: 'Major Prophets' },
  { id: 'lamentations', name: 'Lamentations', abbreviation: 'Lam', testament: 'old', chapters: 5, category: 'Major Prophets' },
  { id: 'ezekiel', name: 'Ezekiel', abbreviation: 'Ezek', testament: 'old', chapters: 48, category: 'Major Prophets' },
  { id: 'daniel', name: 'Daniel', abbreviation: 'Dan', testament: 'old', chapters: 12, category: 'Major Prophets' },
  
  // Old Testament - Minor Prophets
  { id: 'hosea', name: 'Hosea', abbreviation: 'Hos', testament: 'old', chapters: 14, category: 'Minor Prophets' },
  { id: 'joel', name: 'Joel', abbreviation: 'Joel', testament: 'old', chapters: 3, category: 'Minor Prophets' },
  { id: 'amos', name: 'Amos', abbreviation: 'Amos', testament: 'old', chapters: 9, category: 'Minor Prophets' },
  { id: 'obadiah', name: 'Obadiah', abbreviation: 'Obad', testament: 'old', chapters: 1, category: 'Minor Prophets' },
  { id: 'jonah', name: 'Jonah', abbreviation: 'Jonah', testament: 'old', chapters: 4, category: 'Minor Prophets' },
  { id: 'micah', name: 'Micah', abbreviation: 'Mic', testament: 'old', chapters: 7, category: 'Minor Prophets' },
  { id: 'nahum', name: 'Nahum', abbreviation: 'Nah', testament: 'old', chapters: 3, category: 'Minor Prophets' },
  { id: 'habakkuk', name: 'Habakkuk', abbreviation: 'Hab', testament: 'old', chapters: 3, category: 'Minor Prophets' },
  { id: 'zephaniah', name: 'Zephaniah', abbreviation: 'Zeph', testament: 'old', chapters: 3, category: 'Minor Prophets' },
  { id: 'haggai', name: 'Haggai', abbreviation: 'Hag', testament: 'old', chapters: 2, category: 'Minor Prophets' },
  { id: 'zechariah', name: 'Zechariah', abbreviation: 'Zech', testament: 'old', chapters: 14, category: 'Minor Prophets' },
  { id: 'malachi', name: 'Malachi', abbreviation: 'Mal', testament: 'old', chapters: 4, category: 'Minor Prophets' },
  
  // New Testament - Gospels
  { id: 'matthew', name: 'Matthew', abbreviation: 'Matt', testament: 'new', chapters: 28, category: 'Gospels' },
  { id: 'mark', name: 'Mark', abbreviation: 'Mark', testament: 'new', chapters: 16, category: 'Gospels' },
  { id: 'luke', name: 'Luke', abbreviation: 'Luke', testament: 'new', chapters: 24, category: 'Gospels' },
  { id: 'john', name: 'John', abbreviation: 'John', testament: 'new', chapters: 21, category: 'Gospels' },
  
  // New Testament - History
  { id: 'acts', name: 'Acts', abbreviation: 'Acts', testament: 'new', chapters: 28, category: 'History' },
  
  // New Testament - Pauline Epistles
  { id: 'romans', name: 'Romans', abbreviation: 'Rom', testament: 'new', chapters: 16, category: 'Pauline Epistles' },
  { id: '1-corinthians', name: '1 Corinthians', abbreviation: '1 Cor', testament: 'new', chapters: 16, category: 'Pauline Epistles' },
  { id: '2-corinthians', name: '2 Corinthians', abbreviation: '2 Cor', testament: 'new', chapters: 13, category: 'Pauline Epistles' },
  { id: 'galatians', name: 'Galatians', abbreviation: 'Gal', testament: 'new', chapters: 6, category: 'Pauline Epistles' },
  { id: 'ephesians', name: 'Ephesians', abbreviation: 'Eph', testament: 'new', chapters: 6, category: 'Pauline Epistles' },
  { id: 'philippians', name: 'Philippians', abbreviation: 'Phil', testament: 'new', chapters: 4, category: 'Pauline Epistles' },
  { id: 'colossians', name: 'Colossians', abbreviation: 'Col', testament: 'new', chapters: 4, category: 'Pauline Epistles' },
  { id: '1-thessalonians', name: '1 Thessalonians', abbreviation: '1 Thess', testament: 'new', chapters: 5, category: 'Pauline Epistles' },
  { id: '2-thessalonians', name: '2 Thessalonians', abbreviation: '2 Thess', testament: 'new', chapters: 3, category: 'Pauline Epistles' },
  { id: '1-timothy', name: '1 Timothy', abbreviation: '1 Tim', testament: 'new', chapters: 6, category: 'Pauline Epistles' },
  { id: '2-timothy', name: '2 Timothy', abbreviation: '2 Tim', testament: 'new', chapters: 4, category: 'Pauline Epistles' },
  { id: 'titus', name: 'Titus', abbreviation: 'Titus', testament: 'new', chapters: 3, category: 'Pauline Epistles' },
  { id: 'philemon', name: 'Philemon', abbreviation: 'Phlm', testament: 'new', chapters: 1, category: 'Pauline Epistles' },
  
  // New Testament - General Epistles
  { id: 'hebrews', name: 'Hebrews', abbreviation: 'Heb', testament: 'new', chapters: 13, category: 'General Epistles' },
  { id: 'james', name: 'James', abbreviation: 'Jas', testament: 'new', chapters: 5, category: 'General Epistles' },
  { id: '1-peter', name: '1 Peter', abbreviation: '1 Pet', testament: 'new', chapters: 5, category: 'General Epistles' },
  { id: '2-peter', name: '2 Peter', abbreviation: '2 Pet', testament: 'new', chapters: 3, category: 'General Epistles' },
  { id: '1-john', name: '1 John', abbreviation: '1 John', testament: 'new', chapters: 5, category: 'General Epistles' },
  { id: '2-john', name: '2 John', abbreviation: '2 John', testament: 'new', chapters: 1, category: 'General Epistles' },
  { id: '3-john', name: '3 John', abbreviation: '3 John', testament: 'new', chapters: 1, category: 'General Epistles' },
  { id: 'jude', name: 'Jude', abbreviation: 'Jude', testament: 'new', chapters: 1, category: 'General Epistles' },
  
  // New Testament - Prophecy
  { id: 'revelation', name: 'Revelation', abbreviation: 'Rev', testament: 'new', chapters: 22, category: 'Prophecy' },
];

export const getBooksByTestament = (testament: 'old' | 'new') => 
  bibleBooks.filter(book => book.testament === testament);

export const getBookById = (id: string) => 
  bibleBooks.find(book => book.id === id);

export const getBooksByCategory = (category: string) =>
  bibleBooks.filter(book => book.category === category);
