

import Header from './Header';
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies"
import useTopRatedMovies from '../hooks/useTopRatedMovies';
const Brouse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
 
    return (
    <div><Header />
    <MainContainer/>
    <SecondaryContainer/>
    </div>
  );
};

export default Brouse;