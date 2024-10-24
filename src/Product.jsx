import dogPicture from '/dog.jpg'
import getHeader from './Header'
import ProductForm from './ProductForm'

function Product() {
    return (
      <>
        {getHeader(dogPicture)}
        <ProductForm />
      </>
    );
  }
  
  export default Product;