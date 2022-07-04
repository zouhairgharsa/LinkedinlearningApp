import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Keyboard,
  Pressable,
  Animated,
  Image,
  StyleSheet,
} from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import VideoCourse from '../../../components/VideoCourse';
import { HeaderVideo } from '../../../components/HeaderVideo';
import { Ionicons, Entypo, MaterialIcons, AntDesign } from '@expo/vector-icons';
import { recommandedCourse } from '../../../constants/courses';
import { useRoute, useNavigation } from '@react-navigation/native';

const CourseHeader = () => {
  const [play, setPlay] = React.useState(false);
  const route = useRoute();
  const navigation = useNavigation();

  return (
    <View style={{backgroundColor:'white'}}>
      <View
        style={{
          position: 'absolute',
          top: 10,
          zIndex: 1,
          left: 10,
          right: 10,
        }}>
        <HeaderVideo onBack={() => navigation.goBack()} />
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'grey',
        }}>
        <VideoSection courses={recommandedCourse} onPlay={() => setPlay((v) => !v)} />
      </View>
      {play && <VideoCourse />}
    </View>
  );
};

const VideoSection = ({ onPlay, courses }) => {
  return (
    <ImageBackground
      source={courses.thumbnail}
      style={{
        width: '100%',
        height: 180,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Pressable onPress={onPlay}>
        <AntDesign name="play" size={50} color="#0071b1" />
      </Pressable>
    </ImageBackground>
  );
};

export default CourseHeader;