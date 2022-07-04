import React, { useState } from 'react';
import { Text, View, StyleSheet, Pressable, Image } from 'react-native';
import Constants from 'expo-constants';
import { AntDesign } from '@expo/vector-icons';
import {profileEve} from  '../../../../constants/images'

const image =
  'https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg?resize=760,506';

const data = [...Array(26)].map(() => ({ image: image }));

console.log(data);

export default function Overview() {
  const [showMore, setShowMore] = useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: 'white', marginHorizontal: 15 }}>
      <View>
        <Text style={{ fontSize: 15 }}>
          Beginner • 1h0m • Released: May 20, 2020
        </Text>
      </View>
      <View>
        <Text style={{ fontSize: 18, fontWeight: 'bold', lineHeight: 32 }}>
          Course description
        </Text>
        <Text
          style={{ fontSize: 15, color: 'grey', lineHeight: 26 }}
          numberOfLines={showMore ? 0 : 6}>
          React.js is designed to make the process of building modular, reusable
          user interface components simple and intuitive. In this course, Eve
          Porcello guides you through the foundations of React development,
          including the use of React hooks—a new feature starting in React 16.8
          that allows developers to add functionality to components without
          writing classes. Eve shows how to create components, display dynamic
          data with properties, and render components using JSX syntax. Eve also
          manages the state of components with hooks; uses powerful React
          enhancements, such as the useEffect hook for loading remote data; and
          leverages cloud deployment options for apps created with
          create-react-app. This course was created by Eve Porcello. We are
          pleased to offer this training in our library.
        </Text>
        <Pressable
          onPress={() => setShowMore((value) => !value)}
          style={{
            alignItems: 'center',
            height: 40,
            width: '100%',
            justifyContent: 'center',
          }}>
          <AntDesign name={showMore ? 'up' : 'down'} size={24} color="black" />
        </Pressable>
      </View>

      <View>
        <View
          style={{
            borderBottomWidth: StyleSheet.hairlineWidth,
            borderColor: 'lightgrey',
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 20,
          }}>
          <View style={{ flexDirection: 'row', marginRight: 15 }}>
            {data.slice(0, 3).map((item) => (
              <View>
                <Image
                  source={{ uri: item.image }}
                  style={{ width: 40, height: 40, borderRadius: 20 }}
                />
              </View>
            ))}
          </View>
          <Text style={{ fontSize: 16, color: 'grey' }}>
            {data.slice(3).length} learning with you
          </Text>
        </View>
        <View
          style={{
            borderBottomWidth: StyleSheet.hairlineWidth,
            borderColor: 'lightgrey',
          }}
        />
        <View style={{ marginVertical: 20 }}>
          <Text style={{ fontSize: 24, fontWeight: '700' }}>Instructor</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              source={profileEve}
              style={{
                width: 60,
                height: 60,
                borderRadius: 30,
                marginRight: 10,
              }}
            />
            <View>
              <Text style={{ fontSize: 18, fontWeight: '400', lineHeight: 26 }}>
                Software Developer and Instructor
              </Text>
              <Text style={{ color: '#0073b1' }}> View on LinkedIn</Text>
            </View>
          </View>
        </View>

        <View
          style={{
            borderBottomWidth: StyleSheet.hairlineWidth,
            borderColor: 'lightgrey',
          }}
        />
      </View>
    </View>
  );
}