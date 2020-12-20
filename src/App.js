import React,{ useState } from "react";
import "./styles.css";
import logo from "./movielogo.png"

export default function App() {
 
   const [site1,setSite1] = useState("Mission: Impossible - Fallout (2018)");
   const [site2,setSite2] = useState("Avengers: Endgame (2019)");

   const siteDatabase = {
         Action:{
          site1 : "Mission: Impossible - Fallout (2018)",
          site2 :"Avengers: Endgame (2019)"
         },
         Comedy:{
          site1 : "Phir Hera Pheri(2006)",
          site2 :"3 Idiots(2009)"
         },
          Horror:{
          site1 : "Get Out (2017)",
          site2 :"The Grudge(2020)"
         },
         Thriller:{
          site1 : "Parasite(2019)",
          site2 :"Don't Breathe(2016)"
         },
         Adventure:{
           site1:"Now You See Me 2 (2016)",
           site2:"Fantastic Beasts: The Crimes of Grindelwald (2018)"
         }
      }

     const clickHandler = (cat) => {
         setSite1(siteDatabase[cat].site1);
         setSite2(siteDatabase[cat].site2);
      }


  return (
    <div className="App">
      <h1> <img src={logo} alt="Movie"/>Best Movie to watch</h1>
      <p>Check out my favourite Movies.
        I hope you also like them. <p>Select a genre to get started!</p></p>
      
      {
        Object.keys(siteDatabase).map( category => {
            return <button key={category} onClick={() => clickHandler(category)}>{category}</button>
        } )
      }
      <hr/>
      <div className="site1">
        <p>{site1}</p>
      </div>
      <div className="site2">
        <p>{site2}</p>
      </div>
    </div>
  );
}
