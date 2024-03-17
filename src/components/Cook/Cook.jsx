

const Cook = ({cooks, idx, handleDelete}) => {
   
const {recipe_name, preparing_time, calories, recipe_id} = cooks;


    return (
        <div className="bg-slate-200 flex gap-7 p-2 m-2 rounded-xl">
             <span>{idx}</span>
             <p>{recipe_name}</p>
            <p>{preparing_time}</p>
            <p>{calories} calories</p>
            <button onClick={()=> handleDelete(recipe_id)} class="btn bg-[#0BE58A]">Preparing</button> 
        </div>
    );
};
// 
export default Cook;
