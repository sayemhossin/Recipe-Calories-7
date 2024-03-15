
import './App.css'
import Cart from './Cart/Cart'
import Banner from './Header/Banner'
import Navbar from './Header/Navbar'
import Products from './Products/Products'

function App() {
 

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
<div className='flex flex-col md:flex-row gap-5'>
  <div className='md:w-4/6 w-full'>
<Products></Products>
</div>
<div className='md:w-2/6 w-full'>
  <Cart></Cart>
</div>


</div>

    </>
  )
}

export default App
