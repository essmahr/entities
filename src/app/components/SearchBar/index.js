import React from 'react';

const SearchBar = function(props) {
  const { searchTerm, onChange } = props;

  return (
    <div className="search-bar">
      <input type="text" value={searchTerm} onChange={onChange}/>
    </div>
  );
}

export default SearchBar;
