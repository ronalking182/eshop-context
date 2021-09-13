import "./ProductCart.css"
import React, { useContext } from 'react'
import Rating from "./Rating"
import CartContext from "../Context/Cart/CartContext"

// import formatCurrency from "format-currency"

export default function ProductCard({product}) {
    // let opts ={format: "%s%v", Symbol: "$"}
    const {addToCart}=useContext(CartContext)
    return (
        <div className="productCard__wrapper">
            <div>
                <img  className="productCard__img " src={product.image} alt={product.name} />
                <h4>{product.name}</h4>
                <div className="ProductCard__price"><h5>${product.price}</h5></div>
                <div className="ProductCard__Rating">
                    <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
                </div>
                <button className="ProductCard__button" onClick={()=>addToCart(product)}>Add to Cart</button>
            </div>
        </div>
    )
}
