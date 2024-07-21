import React, { useEffect } from 'react'
import Header from './Header';
import useNowPlayingMovies from './hooks/useNowPlayingMoives';
import usePopularMovies from './hooks/usePopularMovies';
import SecondaryContainer from './SecondaryContainer';
import MainContainer from './MainContainer';
import useTopRatedMovies from './hooks/useTopRatedMovies';
import useUpComingMovies from './hooks/useUpComingMovies';

const Browse = () => {
useNowPlayingMovies();
usePopularMovies();
useTopRatedMovies();
useUpComingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;