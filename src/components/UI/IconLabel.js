import React from 'react'

import {Image,Text,View} from 'react-native'

export const IconLabel =({iconStyle,labelStyle,icon,label})=>(
<View style={{flexDirection:'row',alignItems:'center',marginTop:8}}>
<Image source={icon} resizeMode='contain' style={{width:20,height:20,tintColor:'gray',...iconStyle}}/>
<Text style={{marginLeft:8,color:'gray',...labelStyle}}>{label}</Text>
</View>
)