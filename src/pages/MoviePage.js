import React, { useEffect, useState } from 'react';
import '../css/MoviePage.css';
import MovieLeftPart from '../comps/MovieLeftPart';
import MovieMidPart from '../comps/MovieMidPart';
import MovieRightPart from '../comps/MovieRightPart';

const MoviePage = ({match, lcoation}) => {

    const { params: {id} } = match;

    const [data, setData] = useState([]);
    const [videoKey, setVideoKey] = useState("");
    const [genres, setGenres] = useState([]);
    const [countries, setCountries] = useState([]);
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        loadData();
    },[])

    const loadData = async () => {
        await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=02ec6c9c67dae7069b881095ae777f88&append_to_response=videos`)
        .then(response => response.json())
        .then(data => {
            setData(data);
            if (data.videos.results.length !== 0)
                setVideoKey(data.videos.results[0].key);                
            setGenres(data.genres);
            setCountries(data.production_countries);
            setCompanies(data.production_companies);
        });
      }

    return (
        <div className="movie-page-main-container">
            <MovieLeftPart data={data} />

            <MovieMidPart data={data} videoKey={videoKey}/>

            <MovieRightPart data={data} genres={genres} countries={countries} companies={companies}/>
        </div>
    )
}

export default MoviePage;