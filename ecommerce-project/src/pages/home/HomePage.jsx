import React, { useEffect, useState } from 'react'
import './HomePage.css'
import Header from '../../components/Header'
import axios from "axios"
import { formatMoney } from '../../utils/money'
import ProductsGrid from './ProductsGrid'

const HomePage = ({ cart }) => {
  const [products, setProducts] = useState([]);


  useEffect(async () => {
    const getHomeData= async ()=>{
    const response = await axios.get(`/api/products`)
    setProducts(response.data);
    }

    getHomeData();
  }, []);

  return (
    <>
      <title>Ecommerce Project</title>
      <Header cart={cart} />

      <div className="home-page">
        <ProductsGrid products={products} />

      </div>
    </>
  )

}

export default HomePage