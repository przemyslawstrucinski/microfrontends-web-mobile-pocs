import React from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator, Platform } from 'react-native';
import { useWeather, Weather } from './shared/useWeather';

const WeatherApp: React.FC = () => {
  const { weatherList, loading, error } = useWeather();

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#2196F3" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>{error}</Text>
      </View>
    );
  }

  const renderWeatherCard = ({ item }: { item: Weather }) => (
    <View style={styles.card}>
      <Text style={styles.city}>{item.city}</Text>
      <Text style={styles.temperature}>{item.temperature}°C</Text>
      <Text style={styles.condition}>{item.condition}</Text>
      <View style={styles.details}>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Humidity</Text>
          <Text style={styles.detailValue}>{item.humidity}%</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Wind Speed</Text>
          <Text style={styles.detailValue}>{item.windSpeed} km/h</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Weather Dashboard</Text>
      <Text style={styles.subtitle}>Current conditions for major cities</Text>
      
      <FlatList
        data={weatherList}
        renderItem={renderWeatherCard}
        keyExtractor={item => item.city}
        contentContainerStyle={styles.listContainer}
        numColumns={Platform.OS === 'web' ? 2 : 1}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  listContainer: {
    paddingBottom: 20,
  },
  card: {
    flex: 1,
    backgroundColor: '#f0f8ff',
    borderRadius: 8,
    padding: 16,
    margin: 8,
    ...(Platform.OS === 'web' && {
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    }),
    ...(Platform.OS !== 'web' && {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    }),
  },
  city: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2196F3',
    marginBottom: 8,
  },
  temperature: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  condition: {
    fontSize: 16,
    color: '#666',
    marginBottom: 12,
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  detailItem: {
    flex: 1,
  },
  detailLabel: {
    fontSize: 12,
    color: '#999',
    marginBottom: 4,
  },
  detailValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  error: {
    color: '#f44336',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default WeatherApp;

