import './App.css'
import CheckoutPage from './pages/checkout/CheckoutPage'
import HomePage from './pages/home/HomePage'
import { Routes, Route } from 'react-router'
import OrdersPage from '../../ecommerce-project/src/pages/orders/OrdersPage'
import TrackingPage from './pages/TrackingPage'
import { useEffect, useState } from 'react'
import axios from 'axios'
function App() {
  const [cart, setCart] = useState([]);


  useEffect(() => {
    const fetchAppData = async () => {
     const response= axios.get(`/api/cart-items?expand=product`)
       setCart(response.data)
     }
    fetchAppData();
  }, [])



  return (
    <>
      <Routes>
        <Route index element={<HomePage cart={cart} />} />
        <Route path='checkout' element={<CheckoutPage cart={cart} />} />
        <Route path='orders' element={<OrdersPage cart={cart} />} />
        <Route path='tracking' element={<TrackingPage />} />

      </Routes>


    </>
  )
}

export default App
