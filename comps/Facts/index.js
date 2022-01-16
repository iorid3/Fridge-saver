import styled from 'styled-components';
import React, { useState } from 'react';

const FactsCont = styled.div`
    background-color: #FFF3F3;
    // width: 480px;
    height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px;
    border-radius: 20px;

    @media only screen and (max-width: 400px) {
        height: 600px;
    }
`;

const Heading = styled.p`
    font-family: 'Athiti';
    font-size: 24px;
    font-weight: bold;
`;

const FactCirclesCont = styled.div`
    font-family: 'Athiti';
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px;
    flex-direction: row;
    width: 500px;

    @media only screen and (max-width: 400px) {
        display: flex;
        flex-direction: column;
        margin-bottom: 30px;
    }
`;

const FactCircle1 = styled.div`
    background-color: #F3D4D4;
    width: 130px;
    height: 130px;
    border-radius: 50%;
    padding: 25px;
    text-align: center;
    margin: 20px;
    display:flex;
    align-items: center;
    justify-content: center;
`;

const FactCircle2 = styled.div`
    background-color: #F3D4D4;
    width: 130px;
    height: 130px;
    border-radius: 50%;
    padding: 25px;
    text-align: center;
    margin: 20px;
    display:flex;
    align-items: center;
    justify-content: center;
`;

const ArrowImgCont = styled.div`
    display: flex;
    margin-bottom: 30px;
`;

const ArrowImg = styled.img`
    width: 40px;
    padding: 5px;
`;

const Facts = ({
    heading = "Did you know that...",
    fact1 = "About 63% of the food that is throw away could be eaten or used in some sort of way",
    fact2 = "7% of greenhouse gases produced globally are due to preventable fodo waste",
    leftarrow = "arrow-left.png",
    rightarrow = "arrow-right.png",
    // onDidYouClick=()=>{},
    // onStartByClick=()=>{},
    onClick=()=>{},

    onLeftArrowClick=()=>{},
    onRightArrowClick=()=>{},
}) => {
    // const [open, setOpen] = useState(false);
    
    return <FactsCont>
        <Heading>{heading}</Heading>
        <FactCirclesCont>
            <FactCircle1>{fact1}</FactCircle1>
            <FactCircle2>{fact2}</FactCircle2>
        </FactCirclesCont>
        <ArrowImgCont onClick={onClick}>
            <ArrowImg src={leftarrow} onClick={onLeftArrowClick}/>
            <ArrowImg src={rightarrow} onClick={onRightArrowClick}/>
        </ArrowImgCont>
    </FactsCont>
}

export default Facts;