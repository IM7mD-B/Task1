import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Fonts } from '../assets/fonts/fonts';

const { width, height } = Dimensions.get("window");


const SplashScreen = ({ navigation }) => {
    // الانتقال بعد 3 ثواني
    setTimeout(() => {
        navigation.replace('Home'); // غير 'Home' باسم شاشة الهوم عندك
    }, 2000);
    return (
        <LinearGradient
            colors={['#0172B2', '#001645']} // ألوان متدرجة
            style={styles.Container}// يغطي كامل الصفحة
        >
            <View style={styles.appIconCon}>
                <Text style={styles.appIcon}>Travel</Text>
                <Ionicons name={"earth-outline"} size={width * 0.12} color={"#ffffffff"} marginRight={20} />
             </View>
             <View style={styles.splashTextCon}>
                <Text style={styles.splashText}>Find Your Dream</Text>
                <Text style={styles.splashText}>Destination With Us</Text>
             </View>

        </LinearGradient>
    )
}


export default SplashScreen

const styles = StyleSheet.create({
    Container: { 
        flex: 1,
        alignItems:"center",
        justifyContent:"center",
        rowGap:height*0.028
     },
     appIconCon:{
        flexDirection:"row",
        alignItems:"center",
        columnGap:width*0.02
     },
     appIcon:{
        color:"#ffffff",
        fontSize:width*0.12,
        fontFamily:Fonts.lobster
     },
     splashText:{
         color:"#ffffff",
        fontSize:width*0.047,
     },
     splashTextCon:{
        alignItems:"center"
     }
  
})