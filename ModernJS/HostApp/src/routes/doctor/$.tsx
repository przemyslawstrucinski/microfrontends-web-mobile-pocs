import { useModuleApps } from '@modern-js/plugin-garfish/runtime';
import { useParams } from '@modern-js/runtime/router';
import { useEffect, useState } from 'react';

// This route serves as a mount point for the Doctor microfrontend via Garfish
export default function DoctorPage() {
  const { MicroApp } = useModuleApps();
  const params = useParams();
  const [useGarfish, setUseGarfish] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  
  // Get current pathname for iframe fallback
  // Simply use the full pathname and point to Doctor MFE
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '';
  // The catch-all route $ should match /doctor/*, so pathname will be like /doctor/1
  // Just replace localhost:8080 with localhost:8082
  const doctorUrl = pathname 
    ? `http://localhost:8082${pathname}`
    : 'http://localhost:8082/doctor/1'; // Fallback
  
  useEffect(() => {
    console.log('DoctorPage mounted');
    console.log('pathname:', pathname);
    console.log('doctorUrl:', doctorUrl);
    console.log('params:', params);
  }, [pathname, doctorUrl, params]);
  
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
        src={doctorUrl}
        style={{
          width: '100%',
          height: '100vh',
          border: 'none',
          display: 'block'
        }}
        title="Doctor MFE"
      />
    );
  }
  
  if (!MicroApp) {
    return (
      <iframe
        src={doctorUrl}
        style={{
          width: '100%',
          height: '100vh',
          border: 'none',
          display: 'block'
        }}
        title="Doctor MFE"
      />
    );
  }
  
  return (
    <div style={{ width: '100%', height: '100%', minHeight: '100vh' }}>
      <MicroApp 
        name="doctor"
        onError={(err: Error) => {
          console.error('Garfish MicroApp error:', err);
          setError(err);
          setUseGarfish(false);
        }}
      />
    </div>
  );
}

