import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Pressable,
  useWindowDimensions,
  ScrollView,
  FlatList,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import Constants from 'expo-constants';
import { teachers, recommandedCourse } from '../../constants/courses';
import { learningTof } from '../../constants/images';
import { HeaderHome } from './components/HeaderHome';
import { IconLabel } from '../../components/UI/IconLabel';
import icons from '../../constants/icons';
export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={{ flex: 1, marginTop: Constants.statusBarHeight }}>
      <HeaderHome />
      <View
        style={{
          marginTop: 20,
          backgroundColor: 'rgba(169, 203, 255, 1)',
          borderRadius: 10,
          marginHorizontal: 10,
          paddingHorizontal: 15,
          justifyContent: 'center',
          height: 200
        }}>
        <Image
          source={learningTof}
          style={{ position: 'absolute', right: 5, top: 20 }}
        />

        <Text
          style={{
            fontSize: 26,
            fontWeight: '500',
            color: 'white',
            maxWidth: '50%',
          }}>
          Grow your Education & level up with T-learning
        </Text>
        <Pressable
          style={{
            backgroundColor: '#0071b1',
            paddingHorizontal: 30,
            paddingVertical: 10,
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',

            marginTop: 20
          }}>
          <Text style={{ fontSize: 20, fontWeight: '700', color: 'white' }}>
            Start my free month
          </Text>
        </Pressable>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 8,
          marginBottom: 12,
          marginTop: 20,
        }}>
        <Text style={{ fontSize: 18, fontWeight: '700' }}>Best Mentors</Text>
        <Text style={{ fontSize: 16, color: '#004b7c', fontWeight: 'bold' }}>
          Show more
        </Text>
      </View>
      <View style={{ flexDirection: 'row', marginLeft: 10 }}>
        {teachers.map((item) => {
          return (
            <Pressable
              onPress={() => navigation.navigate('Teacher', { id: item.id })}
              style={{ alignItems: 'center', marginRight: 8 }}>
              <Image
                source={item.image}
                style={{ width: 80, height: 80, borderRadius: 40 }}
              />
              <Text style={{ fontSize: 16, lineHeight: 28 }}>{item.name}</Text>
            </Pressable>
          );
        })}
      </View>
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 8,
            marginBottom: 12,
            marginTop: 20,
          }}>
          <Text style={{ fontSize: 18, fontWeight: '700' }}>
            Recommended Course
          </Text>
          <Text style={{ fontSize: 16, color: '#004b7c', fontWeight: 'bold' }}>
            Show more
          </Text>
        </View>
        <FlatList
          horizontal
          data={recommandedCourse}
          contentContainerStyle={{ marginBottom: 14, marginLeft: 10 }}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <CourseItem
              onPress={() => navigation.navigate('Course')}
              item={item}
            />
          )}
        />
      </View>
    </ScrollView>
  );
}

const CourseItem = ({ item, onPress }) => {
  const { width } = useWindowDimensions();
  const { thumbnail, title, duration } = item;
  return (
    <Pressable
      onPress={onPress}
      style={{ width: width * 0.7, marginRight: 5 }}>
      <Image
        source={thumbnail}
        style={{
          width: '100%',
          height: 140,
          marginBottom: 24,
          borderRadius: 24,
        }}
      />
      <View style={{ flexDirection: 'row' }}>
        <AntDesign name="play" size={50} color="#0071b1" />

        <View style={{ marginLeft: 24, flexShrink: 1 }}>
          <Text style={{ fontSize: 17, fontWeight: '700' }}>{title}</Text>
          <IconLabel icon={icons.time} label={duration} />
        </View>
      </View>
    </Pressable>
  );
};