import React from 'react';
import Line from '../comps/Line';

export default {
  title: "Example/Line",
  component: <Line />
};


export const MyLine = () => <Line /> 

export const LineExample = () => (
  <Line 
    LineBgColor="#000"
    LineWidth="80%" 
    LineHeight="5px"
  />
);