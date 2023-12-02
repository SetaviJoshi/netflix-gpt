
import { IMG_CDN } from '../utils/constantss';

const MovieCard = ({ posterPath }) => {
 
  if (!posterPath) return null;
  return (
    <div className="w-32 md:w-44 pr-4">
      <img alt="Movie Card" src={IMG_CDN + posterPath} />
    </div>
  );
};
export default MovieCard;
