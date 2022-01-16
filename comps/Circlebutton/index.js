import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

const ButtonInput = styled.button`
    background-color: ${props=>props.bgColor};
    width: ${props=>props.width}px;
    height: ${props=>props.height}px;
    border: none;
    border-radius: 50%;
    box-shadow:0px 4px 4px rgba(0, 0, 0, 0.25);
    font-family:'Athiti', sans-serif;
    font-weight: bold;
    font-size: 16px;
    text-align: center;
    word-wrap: break-word;
    margin:10px;
    transition: 0.4s;

`;

const CircleButton = ({
    text="Text",
    width= "80",
    height= "80",
    bkgdColor="#FFEBEB",

    onCircleClick=()=>{}
}) => {
    return <ButtonInput width={width} height={height} bgColor={bkgdColor} onClick={onCircleClick} >
        {text}
    </ButtonInput>
}

export default CircleButton;