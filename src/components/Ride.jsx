import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import RideCard from './RideCard'

const Ride = ({}) => {

   const [rides, setRides] = useState([])
    const {categoryName} = useParams()

    useEffect(()=>{
      const getRideData = async () => {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/rides`)
        console.log(response.data)
 
        const matchedCategories = (response.data).filter((ride)=>((ride.category)&&(ride.category).toString() === (categoryName).toString()))
        setRides(matchedCategories)

      }

      getRideData()

    },[categoryName])

  return (
    <>
  <h2>{categoryName}</h2>

  {
    rides.map((ride)=>(
    <RideCard ride={ride}/>
  ))
  }
    </>
  )
}
export default Ride

