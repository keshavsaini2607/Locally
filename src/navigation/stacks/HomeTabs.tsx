import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../screens/Home';
import Settings from '../../screens/Settings';

const Tab = createBottomTabNavigator();

export default function HomeTabs() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}
