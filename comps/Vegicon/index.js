import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';



const IconCont = styled.div`
    margin: 0 5px 5px 5px;
`;
const IconInput = styled.button`
    width: 60px;
    height: 60px;
    border-radius: 30px;
    background-color: ${props=>props.background};
    border: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
const IconImage = styled.img`
    width: 37px;
    height: 37px;
    object-fit: contain;
`;



const Vegicon = ({

    bgcolor="#FEF2CA",
    src='/carrot.png',
    onClick=()=>{}

}) => {
    const router = useRouter();

    return <IconCont onClick={onClick}>
        <IconInput background={bgcolor}>
        <IconImage src={src}/>
        </IconInput>
    </IconCont>
}
export default Vegicon;