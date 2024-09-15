import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
