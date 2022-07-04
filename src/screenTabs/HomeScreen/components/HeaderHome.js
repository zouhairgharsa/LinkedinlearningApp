import React from 'react';

import { View, Text } from 'react-native';
import { Header } from '../../../components/Header';
import { Ionicons } from '@expo/vector-icons';

export const HeaderHome = () => {
  return (
    <Header>
      <Header.Left>
        <Text style={{ fontSize: 20, fontWeight: '700', lineHeight: 32 }}>
          Hello Developer
        </Text>
        <Text style={{ fontSize: 18, color: 'gray' }}>09 Jun 2021</Text>
      </Header.Left>
      <Header.Right>
        <Ionicons name="notifications-outline" size={28} color="black" />
      </Header.Right>
    </Header>
  );
};