import React, { Suspense, lazy } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

// Dynamically import Search component from MFE
// @ts-ignore
const SearchComponent = lazy(() => import('SearchMFE/Search'));

const SearchScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Suspense
        fallback={
          <View style={styles.loading}>
            <ActivityIndicator size="large" color="#0369a1" />
            <Text style={styles.loadingText}>Loading Search...</Text>
          </View>
        }
      >
        <SearchComponent />
      </Suspense>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 12,
    color: '#6b7280',
    fontSize: 16,
  },
});

export default SearchScreen;

