import Movie from "./Movie";
import { movies } from "../../movies";
import styled from 'styled-components';

const Back = styled.div`
    margin: 2% 0 3% 5%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
`;

function MovieList() {


    return (
        <Back>
            {movies.results.map((item, idx) => {
                return (
                    <Movie item={item} key={idx} />
                )
            })
            }
        </Back>
    )
}

export default MovieList;