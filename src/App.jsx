import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import dogPicture from '/dog.jpg'

function App() {

  return (
    <>
      {getHeader(dogPicture)}
    </>
  )

  function getHeader(image) {
    return <h1>
      <img src={image} id='headerImage' alt="Dog" />
      Welcome to product page!
    </h1>
  }
}

export default App
