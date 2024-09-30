import React from 'react';
import { useState } from "react";

const ProductForm = () => {
    const productsList = [
        { productName: 'tv', productPrice: 789 },
        { productName: 'telephone', productPrice: 240 },
        { productName: 'computer', productPrice: 1000 }
    ];  
    
    const [quantity, setQuantity] = useState(0);

    return (
        <>
            <h3>Select product</h3>
            <label>Product: </label>
            <select>
                {productsList.map(product => (
                    <option key={product.productName} value={product.productName}>
                        {product.productName} ({product.productPrice}€) {/* Shows on UI */}
                    </option>
                ))}
            </select><br></br>
            <label>Quantity: </label>
            <button onClick={() => setQuantity(quantity - 1)}>-</button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)}>+</button>
        </>
    );
}

export default ProductForm;
