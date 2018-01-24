import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import ajax from '../ajax';
import DealList from './DealList';
import DealDetail from './DealDetail';
import SearchBar from './SearchBar';

export default class App extends Component {
  state = {
    deals: [],
    dealsFromSearch: [],
    currentDealId:null
  };
  async componentDidMount() {
      const deals = await ajax.fetchInitialDeals();
      this.setState({ deals });
  }

  searchDeals = async (searchTerm) => {
      let dealsFromSeach = [];
      if (searchTerm) {
        dealsFromSearch = await ajax.fetchDealsSearchResults(searchTerm);
      }
      this.setState({dealsFromSeach});
  };

  setCurrentDeal = (dealId) => {
    this.setState({
      currentDealId: dealId
    });
  };

  unsetCurrentDeal = () => {
    this.setState({
      currentDealId: null
    });
  };

  currentDeal = () => {
    return this.state.deals.find(
      (deal) => deal.key === this.state.currentDealId
    );
  };

  render() {
    if (this.state.currentDealId) {
      return (
        <View style={styles.main}>
          <DealDetail
            initialDealData={this.currentDeal()}
            onBack={this.unsetCurrentDeal}
          />
        </View>
      );
    }
    if (this.state.deals.length > 0) {
      return (
        <View style={styles.main}>
          <SearchBar searchDeals={this.searchDeals} />
          <DealList deals={this.state.deals} onItemPress={this.setCurrentDeal}/>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <Text>BakeSale</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
  },
  main: {
    marginTop:30,
  },
  header: {
    fontSize:40
  },
});
