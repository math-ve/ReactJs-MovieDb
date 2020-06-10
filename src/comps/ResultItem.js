import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import gsap from 'gsap';

const ResultItem = (props) => {

    const {movie} = props;
    const [redirect, setRedirect] = useState(false);
    const [id, setId] = useState(0);

    const handleClick = (id) => {
        setId(id);
        gsap.to('ul.page-transition li', {duration : .5, scaleY: 1, transformOrigin: "bottom left", stagger: .2, onComplete: () => {
            setRedirect(true);
            gsap.to('ul.page-transition li', {duration : .5, scaleY: 0, transformOrigin: "bottom left", stagger: .2});
            setRedirect(false);
        }});
    }

    if (redirect)
        return <Redirect to={`/movie/${id}`} />
    if (movie.poster_path == null)
        return (
            <div className="result-item" id={movie.id} onClick={() => handleClick(movie.id)}>
                <div className="image-missing-container">
                    <img alt="missing" src="/assets/noPhotoFound.png" className="image-missing" />                   
                </div>
                <p className="movie-title">{movie.title}</p>     
            </div>
        )
    else
        return (
            <div key={movie.id} id={movie.id} className="result-item" onClick={() => handleClick(movie.id)}>
                <div className="movie-poster-container">
                    <img alt={`trailer movie ${movie.id}`} src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} className="movie-poster-img" />
                </div>
                <p className="movie-title">{movie.title}</p>
            </div>
        )
}

export default ResultItem;