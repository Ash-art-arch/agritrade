import './App.css'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage'
import CartProvider from './providers/cartProvider'
import Layout from './Layout'

function App() {
  return (
    <CartProvider>

    <div className='w-screen h-screen '>
        <Routes>
          <Route path='/' element={<Layout/>}>

          <Route path='/' element={<Homepage/>}/>
          <Route path='/products' element={<ProductPage/>}/>
          </Route>
        </Routes>
    </div>
    </CartProvider>
  )
}

export default App
