import React, { useState, useMemo } from 'react';

import { View, Text, FlatList, TextInput, ScrollView } from 'react-native';
import { EvilIcons, Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants';

import { CourseFilter, ModalSearch } from './components';
import { courses } from '../../constants/courses';
const SearchScreen = () => {
  const [filterCourses, setFilterCourses] = useState({
    searchText: '',
    level: '',
    star: 0,
  });

  const isFilterCoursesEmpty = Object.values(filterCourses).some((item) => item)

  const [modalVisible, setModalVisible] = React.useState(false);
  const memoizedataSearch = useMemo(
    () =>
      isFilterCoursesEmpty ? courses.filter(
        (item) =>
         item.niveau === filterCourses.level &&
         item.star === filterCourses.star &&
         item.name.toUpperCase().includes(filterCourses.searchText)
     ) : courses,
    [filterCourses.level, filterCourses.star, isFilterCoursesEmpty, filterCourses.searchText]
  );

  console.log(memoizedataSearch);
  return (
    <View style={{ flex: 1, marginTop: Constants.statusBarHeight }}>
      <ModalSearch
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
        filterCourses={filterCourses}
        setFilterCourses={setFilterCourses}
      />
      <View
        style={{
          flex: 1,
          marginTop: 20,
          paddingHorizontal: 25,
          backgroundColor: modalVisible ? '#f2f3f5' : 'white',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: 'lightgrey',
            borderRadius: 10,
          }}>
          <EvilIcons name="search" size={36} color="black" />
          <TextInput
            value={filterCourses.searchText}
            onChangeText={(text) =>
              setFilterCourses({ ...filterCourses, searchText: text })
            }
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
          data={memoizedataSearch}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <View
              style={{
                marginVertical: 12,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={{ fontSize: 18, lineHeight: 32 }}>
                <Text style={{ fontWeight: '700', color: 'blue' }}>
                  {memoizedataSearch.length}
                </Text>{' '}
                results
              </Text>
              <Ionicons
                name="filter"
                size={30}
                onPress={() => setModalVisible(true)}
                color={'white'}
                style={{ backgroundColor: 'blue', padding: 5 }}
              />
            </View>
          }
          renderItem={({ item }) => <CourseFilter item={item} />}
        />
      </View>
    </View>
  );
};

export default SearchScreen;