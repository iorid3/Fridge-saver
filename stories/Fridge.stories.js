import React from 'react';
import Fridge from "../comps/Fridge"

export default {
    title:"Example/Fridge",
    component:<Fridge/>
}

export const DefaultFridge = () => <Fridge/>

export const FridgeOpen = () => (
    <Fridge
        image="fridge-open.png"
        width="100"
    />
);