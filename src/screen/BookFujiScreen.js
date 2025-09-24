import { Image, StyleSheet, Text, View, TextInput, ImageBackground, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import Archive from '../assets/icon/Archive.svg';
import LeftArrow from '../assets/icon/Archive.svg';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { name } from './../../node_modules/csso/node_modules/css-tree/lib/syntax/node/AtrulePrelude';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters'

const BookScreen = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require("../assets/MFT.png")}
                style={styles.MFTImage}
                imageStyle={{ borderRadius: 15 }}

            >
                <View style={styles.imageIconCon2}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <MaterialIcons name={"arrow-back-ios-new"} size={moderateScale(18)} color={"#ffffffff"} style={styles.imgeIcon2} />
                    </TouchableOpacity>
                </View>
                <View style={styles.imageIconCon}>
                    <Archive width={scale(24)} height={verticalScale(24)} color={"#ffffffff"} style={styles.imgeIcon} />
                </View>

                <View style={styles.imgTextCon}>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", }}>
                        <Text style={styles.title}>Mount Fuji, Tokyo</Text>
                        <Text style={{ color: "#cac8c8", fontSize: moderateScale(16), }}>Price</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <EvilIcons name={"location"} size={moderateScale(30)} color={"#cac8c8"} />
                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: scale(225) }}>
                            <Text style={styles.subtitle}>Tokyo, Japan</Text>
                            <Text style={{ color: "#cac8c8", fontSize: moderateScale(24), }}>
                                <Text style={{ color: "#434343", fontSize: moderateScale(22), }}>$</Text>270</Text>
                        </View>
                    </View>
                </View>
            </ImageBackground>
            <View style={{ flexDirection: "row", alignItems: "center", marginVertical: verticalScale(12) }}>
                <Text style={{
                    marginHorizontal: scale(20),
                    fontWeight: "bold",
                    fontSize: moderateScale(22),
                    color: "#1b1b1b"
                }}>Overview</Text>
                <Text style={{
                    marginHorizontal: scale(15), fontWeight: "bold",
                    fontSize: moderateScale(16),
                    color: "#1b1b1b96",
                    marginTop: verticalScale(10)
                }}>Details</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-around", marginHorizontal: scale(20) }}>
                <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
                    <Feather name={"clock"} size={moderateScale(18)} color={"#3f3f3f"} style={styles.homeIcon} />
                    <Text style={styles.detailsText}>10 hours</Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
                    <Entypo name={"cloud"} size={moderateScale(18)} color={"#3f3f3f"} style={styles.homeIcon} />
                    <Text style={styles.detailsText}>12°C</Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <AntDesign name={"star"} size={moderateScale(18)} color={"#3f3f3f"} style={styles.homeIcon} />
                    <Text style={styles.detailsText}>4.8</Text>
                </View>
            </View>

            <View style={{ marginVertical: verticalScale(15), marginLeft: scale(17) }}>
                <Text style={[styles.overview, { fontWeight: "bold", color: "#a5a5a5" }]}>Mount Fuji is Japan’s tallest and most famous</Text>
                <Text style={[styles.overview, { fontWeight: "bold", color: "#a5a5a5c8" }]}>mountain. It has a nearly perfect symmetrical</Text>
                <Text style={[styles.overview, { fontWeight: "bold", color: "#a5a5a593" }]}>cone and is a dormant volcano. Snow covers</Text>
                <Text style={[styles.overview, { fontWeight: "bold", color: "#a5a5a552" }]}>its peak in winter, while cherry blossoms bloom</Text>
                <Text style={[styles.overview, { fontWeight: "bold", color: "#a5a5a511" }]}>beautifully in spring, attracting many visitors</Text>
            </View>
            <View style={styles.box1Con}>
                <Text style={styles.MVText}> Book Now </Text>
                <Feather name={"send"} size={moderateScale(22)} color={"#ffffffff"} style={styles.BookIcon} />
            </View>
        </View>
    )
}

export default BookScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffffffff",
        flex: 1,
    },
    MFTImage: {
        width: scale(318),
        height: verticalScale(360),
        marginHorizontal: scale(17),
        marginVertical: verticalScale(17),
        justifyContent: "flex-end"
    },
    imageIconCon: {
        position: 'absolute', // مهم: ثابت بالنسبة للصورة
        top: verticalScale(10),              // 10 بكسل من أعلى الصورة
        right: scale(10),            // 10 بكسل من يمين الصورة
        padding: moderateScale(10),
        borderRadius: moderateScale(25),
        backgroundColor: 'rgba(29,29,29,0.4)',
    },
    imageIconCon2: {
        position: 'absolute', // مهم: ثابت بالنسبة للصورة
        top: verticalScale(10),              // 10 بكسل من أعلى الصورة
        left: scale(10),            // 10 بكسل من يمين الصورة
        padding: moderateScale(14),
        borderRadius: moderateScale(25),
        backgroundColor: 'rgba(29,29,29,0.4)',

    },
    imgTextCon: {
        borderRadius: moderateScale(15),
        height: verticalScale(84),
        marginHorizontal: scale(20),
        marginVertical: verticalScale(15),
        padding: moderateScale(15),
        gap: moderateScale(15),
        backgroundColor: "rgba(29,29,29,0.5)",
    },
    title: {
        color: "#ffffff",
        fontSize: moderateScale(24),
    },
    subtitle: {
        color: "#CAC8C8",
        fontSize: moderateScale(18),
        alignSelf: "flex-start"
    },
    homeIcon: {
        padding: moderateScale(10),
        borderRadius: moderateScale(10),
        backgroundColor: '#ededed',

    },
    detailsText: {
        fontSize: moderateScale(17),
        color: "#7e7e7e",
        marginLeft: scale(5),
        fontWeight: "500"
    },
    overview: {
        fontSize: moderateScale(16.5)
    },
    box1Con: {
        height: verticalScale(56),
        justifyContent: 'center', // لمحاذاة عمودية
        alignItems: 'center',     // لمحاذاة أفقية
        width: scale(325),
        borderRadius: moderateScale(15),
        backgroundColor: "#1b1b1b",
        marginHorizontal: scale(13),
        flexDirection: "row",
        alignItems: "center",
    },
    MVText: {
        color: "#ffffff",
        fontSize: moderateScale(20),
        fontWeight: "bold"
    },
    BookIcon: {
        marginLeft: scale(10)
    }
})