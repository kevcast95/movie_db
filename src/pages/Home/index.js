import React, { Fragment, useState, useEffect } from 'react'
import MovieCards from '../../components/MovieCards';
import NavBar from '../../components/NavBar';
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../../connection/firebase"
import { getPopularMovies } from '../../connection/movieDbApi';
import Loading from "../../components/Loading"
import IsLogged from "../../utils/IsLogged";

import './Home.css';

export default function Home() {
  const [moviesList, setMoviesList] = useState(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [user, error] = useAuthState(auth);

  IsLogged();

  useEffect(()=>{
    //TODO agregar toast
    const movies = getPopularMovies(page);
    movies.then(res=> {
      setMoviesList(res.data.results)
    })
    setTimeout(()=>{
      setLoading(false)
    },300)
  },[page])

  function navigationMovies(direction) {
    if (direction === 'next') setPage(page + 1)
    if (direction === 'back') setPage(page - 1)
  }

  if (loading) {
    return <Loading/>
  }
 return (
  <Fragment>
   <section className='Home__container'>
    <NavBar/>
    <div className="List__movie_container">
      <div className="Movies_list">
        {user && 
          <MovieCards
            user={user.email}
            movies={moviesList}
          />
        }
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