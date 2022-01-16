import React from 'react'
import styled from 'styled-components';

const InfoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width: 350px;
`;

const InfoTitle = styled.h3`
    color: #DB5959;
    font-size: 24px;
    text-align: center;
    font-family: 'Permanent Marker', cursive;
`;
    
    const InfoDescription = styled.p`
    // color: #DB5959;
    color: black;
    font-size: 18px;
    text-align: center;
    font-family: 'Athiti', sans-serif;
`;

const Information = ({
    titletext="Title",
    paratext="paragraph",
}) => {
    
    return <InfoContainer>
        <InfoTitle>
            {titletext}
        </InfoTitle>
        <InfoDescription>
            {paratext}
        </InfoDescription>
    </InfoContainer>
}

export default Information;