import React, { useEffect, useState } from 'react';

const MovieEconomics = (props) => {

    const {data} = props;

    const [budget, setBudget] = useState("");
    const [revenue, setRevenue] = useState("");

    useEffect(() => {
        checkData();
    })

    const checkData = () => {
        if (data.budget)
            setBudget(`${data.budget} USD`);
        else
            setBudget("missing");
        if (data.revenue)
            setRevenue(`${data.revenue} USD`);
        else
            setRevenue("missing");
    }

    return (
        <div className="movie-economics-container">
            <div>
                <p className="movie-economics-title">budget</p>
                <p className="movie-economics-number">{budget}</p>
            </div>
            <div>
                <p className="movie-economics-title">revenue</p>
                <p className="movie-economics-number">{revenue}</p>
            </div>
        </div>
    )
}

export default MovieEconomics;