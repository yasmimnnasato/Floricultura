import { useState } from 'react'
import './App.css'
import Home from './Pages/Home';
import Produtos from './Pages/Produtos';
import Sobre from './Pages/Sobre';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <nav>
          <div logo>
         <img src="C:\Users\adeni\Downloads\image-removebg-preview.png"/>
          </div>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/produtos">Produtos</a>
            </li>
            <li>
              <a href="/sobre">Sobre</a>
            </li>
          </ul>
        </nav>
      
      </header>  <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produtos" element={<Produtos />} />
            <Route path="/sobre" element={<Sobre />} />
          </Routes>
        </Router>

    </>
  )
}

export default App
