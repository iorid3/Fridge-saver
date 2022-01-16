import React from 'react';
import Developer from '../comps/Developer';

export default {
    title: "example/Developer",
    component: <Developer />
}

export const DefualtDeveloper = () => <Developer />
export const OurDeveloper = () => (
    <Developer
        name1="Iori Takeshita" 
        name2="Claudia Shin"
        name3="Maggie Su"
        name4="Leighai Nishibata"
    />
);