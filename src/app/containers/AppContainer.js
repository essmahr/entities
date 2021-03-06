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

    this.handleInput = this.handleInput.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.setSearch = debounce(this.setSearch.bind(this), 200);

    this.state = {
      searchTerm: '',
      entities,
      searchResults: entities,
    };
  }

  handleInput(event) {
    const term = event.target.value;
    this.setSearch(term);
  }

  setSearch(searchTerm) {
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
