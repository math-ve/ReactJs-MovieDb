import React, { useEffect, useState } from 'react';

const MovieCountries = (props) => {

    const {countriesData} = props

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        checkData();
    })

    const checkData = () => {
        if (countriesData.length !== 0)
            setCountries(countriesData);
    }

    if (countries !== [])
        return (
            <div className="movie-production-countries-container">
                <h2>Production countries</h2>
                <div className="movie-production-countries">
                    {countries.map(country => (
                        <p key={country.name}>{country.name}</p>
                    ))}
                </div>
            </div>      
        )
    else
        return
}

export default MovieCountries;