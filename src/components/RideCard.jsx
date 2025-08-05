import { Link } from "react-router-dom"
const RideCard = ({ride})=> {
    
    return(
        <>
        <Link to={ride._id}>
        <h2>{ride.title}</h2>
        <h2>{ride.category}</h2>
        <br />
        </Link>
        
    </>)
}

export default RideCard