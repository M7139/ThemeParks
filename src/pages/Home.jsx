import { SearchRide } from '../services/RideServices'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Search from '../components/Search'

const Home = () => {
  const [searchValue, setSearchValue] = useState('')
  // const [searchResult, setSearchResult] = useState([])
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
    <>
      <h1>Home</h1>
      <Search
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        value={searchValue}
      />
    </>
  )
}
export default Home
