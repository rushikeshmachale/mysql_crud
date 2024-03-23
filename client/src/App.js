import logo from './logo.svg';
import './App.css';
import Products from './components/Products';
import Catagories from './components/Catagories';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import AllProducts from './components/AllProducts';
import Update from './components/Update';
import UpdateProduct from './components/UpdateProduct';
import AddProduct from './components/AddProduct';
import AddCatagory from './components/AddCatagory';
function App() {
  return (
   <BrowserRouter>
   <Routes>
   <Route path='/' element={<AllProducts/>}/>
   <Route path='/catagories' element={<Catagories/>}/>
   <Route path='/products' element={<Products/>}/>
   <Route path='/addp' element={<AddProduct/>}/>
   <Route path='/addc' element={<AddCatagory/>}/>
   <Route path='/update/:id' element={<Update/>}/>
   <Route path='/updatep/:id' element={<UpdateProduct/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
