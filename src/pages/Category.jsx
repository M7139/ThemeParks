import { Link } from 'react-router-dom'

import axios from 'axios'
import { useEffect, useState } from 'react'
const categoryImages = {
  'Pendulum Ride':
    'https://www.zamperla.com/assets/news/zpl_news-discovery-16.jpg',
  'Water Ride':
    'https://mack-rides.com/wp-content/uploads/2016/08/watercoaster_pano.jpg',
  Dodgems:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxV48y-ZqVJ2s1TD2blIIT-CHYPscqMMptcw&s',
  'Merry-Go-Round':
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsi7UI4GNLTA2XHv3pDpVPtlIVyNnEP4RuAw&s',
  'Drop Tower':
    'https://adventureisland.co.uk/wp-content/uploads/2024/10/Skydrop-0.jpg',
  'Ferris Wheel':
    'https://blog.beachboardwalk.com/wp-content/uploads/2024/06/ndmblog070_img001_20240502_DreamWheel.jpg',
  'Swing Ride':
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP4nTE_bVxirrvNayyG98c9TaRaxM-bKou5w&s',
  'Train Ride':
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNJAPP3W0XM1QKHYpOQePnyy_5dUc2QTCrCg&s',
  Rollercoaster:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNJAPP3W0XM1QKHYpOQePnyy_5dUc2QTCrCg&s'
}

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

      <div className="category-grid">
        {categories.map((category) => (
          <>
            <Link
              to={`/category/${category}`}
              key={category}
              className="category-card"
            >
              {categoryImages[category] && (
                <img
                  src={categoryImages[category]}
                  alt={category}
                  className="category-image"
                />
              )}
              <h3>{category}</h3>
            </Link>
          </>
        ))}
      </div>
    </>
  )
}

export default Category
