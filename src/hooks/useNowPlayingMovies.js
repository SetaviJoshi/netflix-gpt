import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constantss";
import { addNowPlayingMovies } from "../utils/movieSlice";
//hooks normal js function
const useNowPlayingMovies = () =>{
    const dispatch = useDispatch();
 
//fetching movie data 
const getNowPlayingMovies = async () => {
  const data = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing?page=1",
    API_OPTIONS
  );
  const json = await data.json();
  //console.log(json.results);
 dispatch(addNowPlayingMovies(json.results));
};

useEffect(() => {
getNowPlayingMovies();
}, []);

};

export default useNowPlayingMovies;
