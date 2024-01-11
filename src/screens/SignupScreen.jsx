import React from 'react'
import { Text, View, SafeAreaView, StyleSheet, StatusBar, TextInput, TouchableOpacity } from 'react-native'
import { Ionicons, Entypo, FontAwesome } from '@expo/vector-icons';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

export const SignupScreen = () => {
    return (
        <SafeAreaView style={styles.mainCon}>
            <Ionicons style={{ marginLeft: responsiveWidth(4), marginVertical: 20 }} name="arrow-back-outline" size={24} color="black" />
            <View style={styles.secCon}>
                <View style={styles.titleCon}>
                    <Text style={{ fontFamily: 'montserrat-bold', fontSize: 28 }}>Create Your Account <Entypo name="user" size={28} color="gray" /></Text>
                    <Text style={{ fontFamily: 'montserrat-semi', fontSize: 16, color: 'gray' }}>Elevate Your HR Management with Talento</Text>
                </View>
                <View style={styles.infoCon}>
                    <View>
                        <Text style={{ fontFamily: 'montserrat-semi', fontSize: 20, marginBottom: 5 }}>Email</Text>
                        <TextInput style={{ fontFamily: 'montserrat-light', fontSize: 18, width: responsiveWidth(88), backgroundColor: '#edede9', height: responsiveHeight(6), borderRadius: 11, justifyContent: 'center', alignItems: 'center', padding: 10 }} placeholder='Email'></TextInput>
                    </View>
                    <View>
                        <Text style={{ fontFamily: 'montserrat-semi', fontSize: 20, marginBottom: 5 }}>Password</Text>
                        <TextInput style={{ fontFamily: 'montserrat-light', fontSize: 18, width: responsiveWidth(88), backgroundColor: '#edede9', height: responsiveHeight(6), borderRadius: 11, justifyContent: 'center', alignItems: 'center', padding: 10 }} placeholder='Password'></TextInput>
                    </View>
                    <View style={{ flexDirection: 'row', gap: 5 }}>
                        <Text style={{ fontFamily: 'montserrat-light', fontSize: 16 }}>Already have an account?</Text>
                        <Text style={{ fontFamily: 'montserrat-light', fontSize: 16, color: 'blue' }}>Log in</Text>
                    </View>
                </View>
                <View>
                    <Text style={{ fontFamily: 'montserrat-semi', fontSize: 20 }}>or</Text>
                </View>
                <View style={styles.optionCon}>
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
                    <TouchableOpacity style={[styles.logButtons, { backgroundColor: '#6c60ff' }]}>
                        <Text style={{ fontFamily: 'montserrat-bold', fontSize: responsiveFontSize(2), color: '#ffff' }}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    mainCon: {
        height: responsiveHeight(100),
        width: responsiveWidth(100),
        marginTop: StatusBar.currentHeight
    },
    secCon: {
        width: responsiveWidth(100),
        height: '100%',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    titleCon: {
        height: responsiveHeight(8),
        width: responsiveWidth(92)
    },
    infoCon: {
        height: responsiveHeight(30),
        width: responsiveWidth(92),
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    optionCon: {
        height: responsiveHeight(55),
        width: responsiveWidth(100),
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    logButtons: {
        width: responsiveWidth(85),
        height: responsiveHeight(8),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        marginBottom: 70
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
})