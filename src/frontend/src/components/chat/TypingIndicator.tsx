interface TypingIndicatorProps {
  companionName: string;
}

export function TypingIndicator({ companionName }: TypingIndicatorProps) {
  return (
    <div className="px-4 pb-2 max-w-3xl mx-auto">
      <div className="flex items-center gap-2">
        <img 
          src="/assets/generated/ai-girlfriend-avatar.dim_512x512.png" 
          alt={companionName}
          className="w-8 h-8 rounded-full border-2 border-rose-300 dark:border-rose-700"
        />
        <div className="bg-white dark:bg-rose-900/50 border border-rose-200 dark:border-rose-800 rounded-2xl px-4 py-3">
          <div className="flex gap-1">
            <span className="w-2 h-2 bg-rose-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
            <span className="w-2 h-2 bg-rose-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
            <span className="w-2 h-2 bg-rose-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
          </div>
        </div>
      </div>
    </div>
  );
}
