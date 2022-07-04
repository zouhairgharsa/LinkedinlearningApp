import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigation from './src/navigation/TabNavigation';
import TeacherProfile from './src/screens/TeacherProfile'
import CourseDetails from './src/screens/CourseDetails'
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer theme={{ colors: { background: 'white' } }}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Tab" component={TabNavigation} />
        <Stack.Screen name="Teacher" component={TeacherProfile} />
        <Stack.Screen name="Course" component={CourseDetails} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
