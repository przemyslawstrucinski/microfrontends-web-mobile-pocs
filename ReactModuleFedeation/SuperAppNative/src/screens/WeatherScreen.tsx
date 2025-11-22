import React, { Suspense } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

// Dynamic import of the remote module
const WeatherApp = React.lazy(() => import('weatherApp/WeatherApp'));

const WeatherScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Suspense fallback={
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="#2196F3" />
          <Text style={styles.loadingText}>Loading Weather module...</Text>
        </View>
      }>
        <WeatherApp />
      </Suspense>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 12,
    fontSize: 16,
    color: '#666',
  },
});

export default WeatherScreen;

