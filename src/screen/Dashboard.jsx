import { StyleSheet, Text, View,TouchableOpacity} from 'react-native'
import React from 'react'
import colors, { colours } from '../utils/colours.js'
import { fonts } from '../utils/fonts';
// const firebaseConfig = {
//     apiKey: "AIzaSyCDNXN1OP6Z12vMOivlS_uNUwKw-S7XEkk",
//     authDomain: "gharbuddies.firebaseapp.com",
//     projectId: "gharbuddies",
//     storageBucket: "gharbuddies.appspot.com",
//     messagingSenderId: "308634445349",
//     appId: "1:308634445349:web:0e90c39f4a68a6b152c1cc",
//     measurementId: "G-H5VRYLW21V"
//   };
  

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.loginButtonWrapper,
            { backgroundColor: colours.primary },
          ]}
          
        >
          <Text style={styles.loginButtonText}>INVEST</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.loginButtonWrapper]}
          
        >
          <Text style={styles.signupButtonText}>RENT</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Dashboard

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:colours.white,
},

text:{
    fontSize:25,
    fontFamily:fonts.Bold,
    textAlign: 'center',
    paddingTop: 50,
    fontStyle:"italic",
    fontWeight:"bold",
    

},
suntext:{
    textAlign:'center',
    marginTop:50,
    
},
buttonContainer: {
    marginTop: 400,
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