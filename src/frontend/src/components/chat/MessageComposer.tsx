import { useState, useRef, KeyboardEvent } from 'react';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';
import { Send } from 'lucide-react';

interface MessageComposerProps {
  onSend: (message: string) => void;
  disabled?: boolean;
}

export function MessageComposer({ onSend, disabled }: MessageComposerProps) {
  const [message, setMessage] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSend = () => {
    if (message.trim() && !disabled) {
      onSend(message.trim());
      setMessage('');
      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto';
      }
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
    // Auto-resize textarea
    e.target.style.height = 'auto';
    e.target.style.height = Math.min(e.target.scrollHeight, 120) + 'px';
  };

  return (
    <div className="border-t border-rose-200/50 dark:border-rose-800/30 p-4 bg-white/50 dark:bg-rose-950/50">
      <div className="flex gap-2 max-w-3xl mx-auto">
        <Textarea
          ref={textareaRef}
          value={message}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Type your message..."
          disabled={disabled}
          className="resize-none min-h-[44px] max-h-[120px] border-rose-300 focus:border-rose-500 focus:ring-rose-500 dark:border-rose-700 dark:bg-rose-900/50 dark:text-rose-100 dark:placeholder:text-rose-400"
          rows={1}
        />
        <Button
          onClick={handleSend}
          disabled={!message.trim() || disabled}
          size="icon"
          className="h-11 w-11 flex-shrink-0 bg-rose-600 hover:bg-rose-700 text-white dark:bg-rose-700 dark:hover:bg-rose-800"
        >
          <Send className="w-5 h-5" />
        </Button>
      </div>
      <p className="text-xs text-rose-500 dark:text-rose-400 text-center mt-2">
        Press Enter to send, Shift+Enter for new line
      </p>
    </div>
  );
}
