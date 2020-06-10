import React, { useEffect, useState } from 'react';

const MovieGenres = (props) => {

    const {genresData} = props;

    const [genres, setGenres] = useState([]);

    useEffect(() => {
        checkData();
    })

    const checkData = () => {
        if (genresData.length !== 0)
            setGenres(genresData);
    }

    if (genres !== [])
        return (
            <div className="movie-genres-container">
                <div className="movie-genres">
                    {genresData.map(genre => (
                        <p key={genre.name}>{genre.name}</p>
                    ))}
                </div>
            </div>
        )
    else
        return
}

export default MovieGenres;