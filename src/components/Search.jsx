const Search = ({ handleSubmit, handleChange, value }) => {
  return (
    <form onSubmit={handleSubmit} className="searchbar">
      <input
        type="text"
        name="search"
        value={value}
        placeholder="Search Rides"
        onChange={handleChange}
      />
      {/* <button type="submit">Search</button> */}
    </form>
  )
}
export default Search
