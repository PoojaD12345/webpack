import navbar from "../components/navbar.js";


document.getElementById("navbar").innerHTML=navbar();

import "../styles/navbar.css"

import {enterfood ,append}from "./fetch.js";

let getData = async()=>{
  
    let url =`https://www.themealdb.com/api/json/v1/1/random.php`;
    let data = await enterfood(url);
   append(data);
};

 getData();

