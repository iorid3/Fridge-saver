import React from 'react';
import Heart from '../comps/Heart';

export default {
    title: "example/Heart",
    component: <Heart />
}

export const DefualtHeartIcon = () => <Heart />
export const ChangedHeartIcon = () => (
    <Heart 
        icon="/heart filled.svg"
    
    />    
)
