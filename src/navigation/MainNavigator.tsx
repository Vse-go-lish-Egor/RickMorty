import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {CharacterFullInfoScreen} from '../screens/CharacterFullInfoScreen';
import {AppPricolScreen} from '../screens/MainScreen';
import {CharacterPreview} from '../model/character';

export type RootStackParamList = {
  AppPrikolScreen: undefined;
  CharacterFullInfoScreen: CharacterPreview;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Root = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="AppPrikolScreen" component={AppPricolScreen} />
        <Stack.Screen
          name="CharacterFullInfoScreen"
          component={CharacterFullInfoScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
