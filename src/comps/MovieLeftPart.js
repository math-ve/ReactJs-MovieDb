import React, { useEffect, useState } from 'react';

const MovieLeftPart = (props) => {

    const {data} = props;

    const [releaseData, setReleaseDate] = useState("");
    const [runtime, setRuntime] = useState("");
    const [vote, setVote] = useState("");
    const [poster, setPoster] = useState("");

    useEffect(() => {
        checkData();
    })

    const checkData = () => {
        if (data.release_date)
            setReleaseDate(data.release_date);
        else
            setReleaseDate("missing");
        if (data.runtime)
            setRuntime(`${data.runtime} min`);
        else
            setRuntime("missing");
        if (data.vote_average)
            setVote(`${data.vote_average} / 10`);
        else
            setVote("missing");
        if (data.poster_path)
            setPoster(`https://image.tmdb.org/t/p/w500/${data.poster_path}`);
        else
            setPoster('/assets/noPhotoFound.png');
    }

    return (
        <div className="movie-poster-description-container">
            <div className="movie-poster-container">
                <img alt="movie-poster" src={poster} className="movie-page-poster" />
                <p className="movie-page-title">{data.title}</p>
            </div>
            <div className="movie-main-infos-container">
                <div className="movie-main-infos">
                    <p>Realease date :</p>
                    <p className="main-infos-data">{releaseData}</p>
                </div>
                <div className="movie-main-infos">
                    <p>Runtime :</p>
                    <p className="main-infos-data">{runtime}</p>
                </div>
                <div className="movie-main-infos">
                    <p>Ratings :</p>
                    <p className="main-infos-data">{vote}</p>
                </div>
            </div>
        </div>
    )
}

export default MovieLeftPart;