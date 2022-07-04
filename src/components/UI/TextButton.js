import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default TextButton = ({ propsButton, propsText }) => {
    return (
        <TouchableOpacity style={[styles.buttonContainer, { ...propsButton }]}>
            <Text style={{ color: 'white', fontSize: 17, fontWeight: '600', ...propsText }}>TextButton</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    buttonContainer: {
        height: 40, justifyContent: 'center', alignItems: 'center'

    }
})