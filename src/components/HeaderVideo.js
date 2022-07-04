import React from 'react';
import { View } from 'react-native';
import { Ionicons, Entypo, MaterialIcons, AntDesign } from '@expo/vector-icons';

export const HeaderVideo = ({ onReset,onBack }) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Ionicons
        name="arrow-back-circle-outline"
        size={50}
        color="blue"
        style={{ flex: 1 }}
        onPress={onBack}
      />
      <Entypo onPress={onReset} name="share" size={40} color="blue" />
      <MaterialIcons
        name="favorite-border"
        size={40}
        color="blue"
        style={{ marginLeft: 10 }}
      />
    </View>
  );
};