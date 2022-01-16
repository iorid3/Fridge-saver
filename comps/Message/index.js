import styled from 'styled-components';
import React, { useState } from 'react'
// import { useRouter } from 'next/router';

const MsgButtCont = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const FactsCont = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    // background-color: #FFF3F3;
    // width: 500px;
    // height: 220px;
    // border-radius: 0px 0px 30px 30px
`;

const FactsText = styled.div`
    width: 150px;
    height: 150px;
    background-color: rgba(224, 158, 158, 0.3);
    border-radius: 100%;
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    text-align: center;
    font-family: 'Athiti';
    font-size: 16px;
    padding: 20px;
`;


const Message = ({
    firstfact="First Message",
    secondfact="Second Message"
}) => {

    // const [open, setOpen] = useState(false);
    return <MsgButtCont>
        <FactsCont>
            <FactsText>{firstfact}</FactsText>
            <FactsText>{secondfact}</FactsText>
        </FactsCont>
    </MsgButtCont>
}

export default Message;