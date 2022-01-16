import Head from 'next/head';
import Navbar from '../comps/Navigation';
import Fridge from '../comps/Fridge';
import Facts from '../comps/Facts';
import Startbutton from '../comps/Startbutton';
import Footer from '../comps/Footer';
import styled from 'styled-components';
import React, { useState } from 'react';
import { factstexts } from '../data/indexfacts';
import { useRouter } from 'next/router';

const HomeCont = styled.div`
height: 812px;
background-color: #FFF8F8;
overflow: scroll;
padding-bottom: 70px;

.cta-fridge {
  margin: 90px;
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

export default function Home() {
  const [fridge, setFridge] = useState("fridge.png") //default image
  const [heading, setHeading] = useState("Did you know that...") //default text
  const [first, setFirst] = useState("About 63% of the food that is thrown away could be eaten or used in some sort of way") //default text
  const [second, setSecond] = useState("7% of greenhouse gases produced globally are due to preventable food waste") //default text
  const [visibility, setButton] = useState("hidden")

  const HandleLeftClick = () => {
    setFridge(factstexts.fridge.fridgeclose)
    setHeading(factstexts.heading.first);
    setFirst(factstexts.didyou.first);
    setSecond(factstexts.didyou.second);
    setButton(factstexts.visibility.first);
  }

  const HandleRightClick = () => {
    setFridge(factstexts.fridge.fridgeopen)
    setHeading(factstexts.heading.second);
    setFirst(factstexts.startby.first);
    setSecond(factstexts.startby.second);
    setButton(factstexts.visibility.second);
  }

  const router = useRouter();
  return <HomeCont>
    <Navbar onClick={() => router.push("/")}
    />

    <div className="cta-fridge">
      <Fridge image={fridge} />
    </div>

    <div className="message">
      <Facts
        onLeftArrowClick={HandleLeftClick}
        onRightArrowClick={HandleRightClick}

        image={fridge}
        heading={heading}
        fact1={first}
        fact2={second}
      />
    </div>


    <div className="start-button">
      <Startbutton text="More Facts" visibility={visibility} routeTo="/facts/topic1"
      />
    </div>

    <Footer />

  </HomeCont>
}


