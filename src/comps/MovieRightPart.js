import React from 'react';

import MovieCompanies from './MovieCompanies';
import MovieGenres from './MovieGenres';
import MovieEconomics from './MovieEconomics';
import MovieCountries from './MovieCountries';
import MovieWebsite from './MovieWebsite';
import MovieBackdrop from './MovieBackdrop';

const MovieRightPart = (props) => {

    const {data, genres, countries, companies} = props;

    return (
        <div className="movie-other-infos-container">
            <MovieBackdrop data={data} />
            <MovieGenres genresData={genres} />
            <MovieWebsite data={data} />
            <MovieEconomics data={data} />
            <MovieCountries countriesData={countries} />
            <MovieCompanies companiesData={companies} />
        </div>
    )
}

export default MovieRightPart;