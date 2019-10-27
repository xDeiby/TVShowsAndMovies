import React, { useEffect, useState } from 'react';
import { getTopSeries } from '../Services/DataService';
import Cards from '../Components/Cards';
import { Grid, Pagination } from 'semantic-ui-react';
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
        <Grid>
            <Cards movies = {series} />
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

    );
}

export default Series;