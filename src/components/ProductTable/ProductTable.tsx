import { PRODUCTS_DATA } from '../../domain/products.ts'

export type ProductTableProps = {
  searchBoxValue: string
  checkboxValue: boolean
}

function getFilterProductList(searchBoxValue: string, checkboxValue: boolean) {
  const filteredProductListByName = searchBoxValue
    ? PRODUCTS_DATA.filter((item) =>
        item.name.toLowerCase().includes(searchBoxValue.toLowerCase()),
      )
    : PRODUCTS_DATA

  // filteredProductListByStocked
  return checkboxValue
    ? filteredProductListByName.filter((item) => item.stocked === checkboxValue)
    : filteredProductListByName
}

export default function ProductTable({
  searchBoxValue,
  checkboxValue,
}: ProductTableProps) {
  const filteredProductList = getFilterProductList(
    searchBoxValue,
    checkboxValue,
  )

  const rows: JSX.Element[] = []

  filteredProductList.forEach((item, index) => {
    const prevCategory = filteredProductList[index - 1]?.category ?? ''
    // Add category row if it's a new category
    if (item.category !== prevCategory) {
      rows.push(
        <tr key={item.category}>
          <th className="categoryRow" colSpan={2}>
            {item.category}
          </th>
        </tr>,
      )
    }
    // Add product item row
    rows.push(
      <tr key={item.name}>
        <td className="productRow">{item.name}</td>
        <td className="productRow">{item.price}</td>
      </tr>,
    )
  })

  return (
    <table className="productTable">
      <thead>
        <tr>
          <th className="headerRow">Name</th>
          <th className="headerRow">Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )
}
