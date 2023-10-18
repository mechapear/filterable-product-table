import './App.css'
import ProductTable from './components/ProductTable'
import SearchBar from './components/SearchBar'

export default function App() {
  return (
    <>
      <div className="boardWrapper">
        <SearchBar />
        <div className="tableWrapper">
          <ProductTable />
        </div>
      </div>
    </>
  )
}
