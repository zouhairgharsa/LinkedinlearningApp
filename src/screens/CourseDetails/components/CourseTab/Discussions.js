import React from 'react';
import { profileEve } from '../../../../constants/images'


import { View, Text, FlatList, Image } from 'react-native';

const CommentSection = () => {
  return (
    <View style={{ marginTop: 15, marginHorizontal: 5, flex: 1 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image
          source={profileEve}
          style={{ width: 60, height: 60, borderRadius: 30 }}
        />
        <View style={{ marginLeft: 10, marginTop: 3 }}>
          <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Neami klinar</Text>

          <Text style={{ fontSize: 15, color: 'grey', lineHeight: 32 }}>
            front end developer @2020
          </Text>
        </View>
      </View>
      <View style={{ marginTop: 10 }}>
        <Text style={{ fontSize: 16, lineHeight: 28 }}>
          I am currently enjoying the course.I want to ask you if you could tell
          us what extension are you using in your videos
        </Text>
      </View>
    </View>
  );
};
const Discussions = () => {
  return (
    <View style={{ flex: 1 }}>
      <CommentSection />
    </View>
  );
};

export default Discussions;