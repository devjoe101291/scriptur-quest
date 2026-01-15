import { QuizQuestion } from '../questions';

// Questions for remaining Old Testament books
export const leviticusQuestions: QuizQuestion[] = [
  { id: 'lev-001', bookId: 'leviticus', difficulty: 'easy', type: 'multiple-choice', question: 'What tribe was designated for priestly duties?', options: ['Judah', 'Benjamin', 'Levi', 'Dan'], correctAnswer: 2, reference: 'Leviticus 1:5' },
  { id: 'lev-002', bookId: 'leviticus', difficulty: 'medium', type: 'multiple-choice', question: 'What day of atonement is described in Leviticus?', options: ['Passover', 'Yom Kippur', 'Pentecost', 'Sabbath'], correctAnswer: 1, reference: 'Leviticus 16' },
  { id: 'lev-003', bookId: 'leviticus', difficulty: 'hard', type: 'multiple-choice', question: 'What animal was sent into the wilderness on the Day of Atonement?', options: ['Lamb', 'Bull', 'Scapegoat', 'Dove'], correctAnswer: 2, reference: 'Leviticus 16:10' },
  { id: 'lev-004', bookId: 'leviticus', difficulty: 'medium', type: 'verse-completion', question: 'Thou shalt love thy neighbour as...', options: ['thy brother', 'thyself', 'thy family', 'thy friend'], correctAnswer: 1, reference: 'Leviticus 19:18' },
  { id: 'lev-005', bookId: 'leviticus', difficulty: 'hard', type: 'multiple-choice', question: 'What year was the Year of Jubilee celebrated?', options: ['Every 7th year', 'Every 25th year', 'Every 50th year', 'Every 100th year'], correctAnswer: 2, reference: 'Leviticus 25:10' },
];

export const numbersQuestions: QuizQuestion[] = [
  { id: 'num-001', bookId: 'numbers', difficulty: 'easy', type: 'multiple-choice', question: 'How many spies were sent to explore Canaan?', options: ['10', '12', '40', '70'], correctAnswer: 1, reference: 'Numbers 13:1-16' },
  { id: 'num-002', bookId: 'numbers', difficulty: 'medium', type: 'multiple-choice', question: 'Which two spies gave a good report about Canaan?', options: ['Moses and Aaron', 'Joshua and Caleb', 'Nadab and Abihu', 'Eleazar and Ithamar'], correctAnswer: 1, reference: 'Numbers 14:6-8' },
  { id: 'num-003', bookId: 'numbers', difficulty: 'hard', type: 'multiple-choice', question: 'What did Moses strike to bring water from the rock (for which he was punished)?', options: ['The rock once', 'The rock twice', 'His staff on the ground', 'The air'], correctAnswer: 1, reference: 'Numbers 20:11' },
  { id: 'num-004', bookId: 'numbers', difficulty: 'medium', type: 'multiple-choice', question: 'What was lifted up to heal the Israelites from serpent bites?', options: ['A golden calf', 'A bronze serpent', 'Moses\' staff', 'The Ark'], correctAnswer: 1, reference: 'Numbers 21:9' },
  { id: 'num-005', bookId: 'numbers', difficulty: 'hard', type: 'multiple-choice', question: 'Whose donkey spoke to him?', options: ['Moses', 'Balaam', 'Joshua', 'Caleb'], correctAnswer: 1, reference: 'Numbers 22:28' },
];

export const deuteronomyQuestions: QuizQuestion[] = [
  { id: 'deu-001', bookId: 'deuteronomy', difficulty: 'easy', type: 'verse-completion', question: 'Hear, O Israel: The Lord our God is... Lord', options: ['the only', 'one', 'the true', 'our'], correctAnswer: 1, reference: 'Deuteronomy 6:4' },
  { id: 'deu-002', bookId: 'deuteronomy', difficulty: 'medium', type: 'multiple-choice', question: 'Where did Moses die?', options: ['In Egypt', 'In Canaan', 'On Mount Nebo', 'In the wilderness'], correctAnswer: 2, reference: 'Deuteronomy 34:5' },
  { id: 'deu-003', bookId: 'deuteronomy', difficulty: 'hard', type: 'multiple-choice', question: 'How old was Moses when he died?', options: ['100', '110', '120', '150'], correctAnswer: 2, reference: 'Deuteronomy 34:7' },
  { id: 'deu-004', bookId: 'deuteronomy', difficulty: 'medium', type: 'multiple-choice', question: 'Who buried Moses?', options: ['Joshua', 'Aaron', 'The Israelites', 'God'], correctAnswer: 3, reference: 'Deuteronomy 34:6' },
  { id: 'deu-005', bookId: 'deuteronomy', difficulty: 'easy', type: 'multiple-choice', question: 'What does Deuteronomy mean?', options: ['First law', 'Second law', 'God\'s law', 'Final law'], correctAnswer: 1, reference: 'Title origin' },
];

export const joshuaQuestions: QuizQuestion[] = [
  { id: 'jos-001', bookId: 'joshua', difficulty: 'easy', type: 'multiple-choice', question: 'Who succeeded Moses as leader of Israel?', options: ['Aaron', 'Caleb', 'Joshua', 'Eleazar'], correctAnswer: 2, reference: 'Joshua 1:1-2' },
  { id: 'jos-002', bookId: 'joshua', difficulty: 'easy', type: 'multiple-choice', question: 'What city\'s walls fell down after the Israelites marched around it?', options: ['Ai', 'Jerusalem', 'Jericho', 'Bethel'], correctAnswer: 2, reference: 'Joshua 6:20' },
  { id: 'jos-003', bookId: 'joshua', difficulty: 'medium', type: 'multiple-choice', question: 'How many days did the Israelites march around Jericho?', options: ['1', '3', '7', '40'], correctAnswer: 2, reference: 'Joshua 6:15' },
  { id: 'jos-004', bookId: 'joshua', difficulty: 'medium', type: 'multiple-choice', question: 'Who hid the Israelite spies in Jericho?', options: ['Ruth', 'Rahab', 'Deborah', 'Naomi'], correctAnswer: 1, reference: 'Joshua 2:1-6' },
  { id: 'jos-005', bookId: 'joshua', difficulty: 'hard', type: 'multiple-choice', question: 'What did Joshua command to stand still?', options: ['The Jordan River', 'The Sun and Moon', 'The army', 'The walls'], correctAnswer: 1, reference: 'Joshua 10:12-13' },
];

export const judgesQuestions: QuizQuestion[] = [
  { id: 'jdg-001', bookId: 'judges', difficulty: 'easy', type: 'multiple-choice', question: 'Who was the strong man whose power came from his hair?', options: ['Gideon', 'Samson', 'Jephthah', 'Othniel'], correctAnswer: 1, reference: 'Judges 16:17' },
  { id: 'jdg-002', bookId: 'judges', difficulty: 'easy', type: 'multiple-choice', question: 'Who was the woman judge of Israel?', options: ['Ruth', 'Rahab', 'Deborah', 'Hannah'], correctAnswer: 2, reference: 'Judges 4:4' },
  { id: 'jdg-003', bookId: 'judges', difficulty: 'medium', type: 'multiple-choice', question: 'How many men did Gideon defeat the Midianites with?', options: ['100', '300', '1000', '10000'], correctAnswer: 1, reference: 'Judges 7:7' },
  { id: 'jdg-004', bookId: 'judges', difficulty: 'medium', type: 'multiple-choice', question: 'Who betrayed Samson?', options: ['Rahab', 'Ruth', 'Delilah', 'Hannah'], correctAnswer: 2, reference: 'Judges 16:18' },
  { id: 'jdg-005', bookId: 'judges', difficulty: 'hard', type: 'multiple-choice', question: 'What weapon did Samson use to kill 1000 Philistines?', options: ['A sword', 'The jawbone of a donkey', 'A spear', 'His bare hands'], correctAnswer: 1, reference: 'Judges 15:15' },
];

export const ruthQuestions: QuizQuestion[] = [
  { id: 'rut-001', bookId: 'ruth', difficulty: 'easy', type: 'multiple-choice', question: 'Who was Ruth\'s mother-in-law?', options: ['Hannah', 'Naomi', 'Deborah', 'Rachel'], correctAnswer: 1, reference: 'Ruth 1:4' },
  { id: 'rut-002', bookId: 'ruth', difficulty: 'easy', type: 'multiple-choice', question: 'What country did Ruth come from?', options: ['Egypt', 'Moab', 'Edom', 'Philistia'], correctAnswer: 1, reference: 'Ruth 1:4' },
  { id: 'rut-003', bookId: 'ruth', difficulty: 'medium', type: 'verse-completion', question: 'Whither thou goest, I will go; and where thou lodgest...', options: ['I will stay', 'I will rest', 'I will lodge', 'I will live'], correctAnswer: 2, reference: 'Ruth 1:16' },
  { id: 'rut-004', bookId: 'ruth', difficulty: 'medium', type: 'multiple-choice', question: 'Who did Ruth marry?', options: ['Elimelech', 'Boaz', 'Mahlon', 'Chilion'], correctAnswer: 1, reference: 'Ruth 4:13' },
  { id: 'rut-005', bookId: 'ruth', difficulty: 'hard', type: 'multiple-choice', question: 'Who was the great-grandson of Ruth?', options: ['Solomon', 'David', 'Jesse', 'Samuel'], correctAnswer: 1, reference: 'Ruth 4:22' },
];

export const samuel1Questions: QuizQuestion[] = [
  { id: '1sa-001', bookId: '1-samuel', difficulty: 'easy', type: 'multiple-choice', question: 'Who was the first king of Israel?', options: ['David', 'Saul', 'Solomon', 'Samuel'], correctAnswer: 1, reference: '1 Samuel 10:24' },
  { id: '1sa-002', bookId: '1-samuel', difficulty: 'easy', type: 'multiple-choice', question: 'Who killed Goliath?', options: ['Saul', 'Jonathan', 'David', 'Samuel'], correctAnswer: 2, reference: '1 Samuel 17:50' },
  { id: '1sa-003', bookId: '1-samuel', difficulty: 'medium', type: 'multiple-choice', question: 'What weapon did David use to kill Goliath?', options: ['A sword', 'A spear', 'A sling and stone', 'A bow and arrow'], correctAnswer: 2, reference: '1 Samuel 17:49' },
  { id: '1sa-004', bookId: '1-samuel', difficulty: 'medium', type: 'multiple-choice', question: 'Who was Samuel\'s mother?', options: ['Ruth', 'Hannah', 'Naomi', 'Rachel'], correctAnswer: 1, reference: '1 Samuel 1:20' },
  { id: '1sa-005', bookId: '1-samuel', difficulty: 'hard', type: 'multiple-choice', question: 'How tall was Goliath?', options: ['6 cubits and a span', '8 cubits', '10 cubits', '12 cubits'], correctAnswer: 0, reference: '1 Samuel 17:4' },
];

export const samuel2Questions: QuizQuestion[] = [
  { id: '2sa-001', bookId: '2-samuel', difficulty: 'easy', type: 'multiple-choice', question: 'Who became king after Saul?', options: ['Solomon', 'David', 'Jonathan', 'Absalom'], correctAnswer: 1, reference: '2 Samuel 2:4' },
  { id: '2sa-002', bookId: '2-samuel', difficulty: 'medium', type: 'multiple-choice', question: 'What city did David make his capital?', options: ['Bethlehem', 'Hebron', 'Jerusalem', 'Jericho'], correctAnswer: 2, reference: '2 Samuel 5:6-9' },
  { id: '2sa-003', bookId: '2-samuel', difficulty: 'medium', type: 'multiple-choice', question: 'Which prophet confronted David about Bathsheba?', options: ['Elijah', 'Nathan', 'Samuel', 'Isaiah'], correctAnswer: 1, reference: '2 Samuel 12:1' },
  { id: '2sa-004', bookId: '2-samuel', difficulty: 'hard', type: 'multiple-choice', question: 'Who was David\'s son that rebelled against him?', options: ['Solomon', 'Amnon', 'Absalom', 'Adonijah'], correctAnswer: 2, reference: '2 Samuel 15:10' },
  { id: '2sa-005', bookId: '2-samuel', difficulty: 'hard', type: 'multiple-choice', question: 'Who was David\'s best friend?', options: ['Nathan', 'Jonathan', 'Joab', 'Abner'], correctAnswer: 1, reference: '2 Samuel 1:26' },
];

export const kings1Questions: QuizQuestion[] = [
  { id: '1ki-001', bookId: '1-kings', difficulty: 'easy', type: 'multiple-choice', question: 'Who was the wisest king of Israel?', options: ['David', 'Solomon', 'Saul', 'Rehoboam'], correctAnswer: 1, reference: '1 Kings 4:29-30' },
  { id: '1ki-002', bookId: '1-kings', difficulty: 'easy', type: 'multiple-choice', question: 'What did Solomon build for the Lord?', options: ['An ark', 'A temple', 'An altar', 'A palace'], correctAnswer: 1, reference: '1 Kings 6:1' },
  { id: '1ki-003', bookId: '1-kings', difficulty: 'medium', type: 'multiple-choice', question: 'Which prophet challenged the prophets of Baal on Mount Carmel?', options: ['Elisha', 'Isaiah', 'Elijah', 'Jeremiah'], correctAnswer: 2, reference: '1 Kings 18:19' },
  { id: '1ki-004', bookId: '1-kings', difficulty: 'hard', type: 'multiple-choice', question: 'How many years did it take Solomon to build the temple?', options: ['3 years', '7 years', '12 years', '20 years'], correctAnswer: 1, reference: '1 Kings 6:38' },
  { id: '1ki-005', bookId: '1-kings', difficulty: 'hard', type: 'multiple-choice', question: 'How many prophets of Baal did Elijah challenge?', options: ['100', '250', '450', '850'], correctAnswer: 2, reference: '1 Kings 18:19' },
];

export const kings2Questions: QuizQuestion[] = [
  { id: '2ki-001', bookId: '2-kings', difficulty: 'easy', type: 'multiple-choice', question: 'How did Elijah go to heaven?', options: ['He died', 'In a whirlwind with chariots of fire', 'He was translated', 'Angels carried him'], correctAnswer: 1, reference: '2 Kings 2:11' },
  { id: '2ki-002', bookId: '2-kings', difficulty: 'medium', type: 'multiple-choice', question: 'Who succeeded Elijah as prophet?', options: ['Isaiah', 'Jeremiah', 'Elisha', 'Nathan'], correctAnswer: 2, reference: '2 Kings 2:13-15' },
  { id: '2ki-003', bookId: '2-kings', difficulty: 'medium', type: 'multiple-choice', question: 'Who was healed of leprosy by washing in the Jordan?', options: ['Gehazi', 'Naaman', 'Ben-Hadad', 'Hazael'], correctAnswer: 1, reference: '2 Kings 5:14' },
  { id: '2ki-004', bookId: '2-kings', difficulty: 'hard', type: 'multiple-choice', question: 'How many times did Naaman have to dip in the Jordan?', options: ['3', '5', '7', '12'], correctAnswer: 2, reference: '2 Kings 5:10' },
  { id: '2ki-005', bookId: '2-kings', difficulty: 'hard', type: 'multiple-choice', question: 'Which empire conquered the Northern Kingdom?', options: ['Babylon', 'Assyria', 'Persia', 'Egypt'], correctAnswer: 1, reference: '2 Kings 17:6' },
];

export const chronicles1Questions: QuizQuestion[] = [
  { id: '1ch-001', bookId: '1-chronicles', difficulty: 'easy', type: 'multiple-choice', question: 'Who brought the Ark of the Covenant to Jerusalem?', options: ['Solomon', 'David', 'Saul', 'Samuel'], correctAnswer: 1, reference: '1 Chronicles 15:3' },
  { id: '1ch-002', bookId: '1-chronicles', difficulty: 'medium', type: 'multiple-choice', question: 'Why was David not allowed to build the temple?', options: ['He was too old', 'He was a man of war', 'He sinned', 'God chose Solomon'], correctAnswer: 1, reference: '1 Chronicles 28:3' },
  { id: '1ch-003', bookId: '1-chronicles', difficulty: 'hard', type: 'multiple-choice', question: 'Who died when he touched the Ark?', options: ['Uzza', 'Obed-edom', 'Asaph', 'Benaiah'], correctAnswer: 0, reference: '1 Chronicles 13:10' },
];

export const chronicles2Questions: QuizQuestion[] = [
  { id: '2ch-001', bookId: '2-chronicles', difficulty: 'easy', type: 'verse-completion', question: 'If my people, which are called by my name, shall humble themselves, and pray, and seek my face, and turn from their wicked ways; then will I hear from heaven, and will forgive their sin, and will heal their...', options: ['nation', 'hearts', 'land', 'people'], correctAnswer: 2, reference: '2 Chronicles 7:14' },
  { id: '2ch-002', bookId: '2-chronicles', difficulty: 'medium', type: 'multiple-choice', question: 'Which queen visited Solomon?', options: ['Queen of Egypt', 'Queen of Sheba', 'Queen of Tyre', 'Queen of Moab'], correctAnswer: 1, reference: '2 Chronicles 9:1' },
  { id: '2ch-003', bookId: '2-chronicles', difficulty: 'hard', type: 'multiple-choice', question: 'Which empire destroyed the temple?', options: ['Assyria', 'Egypt', 'Babylon', 'Persia'], correctAnswer: 2, reference: '2 Chronicles 36:19' },
];

export const ezraQuestions: QuizQuestion[] = [
  { id: 'ezr-001', bookId: 'ezra', difficulty: 'easy', type: 'multiple-choice', question: 'Who allowed the Jews to return to Jerusalem?', options: ['Nebuchadnezzar', 'Darius', 'Cyrus', 'Artaxerxes'], correctAnswer: 2, reference: 'Ezra 1:1-2' },
  { id: 'ezr-002', bookId: 'ezra', difficulty: 'medium', type: 'multiple-choice', question: 'What did the returning Jews rebuild first?', options: ['The walls', 'The temple', 'Their homes', 'The palace'], correctAnswer: 1, reference: 'Ezra 3:8' },
  { id: 'ezr-003', bookId: 'ezra', difficulty: 'hard', type: 'multiple-choice', question: 'What was Ezra\'s profession?', options: ['Prophet', 'Priest and scribe', 'Governor', 'King'], correctAnswer: 1, reference: 'Ezra 7:6' },
];

export const nehemiahQuestions: QuizQuestion[] = [
  { id: 'neh-001', bookId: 'nehemiah', difficulty: 'easy', type: 'multiple-choice', question: 'What did Nehemiah rebuild?', options: ['The temple', 'The walls of Jerusalem', 'The palace', 'The altar'], correctAnswer: 1, reference: 'Nehemiah 2:17' },
  { id: 'neh-002', bookId: 'nehemiah', difficulty: 'medium', type: 'multiple-choice', question: 'What was Nehemiah\'s job in Persia?', options: ['Scribe', 'Cupbearer to the king', 'Governor', 'Soldier'], correctAnswer: 1, reference: 'Nehemiah 1:11' },
  { id: 'neh-003', bookId: 'nehemiah', difficulty: 'hard', type: 'multiple-choice', question: 'How many days did it take to rebuild the walls?', options: ['40 days', '52 days', '70 days', '120 days'], correctAnswer: 1, reference: 'Nehemiah 6:15' },
];

export const estherQuestions: QuizQuestion[] = [
  { id: 'est-001', bookId: 'esther', difficulty: 'easy', type: 'multiple-choice', question: 'Who was the Jewish queen of Persia?', options: ['Ruth', 'Esther', 'Naomi', 'Deborah'], correctAnswer: 1, reference: 'Esther 2:17' },
  { id: 'est-002', bookId: 'esther', difficulty: 'medium', type: 'multiple-choice', question: 'Who wanted to destroy all the Jews?', options: ['Xerxes', 'Haman', 'Mordecai', 'Vashti'], correctAnswer: 1, reference: 'Esther 3:6' },
  { id: 'est-003', bookId: 'esther', difficulty: 'medium', type: 'multiple-choice', question: 'Who was Esther\'s cousin who raised her?', options: ['Haman', 'Mordecai', 'Hegai', 'Memucan'], correctAnswer: 1, reference: 'Esther 2:7' },
  { id: 'est-004', bookId: 'esther', difficulty: 'hard', type: 'verse-completion', question: 'Who knoweth whether thou art come to the kingdom for such a...', options: ['purpose', 'time as this', 'calling', 'moment'], correctAnswer: 1, reference: 'Esther 4:14' },
];

export const jobQuestions: QuizQuestion[] = [
  { id: 'job-001', bookId: 'job', difficulty: 'easy', type: 'multiple-choice', question: 'What happened to Job?', options: ['He became king', 'He lost everything', 'He became a prophet', 'He conquered nations'], correctAnswer: 1, reference: 'Job 1:13-19' },
  { id: 'job-002', bookId: 'job', difficulty: 'medium', type: 'multiple-choice', question: 'How many friends came to comfort Job?', options: ['Two', 'Three', 'Four', 'Seven'], correctAnswer: 1, reference: 'Job 2:11' },
  { id: 'job-003', bookId: 'job', difficulty: 'medium', type: 'multiple-choice', question: 'Who challenged God about Job?', options: ['An angel', 'Satan', 'A demon', 'A prophet'], correctAnswer: 1, reference: 'Job 1:9-11' },
  { id: 'job-004', bookId: 'job', difficulty: 'hard', type: 'multiple-choice', question: 'What did God do for Job at the end?', options: ['Made him king', 'Restored double what he lost', 'Took him to heaven', 'Made him a prophet'], correctAnswer: 1, reference: 'Job 42:10' },
];

export const proverbsQuestions: QuizQuestion[] = [
  { id: 'pro-001', bookId: 'proverbs', difficulty: 'easy', type: 'verse-completion', question: 'The fear of the Lord is the beginning of...', options: ['love', 'wisdom', 'faith', 'hope'], correctAnswer: 1, reference: 'Proverbs 9:10' },
  { id: 'pro-002', bookId: 'proverbs', difficulty: 'easy', type: 'multiple-choice', question: 'Who wrote most of Proverbs?', options: ['David', 'Solomon', 'Moses', 'Samuel'], correctAnswer: 1, reference: 'Proverbs 1:1' },
  { id: 'pro-003', bookId: 'proverbs', difficulty: 'medium', type: 'verse-completion', question: 'Train up a child in the way he should go: and when he is old, he will not...', options: ['forget it', 'depart from it', 'lose it', 'regret it'], correctAnswer: 1, reference: 'Proverbs 22:6' },
  { id: 'pro-004', bookId: 'proverbs', difficulty: 'medium', type: 'verse-completion', question: 'Trust in the Lord with all thine heart; and lean not unto thine own...', options: ['wisdom', 'strength', 'understanding', 'knowledge'], correctAnswer: 2, reference: 'Proverbs 3:5' },
  { id: 'pro-005', bookId: 'proverbs', difficulty: 'hard', type: 'verse-completion', question: 'A soft answer turneth away...', options: ['anger', 'wrath', 'evil', 'strife'], correctAnswer: 1, reference: 'Proverbs 15:1' },
];

export const ecclesiastesQuestions: QuizQuestion[] = [
  { id: 'ecc-001', bookId: 'ecclesiastes', difficulty: 'easy', type: 'verse-completion', question: 'Vanity of vanities, saith the Preacher, vanity of vanities; all is...', options: ['nothing', 'vanity', 'meaningless', 'empty'], correctAnswer: 1, reference: 'Ecclesiastes 1:2' },
  { id: 'ecc-002', bookId: 'ecclesiastes', difficulty: 'medium', type: 'verse-completion', question: 'To every thing there is a season, and a time to every purpose under the...', options: ['sun', 'heaven', 'sky', 'earth'], correctAnswer: 1, reference: 'Ecclesiastes 3:1' },
  { id: 'ecc-003', bookId: 'ecclesiastes', difficulty: 'hard', type: 'multiple-choice', question: 'Who is traditionally believed to be the author of Ecclesiastes?', options: ['David', 'Solomon', 'Moses', 'Isaiah'], correctAnswer: 1, reference: 'Ecclesiastes 1:1' },
];

export const songOfSolomonQuestions: QuizQuestion[] = [
  { id: 'sos-001', bookId: 'song-of-solomon', difficulty: 'easy', type: 'multiple-choice', question: 'What is the Song of Solomon also called?', options: ['Song of David', 'Song of Songs', 'Love Song', 'Wedding Song'], correctAnswer: 1, reference: 'Song of Solomon 1:1' },
  { id: 'sos-002', bookId: 'song-of-solomon', difficulty: 'medium', type: 'multiple-choice', question: 'What is the main theme of Song of Solomon?', options: ['Wisdom', 'War', 'Love', 'Law'], correctAnswer: 2, reference: 'Song of Solomon' },
  { id: 'sos-003', bookId: 'song-of-solomon', difficulty: 'hard', type: 'verse-completion', question: 'Set me as a seal upon thine heart, as a seal upon thine arm: for love is strong as...', options: ['fire', 'death', 'mountains', 'the sea'], correctAnswer: 1, reference: 'Song of Solomon 8:6' },
];

export const isaiahQuestions: QuizQuestion[] = [
  { id: 'isa-001', bookId: 'isaiah', difficulty: 'easy', type: 'verse-completion', question: 'For unto us a child is born, unto us a... is given', options: ['king', 'son', 'savior', 'prince'], correctAnswer: 1, reference: 'Isaiah 9:6' },
  { id: 'isa-002', bookId: 'isaiah', difficulty: 'easy', type: 'multiple-choice', question: 'Who was Isaiah?', options: ['A king', 'A prophet', 'A priest', 'A judge'], correctAnswer: 1, reference: 'Isaiah 1:1' },
  { id: 'isa-003', bookId: 'isaiah', difficulty: 'medium', type: 'verse-completion', question: 'But they that wait upon the Lord shall renew their strength; they shall mount up with wings as...', options: ['doves', 'angels', 'eagles', 'hawks'], correctAnswer: 2, reference: 'Isaiah 40:31' },
  { id: 'isa-004', bookId: 'isaiah', difficulty: 'hard', type: 'verse-completion', question: 'He was wounded for our transgressions, he was bruised for our...', options: ['sins', 'iniquities', 'wrongs', 'trespasses'], correctAnswer: 1, reference: 'Isaiah 53:5' },
];

export const jeremiahQuestions: QuizQuestion[] = [
  { id: 'jer-001', bookId: 'jeremiah', difficulty: 'easy', type: 'multiple-choice', question: 'What is Jeremiah often called?', options: ['The major prophet', 'The weeping prophet', 'The young prophet', 'The last prophet'], correctAnswer: 1, reference: 'Jeremiah 9:1' },
  { id: 'jer-002', bookId: 'jeremiah', difficulty: 'medium', type: 'verse-completion', question: 'For I know the thoughts that I think toward you, saith the Lord, thoughts of peace, and not of evil, to give you an expected...', options: ['future', 'end', 'hope', 'blessing'], correctAnswer: 1, reference: 'Jeremiah 29:11' },
  { id: 'jer-003', bookId: 'jeremiah', difficulty: 'hard', type: 'multiple-choice', question: 'Where was Jeremiah thrown for prophesying?', options: ['Prison', 'A pit/cistern', 'The desert', 'Egypt'], correctAnswer: 1, reference: 'Jeremiah 38:6' },
];

export const lamentationsQuestions: QuizQuestion[] = [
  { id: 'lam-001', bookId: 'lamentations', difficulty: 'easy', type: 'multiple-choice', question: 'What event does Lamentations mourn?', options: ['The Exodus', 'The destruction of Jerusalem', 'The death of David', 'The flood'], correctAnswer: 1, reference: 'Lamentations 1:1' },
  { id: 'lam-002', bookId: 'lamentations', difficulty: 'medium', type: 'verse-completion', question: 'Great is thy faithfulness...', options: ['O Lord', 'forever', 'to all generations', 'in the morning'], correctAnswer: 0, reference: 'Lamentations 3:23' },
  { id: 'lam-003', bookId: 'lamentations', difficulty: 'hard', type: 'multiple-choice', question: 'Who is traditionally believed to have written Lamentations?', options: ['Isaiah', 'Jeremiah', 'Ezekiel', 'Daniel'], correctAnswer: 1, reference: 'Tradition' },
];

export const ezekielQuestions: QuizQuestion[] = [
  { id: 'eze-001', bookId: 'ezekiel', difficulty: 'easy', type: 'multiple-choice', question: 'What famous vision did Ezekiel have about dry bones?', options: ['They crumbled', 'They came to life', 'They burned', 'They were buried'], correctAnswer: 1, reference: 'Ezekiel 37:10' },
  { id: 'eze-002', bookId: 'ezekiel', difficulty: 'medium', type: 'multiple-choice', question: 'Where was Ezekiel when he received his visions?', options: ['Jerusalem', 'Babylon', 'Egypt', 'Assyria'], correctAnswer: 1, reference: 'Ezekiel 1:1' },
  { id: 'eze-003', bookId: 'ezekiel', difficulty: 'hard', type: 'multiple-choice', question: 'How many faces did each living creature have in Ezekiel\'s vision?', options: ['Two', 'Three', 'Four', 'Six'], correctAnswer: 2, reference: 'Ezekiel 1:6' },
];

export const danielQuestions: QuizQuestion[] = [
  { id: 'dan-001', bookId: 'daniel', difficulty: 'easy', type: 'multiple-choice', question: 'Where was Daniel thrown for praying?', options: ['Prison', 'The fiery furnace', 'The lion\'s den', 'The pit'], correctAnswer: 2, reference: 'Daniel 6:16' },
  { id: 'dan-002', bookId: 'daniel', difficulty: 'easy', type: 'multiple-choice', question: 'Who were Daniel\'s three friends?', options: ['Peter, James, and John', 'Shadrach, Meshach, and Abednego', 'Abraham, Isaac, and Jacob', 'Moses, Aaron, and Miriam'], correctAnswer: 1, reference: 'Daniel 1:7' },
  { id: 'dan-003', bookId: 'daniel', difficulty: 'medium', type: 'multiple-choice', question: 'What did Nebuchadnezzar\'s dream statue have feet made of?', options: ['Gold', 'Silver', 'Iron and clay', 'Bronze'], correctAnswer: 2, reference: 'Daniel 2:33' },
  { id: 'dan-004', bookId: 'daniel', difficulty: 'hard', type: 'multiple-choice', question: 'What words appeared on the wall at Belshazzar\'s feast?', options: ['You are weighed', 'MENE, MENE, TEKEL, UPHARSIN', 'God is coming', 'Repent now'], correctAnswer: 1, reference: 'Daniel 5:25' },
];

export const hoseaQuestions: QuizQuestion[] = [
  { id: 'hos-001', bookId: 'hosea', difficulty: 'easy', type: 'multiple-choice', question: 'Who did God tell Hosea to marry?', options: ['A widow', 'A prophetess', 'An unfaithful woman', 'A virgin'], correctAnswer: 2, reference: 'Hosea 1:2' },
  { id: 'hos-002', bookId: 'hosea', difficulty: 'medium', type: 'multiple-choice', question: 'What was Hosea\'s wife\'s name?', options: ['Rachel', 'Gomer', 'Ruth', 'Hannah'], correctAnswer: 1, reference: 'Hosea 1:3' },
  { id: 'hos-003', bookId: 'hosea', difficulty: 'hard', type: 'multiple-choice', question: 'What does Hosea\'s marriage symbolize?', options: ['God\'s power', 'Israel\'s unfaithfulness', 'Coming judgment', 'Future blessings'], correctAnswer: 1, reference: 'Hosea 1-3' },
];

export const joelQuestions: QuizQuestion[] = [
  { id: 'joe-001', bookId: 'joel', difficulty: 'easy', type: 'multiple-choice', question: 'What plague does Joel describe?', options: ['Frogs', 'Locusts', 'Boils', 'Hail'], correctAnswer: 1, reference: 'Joel 1:4' },
  { id: 'joe-002', bookId: 'joel', difficulty: 'medium', type: 'verse-completion', question: 'And it shall come to pass afterward, that I will pour out my spirit upon all...', options: ['nations', 'flesh', 'Israel', 'believers'], correctAnswer: 1, reference: 'Joel 2:28' },
];

export const amosQuestions: QuizQuestion[] = [
  { id: 'amo-001', bookId: 'amos', difficulty: 'easy', type: 'multiple-choice', question: 'What was Amos\'s occupation before he was a prophet?', options: ['Fisherman', 'Shepherd', 'Carpenter', 'Tax collector'], correctAnswer: 1, reference: 'Amos 1:1' },
  { id: 'amo-002', bookId: 'amos', difficulty: 'medium', type: 'verse-completion', question: 'But let judgment run down as waters, and righteousness as a mighty...', options: ['river', 'stream', 'flood', 'ocean'], correctAnswer: 1, reference: 'Amos 5:24' },
];

export const obadiahQuestions: QuizQuestion[] = [
  { id: 'oba-001', bookId: 'obadiah', difficulty: 'easy', type: 'multiple-choice', question: 'Obadiah is the... book in the Old Testament', options: ['longest', 'shortest', 'middle', 'last'], correctAnswer: 1, reference: 'Obadiah' },
  { id: 'oba-002', bookId: 'obadiah', difficulty: 'medium', type: 'multiple-choice', question: 'Which nation does Obadiah prophecy against?', options: ['Assyria', 'Babylon', 'Edom', 'Egypt'], correctAnswer: 2, reference: 'Obadiah 1:1' },
];

export const jonahQuestions: QuizQuestion[] = [
  { id: 'jon-001', bookId: 'jonah', difficulty: 'easy', type: 'multiple-choice', question: 'What swallowed Jonah?', options: ['A whale', 'A great fish', 'A sea monster', 'A shark'], correctAnswer: 1, reference: 'Jonah 1:17' },
  { id: 'jon-002', bookId: 'jonah', difficulty: 'easy', type: 'multiple-choice', question: 'To which city was Jonah sent?', options: ['Babylon', 'Jerusalem', 'Nineveh', 'Tarshish'], correctAnswer: 2, reference: 'Jonah 1:2' },
  { id: 'jon-003', bookId: 'jonah', difficulty: 'medium', type: 'multiple-choice', question: 'How many days was Jonah in the fish?', options: ['1 day', '2 days', '3 days', '7 days'], correctAnswer: 2, reference: 'Jonah 1:17' },
  { id: 'jon-004', bookId: 'jonah', difficulty: 'hard', type: 'multiple-choice', question: 'What happened to Nineveh after Jonah preached?', options: ['It was destroyed', 'The people repented', 'Jonah was imprisoned', 'Nothing changed'], correctAnswer: 1, reference: 'Jonah 3:10' },
];

export const micahQuestions: QuizQuestion[] = [
  { id: 'mic-001', bookId: 'micah', difficulty: 'easy', type: 'verse-completion', question: 'He hath shewed thee, O man, what is good; and what doth the Lord require of thee, but to do justly, and to love mercy, and to walk humbly with thy...', options: ['Lord', 'God', 'neighbor', 'brothers'], correctAnswer: 1, reference: 'Micah 6:8' },
  { id: 'mic-002', bookId: 'micah', difficulty: 'medium', type: 'multiple-choice', question: 'Which city did Micah prophesy would be the birthplace of the Messiah?', options: ['Jerusalem', 'Nazareth', 'Bethlehem', 'Hebron'], correctAnswer: 2, reference: 'Micah 5:2' },
];

export const nahumQuestions: QuizQuestion[] = [
  { id: 'nah-001', bookId: 'nahum', difficulty: 'medium', type: 'multiple-choice', question: 'Which city\'s destruction does Nahum prophesy?', options: ['Babylon', 'Nineveh', 'Jerusalem', 'Samaria'], correctAnswer: 1, reference: 'Nahum 1:1' },
  { id: 'nah-002', bookId: 'nahum', difficulty: 'hard', type: 'verse-completion', question: 'The Lord is good, a strong hold in the day of...', options: ['battle', 'trouble', 'war', 'sorrow'], correctAnswer: 1, reference: 'Nahum 1:7' },
];

export const habakkukQuestions: QuizQuestion[] = [
  { id: 'hab-001', bookId: 'habakkuk', difficulty: 'medium', type: 'verse-completion', question: 'The just shall live by...', options: ['works', 'faith', 'grace', 'love'], correctAnswer: 1, reference: 'Habakkuk 2:4' },
  { id: 'hab-002', bookId: 'habakkuk', difficulty: 'hard', type: 'multiple-choice', question: 'What nation did God say He would use to punish Judah?', options: ['Assyria', 'Babylon (Chaldeans)', 'Egypt', 'Persia'], correctAnswer: 1, reference: 'Habakkuk 1:6' },
];

export const zephaniahQuestions: QuizQuestion[] = [
  { id: 'zep-001', bookId: 'zephaniah', difficulty: 'medium', type: 'multiple-choice', question: 'What is the main theme of Zephaniah?', options: ['Love', 'The Day of the Lord', 'Wisdom', 'Creation'], correctAnswer: 1, reference: 'Zephaniah 1:14' },
  { id: 'zep-002', bookId: 'zephaniah', difficulty: 'hard', type: 'verse-completion', question: 'The Lord thy God in the midst of thee is mighty; he will save, he will rejoice over thee with joy; he will rest in his love, he will joy over thee with...', options: ['gladness', 'singing', 'praise', 'dancing'], correctAnswer: 1, reference: 'Zephaniah 3:17' },
];

export const haggaiQuestions: QuizQuestion[] = [
  { id: 'hag-001', bookId: 'haggai', difficulty: 'easy', type: 'multiple-choice', question: 'What did Haggai encourage the people to rebuild?', options: ['The walls', 'The temple', 'The palace', 'The city'], correctAnswer: 1, reference: 'Haggai 1:8' },
  { id: 'hag-002', bookId: 'haggai', difficulty: 'medium', type: 'multiple-choice', question: 'Who was the governor when Haggai prophesied?', options: ['Nehemiah', 'Ezra', 'Zerubbabel', 'Joshua'], correctAnswer: 2, reference: 'Haggai 1:1' },
];

export const zechariahQuestions: QuizQuestion[] = [
  { id: 'zec-001', bookId: 'zechariah', difficulty: 'medium', type: 'verse-completion', question: 'Rejoice greatly, O daughter of Zion; shout, O daughter of Jerusalem: behold, thy King cometh unto thee: he is just, and having salvation; lowly, and riding upon an ass, and upon a colt the foal of an...', options: ['horse', 'ass', 'donkey', 'mule'], correctAnswer: 1, reference: 'Zechariah 9:9' },
  { id: 'zec-002', bookId: 'zechariah', difficulty: 'hard', type: 'multiple-choice', question: 'How many horsemen did Zechariah see in his vision?', options: ['Two', 'Three', 'Four', 'Seven'], correctAnswer: 2, reference: 'Zechariah 6:1-5' },
];

export const malachiQuestions: QuizQuestion[] = [
  { id: 'mal-001', bookId: 'malachi', difficulty: 'easy', type: 'multiple-choice', question: 'Malachi is the... book of the Old Testament', options: ['first', 'middle', 'last', 'longest'], correctAnswer: 2, reference: 'Malachi' },
  { id: 'mal-002', bookId: 'malachi', difficulty: 'medium', type: 'verse-completion', question: 'Bring ye all the tithes into the storehouse, that there may be meat in mine house, and prove me now herewith, saith the Lord of hosts, if I will not open you the windows of heaven, and pour you out a...', options: ['blessing', 'reward', 'gift', 'treasure'], correctAnswer: 0, reference: 'Malachi 3:10' },
  { id: 'mal-003', bookId: 'malachi', difficulty: 'hard', type: 'multiple-choice', question: 'Which prophet does Malachi say will return before the Day of the Lord?', options: ['Moses', 'Isaiah', 'Elijah', 'Samuel'], correctAnswer: 2, reference: 'Malachi 4:5' },
];

// New Testament Books (remaining)
export const markQuestions: QuizQuestion[] = [
  { id: 'mrk-001', bookId: 'mark', difficulty: 'easy', type: 'multiple-choice', question: 'Mark\'s Gospel is known for being the...', options: ['Longest', 'Shortest', 'Most detailed', 'Last written'], correctAnswer: 1, reference: 'Mark' },
  { id: 'mrk-002', bookId: 'mark', difficulty: 'medium', type: 'multiple-choice', question: 'What key word appears frequently in Mark?', options: ['Love', 'Immediately', 'Believe', 'Truth'], correctAnswer: 1, reference: 'Mark' },
  { id: 'mrk-003', bookId: 'mark', difficulty: 'hard', type: 'multiple-choice', question: 'Who was Mark\'s Gospel likely written for?', options: ['Jews', 'Romans', 'Greeks', 'Egyptians'], correctAnswer: 1, reference: 'Mark tradition' },
];

export const lukeQuestions: QuizQuestion[] = [
  { id: 'luk-001', bookId: 'luke', difficulty: 'easy', type: 'multiple-choice', question: 'What was Luke\'s profession?', options: ['Fisherman', 'Tax collector', 'Physician', 'Carpenter'], correctAnswer: 2, reference: 'Colossians 4:14' },
  { id: 'luk-002', bookId: 'luke', difficulty: 'easy', type: 'multiple-choice', question: 'Which parable is only found in Luke?', options: ['The Sower', 'The Good Samaritan', 'The Mustard Seed', 'The Talents'], correctAnswer: 1, reference: 'Luke 10:25-37' },
  { id: 'luk-003', bookId: 'luke', difficulty: 'medium', type: 'multiple-choice', question: 'Who did Luke write his Gospel to?', options: ['Timothy', 'Theophilus', 'Titus', 'The churches'], correctAnswer: 1, reference: 'Luke 1:3' },
  { id: 'luk-004', bookId: 'luke', difficulty: 'hard', type: 'multiple-choice', question: 'Which parable about a lost coin is unique to Luke?', options: ['The Lost Sheep', 'The Lost Coin', 'The Pearl of Great Price', 'The Hidden Treasure'], correctAnswer: 1, reference: 'Luke 15:8-10' },
];

export const actsQuestions: QuizQuestion[] = [
  { id: 'act-001', bookId: 'acts', difficulty: 'easy', type: 'multiple-choice', question: 'What event is described at the beginning of Acts chapter 2?', options: ['The Crucifixion', 'The Ascension', 'Pentecost', 'The Last Supper'], correctAnswer: 2, reference: 'Acts 2:1-4' },
  { id: 'act-002', bookId: 'acts', difficulty: 'easy', type: 'multiple-choice', question: 'Who wrote the book of Acts?', options: ['Paul', 'Peter', 'Luke', 'John'], correctAnswer: 2, reference: 'Acts 1:1' },
  { id: 'act-003', bookId: 'acts', difficulty: 'medium', type: 'multiple-choice', question: 'What was Saul\'s name changed to after his conversion?', options: ['Peter', 'Paul', 'Philip', 'Silas'], correctAnswer: 1, reference: 'Acts 13:9' },
  { id: 'act-004', bookId: 'acts', difficulty: 'medium', type: 'multiple-choice', question: 'Who was the first Christian martyr?', options: ['Peter', 'James', 'Stephen', 'Paul'], correctAnswer: 2, reference: 'Acts 7:59-60' },
  { id: 'act-005', bookId: 'acts', difficulty: 'hard', type: 'multiple-choice', question: 'How many missionary journeys did Paul take?', options: ['Two', 'Three', 'Four', 'Five'], correctAnswer: 1, reference: 'Acts 13-21' },
];

export const romansQuestions: QuizQuestion[] = [
  { id: 'rom-001', bookId: 'romans', difficulty: 'easy', type: 'verse-completion', question: 'For all have sinned, and come short of the glory of...', options: ['heaven', 'God', 'Christ', 'the Lord'], correctAnswer: 1, reference: 'Romans 3:23' },
  { id: 'rom-002', bookId: 'romans', difficulty: 'medium', type: 'multiple-choice', question: 'According to Romans, what is the wages of sin?', options: ['Suffering', 'Sickness', 'Death', 'Poverty'], correctAnswer: 2, reference: 'Romans 6:23' },
  { id: 'rom-003', bookId: 'romans', difficulty: 'medium', type: 'verse-completion', question: 'And we know that all things work together for good to them that love God, to them who are the called according to his...', options: ['will', 'purpose', 'plan', 'word'], correctAnswer: 1, reference: 'Romans 8:28' },
  { id: 'rom-004', bookId: 'romans', difficulty: 'hard', type: 'verse-completion', question: 'For I am persuaded, that neither death, nor life, nor angels, nor principalities, nor powers, nor things present, nor things to come... shall be able to separate us from the love of...', options: ['Christ', 'God', 'the Father', 'the Lord'], correctAnswer: 1, reference: 'Romans 8:38-39' },
];

export const corinthians1Questions: QuizQuestion[] = [
  { id: '1co-001', bookId: '1-corinthians', difficulty: 'easy', type: 'multiple-choice', question: 'Which chapter is known as the "Love Chapter"?', options: ['Chapter 11', 'Chapter 13', 'Chapter 15', 'Chapter 12'], correctAnswer: 1, reference: '1 Corinthians 13' },
  { id: '1co-002', bookId: '1-corinthians', difficulty: 'medium', type: 'multiple-choice', question: 'According to 1 Corinthians 13, what is the greatest of faith, hope, and love?', options: ['Faith', 'Hope', 'Love', 'They are equal'], correctAnswer: 2, reference: '1 Corinthians 13:13' },
  { id: '1co-003', bookId: '1-corinthians', difficulty: 'hard', type: 'verse-completion', question: 'For by one Spirit are we all baptized into one body, whether we be Jews or Gentiles, whether we be bond or free; and have been all made to drink into one...', options: ['Spirit', 'Lord', 'faith', 'cup'], correctAnswer: 0, reference: '1 Corinthians 12:13' },
];

export const corinthians2Questions: QuizQuestion[] = [
  { id: '2co-001', bookId: '2-corinthians', difficulty: 'medium', type: 'verse-completion', question: 'Therefore if any man be in Christ, he is a new creature: old things are passed away; behold, all things are become...', options: ['holy', 'pure', 'new', 'blessed'], correctAnswer: 2, reference: '2 Corinthians 5:17' },
  { id: '2co-002', bookId: '2-corinthians', difficulty: 'hard', type: 'verse-completion', question: 'And he said unto me, My grace is sufficient for thee: for my strength is made perfect in...', options: ['faith', 'love', 'weakness', 'trials'], correctAnswer: 2, reference: '2 Corinthians 12:9' },
];

export const galatiansQuestions: QuizQuestion[] = [
  { id: 'gal-001', bookId: 'galatians', difficulty: 'easy', type: 'multiple-choice', question: 'What is the main theme of Galatians?', options: ['Love', 'Freedom in Christ', 'Prophecy', 'Creation'], correctAnswer: 1, reference: 'Galatians 5:1' },
  { id: 'gal-002', bookId: 'galatians', difficulty: 'medium', type: 'multiple-choice', question: 'How many fruits of the Spirit are listed in Galatians 5?', options: ['7', '9', '10', '12'], correctAnswer: 1, reference: 'Galatians 5:22-23' },
  { id: 'gal-003', bookId: 'galatians', difficulty: 'hard', type: 'verse-completion', question: 'I am crucified with Christ: nevertheless I live; yet not I, but Christ liveth in...', options: ['my heart', 'me', 'my soul', 'my spirit'], correctAnswer: 1, reference: 'Galatians 2:20' },
];

export const ephesiansQuestions: QuizQuestion[] = [
  { id: 'eph-001', bookId: 'ephesians', difficulty: 'easy', type: 'verse-completion', question: 'For by grace are ye saved through faith; and that not of yourselves: it is the gift of...', options: ['Christ', 'the Spirit', 'God', 'grace'], correctAnswer: 2, reference: 'Ephesians 2:8' },
  { id: 'eph-002', bookId: 'ephesians', difficulty: 'medium', type: 'multiple-choice', question: 'What is described as the "Armor of God" chapter?', options: ['Chapter 4', 'Chapter 5', 'Chapter 6', 'Chapter 3'], correctAnswer: 2, reference: 'Ephesians 6' },
  { id: 'eph-003', bookId: 'ephesians', difficulty: 'hard', type: 'multiple-choice', question: 'What is the "sword of the Spirit"?', options: ['Prayer', 'Faith', 'The Word of God', 'Truth'], correctAnswer: 2, reference: 'Ephesians 6:17' },
];

export const philippiansQuestions: QuizQuestion[] = [
  { id: 'php-001', bookId: 'philippians', difficulty: 'easy', type: 'verse-completion', question: 'I can do all things through Christ which...', options: ['loves me', 'saves me', 'strengtheneth me', 'guides me'], correctAnswer: 2, reference: 'Philippians 4:13' },
  { id: 'php-002', bookId: 'philippians', difficulty: 'medium', type: 'multiple-choice', question: 'Where was Paul when he wrote Philippians?', options: ['Athens', 'Rome (prison)', 'Jerusalem', 'Corinth'], correctAnswer: 1, reference: 'Philippians 1:13' },
  { id: 'php-003', bookId: 'philippians', difficulty: 'hard', type: 'verse-completion', question: 'Rejoice in the Lord alway: and again I say...', options: ['Rejoice', 'Praise', 'Give thanks', 'Be glad'], correctAnswer: 0, reference: 'Philippians 4:4' },
];

export const colossiansQuestions: QuizQuestion[] = [
  { id: 'col-001', bookId: 'colossians', difficulty: 'medium', type: 'verse-completion', question: 'And whatsoever ye do, do it heartily, as to the Lord, and not unto...', options: ['yourselves', 'men', 'the world', 'others'], correctAnswer: 1, reference: 'Colossians 3:23' },
  { id: 'col-002', bookId: 'colossians', difficulty: 'hard', type: 'verse-completion', question: 'For in him dwelleth all the fulness of the Godhead...', options: ['spiritually', 'bodily', 'eternally', 'completely'], correctAnswer: 1, reference: 'Colossians 2:9' },
];

export const thessalonians1Questions: QuizQuestion[] = [
  { id: '1th-001', bookId: '1-thessalonians', difficulty: 'medium', type: 'verse-completion', question: 'Pray without...', options: ['stopping', 'ceasing', 'end', 'rest'], correctAnswer: 1, reference: '1 Thessalonians 5:17' },
  { id: '1th-002', bookId: '1-thessalonians', difficulty: 'hard', type: 'multiple-choice', question: '1 Thessalonians is considered one of Paul\'s... letters', options: ['longest', 'earliest', 'last', 'prison'], correctAnswer: 1, reference: '1 Thessalonians' },
];

export const thessalonians2Questions: QuizQuestion[] = [
  { id: '2th-001', bookId: '2-thessalonians', difficulty: 'medium', type: 'multiple-choice', question: 'What does 2 Thessalonians warn about?', options: ['False prophets', 'The Day of the Lord', 'Persecution', 'All of these'], correctAnswer: 3, reference: '2 Thessalonians 2' },
  { id: '2th-002', bookId: '2-thessalonians', difficulty: 'hard', type: 'verse-completion', question: 'For even when we were with you, this we commanded you, that if any would not work, neither should he...', options: ['rest', 'eat', 'sleep', 'receive'], correctAnswer: 1, reference: '2 Thessalonians 3:10' },
];

export const timothy1Questions: QuizQuestion[] = [
  { id: '1ti-001', bookId: '1-timothy', difficulty: 'easy', type: 'multiple-choice', question: 'Who was Timothy to Paul?', options: ['A son in the faith', 'A brother', 'A servant', 'A fellow prisoner'], correctAnswer: 0, reference: '1 Timothy 1:2' },
  { id: '1ti-002', bookId: '1-timothy', difficulty: 'medium', type: 'verse-completion', question: 'For the love of money is the root of all...', options: ['sin', 'evil', 'wickedness', 'corruption'], correctAnswer: 1, reference: '1 Timothy 6:10' },
];

export const timothy2Questions: QuizQuestion[] = [
  { id: '2ti-001', bookId: '2-timothy', difficulty: 'medium', type: 'verse-completion', question: 'All scripture is given by inspiration of God, and is profitable for doctrine, for reproof, for correction, for instruction in...', options: ['truth', 'faith', 'righteousness', 'wisdom'], correctAnswer: 2, reference: '2 Timothy 3:16' },
  { id: '2ti-002', bookId: '2-timothy', difficulty: 'hard', type: 'multiple-choice', question: '2 Timothy is believed to be Paul\'s... letter', options: ['first', 'middle', 'last', 'prison'], correctAnswer: 2, reference: '2 Timothy tradition' },
];

export const titusQuestions: QuizQuestion[] = [
  { id: 'tit-001', bookId: 'titus', difficulty: 'medium', type: 'multiple-choice', question: 'Where was Titus when Paul wrote to him?', options: ['Rome', 'Crete', 'Athens', 'Ephesus'], correctAnswer: 1, reference: 'Titus 1:5' },
  { id: 'tit-002', bookId: 'titus', difficulty: 'hard', type: 'multiple-choice', question: 'What type of letter is Titus classified as?', options: ['Prophetic', 'Pastoral', 'General', 'Apocalyptic'], correctAnswer: 1, reference: 'Titus' },
];

export const philemonQuestions: QuizQuestion[] = [
  { id: 'phm-001', bookId: 'philemon', difficulty: 'easy', type: 'multiple-choice', question: 'Philemon is the... book in the New Testament', options: ['longest', 'shortest', 'most quoted', 'last'], correctAnswer: 1, reference: 'Philemon' },
  { id: 'phm-002', bookId: 'philemon', difficulty: 'medium', type: 'multiple-choice', question: 'Who was Onesimus?', options: ['A pastor', 'A runaway slave', 'A prophet', 'Paul\'s brother'], correctAnswer: 1, reference: 'Philemon 1:10-16' },
];

export const hebrewsQuestions: QuizQuestion[] = [
  { id: 'heb-001', bookId: 'hebrews', difficulty: 'easy', type: 'verse-completion', question: 'Now faith is the substance of things hoped for, the evidence of things not...', options: ['understood', 'seen', 'known', 'believed'], correctAnswer: 1, reference: 'Hebrews 11:1' },
  { id: 'heb-002', bookId: 'hebrews', difficulty: 'medium', type: 'multiple-choice', question: 'Which chapter is known as the "Faith Hall of Fame"?', options: ['Chapter 9', 'Chapter 10', 'Chapter 11', 'Chapter 12'], correctAnswer: 2, reference: 'Hebrews 11' },
  { id: 'heb-003', bookId: 'hebrews', difficulty: 'hard', type: 'verse-completion', question: 'Jesus Christ the same yesterday, and to day, and...', options: ['evermore', 'for ever', 'eternally', 'always'], correctAnswer: 1, reference: 'Hebrews 13:8' },
];

export const jamesQuestions: QuizQuestion[] = [
  { id: 'jam-001', bookId: 'james', difficulty: 'easy', type: 'multiple-choice', question: 'According to James, faith without works is...', options: ['weak', 'incomplete', 'dead', 'false'], correctAnswer: 2, reference: 'James 2:26' },
  { id: 'jam-002', bookId: 'james', difficulty: 'medium', type: 'verse-completion', question: 'If any of you lack wisdom, let him ask of God, that giveth to all men liberally, and upbraideth not; and it shall be...', options: ['granted', 'given him', 'revealed', 'found'], correctAnswer: 1, reference: 'James 1:5' },
  { id: 'jam-003', bookId: 'james', difficulty: 'hard', type: 'multiple-choice', question: 'James compares the tongue to what?', options: ['A sword', 'A fire', 'A weapon', 'A poison'], correctAnswer: 1, reference: 'James 3:6' },
];

export const peter1Questions: QuizQuestion[] = [
  { id: '1pe-001', bookId: '1-peter', difficulty: 'medium', type: 'verse-completion', question: 'Casting all your care upon him; for he careth for...', options: ['us', 'you', 'all', 'his people'], correctAnswer: 1, reference: '1 Peter 5:7' },
  { id: '1pe-002', bookId: '1-peter', difficulty: 'hard', type: 'verse-completion', question: 'But sanctify the Lord God in your hearts: and be ready always to give an answer to every man that asketh you a reason of the hope that is in you with meekness and...', options: ['truth', 'love', 'fear', 'wisdom'], correctAnswer: 2, reference: '1 Peter 3:15' },
];

export const peter2Questions: QuizQuestion[] = [
  { id: '2pe-001', bookId: '2-peter', difficulty: 'medium', type: 'verse-completion', question: 'But, beloved, be not ignorant of this one thing, that one day is with the Lord as a thousand years, and a thousand years as...', options: ['a moment', 'one day', 'nothing', 'an hour'], correctAnswer: 1, reference: '2 Peter 3:8' },
  { id: '2pe-002', bookId: '2-peter', difficulty: 'hard', type: 'multiple-choice', question: 'What does Peter warn about in 2 Peter?', options: ['Persecution', 'False teachers', 'Laziness', 'Poverty'], correctAnswer: 1, reference: '2 Peter 2:1' },
];

export const john1Questions: QuizQuestion[] = [
  { id: '1jn-001', bookId: '1-john', difficulty: 'easy', type: 'verse-completion', question: 'God is...', options: ['holy', 'good', 'love', 'spirit'], correctAnswer: 2, reference: '1 John 4:8' },
  { id: '1jn-002', bookId: '1-john', difficulty: 'medium', type: 'verse-completion', question: 'If we confess our sins, he is faithful and just to forgive us our sins, and to cleanse us from all...', options: ['evil', 'wickedness', 'unrighteousness', 'iniquity'], correctAnswer: 2, reference: '1 John 1:9' },
];

export const john2Questions: QuizQuestion[] = [
  { id: '2jn-001', bookId: '2-john', difficulty: 'medium', type: 'multiple-choice', question: '2 John is written to whom?', options: ['Timothy', 'The elect lady', 'The church', 'Gaius'], correctAnswer: 1, reference: '2 John 1:1' },
  { id: '2jn-002', bookId: '2-john', difficulty: 'hard', type: 'multiple-choice', question: 'How many verses are in 2 John?', options: ['10', '13', '15', '21'], correctAnswer: 1, reference: '2 John' },
];

export const john3Questions: QuizQuestion[] = [
  { id: '3jn-001', bookId: '3-john', difficulty: 'medium', type: 'multiple-choice', question: '3 John is written to whom?', options: ['Timothy', 'The elect lady', 'Diotrephes', 'Gaius'], correctAnswer: 3, reference: '3 John 1:1' },
  { id: '3jn-002', bookId: '3-john', difficulty: 'hard', type: 'verse-completion', question: 'Beloved, I wish above all things that thou mayest prosper and be in health, even as thy soul...', options: ['grows', 'prospers', 'flourishes', 'lives'], correctAnswer: 1, reference: '3 John 1:2' },
];

export const judeQuestions: QuizQuestion[] = [
  { id: 'jud-001', bookId: 'jude', difficulty: 'medium', type: 'multiple-choice', question: 'Jude identifies himself as the brother of whom?', options: ['Jesus', 'James', 'John', 'Peter'], correctAnswer: 1, reference: 'Jude 1:1' },
  { id: 'jud-002', bookId: 'jude', difficulty: 'hard', type: 'multiple-choice', question: 'What does Jude warn about?', options: ['The end times', 'False teachers', 'Persecution', 'Sin'], correctAnswer: 1, reference: 'Jude 1:4' },
];

export const revelationQuestions: QuizQuestion[] = [
  { id: 'rev-001', bookId: 'revelation', difficulty: 'easy', type: 'multiple-choice', question: 'Who wrote the book of Revelation?', options: ['Paul', 'Peter', 'John', 'James'], correctAnswer: 2, reference: 'Revelation 1:1' },
  { id: 'rev-002', bookId: 'revelation', difficulty: 'easy', type: 'multiple-choice', question: 'Where was John when he received the Revelation?', options: ['Jerusalem', 'Rome', 'Patmos', 'Ephesus'], correctAnswer: 2, reference: 'Revelation 1:9' },
  { id: 'rev-003', bookId: 'revelation', difficulty: 'medium', type: 'multiple-choice', question: 'How many churches did John write to in Revelation?', options: ['5', '7', '10', '12'], correctAnswer: 1, reference: 'Revelation 1:4' },
  { id: 'rev-004', bookId: 'revelation', difficulty: 'hard', type: 'multiple-choice', question: 'What is the number of the beast mentioned in Revelation?', options: ['616', '666', '777', '888'], correctAnswer: 1, reference: 'Revelation 13:18' },
  { id: 'rev-005', bookId: 'revelation', difficulty: 'hard', type: 'multiple-choice', question: 'How many seals are on the scroll?', options: ['5', '7', '10', '12'], correctAnswer: 1, reference: 'Revelation 5:1' },
  { id: 'rev-006', bookId: 'revelation', difficulty: 'hard', type: 'verse-completion', question: 'Behold, I stand at the door, and knock: if any man hear my voice, and open the door, I will come in to him, and will sup with him, and he with...', options: ['me', 'the Lord', 'God', 'us'], correctAnswer: 0, reference: 'Revelation 3:20' },
];
