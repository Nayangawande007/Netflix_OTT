
import Row from "../Row";
import { useSearch } from "../../context/SearchContext";
import request from "../../api/request";
import Banner from "../Banner";


function Main() {
  const { flag } = useSearch();
     
  return (
    flag ? (<div></div>) :(
      <div>
      <Banner />
      <Row title="Netflix Orignals" isLargeRow fetchUrl={request.fetchNetflixOriginals}/>
      <Row title="Trending" fetchUrl={request.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={request.fetchTopRated}/>
      <Row title="Action Movie" fetchUrl={request.fetchActionMovies}/>
      <Row title="Comedy Movie" fetchUrl={request.fetchComedyMovies}/>
      <Row title="Horror Movie" fetchUrl={request.fetchHorrorMovies}/>
      <Row title="Romance Movie" fetchUrl={request.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl={request.fetchDocumentaries}/>
      </div>)
  )
}

export default Main
