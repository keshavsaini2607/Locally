import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AuthStack from './stacks/AuthStack';

const Stack = createStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Auth" component={AuthStack} />
    </Stack.Navigator>
  );
}
