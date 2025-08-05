import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"

const RideDetail = () => {

  const [ride,setRide] = useState()
  const {id} = useParams()

  
  const getSelectedRide = async  () => {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/rides/${id}`)
    setRide(response.data)
    console.log(response.data)



  }

  

useEffect(()=>{
  console.log(id)
  getSelectedRide()
    
  },[id])
  
  return(<>

  {ride ?(
    <>
    <li>{ride.title}</li>
    <li>{ride.category}</li>
    <li>{ride.description}</li>
  </>) : (<p>...</p>)
  



}

  </>)
}

export default RideDetail


