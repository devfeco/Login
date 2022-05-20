import React, { Component } from 'react';
import { View,TextInput,StyleSheet} from 'react-native';

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <TextInput 
            {...this.props}
            style={styles.Input}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
    Input:{
        height:40,
        paddingHorizontal:5,
        borderWidth:2,
        borderRadius:4,
        borderColor:'#f1f1f1',
        color:'#999',
        marginBottom:14,
        fontWeight:'600'
    }
});
