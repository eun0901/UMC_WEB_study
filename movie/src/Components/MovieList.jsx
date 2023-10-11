import Movie from "./Movie";
import { movies } from "../movies";
import Row from 'react-bootstrap/Row';

function MovieList(props) {


    return (
        <div class="back">
            {movies.results.map((item, idx) => {
                return (
                    <Movie item={item} />
                )
            })
            }
        </div>
    )
}

export default MovieList;