import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';


const SecondaryContainer = () => {
  
  const movies = useSelector((store) => store.movies);
  // console.log(movies);
  return (
    <div className='bg-black'>
      {movies && movies.nowPlayingMovies && (
    <div className='relative z-20 pl-6 -mt-60'>
      <MovieList title={"now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Popular"} movies={movies.popularMovies}/>
      <MovieList title={"now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"now Playing"} movies={movies.nowPlayingMovies}/>
      </div>
       )}
    </div>
    
  );
};

export default SecondaryContainer;