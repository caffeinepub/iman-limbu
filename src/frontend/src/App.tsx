import { useEffect, useState } from 'react';
import { SITE_NAME } from './config/site';
import { setSiteMetadata } from './lib/siteMetadata';
import { Music, Heart, AlertCircle } from 'lucide-react';

export default function App() {
  const [imageError, setImageError] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioError, setAudioError] = useState(false);

  useEffect(() => {
    setSiteMetadata(SITE_NAME);
  }, []);

  const handleImageError = () => {
    setImageError(true);
  };

  const handleAudioError = () => {
    setAudioError(true);
  };

  const handlePlayPause = () => {
    const audio = document.getElementById('music-player') as HTMLAudioElement;
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play().catch((error) => {
          console.error('Audio play error:', error);
          setAudioError(true);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-background via-accent/20 to-background">
      {/* Header */}
      <header className="w-full py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-center text-foreground">
            {SITE_NAME}
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Photo Section */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/20">
                {!imageError ? (
                  <img
                    src="/assets/generated/iman-photo.dim_1024x1024.jpg"
                    alt={SITE_NAME}
                    className="w-full h-full object-cover"
                    onError={handleImageError}
                  />
                ) : (
                  <img
                    src="/assets/generated/photo-placeholder.dim_1024x1024.png"
                    alt={`${SITE_NAME} placeholder`}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            </div>

            {/* Music Player Section */}
            <div className="flex flex-col justify-center space-y-6">
              <div className="bg-card rounded-2xl p-8 shadow-xl border border-border">
                <div className="flex items-center gap-3 mb-6">
                  <Music className="w-8 h-8 text-primary" />
                  <h2 className="text-2xl font-semibold text-card-foreground">
                    Now Playing
                  </h2>
                </div>

                <div className="space-y-4">
                  <p className="text-lg font-medium text-foreground">
                    20 dollears in my pocket
                  </p>

                  <audio
                    id="music-player"
                    className="w-full"
                    controls
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    onError={handleAudioError}
                  >
                    <source src="/assets/20-dollears-in-my-pocket.mp3" type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>

                  {audioError && (
                    <div className="flex items-start gap-2 p-3 bg-destructive/10 border border-destructive/20 rounded-lg">
                      <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                      <div className="text-sm text-destructive">
                        <p className="font-medium">Unable to load audio</p>
                        <p className="text-xs mt-1">
                          The music file could not be loaded. Please try refreshing the page or check that the audio file is available.
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Music className="w-4 h-4" />
                    <span>Original Track</span>
                  </div>
                </div>
              </div>

              {/* Additional Info Card */}
              <div className="bg-card/50 rounded-xl p-6 border border-border/50">
                <p className="text-center text-muted-foreground italic">
                  "Music is the soundtrack of your life"
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-8 px-4 sm:px-6 lg:px-8 mt-auto">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            Built with <Heart className="w-4 h-4 text-destructive fill-destructive" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
                typeof window !== 'undefined' ? window.location.hostname : 'iman-limbu'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              caffeine.ai
            </a>
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
