import React from 'react';

import SearchList from '../comps/SearchList';

import '../css/ResultsPage.css';

const ResultsPage = ({match, lcoation}) => {

    const { params: {search} } = match;

    return (
        <div className="results-page-container">
            <SearchList query={search}/>     
        </div>
    )
}

export default ResultsPage;