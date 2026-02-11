import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';

interface ProfileSetupProps {
  onSave: (name: string) => void;
}

export function ProfileSetup({ onSave }: ProfileSetupProps) {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onSave(name.trim());
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50 dark:from-rose-950 dark:via-pink-950 dark:to-amber-950 flex items-center justify-center p-4">
      <div className="bg-white/80 dark:bg-rose-950/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-rose-200/50 dark:border-rose-800/30 max-w-md w-full">
        <img 
          src="/assets/generated/ai-girlfriend-avatar.dim_512x512.png" 
          alt="AI Companion"
          className="w-24 h-24 mx-auto rounded-full border-4 border-rose-300 dark:border-rose-700 shadow-md mb-6"
        />
        <h2 className="text-2xl font-bold text-rose-900 dark:text-rose-100 text-center mb-2">
          Welcome! 💕
        </h2>
        <p className="text-rose-700 dark:text-rose-300 text-center mb-6">
          What should I call you?
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name" className="text-rose-900 dark:text-rose-100">
              Your Name
            </Label>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="mt-1 border-rose-300 focus:border-rose-500 focus:ring-rose-500 dark:border-rose-700 dark:bg-rose-900/50"
              autoFocus
            />
          </div>
          
          <Button
            type="submit"
            disabled={!name.trim()}
            className="w-full bg-rose-600 hover:bg-rose-700 text-white dark:bg-rose-700 dark:hover:bg-rose-800"
          >
            Continue
          </Button>
        </form>
      </div>
    </div>
  );
}
