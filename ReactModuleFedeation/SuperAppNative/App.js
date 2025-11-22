import { AppRegistry } from 'react-native';
import App from './src/App';

// For Expo compatibility
export default App;

// Also register for native platforms
AppRegistry.registerComponent('SuperAppNative', () => App);

