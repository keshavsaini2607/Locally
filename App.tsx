import 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './src/navigation';

const App = () => {
  return (
    <SafeAreaView>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
