import React from "react";
import "./catalogue.css";
import  { movies }  from "../movies";
import { useNavigate } from "react-router-dom";
import Header from "../header/Header";
  

const Card = (props:any) => {
    const movie = props.movie;
    const url = `center / contain no-repeat url(https://image.tmdb.org/t/p/w500${movie.poster})`;
    const navigate = useNavigate();

    function movieDetails(){
        return(
            navigate(`/movie/${movie.movie_id}`)
        )
    }

    return(
        <div className="card">
            <div className="movies-poster" style={{background: url}}></div>
            <div className="movies-details">
                <div className="movies-title" onClick={() => movieDetails()}><h2>{movie.title}</h2></div>
                <div className="movies-plot"><p>{movie.plot}</p></div>
            </div>
        </div>
    )
}

export default function Catalogue(){
    
    return (
        <div>
            <Header />
            <div className="contianer">
                <div className="catalogue">
                    {movies.map((movie) => {
                        return(
                            <div>
                                <Card movie={movie}/>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}