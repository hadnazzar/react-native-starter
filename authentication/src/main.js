import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyDx6l46k6hY1P-7RRsd7HdR9ivI7-Pa9Lo",
    authDomain: "authentication-6eb0f.firebaseapp.com",
    databaseURL: "https://authentication-6eb0f.firebaseio.com",
    projectId: "authentication-6eb0f",
    storageBucket: "",
    messagingSenderId: "93980369476"
};

var Signin = require('./components/authentication/signin')
const firebaseApp = firebase.initializeApp(firebaseConfig);

module.exports = React.createClass({
    componentWillMount: function () {

    },
    render: function () {
        return (
            <View style={styles.container}>
                <Signin />
            </View>
        )
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})