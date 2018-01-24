/* @flow */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';

import { priceDisplay } from '../util';
import ajax from '../ajax';

export default class DealDetail extends Component {
  static propTypes = {
    initialDealData: PropTypes.object.isRequired,
    onBack: PropTypes.func.isRequired,
  };
  state = {
    deal: this.props.initialDealData,
  };
  async componentDidMount() {
    const fullDeal = await ajax.fetchDealDetail(this.state.deal.key);
    this.setState({
      deal: fullDeal,
    });
  }
  render() {
    const { deal } = this.state;
    const backKey = "< Back";
    return (
      <View style={styles.card}>
        <TouchableOpacity onPress={this.props.onBack}>
          <Text style={styles.backButton}>{backKey}</Text>
        </TouchableOpacity>
        <Image
          source={{uri: deal.media[0]}}
          style={styles.image}
        />
        <View style={styles.information}>
          <View style={styles.topBar}>
            <Text style={styles.title}>{deal.title}</Text>
            <View style={styles.footer}>
              <Text style={styles.cause}>{deal.cause.name}</Text>
              <Text style={styles.price}>{priceDisplay(deal.price)}</Text>
            </View>
          </View>
          <View style={styles.detailInfo}>
            { deal.user && (
            <View style={styles.userProfile}>
              <Image source={{uri: deal.user.avatar}} style={styles.avatar} />
              <Text style={styles.username}>{deal.user.name}</Text>
            </View>
            )}
            <View style={styles.detailDescription}>
              <Text>{deal.description}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card:{
    margin:10,
  },
  backButton: {
    marginBottom:10,
  },
  image: {
    width:'100%',
    height:150
  },
  information:{
    padding:10,
    backgroundColor:'white',
    borderColor:'#bbb',
    borderWidth:1,
    borderTopWidth:0,
  },
  title: {
    fontSize:15,
    fontWeight:'bold',
    marginBottom:5
  },
  topBar: {
    paddingBottom:30,
    borderBottomWidth:1,
    borderColor:'#bbb',
  },
  footer: {
    flexDirection:'row'
  },
  price: {
    flex:2,
    textAlign:'right'
  },
  cause: {
    flex:1,
    fontStyle:'italic',
  },
  avatar: {
    borderRadius:30,
    width:60,
    height:60,
    alignSelf:'center',
  },
  detailInfo: {
    flexDirection:'row',
    marginTop:30,
  },
  userProfile: {
    flex:1,
    marginRight:10,
  },
  username: {
    textAlign:'center',
  },
  detailDescription: {
    flex:2,
  },
});
