const api_key : string = "b5253e8985ce4eb87582309dab17aa85";
const api_url : string = "https://api.themoviedb.org/3";

const getQuery = async (query : string) => {
    const list = await fetch(`${api_url}${query}&api_key=${api_key}&lenguage=en-US`);
    const movies = await list.json();
    
    return movies;
}

export const getTopMovies = async (pag : number) => {
    const type_query : string = `/discover/movie?page=${pag}&sort_by=popularity.desc`;

    return getQuery(type_query);
}

export const getTopSeries = async (pag : number) => {
    const type_query : string = `/discover/tv?page=${pag}&sort_by=popularity.desc`;

    return getQuery(type_query);
}

export const getGenres = (format : string) => {
    const type_query = `/genre/${format}/list?`;

    return getQuery(type_query);
}
