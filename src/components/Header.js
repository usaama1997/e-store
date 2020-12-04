import React from 'react'
import '../styles/Header.css'

import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

import { Link } from 'react-router-dom';

function Header() {

    return (
        <div className= "Header">

            <div className= "Header__Content">

            <Link to= '/'>
            <div className= "Header__Logo"> 
                <img src= '/logo/e-store-logo.png' 
                alt="image_logo"></img>
            </div>
            </Link>

            <div className= "Search__Feild">
                <input type="text" />
            </div>

            <div className= "Search__Icon">
                <SearchIcon />
            </div>
            
        
            
            <div className= "Header__Right">
            <div className= "User__Login"> 
            <small> Hello Guest, </small>
            <br/>
            <strong> Sign in </strong>
            </div>

            <div className= "Returns__Orders"> 
            <strong> Return & <br/>Orders </strong>
            </div>

            <Link to= '/Checkout'>
            <div className= "Cart"> 
            <span>
            <strong>  Cart </strong> {0} <ShoppingBasketIcon />
            </span>
            </div>
            </Link>

            </div>

        </div>
            
        </div>
    )
}

export default Header
