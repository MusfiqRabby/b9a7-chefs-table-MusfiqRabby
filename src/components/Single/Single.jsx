
import { MdOutlineWatchLater, } from "react-icons/md";
import { FaFire } from "react-icons/fa6";



const Single = ({ single, handleToBtn}) => {
  const { recipe_name, recipe_image, preparing_time, calories, ingredients, short_description } = single;

  return (
      <div class="card bg-base-100 shadow-xl">
        <figure>
          <img className=" w-full h-56 p-4 "
            src= {recipe_image} />
        </figure>
        <div class="card-body">
          <h2 class="text-2xl font-semibold ">{recipe_name}</h2>
          <p className="text-[#878787]">{short_description}</p>
            <div>
            <h5 className="text-lg text-[#282828] font-medium">ingredients:{ingredients.length}<br/>
            </h5>
           <div>
          
           {
            ingredients.map((ingre, idx) => <div key={idx} >
            <li item={ingre} className="opacity-80">{ingre}</li>
          </div>)
           }
           
           </div>
            </div>

            <div className="flex opacity-80">
                <div className="flex mr-12 items-center">
                <p><MdOutlineWatchLater/></p>
                <span>{preparing_time}</span>
                </div>
                <div className="flex mr-12 items-center">
                 <p>< FaFire/></p> 
                <span>{calories} calories</span>
                </div>
            </div>
          <div class="mt-5">
            <button
            onClick={() => handleToBtn(single)}
            class="btn bg-[#0BE58A] rounded-full">Want to Cook</button>
          </div>
          <div>
          </div>
        </div>
      </div>
      
  );
};

export default Single;
