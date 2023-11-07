import styled from 'styled-components';

export const CardContainer = styled.div`
    position: relative;
    width: 12rem;
    height: 21rem;
    background-color: rgb(145, 168, 209);
    margin: 7px 1% 7px 0px;
    z-index: 2;
`;

export const CardBack = styled.div`
    background-color: rgb(0, 0, 0, 0.6); 
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 2;
    display: none;
`;

export const MovieDetail = styled.div`
    padding: 20px 10px 3px 10px;

    p {
        color: white;
        margin: 0;
    }

    p:first-child {
        font-weight: bold;
        font-size: 15px;
        margin-bottom: 10px;
      }

    p:last-child {
        font-size: 11px;
    }    
`;

export const Card = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
`;

export const Image = styled.img`
    width: 12rem;
    height: 17rem;
`;

export const MovieTitle = styled.div`
    color: white;
    font-size: 15px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 5% 5% 1% 5%;
`;