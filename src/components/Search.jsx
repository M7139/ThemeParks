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
      
    </form>
  )
}
export default Search
