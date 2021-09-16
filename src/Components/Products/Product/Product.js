import React from 'react'
import './Product.css'


function Product({product,onAddToCart}) {
    return (
        <div className="product-item">
            <div className="product-image"><img src={product.media.source} alt="" /></div>
            <h3>{product.name}</h3>
            <div>Price : {product.price.formatted_with_symbol}</div>
            <div className="product-desc-wrapper">
            <span className="product-desc" dangerouslySetInnerHTML={{__html:product.description}}/>
            </div>
            {/* Description - {product.description}</em> */}
            <button className="add-to-cart-button" onClick={()=>onAddToCart(product.id,1)}>Add To Cart</button>
        </div>
    )
}

export default Product
