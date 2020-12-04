import React from 'react'
import '../styles/Home.css'
import Product from './Product'

function Home() {
    return (
        <div className= "Home">

            <div className="Home__Row">

                <Product 
                id = {1}
                title = "The 3 mistakes of my life"
                price = {499}
                image = 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR3JKvzzXTA8k4EERqd3sNjXamoy5i5rS6IrCuYrkbpq2qXyExe'
                ratings = {5}
                />

                <Product 
                id = {2}
                title = "iphone 12"
                price = {111599}
                image = 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6009/6009782_sd.jpg'
                ratings = {4}
                />

                <Product 
                id = {3}
                title = "Mi Band 4"
                price = {2499}
                image = 'https://www.traininn.com/f/13698/136980486/xiaomi-mi-band-3.jpg'
                ratings = {5}
                />
                
            </div>


            <div className="Home__Row">

            <Product 
                id = {4}
                title = "Primus SS 800W Electric Juicer"
                price = {5999   }
                image = 'https://kuvings.co.za/wp-content/uploads/2019/08/02-02_whloe_imgew.png'
                ratings = {5}
            />

            <Product 
                id = {5}
                title = "Razer Laptop"
                price = {89999}
                image = 'https://technosports.co.in/wp-content/uploads/2019/05/wK93st4l.jpg'
                ratings = {5}
            />
                
            </div>

            <div className="Home__Row">

            <Product 
                id = {6}
                title = "LG UHD TV"
                price = {24999}
                image = 'https://i.gadgets360cdn.com/products/large/lg-55-db-1200x800-1563191854.jpg'
                ratings = {5}
            />
            </div>

        </div>
    )
}

export default Home
