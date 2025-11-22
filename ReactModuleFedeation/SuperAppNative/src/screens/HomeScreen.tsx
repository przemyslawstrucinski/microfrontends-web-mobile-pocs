import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const HomeScreen: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Welcome to Super App Native 🚀</Text>
        <Text style={styles.subtitle}>
          A modern microfrontend architecture for React Native
        </Text>
        
        <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>Architecture Features:</Text>
          <View style={styles.featureList}>
            <Text style={styles.feature}>✓ Module Federation for React Native</Text>
            <Text style={styles.feature}>✓ Metro bundler integration</Text>
            <Text style={styles.feature}>✓ Dynamic remote module loading</Text>
            <Text style={styles.feature}>✓ Microservices with NestJS</Text>
            <Text style={styles.feature}>✓ React Native for iOS & Android</Text>
            <Text style={styles.feature}>✓ TypeScript for type safety</Text>
            <Text style={styles.feature}>✓ React Navigation</Text>
          </View>
        </View>

        <Text style={styles.instruction}>
          👆 Tap a module from the navigation above to get started
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
    color: '#2196F3',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
  },
  infoBox: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 24,
    width: '100%',
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  featureList: {
    gap: 10,
  },
  feature: {
    fontSize: 14,
    color: '#555',
    paddingVertical: 4,
  },
  instruction: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    fontStyle: 'italic',
    marginBottom: 20,
  },
});

export default HomeScreen;

