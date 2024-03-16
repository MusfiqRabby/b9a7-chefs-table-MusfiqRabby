

const Cook = ({cooks, idx, handlePreparing}) => {
   
const {recipe_name, preparing_time, calories} = cooks;

    return (
        <div className="bg-slate-200 flex gap-7 p-2 m-2 rounded-xl">
             <span>{idx}</span>
             <p>{recipe_name}</p>
            <p>{preparing_time}</p>
            <p>{calories} calories</p>
            <button onClick={()=> handlePreparing(preparing_time)} class="btn bg-[#0BE58A]">Preparing</button> 
        </div>
    );
};
// 
export default Cook;

  // const handleDelete = (id) =>{
    //     console.log(id)
    //   }

    // const [order, setOrder] = useState([]);
    // // const [cookses, setCookses] = useState([]);
    
    // const handleOder = cook => {
    //   const isExist = order.find(i => i.recipe_id === cook.recipe_id)
    //   if(!isExist){
    //     setOrder([...order,cook])
    //     return toast.success('Successfully added')
    //   }
    //   else{
    //     return toast.warning('Already exist');
    //   }
    // }