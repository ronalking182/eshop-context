import React from 'react'
import "./HomeScreen.css"
import products from "../Data"
import ProductCard from "../Components/ProductCard"

export default function HomeScreen() {
    return (
            <div className='products__wrapper'>
                {products.map((product) => (
                <ProductCard key={product.id} product={product} />
                ))}
            </div>
          )
}
