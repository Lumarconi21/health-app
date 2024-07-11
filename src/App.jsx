import './App.css'
import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './pages/Login'
import Signup from './pages/Signup'
import SafeEatArticle from './pages/SafeEatArticle'
import Contact from './pages/Contact'


function App() {

  const [theme, setTheme] = useState('light')

  const toggleTheme = event => {
    setTheme(event.target.value)
  }

  return (
    <section className={'App ' + theme}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/safeeat24' element={<SafeEatArticle />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />

      </ Routes>
      <select onChange={toggleTheme}>
        <option value="light"> ☼</option>
        <option value="dark"> ☽ </option>
      </select>
      <Footer />
    </section>
  )
}

export default App
