import React, { useEffect, useState } from 'react';

const MovieWebsite = (props) => {

    const {data} = props;

    const [homepage, setHomepage] = useState("");

    useEffect(() => {
        checkData();
    })

    const checkData = () => {
        if (data.homepage)
            setHomepage(data.homepage);
    }

    if (homepage !== "")
        return (
            <div className="movie-website-container">
                <img alt="website-logo" src="/assets/www.png" className="website-logo" />
                <a href={data.homepage} className="movie-website-link">View website</a>
            </div>
        )
    else
        return (
            <div className="hide"></div>
        )
}

export default MovieWebsite;