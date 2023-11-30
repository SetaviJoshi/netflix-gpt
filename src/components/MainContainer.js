import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackgroud from './VideoBackgroud'
import VideoTitle from './VideoTitle'

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies)
    //if noePlayingmovie is null this will return and will not go further and will not load movie container(early return)
    if (movies === null) return;
    const mainMovie = movies[0];
    console.log(mainMovie);
    const {original_title,overview,id} = mainMovie;
    return (
    <div>
        <VideoBackgroud movieId={id}/>
        <VideoTitle title={original_title} overview={overview}/>
    </div>
  )
}

export default MainContainer;