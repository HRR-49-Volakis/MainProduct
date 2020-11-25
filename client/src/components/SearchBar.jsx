import React from 'react';
import SearchButton from './SearchButton.jsx';
import SearchInput from './SearchInput.jsx';

var SearchBar = function(props) {
  return (
    <div id='searchBar'>
      <SearchButton />
      <SearchInput />
    </div>
  );
};

export default SearchBar;