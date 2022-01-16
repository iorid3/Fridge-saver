import React from 'react';
import styled from 'styled-components';

// Line Component

const LineBorder = styled.div`
    display: flex;
    background-color: ${props=>props.background};
    width: ${props=>props.width};
    height: ${props=>props.height};
    margin-bottom: 30px;
`;
// pass LineBgColor to container ${props=>props.background}
//background is name

//props
//LineBgColor is value
const Line = ({
    LineBgColor="#E1E1E1",
    LineWidth="100%",
    LineHeight="15px",
}) => {
    return <LineBorder 
        background={LineBgColor}
        width={LineWidth}
        height={LineHeight}>
    </LineBorder>
}

export default Line;
