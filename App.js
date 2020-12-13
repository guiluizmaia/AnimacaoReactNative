import React from 'react';
import { SafeAreaView, Button } from 'react-native';
import LottieView from 'lottie-react-native'

import kurama from './kurama.json';

export default function App(){
  return(
    <SafeAreaView style={{ flex:1, justifyContent: 'center', alignItems: 'center' }}>
        <LottieView
        resizeMode="contain" autoSize source={kurama}/>
        <Button/>
    </SafeAreaView>
  );
}