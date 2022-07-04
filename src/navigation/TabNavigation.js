import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, Feather, AntDesign } from '@expo/vector-icons';

import {HomeScreen,SearchScreen,ProfileScreen} from  '../screenTabs'
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({focus, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focus ? 'home' :'home';
          }
          if (route.name === 'Search') {
            iconName =  focus ?'search1' :'search1';
          }
          if (route.name === 'Profile') {
            iconName = focus ? 'user' :'user';
          }

          return <AntDesign name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { backgroundColor: 'white' ,borderColor:'grey'},
        headerShown: false,
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default MyTabs;
