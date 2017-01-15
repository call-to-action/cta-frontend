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

const Cards = [
    {
        title: 'A new bill that would ban abortions.',
        description: 'Banning abortions would lead to dangerous practices for people in need',
        actionItem: 'Call your representatives to tell them you do not support this bill',
        phoneNumber: '(202) 857-6870',
        categories: [WOMENS_RIGHTS, REPRO_ISSUES],
        createdBy: 'sashav@gmail.com',
    },
    {
        title: 'A new bill that would ban organizing.',
        description: 'Protesting is a right defined in the constitution',
        actionItem: 'Call your representatives to tell them you do not support this bill',
        phoneNumber: '(202) 687-3020',
        categories: [CIVIL_RIGHTS],
        createdBy: 'mwm@cta.com',
    }
];


export default class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            cards: Cards
        }
    }
    Card (x) {
        let categoryStr = '';
        _.each(x.categories, category => {
            categoryStr += category +', '
        });
        return (
            <View
                style={ styles.card }>
                <Text> Posted by {x.createdBy } </Text>
                <View style={{width:350, alignItems:'center', justifyContent:'space-between'}}>
                    <View style={{ margin:15, marginTop:25, alignItems: 'center'}} >
                        <Text style={{fontSize:18, fontWeight:'300', color:'#444'}}>
                            {x.title},
                        </Text>
                        <Text style={{fontSize:16, alignItems:'center', marginTop: 10, fontWeight:'200', color:'#444'}}>
                            {x.description}
                        </Text>
                        <Text style={{fontSize:16, alignItems:'center', marginTop: 10, fontWeight:'200', color:'#444'}}>
                            {x.actionItem}
                        </Text>
                    </View>
                    <View style={{padding:13, alignItems:'center', justifyContent:'space-between'}}>
                        <Text style={{fontSize:16, fontWeight:'200', color:'#555'}}>
                            {x.phoneNumber}
                        </Text>
                    </View>
                    <View style={{padding:13, alignItems:'center', justifyContent:'space-between'}}>
                        <Text style={{fontSize:12, fontWeight:'200', color:'#555'}}>
                            { categoryStr }
                        </Text>
                    </View>
                </View>
            </View>
        )
    }
    handleYup (card) {
        console.log(`Yup for ${card.text}`)
    }

    handleNope (card) {
        console.log(`Nope for ${card.text}`)
    }
    noMore(){
        return (
            <View style={styles.card} >
                <Text>No More Cards</Text>
            </View>
            )
    }

    yup(){
        console.log(this.refs['swiper'])
        this.refs['swiper']._goToNextCard()
    }

    nope(){
        console.log(this.refs['swiper'])
        this.refs['swiper']._goToNextCard()
    }

    render() {
        return (
            <View style={styles.container}>
                <Nav chat = {() => this.props.navigator.replace({id: "messages"})} toProfile = {() => this.props.navigator.replace({id:'profile'})} />
                <SwipeCards
                    ref = {'swiper'}
                    cards={this.state.cards}
                    containerStyle = {{  backgroundColor: '#f7f7f7', alignItems:'center', margin:20}}
                    renderCard={(cardData) => this.Card(cardData)}
                    renderNoMoreCards={() => this.noMore()}
                    handleYup={this.handleYup}
                    handleNope={this.handleNope} />
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
        borderRadius:40
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
        borderRadius:40
    },
    buttonSmall:{
        width:70, 
        height:70,
        margin: 10,
        borderWidth: 2, 
        borderColor:'#e7e7e7', 
        justifyContent:'center', 
        alignItems:'center',
        borderRadius:25
    },
    card: {
        alignItems: 'center',
        alignSelf:'center',
        borderWidth:2,
        borderColor:'#068DBA',
        padding: 10,
        width: 350,
        height: 300,
    }

});
