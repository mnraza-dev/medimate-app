import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
export default function SplashScreen() {
    return (
        <View style={styles.container}>
            <Text style={{ color: 'white', fontSize: 44 }}>
                SplashScren
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4CAF50'
    }
})
