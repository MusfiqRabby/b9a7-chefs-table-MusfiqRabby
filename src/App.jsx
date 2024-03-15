import './App.css'
import Header from './components/Header/Header'
import Recipe from './components/Recipe/Recipe'
import Wanto from './components/Wanto/Wanto'

function App() {
  
  return (
    <>
     <Header></Header>
   <div className='md:flex'>
   <Recipe></Recipe>
   <Wanto></Wanto>
   </div>

    </>
  )
}

export default App
