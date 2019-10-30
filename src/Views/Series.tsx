import React, { useEffect, useState } from 'react';
import { Grid, Pagination } from 'semantic-ui-react';

import { getTopSeries } from '../Services/DataService';
import Cards from '../Components/Cards';
import Menu from '../Components/Menu';
import Genres from '../Components/Genres';
//import Search from '../Components/Search';

const Series = () =>{

    const [series, setSeries] = useState([]);
    const [pagesT, setPagesT] = useState(0);

    useEffect( () => {
        newSeries(1);
    },[]);

    const newSeries = (num_pag : number) => {

        getTopSeries(num_pag)
        .then( (data) => {
            setSeries(data.results);
            if (!pagesT) setPagesT(data.total_pages); 
        })
        .catch( (error) =>  console.log(error) );

    }


    return(
        <React.Fragment>
        <Menu page= "Series"/>
        <br/>
        <Grid>
                <Grid.Row>
                    <Grid.Column width={2}>
                        <Genres genre="tv"/>
                    </Grid.Column>
                    <Grid.Column width={14}>
                        <Cards movies = {series} />
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
                    onPageChange = {(e : any, pagInfo : any) => newSeries(pagInfo.activePage)} 
                />
            </Grid.Row>
        </Grid>
    </React.Fragment>

    );
}

export default Series;