import Head from 'next/head'
import styled from 'styled-components';
import Header from '../../comps/Header';
// import Ingredient from '../../comps/Dish';
import Dish from '../../comps/Dish';
import Footer from '../../comps/Footer';
import {useRouter} from 'next/router';
import Navbar from  "../../comps/Navigation"


  const HomeCont = styled.div`
  display:flex;
  height:100%;
  flex-direction:column;
  justify-contents:center;
  align-item:center;
  background-color :#FFF8F8;
  overflow:scroll;
  `
 const DishCont  = styled.div`
 display:flex;
 justify-content:center;
 align-items:center;
 margin:30px;
`;

const recipes = {
    Peppers:{
        dishname1:"Pepper Stir Fry Noodles",
        dishname2:"Pepper Meat Noodle",
        dishurl1:"/DN-Pepper.jpg",
        dishurl2:"/PepperPasta.jpeg ", 
        dishlink1:"/recipes/PepperStirFryNoodles",
        dishlink2:"/recipes/PepperPasta"
    },
    Onions:{
        dishname1:"Onion Parmesan Pasta",
        dishname2:"Onion Chicken Noodle",
        dishurl1:"/DN-Onion.jpg",
        dishurl2:"/ChickenNoodle.jpeg",
        dishlink1:"/recipes/OnionParmesanPasta",
        dishlink2:"/recipes/OnionChickenCasserole" 
     },
    Eggplants:{
        dishname1:"Eggplant Chilli Noodles",
        dishname2:"Eggplants Meat Noodle",
        dishurl1:"/DN-Eggplant.jpg",
        dishurl2:"/DR-Eggplant.jpg" ,
        dishlink1:"/recipes/EggplantChilliNoodles",
        dishlink2:"/recipes/EggplantBeefPasta",
    },
    Mushrooms:{
        dishname1:"Mushroom Stir Fry Noodles",
        dishname2:"Mushroom Cream Pasta",
        dishurl1:"/DN-Mushroom.jpg",
        dishurl2:"/MushroomCreamPasta.jpg",
        dishlink1:"/recipes/MushroomStirFryNoodles",
        dishlink2:"/recipes/MushroomCreamPasta"
    }  
}

export default function Home() {
  const router = useRouter();
  const {recipeoption} = router.query; 
  var name1 = "name";
  var name2 = "name";
  var url1 = "/";
  var url2 = "/";
  var click1 = "/recipe";
  var click2 = "/recipe";

  
  if(recipeoption === 'Peppers'){
    name1 = recipes.Peppers.dishname1; 
    name2 = recipes.Peppers.dishname2; 
    url1 = recipes.Peppers.dishurl1;
    url2 = recipes.Peppers.dishurl2;
    click1 = recipes.Peppers.dishlink1;
    click2 = recipes.Peppers.dishlink2;
    }

   if(recipeoption === 'Onions'){
        name1 = recipes.Onions.dishname1; 
        name2 = recipes.Onions.dishname2; 
        url1 = recipes.Onions.dishurl1;
        url2 = recipes.Onions.dishurl2;
        click1 = recipes.Onions.dishlink1;
        click2 = recipes.Onions.dishlink2;
        }

     if(recipeoption === 'Eggplants'){
        name1 = recipes.Eggplants.dishname1; 
        name2 = recipes.Eggplants.dishname2; 
        url1 = recipes.Eggplants.dishurl1;
        url2 = recipes.Eggplants.dishurl2;
        click1 = recipes.Eggplants.dishlink1;
        click2 = recipes.Eggplants.dishlink2;
        } 
        
      if(recipeoption === 'Mushrooms'){
            name1 = recipes.Mushrooms.dishname1; 
            name2 = recipes.Mushrooms.dishname2; 
            url1 = recipes.Mushrooms.dishurl1;
            url2 = recipes.Mushrooms.dishurl2;
            click1 = recipes.Mushrooms.dishlink1;
            click2 = recipes.Mushrooms.dishlink2;
            }   



  return <HomeCont>
        
        <Navbar  onClick={()=>router.push("/foodoption")}/>
        <Header 
        icon="/recipe-book.png"
        text="Choose the recipe you want to try"
        />
         <DishCont> 
          <Dish dishname1= {name1} 
                dishname2= {name2}
                dishurl1 = {url1}
                dishurl2 = {url2}
                onClick1={()=>router.push(click1)}
                onClick2={()=>router.push(click2)}
          />
          
         </DishCont>   
      
         <Footer/>
  </HomeCont>
  
}

