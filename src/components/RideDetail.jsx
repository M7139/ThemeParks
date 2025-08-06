import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const RideDetail = () => {
  const [ride, setRide] = useState()
  const { id } = useParams()

  const getSelectedRide = async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/rides/${id}`
    )
    setRide(response.data)
    console.log(response.data)
  }

  useEffect(() => {
    console.log(id)
    getSelectedRide()
  }, [id])

  return (
    <>
      {ride ? (
        <>
          <div className="ride-detail">
            <img src={ride.img} alt={ride.title} className="ride-image" />
            <h2 className="ride-title">{ride.title}</h2>
            <p className="ride-category">
              <strong>Category:</strong> {ride.category}
            </p>
            <p className="ride-description">{ride.description}</p>
          </div>
        </>
      ) : (
        <p>...</p>
      )}
    </>
  )
}

export default RideDetail
