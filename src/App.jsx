import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Recipe from './components/Recipe/Recipe'
import Wanto from './components/Wanto/Wanto'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {
const [cooks, setCooks] = useState([]);
  const handleToBtn = single =>{
    const isExist = cooks.find(item => item.recipe_id == single.recipe_id)
    if(!isExist){
      setCooks([...cooks, single]);
    }
    else{
      toast.warning('Already exist')
    }
  }
 
 const handleDelete = (id) =>{
  const newHandle = cooks.filter(item => item.recipe_id != id)
  setCooks(newHandle);
 }

 
  return (
    <>
    <Header></Header>
   <div className='md:flex '>
   <Recipe handleToBtn={handleToBtn} ></Recipe>
   <ToastContainer />
   <Wanto cooks={cooks} handleDelete={handleDelete}></Wanto>
   
   </div>
    </>
  )
}

export default App

  // {
    //   "recipe_id": "5",
    //   "recipe_name": "Thai Green Curry with Shrimp",
    //   "short_description": "Aromatic and spicy Thai green curry with tender shrimp and vegetables.",
    //   "ingredients": ["Shrimp", 
    //   "Green Curry Paste",
    //    "Coconut Milk"],
    //   "preparing_time": "35 minutes",
    //   "calories": 480,
    //   "recipe_image": "https://i.ibb.co/4MQFgzm/fresh-vegetables-greens-wooden-box.jpg"
    // },
    // {
    //   "recipe_id": "6",
    //   "recipe_name": "Berry Smoothie Bowl",
    //   "short_description": "A refreshing blend of mixed berries topped with granola and honey.",
    //   "ingredients": ["Mixed Berries", 
    //   "Banana", 
    //   "Greek Yogurt"],
    //   "preparing_time": "10 minutes",
    //   "calories": 300,
    //   "recipe_image": "https://i.ibb.co/jZS854x/close-up-fried-chicken-fries.jpg"
    // }