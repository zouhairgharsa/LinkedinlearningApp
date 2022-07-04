import React from 'react';

import { View, Text } from 'react-native';

const Skill = ({ skill, niveau }) => {
  return (
    <View>
      <Text style={{ fontSize: 17, fontWeight: '600' }}>{skill}</Text>
      <View style={{ height: 8, marginTop: 8, backgroundColor: 'grey' }}>
        <View
          style={{
            width: niveau,
            backgroundColor: 'blue',
            height: 8,
          }}
        />
      </View>
    </View>
  );
};

export default Skill;