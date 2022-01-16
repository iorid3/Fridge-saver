import React from 'react';
import StartButton from '../comps/Startbutton';

export default {
    title:"Example/Start Button",
    component:<StartButton/>
}

export const DefaultButton = () => <StartButton/>

export const StartButtonWithTextProp = () => <StartButton text="Let's Get Started"/>

export const SkipButtonWithTextAndBorderProp = () => (
    <StartButton
    text="Skip"
    width="120px"
    />
);