import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './src/navigation';
import {NativeBaseProvider} from 'native-base';
import {Amplify} from 'aws-amplify';
import amplifyconfig from './src/amplifyconfiguration.json';
import {
  withAuthenticator,
  useAuthenticator,
} from '@aws-amplify/ui-react-native';
import MyTheme from './MyTheme';

Amplify.configure(amplifyconfig);

const userSelector = (context: any) => [context.user];

const App = () => {
  const {user} = useAuthenticator(userSelector);
  console.log({user});
  return (
    <NativeBaseProvider theme={MyTheme}>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default withAuthenticator(App);
