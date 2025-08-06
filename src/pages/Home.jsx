import { SearchRide } from '../services/RideServices'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Search from '../components/Search'

const Home = () => {
  const [searchValue, setSearchValue] = useState('')
  
  const navigate = useNavigate()

  const handleChange = (e) => {
    setSearchValue(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const results = await SearchRide(searchValue)
    navigate(`/search/${searchValue}`)
  }

  return (
    <div className="home">
      <div className="welcome-message">
        <h1>Welcome to Our Theme Park Rides Display Collection</h1>
        <h2>Discover the most thrilling attractions from around the world</h2>
      </div>
      <div className="home-search">
        <Search
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          value={searchValue}
        />
      </div>
    </div>
  )
}

export default Home
