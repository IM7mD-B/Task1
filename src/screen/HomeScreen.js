import { Image, StyleSheet, Text, View, TextInput, ImageBackground, Touchable, TouchableOpacity, Dimensions,ScrollView } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import { name } from './../../node_modules/csso/node_modules/css-tree/lib/syntax/node/AtrulePrelude';
import { Fonts } from '../assets/fonts/fonts';
import Setting from '../assets/icon/Setting.svg';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';


const { width, height } = Dimensions.get("window");
const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: height * 0.1 }}
            >
            <View style={styles.topContainer}>
                <Text style={styles.HiText}>Hi, David 👋</Text>
                <Image
                    source={require("../assets/David.png")}
                    style={styles.DavidImage}
                />
            </View>

            <View style={styles.ExCon}>
                <Text style={styles.ExText}>Explore the world</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput style={styles.textInput}
                    placeholder='Search places'
                    placeholderTextColor="#888888" />
                <View style={styles.verticalLine} />
                <Setting  size={width * 0.065} color={"#888888aa"} marginRight={20} />

            </View>
            <View style={styles.PPCon}>
                <Text style={styles.PPText}> Populer Places</Text>
                <Text style={styles.ViewaAllText}> View all </Text>
            </View>
            <View style={styles.boxCon}>
                <View style={styles.box1Con}>
                    <Text style={styles.MVText}> Most Viewed </Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Neabry')}>

                    <View style={styles.box2Con}>
                        <Text style={styles.neabryText}> Neabry </Text>
                    </View>
                </TouchableOpacity>

                <View style={styles.box3Con}>
                    <Text style={styles.latestext}> Latest </Text>
                </View>
            </View>
            <View style={styles.MFTimageContainer}>
                <View style={styles.imageWrapper}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("BookFuji")}
                    >
                        <ImageBackground
                            source={require("../assets/MFT.png")}
                            style={styles.MFTImage}
                            imageStyle={{ borderRadius: 15 }}

                        >
                            <View style={styles.imageIconCon}>
                                <Fontisto name={"heart-alt"} size={width * 0.045} color={"#ffffffff"} style={styles.imgeIcon} />
                            </View>

                            <View style={styles.imgTextCon}>

                                <Text style={styles.title}>Mount Fuji, Tokyo</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <EvilIcons name={"location"} size={width * 0.071} color={"#cac8c8"}
                                        style={styles.homeIcon} />
                                    <Text style={styles.subtitle}>Tokyo, Japan          ⭐ 4.8</Text>

                                </View>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate("Book")}
                    >
                        <ImageBackground
                            source={require("../assets/Andes.png")}
                            style={styles.MFT2Image}
                            imageStyle={{ borderRadius: 15 }}

                        >
                            <View style={styles.imgTextCon}>
                                <Text style={styles.title}>Andes, South</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <EvilIcons name={"location"} size={width * 0.071} color={"#cac8c8"}
                                        style={styles.homeIcon} />
                                    <Text style={styles.subtitle}>South, America          ⭐ 4.5</Text>

                                </View>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
            </View>
               </ScrollView>
            <View style={styles.NavigationBarCon}>
                <View style={{ alignItems: "center" }}>
                    <Entypo name={"home"} size={width * 0.064} color={"#2f2f2f"} style={styles.homeIcon} />
                    <View style={{
                        width: width * 0.02,
                        height: height * 0.01,
                        backgroundColor: '#FF4A4A',
                        borderRadius: 10,
                        marginTop: height * 0.001
                    }} />
                </View>
                <Feather name={"clock"} size={width * 0.063} color={"#848282"} style={styles.homeIcon} />
                <Fontisto name={"heart-alt"} size={width * 0.06} color={"#848282"} style={styles.homeIcon} />
                <FontAwesome name={"user-o"} size={width * 0.063} color={"#848282"} style={styles.homeIcon} />

            </View>

        </View >
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffffffff",
        flex: 1,
    },
    topContainer: { // مسؤول عن الحاويه الي فوق تحتوي على النص والصوره
        height: height * 0.08,
        width: width * 1,
        flexDirection: "row",


        //  flexDirection:"row" وضيفتها تزبط اتجاه الاشياء جوه الحاويه جمب بعض يمين مع عكس الاشياء او يسار او تحت مع عكس الاشياء او فوق
        //  justifyContent: للتحكم في الاتجهات بدون عكس العناصر وايضا المسافات
        //  alignItem: تحشر لك الاشياء بالجهة الي تختارها بدون ما تخليها ممتده 
        //  alignSelf: "flex-end" هاذي الفرق بينها وبين الايتم ان ذي تستعملها لو تبي تغير شي معين بس مو كل الحاويه
        //  flexWrap : يتحكم بالعناصر بحيث تترتب جمب بعض وما تخرج خارج الحاويه 
        //  gab :  في الرو والكولم مع بعض بنفس الوقت تسوي فجوات ومساحه بين العناصر 
        //  rowGab و columGab تسوي مسافه بين العناصر في حاله الكولم او الرو
        //  flexBasis يعدل حجم الحاويه بدون ما يهتم في المحتوى الداخلي  زيها زي لو تستعمل الهايت
        //  flexShrink تقلص حجم الحاويه عشان يتناسب  مع الحجم الي تبغاه 
        //  flexGrow  يخلي العنصر ياخذ كل المساحه الفاضيه 
    },
    DavidImage: { // مسؤول عن الصوره
        width: width * 0.12,
        height: height * 0.055,
        alignSelf: 'flex-end',
        borderRadius: 75,
        marginLeft: width * 0.36,

    },

    HiText: { //مسؤول عن نص الترحيب
        fontSize: width * 0.073,
        color: "#2f2f2f",
        marginLeft: width * 0.05,
        marginTop: height * 0.024,
        fontFamily: Fonts.iBMBold

    },
    ExCon: { // مسؤول عن حاويه النص الثاني
        height: height * 0.029,
        width: width * 1,

    },
    ExText: { // مسؤول عن النص الثاني
        fontSize: width * 0.049,
        color: "#888888",
        marginLeft: width * 0.05,
        fontWeight: "500",
        fontFamily: Fonts.iBMPLight
    },
    inputContainer: { // مسؤول عن حاويه السيرش بار 
        backgroundColor: "#FFFFFF",
        flexDirection: "row",
        borderRadius: 20,
        marginHorizontal: width * 0.07,
        marginTop: height * 0.03,
        alignItems: "center",
        height: height * 0.069,
        borderWidth: 2,
        borderColor: "#D2D2D2"
    },
    verticalLine: {
        width: width * 0.004,                 // سمك الخط
        height: height * 0.04,               // ارتفاع الخط
        backgroundColor: '#D2D2D2', // لون الخط
        marginRight: width * 0.05,
    },
    textInput: { // مسؤول عن الكلام داخل السيرش بار
        flex: 1,
        fontSize: width * 0.04,
        fontWeight: "500",
        marginLeft: width * 0.06,
    },
    PPCon: { // مسؤول عن النص والفيو 
        flexDirection: "row",
        marginLeft: width * 0.05,
        marginRight: width * 0.05,
        marginTop: height * 0.05,

    },
    PPText: { // مسؤول عن العنوان
        fontSize: width * 0.049,
        alignSelf: "center",
        fontWeight: "bold",
        color: "#2f2f2f"
    },
    ViewaAllText: { // مسؤول عن الفيو 
        marginLeft: 'auto',
        alignSelf: "center",
        fontSize: width * 0.04,
        color: "#888888",
        fontWeight: "bold"
    },
    boxCon: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginLeft: width * 0.05,
        marginTop: height * 0.05,

    },
    box1Con: {
        height: height * 0.059,
        justifyContent: 'center', // لمحاذاة عمودية
        alignItems: 'center',     // لمحاذاة أفقية
        width: width * 0.36,
        borderRadius: 20,
        backgroundColor: "#2f2f2f"
    },
    MVText: {
        color: "#ffffff",
        fontSize: width * 0.04,
        fontWeight: "bold"
    },
    box2Con: {
        height: height * 0.059,
        justifyContent: 'center', // لمحاذاة عمودية
        alignItems: 'center',     // لمحاذاة أفقية
        width: width * 0.28,
        borderRadius: 20,
        backgroundColor: "#fbfbfb"
    },
    neabryText: {
        color: "#c5c5c5",
        fontSize: width * 0.04,
        fontWeight: "bold"
    },
    box3Con: {
        height: height * 0.059,
        justifyContent: 'center', // لمحاذاة عمودية
        alignItems: 'center',     // لمحاذاة أفقية
        width: width * 0.28,
        borderRadius: 20,
        backgroundColor: "#fbfbfb"
    },
    latestext: {
        color: "#c5c5c5",
        fontSize: width * 0.04,
        fontWeight: "bold"
    },
    MFTimageContainer: {
        height: height * 0.442,       // نفس ارتفاع الصورة
        width: width * 1,     // يغطي العرض بالكامل
        marginTop: height * 0.05,

    },
    MFTImage: {
        width: width * 0.66,
        height: height * 0.442,
        marginHorizontal: width * 0.05,
        justifyContent: "flex-end"
    },
    MFT2Image: {
        width: width * 0.66,
        height: height * 0.442,
        justifyContent: "flex-end"
    },
    imageWrapper: {
        flexDirection: "row",   // يخلي العناصر جنب بعض
        justifyContent: "space-around", // يوزعهم بمسافة بينهم
        alignItems: "center",
    },
    NavigationBarCon: {
        position: "absolute",
        bottom: height * 0,
        left: width * 0,
        right: width * 0,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        paddingBottom: height * 0.005,
        height: height * 0.07,

    },
    imgTextCon: {
        borderRadius: 15,
        height: height * 0.09,
        marginHorizontal: width * 0.07,
        marginVertical: height * 0.027,
        padding: width * 0.025,
        gap: 10,
        backgroundColor: "rgba(29,29,29,0.4)", // الشفافية: 0.3 = 30%

    },
    title: {
        color: "#ffffff"
    },
    subtitle: {
        color: "#CAC8C8"
    },
    imageIconCon: {
        position: 'absolute', // مهم: ثابت بالنسبة للصورة
        top: height * 0.02,              // 10 بكسل من أعلى الصورة
        right: width * 0.02,            // 10 بكسل من يمين الصورة
        padding: width * 0.025,
        borderRadius: 20,
        backgroundColor: 'rgba(29,29,29,0.4)',
    },
    imgeIcon: {

        color: "#ffffff"

    }
})