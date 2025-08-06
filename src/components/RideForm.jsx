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
    <div className="form-container">
      <h1>Add New Ride</h1>
      <form onSubmit={handleSubmit} className="ride-form">
        <div className="form-group">
          <label>Ride Name</label>
          <input
            type="text"
            name="title"
            placeholder="Enter the name of the ride"
            value={formValues.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Image URL</label>
          <input
            type="text"
            name="img"
            placeholder="Enter the image link"
            value={formValues.img}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <input
            type="text"
            name="description"
            placeholder="Add a describtion"
            value={formValues.description}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Category</label>
          <select name="category" id="category" onChange={handleChange}>
            <option value="Pendulum Ride">Pendulum Ride</option>
            <option value="Water Ride">Water Ride</option>
            <option value="Dodgems">Dodgems</option>
            <option value="Merry-Go-Round">Merry-Go-Round</option>
            <option value="Drop Tower">Drop Tower</option>
            <option value="Ferris Wheel">Ferris Wheel</option>
            <option value="Swing Ride">Swing Ride</option>
            <option value="Train Ride">Train Ride</option>
            <option value="Rollercoaster">Rollercoaster</option>
          </select>
        </div>

        <button type="submit" className="submit-btn">
          Add Ride
        </button>
      </form>
    </div>
  )
}
export default RideForm
