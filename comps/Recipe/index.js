import React from 'react';
import styled from 'styled-components';

// Recipes Component

const RecipeCont = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    margin-bottom: 15px;
    
    @media only screen and (max-width: 400px){
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    }
`;

const ImageDiv = styled.div`
    width: 150px;
    height: 150px;
    margin-right: 5px;
`;

const RecipeImage = styled.img`
    width: 100%;
    height: 100%; 
    object-fit: cover;
`;

const IngredientsCont = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    margin: 15px 0px 15px 10px;
`;

const RecipeTitle = styled.h2`
    font-family: 'Permanent Marker', cursive;
    line-height: 1.2em;
    margin: 0px;
`;

const Recipe = ({
    image="/DN-Onion.jpg",
    text="Onion Dry Noodle",

}) => {
    return <RecipeCont>
        <ImageDiv>
        <RecipeImage src={image}/>
        </ImageDiv>
        <IngredientsCont>
            <RecipeTitle>{text}</RecipeTitle>
        </IngredientsCont>
    </RecipeCont>
}

export default Recipe;