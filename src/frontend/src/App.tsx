import { useEffect } from 'react';
import { SITE_NAME } from './config/site';
import { setSiteMetadata } from './lib/siteMetadata';

export default function App() {
  useEffect(() => {
    setSiteMetadata(SITE_NAME);
  }, []);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background text-foreground">
      <h1 className="text-4xl font-bold">{SITE_NAME}</h1>
    </div>
  );
}
