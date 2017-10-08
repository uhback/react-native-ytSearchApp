/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import YTSearch from 'youtube-api-search';
import AppHeader from './components/AppHeader';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';


const API_KEY = 'AIzaSyBt-NLGpoCnJEDhHMgL3TuyJA5mFmNkocI';

export default class App extends Component {
  // same as constructor() { super(props); }
  state = {
    loading: false,
    videos: []
  }

  // Initial search configuration
  componentWillMount() {
    this.searchYT('Barry Michal Doyle');
  }

  // Search button action
  onPressSearch = term => {
    this.searchYT(term);
  }

  // get the video objects from Youtube
  searchYT = term => {
    this.setState({ loading: true });
    YTSearch({ key: API_KEY, term }, videos => { // add video object
      console.log(videos);
      this.setState({ 
        loading: false,
        videos });
    });
  }
  
  render() {
    const { loading, videos } = this.state;
    
    return (
      // whole screen
      <View style={{ flex: 1, backgroundColor: '#ddd' }} >
        <AppHeader headerText="Simple Movie Search" />
        <SearchBar 
          loading={loading}
          onPressSearch={this.onPressSearch} 
        />

        <VideoList videos={videos} />
      </View>
    );
  }
}
