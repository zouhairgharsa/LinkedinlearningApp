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
import Search from './components/Search';
import CourseHeader from './components/CourseHeader';
import {
  Ionicons,
  Entypo,
  MaterialIcons,
  AntDesign,
  Feather,
  MaterialCommunityIcons,
  FontAwesome,
} from '@expo/vector-icons';
const CourseDetails = () => {
  return (
    <View>
      <CourseHeader />
      <View style={{ marginVertical: 10, marginHorizontal: 10 }}>
        <Text style={{ fontSize: 17, fontWeight: '600' }}>Learn React Hooks</Text>
        <View
          style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <AntDesign name="like2" size={30} color="black" />
            <Feather
              name="bookmark"
              size={30}
              color="black"
              style={{ marginHorizontal: 5 }}
            />
            <MaterialCommunityIcons
              name="share-outline"
              size={30}
              color="black"
            />
          </View>
          <Text style={{ fontSize: 16 }}>Download course</Text>
          <MaterialCommunityIcons
            name="download-outline"
            size={30}
            color="black"
            style={{ marginLeft: 5 }}
          />
        </View>
      </View>
      <Search />
    </View>
  );
};

export default CourseDetails;