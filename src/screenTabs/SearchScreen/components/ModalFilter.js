import React, { useState } from 'react';

import { View, Text, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const levels = ['Beginner', 'Intermediate', 'Advanced'];
const star = [1, 2, 3, 4, 5];
export const ModalFilter = ({
  levelCourse,
  onLevel,
  starCourse,
  onStar,
  reset,
}) => {
  return (
    <View key={reset} style={{}}>
      <Text style={{ fontSize: 18, fontWeight: '700' }}>Level</Text>

      <View style={{ flexDirection: 'row' }}>
        {levels.map((level, index) => (
          <Pressable
            key={index}
            onPress={() => onLevel(level)}
            style={{
              backgroundColor: level === levelCourse ? '#0009' : 'white',
              marginRight: 4,
              paddingHorizontal: 12,
              paddingVertical: 5,
              borderRadius: 12,
              marginTop: 10,
              borderWidth: 1,
              borderColor: '#0009',
            }}>
            <Text style={{ fontSize: 16, lineHeight: 30 }}>{level}</Text>
          </Pressable>
        ))}
      </View>
      <View style={{ marginTop: 10 }}>
        <Text style={{ fontSize: 18, fontWeight: '700' }}>Rating</Text>

        <View style={{ flexDirection: 'row', marginTop: 20 }}>
          {star.map((star, index) => (
            <Pressable
              key={index}
              onPress={() => onStar(star)}
              style={{
                backgroundColor: star === starCourse ? 'yellow' : 'white',
                marginRight: 10,
                paddingHorizontal: 10,
                paddingVertical: 5,
                borderWidth: 1,
                borderColor: '#0009',
                flexDirection: 'row',
                alignItems: 'center',
                borderRadius: 5,
              }}>
              <FontAwesome name="star" size={20} color="grey" />
              <Text style={{ fontSize: 15, marginLeft: 4 }}>{star}</Text>
            </Pressable>
          ))}

        </View>
      </View>
    </View>
  );
};