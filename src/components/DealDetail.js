/* @flow */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  PanResponder,
  Animated,
  ScrollView,
  Dimensions
} from 'react-native';

import { priceDisplay } from '../util';
import ajax from '../ajax';

export default class DealDetail extends Component {
  // detailXPos = new Animatd.Value(0);
  imageXPos = new Animated.Value(0);

  // detailPanResponder = PanResponder.create({
  //   onStartShouldSetPanResponder: () => true,
  //   onPanResponderMove: (evt, gs) => {
  //     this.detailXPos.setValue(gs.dx);
  //   },
  //   onPanResponderRelease: (evt, gs) => {
  //     if (Math.abs(gs.dx) > screenWidth * 0.4) {
  //       const direction = Math.sign(gs.dx);
  //       Animated.timing(this.detailXPos, {
  //         toValue: direction * screenWidth
  //         duration:250,
  //       }).start(() => {this.props.onSwipe});
  //     } else {
  //       Animated.spring(this.detailXPos, {
  //         toValue:0
  //       }).start();
  //     }
  //   }
  // });

  imagePanResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (evt, gs) => {
      this.imageXPos.setValue(gs.dx);
    },
    onPanResponderRelease: (evt,gs) => {
      this.width = Dimensions.get('window').width;
      if (Math.abs(gs.dx) > this.width * 0.4) {
        const direction = Math.sign(gs.dx);
        // -1 = swipe left, 1 = swipe right
        Animated.timing(this.imageXPos, {
          toValue: direction * this.width,
          duration: 250,
        }).start(() => this.handleImageSwipe(-1 * direction));
      } else {
        Animated.spring(this.imageXPos, {
          toValue:0
        }).start();
      }
    }
  });

  /*handleDetailSwipe = (indexDirection) => {
    this.setState((prevState) => ({
      imageIndex:prevState.imageIndex + indexDirection
    }), () => {
      // Next image animation
      this.imageXPos.setValue(indexDirection * this.width);
      Animated.spring(this.imageXPos, {
        toValue:0
      }).start();
    });
  }*/

  handleImageSwipe = (indexDirection) => {
    this.width = Dimensions.get('window').width;
    if (!this.state.deal.media[this.state.imageIndex + indexDirection]) {
      Animated.spring(this.imageXPos, {
        toValue:0
      }).start();
      return;
    }
    this.setState((prevState) => ({
      imageIndex:prevState.imageIndex + indexDirection
    }), () => {
      // Next image animation
      this.imageXPos.setValue(indexDirection * this.width);
      Animated.spring(this.imageXPos, {
        toValue:0
      }).start();
    });
  }

  static propTypes = {
    initialDealData: PropTypes.object.isRequired,
    onBack: PropTypes.func.isRequired,
    onSwipe: PropTypes.func.isRequired,
  };
  state = {
    deal: this.props.initialDealData,
    imageIndex:0,
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
      <ScrollView style={styles.card}>
        <TouchableOpacity onPress={this.props.onBack}>
          <Text style={styles.backButton}>{backKey}</Text>
        </TouchableOpacity>
        <Animated.Image
          {...this.imagePanResponder.panHandlers}
          source={{uri: deal.media[this.state.imageIndex]}}
          style={[{ left:this.imageXPos }, styles.image]}
        />
        <View
          style={styles.information}
        >
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
      </ScrollView>
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
