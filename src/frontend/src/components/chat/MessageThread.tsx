import { useEffect, useRef } from 'react';
import type { Message } from '../../backend';
import { ScrollArea } from '../ui/scroll-area';

interface MessageThreadProps {
  messages: Message[];
  companionName: string;
  userName?: string;
}

export function MessageThread({ messages, companionName, userName }: MessageThreadProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <ScrollArea className="flex-1 p-4" ref={scrollRef}>
      <div className="space-y-4 max-w-3xl mx-auto">
        {messages.map((message, index) => {
          const isCompanion = message.isSystemMessage;
          const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
          
          return (
            <div
              key={index}
              className={`flex ${isCompanion ? 'justify-start' : 'justify-end'} animate-in fade-in slide-in-from-bottom-2 duration-300`}
            >
              <div className={`flex gap-2 max-w-[80%] ${isCompanion ? 'flex-row' : 'flex-row-reverse'}`}>
                {isCompanion && (
                  <img 
                    src="/assets/generated/ai-girlfriend-avatar.dim_512x512.png" 
                    alt={companionName}
                    className="w-8 h-8 rounded-full border-2 border-rose-300 dark:border-rose-700 flex-shrink-0"
                  />
                )}
                
                <div className="flex flex-col gap-1">
                  <div
                    className={`rounded-2xl px-4 py-3 ${
                      isCompanion
                        ? 'bg-white dark:bg-rose-900/50 text-rose-900 dark:text-rose-100 border border-rose-200 dark:border-rose-800'
                        : 'bg-rose-600 dark:bg-rose-700 text-white'
                    }`}
                  >
                    <p className="text-sm leading-relaxed whitespace-pre-wrap break-words">
                      {message.content}
                    </p>
                  </div>
                  <span className={`text-xs text-rose-500 dark:text-rose-400 ${isCompanion ? 'text-left' : 'text-right'}`}>
                    {isCompanion ? companionName : userName || 'You'} • {timestamp}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </ScrollArea>
  );
}
