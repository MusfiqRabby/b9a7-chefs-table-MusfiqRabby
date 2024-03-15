
import { MdOutlineWatchLater, } from "react-icons/md";
import { FaFire } from "react-icons/fa6";

const Single = ({ single }) => {
  const { recipe_name, recipe_image } = single;

  return (
    <div>
      <div class="card bg-base-100 shadow-xl">
        <figure>
          <img className=" w-full h-56 p-4 "
            src= {recipe_image} />
        </figure>
        <div class="card-body">
          <h2 class="text-2xl font-semibold ">{recipe_name}</h2>
          <p className="text-[#878787]">Classic Italian pasta dish with savory meat sauce</p>
            <div>
            <h5 className="text-lg text-[#282828] font-medium">Ingredients: 6</h5>
            <ul className="opacity-80 mb-3">
                <li>. 500g ground beef</li>
                <li>. 1 onion, chopped</li>
                <li>. 2 cloves garlic, minced</li>
            </ul>
            </div>
            <div className="flex opacity-80">
                <div className="flex mr-12 items-center">
                <p><MdOutlineWatchLater/></p>
                <span>30 minutes</span>
                </div>
                <div className="flex mr-12 items-center">
                 <p>< FaFire/></p> 
                <span>600 calories</span>
                </div>
            </div>
          <div class="mt-5">
            <button class="btn bg-[#0BE58A] rounded-full">Want to Cook</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
