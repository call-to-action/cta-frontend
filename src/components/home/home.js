import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'underscore';
import {
    StyleSheet,
    Image,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import { CIVIL_RIGHTS, WOMENS_RIGHTS, REPRO_ISSUES } from '../../constants/categories';

import Nav from '../shared/nav'
import SwipeCards from 'react-native-swipe-cards';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Iconz from 'react-native-vector-icons/Ionicons';


export default class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            cards: []
        }
    }
    componentDidMount() {
        return fetch('https://cta-backend.herokuapp.com/cta/')
            .then(response => {
                const json = JSON.parse(response._bodyText);
                console.log(json)
                this.setState({ cards: json })
            });
    }
    Card (x) {
        let categoryStr = '';
        _.each(x.categories, category => {
            categoryStr += category +', '
        });
        return (
            <View
                style={ styles.card }>
                <Text> Posted by {x.created_by } </Text>
                <View style={{width:350, alignItems:'center', justifyContent:'space-between'}}>
                    <View style={{ margin:15, marginTop:25, alignItems: 'center'}} >
                        <Text style={{fontSize:18, fontWeight:'bold', color:'#444'}}>
                            {x.title}
                        </Text>
                        <Text style={{fontSize:14, alignItems:'center', marginTop: 10, fontWeight:'200', color:'#444'}}>
                            {x.description}
                        </Text>
                        <Text style={{fontSize:14, alignItems:'center', marginTop: 10, fontWeight:'200', color:'#444'}}>
                            {x.action_item}
                        </Text>
                    </View>
                    <View style={{padding:13, alignItems:'center', justifyContent:'space-between'}}>
                        <Text style={{fontSize:14, fontWeight:'bold', color:'#555'}}>
                            {x.phone}
                        </Text>
                    </View>
                    <View style={{padding:13, alignItems:'center', justifyContent:'space-between'}}>
                        <Text style={{fontSize:14, fontWeight:'200', color:'#555'}}>
                            { categoryStr }
                        </Text>
                    </View>
                </View>
            </View>
        )
    }
    handleYup (card) {
        console.log(`Acted On for ${card.text}`)
    }

    handleNope (card) {
        console.log(`Ignore for ${card.text}`)
    }
    noMore(){
        return (
            <View style={styles.card} >
                <Text>No More Cards</Text>
            </View>
        );
    }

    yup(){
        this.refs['swiper']._goToNextCard()
    }

    nope(){
        this.refs['swiper']._goToNextCard()
    }

    render() {
        return (
            <View style={styles.container}>
                <Nav
                    chat = {() => this.props.navigator.replace({id: "messages"})}
                    toProfile = {() => this.props.navigator.replace({id:'profile'})} />
                <SwipeCards
                    ref = {'swiper'}
                    cards={this.state.cards}
                    containerStyle = {{  backgroundColor: '#f7f7f7', alignItems:'center', margin:20}}
                    renderCard={(cardData) => this.Card(cardData)}
                    renderNoMoreCards={() => this.noMore()}
                    handleYup={ this.handleYup }
                    yupText="Acted on"
                    handleNope={ this.handleNope }
                    nopeText="Ignored"/>
                <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                    <TouchableOpacity style = {styles.buttonNo} onPress = {() => this.nope()}>
                        <Text style={{ color: "#fff" }}>
                            Ignore!
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.buttonSmall}>
                        <Text> Save </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.buttonYes} onPress = {() => this.yup()}>
                        <Text style={{ color: "#fff" }}>
                            Done!
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: '#f7f7f7',
    },
    buttonNo:{
        width:100, 
        height:100, 
        margin: 10,
        backgroundColor:'#B81F1F',
        borderWidth:1, 
        borderColor:'#B81F1F', 
        justifyContent:'center', 
        alignItems:'center',
        borderRadius:50
    },
    buttonYes:{
        width:100, 
        height:100, 
        margin: 10,
        backgroundColor: '#7DA360',
        borderWidth:1, 
        borderColor:'#7DA360', 
        justifyContent:'center', 
        alignItems:'center',
        borderRadius:50
    },
    buttonSmall:{
        width:70, 
        height:70,
        margin: 10,
        borderWidth: 2, 
        borderColor:'#e7e7e7', 
        justifyContent:'center', 
        alignItems:'center',
        borderRadius:10
    },
    card: {
        alignItems: 'center',
        alignSelf:'center',
        backgroundColor: '#E3F6FF',
        borderWidth:2,
        borderColor:'#068DBA',
        padding: 10,
        width: 350,
        height: 400,
    }

});
