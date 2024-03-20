import {useSearch}  from '../../context/SearchContext';
import './SearchResults.css'
function SearchResults() {
  const {results, flag, loading} = useSearch();
  const base_url = "https://image.tmdb.org/t/p/original"
  //console.log(results, flag);
  
  return(
    <div className='search-results'>
      {loading && <p>loading...</p>}
      {flag && results.map((movie) => {
        return(        
          <div key={movie.id} className="movie-card">
            <img src={`${base_url}${movie.poster_path}`} alt={movie.title} className="movie-poster" />
          </div>
        )

      })}
    </div>
  )

}

export default SearchResults;
