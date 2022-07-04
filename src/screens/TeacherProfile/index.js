import React, { useRef } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  Animated,
  useWindowDimensions,
  Pressable,
} from 'react-native';
import Constants from 'expo-constants';
import { teachers } from '../../constants/courses';
import { Course } from '../../components/Course';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Header_Max_Height = 120;
const Header_Min_Height = 90;
const Header_Diff = Header_Max_Height - Header_Min_Height;
const Profile_Max = 100;
const Profile_Min = 40;
const Image_Diff = Profile_Max - Profile_Min;

const Header = ({ scrollY, onBack }) => {
  const headerHeight = scrollY.interpolate({
    inputRange: [0, Header_Diff],
    outputRange: [Header_Max_Height, Header_Min_Height],
    extrapolate: 'clamp',
  });
  const zIndex = scrollY.interpolate({
    inputRange: [0, Header_Diff],
    outputRange: [0, 1],
  });
  return (
    <View
      style={{
        height: Header_Max_Height,
        backgroundColor: '#0073b1',
      }}></View>
  );
};

export default function TeacherProfile({ route }) {
  const { width } = useWindowDimensions();
  const navigation = useNavigation();

  const scrollY = useRef(new Animated.Value(0)).current;
  const { id } = route.params;
  const profileHeight = scrollY.interpolate({
    inputRange: [0, Image_Diff],
    outputRange: [Profile_Max, Profile_Min],
    extrapolate: 'clamp',
  });

  const marginTop = scrollY.interpolate({
    inputRange: [0, Image_Diff],
    outputRange: [Header_Max_Height - Profile_Max / 2, Profile_Min],
    extrapolate: 'clamp',
  });

  const { image, job, description, name } = teachers.find(
    (item) => item.id === id
  );
  return (
    <View style={{ flex: 1 }}>
      <View style={{ position: 'absolute', ...StyleSheet.absoluteFillObject }}>
        <Header onBack={() => navigation.goBack()} scrollY={scrollY} />
      </View>
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          marginTop: Header_Max_Height - Profile_Max / 2,
        }}
      >
        <Animated.View
          style={{
            borderWidth: 3,
            width: Profile_Max,
            borderColor: 'blue',
            height: Profile_Max,
            borderRadius: Profile_Max / 2,
            alignSelf: 'center',
          }}>
          <Image
            source={image}
            style={{
              width: '100%',
              height: '100%',
              borderRadius: Profile_Max / 2,
            }}
          />
        </Animated.View>
        <Text style={{ fontSize: 18, textAlign: 'center' }}>{name}</Text>
        <Text style={{ fontSize: 18, textAlign: 'center' }}>{job}</Text>

        <View
          style={{
            borderBottomWidth: StyleSheet.hairlineWidth,
            borderBottomColor: 'grey',
            marginHorizontal: 12,
          }}
        />
        <Text
          style={{
            marginVertical: 20,
            marginHorizontal: 12,
            fontSize: 15,
            lineHeight: 32,
          }}>
          {teachers[0].description}
        </Text>

        <View
          style={{
            borderBottomWidth: StyleSheet.hairlineWidth,
            borderBottomColor: 'grey',
            marginHorizontal: 12,
            marginBottom: 20,
          }}
        />
        <Pressable
          style={{ position: 'absolute', top: 50, left: 15 }}
          onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-circle-outline" size={50} color="blue" />
        </Pressable>
      </ScrollView>
    </View>
  );
}