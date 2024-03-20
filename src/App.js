//import logo from './logo.svg';
import './App.css';


import Home from './pages/Home/Home';
import Search from './components/Search/Search';
import NotFound from './pages/NotFound/NotFound';


//import SearchResults from './components/SearchResults';
import { SearchProvider } from './context/SearchContext';
import { Routes, Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <SearchProvider>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/search/:query" element={<Search/>}/>
          <Route element={<NotFound/>}/>
        </Routes>
      </SearchProvider>
      
    </div>
  );
}

export default App;
