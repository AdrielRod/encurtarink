import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {useFonts} from 'expo-font'
import { ThemeProvider } from 'styled-components/native';
import { AuthProvider } from './src/contexts/AuthContext';
import { theme } from './src/theme/theme';
import Routes from './src/routes';
import { StatusBar } from 'expo-status-bar';


export default function App() {

  const [loaded, error] = useFonts({
    Lalezar: require('./src/assets/fonts/Lalezar-Regular.ttf'),
    Rubik: require('./src/assets/fonts/Rubik-VariableFont_wght.ttf'),
    RobotoBlack: require('./src/assets/fonts/Roboto-Black.ttf'),
    RobotoBold: require('./src/assets/fonts/Roboto-Bold.ttf'),
    RobotoMedium: require('./src/assets/fonts/Roboto-Medium.ttf'),
    RobotoRegular: require('./src/assets/fonts/Roboto-Regular.ttf'),
  })

  // async function donwload(){
  //   const response = await api.post('create/', {
  //       url: link,
  //       ttl: 600,
  //   })
  //   console.log(response.data.link_url)
  // }



  return (
    <AuthProvider>
      <NavigationContainer>
        <ThemeProvider theme={theme}>
          <StatusBar style='light'/>
          <Routes />
        </ThemeProvider>
      </NavigationContainer>

    </AuthProvider>

  );
}

