import React, { useState } from "react";

function Movie(props) {
    const url = "https://image.tmdb.org/t/p/w600_and_h900_bestv2";
    const [isShow, setIsShow] = useState(false);

    const showStyle = {
        display: isShow ? "flex" : "none",
    };

    return (
        <div className="cardContainer"  onMouseOver={() => setIsShow(true)} onMouseOut={() => setIsShow(false)}>
        {isShow && <div className="cardBack" style={showStyle}>
            <div className='movieDetail'>
                <p>{props.item.title}</p>
                <p>{props.item.overview}</p>
            </div>
        </div>}
            <div className='card'>
                <img variant="top" src={url + props.item.poster_path} className='image' />
                <div className='movieTitle'>
                    <p>{props.item.title}</p>
                    <p>{props.item.vote_average}</p>
                </div>
            </div>
        </div>
    )
}

export default Movie;