import { Image, StyleSheet, Text, View, TextInput, ImageBackground, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import { name } from './../../node_modules/csso/node_modules/css-tree/lib/syntax/node/AtrulePrelude';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
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
                    placeholder='search places'
                    placeholderTextColor="#888888" />
                <View style={styles.verticalLine} />

            </View>
            <View style={styles.PPCon}>
                <Text style={styles.PPText}> Populer Places</Text>
                <Text style={styles.ViewaAllText}> View all </Text>
            </View>
            <View style={styles.boxCon}>
                <View style={styles.box1Con}>
                    <Text style={styles.MVText}> Most Viewed </Text>
                </View>
                <View style={styles.box2Con}>
                    <Text style={styles.neabryText}> Neabry </Text>
                </View>
                <View style={styles.box3Con}>
                    <Text style={styles.latestext}> Latest </Text>
                </View>
            </View>
            <View style={styles.MFTimageContainer}>
                <View style={styles.imageWrapper}>
                    <ImageBackground
                        source={require("../assets/MFT.png")}
                        style={styles.MFTImage}
                        imageStyle={{ borderRadius: 15 }}

                    >
                        <View style={styles.imageIconCon}>
                            <Fontisto name={"heart-alt"} size={18} color={"#ffffffff"} style={styles.imgeIcon} />
                        </View>

                        <View style={styles.imgTextCon}>
                            <Text style={styles.title}>Mount Fuji, Tokyo</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <EvilIcons name={"location"} size={30} color={"#cac8c8"}
                                    style={styles.homeIcon} />
                                <Text style={styles.subtitle}>Tokyo, Japan          ⭐ 4.8</Text>

                            </View>
                        </View>
                    </ImageBackground>
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
                                    <EvilIcons name={"location"} size={30} color={"#cac8c8"}
                                        style={styles.homeIcon} />
                                    <Text style={styles.subtitle}>South, America          ⭐ 4.5</Text>

                                </View>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.NavigationBarCon}>
                <Entypo name={"home"} size={26} color={"#2f2f2f"} style={styles.homeIcon} />
                <Feather name={"clock"} size={25} color={"#848282"} style={styles.homeIcon} />
                <Fontisto name={"heart-alt"} size={23} color={"#848282"} style={styles.homeIcon} />
                <FontAwesome name={"user-o"} size={25} color={"#848282"} style={styles.homeIcon} />

            </View>

        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffffffff",
        flex: 1,
    },
    topContainer: { // مسؤول عن الحاويه الي فوق تحتوي على النص والصوره
        height: 75,
        width: "100%",
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
        width: 50,
        height: 50,
        alignSelf: 'flex-end',
        borderRadius: 75,
        marginLeft: 150,
    },

    HiText: { //مسؤول عن نص الترحيب
        fontSize: 30,
        fontWeight: "bold",// imagebackground
        color: "#2f2f2f",
        marginLeft: 20,
        marginTop: 30,
    },
    ExCon: { // مسؤول عن حاويه النص الثاني
        height: 24,
        width: 200,
    },
    ExText: { // مسؤول عن النص الثاني
        fontSize: 20,
        color: "#888888",
        marginLeft: 20,
        fontWeight: "500"
    },
    inputContainer: { // مسؤول عن حاويه السيرش بار 
        backgroundColor: "#FFFFFF",
        flexDirection: "row",
        borderRadius: 20,
        marginHorizontal: 30,
        marginTop: 40,
        alignItems: "center",
        height: 58,
        borderWidth: 2,
        borderColor: "#D2D2D2"
    },
    verticalLine: {
        width: 2,                 // سمك الخط
        height: 30,               // ارتفاع الخط
        backgroundColor: '#D2D2D2', // لون الخط
        marginRight: 60,
    },
    textInput: { // مسؤول عن الكلام داخل السيرش بار
        flex: 1,
        fontSize: 16,
        fontWeight: "500",
        marginLeft: 25,
    },
    PPCon: { // مسؤول عن النص والفيو 
        flexDirection: "row",
        marginLeft: 20,
        marginRight: 20,
        marginTop: 40,

    },
    PPText: { // مسؤول عن العنوان
        fontSize: 20,
        alignSelf: "center",
        fontWeight: "bold",
        color: "#2f2f2f"
    },
    ViewaAllText: { // مسؤول عن الفيو 
        marginLeft: 'auto',
        alignSelf: "center",
        fontSize: 16,
        color: "#888888",
        fontWeight: "bold"
    },
    boxCon: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginLeft: 20,
        marginTop: 30,
        marginTop: 40,

    },
    box1Con: {
        height: 54,
        justifyContent: 'center', // لمحاذاة عمودية
        alignItems: 'center',     // لمحاذاة أفقية
        width: 136,
        borderRadius: 20,
        backgroundColor: "#2f2f2f"
    },
    MVText: {
        color: "#ffffff",
        fontSize: 16,
        fontWeight: "bold"
    },
    box2Con: {
        height: 54,
        justifyContent: 'center', // لمحاذاة عمودية
        alignItems: 'center',     // لمحاذاة أفقية
        width: 105,
        borderRadius: 20,
        backgroundColor: "#fbfbfb"
    },
    neabryText: {
        color: "#c5c5c5",
        fontSize: 16,
        fontWeight: "bold"
    },
    box3Con: {
        height: 54,
        justifyContent: 'center', // لمحاذاة عمودية
        alignItems: 'center',     // لمحاذاة أفقية
        width: 111,
        borderRadius: 20,
        backgroundColor: "#fbfbfb"
    },
    latestext: {
        color: "#c5c5c5",
        fontSize: 16,
        fontWeight: "bold"
    },
    MFTimageContainer: {
        height: 120,       // نفس ارتفاع الصورة
        width: '100%',     // يغطي العرض بالكامل
        marginTop: 20,
    },
    MFTImage: {
        width: 270,
        height: 405,
        marginHorizontal: 20,
        justifyContent: "flex-end"
    },
    MFT2Image: {
        width: 270,
        height: 405,
        justifyContent: "flex-end"
    },
    imageWrapper: {
        flexDirection: "row",   // يخلي العناصر جنب بعض
        justifyContent: "space-around", // يوزعهم بمسافة بينهم
        alignItems: "center",
    },
    NavigationBarCon: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        height: 60,
    },
    imgTextCon: {
        borderRadius: 15,
        height: 75,
        marginHorizontal: 25,
        marginVertical: 20,
        padding: 10,
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
        top: 10,              // 10 بكسل من أعلى الصورة
        right: 10,            // 10 بكسل من يمين الصورة
        padding: 10,
        borderRadius: 20,
        backgroundColor: 'rgba(29,29,29,0.4)',
    },
    imgeIcon: {

        color: "#ffffff"

    }
})