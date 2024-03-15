
const Cook = ({cooks}) => {
   
    const {recipe_name, preparing_time, calories} = cooks;
   
    return (
        <div className="bg-slate-200 flex gap-7 p-4 m-4 rounded-xl">
             <p>{recipe_name}</p>
            <p>{preparing_time}</p>
            <p>{calories} calories</p>
        </div>
    );
};

export default Cook;