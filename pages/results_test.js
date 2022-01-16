import {useRouter} from 'next/router';
import React, {useEffect, useState} from 'react';

// if(process.browser){ 
//     recipes = sessionStorage.getItem("recipeoption");
// }
var style = null;

const results = {
    // store sessionStorage key - type (value = rice/noodle) - style (value = soup/dry) - vegetable (value = peppers/onions, etc.) 
    
    // rice - soup based options
    RiceSoupPeppers: {
        title: "Pepper Rice Risotto Soup",
        image: "public/",
        preptime: "", 
        ingredients: "",
        directions: "",}, 
    RiceSoupOnions: {
        title: "Onion & Rice Saffron Soup",
        image: "public/",
        preptime: "", 
        ingredients: "",
        directions: "",}, 
    RiceSoupEggplants: {
        title: "Eggplant & Rice Gumbo Soup",
        image: "public/",
        preptime: "", 
        ingredients: "",
        directions: "",}, 
    RiceSoupMushrooms: {
        title: "Mushroom  & Rice Cream Soup",
        image: "public/",
        preptime: "", 
        ingredients: "",
        directions: "",}, 
    RiceSoupCarrots: {
        title: "Wild Rice & Carrot Soup",
        image: "public/",
        preptime: "", 
        ingredients: "",
        directions: "",}, 
    RiceSoupTomatoes: {
        title: "Tomato & Rice Soup",
        image: "public/",
        preptime: "", 
        ingredients: "",
        directions: "",}, 

    // rice - dry based options
    RiceDryPeppers: {
        title: "Stuffed Pepper With Rice",
        image: "public/",
        preptime: "", 
        ingredients: "",
        directions: "",}, 
    RiceDryOnions: {
        title: "Onion Fried Rice",
        image: "public/",
        preptime: "", 
        ingredients: "",
        directions: "",}, 
    RiceDryEggplants: {
        title: "Eggplant Risotto",
        image: "public/",
        preptime: "", 
        ingredients: "",
        directions: "",}, 
    RiceDryMushrooms: {
        title: "Mushroom Pilaf",
        image: "public/",
        preptime: "", 
        ingredients: "",
        directions: "",}, 
    RiceDryCarrots: {
        title: "Spicy Carrot Fried Rice",
        image: "public/",
        preptime: "", 
        ingredients: "",
        directions: "",}, 
    RiceDryTomatoes: {
        title: "Tomato Fried Rice",
        image: "public/",
        preptime: "", 
        ingredients: "",
        directions: "",}, 

    // noodle - soup based options
    NoodleSoupPeppers: {
        title: "Pepper Steak Noodle Soup",
        image: "public/",
        preptime: "", 
        ingredients: "",
        directions: "",},  
    NoodleSoupOnions: {
        title: "Short-Rib Onion Noodle Soup",
        image: "public/",
        preptime: "", 
        ingredients: "",
        directions: "",}, 
    NoodleSoupEggplants: {
        title: "Eggplant & Tofu Noodle Soup",
        image: "public/",
        preptime: "", 
        ingredients: "",
        directions: "",}, 
    NoodleSoupMushrooms: {
        title: "Mushroom Vegan Noodle Soup",
        image: "public/",
        preptime: "", 
        ingredients: "",
        directions: "",}, 
    NoodleSoupCarrots: {
        title: "Thai Ginger Carrot Noodle Soup",
        image: "public/",
        preptime: "", 
        ingredients: "",
        directions: "",}, 
    NoodleSoupTomatoes: {
        title: "Tomato Egg Drop Noodle Soup",
        image: "public/",
        preptime: "", 
        ingredients: "",
        directions: "",}, 

    // noodle - dry based options
    NoodleDryPeppers: {
        title: "Pepper Stir Fry Noodles",
        image: "public/",
        preptime: "", 
        ingredients: "",
        directions: "",}, 
    NoodleDryOnions: {
        title: "Onion Parmesan Pasta",
        image: "public/",
        preptime: "", 
        ingredients: "",
        directions: "",}, 
    NoodleDryEggplants: {
        title: "Eggplant Chilli Noodles",
        image: "public/",
        preptime: "", 
        ingredients: "",
        directions: "",}, 
    NoodleDryMushrooms: {
        title: "Mushroom Cream Pasta",
        image: "public/",
        preptime: "", 
        ingredients: "",
        directions: "",}, 
    NoodleDryCarrots: {
        title: "Carrot & Garlic Pasta",
        image: "public/",
        preptime: "", 
        ingredients: "",
        directions: "",}, 
    NoodleDryTomatoes: {
        title: "Classic Tomato Spaghetti",
        image: "public/",
        preptime: "", 
        ingredients: "",
        directions: "",}, 

    // create recipe compo and we props here
    // BananaLoonieBlue: <Card bgcolor="" />
}

export default function Results(){

    const router = useRouter();

    const [options, setOptions] = useState({
        type: null,
        style: null,
        vegetable: null
    });

    const [text, setText] = useState(null);


    // useEffect that runs a function when comp UI loads - when empty array [], useEffect runs when comp UI loads 
    useEffect(()=>{
        if(process.browser){ 

            var o = sessionStorage.getItem("recipeoption");
            setOptions(JSON.parse(o));
            JSON.parse //takes the json string (if it is one) + reapplies all JS functionalities
            var obj = JSON.parse(o);

            var key = obj.type+obj.style+obj.vegetable; 
            //combine all choices into 1, in variable called key
            console.log(key);

            if(results[key]){
                setText(results[key].title);

                //if compo premade - setstate to display
                {text} // name of the variable premade compo
            }
        }
    }, []);

    return <div>
        {/* <Button text="Back" onClick={()=>router.push("/options/all")} /> */}
        {/* Results -  */}
        {/* {fruits}  */}
        {/* <p />{options.fruits} 
        <p />{options.coins} 
        <p />{options.colors}  */}
        {/* use variable to display fruits results */}
        <div>
            {/* <Card subtext="Results" bigtext={text} /> */}
        </div>
        Results - 
        {style}
    </div>
}
