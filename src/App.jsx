import { useState } from 'react'
import './App.css'
import Home from './pages/Home';
import Produtos from './pages/Produtos';
import Sobre from './pages/Sobre';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <nav>
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

        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produtos" element={<Produtos />} />
            <Route path="/sobre" element={<Sobre />} />
          </Routes>
        </Router>

      </header>
    </>
  )
}

export default App
