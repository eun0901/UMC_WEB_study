import Movie from "./Movie/Movie";
import { movies } from "../movies";
import styled from 'styled-components';

const Back = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
`;

function Movies() {


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

export default Movies;