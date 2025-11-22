import React, { Suspense, lazy } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import WeatherSSREmbed from './components/WeatherSSREmbed';

// Web-only: use lazy loading for microfrontends
const TodoApp = lazy(() => import('todoApp/TodoApp'));

// Web-only: use Next.js SSR version for better SEO
// WeatherApp component loaded via WeatherSSREmbed instead

const HomePage: React.FC = () => (
  <View style={styles.home}>
    <Text style={styles.homeTitle}>Welcome to Super App (Web) 🚀</Text>
    <Text style={styles.homeSubtitle}>
      A modern microfrontend architecture for web
    </Text>
    
    <View style={styles.infoBox}>
      <Text style={styles.infoTitle}>Architecture Features:</Text>
      <View style={styles.featureList}>
        <Text style={styles.feature}>✓ Module Federation for dynamic loading</Text>
        <Text style={styles.feature}>✓ Microservices with NestJS</Text>
        <Text style={styles.feature}>✓ Next.js SSR for Weather (better SEO)</Text>
        <Text style={styles.feature}>✓ React 19 with TypeScript</Text>
        <Text style={styles.feature}>✓ Webpack Module Federation</Text>
        <Text style={styles.feature}>✓ SEO optimized with accessibility</Text>
        <Text style={styles.feature}>✓ URL routing with React Router</Text>
      </View>
    </View>

    <Text style={styles.instruction}>
      👆 Select a module from the navigation above to get started
    </Text>
    <Text style={styles.urlHint}>
      💡 You can also access modules directly via URL
    </Text>
    <Text style={styles.urlHint}>
      📱 For React Native, see SuperAppNative
    </Text>
  </View>
);

const AppContent: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Determine active module from URL path
  const activeModule = location.pathname === '/todo' ? 'todo' 
    : location.pathname === '/weather' ? 'weather' 
    : 'home';

  const handleNavigate = (module: string) => {
    if (module === 'home') {
      navigate('/');
    } else {
      navigate(`/${module}`);
    }
  };

  return (
    <View style={styles.container}>
      <NavigationBar activeModule={activeModule} onNavigate={handleNavigate} />
      
      <ScrollView style={styles.content}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route 
            path="/todo" 
            element={
              <Suspense fallback={<Text style={styles.loading}>Loading ToDo module...</Text>}>
                <TodoApp />
              </Suspense>
            } 
          />
          <Route 
            path="/weather" 
            element={
                // Web: Use Next.js SSR version for better SEO
                <WeatherSSREmbed />
            } 
          />
        </Routes>
      </ScrollView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Built with React, Module Federation & NestJS
        </Text>
      </View>
    </View>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
  },
  loading: {
    padding: 20,
    textAlign: 'center',
    fontSize: 16,
    color: '#666',
  },
  home: {
    padding: 30,
    alignItems: 'center',
    maxWidth: 800,
    marginHorizontal: 'auto',
      width: '100%',
  },
  homeTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
    color: '#2196F3',
  },
  homeSubtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 40,
    textAlign: 'center',
  },
  infoBox: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 24,
    width: '100%',
    marginBottom: 30,
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
  infoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  featureList: {
    gap: 12,
  },
  feature: {
    fontSize: 16,
    color: '#555',
    paddingVertical: 4,
  },
  instruction: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    fontStyle: 'italic',
    marginBottom: 8,
  },
  urlHint: {
    fontSize: 14,
    color: '#2196F3',
    textAlign: 'center',
    fontStyle: 'italic',
    marginTop: 4,
  },
  footer: {
    backgroundColor: 'white',
    padding: 16,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  footerText: {
    fontSize: 14,
    color: '#666',
  },
});

export default App;
