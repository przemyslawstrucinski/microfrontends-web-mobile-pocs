import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import NavigationBar from './components/NavigationBar';
import HomeScreen from './screens/HomeScreen';
import TodoScreen from './screens/TodoScreen';
import WeatherScreen from './screens/WeatherScreen';

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            header: ({ navigation, route }) => (
              <NavigationBar
                activeScreen={route.name}
                onNavigate={(screen) => navigation.navigate(screen as never)}
              />
            ),
          }}
        >
          <Stack.Screen 
            name="Home" 
            component={HomeScreen}
          />
          <Stack.Screen 
            name="Todo" 
            component={TodoScreen}
          />
          <Stack.Screen 
            name="Weather" 
            component={WeatherScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;

