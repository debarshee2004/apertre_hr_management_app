import React from 'react';
import { View, Image, Text, SafeAreaView, StatusBar } from 'react-native';
import { responsiveWidth, responsiveHeight, responsiveFontSize } from 'react-native-responsive-dimensions';

export const IntroItems = ({ Frame, heading, content }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ width: responsiveWidth(100), justifyContent: 'center', alignItems: 'center' }}>
        {/* For Displaying Device Mockups  */}
        <View>
          {Frame}
        </View>
      </View>
      {/* Text Container  */}
      <View style={[styles.textContainer]}>
        {/* Heading Text  */}
        <Text style={styles.titleText}>{heading}</Text>
        {/* Content Text  */}
        <Text style={styles.content}>{content}</Text>
      </View>
    </SafeAreaView>
  )
}

// Styles 
const styles = {
  container: {
    position: 'relative',
    height: responsiveHeight(100),
    width: responsiveWidth(100),
    justifyContent: 'center',
    alignItems: 'center'
  },
  textContainer: {
    position: 'absolute',
    bottom: 0,
    paddingTop: 10,
    backgroundColor: '#ffff',
    height: responsiveHeight(35),
    justifyContent: 'start',
    alignItems: 'center',
    width: responsiveWidth(100),
    borderTopEndRadius: 30,
    borderTopStartRadius: 30
  },
  titleText: {
    width: responsiveWidth(90),
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: responsiveFontSize(3),
    textAlign: 'center',
    fontFamily: 'montserrat-bold'
  },
  content: {
    width: responsiveWidth(90),
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: responsiveFontSize(2),
    textAlign: 'center',
    fontWeight: '400',
    color: '#778da9',
    fontFamily: 'montserrat-semi',
    marginTop: 5
  }
}

