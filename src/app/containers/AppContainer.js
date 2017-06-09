import React, { Component } from 'react';

import copyToClipboard from '../lib/copyToClipboard';
import FlyAway from '../components/FlyAway';
import SearchBar from '../components/SearchBar';
import EntityList from '../components/EntityList';

import { entities } from '../data/entities.json';

export default class AppContainer extends Component {
  constructor(props) {
    super(props);

    this.handleInput = this.handleInput.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);

    this.state = {
      searchTerm: '',
      entities: entities.concat(entities),
      searchResults: entities.concat(entities),
      currentCopy: null,
      FlyAwayTarget: null,
    };
  }


  handleInput(event) {
    this.setState({
      searchTerm: event.target.value,
      searchResults: this.getEntitiesForTerm(event.target.value),
    });
  }

  getEntitiesForTerm(term) {
    if (!term) return this.state.entities;

    return this.state.entities.filter((entity) => {
      return entity.tags.indexOf(term.toLowerCase()) > -1;
    });
  }

  handleButtonClick(text, element, event) {
    copyToClipboard(text);
    this.setState({
      currentCopy: {
        stamp: new Date().getTime(),
        coords: {
          x: event.pageX,
          y: event.pageY - 40,
        },
      }
    });
  }

  render() {
    return (
      <div className="page">
        <SearchBar onChange={this.handleInput} searchTerm={this.state.searchTerm} />
        <EntityList
          entities={this.state.searchResults}
          searchTerm={this.state.searchTerm}
          onButtonClick={this.handleButtonClick}
        />
        <FlyAway currentCopy={this.state.currentCopy} />
      </div>
    );
  }
}
