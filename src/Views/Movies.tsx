import React, { useEffect, useState } from 'react';
import { Grid, Pagination } from 'semantic-ui-react';

import { getTopMovies } from '../Services/DataService'
import Cards from '../Components/Cards';
import Menu from '../Components/Menu';
import Genres from '../Components/Genres';

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
        <React.Fragment>
            <Menu page = "Movies" />
            <br/>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={2}>
                        <Genres genre="movie"/>
                    </Grid.Column>
                    <Grid.Column width={14}>
                        <Cards movies = {movies} />
                    </Grid.Column>
                </Grid.Row>
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
        </React.Fragment>

    );
}

export default Movies;