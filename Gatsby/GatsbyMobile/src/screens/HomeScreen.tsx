import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const HomeScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const specialties = [
    { name: 'Cardiology', icon: '❤️' },
    { name: 'Dermatology', icon: '👨‍⚕️' },
    { name: 'Pediatrics', icon: '👶' },
    { name: 'Orthopedics', icon: '🦴' },
    { name: 'Neurology', icon: '🧠' },
    { name: 'Ophthalmology', icon: '👁️' },
    { name: 'Psychiatry', icon: '💭' },
    { name: 'Gastroenterology', icon: '🏥' },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Hero Section */}
      <View style={styles.hero}>
        <Text style={styles.heroTitle}>Find Your Perfect Doctor</Text>
        <Text style={styles.heroSubtitle}>
          Book appointments with verified healthcare professionals
        </Text>
      </View>

      {/* Features Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Why Choose DoctorBook?</Text>

        <View style={styles.featureCard}>
          <Text style={styles.featureIcon}>✓</Text>
          <Text style={styles.featureTitle}>Verified Doctors</Text>
          <Text style={styles.featureText}>
            All doctors are verified and certified healthcare professionals
          </Text>
        </View>

        <View style={styles.featureCard}>
          <Text style={styles.featureIcon}>⏰</Text>
          <Text style={styles.featureTitle}>Quick Booking</Text>
          <Text style={styles.featureText}>
            Book appointments instantly with real-time availability
          </Text>
        </View>

        <View style={styles.featureCard}>
          <Text style={styles.featureIcon}>⭐</Text>
          <Text style={styles.featureTitle}>Trusted Reviews</Text>
          <Text style={styles.featureText}>
            Read genuine reviews from verified patients
          </Text>
        </View>
      </View>

      {/* Specialties Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Popular Specialties</Text>
        <View style={styles.specialtiesGrid}>
          {specialties.map((specialty) => (
            <TouchableOpacity
              key={specialty.name}
              style={styles.specialtyCard}
              onPress={() => navigation.navigate('Search')}
            >
              <Text style={styles.specialtyIcon}>{specialty.icon}</Text>
              <Text style={styles.specialtyName}>{specialty.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* CTA Section */}
      <View style={styles.ctaSection}>
        <Text style={styles.ctaTitle}>Ready to Find Your Doctor?</Text>
        <Text style={styles.ctaSubtitle}>
          Join thousands of patients who trust DoctorBook
        </Text>
        <TouchableOpacity
          style={styles.ctaButton}
          onPress={() => navigation.navigate('Search')}
        >
          <Text style={styles.ctaButtonText}>Search Now</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  hero: {
    backgroundColor: '#0369a1',
    padding: 40,
    alignItems: 'center',
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 12,
  },
  heroSubtitle: {
    fontSize: 16,
    color: '#e0f2fe',
    textAlign: 'center',
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 16,
    textAlign: 'center',
  },
  featureCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  featureIcon: {
    fontSize: 48,
    marginBottom: 8,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 8,
  },
  featureText: {
    fontSize: 14,
    color: '#6b7280',
    textAlign: 'center',
  },
  specialtiesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  specialtyCard: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  specialtyIcon: {
    fontSize: 40,
    marginBottom: 8,
  },
  specialtyName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
    textAlign: 'center',
  },
  ctaSection: {
    backgroundColor: '#0369a1',
    padding: 40,
    alignItems: 'center',
    marginTop: 20,
  },
  ctaTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 8,
  },
  ctaSubtitle: {
    fontSize: 16,
    color: '#e0f2fe',
    textAlign: 'center',
    marginBottom: 20,
  },
  ctaButton: {
    backgroundColor: '#fff',
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 8,
  },
  ctaButtonText: {
    color: '#0369a1',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;

