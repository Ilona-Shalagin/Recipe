import video from "./Video.mp4"
import RecipeComponent from "./RecipeComponent";
import './App.css';
import { useState, useEffect } from "react";

function App() {

  const MY_ID = "895fa23f";
  const MY_KEY = "54125cd3571b65bfed3703098080c1be";

  const[search,setSearch] = useState('');
  const[searchRecipe,setSearchRecipe] = useState([]);
  const[searchSubmit,setSearchSubmit] = useState("avocado");

  useEffect (() => {
    getRecipe();
  },[searchSubmit])
    const getRecipe = async () => {
    const response = await fetch (`https://api.edamam.com/search?q=${searchSubmit}&app_id=${MY_ID}&app_key=${MY_KEY}`);
    const data = await response.json();
    console.log(data.hits)
    setSearchRecipe(data.hits)
  }
  const myRecipe = (e) =>{
    setSearch(e.target.value)
  }
  const lastSearch = (e) => {
    e.preventDefault();
    setSearchSubmit(search);
  }

  return (
    <div className="App">
      <div className="container">
       <video autoPlay muted loop>
       <source src={video} />
       </video>
       <h1>Lets find recipe you like</h1>
      </div>
      <div className="container">
      <form onSubmit={lastSearch}>
        <input className="search" placeholder="Search..." onChange={myRecipe} value={search}></input>
      </form>
      </div>
      {searchRecipe.map((element,index) => (
        <RecipeComponent key={index}
         label = {element.recipe.label}
         image = {element.recipe.image}
         ingredients ={element.recipe.ingredientLines}
         calories ={element.recipe.calories}
         cuisine = {element.recipe.cuisineType}
         time = {element.recipe.totalTime}/>
      ))}
    </div>
  
  );
}

export default App;
