import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { SearchRide } from '../services/RideServices'

const SearchResults = () => {
  const { search_id } = useParams()
  const [results, setResults] = useState([])

  useEffect(() => {
    // setResults(SearchRide(search_id))
    const getSearch = async () => {
      try {
        const results = await SearchRide(search_id)
        console.log('results: ' + results)
        setResults(results)
      } catch (error) {
        console.log(error)
      }
    }
    getSearch()
  }, [])

  return (
    <>
      <div>
        <h1>Results for: "{search_id}"</h1>
        {results.length > 0 ? (
          <div className="searchResults">
            {results.map((ride) => (
              <div key={ride._id}>
                <h3>{ride.title}</h3>
                <h3>Category: {ride.category}</h3>
              </div>
            ))}
          </div>
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </>
  )
}

export default SearchResults
