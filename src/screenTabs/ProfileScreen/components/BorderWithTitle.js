import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BorderWithTitle = ({ children, title }) => (
  <View style={styles.border}>
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {children}
    </View>
  </View>
);

export default BorderWithTitle;
const styles = StyleSheet.create({
  border: {
    borderTopWidth: 8,
    borderTopColor: '#b9af9f',
    marginTop: 10,
  },
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 32,
  },
});
