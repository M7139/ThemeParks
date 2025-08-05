import { useNavigate } from 'react-router-dom'
import { CreateRide } from '../services/RideServices'
import { useState } from 'react'

const RideForm = () => {
  let navigate = useNavigate()

  const initialState = {
    title: '',
    category: '',
    description: '',
    img: ''
  }

  const [formValues, setFormValues] = useState(initialState)

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    await CreateRide({
      title: formValues.title,
      category: formValues.category,
      description: formValues.description,
      img: formValues.img
    })
    setFormValues(initialState)
    navigate(`/category/${formValues.category}`)
  }

  return (
    <div>
      <h1>Add a New Ride!</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Name</label>
        <input
          type="text"
          name="title"
          placeholder="Add the ride name"
          onChange={handleChange}
          value={formValues.title}
          required
        />

        <label htmlFor="img">img</label>
        <input
          type="text"
          name="img"
          placeholder="Add the image link"
          onChange={handleChange}
          value={formValues.img}
          required
        />

        <input
          type="text"
          name="description"
          placeholder="Add description"
          onChange={handleChange}
          value={formValues.description}
        />

        <select name="category" id="category" onChange={handleChange}>
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
