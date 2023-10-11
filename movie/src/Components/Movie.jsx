import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

function Movie(props) {
    const url = "https://image.tmdb.org/t/p/w600_and_h900_bestv2";

    return (
        <div className="card">
            <img variant="top" src={url + props.item.poster_path} className='image' />
            <div className='cardContent'>
                <p>{props.item.title}</p>
                <p>{props.item.vote_average}</p>
            </div>
        </div>
    )
}

export default Movie;