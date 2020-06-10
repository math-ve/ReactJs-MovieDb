import React from 'react';

import ResultItem from './ResultItem';

const ResultsList = (props) => {
    return (
        <ul className="results-list">
          {props.data.map(movie => (
            <ResultItem key={movie.id} movie={movie} />              
            ))}
        </ul>
    )
}

export default ResultsList;