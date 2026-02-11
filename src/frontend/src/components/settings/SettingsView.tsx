import { useCompanionSettings, type RelationshipVibe, type ConversationStyle } from '../../hooks/useCompanionSettings';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '../ui/dialog';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';

interface SettingsViewProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SettingsView({ open, onOpenChange }: SettingsViewProps) {
  const { settings, updateSettings } = useCompanionSettings();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] bg-white dark:bg-rose-950 border-rose-200 dark:border-rose-800">
        <DialogHeader>
          <DialogTitle className="text-rose-900 dark:text-rose-100">Companion Settings</DialogTitle>
          <DialogDescription className="text-rose-700 dark:text-rose-300">
            Customize your companion's personality and conversation style
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          {/* Companion Name */}
          <div className="space-y-2">
            <Label htmlFor="companion-name" className="text-rose-900 dark:text-rose-100">
              Companion Name
            </Label>
            <Input
              id="companion-name"
              value={settings.companionName}
              onChange={(e) => updateSettings({ companionName: e.target.value })}
              placeholder="Enter companion name"
              className="border-rose-300 focus:border-rose-500 focus:ring-rose-500 dark:border-rose-700 dark:bg-rose-900/50"
            />
          </div>

          {/* Relationship Vibe */}
          <div className="space-y-3">
            <Label className="text-rose-900 dark:text-rose-100">Relationship Vibe</Label>
            <RadioGroup
              value={settings.vibe}
              onValueChange={(value) => updateSettings({ vibe: value as RelationshipVibe })}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Sweet" id="vibe-sweet" className="border-rose-500 text-rose-600" />
                <Label htmlFor="vibe-sweet" className="font-normal text-rose-800 dark:text-rose-200 cursor-pointer">
                  Sweet - Gentle, caring, and affectionate
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Playful" id="vibe-playful" className="border-rose-500 text-rose-600" />
                <Label htmlFor="vibe-playful" className="font-normal text-rose-800 dark:text-rose-200 cursor-pointer">
                  Playful - Fun, teasing, and lighthearted
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Supportive" id="vibe-supportive" className="border-rose-500 text-rose-600" />
                <Label htmlFor="vibe-supportive" className="font-normal text-rose-800 dark:text-rose-200 cursor-pointer">
                  Supportive - Understanding, empathetic, and encouraging
                </Label>
              </div>
            </RadioGroup>
          </div>

          {/* Conversation Style */}
          <div className="space-y-3">
            <Label className="text-rose-900 dark:text-rose-100">Conversation Style</Label>
            <RadioGroup
              value={settings.style}
              onValueChange={(value) => updateSettings({ style: value as ConversationStyle })}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Short" id="style-short" className="border-rose-500 text-rose-600" />
                <Label htmlFor="style-short" className="font-normal text-rose-800 dark:text-rose-200 cursor-pointer">
                  Short - Brief, concise messages
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Balanced" id="style-balanced" className="border-rose-500 text-rose-600" />
                <Label htmlFor="style-balanced" className="font-normal text-rose-800 dark:text-rose-200 cursor-pointer">
                  Balanced - Moderate length responses
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Long" id="style-long" className="border-rose-500 text-rose-600" />
                <Label htmlFor="style-long" className="font-normal text-rose-800 dark:text-rose-200 cursor-pointer">
                  Long - Detailed, expressive messages
                </Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
