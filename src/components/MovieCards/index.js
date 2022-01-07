import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { addFavorites, updateFavorites, removeFavorites, db } from '../../connection/firebase';
import Icons from "../../assets/Icons";
import "./MovieCards.css";

export default function MovieCards({ user,movies,from }) {
  const [docListener, setDocListener] = useState(0);
  const [favoritesList, setFavoritesList] = useState([]);
  const [favorite, setFavorite] = useState(false);



  useEffect(() => {
    const subscribe = db
    .collection("fav_users")
    .onSnapshot((snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      const list = data.filter(item => item.id === user)
      list !== docListener && setDocListener(list[0]);
    });
  }, [favorite]);

  useEffect(() => {
    if (docListener) {
      setFavoritesList(docListener.favorites)
    }
  }, [docListener])

  const handleFavorites = (movie_id) => {
    
    if (!favoritesList.includes(movie_id)) {
      if (docListener !== 0) {
        if (typeof (docListener) === 'object') {
          return updateFavorites(movie_id, user)
        }
        return addFavorites(movie_id, user)
      }
    }else {
      return removeFavorites(movie_id, user)
    }
    setFavorite(!favorite);
   
  }
  
 return (
  <Fragment>
   {movies?.map((movie) => {
    return (
     <div className="Cards__container" key={movie.id}>
      <div className="Img__container">
       <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={`Banner for ${movie.title} movie`}
       />
      </div>
      <div className="Info__container">
       <h3>
        {movie.title.length < 40
         ? movie.title
         : movie.title.substr(0, 30) + "..."}
       </h3>
       <p className="Release_date">{movie.release_date}</p>
       {from === "home" && <span onClick={() => handleFavorites(movie.id)}>
        <Icons
         name="Favorite"
         fill={ (favoritesList && favoritesList.includes(movie.id))? "#01d277": "none"}
         stroke="#01d277"
         className="Add_to_fav"
        />
        <p>Add to favorite</p>
       </span>}
       <Link to="/details" state={{ movie_id: movie.id  }} className="details">Details</Link>
      </div>
      <span className="Movie_rate">{`IMDB ${movie.vote_average}`}</span>
     </div>
    );
   })}
  </Fragment>
 );
}
