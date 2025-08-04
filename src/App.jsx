import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Ride from './components/Ride'
import RideDetail from './components/RideDetail'
import Category from './pages/Category'
import Home from './pages/Home'
import { Route, Router, Routes } from 'react-router-dom'
import RideForm from './components/RideForm'

const App = () => {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rideform" element={<RideForm />} />
        </Routes>
      </main>
    </>
  )
}

export default App
