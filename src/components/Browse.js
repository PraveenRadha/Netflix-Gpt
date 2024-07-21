import React, { useEffect } from 'react'
import Header from './Header';
import useNowPlayingMovies from './hooks/useNowPlayingMoives';
import usePopularMovies from './hooks/usePopularMovies';
import SecondaryContainer from './SecondaryContainer';
import MainContainer from './MainContainer';

const Browse = () => {
useNowPlayingMovies();
usePopularMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;