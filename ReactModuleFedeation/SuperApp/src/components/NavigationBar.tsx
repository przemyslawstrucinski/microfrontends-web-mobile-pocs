import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';

interface NavigationBarProps {
  activeModule: string;
  onNavigate: (module: string) => void;
}

const NavigationBar: React.FC<NavigationBarProps> = ({ activeModule, onNavigate }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'todo', label: 'ToDo', icon: '✓' },
    { id: 'weather', label: 'Weather', icon: '☀️' },
  ];

  return (
    <View style={styles.nav}>
      <View style={styles.container}>
        <View style={styles.logoSection}>
          <Text style={styles.logo}>Super App</Text>
          <Text style={styles.subtitle}>Microfrontend Demo</Text>
        </View>
        
        <View style={styles.navButtons}>
          {navItems.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={[
                styles.navButton,
                activeModule === item.id && styles.navButtonActive,
              ]}
              onPress={() => onNavigate(item.id)}
              accessibilityRole="button"
              accessibilityLabel={`Navigate to ${item.label}`}
              accessibilityState={{ selected: activeModule === item.id }}
            >
              <Text style={styles.icon}>{item.icon}</Text>
              <Text
                style={[
                  styles.navButtonText,
                  activeModule === item.id && styles.navButtonTextActive,
                ]}
              >
                {item.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  nav: {
    backgroundColor: '#2196F3',
    ...(Platform.OS === 'web' && {
      boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
    }),
    ...(Platform.OS !== 'web' && {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.15,
      shadowRadius: 8,
      elevation: 4,
    }),
  },
  container: {
    maxWidth: 1200,
    marginHorizontal: 'auto',
    paddingHorizontal: 20,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    ...(Platform.OS === 'web' && {
      width: '100%',
    }),
  },
  logoSection: {
    flexDirection: 'column',
  },
  logo: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  subtitle: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 12,
    fontWeight: '400',
  },
  navButtons: {
    flexDirection: 'row',
    gap: 8,
  },
  navButton: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: 'rgba(255,255,255,0.1)',
    ...(Platform.OS === 'web' && {
      transition: 'all 0.2s ease',
      cursor: 'pointer',
    }),
  },
  navButtonActive: {
    backgroundColor: 'white',
  },
  icon: {
    fontSize: 16,
  },
  navButtonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: '600',
  },
  navButtonTextActive: {
    color: '#2196F3',
  },
});

export default NavigationBar;

