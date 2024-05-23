import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './assets/page/HomePage'
import AddProductPage from './assets/page/AddProductPage'
import AddDetailsPage from './assets/page/AddDetailsPage'
import NoteFoundPage from './assets/page/NoteFoundPage'
import Header from './assets/layout/Header'
import Footer from './assets/layout/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/add-product' element={<AddProductPage/>}/>
      <Route path='/product' element={<AddDetailsPage/>}/>
      <Route path='*' element={<NoteFoundPage/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
