import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import styled from 'styled-components';

const Div = styled.div`
    margin: 5% 0 0 10%;
    display: flex;
    flex-direction: row;
`;

const Img = styled.img`
    width: 25vw;
    height: 45vh;
`;

export default function MovieDetail() {
    //url로 넘겨 받은 title
    const { title } = useParams(); 

    //네비게이트 훅을 통해 페이지 이동 시에 넘겨 받은 정보
	//이미지, 별점 등의 모든 정보들
    const { state } = useLocation();


    const url = "https://image.tmdb.org/t/p/w600_and_h900_bestv2";

  return (
    <Div>
        <Img src={url + state.props.item.poster_path} alt={title}></Img>
        <h1>{title}</h1>
    </Div>
  )
}
