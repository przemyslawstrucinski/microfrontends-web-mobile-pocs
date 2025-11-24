import React, { useEffect, useState } from 'react';

// Helper function to load remote script
const loadScript = (url: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const element = document.querySelector(`script[src="${url}"]`);
    if (element) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.src = url;
    script.type = 'text/javascript';
    script.async = true;

    script.onload = () => {
      console.log('Script loaded:', url);
      resolve();
    };

    script.onerror = () => {
      reject(new Error(`Failed to load script: ${url}`));
    };

    document.head.appendChild(script);
  });
};

const DynamicSearchWidget: React.FC = () => {
  const [SearchWidgetComponent, setSearchWidgetComponent] = useState<React.ComponentType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Only load the remote module in the browser
    if (typeof window !== 'undefined') {
      console.log('Attempting to load remote module...');
      
      const loadRemoteModule = async () => {
        try {
          // Load the remote entry script
          await loadScript('http://localhost:9001/remoteEntry.js');
          
          // @ts-ignore - Access the global container
          const container = window.gatsby_search_mfe;
          
          if (!container) {
            throw new Error('Remote container gatsby_search_mfe not found on window');
          }
          
          console.log('Container found:', container);
          
          // Override the publicPath in the container's runtime before initialization
          // @ts-ignore
          if (container.__webpack_require__) {
            // @ts-ignore
            container.__webpack_require__.p = 'http://localhost:9001/';
            console.log('Set container publicPath to http://localhost:9001/');
          }
          
          // Initialize the container with shared scope
          // @ts-ignore
          if (typeof __webpack_init_sharing__ !== 'undefined') {
            // @ts-ignore
            await __webpack_init_sharing__('default');
            // @ts-ignore
            await container.init(__webpack_share_scopes__.default);
          }
          
          // Get the exposed module
          const factory = await container.get('./SearchWidget');
          const Module = factory();
          
          console.log('Module loaded successfully:', Module);
          setSearchWidgetComponent(() => Module.default || Module);
          setLoading(false);
        } catch (err: any) {
          console.error('Failed to load Search Widget - Full error:', err);
          console.error('Error name:', err?.name);
          console.error('Error message:', err?.message);
          console.error('Error stack:', err?.stack);
          setError(`Failed to load search widget: ${err?.message || String(err)}`);
          setLoading(false);
        }
      };
      
      loadRemoteModule();
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-xl p-6 max-w-2xl mx-auto">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
          <div className="h-12 bg-gray-200 rounded mb-4"></div>
          <div className="h-12 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white rounded-lg shadow-xl p-6 max-w-2xl mx-auto">
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  if (!SearchWidgetComponent) {
    return (
      <div className="bg-white rounded-lg shadow-xl p-6 max-w-2xl mx-auto">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
          <div className="h-12 bg-gray-200 rounded mb-4"></div>
          <div className="h-12 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  return <SearchWidgetComponent />;
};

export default DynamicSearchWidget;

