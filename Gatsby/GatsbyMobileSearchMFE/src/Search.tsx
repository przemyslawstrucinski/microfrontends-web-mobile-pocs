import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
} from 'react-native';
import { mockDoctors, Doctor } from './data/mockDoctors';

const Search: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [specialty, setSpecialty] = useState('');

  const filteredDoctors = mockDoctors.filter((doctor: Doctor) => {
    const matchesSearch =
      searchTerm === '' ||
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = !specialty || doctor.specialty === specialty;
    return matchesSearch && matchesSpecialty;
  });

  const specialties = Array.from(new Set(mockDoctors.map((d) => d.specialty)));

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Find a Doctor</Text>
        <Text style={styles.subtitle}>
          Search from our directory of verified professionals
        </Text>
      </View>

      {/* Search Input */}
      <View style={styles.searchSection}>
        <TextInput
          style={styles.input}
          value={searchTerm}
          onChangeText={setSearchTerm}
          placeholder="Search by name or specialty..."
          placeholderTextColor="#9ca3af"
        />

        <View style={styles.filterContainer}>
          <Text style={styles.filterLabel}>Filter by Specialty:</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <TouchableOpacity
              style={[
                styles.filterChip,
                !specialty && styles.filterChipActive,
              ]}
              onPress={() => setSpecialty('')}
            >
              <Text
                style={[
                  styles.filterChipText,
                  !specialty && styles.filterChipTextActive,
                ]}
              >
                All
              </Text>
            </TouchableOpacity>
            {specialties.map((spec) => (
              <TouchableOpacity
                key={spec}
                style={[
                  styles.filterChip,
                  specialty === spec && styles.filterChipActive,
                ]}
                onPress={() => setSpecialty(spec)}
              >
                <Text
                  style={[
                    styles.filterChipText,
                    specialty === spec && styles.filterChipTextActive,
                  ]}
                >
                  {spec}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>

      {/* Results */}
      <View style={styles.resultsSection}>
        <Text style={styles.resultsCount}>
          {filteredDoctors.length} doctor{filteredDoctors.length !== 1 ? 's' : ''} found
        </Text>
        {filteredDoctors.map((doctor: Doctor) => (
          <View key={doctor.id} style={styles.doctorCard}>
            <Image
              source={{ uri: doctor.image }}
              style={styles.doctorImage}
            />
            <View style={styles.doctorInfo}>
              <Text style={styles.doctorName}>{doctor.name}</Text>
              <Text style={styles.doctorSpecialty}>{doctor.specialty}</Text>
              <View style={styles.doctorMeta}>
                <Text style={styles.doctorRating}>
                  ⭐ {doctor.rating} ({doctor.reviews})
                </Text>
                <Text style={styles.doctorLocation}>📍 {doctor.location}</Text>
              </View>
            </View>
          </View>
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
  searchSection: {
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  input: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 16,
  },
  filterContainer: {
    marginBottom: 8,
  },
  filterLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 8,
  },
  filterChip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#f3f4f6',
    marginRight: 8,
  },
  filterChipActive: {
    backgroundColor: '#0369a1',
  },
  filterChipText: {
    fontSize: 14,
    color: '#374151',
    fontWeight: '500',
  },
  filterChipTextActive: {
    color: '#fff',
  },
  resultsSection: {
    padding: 16,
  },
  resultsCount: {
    fontSize: 16,
    color: '#6b7280',
    marginBottom: 16,
  },
  doctorCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  doctorImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
  },
  doctorInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  doctorName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 4,
  },
  doctorSpecialty: {
    fontSize: 14,
    color: '#0369a1',
    fontWeight: '600',
    marginBottom: 8,
  },
  doctorMeta: {
    flexDirection: 'row',
    gap: 16,
  },
  doctorRating: {
    fontSize: 12,
    color: '#6b7280',
  },
  doctorLocation: {
    fontSize: 12,
    color: '#6b7280',
  },
});

export default Search;

