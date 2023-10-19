import './App.css'
import { useState } from 'react'
import ProductTable from './components/ProductTable'
import SearchBar from './components/SearchBar'

export default function App() {
  const [searchText, setSearchText] = useState('')
  const [queryInStock, setQueryInStock] = useState(false)

  return (
    <>
      <div className="boardWrapper">
        <SearchBar
          searchBoxValue={searchText}
          onSearchTextChange={setSearchText}
          checkboxValue={queryInStock}
          onCheckboxChange={setQueryInStock}
        />
        <div className="tableWrapper">
          <ProductTable />
        </div>
      </div>
    </>
  )
}
