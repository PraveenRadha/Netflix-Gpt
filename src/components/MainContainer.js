import React from 'react';
import { useSelector } from 'react-redux';
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  
  // Handle cases where movies is undefined or not an array
  if (!movies || movies.length === 0) {
    return <div>Loading...</div>;
  }

  const mainMovie = movies[0]; // Get the first movie from the array

  // Handle cases where mainMovie might be undefined
  if (!mainMovie) {
    return <div>No movie available</div>;
  }

  // Destructure properties from mainMovie
  const { original_title, overview, id } = mainMovie;

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
