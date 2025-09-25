import { StyleSheet, Animated, Text, View, Dimensions } from 'react-native'
import React, { useEffect, useRef } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Fonts } from '../assets/fonts/fonts';
import Globe from '../assets/icon/Globe.svg'

const { width, height } = Dimensions.get("window");


const SplashScreen = ({ navigation }) => {
    const fadeAnimText = useRef(new Animated.Value(0)).current;
    const fadeAnimBg = useRef(new Animated.Value(1)).current;

    useEffect(() => {

        Animated.sequence([
            Animated.timing(fadeAnimText, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
            }),
            Animated.delay(700),
            Animated.timing(fadeAnimText, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true,
            }),
            Animated.timing(fadeAnimBg, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true,
            })
        ]).start(() => {

            navigation.replace('Home');
        });
    }, []);

    return (
        <Animated.View style={{ flex:1,opacity: fadeAnimBg, }} >

            <LinearGradient
                colors={['#0172B2', '#001645']} // ألوان متدرجة
                style={styles.Container}
            >

                <Animated.View style={{ opacity: fadeAnimText, }} >
                    <View style={styles.appIconCon}>
                        <Text style={styles.appIcon}>Travel</Text>
                        <Globe size={width * 0.14} color={"#ffffffff"} marginRight={20} />
                    </View>

                    <View style={styles.splashTextCon}>
                        <Text style={styles.splashText}>Find Your Dream</Text>
                        <Text style={styles.splashText}>Destination With Us</Text>
                    </View>
                </Animated.View>


            </LinearGradient>
        </Animated.View>
    )
}


export default SplashScreen

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        rowGap: height * 0.028
    },
    appIconCon: {
        flexDirection: "row",
        alignItems: "center",

    },
    appIcon: {
        color: "#ffffff",
        fontSize: width * 0.14,
        fontFamily: Fonts.lobster
    },
    splashText: {
        color: "#ffffff",
        fontSize: width * 0.047,
    },
    splashTextCon: {
        alignItems: "center"
    }

})