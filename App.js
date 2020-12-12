import React from 'react';
import { SafeAreaView } from 'react-native';
import Lottie from 'lottie-react-native'

import kurama from './kurama.json';

export default function App(){
  return(
    <SafeAreaView style={{ flex:1, justifyContent: 'center', alignItems: 'center' }}>
        <Lottie resizeMode="contain" autoSize source={kurama} autoPlay loop/>
    </SafeAreaView>
  );
}