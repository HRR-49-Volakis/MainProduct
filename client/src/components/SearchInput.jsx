import React from 'react';

var SearchInput = function(props) {
  return (
    <input type='search' name='q' maxlength='150' className='searchField' spellcheck='false' aria-label='Search by product' aria-placeholder='Search by product' placeholder='What are you looking for?' autocapitalize='off' autocomplete='off' autocorrect='off'></input>
  );
};

export default SearchInput;