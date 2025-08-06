import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { SearchRide } from '../services/RideServices'
import { Link } from 'react-router-dom'

const SearchResults = () => {
  const { search_id } = useParams()
  const [results, setResults] = useState([])

  useEffect(() => {
    const getSearch = async () => {
      try {
        const results = await SearchRide(search_id)
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
        <h1 className="category-title">Results for: {search_id}</h1>
        {results ? (
          <div className="category-grid">
            {results.map((ride) => (
              <>
                <Link
                  className="category-card"
                  to={`/category/${ride.category}/${ride._id}`}
                >
                  <div key={ride._id}>
                    <img
                      src={ride.img}
                      alt={ride.title}
                      className="category-image"
                    />
                    <h3>{ride.title}</h3>
                    <h3>Category: {ride.category}</h3>
                  </div>
                </Link>
              </>
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
