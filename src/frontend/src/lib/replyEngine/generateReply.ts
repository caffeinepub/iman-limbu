import { detectIntent } from './intents';
import { applyPersonaBoundaries } from './persona';
import { getResponseTemplate } from './responseLibrary';
import { selectVariant } from './seededRandom';
import type { CompanionSettings } from '../../hooks/useCompanionSettings';

export function generateReply(
  userMessage: string,
  settings: CompanionSettings,
  messageCount: number
): string {
  // Detect intent from user message
  const intent = detectIntent(userMessage);
  
  // Get response templates based on intent, vibe, and style
  const templates = getResponseTemplate(intent, settings.vibe, settings.style);
  
  // Select a variant using seeded randomness (based on message count)
  const seed = messageCount + Date.now();
  const selectedTemplate = selectVariant(templates, seed);
  
  // Replace placeholder with companion name if needed
  let response = selectedTemplate.replace(/\{companionName\}/g, settings.companionName);
  
  // Apply persona boundaries to ensure safe content
  response = applyPersonaBoundaries(response);
  
  return response;
}
