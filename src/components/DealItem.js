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

export default class DealItem extends Component {
  static propTypes = {
    deal: PropTypes.object.isRequired,
    onPress: PropTypes.func.isRequired,
  };
  handlePress = () => {
    this.props.onPress(this.props.deal.key)
  };
  render() {
    const { deal } = this.props;
    return (
      <TouchableOpacity style={styles.card}
        onPress={this.handlePress}
      >
        <Image
          source={{uri: deal.media[0]}}
          style={styles.image}
        />
        <View style={styles.information}>
          <Text style={styles.title}>{deal.title}</Text>
          <View style={styles.footer}>
            <Text style={styles.cause}>{deal.cause.name}</Text>
            <Text style={styles.price}>{priceDisplay(deal.price)}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  card:{
    margin:10,
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
    flex:1,
  },
  title: {
    fontSize:15,
    fontWeight:'bold',
    marginBottom:5
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
  }
});
