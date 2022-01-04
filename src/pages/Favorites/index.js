import React, { Fragment } from 'react'
import MovieCards from '../../components/MovieCards';
import NavBar from '../../components/NavBar';

import './Favorite.css';

export default function Favorite() {

 const moviesTest = [{
  "adult": false,
  "backdrop_path": "/xnFmcq40R0umHHLXTpvOW5GTdMh.jpg",
  "genre_ids": [
      37
  ],
  "id": 429,
  "original_language": "it",
  "original_title": "Il buono, il brutto, il cattivo",
  "overview": "While the Civil War rages between the Union and the Confederacy, three men – a quiet loner, a ruthless hit man and a Mexican bandit – comb the American Southwest in search of a strongbox containing $200,000 in stolen gold.",
  "popularity": 37.006,
  "poster_path": "/bX2xnavhMYjWDoZp1VM6VnU1xwe.jpg",
  "release_date": "1966-12-23",
  "title": "The Good, the Bad and the Ugly",
  "video": false,
  "vote_average": 8.5,
  "vote_count": 6328
},
{
  "adult": false,
  "backdrop_path": "/yHtB4KHNigx3ZoxDvQbW2SOXGfq.jpg",
  "genre_ids": [
      16,
      10751,
      12,
      14
  ],
  "id": 441130,
  "original_language": "en",
  "original_title": "Wolfwalkers",
  "overview": "In a time of superstition and magic, when wolves are seen as demonic and nature an evil to be tamed, a young apprentice hunter comes to Ireland with her father to wipe out the last pack. But when she saves a wild native girl, their friendship leads her to discover the world of the Wolfwalkers and transform her into the very thing her father is tasked to destroy.",
  "popularity": 31.526,
  "poster_path": "/ehAKuE48okTuonq6TpsNQj8vFTC.jpg",
  "release_date": "2020-10-26",
  "title": "Wolfwalkers",
  "video": false,
  "vote_average": 8.5,
  "vote_count": 659
},]
 return (
  <Fragment>
   <div className='Favorites__container'>
    <NavBar/>
    <div className="Favorites_list">
     <MovieCards
      movies={moviesTest}
     />
    </div>
   </div>
  </Fragment>
 )
}