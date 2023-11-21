import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './src/navigation';
import {NativeBaseProvider} from 'native-base';

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
