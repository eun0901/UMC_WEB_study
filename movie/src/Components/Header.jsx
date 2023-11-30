import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LoginControl from './LoginControl';

const Div = styled.div`
    background-color: rgb(20, 49, 85);
    height: 5vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0.6rem 0 0.6rem 1rem;
`;

const Li = styled.li`
    color: white;
`;

export default function Header() {
    return (
        <Div>
            <Link to='/'>
                <img
                    style={{ width: "154px", height: "20px" }}
                    src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                    alt="로고"
                />
            </Link>
            <ul style={{ listStyleType: "none", display: "flex", flexDirection: "row" }}>
                <div style={{ width: "3rem", margin: "3%" }}>
                    <Link to='/movie' className="linkChange">
                        <Li>영화</Li>
                    </Link>
                </div>
                <div style={{ width: "8rem", margin: "3%" }}>
                    <Link to='/TV' className="linkChange">
                        <Li>TV 프로그램</Li>
                    </Link>
                </div>
                <div style={{ width: "3rem", margin: "3%" }}>
                    <Link to='celebrity' className="linkChange">
                        <Li>인물</Li>
                    </Link>
                </div>
            </ul>
            <LoginControl />
        </Div>
    )
}
