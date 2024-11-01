import React from 'react';
 
function SearchBar({ darkMode, searchKeyword, onSearch }) {
 return (
   <div className="searchbar">
    {darkMode 
      ? <img className="toggle-img" src="public/img/search-regular-24.png"/> 
      : <img className="toggle-img" src="public/img/search-regular-24 (2).png"/> 
    }
    <input type="text" placeholder='Search' value={searchKeyword} onChange={onSearch}/>
   </div>
 );
}
 
export default SearchBar;