import { View, Text, StyleSheet, ViewStyle } from 'react-native'
import React, { ReactNode } from 'react'

export type CardProps = {
    children?: ReactNode
    customCardStyle?: ViewStyle
}
const Card = ({ children, customCardStyle }) => {
    return (
        <View style={[styles.cardContainer, { ...customCardStyle }]}>
            {children}
        </View>
    )
}

export default Card;

const styles = StyleSheet.create({
    cardContainer: {
        minHeight: 67,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 16,
        marginTop: 16,
        marginHorizontal: 16,
        marginVertical: 16,
    }
});