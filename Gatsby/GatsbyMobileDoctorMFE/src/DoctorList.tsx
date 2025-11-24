import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import { mockDoctors, Doctor } from './data/mockDoctors';

const DoctorList: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>All Doctors</Text>
        <Text style={styles.subtitle}>Browse our verified professionals</Text>
      </View>

      <View style={styles.listContainer}>
        {mockDoctors.map((doctor: Doctor) => (
          <TouchableOpacity key={doctor.id} style={styles.doctorCard}>
            <Image
              source={{ uri: doctor.image }}
              style={styles.doctorImage}
            />
            <Text style={styles.doctorName}>{doctor.name}</Text>
            <Text style={styles.doctorSpecialty}>{doctor.specialty}</Text>
            <View style={styles.doctorMeta}>
              <Text style={styles.doctorRating}>
                ⭐ {doctor.rating} ({doctor.reviews})
              </Text>
            </View>
            <Text style={styles.doctorLocation}>📍 {doctor.location}</Text>
            <Text style={styles.doctorExperience}>
              {doctor.experience} years experience
            </Text>
            <Text style={styles.doctorBio} numberOfLines={2}>
              {doctor.bio}
            </Text>
            <View style={styles.viewButton}>
              <Text style={styles.viewButtonText}>View Profile</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  header: {
    backgroundColor: '#0369a1',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#e0f2fe',
  },
  listContainer: {
    padding: 16,
  },
  doctorCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  doctorImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  doctorName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 4,
    textAlign: 'center',
  },
  doctorSpecialty: {
    fontSize: 16,
    color: '#0369a1',
    fontWeight: '600',
    marginBottom: 8,
  },
  doctorMeta: {
    marginBottom: 8,
  },
  doctorRating: {
    fontSize: 14,
    color: '#6b7280',
  },
  doctorLocation: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 4,
  },
  doctorExperience: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 12,
  },
  doctorBio: {
    fontSize: 14,
    color: '#374151',
    textAlign: 'center',
    marginBottom: 16,
  },
  viewButton: {
    backgroundColor: '#0369a1',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  viewButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default DoctorList;

