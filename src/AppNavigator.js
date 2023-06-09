import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from './Screens/Splash';
import Main from './Screens/Main';
import Viewcourse from './Screens/Viewcourse';
import Videoscreen from './Screens/Videoscreen';
const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Main"
          component={Main}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Viewcourse"
          component={Viewcourse}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Videoscreen"
          component={Videoscreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
