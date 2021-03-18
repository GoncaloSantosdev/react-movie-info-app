import React, {useState, useEffect} from 'react';
// Components
import Nav from './components/Nav';
import MovieList from './components/MovieList';
import SingleMovie from './components/SingleMovie';
import Footer from './components/Footer';
// Styles
import './styles/styles.scss';
// React Router
import { Switch, Route } from 'react-router-dom';
// Axios 
import axios from 'axios';

function App() {
  const [movieList, setMovieList] = useState([]);
  const [searchBar, setSearchBar] = useState('');
  
  useEffect(() => {
      axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MOVIES_KEY}&language=en-US&sort_by=popularity.desc&page=1`)
      .then(data => {
          setMovieList(data.data.results);
          console.log(data.data.results);
      }).catch(err => console.log(err));
  }, []);

// Event 
const searchInput = (e) => {
  setSearchBar(e.target.value);
}

const handleSearchInput = () => {
  axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIES_KEY}&language=en-US&query=${searchBar}&page=1`) 
  .then(data => {
    setMovieList(data.data.results);
  }).catch(err => console.log(err));
}
  

  return (
    <>
    <Nav searchBar={searchBar} setSearchBar={setSearchBar} searchInput={searchInput} handleSearchInput={handleSearchInput}/>
    <Switch >
      <Route path="/" exact>
        <MovieList movieList={movieList} setMovieList={setMovieList}/>
      </Route>
      <Route path="/movies/:original_title" exact>
        <SingleMovie movieList={movieList} setMovieList={setMovieList}/>
      </Route>
    </Switch>
    <Footer />
    </>
  );
}

export default App;
