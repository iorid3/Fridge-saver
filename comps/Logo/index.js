import React from 'react';
import styled, {keyframes} from 'styled-components';
import {useRouter} from 'next/router';

const AnimateLogo = keyframes`
    0% {
        transform: scale(0.8);
    }
    100% {
        transform: scale(1.1);
    }
`;

const LogoContainer = styled.div`;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 100px;
`;

const LogoImage = styled.img`
    width: ${props=>props.width}px;
    object-fit: contain;
    animation: ${AnimateLogo} 1.5s ease infinite;
`;

//props
const Logo = ({
    image="/Logo.png",
    width="250",
    routeTo=""
}) => {
    const router = useRouter();
    return <LogoContainer onClick={()=>router.push(routeTo)}>
        <LogoImage src={image} width={width}/>
    </LogoContainer>
}

export default Logo;