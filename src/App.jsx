import './index.css'
import Product from './Product'
import OpenData from './OpenData'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route index element={<Product />} />
          <Route path="opendata" element={<OpenData />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
