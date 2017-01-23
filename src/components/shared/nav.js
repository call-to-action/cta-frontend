/**
* Sample React Native App
* https://github.com/facebook/react-native
* @flow
*/

import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Nav extends Component {
    home() {
        return (
            <View  style={styles.container}>
                <TouchableOpacity onPress={this.props.toProfile}>
                    <Text>Profile</Text>
                </TouchableOpacity>
                <View>
                    <Text> Call to Action </Text>
                </View>
                <TouchableOpacity onPress={this.props.chat}>
                    <Text>Messages</Text>
                </TouchableOpacity>
            </View>
        );
    }
    profile(){
        return (
            <View  style={styles.container}>
                <View style = {{width:25, height:25, margin:10}} />
                <Image source ={require('../../assets/logo.jpg')} resizeMode = "contain" style={{width:100, height:30}} />
                <TouchableOpacity onPress ={this.props.onPress}>
                    <Image
                        source = {require('../../assets/logo.jpg')}
                        style = {{width:25, height:25, margin:10}} />
                </TouchableOpacity>
            </View>
        );
    }

    render() {
        if(this.props.type == "message") {
            return (
                <View>{this.message()}</View>
            );
        } else if (this.props.type == "profile") {
            return (
                <View>{this.profile()}</View>
            );
        } else {
            return (
                <View>{this.home()}</View>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        height:60,
        flexDirection:'row',
        paddingTop:10,
        justifyContent: 'space-between',
        alignItems:'center',
        backgroundColor: '#fff',
        borderBottomWidth:1,
        borderColor:'rgba(0,0,0,0.1)'
    },
});
