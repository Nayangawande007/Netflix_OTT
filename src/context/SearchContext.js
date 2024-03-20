//  context.provider
import { createContext, useState, useContext } from "react";
import axios from "../api/axios";
import request from "../api/request";
const SearchContext = createContext();

// useContext is a hook provided by react 
// useContext(context)
// 
export const useSearch = () => {
  return useContext(SearchContext);
};

export const SearchProvider = ({children}) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [flag, setFlag] = useState(false);
  const [loading, setLoading] = useState(true);

  const search = () => {
    axios.get(`${request.search}&query=${query}`).then((response)=>{
      setResults(response.data.results);
      setFlag(true);
      setLoading(false);
    });
  };
  return(
    <SearchContext.Provider value={{query, results, flag, loading, search, setFlag, setQuery, setResults, setLoading}}>
      {children}
    </SearchContext.Provider>
  );
};