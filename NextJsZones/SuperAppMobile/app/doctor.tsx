import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DoctorScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Doctor Module</Text>
        <Text style={styles.text}>
          This screen would load the Doctor module dynamically using re.pack module federation.
        </Text>
        <Text style={styles.text}>
          In production, the Doctor module would be loaded from the Modules/Doctor/app/mobile package.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 16,
  },
  text: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 12,
    paddingHorizontal: 20,
  },
});

