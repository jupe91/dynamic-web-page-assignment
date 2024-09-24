import './App.css'
import dogPicture from '/dog.jpg'
import getHeader from './Header'
import ProductForm from './ProductForm'

function App() {

  return (
    <>
      {getHeader(dogPicture)}
      <ProductForm/>
    </>
  )
}

export default App
