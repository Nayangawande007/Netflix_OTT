import React from 'react';
import axios from "../../api/axios";
//import request from '../../api/request';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import { useState, useEffect } from 'react';
import "./Row.css";

axios.defaults.baseURL = 'https://api.themoviedb.org/3'

const base_url = "https://image.tmdb.org/t/p/original"

function Row({title,fetchUrl,isLargeRow}) {
    //let response = [];
    let [movies, setMovies] = useState([]);
    let [trailerUrl, setTrailerUrl] = useState("");
    //console.log(request.fetchTrending);
    
    useEffect(() => {
      axios.get(fetchUrl).then((response) => {
      console.log(response.data.results);
      
      setMovies(response.data.results);
    })
    
    },[])


    let handleClick = (movie) => {
      if(trailerUrl) {
        setTrailerUrl('');
      } else {
        movieTrailer(movie.title || movie.name || '').
        then( url => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v'));
        }).catch((error) => console.log(error));
      }
    }

    const opts = {
      height:"390",
      width:"99%",
      playerVars: {
      autoplay:0,
      },
    }
    
    

  return (
    <div className="row">
        <h2>
          {title}
        </h2>
        
        
      <div className="row_posters">
        {
          movies.map((item) => {
            return (
              <img
               className={`row_poster ${isLargeRow && "row_posterLarge"}`}
               src={`${base_url}${item.poster_path}`}
               onClick={()=> handleClick(item)} 
               alt={item.name}
               />)
          })
        }
      </div>
      <div>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}

      </div>  
    </div>
  )
}

export default Row
