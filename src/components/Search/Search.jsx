import {useState, useContext} from "react";

import './Search.css';

import { useSearch } from "../../context/SearchContext";

import { useNavigate } from 'react-router-dom';


function Search(){

  const {search, flag, query, setFlag, setQuery,setResults} = useSearch();
  const navigate = useNavigate();  
  
  const handleChange = (e) => {
    setQuery(e.target.value);
  };


  const cancelSearch = () => {
    setFlag(false);
    setQuery("");

    setResults([]);
    navigate("/");
  };

  
  const handleSubmit = () => {
    console.log(query);
    if(query) {
     
      search();
      navigate(`/search/${encodeURIComponent(query)}`);
    }
  };
    

 
  
  return(
        <div className="Search-form">
            <input
              type="text"
              value={query}
              onChange={handleChange}
              placeholder="Search for movies"
              className="search-input"
            />

            {flag && (<button type="button" className="cancel-button" onClick={cancelSearch}>X</button>)}
            {!flag && (<button type="button" className="search-button" onClick={handleSubmit}>Search</button>)}
        </div>
    );

}

export default Search;