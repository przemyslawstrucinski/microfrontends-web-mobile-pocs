import { useModuleApps } from '@modern-js/plugin-garfish/runtime';
import { useEffect, useState } from 'react';

// This route serves as a mount point for the Search microfrontend via Garfish
export default function SearchPage() {
  const { MicroApp } = useModuleApps();
  const [useGarfish, setUseGarfish] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  
  useEffect(() => {
    // Fallback to iframe if Garfish doesn't work after 2 seconds
    const timer = setTimeout(() => {
      if (useGarfish && !error) {
        console.warn('Garfish MicroApp not mounting, falling back to iframe');
        setUseGarfish(false);
      }
    }, 2000);
    
    return () => clearTimeout(timer);
  }, [useGarfish, error]);
  
  // Fallback to iframe if Garfish fails
  if (!useGarfish || error) {
    return (
      <iframe
        src="http://localhost:8081/"
        style={{
          width: '100%',
          height: '100vh',
          border: 'none',
          display: 'block'
        }}
        title="Search MFE"
      />
    );
  }
  
  if (!MicroApp) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-yellow-600 mb-4">MicroApp component not available</h1>
          <p className="text-gray-600 mb-4">Garfish might not be initialized correctly</p>
          <iframe
            src="http://localhost:8081/"
            style={{
              width: '100%',
              height: '80vh',
              border: '1px solid #ddd',
              borderRadius: '8px'
            }}
            title="Search MFE"
          />
        </div>
      </div>
    );
  }
  
  return (
    <div style={{ width: '100%', height: '100%', minHeight: '100vh' }}>
      <MicroApp 
        name="search"
        onError={(err: Error) => {
          console.error('Garfish MicroApp error:', err);
          setError(err);
          setUseGarfish(false);
        }}
      />
    </div>
  );
}

