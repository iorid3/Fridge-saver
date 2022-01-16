import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';

const FridgeContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const FridgeImage = styled.img`
    width: ${props=>props.width}px;
    height: 120px;
    object-fit: contain;
`;

//props
const Fridge = ({
    image="fridge.png",
    width="140",
    routeTo=""
}) => {
    const router = useRouter();
    return <FridgeContainer onClick={()=>router.push(routeTo)}>
        <FridgeImage src={image} width={width}/>
    </FridgeContainer>
}

export default Fridge;