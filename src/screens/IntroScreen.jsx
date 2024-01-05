import React, { useRef, useState } from 'react';
import { View, SafeAreaView, FlatList, StatusBar, Text, TouchableOpacity, Animated, StyleSheet } from 'react-native';
import { IntroItems } from '../components/IntroItems';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
// Mockups 
import Frame1 from '../../assets/mockups/Frame1';
import Frame2 from '../../assets/mockups/Frame2';
import Frame3 from '../../assets/mockups/Frame3';

// Data for rendering intro screens
const DATA = [
    {
        id: 0,
        frame: <Frame1 />,
        heading: "Efficient HR Management in One Place",
        content: "Get ready for your HR tasks. Talento helps you effortlessly manage employee attendance,departments and payroll."
    },
    {
        id: 1,
        frame: <Frame2 />,
        heading: "Organize Departments and Payroll",
        content: "Talento lets you create and manage departments, handle automated payroll and even initiate employee chats."
    },
    {
        id: 2,
        frame: <Frame3 />,
        heading: "Optimize Schedules and Approvals",
        content: "Take control of work schedules, company profiles, and employee applications with ease. Talento is here to support your HR success."
    },
]

export const IntroScreen = () => {
    const [count, setCount] = useState(0);
    const ref = useRef();
    return (
        <View style={{ flex: 1, backgroundColor: '#6c60ff' }}>
            <View style={{ width: '100%', marginTop: StatusBar.currentHeight, zIndex: 0 }}>
                <Animated.FlatList
                    ref={ref}
                    data={DATA}
                    renderItem={({ item }) => (<IntroItems Frame={item.frame} heading={item.heading} content={item.content} />)}
                    keyExtractor={(item) => item.id}
                    horizontal
                    pagingEnabled
                    // onScroll={(e) => {
                    //     const { contentOffset, layoutMeasurement } = e.nativeEvent;
                    //     const x = contentOffset.x;
                    //     const width = layoutMeasurement.width
                    //     const currentPos = Math.floor(x / width)
                    //     setCount(currentPos)
                    // }}
                    scrollEnabled={false}
                />
            </View>
            <View style={styles.container}>
                {/* Dots Container  */}
                <View style={styles.dotsContainer}>
                    {
                        DATA.map((item, id) => {
                            return (
                                <View style={{ width: count === id ? 30 : 8, height: 8, backgroundColor: count === id ? "#6c60ff" : "#edede9", margin: 2, borderRadius: 50 }} key={id}></View>
                            )
                        })
                    }
                </View>
                {/* Button Container  */}
                <View style={styles.buttonContainer}>
                    {/* Checking Conditions for displaying Previous and Next Buttons  */}
                    {count !== DATA.length - 1
                        &&
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%' }}>
                            {/* Previous Button  */}
                            <TouchableOpacity style={styles.prevButton} onPress={() => {
                                setCount(count - 1);
                                ref.current.scrollToIndex({ animated: true, index: count - 1 })
                            }}>
                                <Text style={styles.prevText}>Previous</Text>
                            </TouchableOpacity>
                            {/* Next Button  */}
                            <TouchableOpacity style={styles.nextButton} onPress={() => {
                                setCount(count + 1);
                                ref.current.scrollToIndex({ animated: true, index: count + 1 })
                            }}>
                                <Text style={styles.nextText}>Next</Text>
                            </TouchableOpacity>
                        </View>}
                    {/* Checking Condition for displaying GetStarted button  */}
                    {count === DATA.length - 1
                        &&
                        // Get Started Button 
                        <TouchableOpacity style={styles.getStartedButton}>
                            <Text style={styles.nextText}>Get Started</Text>
                        </TouchableOpacity>}
                </View>
            </View>
        </View>
    )
}


// Styles 
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        position: 'absolute',
        width: responsiveWidth(100),
        height: responsiveHeight(30),
        bottom: 0
    },
    dotsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        height: responsiveHeight(41),
        marginTop: 20
    },
    buttonContainer: {
        height: responsiveHeight(11),
        width: responsiveWidth(100),
        marginBottom: 20,
        alignItems: 'center'
    },
    prevButton: {
        backgroundColor: '#dee2ff',
        width: responsiveWidth(40),
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        borderRadius: 50
    },
    prevText: {
        color: '#6c60ff',
        fontSize: 18,
        fontFamily: 'montserrat-semi'
    },
    nextButton: {
        backgroundColor: '#6c60ff',
        width: responsiveWidth(40),
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        borderRadius: 50
    },
    nextText: {
        color: '#ffff',
        fontSize: 18,
        fontFamily: 'montserrat-semi'
    },
    getStartedButton: {
        backgroundColor: '#6c60ff',
        width: responsiveWidth(80),
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        borderRadius: 50
    },

})