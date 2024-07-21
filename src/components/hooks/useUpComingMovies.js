import { useEffect } from "react";
import { API_OPTIONS } from "../../utils/constants";
import {  addUpComingMovies } from "../../utils/movieSlice";
import { useDispatch } from "react-redux";

const useUpComingMovies = () => {
    const dispatch = useDispatch();
    const getUpComingMovies =  async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', 
      API_OPTIONS);
      const json = await data.json();
      console.log(json.results);
      console.log("hello");
      dispatch(addUpComingMovies(json.results));
    }
    useEffect(() => {
        getUpComingMovies();
    }, [])
}

export default useUpComingMovies;