import './App.css'
import dogPicture from '/dog.jpg'
import getHeader from './Header'

function App() {

  return (
    <>
      {getHeader(dogPicture)}
    </>
  )
}

export default App
