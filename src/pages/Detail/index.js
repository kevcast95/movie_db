import React, { Fragment, useState, useEffect } from "react";
import Icons from "../../assets/Icons";
import { getMovieDetails } from "../../connection/movieDbApi";
import { useLocation } from 'react-router-dom'
import IsLogged from "../../utils/IsLogged";

import "./Details.css";

export default function Details() {
 let location = useLocation().state;
 const [movieDetail, setMovieDetail] = useState(undefined);

 IsLogged();
 useEffect(()=>{
  let detail = getMovieDetails(location.movie_id)
  detail.then(res=> {
   setMovieDetail(res.data)
  })
 },[])
 
 const tagsOp = [movieDetail?.adult ? "18+" : "6+",movieDetail?.release_date, movieDetail?.popularity,];
 const genres = movieDetail?.genres;

 return (
  <Fragment>
   <section className="Details__container">
    <div className="Detail__image_container">
     <img
      src={`https://image.tmdb.org/t/p/w500${movieDetail?.backdrop_path}`}
      alt={`Banner for ${movieDetail?.title} movie`}
     />
    </div>
    <div className="Detail__transition_background">
     <div className="Detail_description_container">
      <div className="Tags_container">
       {tagsOp?.map((tag, index) => {
        return (
         <span key={index} className="Tag_text">
          {index === 2 && (
           <Icons
            name="Favorite"
            fill="#01d277"
            stroke="#01d277"
            className="Fav_counter"
           />
          )}
          {tag}
         </span>
        );
       })}
       {genres?.map((tag) => {
        return (
         <span key={tag.id} className="Tag_text">
          {tag.name}
         </span>
        );
       })}
      </div>
      <div className="Detail_description">
       <h3>{movieDetail?.title}</h3>
       <p>{movieDetail?.overview}</p>
      </div>
      
     </div>
    </div>
   </section>
  </Fragment>
 );
}
