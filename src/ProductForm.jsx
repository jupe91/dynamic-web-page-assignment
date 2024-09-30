import React from 'react';

const ProductForm = () => {
    const productsList = [
        { productName: 'tv', productPrice: 789 },
        { productName: 'telephone', productPrice: 240 },
        { productName: 'computer', productPrice: 1000 }
    ];

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
            </select>
        </>
    );
}

export default ProductForm;
