import React from 'react'
// Components imported from react-native
import { SafeAreaView, StyleSheet, Text, View, ActivityIndicator } from 'react-native'
// Expo Vector icon library
import { AntDesign } from '@expo/vector-icons';

export const Landing = () => {
    const { container, subContainer, loading } = styles
    return (
        <SafeAreaView style={container}>
            {/* Container for App title and app icon  */}
            <View style={subContainer}>
                <AntDesign style={{ justifyContent: 'center', alignItems: 'center' }} name="antdesign" size={70} color="white" />
                <Text style={{ color: '#ffff', fontSize: 40, fontWeight: '400' }}>Talento</Text>
            </View>
            {/* Loading animation  */}
            <View style={loading}>
                <ActivityIndicator size="large" color="#ffff" />
            </View>
        </SafeAreaView>
    )
}

// Styles 
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#6c60ff',
        width: '100%',
        flex: 1,
        color: '#fffff',
        justifyContent: 'space-evenly'
    },
    subContainer: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        gap: 20,
        height: '50%'
    },
    loading: {
        justifyContent: 'flex-end',
        height: '50%',
        paddingBottom: 50
    }
})
