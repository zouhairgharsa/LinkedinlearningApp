import React, { useState } from 'react';

import { View, Text, FlatList, TextInput, ScrollView } from 'react-native';
import { EvilIcons, Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants';

import { CourseFilter, ModalSearch } from './components'
import { courses } from '../../constants/courses'
const SearchScreen = () => {
  const [searchTopic, setSearchTopic] = useState('');
  const [level, setLevel] = useState('');
  const [reset, setReset] = useState(false)
  const [star, setStar] = useState()
  const [modalVisible, setModalVisible] = React.useState(false);

  const dataSearch = courses.filter(
    (item) =>
      item.name.toUpperCase().includes(searchTopic.toUpperCase()) &&
      item.niveau === level && item.ratings === star
  )

  return (
    <View style={{ flex: 1, marginTop: Constants.statusBarHeight }}>
      <ModalSearch onStar={setStar} starCourse={star} onLevel={setLevel} levelCourse={level} setModalVisible={setModalVisible} modalVisible={modalVisible} />
      <View style={{ flex: 1, marginTop: 20, paddingHorizontal: 25, backgroundColor: modalVisible ? '#f2f3f5' : 'white' }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: 'lightgrey',
            borderRadius: 10,

          }}>
          <EvilIcons name="search" size={36} color="black" />
          <TextInput
            value={searchTopic}
            onChangeText={setSearchTopic}
            placeholder="Search for topics"
            placeholderTextColor="grey"
            style={{
              paddingHorizontal: 5,
              paddingVertical: 15,
              fontSize: 16,
              flex: 1,
            }}
          />
        </View>

        <FlatList
          data={dataSearch.length > 0 ? dataSearch : courses}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <View
              style={{
                marginVertical: 12,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={{ fontSize: 18, lineHeight: 32 }}><Text style={{ fontWeight: '700', color: 'blue' }}>{dataSearch.length}</Text> results</Text>
              <Ionicons
                name="filter"
                size={30}
                onPress={() => setModalVisible(true)}
                color={'white'}
                style={{ backgroundColor: 'blue', padding: 5 }}
              />
            </View>
          }
          renderItem={({ item }) => (
            <CourseFilter item={item} />
          )}
        />
      </View>
    </View>
  );
};

export default SearchScreen;