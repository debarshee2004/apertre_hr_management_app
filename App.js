import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { IntroScreen } from './src/screens/IntroScreen';
import {useFonts} from 'expo-font';
import { Loading } from './src/screens/Loading';
import { Welcome } from './src/screens/Welcome';

export default function App() {
  // Loading Fonts 
  const [fontsLoaded] = useFonts({
    'montserrat-light': require('./assets/fonts/static/Montserrat-Medium.ttf'),
    'montserrat-semi' : require('./assets/fonts/static/Montserrat-SemiBold.ttf'),
    'montserrat-bold' : require('./assets/fonts/static/Montserrat-Bold.ttf'),
  });
  // Checking Conditions if Fonts are Loaded or Not 
  if (!fontsLoaded) {
    return (
      <Loading /> // Loading Screen
    )
  }
  // If loaded then go to main screens
  return (
    <View style={styles.container}>
      {/* <IntroScreen /> */}
      <Welcome/>
      <StatusBar style="auto" />
    </View>
  );
}

//  Styles for app Component 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
