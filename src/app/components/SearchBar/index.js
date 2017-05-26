import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './style.scss';

const SearchBar = function(props) {
  const { searchTerm, onChange } = props;

  return (
    <div styleName="search-bar-container">
      <input styleName="search-bar-input" placeholder="Search..." type="text" value={searchTerm} onChange={onChange}/>
    </div>
  );
}

export default CSSModules(SearchBar, styles);
