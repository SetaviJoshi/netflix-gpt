

import Header from './Header';
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
const Brouse = () => {
  useNowPlayingMovies();
 
    return (
    <div><Header />
    <MainContainer/>
    <SecondaryContainer/>
    </div>
  );
};

export default Brouse;