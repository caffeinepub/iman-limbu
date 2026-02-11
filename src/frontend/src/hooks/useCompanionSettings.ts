import { useState, useEffect } from 'react';

export type RelationshipVibe = 'Sweet' | 'Playful' | 'Supportive';
export type ConversationStyle = 'Short' | 'Balanced' | 'Long';

export interface CompanionSettings {
  companionName: string;
  vibe: RelationshipVibe;
  style: ConversationStyle;
}

const DEFAULT_SETTINGS: CompanionSettings = {
  companionName: 'Luna',
  vibe: 'Sweet',
  style: 'Balanced',
};

const STORAGE_KEY = 'companion-settings';

export function useCompanionSettings() {
  const [settings, setSettings] = useState<CompanionSettings>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return { ...DEFAULT_SETTINGS, ...JSON.parse(stored) };
      }
    } catch (error) {
      console.error('Failed to load settings:', error);
    }
    return DEFAULT_SETTINGS;
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    } catch (error) {
      console.error('Failed to save settings:', error);
    }
  }, [settings]);

  const updateSettings = (updates: Partial<CompanionSettings>) => {
    setSettings(prev => ({ ...prev, ...updates }));
  };

  return { settings, updateSettings };
}
