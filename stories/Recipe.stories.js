import React from 'react';
import Recipe from '../comps/Recipe';

export default {
  title: "Example/Recipe",
  component: <Recipe />
};

export const MyRecipe = () => <Recipe />

export const DryNoodleExample = () => (
  <Recipe 
    image="/DN-Eggplant.jpg"
    text="Eggplant Dry Noodle"
  />
);

export const DryRiceExample = () => (
  <Recipe 
    image="/DR-Eggplant.jpg"
    text="Eggplant Dry Rice"
  />
);

export const SoupNoodleExample = () => (
  <Recipe 
    image="/SB-Eggplant.jpg"
    text="Eggplant Soup Noodle"
  />
);

export const SoupRiceExample = () => (
  <Recipe 
    image="/SR-Eggplant.jpg"
    text="Eggplant Soup Rice"
  />
);

