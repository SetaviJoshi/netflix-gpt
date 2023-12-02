import React from 'react';
import { MovieList } from './MovieList';
import { useSelector } from 'react-redux';

const SecondoryContainer = () => {
  const movies = useSelector(store => store.movies);
  return (
    movies.nowPlayingMovies && (
      //giving margin in minus to overlap 2nd container onto the main container
      <div className="bg-black">
      <div className=" mt-0 md:-mt-48 pl-4 md:pl-12 relative z-20">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
      </div>
      </div>
    )
  );
};

export default SecondoryContainer;