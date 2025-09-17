import { Image, StyleSheet, Text, View, TextInput, ImageBackground, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import Fontisto from 'react-native-vector-icons/Fontisto';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { name } from './../../node_modules/csso/node_modules/css-tree/lib/syntax/node/AtrulePrelude';


const BookScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/AndesB.png")}
        style={styles.MFTImage}
        imageStyle={{ borderRadius: 15 }}

      >
        <View style={styles.imageIconCon2}>
          <MaterialIcons name={"arrow-back-ios-new"} size={22} color={"#ffffffff"} style={styles.imgeIcon2} />
        </View>
        <View style={styles.imageIconCon}>
          <Fontisto name={"heart-alt"} size={18} color={"#ffffffff"} style={styles.imgeIcon} />
        </View>

        <View style={styles.imgTextCon}>
          <Text style={styles.title}>Andes, South</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <EvilIcons name={"location"} size={30} color={"#cac8c8"}
              style={styles.homeIcon} />
            <Text style={styles.subtitle}>South, America</Text>

          </View>
        </View>
      </ImageBackground>
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
    top: 15,              // 10 بكسل من أعلى الصورة
    right: 15,            // 10 بكسل من يمين الصورة
    padding: 10,
    borderRadius: 20,
    backgroundColor: 'rgba(29,29,29,0.4)',
  },
  imageIconCon2: {
    position: 'absolute', // مهم: ثابت بالنسبة للصورة
    top: 15,              // 10 بكسل من أعلى الصورة
    left: 15,            // 10 بكسل من يمين الصورة
    padding: 10,
    borderRadius: 20,
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
    fontSize:24,
  },
  subtitle: {
    color: "#CAC8C8",
    fontSize:18,
    alignSelf:"flex-start"
  },
})