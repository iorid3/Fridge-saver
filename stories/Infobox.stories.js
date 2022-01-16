import React from 'react';
import Infobox from '../comps/Infobox';

export default {
    title: "example/Infobox",
    component: <Infobox /> // Infobox div is react syntax
};

export const InformationBox = () => <Infobox />   

export const SecondaryInfoBox = () => <Infobox text="Congrats! You just saved $20 by making food at home!"/>    

export const TertiaryInfoBox = () => (
    <Infobox 
    bkgrdColor = "#FAD"
    />
);