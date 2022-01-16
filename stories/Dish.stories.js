import React from 'react';
import Dish from "../comps/Dish"

export default {
    title:"Example/Dish",
    component:<Dish/>
}

export const DefaultDish = () => <Dish/>

export const OnionDish = () => (
    <Dish
    dishname="Onion Noodle"
    />
);

export const OnionChickenDish = () => (
    <Dish
    dishname="Onion Chicken Noodle"
    />
);