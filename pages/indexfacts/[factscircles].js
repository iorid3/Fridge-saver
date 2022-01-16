import Head from 'next/head';
import Developer from '../../comps/Developer';
import Line from '../../comps/Line';
import Startbutton from '../../comps/Startbutton';
import Fridge from '../../comps/Fridge';
import styled from 'styled-components';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { factstexts } from '../../data/indexfacts';
import Facts from '../../comps/Facts';
import Navbar from '../../comps/Navigation'
import Footer from '../../comps/Footer'

const HomeCont = styled.div`
// max-width: 450px;
// height: 812px;
background-color: #FFF8F8;
overflow: scroll;

.cta-fridge {
  margin: 30px;
}

.message {
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.top {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
}

.bottom {
    display: flex;
    justify-content: center;
    align-items: center;
}

.start-button {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 80px;
}

.developer {
  margin: 35px;
}
`;

// const factstexts = {
//   fridge:{
//     fridgeclose:"fridge.png",
//     fridgeopen:"fridge-open.png"
//   },
//   heading: {
//     headtext1: "Did you know that...",
//     headtext2: "Start saving by..."
//   },
//   didyou: {
//     first: "About 63% of the food that is thrown away could be eaten or used in some sort of way",
//     second: "7% of greenhouse gases produced globally are due to preventable food waste"
//   },
//   startby: {
//     first: "Finding tips on how to maximize the longevity of vegetables",
//     second: "Using the foods you already have"
//   }
// }

export default function Home() {
  const [fridge, setFridge] = useState("fridge.png")
  const [heading, setHeading] = useState("Did you know that...") //default text
  const [first, setFirst] = useState("About 63% of the food that is thrown away could be eaten or used in some sort of way") //default text
  const [second, setSecond] = useState("7% of greenhouse gases produced globally are due to preventable food waste") //default text

  const router = useRouter();
  console.log(router.query);
  const { factscircles } = router.query;

  var headings = "default heading text";
  var firsttext = "default first text";
  var secondtext = "default second text";

  if (factscircles === "fridge") {
    fridge = factstexts.fridge.fridgeclose;
    fridge = factstexts.fridge.fridgopen;
  }

  if (factscircles === "heading") {
    headings = factstext.heading.first;
    headings = factstext.heading.second;
  }

  if (factscircles === "didyou") {
    firsttext = factstexts.didyou.first;
    secondtext = factstexts.didyou.second;
  }

  if (factscircles === "startby") {
    firsttext = factstext.startby.first;
    secondtext = factstexts.startby.second;
  }

  const HandleLeftClick = () => {
    setFridge(factstexts.fridge.fridgeclose)
    setHeading(factstexts.heading.first);
    setFirst(factstexts.didyou.first);
    setSecond(factstexts.didyou.second);
  }

  const HandleRightClick = () => {
    setFridge(factstexts.fridge.fridgeopen)
    setHeading(factstexts.heading.second);
    setFirst(factstexts.startby.first);
    setSecond(factstexts.startby.second);
  }

  return <HomeCont>
  <Navbar/>

  <div className="cta-fridge">
    <Fridge image={fridge} />
  </div>

  <div className="message">
  <Facts 
    // onLeftArrowClick={router.push("/factcircles/fridge")}
    onLeftArrowClick={HandleLeftClick}
    onRightArrowClick={HandleRightClick}

    image={fridge}
    heading={heading}
    fact1={first}
    fact2={second}
  />
  </div>
  

  <div className="start-button">
    <Startbutton text="Let's Get Started" routeTo="tutorial"/>
  </div>

  <Line />

  <div className="developer">
    <Developer name1="Iori Takeshita" content1="" name2="Claudia Shin" content2="" name3="Maggie Su" content3="" name4="Leighai Nishibata" content4="" />
  </div>

  <Footer/>

</HomeCont>
}


