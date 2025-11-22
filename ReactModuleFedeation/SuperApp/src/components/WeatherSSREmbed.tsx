import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';

const WeatherSSREmbed: React.FC = () => {
  if (Platform.OS !== 'web') {
    return null;
  }

  return (
    <View style={styles.container}>
      <iframe
        src="http://localhost:3003"
        style={{
          width: '100%',
          height: 'calc(100vh - 200px)',
          border: 'none',
          minHeight: '600px',
        }}
        title="Weather SSR - Server Side Rendered"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

export default WeatherSSREmbed;

