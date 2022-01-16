import Head from 'next/head'
import styled from 'styled-components';
import Header from '../comps/Header';
import Line from '../comps/Line';
import {useRouter} from 'next/router';
import Footer from '../comps/Footer';
import Navbar from '../comps/Navigation';
import React, {component, useState,useEffect} from 'react';

const HomeCont = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  padding-bottom: 150px;

  justify-content: center;
  align-items: center;
  background-color: #FFF8F8;

    .navbar {
      width: 100%;
      padding-bottom: 20px;
    }

    .col {
      max-width: 80%;
      display:flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: flex-start;

      .row {
        flex: 25%;
        max-width: 25%;
        padding: 0 4px;
        // margin-top: 15px;
      }

      .row img {
        width: 100%;
        margin-top: 5px;
        vertical-align: middle;
      }

    
    }
`;

var data = {
  select1:null,
  select2:null,
  select3:null,
}





export default function Home() {
  const router = useRouter();
  
  
  const OnionNoodleSoup = () =>{
    data.select1 = "Noodle";
    data.select2 = "Soup";
    data.select3 = "Onion";
    sessionStorage.setItem("options2",JSON.stringify(data));
    router.push("/recipe_only/home")
  }
  
  const OnionNoodleDry = () =>{
    data.select1 = "Noodle";
    data.select2 = "Dry";
    data.select3 = "Onion";
    sessionStorage.setItem("options2",JSON.stringify(data));
    router.push("/recipe_only/home")
  }

  const OnionRiceSoup = () =>{
    data.select1 = "Rice";
    data.select2 = "Soup";
    data.select3 = "Onion";
    sessionStorage.setItem("options2",JSON.stringify(data));
    router.push("/recipe_only/home")
  }

  const OnionRiceDry = () =>{
    data.select1 = "Rice";
    data.select2 = "Dry";
    data.select3 = "Onion";
    sessionStorage.setItem("options2",JSON.stringify(data));
    router.push("/recipe_only/home")
  }

  const MushroomNoodleSoup = () =>{
    data.select1 = "Noodle";
    data.select2 = "Soup";
    data.select3 = "Mushroom";
    sessionStorage.setItem("options2",JSON.stringify(data));
    router.push("/recipe_only/home")
  }

  const MushroomNoodleDry = () =>{
    data.select1 = "Noodle";
    data.select2 = "Dry";
    data.select3 = "Mushroom";
    sessionStorage.setItem("options2",JSON.stringify(data));
    router.push("/recipe_only/home")
  }

  const MushroomRiceSoup = () =>{
    data.select1 = "Rice";
    data.select2 = "Soup";
    data.select3 = "Mushroom";
    sessionStorage.setItem("options2",JSON.stringify(data));
    router.push("/recipe_only/home")
  }

  const MushroomRiceDry = () =>{
    data.select1 = "Rice";
    data.select2 = "Dry";
    data.select3 = "Mushroom";
    sessionStorage.setItem("options2",JSON.stringify(data));
    router.push("/recipe_only/home")
  }

  const EggplantNoodleSoup = () =>{
    data.select1 = "Noodle";
    data.select2 = "Soup";
    data.select3 = "Eggplant";
    sessionStorage.setItem("options2",JSON.stringify(data));
    router.push("/recipe_only/home")
  }

  const EggplantNoodleDry = () =>{
    data.select1 = "Noodle";
    data.select2 = "Dry";
    data.select3 = "Eggplant";
    sessionStorage.setItem("options2",JSON.stringify(data));
    router.push("/recipe_only/home")
  }

  const EggplantRiceSoup = () =>{
    data.select1 = "Rice";
    data.select2 = "Soup";
    data.select3 = "Eggplant";
    sessionStorage.setItem("options2",JSON.stringify(data));
    router.push("/recipe_only/home")
  }

  const EggplantRiceDry = () =>{
    data.select1 = "Rice";
    data.select2 = "Dry";
    data.select3 = "Eggplant";
    sessionStorage.setItem("options2",JSON.stringify(data));
    router.push("/recipe_only/home")
  }

  const PepperNoodleSoup = () =>{
    data.select1 = "Noodle";
    data.select2 = "Soup";
    data.select3 = "Pepper";
    sessionStorage.setItem("options2",JSON.stringify(data));
    router.push("/recipe_only/home")
  }

  const PepperNoodleDry = () =>{
    data.select1 = "Noodle";
    data.select2 = "Dry";
    data.select3 = "Pepper";
    sessionStorage.setItem("options2",JSON.stringify(data));
    router.push("/recipe_only/home")
  }

  const PepperRiceSoup = () =>{
    data.select1 = "Rice";
    data.select2 = "Soup";
    data.select3 = "Pepper";
    sessionStorage.setItem("options2",JSON.stringify(data));
    router.push("/recipe_only/home")
  }

  const PepperRiceDry = () =>{
    data.select1 = "Rice";
    data.select2 = "Dry";
    data.select3 = "Pepper";
    sessionStorage.setItem("options2",JSON.stringify(data));
    router.push("/recipe_only/home")
  }

  const TomatoNoodleSoup = () =>{
    data.select1 = "Noodle";
    data.select2 = "Soup";
    data.select3 = "Tomato";
    sessionStorage.setItem("options2",JSON.stringify(data));
    router.push("/recipe_only/home")
  }

  const TomatoNoodleDry = () =>{
    data.select1 = "Noodle";
    data.select2 = "Dry";
    data.select3 = "Tomato";
    sessionStorage.setItem("options2",JSON.stringify(data));
    router.push("/recipe_only/home")
  }

  const TomatoRiceSoup = () =>{
    data.select1 = "Rice";
    data.select2 = "Soup";
    data.select3 = "Tomato";
    sessionStorage.setItem("options2",JSON.stringify(data));
    router.push("/recipe_only/home")
  }

  const TomatoRiceDry = () =>{
    data.select1 = "Rice";
    data.select2 = "Dry";
    data.select3 = "Tomato";
    sessionStorage.setItem("options2",JSON.stringify(data));
    router.push("/recipe_only/home")
  }

  const CarrotNoodleSoup = () =>{
    data.select1 = "Noodle";
    data.select2 = "Soup";
    data.select3 = "Carrot";
    sessionStorage.setItem("options2",JSON.stringify(data));
    router.push("/recipe_only/home")
  }

  const CarrotNoodleDry = () =>{
    data.select1 = "Noodle";
    data.select2 = "Dry";
    data.select3 = "Carrot";
    sessionStorage.setItem("options2",JSON.stringify(data));
    router.push("/recipe_only/home")
  }

  const CarrotRiceSoup = () =>{
    data.select1 = "Rice";
    data.select2 = "Soup";
    data.select3 = "Carrot";
    sessionStorage.setItem("options2",JSON.stringify(data));
    router.push("/recipe_only/home")
  }

  const CarrotRiceDry = () =>{
    data.select1 = "Rice";
    data.select2 = "Dry";
    data.select3 = "Carrot";
    sessionStorage.setItem("options2",JSON.stringify(data));
    router.push("/recipe_only/home")
  }
           



  







  
  return <HomeCont>
    <Head>
      <title>Recipes</title>
    </Head>
    <div className="navbar">
      <Navbar 
        visibility = "hidden" onClick={()=>router.push("/")}
      />
    </div>
    <Header icon="/recipe-book.png" text="Recipes"/>
    <Line LineBgColor="#000" LineWidth="70%" LineHeight="3px"/>
    <div className="col">
      <div className="row">
          <img className="item" src="/DN-Onion.jpg" onClick={OnionNoodleDry}/>  {/*onion noodle dry */}
          <img className="item" src="/DR-Mushroom.jpg" onClick={MushroomRiceDry}/>  {/*mushroom rice dry */}
          <img className="item" src="/SB-Eggplant.jpg" onClick={EggplantNoodleSoup}/>  {/*eggplant noodle soup */}
          <img className="item" src="/DN-Carrot.jpg" onClick={CarrotNoodleDry}/>   {/*carrot noodle dry */}
          <img className="item" src="/NS-Mushroom.jpeg" onClick={MushroomNoodleSoup}/>  {/*mushroom noodle soup */}
          <img className="item" src="/SB-Pepper.jpg" onClick={PepperNoodleSoup}/>   {/*pepper noodle soup */}
          <img className="item" src="/SR-Onion.jpg" onClick={OnionRiceSoup}/>   {/*onion rice soup */}
          <img className="item" src="/carrot_rice_soup.jpeg" onClick={CarrotRiceSoup}/>  {/*carrot rice soup */}
          <img className="item" src="/Spicy-Carrot-Fried-Rice.png" onClick={CarrotRiceDry}/>  {/*carrot rice dry */}
      </div>
      <div className="row">
          <img className="item" src="/SR-Pepper.jpg" onClick={PepperRiceSoup}/>  {/*pepper rice soup*/}
          <img className="item" src="/DN-Eggplant.jpg" onClick={EggplantNoodleDry}/> {/*eggplant noodle dry */}
          <img className="item" src="/DR-pepper.jpeg" onClick={PepperRiceDry}/>  {/*pepper rice dry */}
          <img className="item" src="/DN-Tomato.jpg" onClick={TomatoNoodleDry}/>  {/*tomato noodle dry */}
          <img className="item" src="/DR-Onion.jpg" onClick={OnionRiceDry}/>  {/*onion rice dry */}
          <img className="item" src="/SB-Tomato.jpg" onClick={TomatoNoodleSoup}/>  {/*tomato noodle soup  */}
          <img className="item" src="/tomato_rice_soup.jpeg" onClick={TomatoRiceSoup}/> {/*tomato rice soup */}
          <img className="item" src="/DN-Pepper.jpg" onClick={PepperNoodleDry}/>   {/*pepper noodle dry */}
      </div>
      <div className="row">
          <img className="item" src="/DR-Eggplant.jpg" onClick={EggplantRiceDry}/>  {/*eggplant rice dry */}
          <img className="item" src="/SB-Onion.jpg" onClick={OnionNoodleSoup}/>   {/*onion noodle soup */}
          <img className="item" src="/SR-Mushroom.jpg" onClick={MushroomRiceSoup}/> {/*mushroom rice soup */}
          <img className="item" src="/mushroom_pasta.jpeg" onClick={MushroomNoodleDry}/>  {/*mushroom noodle dry */}
          <img className="item" src="/SB-Carrots.jpg" onClick={CarrotNoodleSoup}/>   {/*carrot noodle soup */}
          <img className="item" src="/SR-Eggplant.jpg" onClick={EggplantRiceSoup}/>   {/*eggplant rice soup */}
          <img className="item" src="/Tomato-Fried-Rice.jpeg" onClick={TomatoRiceDry}/> {/*tomato rice dry*/}
      </div>
    </div>
    <Footer/>
  </HomeCont>
}