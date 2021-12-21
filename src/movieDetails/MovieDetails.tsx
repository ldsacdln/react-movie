import React from "react";
import "./movieDetails.css"
import { useParams } from "react-router-dom";
import  { movies }  from "../movies"
import Header from "../header/Header";

export default function MovieDetails(){
    const { id } = useParams();
    const defaultMovie = { title: "", poster: "", release_date: "", plot: "" };
    const movie = movies.find((movie) => movie.movie_id === id) || defaultMovie;
    const url = `center / contain no-repeat url(https://image.tmdb.org/t/p/w500${movie.poster})`;
    const date = new Date(movie.release_date);
    const dateString = date.toDateString();

    return(
        <div>
            <Header />
            <div className="container">
                <div className="movie-poster" style={{background: url}}></div>
                <div className="movie-details">
                    <div className="movie-title">{movie.title}</div>
                    <div className="release-date">{dateString}</div>
                    <div className="plot">{movie.plot}</div>
                </div>
            </div>
        </div>
    )
}