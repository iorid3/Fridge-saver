import styled from 'styled-components';
import Footer from '../../comps/Footer';
import React, {component, useState} from 'react';
import Button from '../../comps/Buttons';
import {useRouter} from 'next/router';
import Navbar from "../../comps/Navigation"
import StartButton from '../../comps/Startbutton';


const HomeCont = styled.div`
    background-color: #FFF8F8;
    display: flex;
    flex-direction: column;
    padding-bottom: 200px;

    .logo {
        width: 200px;
        height: 200px;
        margin-top: 20px;
        margin-bottom: 15px;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    // .info {
    //     display:flex;
    //     max-width: 310px;
    //     font-family: 'Athiti', sans-serif;
    //     font-size: 16px;
    //     text-align: center;
    //     color: #595959;
    //     margin-top: 15px;
    //     margin-bottom: 20px;
    // }

    .title{
        font-family:"Permanent Marker";
        font-size: 24px;
    }

    .column{
        display:flex;
        flex-direction:column;
        align-items: center;
    }

    .row{
      display:flex;
      max-width: 310px;
      font-family: 'Athiti', sans-serif;
      font-size: 16px;
      text-align: center;
      font-weight: bold;
      color: #595959;
      margin-top: 15px;
      margin-bottom: 20px;
    }

    .tutorialbutton {
        margin-top: 60px;
    }
`;

const issue = {
    topic1: {
        topic:"In Canada, the amount of food waste Canadians produce costs the economy roughly an estimated $49 billion a year. About 63% of food that is thrown away could be eaten or stored away. On average, a Canadian household will waste about 140kgs of food on average; therefore, which is a total of $1,100 per year and almost $100 per month. ",
        bg1: "#FBD0A9",
    },
    topic2: {
        topic:"When food is processed and manufactured, about 4.82 million tonnes of food is lost which is equivalent to $21 billion. Most foods are thrown out in the initial phases because they do not meet production standards before they hit the shelves or discarded because they are not stored carefully and have reached the expiration date.",
        bg2: "#FBD0A9",
    },
    topic3: {
        topic:"One of the leading contributors to gas emissions would be from our food system. When fossil fuels are burned, they create greenhouse gas emissions such as methane, and these gases are produced during the harvesting, processing, distributing, and decomposition. It is estimated that 7% of greenhouse gases produced globally are due to preventable food waste.",
        bg3: "#FBD0A9",
    },
    topic4: {
        topic:"Wasted food that ends up in the landfill produces methane gases which is 21x more potent than carbon dioxide. Foods that end up in landfills and not through proper food compost take longer to decompose due to the lack of aerobic processes and therefore produce methane gases when broken down.",
        bg4: "#FBD0A9",
    }
}

export default function Home() {
    const router = useRouter();
    const {facts} = router.query; 

    var text = "text";
    var bgcolor1 = "#FEF2CA";
    var bgcolor2 = "#FEF2CA";
    var bgcolor3 = "#FEF2CA";
    var bgcolor4 = "#FEF2CA";
    
    if(facts === 'topic1'){
        text = issue.topic1.topic
        bgcolor1 = issue.topic1.bg1
   }

    if(facts === 'topic2'){
        text = issue.topic2.topic
        bgcolor2 = issue.topic2.bg2
    }

    if(facts === 'topic3'){
        text = issue.topic3.topic
        bgcolor3 = issue.topic3.bg3
    }

    if(facts === 'topic4'){
        text = issue.topic4.topic
        bgcolor4 = issue.topic4.bg4
    }


    return <HomeCont>
       
        <Navbar onClick={()=>router.push("/index2")} />
            <div className = "column">
                <div className="logo">
                    <img src="/Logo.png" />
                </div>
                <div className = "title">
                    Facts on Food Waste
                </div>
                <div className = "row">
                    {text}
                </div>
                <Button bgcolor={bgcolor1} onClick = {()=>router.push("/facts/topic1")}/>
                <Button text = {"Discarded Foods"} bgcolor={bgcolor2} onClick =  {()=>router.push("/facts/topic2")}/>
                <Button text = {"Greenhouse Gases"} bgcolor={bgcolor3} onClick = {()=>router.push("/facts/topic3")}/>
                <Button text = {"Food in Landfills"} bgcolor={bgcolor4} onClick  = {()=>router.push("/facts/topic4")}/>
                <div class="tutorialbutton">
                <StartButton text="Go to Tutorial" width="220px" routeTo="/tutorial"/>
                </div>
            </div> 
        <Footer />
    </HomeCont>
}
