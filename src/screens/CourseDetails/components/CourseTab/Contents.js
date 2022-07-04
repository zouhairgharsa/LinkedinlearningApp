import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  StatusBar,
  FlatList,
} from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons';

const DATA = [
  {
    title: 'Introduction',
    data: [
      { name: "WHat's React js", time: '2m30s' },
      { name: 'React DOM', time: '2m30s' },
    ],
  },
  {
    title: 'useState',
    data: [{ name: 'useState', time: '2m30s' }],
  },
  {
    title: 'useEffect',
    data: [{ name: 'useEffect', time: '2m30s' }],
  },
  {
    title: 'useReducer',
    data: [{ name: 'useReducer', time: '2m30s' }],
  },
];

const Contents = () => {
  const [selectIndex, setSelectIndex] = useState('');

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <View>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ fontSize: 20, fontWeight: '600', lineHeight: 32, marginBottom: 5 }}>
                {item.title}
              </Text>
              <AntDesign
                onPress={() =>
                  setSelectIndex(item.title === selectIndex ? null : item.title)
                }
                name={selectIndex === item.title ? 'up' : 'down'}
                size={24}
                color="black"
              />
            </View>
            <View style={{ marginVertical: 15 }}>
              {selectIndex === item.title && (
                <FlatList
                  data={item.data}
                  renderItem={({ item, zindex }) => (
                    <View style={{ flexDirection: 'row' }}>
                      <Entypo name="dot-single" size={30} color="grey" />
                      <View style={{ marginLeft: 10 }}>
                        <Text style={{ fontSize: 18 }}>{item.name}</Text>
                        <Text style={{ fontSize: 16, color: 'lightgrey' }}>{item.time}</Text>
                      </View>
                    </View>
                  )}
                />
              )}
            </View>
            <View
              style={{
                borderBottomWidth: StyleSheet.hairlineWidth,
                borderColor: 'lightgrey',
              }}
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },
});

export default Contents;