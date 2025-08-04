import { useNavigate } from 'react-router-dom'

const RideForm = () => {
  return (
    <div>
      <h1>Add a New Ride!</h1>
      <form>
        <input type="text" name="name" placeholder="Add the ride name" />
        <input type="text" name="img" placeholder="Add the image link" />
        <input type="text" name="description" placeholder="Add description" />

        <select name="category" id="category">
          <option value="pendulum">Pendulum Ride</option>
          <option value="waterRide">Water Ride</option>
          <option value="dodgems">Dodgems</option>
          <option value="merrygo">Merry-Go-Round</option>
          <option value="dropTower">Drop Tower</option>
          <option value="ferrisWheel">Ferssi Wheel</option>
          <option value="dodgems">Dodgems</option>
          <option value="swingRide">Swing Ride</option>
          <option value="train">Train Ride</option>
        </select>

        <button>Submit</button>
      </form>
    </div>
  )
}
export default RideForm
