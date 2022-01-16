import React from 'react';
import Header from '../comps/Header';

export default {
  title: "Example/Header",
  component: <Header />
};


export const MyHeader = () => <Header />

export const TutorialWithoutBackgroundTexture = () => (
  <Header 
    icon="/video-tutorial.png"
    text="Tutorial" 
    text2="(Based on single servings)"
    bgcolor= "#FFF"
  />
);

export const StyleOptions = () => (
  <Header 
    icon="/plate.png"
    text="Choose which style of food you want" 
  />
);

export const FoodOptionsWithoutBackgroundTexture = () => (
  <Header 
    icon="/salad.png"
    text="Choose one of the vegetables below that is about to expire"
    bgcolor= "#FFF" 
  />
);

export const ChooseRecipes = () => (
  <Header 
    icon="/recipe-book.png"
    text="Choose the recipe you want to try"
  />
);