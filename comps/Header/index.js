import React from 'react';
import styled from 'styled-components';

// Header Component

const HeaderCont = styled.div`
    display: flex;
    background-color: ${props=>props.backgroundTexture};
    flex-direction: column;
    align-items: center;
`;

const RecipeIcon = styled.img`
    // width: 50px;
    height: 50px; 
    // margin-top: 50px;
    margin-bottom: 50px;
`;

const HeaderText = styled.h2`
    font-family: 'Permanent Marker', cursive;
    text-align: center;
    width: 350px;
    height: 60px; 
    font-size: ${props=>props.fontsize};
`;

const HeaderSubText = styled.p`
    display: flex;
    font-family: 'Athiti';
    justify-content: center;
    // margin: 10px;
`;

const Header = ({
    icon="/plate.png",
    text="Choose What Type of Food You Want",
    text2="",
    bgcolor= "",
    fontsize="21px"
}) => {

    return <HeaderCont backgroundTexture={bgcolor}>
        <RecipeIcon src={icon}/>
        <HeaderText fontsize={fontsize}>
            {text} 
        </HeaderText>
        {/* <HeaderSubText>
            {text2}
        </HeaderSubText> */}
    </HeaderCont>
}

export default Header;