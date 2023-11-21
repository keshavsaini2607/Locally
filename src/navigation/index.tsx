import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeTabs from './stacks/HomeTabs';

const Stack = createStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeTabs" component={HomeTabs} />
    </Stack.Navigator>
  );
}
