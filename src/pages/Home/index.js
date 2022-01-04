import React, { Fragment, useState, useEffect } from 'react'
import MovieCards from '../../components/MovieCards';
import NavBar from '../../components/NavBar';
import { getPopularMovies } from '../../connection/movieDbApi';

import './Home.css';

export default function Home() {
  const [moviesList, setMoviesList] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(()=>{
    const movies = getPopularMovies(page);
    movies.then(res=> setMoviesList(res.data.results));
  },[page])

  function navigationMovies(direction) {
    console.log("Que pasa", direction);
    if (direction === 'next') setPage(page + 1)
    if (direction === 'back') setPage(page - 1)
  }
 
 return (
  <Fragment>
   <section className='Home__container'>
    <NavBar/>
    <div className="List__movie_container">
      <div className="Movies_list">
        <MovieCards
          movies={moviesList}
        />
      </div>
      <div className="Btn__container">
        {
          page>1 &&
            <button
            name="back" className="Btn_back_next"
            onClick={(e)=>navigationMovies(e.target.name)}
            > 
              {`< Back`}  
            </button>
        }
        <button
         name="next" className="Btn_back_next"
         onClick={(e)=>navigationMovies(e.target.name)}
        >
          {`Next >`}
        </button>
      </div>
    </div>
   </section>
  </Fragment>
 )
}