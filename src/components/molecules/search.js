import React, { useState } from 'react';
import { StyledSearchIcon } from './styled/index'
const SearchComponent = ({ searchNews }) => {
  const [searchText, setSearchText] = useState('');
  return (
    <div className="input-group md-form form-sm form-2 pl-0">
      <input
        className="form-control my-0 py-1 red-border"
        type="text"
        placeholder="Search by keyword"
        aria-label="Search"
        onChange={(e) => setSearchText(e.target.value)}
        value={searchText}
      />
      <StyledSearchIcon>
        <span className="input-group-text red lighten-3" id="basic-text1" onClick={() => searchNews(searchText)}><i className="fas fa-search text-grey"
          aria-hidden="true"></i></span>
      </StyledSearchIcon>
    </div>
  )
}

export default SearchComponent;