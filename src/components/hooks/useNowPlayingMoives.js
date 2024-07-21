import { useEffect } from "react";
import { API_OPTIONS } from "../../utils/constants";
import { addNowPlayingMovies } from "../../utils/movieSlice";
import { useDispatch } from "react-redux";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const getNowPlayingMovies =  async () => {
      const data = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', API_OPTIONS);
      const json = await data.json();
    //   console.log(json.results);
      dispatch(addNowPlayingMovies(json.results));
    }
    useEffect(() => {
      getNowPlayingMovies();
    }, [])
}

export default useNowPlayingMovies;