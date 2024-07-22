import React from 'react'
import Header from './Header';
import useNowPlayingMovies from './hooks/useNowPlayingMoives';
import usePopularMovies from './hooks/usePopularMovies';
import SecondaryContainer from './SecondaryContainer';
import MainContainer from './MainContainer';
import useTopRatedMovies from './hooks/useTopRatedMovies';
import useUpComingMovies from './hooks/useUpComingMovies';
import { useSelector } from 'react-redux';
import GptSearch from './GptSearch';

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt?.showGptSearch);
useNowPlayingMovies();
usePopularMovies();
useTopRatedMovies();
useUpComingMovies();

  return (
    <div>
      <Header />
      {
        showGptSearch ? ( 
        <GptSearch /> 
        ):( 
        <>
        <MainContainer />
        <SecondaryContainer />
      </>
     ) }
      
    </div>
  );
};

export default Browse;