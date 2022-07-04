import React from  'react'


import {View,Text,Image} from  'react-native'
import {reactCourse} from  '../constants/images'

export const Course=({course})=>{
  const {name,learners}=course
  return (
    <View style={{flexDirection:'row'}}>
<Image    source={reactCourse}   style={{width:150,height:150,resizeMode:'cover'}}     />
<View>
<Text>Course</Text>
<Text>{name}</Text>
<Text>{learners}</Text>


</View>


    </View>
  )
}