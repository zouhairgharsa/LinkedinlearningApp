import React from 'react';
import { View } from 'react-native';

export const Header = ({ children }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 18,
      }}>
      {children}
    </View>
  );
};
Header.Left = ({ children }) => <View>{children}</View>;
Header.Right = ({ children }) => <View>{children}</View>;