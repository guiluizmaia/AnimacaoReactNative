/*import React, {useState} from 'react';
import { SafeAreaView, Button, Alert } from 'react-native';
import Lottie from 'lottie-react-native'

import kurama from './kurama.json';

export default function App(){
  const [animationState, setAnimationState] = useState({isStopped: true});

  const defaultOptions = {
    loop: false,
    autoplay: false, 
    
  };

  return(
    <SafeAreaView style={{ flex:1, justifyContent: 'center', alignItems: 'center' }}>
        
        <Button title="Teste" onPress={() =>{
          setAnimationState({
            isStopped: false
            
          })
          
        }}/* onPress={() => Alert.alert('Simple Button pressed')}/>*/
        /*<Lottie options={defaultOptions} isStopped={animationState.isStopped} isPaused={false} resizeMode="contain" autoSize source={kurama}/>
    </SafeAreaView>
  );,
}
//https://developerplus.com.br/o-que-sao-hooks-e-como-usar-no-react-native/*/


import React, {useState} from 'react';
import { SafeAreaView, Button, Alert } from 'react-native';
import Lottie from 'lottie-react-native'

import kurama from './kurama.json';

export default function App(){
  
  return(
    <SafeAreaView style={{ flex:1, justifyContent: 'center', alignItems: 'center' }}>
        <Lottie resizeMode="contain" autoSize source={kurama} autoPlay loop/>
    </SafeAreaView>
  );
}
