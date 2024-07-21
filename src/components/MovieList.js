import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
  // console.log(movies);

  return (
    <div className='px-6 text-white'>
      <h1 className='py-4 font-bold text-x'>{title}</h1>
      <div className='flex overflow-x-scroll'>
        <div className='flex'>
          {Array.isArray(movies) ? (
            movies.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            ))
          ) : (
            <p>No movies available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieList;

