// import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';


const BookmarkCont = styled.div`
    width: 30px;
    height: 30px;
`;

const BookmarkIcon = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`;

const Bookmark = ({
    icon="/bookmarks.png",
    routeTo="/",
    onClick=()=>{
    }}) => {
    
    const router = useRouter();
    return <BookmarkCont>
        <BookmarkIcon src={icon} onClick={()=>router.push(routeTo)} />
    </BookmarkCont>
}

//Add to Directions comp

export default Bookmark; 