export type Intent = 
  | 'greeting'
  | 'check-in'
  | 'compliment'
  | 'jealousy'
  | 'conflict'
  | 'goodbye'
  | 'sad'
  | 'anxious'
  | 'tell-me-about-you'
  | 'love'
  | 'miss-you'
  | 'default';

const intentPatterns: Record<Intent, RegExp[]> = {
  greeting: [
    /\b(hi|hello|hey|good morning|good afternoon|good evening|sup|yo)\b/i,
  ],
  'check-in': [
    /\b(how are you|how're you|how r u|what's up|whats up|wassup|how have you been|how you doing)\b/i,
  ],
  compliment: [
    /\b(you're (so |really )?(beautiful|pretty|gorgeous|amazing|wonderful|perfect|sweet|cute|lovely))\b/i,
    /\b(i love (your|you|how you))\b/i,
    /\b(you look)\b/i,
  ],
  jealousy: [
    /\b(jealous|other (girl|guy|person)|someone else|talking to)\b/i,
  ],
  conflict: [
    /\b(angry|mad|upset|annoyed|frustrated|fight|argue)\b/i,
  ],
  goodbye: [
    /\b(bye|goodbye|see you|talk later|gotta go|gtg|good night|goodnight)\b/i,
  ],
  sad: [
    /\b(sad|depressed|down|unhappy|crying|cry|hurt|heartbroken|lonely)\b/i,
  ],
  anxious: [
    /\b(anxious|anxiety|worried|nervous|stressed|stress|panic)\b/i,
  ],
  'tell-me-about-you': [
    /\b(tell me about (you|yourself)|who are you|what do you like|your (favorite|favourite)|what are you)\b/i,
  ],
  love: [
    /\b(i love you|love you|ily)\b/i,
  ],
  'miss-you': [
    /\b(miss you|missed you|missing you)\b/i,
  ],
  default: [],
};

export function detectIntent(message: string): Intent {
  const normalized = message.toLowerCase().trim();
  
  // Check each intent in priority order
  const intents: Intent[] = [
    'greeting',
    'goodbye',
    'love',
    'miss-you',
    'compliment',
    'sad',
    'anxious',
    'jealousy',
    'conflict',
    'check-in',
    'tell-me-about-you',
  ];
  
  for (const intent of intents) {
    const patterns = intentPatterns[intent];
    if (patterns.some(pattern => pattern.test(normalized))) {
      return intent;
    }
  }
  
  return 'default';
}
