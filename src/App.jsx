
import { useState } from 'react'
import './App.css'
import Cart from './Cart/Cart'
import Banner from './Header/Banner'
import Navbar from './Header/Navbar'
import Products from './Products/Products'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {
 
  const [cart,setCart] =useState([])
  const [cook,setCook] = useState([])

const handleClick =(pd) =>{
  const newCart = cart.find(c => c.recipe_id == pd.recipe_id)
  if(!newCart){
    setCart([...cart,pd])
  }else{
    toast.warn("Already Added  !!")
  }
}
const handleDelete = (item) =>{
  const isDelete = cart.filter(c =>c.recipe_id != item.recipe_id)
  setCart(isDelete)
}

const handleAdd = (pd) =>{
  setCook([...cook,pd])
}


  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <div className='text-center w-3/4 mx-auto mb-10 space-y-5'>
        <h1 className="text-4xl  font-extrabold "> Our Recipes</h1>
        <p>Prioritize quality over quantity. Check labels for ingredients and nutritional value. Compare prices across stores and consider buying in bulk for savings. Look for seasonal discounts and loyalty programs. Don't forget to make a list and stick to it to avoid impulse purchases. Happy and savvy shopping!"</p>
      </div>
<div className='flex flex-col md:flex-row gap-5'>
  <div className='md:w-4/6 w-full'>
<Products handleClick={handleClick}></Products>
</div>
<div className='md:w-2/6 w-full'>
  <Cart cook={cook} handleAdd={handleAdd} cart={cart} handleDelete={handleDelete}></Cart>
</div>

<ToastContainer></ToastContainer>
</div>

    </>
  )
}

export default App
