import {BrowserRouter as Router, Routes, Route} 
from 'react-router'
import './App.css';

import Nav from "./components/NavBar"
import Games from './pages/Games'
import Customers from './pages/Customers'
import HomePage from './pages/HomePage';

function App() {

  return (
    <>
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Customers" element={<Customers/>}/>
        <Route path="/Games" element={<Games/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
