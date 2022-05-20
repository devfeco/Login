import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView
} from 'react-native';
import LoginForm from './LoginForm';
import LoginButton from '../../components/LoginButton';

const Login = () =>{
  return (
    <SafeAreaView style={styles.page}>
      <StatusBar barStyle={'dark-content'} />
      <View style={styles.headerBackground} />
      <View style={styles.mainLogo}>
          <Text style={styles.logo}>Tribone Foundation</Text>
          <Text style={styles.logoDescription}>BlockChain Technologies</Text>
        </View>
      <KeyboardAvoidingView behavior='position'>
        <ScrollView>
          <View style={styles.loginArea}>
            <Text style={styles.loginTitle}>Tribone Foundation Server</Text>
            <Text style={styles.loginDescription}>Surf the internet securely with blockchain technology.</Text>
            <LoginForm />
            <LoginButton title='Sign In Now'/>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <View style={styles.footer}>
          <Text style={styles.footerTitle}>Got an Account </Text>
          <TouchableOpacity>
            <Text style={styles.signUpButton}>Sign Up</Text>
          </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  page:{
    flex:1,
    justifyContent:'space-around'
  },
  headerBackground:{
    position:'absolute',
    top:-500,
    right:-500,
    width:1000,
    height:1000,
    backgroundColor:'#1572de',
    borderRadius:5000
  },
  mainLogo:{
    alignItems:'center',
    justifyContent:'center',
  },
  logo:{
    fontSize:36,
    color:'#f2f2f2',
    fontWeight:'bold'
  },
  logoDescription:{
    color:'#f2f2f2',
    fontSize:16
  },
  loginArea:{
    backgroundColor:'#fff',
    padding:20,
    marginHorizontal:40,
    marginBottom:20,
    borderRadius:10,
    elevation:20,
    justifyContent:'center',
  },
  loginTitle:{
    fontSize:24,
    fontWeight:'bold',
  },
  footer:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'flex-end',
  },
  footerTitle:{
    marginVertical:10
  },
  signUpButton:{
    fontWeight:'bold',
    color:'black',
    marginVertical:10
  }
});

export default Login;
