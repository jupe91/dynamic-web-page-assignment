import React from 'react';

class ProductForm extends React.Component {
    
    render() {
    const productsList = [
        {productName: 'tv', productPrice: 789},
        {productName: 'telephone', productPrice: 240},
        {productName: 'computer', productPrice: 1000}
    ];
    

        return (
            <>
            <h3>Select product</h3>
            <label>Product: </label>
            <select>
                {productsList.map( product => (
                    <option value={product.productName}>
                        {product.productName} ({product.productPrice}€)
                    </option>
                ))}    
            </select>
            </>
        );
    }
}

export default ProductForm;