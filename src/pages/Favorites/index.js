import React, { Fragment, useState, useEffect } from 'react'
import MovieCards from '../../components/MovieCards';
import Loading from "../../components/Loading"
import NavBar from '../../components/NavBar';
import IsLogged from "../../utils/IsLogged";
import { getMovieDetails } from '../../connection/movieDbApi';
import { db } from '../../connection/firebase';
import { auth } from "../../connection/firebase";
import { useAuthState } from "react-firebase-hooks/auth"

import './Favorite.css';

export default function Favorite() {
  const [moviesList, setMoviesList] = useState([]);
  const [docListener, setDocListener] = useState(0);
  const [favoritesList, setFavoritesList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, error] = useAuthState(auth);
  IsLogged();

  useEffect(() => {
    const subscribe = db
      .collection("fav_users")
      .onSnapshot((snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        const list = data.filter(item => item.id === user?.email)
        list !== docListener && setDocListener(list[0]);
      });
  }, []);

  useEffect(() => {
    if (docListener) {
      setFavoritesList(docListener.favorites)
    }
  }, [docListener])

  useEffect(() => {
    for (let i = 0; i < favoritesList.length; i++) {
      let detail = getMovieDetails(favoritesList[i]);
      detail.then(res => {
        setMoviesList(moviesList => [...moviesList, res.data])
      })
    }

    setTimeout(() => {
      setLoading(false)
    }, 300)
  }, [favoritesList])

  
  if (loading) {
    return <Loading />
  }

  return (
    <Fragment>
      <div className='Favorites__container'>
        <NavBar />
        <div className="Favorites_list">
          <MovieCards
            movies={moviesList}
            from={"faorites"}
          />
        </div>
      </div>
    </Fragment>
  )
}