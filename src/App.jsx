import './index.css'
import dogPicture from '/dog.jpg'
import getHeader from './Header'
import ProductForm from './ProductForm'
import OpenData from './OpenData'

function App() {

  return (
    <>
      {getHeader(dogPicture)}
      <ProductForm/>
      <OpenData/>
    </>
  )
}

export default App
