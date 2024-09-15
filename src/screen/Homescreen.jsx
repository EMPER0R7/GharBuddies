import {Image, StyleSheet,TouchableOpacity, Text, View } from 'react-native'
import React from 'react'
import colors, { colours } from '../utils/colours.js'
import { fonts } from "../utils/fonts";


import { useNavigation } from "@react-navigation/native";


const homescreen = () => {
    const navigation = useNavigation();

    const handleLogin = () => {
      navigation.navigate("LOGIN");
    };
    const handleSignup = () => {
        navigation.navigate("SIGNUP");
      };
  return (
    <View>
      <Image source={require('../../assets/images/image.png')} style={styles.logo} />
      <Text style={styles.text}>Welcome to the GharBuddies</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.loginButtonWrapper,
            { backgroundColor: colours.primary },
          ]}
          onPress={handleLogin}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.loginButtonWrapper]}
          onPress={handleSignup}
        >
          <Text style={styles.signupButtonText}>Sign-up</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default homescreen

const styles = StyleSheet.create({
container:{
    flex:1,
    backgroundColor:colours.white,
},
logo:{
    height:250,
    width:231,
    marginTop:100,
    marginLeft:85
},
text:{
    fontSize:36,
    fontFamily:fonts.Bold,
    textAlign: 'center',
    paddingTop: 10,
    

},
buttonContainer: {
    marginTop: 20,
    flexDirection: "row",
    borderWidth: 2,
    borderColor: colours.primary,
    width: "70%",
    height: 60,
    borderRadius: 100,
    alignSelf:"center"},
  loginButtonWrapper: {
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    borderRadius: 98,
  },
  loginButtonText: {
    color: colours.white,
    fontSize: 18,
    fontFamily:fonts.Light,
  },
  signupButtonText: {
    fontSize: 18,
    
  },


})
