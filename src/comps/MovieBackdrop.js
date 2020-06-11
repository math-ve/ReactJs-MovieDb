import React, { useEffect, useState } from 'react';

const MovieBackdrop = (props) => {

    const {data} = props;

    const [backdrop, setBackdrop] = useState("");

    useEffect(() => {
        checkData();
    })

    const checkData = () => {
        if (data.backdrop_path !== null)
            setBackdrop(data.backdrop_path);
    }

    if (backdrop !== undefined)
        return (
            <img alt="movie-backdrop" src={`https://image.tmdb.org/t/p/w500/${backdrop}`} className="movie-backdrop" />
        )
    else
        return (
            <div className="hide"></div>
        )
}

export default MovieBackdrop;