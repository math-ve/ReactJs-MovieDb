import React, { useEffect, useState } from 'react';

const MovieMidPart = (props) => {

    const {data, videoKey} = props;

    const [overview, setOverview] = useState("");

    useEffect(() => {
        checkData();
    })

    const checkData = () => {
        if (data.overview)
            setOverview(data.overview);
        else
            setOverview("missing");
    }

    if (videoKey !== "")
        return (
            <div className="movie-overview-video-container">
                <div className="movie-overview-container">
                    <h2>Overview</h2>
                    <p className="movie-overview">{overview}</p>
                </div>
                <div className="movie-trailer-container">
                    <iframe title="movie-trailer" className="movie-trailer" src={`https://www.youtube.com/embed/${videoKey}`}></iframe>
                </div>
            </div>
        )
    else
        return (
            <div className="movie-overview-video-container">
                <div className="movie-overview-container">
                    <h2>Overview</h2>
                    <p className="movie-overview">{overview}</p>
                </div>
                <div className="movie-trailer-container">
                    <img alt="trailer-missing" className="no-video-img" src="/assets/no-video.png" />
                </div>
            </div>
        )
}

export default MovieMidPart;