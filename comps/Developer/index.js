import React from 'react';
import styled from 'styled-components';
// import {useRouter} from 'next/router';

const DeveloperCont = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const HeadDeveloper = styled.h3 `
    font-family: 'Permanent Marker', cursive;
    font-variant: small-caps;
    font-style: italic;
    font-size: 24px;
`;

const NameDeveloper = styled.h4`
    margin: 5px;
    font-family: 'Athiti', sans-serif;
`;

const DetailDeveloper = styled.p`
    font-family: 'Athiti', sans-serif;
    font-size: 14px;
    margin: 0;
    padding: 0;
`;

const Developer = ({
    name1="Fullname:designer",
    name2="Fullname:designer",
    name3="Fullname:designer",
    name4="Fullname:designer",
    content1="Lorem Ipsum",
    content2="Lorem Ipsum",
    content3="Lorem Ipsum",
    content4="Lorem Ipsum"
}) => {
    // const router = useRouter();
    return <DeveloperCont>
            <HeadDeveloper>Developed By</HeadDeveloper>    
            <NameDeveloper>{name1}</NameDeveloper>
            <DetailDeveloper>{content1}</DetailDeveloper>
            <NameDeveloper>{name2}</NameDeveloper>
            <DetailDeveloper>{content2}</DetailDeveloper>
            <NameDeveloper>{name3}</NameDeveloper>
            <DetailDeveloper>{content3}</DetailDeveloper>
            <NameDeveloper>{name4}</NameDeveloper>
            <DetailDeveloper>{content4}</DetailDeveloper>
    </DeveloperCont> 
}

export default Developer;