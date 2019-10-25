import React, { useEffect, useState } from 'react';
import { getTopMovies } from '../Services/DataService'
import Cards from '../Components/Cards';

const Movies = () =>{

    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);

    useEffect( () => {

        getTopMovies(page)
        .then( (data) => setMovies(data.results) )
        .catch( (error) =>  console.log(error) );

    },[]);

    return(
        <Cards movies = {movies} />
    )
}

export default Movies;