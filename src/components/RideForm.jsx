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
            value={formValues.description}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Category</label>
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
        </div>

        <button type="submit" className="submit-btn">
          Add Ride
        </button>
      </form>
    </div>
  )
}
export default RideForm
