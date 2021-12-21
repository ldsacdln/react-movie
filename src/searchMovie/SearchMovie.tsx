import React from "react";
import { useParams } from "react-router-dom";
import  { movies }  from "../movies"
import "./searchMovie.css"
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
        <div className="movie-item"  onClick={() => movieDetails()}>
            <div className="search-movies-poster" style={{background: url}}></div>
            <div className="search-movie-title">{movie.title}</div>
        </div>
    )
}

export default function SearchMovie(){
    const { title } = useParams();
    const searchTitle = title || ""
    const searchMovies = movies.filter((movie) => movie.title.includes(searchTitle));

    return(
        <div>
            <Header />
            <div className="search-container">
                <div className="title">Search Results For {searchTitle}</div>
                {searchMovies.map((movie) => {
                    return(
                        <div className="search-result">
                            <Card movie={movie}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}