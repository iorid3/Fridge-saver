// import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';


const HeartCont = styled.div`
    width: 30px;
    height: 30px;
`;

const HeartIcon = styled.img`
    width: 100%;
    height: 100%;
    object-fit: fit;
`;

const Heart = ({
    icon="/heart_outline.svg",
    routeTo="/",
    onClick=()=>{
    }}) => {
    
    const router = useRouter();
    return <HeartCont>
        <HeartIcon src={icon} onClick={()=>router.push(routeTo)} />
    </HeartCont>
}

export default Heart; 