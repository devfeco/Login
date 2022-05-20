import React, { Component } from 'react';
import { View, Text,StyleSheet, } from 'react-native';
import Input from '../../components/Input';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text style={styles.signIn}> Sign In </Text>
        <Input autoCapitalize='none' placeholder='Username'/>
        <Input secureTextEntry={true} placeholder='Password'/>
      </View>
    );
  }
  
}
const styles = StyleSheet.create({
    signIn:{
        marginVertical:10,
        fontSize:18,
        color:'#333'
    },
});
