import React from 'react'
import {NativeBaseProvider, StatusBar } from "native-base";
import {useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold} from '@expo-google-fonts/roboto'

import {SignIn} from './src/assets/screens/SignIn'

import {Loading} from './src/assets/components/Loading';

import {THEME} from './src/assets/styles/theme';

export default function App() {
  const [ fontsLoaded ] = useFonts({ Roboto_400Regular, Roboto_500Medium, Roboto_700Bold });

  

  return (
      <NativeBaseProvider theme={THEME}>
        <StatusBar 
        barStyle='light-content'
        backgroundColor="transparent"
        translucent
        />

          {fontsLoaded ?  <SignIn/>  : <Loading />}

      </NativeBaseProvider>
      
  );
}


