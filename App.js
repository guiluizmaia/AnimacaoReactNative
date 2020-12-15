import React, {useState} from 'react';
import { SafeAreaView, Button, Alert } from 'react-native';
import Lottie from 'lottie-react-native'

import kurama from './kurama.json';

export default function App(){
  const [animationState, setAnimationState] = useState({
    isStopped: true, isPaused: false
  });

  const defaultOptions = {
    loop: false,
    autoplay: false, 
    
  };

  return(
    <SafeAreaView style={{ flex:1, justifyContent: 'center', alignItems: 'center' }}>
        <Lottie options={defaultOptions} isStopped={animationState.isStopped} isPaused={animationState.isPaused} resizeMode="contain" autoSize source={kurama}/>
        <Button title="Teste" /*onPress={() =>{
          setAnimationState({
            ...animationState,
            isStopped: false
          })
        }}*/ onPress={() => Alert.alert('Simple Button pressed')}/>
    </SafeAreaView>
  );
}