import Head from 'next/head'
import styled from 'styled-components';
import Recipe from '../../comps/Recipe';
import Direction from '../../comps/Directions';
import {useRouter} from 'next/router';
import Footer from '../../comps/Footer';
import React, {useState,useEffect} from 'react';
import Navbar from '../../comps/Navigation';
import {recipeCategories} from '../../data/recipetexts';
import StartButton from '../../comps/Startbutton';
import PrepIngred from '../../comps/Prepingred';
import {results_pepper} from '../../data/results_pepper';
import {results_onion} from '../../data/results_onion';
import {results_eggplant} from '../../data/results_eggplant';
import {results_carrot} from '../../data/results_carrot';
import {results_mushroom} from '../../data/results_mushroom';
import {results_tomato} from '../../data/results_tomato';

// next.js - make page where you can capture the parameter after the folder name

const recipe = {
  ...results_pepper,
  ...results_onion,
  ...results_eggplant,
  ...results_carrot,
  ...results_mushroom,
  ...results_tomato
}

const HomeCont = styled.div`
  display: flex;
  flex-direction: column;
  // height: 100vh;
  // height: 812px;
  justify-content:center;
  align-items: center;
  background-color: #FFF8F8;
  overflow: scroll; 
  padding-bottom: 200px;
  
    .navbar {
      width: 100%;
    }

    .directions {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 370px;
      padding-bottom: 15px;
      margin-bottom: 15px;
    }

    .bottom {
      display: flex;
      height: 180px;
      justify-content: center;
      align-items: flex-start;
      margin-top: 50px;
    }
`;


var subtext1 = "Step 1: ";
var subtext2 = "Step 2: ";
var subtext3 = "Step 3: ";
var subtext4 = "Step 4: ";
var image = "/DN-Onion.jpg";
var title = "Dry Onion Noodle";
var prep1="prep1";
var prep2="prep2";
var prep3="prep3";
var prep4="prep4";
var ingred1="ingred1";
var ingred2="ingred2";
var ingred3="ingred3";
var ingred4="ingred4";
var ingred5="ingred5";
var ingred6="ingred6";




export default function Home() {
  const router = useRouter();
  const {recipe} = router.query;  //{recipe} = [recipe].js variable is what you type in the browswer eg. iteems2/big
  const [data,setData] = useState({
    select1:"",
    select2:"",
    select3:""      
  })

  //  var subtext1 = "Step 1: ";
  //  var subtext2 = "Step 2: ";
  //  var subtext3 = "Step 3: ";
  //  var subtext4 = "Step 4: ";
  //  var image = "/DN-Onion.jpg";
  //  var title = "Dry Onion Noodle";
  //  var listText1 = "Ingredient 1" ;
  //  var listText2 = "Ingredient 2" ;
  //  var listText3 = "Ingredient 3" ;
  //  var listText4 = "Ingredient 4" ;
  //  var listText5 = "Ingredient 5" ;
  //  var listText6 = "Ingredient 6" ;
  //  var prep1="prep1";
  //  var prep2="prep2";
  //  var prep3="prep3";
  //  var prep4="prep4";
  //  var ingred1="ingred1";
  //  var ingred2="ingred2";
  //  var ingred3="ingred3";
  //  var ingred4="ingred4";
  //  var ingred5="ingred5";
  //  var ingred6="ingred6";

   const[text,setText] =useState(null);
  

  useEffect(()=>{

    if(process.browser){

      var data =sessionStorage.getItem("options2");
      var obj =JSON.parse(data);
      setData(obj)

      var decision = obj.select3 + obj.select1 +obj.select2
      console.log(results_pepper.PepperRiceSoup.subtext1)

      if(decision === "PepperRiceSoup"){
         subtext1 =  results_pepper.PepperRiceSoup.subtext1;
         subtext2 = results_pepper.PepperRiceSoup.subtext2;
         subtext3 = results_pepper.PepperRiceSoup.subtext3;
         subtext4 = results_pepper.PepperRiceSoup.subtext4;
         image = results_pepper.PepperRiceSoup.image;
         title = results_pepper.PepperRiceSoup.title;
         prep1 = results_pepper.PepperRiceSoup.prep1;
         prep2 = results_pepper.PepperRiceSoup.prep2;
         prep3 = results_pepper.PepperRiceSoup.prep3;
         prep4 = results_pepper.PepperRiceSoup.prep4;
         ingred1 =results_pepper.PepperRiceSoup.ingred1;
         ingred2 =results_pepper.PepperRiceSoup.ingred2;
         ingred3 =results_pepper.PepperRiceSoup.ingred3;
         ingred4 =results_pepper.PepperRiceSoup.ingred4;
         ingred5 =results_pepper.PepperRiceSoup.ingred5;
         ingred6 =results_pepper.PepperRiceSoup.ingred6;
       }

       if(decision === "PepperRiceDry"){
        subtext1 =  results_pepper.PepperRiceDry.subtext1;
        subtext2 = results_pepper.PepperRiceDry.subtext2;
        subtext3 = results_pepper.PepperRiceDry.subtext3;
        subtext4 = results_pepper.PepperRiceDry.subtext4;
        image = results_pepper.PepperRiceDry.image;
        title = results_pepper.PepperRiceDry.title;
        prep1 = results_pepper.PepperRiceDry.prep1;
        prep2 = results_pepper.PepperRiceDry.prep2;
        prep3 = results_pepper.PepperRiceDry.prep3;
        prep4 = results_pepper.PepperRiceDry.prep4;
        ingred1 =results_pepper.PepperRiceDry.ingred1;
        ingred2 =results_pepper.PepperRiceDry.ingred2;
        ingred3 =results_pepper.PepperRiceDry.ingred3;
        ingred4 =results_pepper.PepperRiceDry.ingred4;
        ingred5 =results_pepper.PepperRiceDry.ingred5;
        ingred6 =results_pepper.PepperRiceDry.ingred6;
      }

      if(decision === "PepperNoodleSoup"){
        subtext1 =  results_pepper.PepperNoodleSoup.subtext1;
        subtext2 = results_pepper.PepperNoodleSoup.subtext2;
        subtext3 = results_pepper.PepperNoodleSoup.subtext3;
        subtext4 = results_pepper.PepperNoodleSoup.subtext4;
        image = results_pepper.PepperNoodleSoup.image;
        title = results_pepper.PepperNoodleSoup.title;
        prep1 = results_pepper.PepperNoodleSoup.prep1;
        prep2 = results_pepper.PepperNoodleSoup.prep2;
        prep3 = results_pepper.PepperNoodleSoup.prep3;
        prep4 = results_pepper.PepperNoodleSoup.prep4;
        ingred1 =results_pepper.PepperNoodleSoup.ingred1;
        ingred2 =results_pepper.PepperNoodleSoup.ingred2;
        ingred3 =results_pepper.PepperNoodleSoup.ingred3;
        ingred4 =results_pepper.PepperNoodleSoup.ingred4;
        ingred5 =results_pepper.PepperNoodleSoup.ingred5;
        ingred6 =results_pepper.PepperNoodleSoup.ingred6;
      }


      if(decision === "PepperNoodleDry"){
        subtext1 =  results_pepper.PepperNoodleDry.subtext1;
        subtext2 = results_pepper.PepperNoodleDry.subtext2;
        subtext3 = results_pepper.PepperNoodleDry.subtext3;
        subtext4 = results_pepper.PepperNoodleDry.subtext4;
        image = results_pepper.PepperNoodleDry.image;
        title = results_pepper.PepperNoodleDry.title;
        prep1 = results_pepper.PepperNoodleDry.prep1;
        prep2 = results_pepper.PepperNoodleDry.prep2;
        prep3 = results_pepper.PepperNoodleDry.prep3;
        prep4 = results_pepper.PepperNoodleDry.prep4;
        ingred1 =results_pepper.PepperNoodleDry.ingred1;
        ingred2 =results_pepper.PepperNoodleDry.ingred2;
        ingred3 =results_pepper.PepperNoodleDry.ingred3;
        ingred4 =results_pepper.PepperNoodleDry.ingred4;
        ingred5 =results_pepper.PepperNoodleDry.ingred5;
        ingred6 =results_pepper.PepperNoodleDry.ingred6;
      }


      if(decision === "OnionRiceSoup"){
        subtext1 = results_onion.OnionRiceSoup.subtext1;
        subtext2 = results_onion.OnionRiceSoup.subtext2;
        subtext3 = results_onion.OnionRiceSoup.subtext3;
        subtext4 = results_onion.OnionRiceSoup.subtext4;
        image = results_onion.OnionRiceSoup.image;
        title = results_onion.OnionRiceSoup.title;
        prep1 = results_onion.OnionRiceSoup.prep1;
        prep2 = results_onion.OnionRiceSoup.prep2;
        prep3 = results_onion.OnionRiceSoup.prep3;
        prep4 = results_onion.OnionRiceSoup.prep4;
        ingred1 =results_onion.OnionRiceSoup.ingred1;
        ingred2 =results_onion.OnionRiceSoup.ingred2;
        ingred3 =results_onion.OnionRiceSoup.ingred3;
        ingred4 =results_onion.OnionRiceSoup.ingred4;
        ingred5 =results_onion.OnionRiceSoup.ingred5;
        ingred6 =results_onion.OnionRiceSoup.ingred6;
      }

      if(decision === "OnionRiceDry"){
        subtext1 =  results_onion.OnionRiceDry.subtext1;
        subtext2 = results_onion.OnionRiceDry.subtext2;
        subtext3 = results_onion.OnionRiceDry.subtext3;
        subtext4 = results_onion.OnionRiceDry.subtext4;
        image = results_onion.OnionRiceDry.image;
        title = results_onion.OnionRiceDry.title;
        prep1 = results_onion.OnionRiceDry.prep1;
        prep2 = results_onion.OnionRiceDry.prep2;
        prep3 = results_onion.OnionRiceDry.prep3;
        prep4 = results_onion.OnionRiceDry.prep4;
        ingred1 =results_onion.OnionRiceDry.ingred1;
        ingred2 =results_onion.OnionRiceDry.ingred2;
        ingred3 =results_onion.OnionRiceDry.ingred3;
        ingred4 =results_onion.OnionRiceDry.ingred4;
        ingred5 =results_onion.OnionRiceDry.ingred5;
        ingred6 =results_onion.OnionRiceDry.ingred6;
      }


      if(decision === "OnionNoodleSoup"){
        subtext1 =  results_onion.OnionNoodleSoup.subtext1;
        subtext2 = results_onion.OnionNoodleSoup.subtext2;
        subtext3 = results_onion.OnionNoodleSoup.subtext3;
        subtext4 = results_onion.OnionNoodleSoup.subtext4;
        image = results_onion.OnionNoodleSoup.image;
        title = results_onion.OnionNoodleSoup.title;
        prep1 = results_onion.OnionNoodleSoup.prep1;
        prep2 = results_onion.OnionNoodleSoup.prep2;
        prep3 = results_onion.OnionNoodleSoup.prep3;
        prep4 = results_onion.OnionNoodleSoup.prep4;
        ingred1 =results_onion.OnionNoodleSoup.ingred1;
        ingred2 =results_onion.OnionNoodleSoup.ingred2;
        ingred3 =results_onion.OnionNoodleSoup.ingred3;
        ingred4 =results_onion.OnionNoodleSoup.ingred4;
        ingred5 =results_onion.OnionNoodleSoup.ingred5;
        ingred6 =results_onion.OnionNoodleSoup.ingred6;
      }



      if(decision === "OnionNoodleDry"){
        subtext1 =  results_onion.OnionNoodleDry.subtext1;
        subtext2 = results_onion.OnionNoodleDry.subtext2;
        subtext3 = results_onion.OnionNoodleDry.subtext3;
        subtext4 = results_onion.OnionNoodleDry.subtext4;
        image = results_onion.OnionNoodleDry.image;
        title = results_onion.OnionNoodleDry.title;
        prep1 = results_onion.OnionNoodleDry.prep1;
        prep2 = results_onion.OnionNoodleDry.prep2;
        prep3 = results_onion.OnionNoodleDry.prep3;
        prep4 = results_onion.OnionNoodleDry.prep4;
        ingred1 =results_onion.OnionNoodleDry.ingred1;
        ingred2 =results_onion.OnionNoodleDry.ingred2;
        ingred3 =results_onion.OnionNoodleDry.ingred3;
        ingred4 =results_onion.OnionNoodleDry.ingred4;
        ingred5 =results_onion.OnionNoodleDry.ingred5;
        ingred6 =results_onion.OnionNoodleDry.ingred6;
      }


      if(decision === "EggplantRiceSoup"){
        subtext1 =  results_eggplant.EggplantRiceSoup.subtext1;
        subtext2 = results_eggplant.EggplantRiceSoup.subtext2;
        subtext3 = results_eggplant.EggplantRiceSoup.subtext3;
        subtext4 = results_eggplant.EggplantRiceSoup.subtext4;
        image = results_eggplant.EggplantRiceSoup.image;
        title = results_eggplant.EggplantRiceSoup.title;
        prep1 = results_eggplant.EggplantRiceSoup.prep1;
        prep2 = results_eggplant.EggplantRiceSoup.prep2;
        prep3 = results_eggplant.EggplantRiceSoup.prep3;
        prep4 = results_eggplant.EggplantRiceSoup.prep4;
        ingred1 =results_eggplant.EggplantRiceSoup.ingred1;
        ingred2 =results_eggplant.EggplantRiceSoup.ingred2;
        ingred3 =results_eggplant.EggplantRiceSoup.ingred3;
        ingred4 =results_eggplant.EggplantRiceSoup.ingred4;
        ingred5 =results_eggplant.EggplantRiceSoup.ingred5;
        ingred6 =results_eggplant.EggplantRiceSoup.ingred6;
      }


      if(decision === "EggplantRiceDry"){
        subtext1 =  results_eggplant.EggplantRiceDry.subtext1;
        subtext2 = results_eggplant.EggplantRiceDry.subtext2;
        subtext3 = results_eggplant.EggplantRiceDry.subtext3;
        subtext4 = results_eggplant.EggplantRiceDry.subtext4;
        image = results_eggplant.EggplantRiceDry.image;
        title = results_eggplant.EggplantRiceDry.title;
        prep1 = results_eggplant.EggplantRiceDry.prep1;
        prep2 = results_eggplant.EggplantRiceDry.prep2;
        prep3 = results_eggplant.EggplantRiceDry.prep3;
        prep4 = results_eggplant.EggplantRiceDry.prep4;
        ingred1 =results_eggplant.EggplantRiceDry.ingred1;
        ingred2 =results_eggplant.EggplantRiceDry.ingred2;
        ingred3 =results_eggplant.EggplantRiceDry.ingred3;
        ingred4 =results_eggplant.EggplantRiceDry.ingred4;
        ingred5 =results_eggplant.EggplantRiceDry.ingred5;
        ingred6 =results_eggplant.EggplantRiceDry.ingred6;
      }


      if(decision === "EggplantNoodleSoup"){
        subtext1 =  results_eggplant.EggplantNoodleSoup.subtext1;
        subtext2 = results_eggplant.EggplantNoodleSoup.subtext2;
        subtext3 = results_eggplant.EggplantNoodleSoup.subtext3;
        subtext4 = results_eggplant.EggplantNoodleSoup.subtext4;
        image = results_eggplant.EggplantNoodleSoup.image;
        title = results_eggplant.EggplantNoodleSoup.title;
        prep1 = results_eggplant.EggplantNoodleSoup.prep1;
        prep2 = results_eggplant.EggplantNoodleSoup.prep2;
        prep3 = results_eggplant.EggplantNoodleSoup.prep3;
        prep4 = results_eggplant.EggplantNoodleSoup.prep4;
        ingred1 =results_eggplant.EggplantNoodleSoup.ingred1;
        ingred2 =results_eggplant.EggplantNoodleSoup.ingred2;
        ingred3 =results_eggplant.EggplantNoodleSoup.ingred3;
        ingred4 =results_eggplant.EggplantNoodleSoup.ingred4;
        ingred5 =results_eggplant.EggplantNoodleSoup.ingred5;
        ingred6 =results_eggplant.EggplantNoodleSoup.ingred6;
      }

      if(decision === "EggplantNoodleDry"){
        subtext1 =  results_eggplant.EggplantNoodleDry.subtext1;
        subtext2 = results_eggplant.EggplantNoodleDry.subtext2;
        subtext3 = results_eggplant.EggplantNoodleDry.subtext3;
        subtext4 = results_eggplant.EggplantNoodleDry.subtext4;
        image = results_eggplant.EggplantNoodleDry.image;
        title = results_eggplant.EggplantNoodleDry.title;
        prep1 = results_eggplant.EggplantNoodleDry.prep1;
        prep2 = results_eggplant.EggplantNoodleDry.prep2;
        prep3 = results_eggplant.EggplantNoodleDry.prep3;
        prep4 = results_eggplant.EggplantNoodleDry.prep4;
        ingred1 =results_eggplant.EggplantNoodleDry.ingred1;
        ingred2 =results_eggplant.EggplantNoodleDry.ingred2;
        ingred3 =results_eggplant.EggplantNoodleDry.ingred3;
        ingred4 =results_eggplant.EggplantNoodleDry.ingred4;
        ingred5 =results_eggplant.EggplantNoodleDry.ingred5;
        ingred6 =results_eggplant.EggplantNoodleDry.ingred6;
      }


      if(decision === "CarrotRiceSoup"){
        subtext1 =  results_carrot.CarrotRiceSoup.subtext1;
        subtext2 = results_carrot.CarrotRiceSoup.subtext2;
        subtext3 = results_carrot.CarrotRiceSoup.subtext3;
        subtext4 = results_carrot.CarrotRiceSoup.subtext4;
        image = results_carrot.CarrotRiceSoup.image;
        title = results_carrot.CarrotRiceSoup.title;
        prep1 = results_carrot.CarrotRiceSoup.prep1;
        prep2 = results_carrot.CarrotRiceSoup.prep2;
        prep3 = results_carrot.CarrotRiceSoup.prep3;
        prep4 = results_carrot.CarrotRiceSoup.prep4;
        ingred1 =results_carrot.CarrotRiceSoup.ingred1;
        ingred2 =results_carrot.CarrotRiceSoup.ingred2;
        ingred3 =results_carrot.CarrotRiceSoup.ingred3;
        ingred4 =results_carrot.CarrotRiceSoup.ingred4;
        ingred5 =results_carrot.CarrotRiceSoup.ingred5;
        ingred6 =results_carrot.CarrotRiceSoup.ingred6;
      }

      
      if(decision === "CarrotRiceDry"){
        subtext1 =  results_carrot.CarrotRiceDry.subtext1;
        subtext2 = results_carrot.CarrotRiceDry.subtext2;
        subtext3 = results_carrot.CarrotRiceDry.subtext3;
        subtext4 = results_carrot.CarrotRiceDry.subtext4;
        image = results_carrot.CarrotRiceDry.image;
        title = results_carrot.CarrotRiceDry.title;
        prep1 = results_carrot.CarrotRiceDry.prep1;
        prep2 = results_carrot.CarrotRiceDry.prep2;
        prep3 = results_carrot.CarrotRiceDry.prep3;
        prep4 = results_carrot.CarrotRiceDry.prep4;
        ingred1 =results_carrot.CarrotRiceDry.ingred1;
        ingred2 =results_carrot.CarrotRiceDry.ingred2;
        ingred3 =results_carrot.CarrotRiceDry.ingred3;
        ingred4 =results_carrot.CarrotRiceDry.ingred4;
        ingred5 =results_carrot.CarrotRiceDry.ingred5;
        ingred6 =results_carrot.CarrotRiceDry.ingred6;
      }


      if(decision === "CarrotNoodleSoup"){
        subtext1 =  results_carrot.CarrotNoodleSoup.subtext1;
        subtext2 = results_carrot.CarrotNoodleSoup.subtext2;
        subtext3 = results_carrot.CarrotNoodleSoup.subtext3;
        subtext4 = results_carrot.CarrotNoodleSoup.subtext4;
        image = results_carrot.CarrotNoodleSoup.image;
        title = results_carrot.CarrotNoodleSoup.title;
        prep1 = results_carrot.CarrotNoodleSoup.prep1;
        prep2 = results_carrot.CarrotNoodleSoup.prep2;
        prep3 = results_carrot.CarrotNoodleSoup.prep3;
        prep4 = results_carrot.CarrotNoodleSoup.prep4;
        ingred1 =results_carrot.CarrotNoodleSoup.ingred1;
        ingred2 =results_carrot.CarrotNoodleSoup.ingred2;
        ingred3 =results_carrot.CarrotNoodleSoup.ingred3;
        ingred4 =results_carrot.CarrotNoodleSoup.ingred4;
        ingred5 =results_carrot.CarrotNoodleSoup.ingred5;
        ingred6 =results_carrot.CarrotNoodleSoup.ingred6;
      }



      if(decision === "CarrotNoodleDry"){
        subtext1 =  results_carrot.CarrotNoodleDry.subtext1;
        subtext2 = results_carrot.CarrotNoodleDry.subtext2;
        subtext3 = results_carrot.CarrotNoodleDry.subtext3;
        subtext4 = results_carrot.CarrotNoodleDry.subtext4;
        image = results_carrot.CarrotNoodleDry.image;
        title = results_carrot.CarrotNoodleDry.title;
        prep1 = results_carrot.CarrotNoodleDry.prep1;
        prep2 = results_carrot.CarrotNoodleDry.prep2;
        prep3 = results_carrot.CarrotNoodleDry.prep3;
        prep4 = results_carrot.CarrotNoodleDry.prep4;
        ingred1 =results_carrot.CarrotNoodleDry.ingred1;
        ingred2 =results_carrot.CarrotNoodleDry.ingred2;
        ingred3 =results_carrot.CarrotNoodleDry.ingred3;
        ingred4 =results_carrot.CarrotNoodleDry.ingred4;
        ingred5 =results_carrot.CarrotNoodleDry.ingred5;
        ingred6 =results_carrot.CarrotNoodleDry.ingred6;
      }

      if(decision === "MushroomRiceSoup"){
        subtext1 =  results_mushroom.MushroomRiceSoup.subtext1;
        subtext2 = results_mushroom.MushroomRiceSoup.subtext2;
        subtext3 = results_mushroom.MushroomRiceSoup.subtext3;
        subtext4 = results_mushroom.MushroomRiceSoup.subtext4;
        image = results_mushroom.MushroomRiceSoup.image;
        title = results_mushroom.MushroomRiceSoup.title;
        prep1 = results_mushroom.MushroomRiceSoup.prep1;
        prep2 = results_mushroom.MushroomRiceSoup.prep2;
        prep3 = results_mushroom.MushroomRiceSoup.prep3;
        prep4 = results_mushroom.MushroomRiceSoup.prep4;
        ingred1 =results_mushroom.MushroomRiceSoup.ingred1;
        ingred2 =results_mushroom.MushroomRiceSoup.ingred2;
        ingred3 =results_mushroom.MushroomRiceSoup.ingred3;
        ingred4 =results_mushroom.MushroomRiceSoup.ingred4;
        ingred5 =results_mushroom.MushroomRiceSoup.ingred5;
        ingred6 =results_mushroom.MushroomRiceSoup.ingred6;
      }


      if(decision === "MushroomRiceDry"){
        subtext1 =  results_mushroom.MushroomRiceDry.subtext1;
        subtext2 = results_mushroom.MushroomRiceDry.subtext2;
        subtext3 = results_mushroom.MushroomRiceDry.subtext3;
        subtext4 = results_mushroom.MushroomRiceDry.subtext4;
        image = results_mushroom.MushroomRiceDry.image;
        title = results_mushroom.MushroomRiceDry.title;
        prep1 = results_mushroom.MushroomRiceDry.prep1;
        prep2 = results_mushroom.MushroomRiceDry.prep2;
        prep3 = results_mushroom.MushroomRiceDry.prep3;
        prep4 = results_mushroom.MushroomRiceDry.prep4;
        ingred1 =results_mushroom.MushroomRiceDry.ingred1;
        ingred2 =results_mushroom.MushroomRiceDry.ingred2;
        ingred3 =results_mushroom.MushroomRiceDry.ingred3;
        ingred4 =results_mushroom.MushroomRiceDry.ingred4;
        ingred5 =results_mushroom.MushroomRiceDry.ingred5;
        ingred6 =results_mushroom.MushroomRiceDry.ingred6;
      }


      if(decision === "MushroomNoodleSoup"){
        subtext1 =  results_mushroom.MushroomNoodleSoup.subtext1;
        subtext2 = results_mushroom.MushroomNoodleSoup.subtext2;
        subtext3 = results_mushroom.MushroomNoodleSoup.subtext3;
        subtext4 = results_mushroom.MushroomNoodleSoup.subtext4;
        image = results_mushroom.MushroomNoodleSoup.image;
        title = results_mushroom.MushroomNoodleSoup.title;
        prep1 = results_mushroom.MushroomNoodleSoup.prep1;
        prep2 = results_mushroom.MushroomNoodleSoup.prep2;
        prep3 = results_mushroom.MushroomNoodleSoup.prep3;
        prep4 = results_mushroom.MushroomNoodleSoup.prep4;
        ingred1 =results_mushroom.MushroomNoodleSoup.ingred1;
        ingred2 =results_mushroom.MushroomNoodleSoup.ingred2;
        ingred3 =results_mushroom.MushroomNoodleSoup.ingred3;
        ingred4 =results_mushroom.MushroomNoodleSoup.ingred4;
        ingred5 =results_mushroom.MushroomNoodleSoup.ingred5;
        ingred6 =results_mushroom.MushroomNoodleSoup.ingred6;
      }


      if(decision === "MushroomNoodleDry"){
        subtext1 =  results_mushroom.MushroomNoodleDry.subtext1;
        subtext2 = results_mushroom.MushroomNoodleDry.subtext2;
        subtext3 = results_mushroom.MushroomNoodleDry.subtext3;
        subtext4 = results_mushroom.MushroomNoodleDry.subtext4;
        image = results_mushroom.MushroomNoodleDry.image;
        title = results_mushroom.MushroomNoodleDry.title;
        prep1 = results_mushroom.MushroomNoodleDry.prep1;
        prep2 = results_mushroom.MushroomNoodleDry.prep2;
        prep3 = results_mushroom.MushroomNoodleDry.prep3;
        prep4 = results_mushroom.MushroomNoodleDry.prep4;
        ingred1 =results_mushroom.MushroomNoodleDry.ingred1;
        ingred2 =results_mushroom.MushroomNoodleDry.ingred2;
        ingred3 =results_mushroom.MushroomNoodleDry.ingred3;
        ingred4 =results_mushroom.MushroomNoodleDry.ingred4;
        ingred5 =results_mushroom.MushroomNoodleDry.ingred5;
        ingred6 =results_mushroom.MushroomNoodleDry.ingred6;
      }

      if(decision === "TomatoRiceSoup"){
        subtext1 =  results_tomato.TomatoRiceSoup.subtext1;
        subtext2 = results_tomato.TomatoRiceSoup.subtext2;
        subtext3 = results_tomato.TomatoRiceSoup.subtext3;
        subtext4 = results_tomato.TomatoRiceSoup.subtext4;
        image = results_tomato.TomatoRiceSoup.image;
        title = results_tomato.TomatoRiceSoup.title;
        prep1 = results_tomato.TomatoRiceSoup.prep1;
        prep2 = results_tomato.TomatoRiceSoup.prep2;
        prep3 = results_tomato.TomatoRiceSoup.prep3;
        prep4 = results_tomato.TomatoRiceSoup.prep4;
        ingred1 =results_tomato.TomatoRiceSoup.ingred1;
        ingred2 =results_tomato.TomatoRiceSoup.ingred2;
        ingred3 =results_tomato.TomatoRiceSoup.ingred3;
        ingred4 =results_tomato.TomatoRiceSoup.ingred4;
        ingred5 =results_tomato.TomatoRiceSoup.ingred5;
        ingred6 =results_tomato.TomatoRiceSoup.ingred6;
      }



      if(decision === "TomatoRiceDry"){
        subtext1 =  results_tomato.TomatoRiceDry.subtext1;
        subtext2 = results_tomato.TomatoRiceDry.subtext2;
        subtext3 = results_tomato.TomatoRiceDry.subtext3;
        subtext4 = results_tomato.TomatoRiceDry.subtext4;
        image = results_tomato.TomatoRiceDry.image;
        title = results_tomato.TomatoRiceDry.title;
        prep1 = results_tomato.TomatoRiceDry.prep1;
        prep2 = results_tomato.TomatoRiceDry.prep2;
        prep3 = results_tomato.TomatoRiceDry.prep3;
        prep4 = results_tomato.TomatoRiceDry.prep4;
        ingred1 =results_tomato.TomatoRiceDry.ingred1;
        ingred2 =results_tomato.TomatoRiceDry.ingred2;
        ingred3 =results_tomato.TomatoRiceDry.ingred3;
        ingred4 =results_tomato.TomatoRiceDry.ingred4;
        ingred5 =results_tomato.TomatoRiceDry.ingred5;
        ingred6 =results_tomato.TomatoRiceDry.ingred6;
      }

      if(decision === "TomatoNoodleSoup"){
        subtext1 =  results_tomato.TomatoNoodleSoup.subtext1;
        subtext2 = results_tomato.TomatoNoodleSoup.subtext2;
        subtext3 = results_tomato.TomatoNoodleSoup.subtext3;
        subtext4 = results_tomato.TomatoNoodleSoup.subtext4;
        image = results_tomato.TomatoNoodleSoup.image;
        title = results_tomato.TomatoNoodleSoup.title;
        prep1 = results_tomato.TomatoNoodleSoup.prep1;
        prep2 = results_tomato.TomatoNoodleSoup.prep2;
        prep3 = results_tomato.TomatoNoodleSoup.prep3;
        prep4 = results_tomato.TomatoNoodleSoup.prep4;
        ingred1 =results_tomato.TomatoNoodleSoup.ingred1;
        ingred2 =results_tomato.TomatoNoodleSoup.ingred2;
        ingred3 =results_tomato.TomatoNoodleSoup.ingred3;
        ingred4 =results_tomato.TomatoNoodleSoup.ingred4;
        ingred5 =results_tomato.TomatoNoodleSoup.ingred5;
        ingred6 =results_tomato.TomatoNoodleSoup.ingred6;
      }

      if(decision === "TomatoNoodleDry"){
        subtext1 =  results_tomato.TomatoNoodleDry.subtext1;
        subtext2 = results_tomato.TomatoNoodleDry.subtext2;
        subtext3 = results_tomato.TomatoNoodleDry.subtext3;
        subtext4 = results_tomato.TomatoNoodleDry.subtext4;
        image = results_tomato.TomatoNoodleDry.image;
        title = results_tomato.TomatoNoodleDry.title;
        prep1 = results_tomato.TomatoNoodleDry.prep1;
        prep2 = results_tomato.TomatoNoodleDry.prep2;
        prep3 = results_tomato.TomatoNoodleDry.prep3;
        prep4 = results_tomato.TomatoNoodleDry.prep4;
        ingred1 =results_tomato.TomatoNoodleDry.ingred1;
        ingred2 =results_tomato.TomatoNoodleDry.ingred2;
        ingred3 =results_tomato.TomatoNoodleDry.ingred3;
        ingred4 =results_tomato.TomatoNoodleDry.ingred4;
        ingred5 =results_tomato.TomatoNoodleDry.ingred5;
        ingred6 =results_tomato.TomatoNoodleDry.ingred6;
      }


    }


    // if(!recipes){
    //   sessionStorage.setItem("options",JSON.stringify(data))
    // }

    },[]);


 

  return <HomeCont>
    <Head>
      <title>Recipes</title>
    </Head>
    <div className="navbar">
      <Navbar 
        onClick={()=>router.push("/saved")}
      /> 
    </div>
    
    <Recipe
      image={image}
      text={title}
    />

    <PrepIngred
      prep1={prep1}
      prep2={prep2}
      prep3={prep3}
      prep4={prep4}
      ingred1={ingred1}
      ingred2={ingred2}
      ingred3={ingred3}
      ingred4={ingred4}
      ingred5={ingred5}
      ingred6={ingred6}
    />

    <div className="directions">
      <Direction
        subtext1={subtext1}
        subtext2={subtext2}
        subtext3={subtext3}
        subtext4={subtext4}
      />
    </div>


    {/* <div className="bottom">
      <StartButton text="Pick Another Veggie"  width="200px" routeTo="../options_two/pepper"/>
    </div> */}
    <Footer/>
  </HomeCont>
}