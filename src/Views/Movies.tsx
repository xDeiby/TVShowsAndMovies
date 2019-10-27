import React, { useEffect, useState } from 'react';
import { getTopMovies } from '../Services/DataService'
import Cards from '../Components/Cards';
import { Grid, Pagination } from 'semantic-ui-react';
//import Search from '../Components/Search';

const Movies = () =>{

    const [movies, setMovies] = useState([]);
    const [pagesT, setPagesT] = useState(0);

    useEffect( () => {
        newMovies(1);
    },[]);


    const newMovies = (num_pag : number) => {

        getTopMovies(num_pag)
        .then( (data) => {
            setMovies(data.results);
           if (!pagesT) setPagesT(data.total_pages); 
        })
        .catch( (error) =>  console.log(error) );

    }

    return(
        <Grid>
            <Cards movies = {movies} />
            <Grid.Row centered>
                <Pagination
                    defaultActivePage= {1}
                    firstItem={null}
                    lastItem={null}
                    pointing
                    secondary
                    totalPages={pagesT}
                    boundaryRange = {5}
                    onPageChange = {(e : any, pagInfo : any) => newMovies(pagInfo.activePage)} 
                />
            </Grid.Row>
        </Grid>

    );
}

export default Movies;