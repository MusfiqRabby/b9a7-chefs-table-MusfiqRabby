import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Recipe from "./components/Recipe/Recipe";
import Wanto from "./components/Wanto/Wanto";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [cooks, setCooks] = useState([]);
  const handleToBtn = (single) => {
    const isExist = cooks.find((item) => item.recipe_id == single.recipe_id);
    if (!isExist) {
      setCooks([...cooks, single]);
    } else {
      toast.warning("Already exist");
    }
  };

  const handleDelete = (id) => {
    const newHandle = cooks.filter((item) => item.recipe_id != id);
    setCooks(newHandle);
  };
  
  return (
    <>
      <Header></Header>
      <div className="md:flex ">
        <Recipe handleToBtn={handleToBtn}></Recipe>
        <ToastContainer />
        <Wanto cooks={cooks} handleDelete={handleDelete}></Wanto>
      </div>
    </>
  );
}
export default App;