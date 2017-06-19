import React, { Component } from 'react';
import debounce from 'just-debounce';

import copyToClipboard from '../lib/copyToClipboard';
import fireFlyaway from '../lib/fireFlyaway';
import SearchBar from '../components/SearchBar';
import EntityList from '../components/EntityList';
import Footer from '../components/Footer';

import styles from '../style/global.scss';
import entities from '../data/entities.json';

export default class AppContainer extends Component {
  constructor(props) {
    super(props);

    this.handleInput = debounce(this.handleInput.bind(this), 200, true);

    this.handleButtonClick = this.handleButtonClick.bind(this);

    this.state = {
      searchTerm: '',
      entities,
      searchResults: entities,
      currentCopy: null,
      FlyAwayTarget: null,
    };
  }


  handleInput(event) {
    const searchTerm = event.target.value;
    this.setState({
      searchTerm,
      searchResults: this.getEntitiesForTerm(searchTerm),
    });
  }

  getEntitiesForTerm(term) {
    if (!term) return this.state.entities;
    const searchResults = [];

    for (let i = 0; i < this.state.entities.length; i++) {
      const entity = this.state.entities[i];

      if (entity.tags.indexOf(term.toLowerCase()) > -1) {
        searchResults.push(entity);
      }
    }

    return searchResults;
  }

  handleButtonClick(text, element, event) {
    const timeStamp = new Date().getTime();
    copyToClipboard(text);
    fireFlyaway({
      position: {
        x: event.clientX,
        y: event.clientY - 40,
      }
    });
  }

  render() {
    return (
      <div className={styles.page}>
        <SearchBar onChange={this.handleInput} searchTerm={this.state.searchTerm} />
        <EntityList
          entities={this.state.searchResults}
          searchTerm={this.state.searchTerm}
          onButtonClick={this.handleButtonClick}
        />
        <Footer />
      </div>
    );
  }
}
