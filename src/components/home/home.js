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

import { WOMENS_RIGHTS, REPRO_ISSUES } from '../../constants/categories';

import Nav from '../shared/nav'
import SwipeCards from 'react-native-swipe-cards';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Iconz from 'react-native-vector-icons/Ionicons';

const Cards = [
    {
        title: 'A new bill that would ban abortions.',
        description: 'Banning abortions would lead to dangerous practices for people in need',
        actionItem: 'Call your representatives to tell them you do not support this bill',
        phoneNumber: '2158576870',
        categories: [WOMENS_RIGHTS, REPRO_ISSUES],
        creatorId: 'id_1',
    },
    {
        title: 'A new bill that would ban organizing.',
        description: 'Protesting is a right defined in the constitution',
        actionItem: 'Call your representatives to tell them you do not support this bill',
        phoneNumber: '2158576870',
        categories: [REPRO_ISSUES],
        creatorId: 'id_2',
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
                <View style={{width:350, height:70, alignItems:'center', justifyContent:'space-between'}}>
                    <View style={{ margin:15, marginTop:25,}} >
                        <Text style={{fontSize:14, fontWeight:'300', color:'#444'}}>
                            {x.title},
                        </Text>
                        <Text style={{fontSize:12, fontWeight:'200', color:'#444'}}>
                            {x.description}
                        </Text>
                        <Text style={{fontSize:12, fontWeight:'200', color:'#444'}}>
                            {x.actionItems}
                        </Text>
                    </View>
                    <View style={{padding:13, alignItems:'center', justifyContent:'space-between'}}>
                        <Icon name='people-outline' size={20} color="#777" style={{}} />
                        <Text style={{fontSize:16, fontWeight:'200', color:'#555'}}>
                            {x.phoneNumber}
                        </Text>
                    </View>
                    <View style={{padding:13, alignItems:'center', justifyContent:'space-between'}}>
                        <Icon name='import-contacts' size={20} color="#777" />
                        <Text style={{fontSize:16, fontWeight:'200', color:'#555'}}>
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
                    <TouchableOpacity style = {styles.buttons} onPress = {() => this.nope()}>
                        <Text> Ignore! </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.buttonSmall}>
                        <Text> Save </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.buttons} onPress = {() => this.yup()}>
                        <Text> Done! </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
// Home.propTypes = {
//     cards: React.PropTypes.array,
// };

// const mapStateToProps = state => ({
//     cards: state.cards.upcomingCards,
// });

// export default connect(
//     mapStateToProps,
//     undefined
// )(Home);

//onPress = {() => this.renderNope()} 

const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: '#f7f7f7',
    },
    buttons:{
        width:80, 
        height:80, 
        borderWidth:10, 
        borderColor:'#e7e7e7', 
        justifyContent:'center', 
        alignItems:'center',
        borderRadius:40
    },
    buttonSmall:{
        width:50, 
        height:50, 
        borderWidth:10, 
        borderColor:'#e7e7e7', 
        justifyContent:'center', 
        alignItems:'center',
        borderRadius:25
    },
    card: {
        flex: 1,
        alignItems: 'center',
        alignSelf:'center',
        borderWidth:2,
        borderColor:'#e3e3e3',
        width: 350,
        height: 200,
    }

});
