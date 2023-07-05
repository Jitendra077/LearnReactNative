import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

export type CustomInput = {
    placeholder?: string
}

const CustomInput = ({
    placeholder = 'Enter Your ',
}) => {
    return (
        <View style={styles.CustomInputContainer}>
            <TextInput placeholder={placeholder} style={styles.textInput} />
        </View>
    )
}

export default CustomInput

const styles = StyleSheet.create({
    CustomInputContainer: {
        flex: 1,
        borderWidth: 0.5,
        borderColor: 'gray',
        marginTop: 16,
        minHeight: 34,
        borderRadius: 20,
    },
    textInput: {
        marginLeft: 20,
        padding: 0
    }
})