import Client from './api'

export const GetPosts = async () => {
  try {
    const res = await Client.get('/rides')
    return res.data
  } catch (error) {
    throw error
  }
}

export const CreateRide = async (data) => {
  try {
    const res = await Client.post('/rides', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const SearchRide = async (data) => {
  try {
    const res = await Client.get(`/rides/search/${data}`)
    return res.data
  } catch (error) {
    console.log(error)
  }
}
