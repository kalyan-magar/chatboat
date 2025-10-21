import React, { useState, useEffect } from 'react'
import axios from 'axios'

import './checkout-header.css'
import './checkout.css'
import Header from '../../components/Header'
import { formatMoney } from '../../utils/money'
import dayjs from 'dayjs'
import OrderSummary from './OrderSummary'

const CheckoutPage = ({ cart }) => {
  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState(null);

  useEffect(() => {
    axios.get(`/api/delivery-options?expand=estimatedDeliveryTime`)
      .then((res) => {
        setDeliveryOptions(res.data)
      })

    axios.get(`/api/payment-summary`)
      .then((res) => {
        setPaymentSummary(res.data)
      })
  }, [])

  return (
    <>
      <title>Checkout Page</title>
      <Header cart={cart} />

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <OrderSummary deliveryOptions={deliveryOptions} cart={cart} />

          <paymentSummary paymentSummary={paymentSummary} />
        </div>
      </div>
    </>
  )
}

export default CheckoutPage