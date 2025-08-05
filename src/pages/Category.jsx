import axios from 'axios'
import { useEffect, useState } from 'react'

const Category = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/rides`
        )

        //Simple function to extract unique category
        const uniqueCategories = []

        for (let i = 0; i < response.data.length; i++) {
          const ride = response.data[i]
          const category = ride.category

          if (!uniqueCategories.includes(category)) {
            uniqueCategories.push(category)
          }
        }

        setCategories(uniqueCategories)

        console.log('unique')
        console.log(uniqueCategories)

        console.log('all')
        console.log(response.data)
      } catch (error) {
        console.log(error)
      }
    }

    getCategories()
  }, [])

  return (
    <>
      <h1>All Categories</h1>
      <ul>
        {categories.map((category) => (
          <li>{category}</li>
        ))}
      </ul>
    </>
  )
}

export default Category
