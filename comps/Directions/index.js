import React from 'react';
import styled from 'styled-components';
import Bookmark from '../../comps/Bookmark';

const DirectionCont =styled.div`
display:flex;
flex-direction:column;
// justify-content: center;
// align-items: center;
width:${props=>props.width}px;
height:${props=>props.height}px;

@media only screen and (max-width: 400px){
    display: flex;
    flex-direction: column;
    width: 300px;
}

@media only screen and (min-width: 401px) and (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    width: 380px;
}

@media only screen and (min-width: 1090px) {
    display: flex;
    flex-direction: column;
    width: 500px;
}
`

const BoxTitle =styled.h3`
display:flex;
align-self:flex-start;
margin: 15px 0px 0px 10px;
font-family: 'Permanent Marker';
`
const BookmarkDiv = styled.div`
    width: 90%;
    display: flex;
    justify-content: flex-end;
    padding: 5px 5px 0px 0px;
`;

const BoxSubText =styled.h2`
display:flex;
justify-content:center;
// align-self:center;
margin:10px;
font-size:15px;
font-family: 'Athiti';
`

const Direction =({

    width = "",
    height = "",
    subtext1 = "1. Heat the olive oil in a large pot over medium-high heat. Add the onion and cook until translucent, about 4 minutes. Add the garlic and cook 30 seconds. Add the celery and carrot and cook until they begin to soften, about 5 minutes. Stir in the green beans, dried oregano and basil, 3/4 teaspoon salt, and pepper to taste; cook 3 more minutes.",
    subtext2 = "1. Heat the olive oil in a large pot over medium-high heat. Add the onion and cook until translucent, about 4 minutes. Add the garlic and cook 30 seconds. Add the celery and carrot and cook until they begin to soften, about 5 minutes. Stir in the green beans, dried oregano and basil, 3/4 teaspoon salt, and pepper to taste; cook 3 more minutes.",
    subtext3 = "1. Heat the olive oil in a large pot over medium-high heat. Add the onion and cook until translucent, about 4 minutes. Add the garlic and cook 30 seconds. Add the celery and carrot and cook until they begin to soften, about 5 minutes. Stir in the green beans, dried oregano and basil, 3/4 teaspoon salt, and pepper to taste; cook 3 more minutes.",
    subtext4 = "1. Heat the olive oil in a large pot over medium-high heat. Add the onion and cook until translucent, about 4 minutes. Add the garlic and cook 30 seconds. Add the celery and carrot and cook until they begin to soften, about 5 minutes. Stir in the green beans, dried oregano and basil, 3/4 teaspoon salt, and pepper to taste; cook 3 more minutes.",
})=>{


    return <DirectionCont width = {width} height = {height}>
     {/* <BookmarkDiv><Bookmark routeTo="/saved"/></BookmarkDiv> */}

     <BoxTitle>Directions</BoxTitle>
     <BoxSubText>{subtext1}</BoxSubText>
     <BoxSubText>{subtext2}</BoxSubText>
     <BoxSubText>{subtext3}</BoxSubText>
     <BoxSubText>{subtext4}</BoxSubText>

    </DirectionCont>
}

export default Direction;