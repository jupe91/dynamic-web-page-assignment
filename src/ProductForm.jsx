import React from 'react';
import { useState } from "react";
import OrderInfo from './OrderInfo';

const ProductForm = () => {
    //List of products with their name and price
    const productsList = [
        { productName: 'tv', productPrice: 789 },
        { productName: 'telephone', productPrice: 240 },
        { productName: 'computer', productPrice: 1000 }
    ];  
    
    // State handling for selected product and quantity
    const [selectedProduct, setSelectedProduct] = useState(productsList[0]);
    const [quantity, setQuantity] = useState(0);

    return (
        <div>
            <h3>Select product</h3>
            {/* Dropdown to select a product, updating the selectedProduct state based on user selection */}
            <label>Product: </label>
            <select onChange={(e) => {
                const product = productsList.find(p => p.productName === e.target.value);
                setSelectedProduct(product);
            }}>
                {productsList.map(product => (
                    <option key={product.productName} value={product.productName}>
                        {product.productName} ({product.productPrice}€) {/* Shows product name and price */}
                    </option>
                ))}
            </select><br></br>
            {/*Quantity control*/}
            <label>Quantity: </label>
            <button onClick={() => setQuantity(Math.max(quantity  - 1, 0))}>-</button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)}>+</button>
            {/*Shows order information*/}
            <OrderInfo productName={selectedProduct.productName}
            productPrice={selectedProduct.productPrice}
            quantity={quantity}></OrderInfo>
        </div>
    );
}

export default ProductForm;
