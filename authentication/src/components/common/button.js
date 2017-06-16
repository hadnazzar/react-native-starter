import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight
} from 'react-native';

module.exports = React.createClass({
    render: function(){
        return(
            <TouchableHighlight style={styles.button}
            underlayColor={'gray'}
            onPress={this.props.onPress}>    
                <Text style={styles.buttonText}>
                    {this.props.text}
                </Text>
            </TouchableHighlight>
        );
    }
})

var styles = StyleSheet.create({
    button:{
        justifyContent:'center',
        alignItems: 'center',
        borderWidth:1,
        borderRadius:5,
        padding:5,
        borderColor:'black',
        marginTop:10
    },
    buttonText:{
        alignSelf:'center'
    }
})