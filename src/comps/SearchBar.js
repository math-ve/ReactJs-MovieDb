import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import gsap from 'gsap';


const SearchBar = (props) => {

    const [redirect, setRedirect] = useState(false);
    const [searchValue, setSearchValue] = useState("");

    const handleChange = (e) => {
        setSearchValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        gsap.to('ul.page-transition li', {duration : .5, scaleY: 1, transformOrigin: "bottom left", stagger: .2, onComplete: () => {
            setRedirect(true);
        }});
    }

    if (redirect)
    {
        return <Redirect to={`/movies/${searchValue}`} />
    }
    else
    {
        return (
            <form className="form-container" onSubmit={handleSubmit}>
                <input required id="search-bar" type="text" placeholder="search for a movie..." onChange={handleChange}></input>
                <input type="submit" value="Search" id="home-submit-search-button"></input>
            </form>        
        )        
    }

}

export default SearchBar;