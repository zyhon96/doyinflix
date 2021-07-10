import { useState, useEffect } from 'react';
import './App.css';
import './index.css';
import Header from './Header';
import Film from './Film';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await fetch("https://yts.mx/api/v2/list_movies.json");
      const result = await request.json()
      setMovies(result.data.movies)
    }
    fetchData()
  }, [])


  return (
    <div className="app">
      <Header movies={movies} setMovies={setMovies} />
      <Film movies = {movies}/>
    </div>
  );
}

export default App;
