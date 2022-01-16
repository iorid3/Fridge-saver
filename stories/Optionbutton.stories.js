import React from 'react';
import OptionButton from '../comps/Optionbutton';

export default {
    title: "example/OptionButton",
    component: <OptionButton />
}

export const DefualtOptionButton = () => <OptionButton />
export const CategoriesOptionButton = () => (
    <OptionButton 
        text="Noodle"
        bgcolor="#FBD0A9"
        img="/noodles_for_page.svg"
    />
)
export const StyleOptionButton = () => (
    <OptionButton 
        text="Soup Based"
        img="/noodles_soup.png"
    />
)
export const OtherStyleOptionButton = () => (
    <OptionButton 
        text="Dry Based"
        bgcolor="#FBD0A9"
        img="/rice_dry.png"
    />
)
