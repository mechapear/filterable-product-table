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
          <th>{PRODUCTS_DATA[i].category}</th>
        </tr>,
      )
    }
    // Add product row
    rows.push(
      <tr>
        <td>{PRODUCTS_DATA[i].name}</td>
        <td>{PRODUCTS_DATA[i].price}</td>
      </tr>,
    )
    prevCategory = PRODUCTS_DATA[i].category
  }
  return rows
}

export default function App() {
  return (
    <>
      <form className="searchBar">
        <input type="text" placeholder="Search" />
        <input type="checkbox" />
        <label>Only show products in stock</label>
      </form>
      <div className="productTable">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>{productRows(PRODUCTS_DATA)}</tbody>
        </table>
      </div>
    </>
  )
}
