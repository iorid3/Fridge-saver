import React from 'react';
import Information from '../comps/Information';

export default {
    title: "Example/Information",
    component: <Information />
}

export const DefaultInformation = () => <Information />

export const LandingPageInformation = () => (
    <Information
        titletext="WHAT THIS APP DOES"
        paratext="This mobile application provides recipes focused on using the foods in your fridge to save time and costs, all while minimizing food waste."
    />
);

export const AboutInformation = () => (
    <Information
    titletext=""
    paratext="In Canada, the amount of food waste Canadians produce costs Canada's economy roughly an estimated $49 billion a year. About 63% of the food that is thrown away could be eaten or used. Bringing awareness to the problem could reduce the amohnt of food waste in our society. By using a tool, they have the ability to interact and visually see how they could make better use of the resources at hand."
    />
);