import React from 'react';

import {
  Pressable,
  ImageBackground,
  View,
  Text,
  Image,
} from 'react-native';

import { MaterialIcons, Entypo } from '@expo/vector-icons';

const CourseFilter = ({ item }) => {
  const { name, duration, instructor, ratings, niveau, is_favourite, thumbnail } =
    item;

  return (
    <View style={{ flexDirection: 'row', marginVertical: 10 }}>
      <ImageBackground
        source={thumbnail}
        style={{
          width: 130,
          height: 130,
          marginBottom: 12,
          marginRight: 8,
        }}
        imageStyle={{ borderRadius: 12 }}>
        <View
          style={{
            position: 'absolute',
            top: 10,
            right: 10,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5,
            width: 30,
            height: 30,
            backgroundColor: 'white',
          }}>
          <MaterialIcons name="favorite" size={24} color={is_favourite ? "red" : "black"} />
        </View>
      </ImageBackground>
      <View style={{ flex: 1 }}>
        <Text
          style={{ fontSize: 16, lineHeight: 22 }}>
          {name}
        </Text>
        <View
          style={{
            marginTop: 8,
          }}>
          <Text style={{}}>By {instructor}</Text>
        </View>
        <View
          style={{
            marginTop: 8,
          }}>
          <Text
            style={{
              color: 'blue',
              fontSize: 22,
              lineHeight: 30,
            }}>
            {niveau}
          </Text>
          <View style={{ flexDirection: 'row' }}>
            {[...Array(ratings)].map((_, index) => (
              <Entypo key={index} name="star" size={20} color="yellow" />
            ))}
          </View>
        </View>
      </View>
    </View>
  );
};

export default CourseFilter