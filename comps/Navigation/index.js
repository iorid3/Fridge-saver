import React from 'react';
import styled from 'styled-components';
import {Router, useRouter} from 'next/router';



const NavCont = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding-top: 40px;
    padding-bottom: 20px;
`;

const NavBack = styled.img `
    width: 25px;
    height: 25px;
    object-fit: contain;
    visibility: ${props=>props.visibility};

`;

const NavText = styled.div `
    font-family: 'Athiti', sans-serif;
    color: #575757;
    font-size: 16px;
    visibility: ${props=>props.visibility};
`;
const NavQ = styled.img`
    width: 25px;
    height: 25px;
    object-fit: contain;
`;


const Navbar =({
    visibility="visible",
    // routeTo="/",
    onClick=()=>{},
}) => {
    const router = useRouter();

    return <NavCont>
        <NavBack src="/back-button.svg" onClick={onClick} visibility={visibility} />
        <NavText onClick={()=>router.push("/")}>FridgeSaver</NavText>
        <NavQ src="/info.png" onClick={()=>router.push("/tutorial")} />
    </NavCont>
}


export default Navbar