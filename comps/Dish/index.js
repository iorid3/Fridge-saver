    import React from 'react';
    import styled from 'styled-components';
    import {useRouter} from "next/router"

    const DishContainer = styled.div`;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items: center;
        max-width:450px;

        .cloumn{
            display:flex;
            flex-direction:column;
        }
        .text{
            font-family: 'Athiti', sans-serif;
            font-size:15px;
        }

    `;

    const Box = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    width:100%;
    margin:20px;
    border:none;
    box-shadow: 5px 5px 5px rgba(0,0,0,0.4);
    border-radius:20px;
    `

    const DishName = styled.div`
        display:flex;
        font-family: 'Athiti', sans-serif;
        font-weight: bold;
        font-size:15px;
        text-align: center;
        color: #000000;
        margin:10px;
    `;

    const DishImage = styled.img`
        display:flex;
        width: 40%;
        height: 60%;
        margin-bottom:10px;
        border-radius: 5px;
        margin:10px;
    `;


    //props
    const Dish = ({
        dishname1="Dish Name",
        dishname2="Dish Name",
        dishurl1 = "/onionnoodle.jpeg",
        dishurl2 = "/",
        onClick1=()=>{},
        onClick2=()=>{},
        subtext1 = "Prep Time 10 minutesCook Time 15 minutesTotal Time 25 minutesCalories: 345 kcalsm ",
        subtext2 = "A humble dish from Shanghai, onion oil noodles is simple but delectable. It can be served as breakfast, lunch, dinner, or even as a side dish for parties."

    }) => {
        return <DishContainer>
               
                <Box>
                <DishImage src={dishurl1} onClick = {onClick1}/>
                    <div className = "column">
                        <DishName>{dishname1}</DishName>
                        <div className = "text">{subtext1}</div>
                    </div>
                </Box>

                <Box>
                    <DishImage src={dishurl2} onClick = {onClick2}/>
                    <div className = "column">
                        <DishName>{dishname2}</DishName>
                        <div className = "text">{subtext2}</div>
                    </div>
                    
                </Box>
                    
            

        </DishContainer>
    }

    export default Dish;