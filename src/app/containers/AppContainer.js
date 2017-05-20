import React, { Component } from 'react';

import SearchBar from '../components/SearchBar';
import EntityList from '../components/EntityList';

import { entities } from '../data/entities.json';

export default class AppContainer extends Component {
  constructor(props) {
    super(props);

    this.handleInput = this.handleInput.bind(this);

    this.state = {
      searchTerm: '',
      entities,
    };
  }

  handleInput(event) {
    this.setState({
      searchTerm: event.target.value,
    });
  }

  render() {
    return (
      <div className="page">
        <SearchBar onChange={this.handleInput} searchTerm={this.state.searchTerm} />
        <EntityList entities={this.state.entities} searchTerm={this.state.searchTerm} />
      </div>
    );
  }
}
