import Head from 'next/head'
import styled from 'styled-components';
import Header from '../comps/Header';
import StartButton from '../comps/Startbutton';
import Footer from '../comps/Footer';
import Navbar from '../comps/Navigation';
import {useRouter} from 'next/router';

const HomeCont = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #FFF8F8;
  padding-bottom: 600px;

  
    .navbar {
      width: 100%;
      padding-bottom: 20px;
    }

    p {
      display:flex;
      justify-content: center;
      align-items: center;
      font-family: 'Athiti', sans-serif;
    }

    .top {
      display:flex;
      flex-direction: column;

      .step {
        line-height: 30px;
        margin: 5px;
      }

      .bold {
        font-weight: bold;
      }
    }

    p.bottom {
      display:flex;
      font-weight: bold;
      margin-top: 25px;
    }

    .startbutton {
      display: flex;
      height: 15%;
      justify-content: center;
      align-items: flex-end;
      margin-top: 45px;
    }
`;


var data = {
  select1:null,
  select2:null,
  select3:null,
}


export default function Home() {
  const router = useRouter();



  
  return <HomeCont>
    <Head>
      <title>Tutorial</title>
    </Head>
    <div className="navbar">
      <Navbar 
        onClick={()=>router.push("/facts/topic1")}
      />
    </div>
    <Header icon="/video-tutorial.png" text="Tutorial" text2="(Based on single servings)"/>
    <div className="top">
      <p className="step"><span class="bold">Step 1</span> - Select your veggies</p>
      <p className="step"><span class="bold">Step 2</span> - Select your main</p>
      <p className="step"><span class="bold">Step 3</span> - Select your style</p>
    </div>
    <p className="bottom">Voila! You have your recipe!!</p>
    <div className="startbutton">
    <StartButton text="Let’s Get Started"  width="200px" routeTo="options_two/home" />
    </div>
    <Footer/>
  </HomeCont>
}