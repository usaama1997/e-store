import React from 'react'
import '../styles/Product.css'

import { useStateValue } from "./StateProvider";

function Product({id,title,price,image,ratings}) {

   const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        ratings: ratings,
      },
    });
  };

    return (
        <div className= "Product">

            <div className= "Product__Info">
                {title}
            </div>

            <div className= "Product__Image">
                <img src={image} alt= "image"></img>
            </div>

            <div className= "Product__Price">
                <small>Rs. </small>
                {price}
            </div>

            <div className= "Product__Ratings">
                { Array(ratings).fill().map((_,i)=> ('⭐')) }
            </div>

            <div className= "Product__Cart">
                <button onClick={addToBasket}> Add to Cart </button>
            </div>

        </div>
    )
}

export default Product
