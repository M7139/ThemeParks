import axios from 'axios'
import { useEffect, useState } from 'react'
import Ride from './Ride'

const RideList = () => {
  const [rides, setRides] = useState([])

  const getRides = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/rides`)
      setRides(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getRides()
  }, [])

  return (
    <div>
      {rides.map((ride) => (
        <Ride ride={ride} />
      ))}
    </div>
  )
}

export default RideList
