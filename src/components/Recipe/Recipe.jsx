import { useState } from "react";
import Single from "../Single/Single";

const Recipe = ({handleToBtn}) => {
   const [recipes, setRecipe] = useState([]);
   useState(() =>{
    fetch('blogs.json')
    .then(res => res.json())
    .then(data => setRecipe(data))
   },[])

    return (
        <div className="md:w-2/3 grid grid-cols-2 gap-2 mx-w-7xl mx-auto">
            
        {
           recipes.map((recip, idx) => <Single key={idx} single={recip}
            handleToBtn={handleToBtn}
           ></Single>) 
        }

        </div>
    );
};

export default Recipe;