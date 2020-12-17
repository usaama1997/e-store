import React from 'react'
import '../styles/Checkout.css'
import Subtotal from './Subtotal'

import { useStateValue } from "./StateProvider";
import CheckoutProduct from './CheckoutProduct'


function Checkout() {

    const [{ basket, user }, dispatch] = useStateValue();

    return (
        <div className= "Checkout">

            <div className= "Checkout__Left">
               <div className = 'Checkout__title'> Your Shopping List Basket </div>
               {basket.map(item => (
                <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              ratings={item.ratings}
            />
          ))}
            </div>


            <div className = "Checkout__Right">
                <Subtotal />
            </div>

        </div>
    )
}

export default Checkout
