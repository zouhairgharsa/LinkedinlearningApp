import React, { useRef, useState, createRef, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  FlatList,
  Animated,
  Pressable,
  useWindowDimensions,
  TouchableOpacity
} from 'react-native';
import { useMeasure } from '../../../hooks/useMeasure';
import { Contents, Discussions, Overview } from './CourseTab'

const course_details_tabs = [
  {
    id: 0,
    label: 'Overview',
  },
  {
    id: 1,
    label: 'Contents',
  },
  {
    id: 2,
    label: 'Discussions',
  },
];
const data = course_details_tabs.map((course) => ({
  ...course,
  ref: createRef(),
}));

const Tabs = ({ scrollX, onItemindex }) => {
  const { measure, containerRef } = useMeasure(data)




  return (
    <View ref={containerRef} style={{ flexDirection: 'row', flex: 1 }}>
      {data.map((item, zindex) => (
        <TouchableOpacity
          key={item.id}
          onPress={() => onItemindex(zindex)}
          ref={item.ref}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: 30,
          }}>
          <Text
            style={{
              fontSize: 26,
              lineHeight: 36,
            }}>
            {item.label}
          </Text>
        </TouchableOpacity>
      ))}
      {measure.length > 0 && (
        <TabIndicator measure={measure} scrollX={scrollX} />
      )}
    </View>
  );
};

const TabIndicator = ({ measure, scrollX }) => {
  const { width } = useWindowDimensions();
  const xwidth = scrollX.interpolate({
    inputRange: data.map((_, i) => i * width),
    outputRange: measure.map((item) => item.width),
  });

  const translateX = scrollX.interpolate({
    inputRange: data.map((_, i) => i * width),
    outputRange: measure.map((item) => item.x),
  });
  return (
    <Animated.View
      style={{
        height: 5,
        backgroundColor: '#0073b1',
        position: 'absolute',
        width: xwidth,
        bottom: 1,
        left: 0,
        transform: [{ translateX }],
      }}
    />
  );
};
const Search = () => {
  const { width, height } = useWindowDimensions();
  const flatlistRef = useRef();

  const scrollX = useRef(new Animated.Value(0)).current;
  const onItemindex = useCallback((itemIndex) => {
    flatlistRef?.current?.scrollToOffset({
      offset: itemIndex * width,
    });
  }, [width]);
  return (
    <View>
      <View style={{ height: 50 }}>
        <Tabs scrollX={scrollX} onItemindex={onItemindex} />
      </View>
      <Animated.FlatList
        data={data}
        keyExtractor={(item) => item.id}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: scrollX,
                },
              },
            },
          ],
          { useNativeDriver: false }
        )}
        ref={flatlistRef}
        horizontal
        renderItem={({ item, index }) => {
          return (
            <View style={{ width, height }}>
              {index === 0 && <Overview />}
              {index === 1 && <Contents />}
              {index === 2 && <Discussions />}
            </View>);
        }}
      />
    </View>
  );
};

export default Search;