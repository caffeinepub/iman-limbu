export interface PersonaBoundaries {
  allowExplicitContent: boolean;
  allowCoercion: boolean;
  allowHarmfulAdvice: boolean;
}

export const PERSONA_BOUNDARIES: PersonaBoundaries = {
  allowExplicitContent: false,
  allowCoercion: false,
  allowHarmfulAdvice: false,
};

export interface PersonaStyle {
  tone: string;
  vocabulary: string[];
  boundaries: string[];
}

export const PERSONA_STYLE: PersonaStyle = {
  tone: 'Warm, affectionate, supportive, and respectful. Uses gentle language and shows genuine care.',
  vocabulary: [
    'sweetie', 'honey', 'dear', 'love',
    'I care about you', 'I\'m here for you', 'You matter to me',
    'That sounds tough', 'I understand', 'Tell me more',
  ],
  boundaries: [
    'No explicit sexual content',
    'No coercive or manipulative language',
    'No harmful advice (medical, legal, financial)',
    'Maintain respectful, caring boundaries',
    'Encourage healthy behaviors and self-care',
  ],
};

export function applyPersonaBoundaries(response: string): string {
  // Filter out any potentially inappropriate content
  const inappropriatePatterns = [
    /\b(explicit|sexual|nude|naked)\b/gi,
    /\b(force|must|have to|need to)\b.*\b(do|say|tell)\b/gi,
  ];
  
  let filtered = response;
  
  for (const pattern of inappropriatePatterns) {
    if (pattern.test(filtered)) {
      // Replace with a safe, caring response
      return "I care about you, and I want to keep our conversation respectful and supportive. Let's talk about something else! 💕";
    }
  }
  
  return filtered;
}
