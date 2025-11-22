import React, { useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Image,
} from 'react-native';
import { useDoctorStore } from '@doctor/shared';

export function DoctorScreen() {
  const { currentDoctor, appointments, reviews, isLoading, loadDoctor, bookAppointment } =
    useDoctorStore();

  useEffect(() => {
    loadDoctor('1');
  }, [loadDoctor]);

  const availableAppointments = appointments.filter((apt) => apt.available);

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#1E40AF" />
      </View>
    );
  }

  if (!currentDoctor) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.emptyText}>Doctor not found</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: currentDoctor.photoUrl }} style={styles.photo} />
        <View style={styles.headerInfo}>
          <Text style={styles.name}>{currentDoctor.name}</Text>
          <Text style={styles.specialty}>{currentDoctor.specialty}</Text>
          <View style={styles.ratingContainer}>
            <Text style={styles.star}>⭐</Text>
            <Text style={styles.rating}>{currentDoctor.rating}</Text>
            <Text style={styles.reviews}>({currentDoctor.reviewCount} reviews)</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About</Text>
        <Text style={styles.bio}>{currentDoctor.bio}</Text>

        <Text style={styles.subTitle}>Education</Text>
        {currentDoctor.education.map((edu, index) => (
          <Text key={index} style={styles.listItem}>
            • {edu}
          </Text>
        ))}

        <Text style={styles.subTitle}>Languages</Text>
        <View style={styles.languagesContainer}>
          {currentDoctor.languages.map((lang) => (
            <View key={lang} style={styles.languageChip}>
              <Text style={styles.languageText}>{lang}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Available Appointments</Text>
        {availableAppointments.length > 0 ? (
          <View style={styles.appointmentsGrid}>
            {availableAppointments.map((apt) => (
              <TouchableOpacity
                key={apt.id}
                style={styles.appointmentButton}
                onPress={() => {
                  bookAppointment(apt.id);
                  alert('Appointment booked!');
                }}
              >
                <Text style={styles.appointmentText}>
                  {apt.date} {apt.time}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        ) : (
          <Text style={styles.emptyText}>No appointments available</Text>
        )}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Patient Reviews</Text>
        {reviews.map((review) => (
          <View key={review.id} style={styles.reviewCard}>
            <View style={styles.reviewHeader}>
              <Text style={styles.reviewName}>{review.patientName}</Text>
              <Text style={styles.reviewRating}>⭐ {review.rating}</Text>
            </View>
            <Text style={styles.reviewComment}>{review.comment}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
  },
  header: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  photo: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#E5E7EB',
  },
  headerInfo: {
    flex: 1,
    marginLeft: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 4,
  },
  specialty: {
    fontSize: 18,
    color: '#1E40AF',
    fontWeight: '500',
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  star: {
    fontSize: 16,
  },
  rating: {
    fontSize: 16,
    fontWeight: '500',
    color: '#111827',
    marginLeft: 4,
  },
  reviews: {
    fontSize: 14,
    color: '#6B7280',
    marginLeft: 4,
  },
  section: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    marginTop: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 12,
  },
  bio: {
    fontSize: 16,
    color: '#374151',
    lineHeight: 24,
    marginBottom: 16,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginTop: 12,
    marginBottom: 8,
  },
  listItem: {
    fontSize: 16,
    color: '#374151',
    marginBottom: 4,
  },
  languagesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  languageChip: {
    backgroundColor: '#DBEAFE',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  languageText: {
    color: '#1E40AF',
    fontSize: 14,
  },
  appointmentsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  appointmentButton: {
    backgroundColor: '#1E40AF',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 6,
  },
  appointmentText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
  },
  emptyText: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    paddingVertical: 20,
  },
  reviewCard: {
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    paddingBottom: 12,
    marginBottom: 12,
  },
  reviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  reviewName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },
  reviewRating: {
    fontSize: 14,
    color: '#111827',
  },
  reviewComment: {
    fontSize: 15,
    color: '#374151',
    lineHeight: 22,
  },
});

