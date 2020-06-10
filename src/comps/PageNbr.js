import React from 'react';

const PageNbr = (props) => {
    if (props.nbrPages === 0)
        return (
            <div className="hide"></div>
        )
    else if (props.actualPage === 1 && props.nbrPages === 1)
        return (
            <div className="page-counter-container">
                <button className="page-button not-clickable">&lt;</button>
                <p className="page-counter-text">Page {props.actualPage} on {props.nbrPages}</p>
                <button className="page-button not-clickable">&gt;</button>
            </div>            
        )
    else if (props.actualPage === 1)
        return (
            <div className="page-counter-container">
                <button className="page-button not-clickable">&lt;</button>
                <p className="page-counter-text">Page {props.actualPage} on {props.nbrPages}</p>
                <button className="page-button" onClick={() => props.handlePage("next")}>&gt;</button>
            </div>
        )
    else if (props.actualPage === props.nbrPages)
        return (
            <div className="page-counter-container">
                <button className="page-button" onClick={() => props.handlePage("prev")}>Previous</button>
                <p className="page-counter-text">Page {props.actualPage} on {props.nbrPages}</p>
                <button className="page-button not-clickable">&gt;</button>
            </div>            
        )
    else
        return (
        <div className="page-counter-container">
            <button className="page-button" onClick={() => props.handlePage("prev")}>&lt;</button>
            <p className="page-counter-text">Page {props.actualPage} on {props.nbrPages}</p>
            <button className="page-button" onClick={() => props.handlePage("next")}>&gt;</button>
        </div>
    )
}

export default PageNbr;