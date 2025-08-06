import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import RideCard from './RideCard'

const Ride = ({}) => {
  const [rides, setRides] = useState([])
  const { categoryName } = useParams()

  const getRideData = async () => {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/rides`)
 

    const matchedCategories = response.data.filter(
      (ride) =>
        ride.category && ride.category.toString() === categoryName.toString()
    )
    setRides(matchedCategories)
  }

  useEffect(() => {
    getRideData()
  }, [categoryName])

  return (
    <>
      <h2 className="category-title">{categoryName}</h2>

      <div className="ride-list">
        {rides.map((ride) => (
          <RideCard ride={ride} />
        ))}
      </div>
    </>
  )
}
export default Ride
