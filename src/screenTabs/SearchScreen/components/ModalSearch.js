import React, { useState } from 'react';
import {
  View,
  Pressable,
  Modal,
  Text,
  useWindowDimensions,
} from 'react-native';
import { ModalFilter } from './ModalFilter';
import { MaterialIcons } from '@expo/vector-icons';

const ModalSearch = ({
  modalVisible,
  setModalVisible,
  filterCourses,
  setFilterCourses
}) => {
  const { height } = useWindowDimensions();
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <View style={{ justifyContent: 'flex-end', flex: 1 }}>
        <View
          style={{
            zIndex: 5,
            position: 'absolute',
            height: height / 2,
            marginTop: 60,
            borderTopRightRadius: 30,
            borderTopLeftRadius: 30,
            paddingHorizontal: 20,
            right: 0,
            left: 0,
            paddingTop: 25,
            backgroundColor: 'white',
            borderWidth: 1,
            borderColor: 'grey',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text style={{ fontSize: 18, fontWeight: '500', flex: 1 }}>
              Filter Your Search
            </Text>

            <MaterialIcons
              onPress={() => setModalVisible((v) => !v)}
              name="cancel"
              size={30}
              color="grey"
            />
          </View>
          <View style={{ marginTop: 20 }}>
            <View style={{ marginTop: 12 }}>
              <ModalFilter
                filterCourses={filterCourses}
                setFilterCourses={setFilterCourses}
              />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalSearch;