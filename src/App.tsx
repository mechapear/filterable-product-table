import './App.css'
import { Products, PRODUCTS_DATA } from './domain/products.ts'

function productRows(PRODUCTS_DATA: Products[]) {
  const rows = []
  let prevCategory = ''

  for (let i = 0; i < PRODUCTS_DATA.length; i++) {
    // Add category row if it's a new category
    if (PRODUCTS_DATA[i].category !== prevCategory) {
      rows.push(
        <tr>
          <th className="categoryRow" colSpan={2}>
            {PRODUCTS_DATA[i].category}
          </th>
        </tr>,
      )
    }
    // Add product row
    rows.push(
      <tr>
        <td className="productRow">{PRODUCTS_DATA[i].name}</td>
        <td className="productRow">{PRODUCTS_DATA[i].price}</td>
      </tr>,
    )
    prevCategory = PRODUCTS_DATA[i].category
  }
  return rows
}

export default function App() {
  return (
    <>
      <div className="boardWrapper">
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
        <div className="tableWrapper">
          <table className="productTable">
            <thead>
              <tr>
                <th className="headerRow">Name</th>
                <th className="headerRow">Price</th>
              </tr>
            </thead>
            <tbody>{productRows(PRODUCTS_DATA)}</tbody>
          </table>
        </div>
      </div>
    </>
  )
}
