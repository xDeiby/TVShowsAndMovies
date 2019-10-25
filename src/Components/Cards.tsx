import React from 'react';
import '../Styles/Cards.css'


interface Imovies {
    movies : any[];
}

const Cards = (props : Imovies) => {

    return (
        <div className="container">
            {props.movies.map(( movie => (
                <div className="box">
                    <div className="imgBox">
                        <img src= {`https://image.tmdb.org/t/p/w400${movie.poster_path}`} width="300" height="400"/>
                    </div>
                    <div className="content">
                        <h3>{movie.title}</h3>
                        <p>{movie.overview}</p>
                    </div>
                </div>
            )))}
        </div>
    );
}

export default Cards;