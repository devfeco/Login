import React, { Component } from 'react';
import { View, Text,StyleSheet,TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types'

export default class LoginButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>{this.props.title}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

LoginButton.PropTypes={
    title:PropTypes.string.isRequired
}

const styles = StyleSheet.create({
    button:{
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        margin:5,
        height:40,
        backgroundColor:'#1572de', 
    },
    buttonText:{
        color:'white',
        fontWeight:'bold',
        fontSize:16
    }
});
