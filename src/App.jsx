import { Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import Ride from './components/Ride'
import Category from './pages/Category'
import Home from './pages/Home'
import RideDetail from "./components/RideDetail"

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
          <Route path="/category/:categoryName/:id" element={<RideDetail/>} />
        </Routes>
      </main>
    </>
  )
}

export default App
