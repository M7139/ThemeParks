import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/category">Categories</NavLink>
        <NavLink to="/rideform">Add Form</NavLink>
      </nav>
    </>
  )
}
export default Nav
