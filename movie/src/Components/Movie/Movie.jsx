import React from "react";
import { CardContainer, Card, Image, MovieTitle } from "./Movie.style";
// import {CardBack, MovieDetail} from "./Movie.style";
import { useNavigate } from 'react-router-dom';

function Movie(props) {
    const url = "https://image.tmdb.org/t/p/w600_and_h900_bestv2";
    // const [isShow, setIsShow] = useState(false);

    // const showStyle = {
    //     display: isShow ? "flex" : "none",
    // };
    
    const navigate = useNavigate();

    const onClickImg = () => {
      navigate(`/movie/${props.item.title}`, {
              state: {props},
          });
    };
  

    return (
        <CardContainer>
        {/* <CardContainer onMouseOver={() => setIsShow(true)} onMouseOut={() => setIsShow(false)}> */}
        {/* {isShow && <CardBack style={showStyle}>
            <MovieDetail>
                <p>{props.item.title}</p>
                <p>{props.item.overview}</p>
            </MovieDetail>
        </CardBack>} */}
            <Card>
                <Image variant="top" src={url + props.item.poster_path} onClick={onClickImg}/>
                <MovieTitle>
                    <p>{props.item.title}</p>
                    <p>{props.item.vote_average}</p>
                </MovieTitle>
            </Card>
        </CardContainer>
    )
}

export default Movie;