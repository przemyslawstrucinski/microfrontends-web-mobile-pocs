import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface NavigationBarProps {
  activeScreen: string;
  onNavigate: (screen: string) => void;
}

const NavigationBar: React.FC<NavigationBarProps> = ({ activeScreen, onNavigate }) => {
  const navItems = [
    { key: 'Home', label: '🏠 Home' },
    { key: 'Todo', label: '✓ ToDo' },
    { key: 'Weather', label: '☁️ Weather' },
  ];

  return (
    <View style={styles.container}>
      {navItems.map((item) => (
        <TouchableOpacity
          key={item.key}
          style={[
            styles.navItem,
            activeScreen === item.key && styles.navItemActive,
          ]}
          onPress={() => onNavigate(item.key)}
          accessibilityRole="button"
          accessibilityLabel={`Navigate to ${item.label}`}
        >
          <Text
            style={[
              styles.navText,
              activeScreen === item.key && styles.navTextActive,
            ]}
          >
            {item.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#2196F3',
    paddingVertical: 8,
    paddingHorizontal: 4,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  navItem: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 8,
    marginHorizontal: 4,
    borderRadius: 8,
    alignItems: 'center',
  },
  navItemActive: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
  navText: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 14,
    fontWeight: '600',
  },
  navTextActive: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});

export default NavigationBar;

