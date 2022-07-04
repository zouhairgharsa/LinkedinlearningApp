import React from 'react';

import { View, Text,Image,StyleSheet } from 'react-native';

const Course = ({course }) => {
  const {title,name,image}=course
  return (
    <View style={styles.container}>
            <Image
              source={image}
              style={styles.imageCourse}
            />
            <View style={styles.containerCourse}>
              <Text
                style={styles.title}>
                {title}
              </Text>
              <Text style={styles.name}>
                {name}
              </Text>
            </View>
          </View>
  );
};

export default Course;

const styles=StyleSheet.create({
  container:{
    flexDirection: 'row', marginBottom: 10
  },
  imageCourse:{
    width: 80, height: 80, borderRadius: 40
  },
  containerCourse:{
    marginLeft: 10, marginTop: 10, flexShrink: 1
  },
  title:{
    fontSize: 18, fontWeight: 'bold', marginBottom: 5
  },
  name:{
    fontSize: 17,letterSpacing:1.25
  }
})