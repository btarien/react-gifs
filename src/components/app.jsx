import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './searchbar';
import Gif from './gif';
import GifList from './giflist';

const GIPHY_API_KEY = '1KMPHCBIOe3hOjJwCJQX49sRc6cM0oIm';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGif: null
    };
  }

  search = (query) => {
    giphy({ apiKey: GIPHY_API_KEY, https: true })
      .search({
        q: query,
        rating: 'g',
        limit: 10
      }, (err, res) => {
        this.setState({
          gifs: res.data
        });
      });
  }

  selectGif = (id) => {
    this.setState({ selectedGif: id });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFxn={this.search}/>
          <Gif id={this.state.selectedGif} selected={true} selectFxn={this.selectGif}/>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectFxn={this.selectGif}/>
        </div>
      </div>
    );
  }
}

export default App;
