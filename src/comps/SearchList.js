import React, { useEffect, useState } from 'react';
import gsap from 'gsap';

import ResultsList from './ResultsList';
import PageNbr from './PageNbr';
import { Redirect } from 'react-router-dom';

const SearchList = (props) => {

    const [data, setData] = useState([]);
    const [nbrPages, setNbrPages] = useState(0);
    const [actualPage, setActualPage] = useState(1);

    useEffect(() => {
        loadData();
        window.scrollTo(0, 0)
    }, [actualPage]);
  
    const loadData = async () => {
      await fetch(`https://api.themoviedb.org/3/search/movie?api_key=02ec6c9c67dae7069b881095ae777f88&query=${props.query}&page=${actualPage}&`)
      .then(response => response.json())
      .then(data => {
          setNbrPages(data.total_pages);
          setData(data.results);
          gsap.to('ul.page-transition li', {duration : .5, scaleY: 0, transformOrigin: "bottom left", stagger: .1});
      });
    }

    const handlePage = (to) => {
        if (to === "prev")
        {
            gsap.to('ul.page-transition li', {duration : .5, scaleY: 1, transformOrigin: "bottom left", stagger: .2, onComplete: () => {
                setActualPage(actualPage - 1);
            }});
        }
        else
        {
            gsap.to('ul.page-transition li', {duration : .5, scaleY: 1, transformOrigin: "bottom left", stagger: .2, onComplete: () => {
                setActualPage(actualPage + 1);
            }});
        }
    }

    const [redirect, setRedirect] = useState(false);

    const handleClick = () => {
        gsap.to('ul.page-transition li', {duration : .5, scaleY: 1, transformOrigin: "bottom left", stagger: .2, onComplete: () => {
            setRedirect(true);
            gsap.to('ul.page-transition li', {duration : .5, scaleY: 0, transformOrigin: "bottom left", stagger: .2});
            setRedirect(false);
        }});
    }

    if (redirect)
        return <Redirect to="/" />

    else if (nbrPages === 0)
        return (
            <div className="no-match-found-container">
                <p className="no-match-found">No match found</p>
                <p className="return-home" onClick={handleClick}>Return to Homepage</p>                
            </div>

        )
    else
        return (
            <div>
                <div className="results-list-container">
                    <ResultsList data={data}/>
                </div>
                <PageNbr actualPage={actualPage} nbrPages={nbrPages} handlePage={handlePage}/>            
            </div>
        );
}

export default SearchList;