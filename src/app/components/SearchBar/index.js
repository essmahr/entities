import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './style.scss';

class SearchBar extends Component {
	componentDidMount() {
		this.input.focus();
	}

	render() {
	  return (
	    <div styleName="search-bar-container">
	      <input
	      	styleName="search-bar-input"
	      	placeholder="Search..."
	      	type="text"
	      	ref={el => this.input = el}
	      	onChange={this.props.onChange}
	      />
	    </div>
	  );
	}
}

export default CSSModules(SearchBar, styles);
