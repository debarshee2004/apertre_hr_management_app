import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

export const Welcome = () => {
    return (
        <View style={styles.container}>
            <View style={[styles.wlcContainer]}>
                <AntDesign name='antdesign' size={70} color="#6c60ff" />
                <View style={styles.wlcTextCont}>
                    <Text style={{ fontFamily: 'montserrat-bold', fontSize: responsiveFontSize(4) }}>Let's Get Started!</Text>
                    <Text style={{ fontFamily: 'montserrat-light', fontSize: responsiveFontSize(2), color: 'gray' }}>Let's dive in into your account</Text>
                </View>
            </View>
            <View style={[styles.optionCon]}>
                <TouchableOpacity style={styles.optionButton}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: responsiveWidth(75) }}>
                        <View>
                            <FontAwesome name="google" size={24} color="#4285F4" />
                        </View>
                        <View style={{ paddingRight: 40 }}>
                            <Text style={{ fontFamily: 'montserrat-bold', fontSize: responsiveFontSize(2) }}>Continue with Google</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionButton}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: responsiveWidth(75) }}>
                        <View>
                            <FontAwesome name="apple" size={24} color="black" />
                        </View>
                        <View style={{ paddingRight: 40 }}>
                            <Text style={{ fontFamily: 'montserrat-bold', fontSize: responsiveFontSize(2) }}>Continue with Apple</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionButton}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: responsiveWidth(75) }}>
                        <View>
                            <FontAwesome name="facebook-square" size={24} color="#0165E1" />
                        </View>
                        <View style={{ paddingRight: 40 }}>
                            <Text style={{ fontFamily: 'montserrat-bold', fontSize: responsiveFontSize(2) }}>Continue with Facebook</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionButton}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: responsiveWidth(75) }}>
                        <View>
                            <FontAwesome name="twitter" size={24} color="#1D9BF0" />
                        </View>
                        <View style={{ paddingRight: 40 }}>
                            <Text style={{ fontFamily: 'montserrat-bold', fontSize: responsiveFontSize(2) }}>Continue with Twitter</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={[styles.loginCont]}>
                <TouchableOpacity style={[styles.logButtons, { backgroundColor: '#6c60ff' }]}>
                    <Text style={{ fontFamily: 'montserrat-bold', fontSize: responsiveFontSize(2), color: '#ffff' }}>Sign Up</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.logButtons, { backgroundColor: '#dee2ff' }]}>
                    <Text style={{ fontFamily: 'montserrat-bold', fontSize: responsiveFontSize(2), color: '#6c60ff' }}>Log In</Text>
                </TouchableOpacity>
            </View>
            <View style={[styles.lastCon]}>
                <Text style={{ fontFamily: 'montserrat-light' }}>Privacy Policy</Text>
                <View style={{ width: 5, height: 5, backgroundColor: 'black', borderRadius: 10 }}></View>
                <Text style={{ fontFamily: 'montserrat-light' }}>Terms of Service</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        height: responsiveHeight(100),
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: StatusBar.currentHeight
    },
    wlcContainer: {
        height: responsiveHeight(30),
        width: responsiveWidth(100),
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    wlcTextCont: {
        alignItems: 'center',
        gap: 10
    },
    optionCon: {
        height: responsiveHeight(40),
        width: responsiveWidth(100),
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    optionButton: {
        width: responsiveWidth(85),
        height: responsiveHeight(8),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 40
    },
    loginCont: {
        height: responsiveHeight(18),
        width: responsiveWidth(100),
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    logButtons: {
        width: responsiveWidth(85),
        height: responsiveHeight(8),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30
    },
    lastCon: {
        height: responsiveHeight(5),
        width: responsiveWidth(100),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5
    }
})