import React from 'react';

const SearchBar = function(props) {
  const { searchTerm, onChange } = props;

  return (
    <div className="search-bar-container">
      <input className="search-bar-input" placeholder="Search..." type="text" value={searchTerm} onChange={onChange}/>
    </div>
  );
}

export default SearchBar;
