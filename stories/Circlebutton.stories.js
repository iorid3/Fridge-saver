import React from 'react';
import CircleButton from '../comps/Circlebutton';

export default {
    title:"Example/Circle Button",
    component:<CircleButton/>
}

export const DefaultCircle = () => <CircleButton/>

export const CostCircle = () => <CircleButton text="Costs Saved"/>

export const DonateCircle = () => <CircleButton text="Donate Food"/>

export const TipsCircle = () => <CircleButton text="Tips"/>