import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import SignIn from './pages/SignIn.jsx'
import Addproduct from "./pages/Addproduct.jsx"
import Productsingle from "./pages/Productsingle.jsx"
import CartShopping from "./pages/CartShopping.jsx"
import './index.css'
import Searchpage from './pages/Searchpage.jsx'
import Filterproducts from './pages/Filterproducts.jsx'
import Yourproducts from "./pages/Yourproducts.jsx"
import Updateproduct from './pages/Updateproduct.jsx'
import Offerts from './pages/Offerts.jsx'
import PQRpage from "./pages/PQRpage.jsx"
function App() {
  
  return (
    <>

    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/SignIn' element={<SignIn></SignIn>}></Route>
      <Route path='/Addproduct' element={<Addproduct/>}></Route>
      <Route path='/Productsingle' element={<Productsingle/>}> </Route>
      <Route path='/CartShopping' element={<CartShopping/>}></Route>
      <Route path='/Searchpage' element={<Searchpage/>}></Route>
      <Route path='/Filterproducts' element={<Filterproducts/>}></Route>
      <Route path='/Yourproducts' element={<Yourproducts/>}></Route>
      <Route path='/Updateproduct' element={<Updateproduct></Updateproduct>}></Route>
      <Route path='/Offerts' element={<Offerts></Offerts>}></Route>
      <Route path='/PQRpage' element={<PQRpage/>}></Route>
    </Routes>
    
    </>
  )
}

export default App
