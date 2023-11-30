import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constantss";
import { useEffect } from "react";
import { addTrailerVideo } from "../utils/movieSlice";
const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
 
    //const [trailerId,setTrailerId] = useState(null);
    const getMoviesVideos = async () => {
      const data = await fetch ("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",API_OPTIONS);
      const json = await data.json();
    //  console.log(json);
  
      const filterData = json.results.filter((video)=> video.type === "Trailer");
      const trailer = filterData.length ? filterData[0] : json.results[0]; 
     // console.log(trailer);
      dispatch(addTrailerVideo(trailer));
      
      //setTrailerId(trailer.key);
    };
  
    useEffect(() =>{
        getMoviesVideos();
    }, []);
};
export default useMovieTrailer;