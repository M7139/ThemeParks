import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Client from '../services/api' // ✅ Fixed path

const RideForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    img: ''
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await Client.post('/rides', formData)
      alert('Ride created successfully!')
      navigate('/') // or wherever you want to redirect after
    } catch (error) {
      console.error('Error creating ride:', error)
      alert('Failed to create ride.')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Ride Title"
        required
      />
      <input
        type="text"
        name="category"
        value={formData.category}
        onChange={handleChange}
        placeholder="Category"
        required
      />
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
      />
      <input
        type="text"
        name="img"
        value={formData.img}
        onChange={handleChange}
        placeholder="Image URL"
      />
      <button type="submit">Add Ride</button>
    </form>
  )
}

export default RideForm
