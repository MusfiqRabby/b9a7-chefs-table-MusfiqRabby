import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Recipe from './components/Recipe/Recipe'
import Wanto from './components/Wanto/Wanto'

function App() {
  
  const [cooks, setCooks] = useState([]);

  const handleToBtn = single =>{
    const newCooks = [...cooks, single];
    setCooks(newCooks);
  }


  return (
    <>
     <Header></Header>
   <div className='md:flex '>
   <Recipe handleToBtn={handleToBtn}></Recipe>
   <Wanto cooks={cooks}></Wanto>
   </div>

    </>
  )
}

export default App
