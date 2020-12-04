import React from 'react'
import '../styles/Product.css'

function Product({id,title,price,image,ratings}) {
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
                <button> Add to Cart </button>
            </div>

        </div>
    )
}

export default Product
