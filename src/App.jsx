import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Home from './Paginas/Home'
import Details from './Paginas/Details'


function App() {

  return (
    <div className="min-w-[380px] lg:w-[800px] m-auto h-full">
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={<Home/>}
          />

          <Route
            path='/details/:id'
            element={<Details/>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
