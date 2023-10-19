export type SearchBarProps = {
  searchBoxValue: string
  onSearchTextChange: (value: string) => void
  checkboxValue: boolean
  onCheckboxChange: (value: boolean) => void
}

export default function SearchBar({
  searchBoxValue,
  onSearchTextChange,
  checkboxValue,
  onCheckboxChange,
}: SearchBarProps) {
  return (
    <form className="searchBar">
      <input
        className="searchBox"
        type="text"
        placeholder="Search products..."
        value={searchBoxValue}
        onChange={(event) => onSearchTextChange(event.target.value)}
      />
      <label className="searchOption">
        {' '}
        <input
          type="checkbox"
          checked={checkboxValue}
          onChange={(event) => onCheckboxChange(event.target.checked)}
        />{' '}
        Only show products in stock
      </label>
    </form>
  )
}
