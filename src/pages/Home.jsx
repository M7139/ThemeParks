import RideList from '../components/RideList'

const Home = () => {
  return (
    <div className="home">
      <div>
        <img src="/images/" alt="logo" id="logo" />
      </div>
      <div>
        <h1>Theme Parks</h1>
        <RideList />
      </div>
    </div>
  )
}

export default Home
