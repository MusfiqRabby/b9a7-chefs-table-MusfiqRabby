import { useState } from "react";
import Single from "../Single/Single";

const Recipe = () => {
   const [recipes, setRecipe] = useState([]);
   useState(() =>{
    fetch('blogs.json')
    .then(res => res.json())
    .then(data => setRecipe(data))
   },[])
    return (
        <div className="md:w-2/3 grid grid-cols-2 gap-4">
            
        {
           recipes.map(recip => <Single  single={recip}></Single>) 
        }

        </div>
    );
};

export default Recipe;