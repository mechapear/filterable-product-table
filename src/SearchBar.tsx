export default function SearchBar() {
  return (
    <form className="searchBar">
      <input
        className="searchBox"
        type="text"
        placeholder="Search products..."
      />
      <label className="searchOption">
        {' '}
        <input type="checkbox" /> Only show products in stock
      </label>
    </form>
  )
}
