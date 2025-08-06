import { Link } from 'react-router-dom'
const RideCard = ({ ride }) => {
  return (
    <>
      <Link to={ride._id}>
        <div className="ride-card">
          <img src={ride.img} alt={ride.title} className="ride-image" />
          <h2>{ride.title}</h2>
        </div>
        <br />
      </Link>
    </>
  )
}

export default RideCard
