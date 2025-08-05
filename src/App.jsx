import { Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import Ride from './components/Ride'
import Category from './pages/Category'
import Home from './pages/Home'

const App = () => {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/category/:categoryName" element={<Ride />} />
        </Routes>
      </main>
    </>
  )
}

export default App
