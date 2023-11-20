import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../../screens/auth/Login';

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}
