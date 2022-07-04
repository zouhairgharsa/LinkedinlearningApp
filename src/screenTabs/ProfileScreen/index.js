import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Image,
  ScrollView
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SKILLS, TOOLS, COURSES } from '../../constants/data';
import { Skill, Course, BorderWithTitle } from './components';
import Constants from 'expo-constants';
import { headerProfile, profileUser } from '../../constants/images';

export default function ProfileScreen() {
  return (
    <ScrollView>
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={headerProfile}
          style={{ width: '100%', height: 120 }}
          imageStyle={{ resizeMode: 'stretch' }}>
          <Image
            source={profileUser}
            style={{
              width: 120,
              height: 120,
              marginTop: 60,
              borderRadius: 60,
              marginLeft: 20,
              resizeMode: 'cover',
            }}
          />
        </ImageBackground>
        <View style={{ marginTop: 10, marginHorizontal: 20 }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}>
            <View
              style={{
                backgroundColor: '#b24020',
                width: 30,
                height: 30,
                alignItems: 'center',
                borderRadius: 2,
                marginRight: 10,
              }}>
              <Text
                style={{ fontSize: 24, fontWeight: 'bold', color: 'white' }}>
                in
              </Text>
            </View>
            <Ionicons name="pencil" size={30} color="grey" />
          </View>
          <View style={{ marginTop: 30 }}>
            <Text
              style={{ color: '#000000e6', fontWeight: 'bold', fontSize: 20 }}>
              Zouhair Gharsa
            </Text>
            <Text style={{ color: '#000000e6', fontSize: 15, lineHeight: 28 }}>
              React Native Developer
            </Text>
            <View style={{ marginVertical: 20 }}>
              <Text style={{ fontSize: 14, lineHeight: 28 }}>
                National School of Applied Sciences of Tetouan
              </Text>
              <Text style={{ color: '#0009' }}>Fez, Fès-Meknès, Morocco</Text>
            </View>
            <Text style={{ color: '#0a66c2', fontWeight: '600', fontSize: 16 }}>
              381 connections
            </Text>
          </View>
          <View
            style={{
              marginTop: 10,
              backgroundColor: '#b9af9f',
              padding: 10,
              borderRadius: 8,
            }}>
            <Text style={{ fontSize: 17, fontWeight: '700' }}>
              Open to work
            </Text>
            <Text style={{ color: '#000000e6', fontSize: 16, lineHeight: 28 }}>
              React Native Developer Roles
            </Text>
            <Text style={{ color: '#0a66c2', fontWeight: '600' }}>
              See all Details
            </Text>
          </View>
        </View>
        <BorderWithTitle title="About">
          <Text style={{ fontSize: 16, lineHeight: 24 }}>
            Je m'appelle Zouhair Gharsa , je suis ingenieur Telecom et reseaux
            informatiques,Je suis developpeur React Native avec deux ans
            d'apprentissage.Experience de CSS,Javascript,React et React
            Native,je suis creatif et avec une forte capacite de resolution des
            problemes
          </Text>
        </BorderWithTitle>
        <BorderWithTitle title="Courses & Certifications">
          {COURSES.map((item) => (
            <Course course={item} />
          ))}
        </BorderWithTitle>

        <BorderWithTitle title="Skills">
          {SKILLS.map((item) => (
            <Skill niveau={item.niveau} skill={item.skill} />
          ))}
        </BorderWithTitle>

        <BorderWithTitle title="Tools & Technologies">
          <View
            style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 5 }}>
            {TOOLS.map((item) => (
              <View
                style={{
                  borderWidth: 1,
                  borderColor: '#424242',
                  marginRight: 5,
                  marginBottom: 5,
                  paddingHorizontal: 8,
                  paddingVertical: 5,
                  borderRadius: 10,
                  alignItems: 'center',
                }}>
                <Text style={{ fontSize: 16 }}>{item}</Text>
              </View>
            ))}
          </View>
        </BorderWithTitle>
      </View>
    </ScrollView >
  );
}
