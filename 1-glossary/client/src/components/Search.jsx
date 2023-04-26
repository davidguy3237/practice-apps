import React from 'react';

const Search = ({setSearch}) => {
  return (
    <div className='search'>
      <input type='search' id='search-bar' placeholder='Search...'
      onChange={e => {setSearch(e.target.value)}}/>
    </div>
  );
}

export default Search;