import React, { useEffect, useState } from 'react';

const MovieCompanies = (props) => {

    const {companiesData} = props;

    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        checkData();
    })

    const checkData = () => {
        if (companiesData.length !== 0)
            setCompanies(companiesData);
    }

    let tempCompanies = [];

    for(let i = 0; i < companies.length; i++)
    {
        if(companies[i].logo_path)
        {
            tempCompanies.push({"logo" : companies[i].logo_path});
        }
    }

    if (tempCompanies.length !== 0)
        return(
            <div className="movie-production-companies-container">
                <h2>Production companies</h2>
                <div className="movie-production-companies">
                    {tempCompanies.map(company => (
                        <img key={company.logo} alt="company-logo" src={`https://image.tmdb.org/t/p/w400/${company.logo}`} className="companies-logo"/>
                    ))}
                </div>
            </div>
        )
    else
        return (
            <div className="hide"></div>
        )
}

export default MovieCompanies;