import { Link } from 'react-router-dom'
const RideCard = ({ ride }) => {
  return (
    <>
      <Link to={ride._id}>
        <div className="ride-card">
          <h2>{ride.title}</h2>
          <img src={ride.img} alt={ride.title} className="ride-image" />
        </div>
        <br />
      </Link>
    </>
  )
}

export default RideCard
