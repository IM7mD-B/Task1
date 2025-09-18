import { Image, StyleSheet, Text, View, TextInput, ImageBackground, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { name } from './../../node_modules/csso/node_modules/css-tree/lib/syntax/node/AtrulePrelude';


const BookScreen = ({ navigation }) => { 

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/AndesB.png")}
        style={styles.MFTImage}
        imageStyle={{ borderRadius: 15 }}

      >
        <View style={styles.imageIconCon2}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <MaterialIcons name={"arrow-back-ios-new"} size={22} color={"#ffffffff"} style={styles.imgeIcon2} />
          </TouchableOpacity>
        </View>
        <View style={styles.imageIconCon}>
          <Fontisto name={"heart-alt"} size={22} color={"#ffffffff"} style={styles.imgeIcon} />
        </View>

        <View style={styles.imgTextCon}>
          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", }}>
            <Text style={styles.title}>Andes, South</Text>
            <Text style={{ color: "#cac8c8", fontSize: 16, }}>Price</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', }}>
            <EvilIcons name={"location"} size={33} color={"#cac8c8"} />
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "90%" }}>
              <Text style={styles.subtitle}>South, America</Text>
              <Text style={{ color: "#cac8c8", fontSize: 26, }}>
                <Text style={{ color: "#434343", fontSize: 20, }}>$</Text>230</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
      <View style={{ flexDirection: "row", alignItems: "center", marginVertical: 16 }}>
        <Text style={{ marginHorizontal: 20, fontWeight: "bold", fontSize: 22, color: "#1b1b1b" }}>Overview</Text>
        <Text style={{ marginHorizontal: 15, fontWeight: "bold", fontSize: 16, color: "#1b1b1b96", marginTop: 6 }}>Details</Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-around", marginHorizontal: 20 }}>
        <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
          <Feather name={"clock"} size={18} color={"#3f3f3f"} style={styles.homeIcon} />
          <Text style={styles.detailsText}>8 hours</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
          <Entypo name={"cloud"} size={18} color={"#3f3f3f"} style={styles.homeIcon} />
          <Text style={styles.detailsText}>16°C</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <AntDesign name={"star"} size={18} color={"#3f3f3f"} style={styles.homeIcon} />
          <Text style={styles.detailsText}>4.5</Text>
        </View>
      </View>
      <View style={{ marginVertical: 35, marginLeft: 20 }}>
        <Text style={[styles.overview, { fontWeight: "bold", color: "#a5a5a5" }]}>This vast mountain range is renowned for its</Text>
        <Text style={[styles.overview, { fontWeight: "bold", color: "#a5a5a5c8" }]}>remarkable diversity in terms of topography</Text>
        <Text style={[styles.overview, { fontWeight: "bold", color: "#a5a5a593" }]}>and climate. It features towering peaks, active</Text>
        <Text style={[styles.overview, { fontWeight: "bold", color: "#a5a5a552" }]}>volcanoes, deep canyons, expansive plateaus,</Text>
        <Text style={[styles.overview, { fontWeight: "bold", color: "#a5a5a511" }]}>and lush valleys. The Andes are also home to </Text>
      </View>
      <View style={styles.box1Con}>
        <Text style={styles.MVText}> Book Now </Text>
        <Feather name={"send"} size={22} color={"#ffffffff"} style={styles.BookIcon} />
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
    width: 374,
    height: 460,
    marginHorizontal: 20,
    marginVertical: 20,
    justifyContent: "flex-end"
  },
  imageIconCon: {
    position: 'absolute', // مهم: ثابت بالنسبة للصورة
    top: 15,              // 15 بكسل من أعلى الصورة
    right: 15,            // 15 بكسل من يمين الصورة
    padding: 10,
    borderRadius: 25,
    backgroundColor: 'rgba(29,29,29,0.4)',
  },
  imageIconCon2: {
    position: 'absolute', // مهم: ثابت بالنسبة للصورة
    top: 15,              // 10 بكسل من أعلى الصورة
    left: 15,            // 10 بكسل من يمين الصورة
    padding: 10,
    borderRadius: 25,
    backgroundColor: 'rgba(29,29,29,0.4)',

  },
  imgTextCon: {
    borderRadius: 15,
    height: 104,
    marginHorizontal: 25,
    marginVertical: 20,
    padding: 20,
    gap: 10,
    backgroundColor: "rgba(29,29,29,0.5)",
  },
  title: {
    color: "#ffffff",
    fontSize: 24,
  },
  subtitle: {
    color: "#CAC8C8",
    fontSize: 18,
    alignSelf: "flex-start"
  },
  homeIcon: {
    padding: 8,
    borderRadius: 10,
    backgroundColor: '#ededed',

  },
  detailsText: {
    fontSize: 18,
    color: "#7e7e7e",
    marginLeft: 5,
    fontWeight: "500"
  },
  overview: {
    fontSize: 18
  },
  box1Con: {
    height: 66,
    justifyContent: 'center', // لمحاذاة عمودية
    alignItems: 'center',     // لمحاذاة أفقية
    width: "93%",
    borderRadius: 15,
    backgroundColor: "#1b1b1b",
    marginHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  MVText: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold"
  },
  BookIcon: {
    marginLeft: 10
  }
})