import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useContext } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { UserProvider } from './contexts/userContext';
import BottomTabBar from './components/BottomTabBar';
import ColorPalette from './constants/ColorPalette';

// Screens
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import MySitsScreen from './screens/MySitsScreen';
import SittersScreen from './screens/SittersScreen';
import SitterProfileScreen from './screens/SitterProfileScreen';
import MessagesScreen from './screens/MessagesScreen';
import ProfileScreen from './screens/ProfileScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const SitterStack = createStackNavigator();

const SittersScreenNav = () => {
  return (
    <SitterStack.Navigator>
      <SitterStack.Screen
        name="SittersScreen"
        component={SittersScreen}
        options={{ headerShown: false }}
      />
      <SitterStack.Screen
        name="SitterProfileScreen"
        component={SitterProfileScreen}
        options={{
          title: `Sitter's Profile`,
          headerTintColor: 'white',
          headerStyle: { backgroundColor: ColorPalette.keppel },
        }}
      />
    </SitterStack.Navigator>
  );
};

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={(props) => <BottomTabBar {...props} />}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="MySitsScreen" component={MySitsScreen} />
      <Tab.Screen name="SittersScreenNav" component={SittersScreenNav} />
      <Tab.Screen name="MessagesScreen" component={MessagesScreen} />
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default function App() {
  useEffect(() => {}, []);

  return (
    <SafeAreaProvider>
      <UserProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="LoginScreen"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MainAppScreen"
              component={MainApp}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
          <StatusBar />
        </NavigationContainer>
      </UserProvider>
    </SafeAreaProvider>
  );
}
